<template>
    <view>
        <view class="mui-content">
            <view class="comment-empty" v-if="!list.length">
                <view class="comment-empty-content">
                    <view class="comment-wait-img">
                        <image class="image" mode="aspectFill" src="/static/images/commentwait@3x.png" alt=""/>
                    </view>
                    <view class="span">静静等你来评论~</view>
                    <view class="commeny-button" @tap.stop.prevent="newAddcomment">评论</view>
                </view>
            </view>
            <RefreshList
                    ref="RefreshList"
                    class="refreshListWrapper"
                    v-model="list"
                    :api="'article/comments'"
                    :requestData="prevOtherData"
                    @prevSuccessCallback="prevSuccessCallback"
            >
                <view class="container-list-discuss container-list-marginTop">
                    <view class="message">
                        <template v-for="(item, index) in list">
                            <view class="list-item-discuss"  @tap.stop.prevent="clickComment(item, list)" :key="index" hover-class="hoverClass" :hover-stop-propagation="true">
                                <view class="lidL" @tap.stop.prevent="toResume(item.owner.uuid)">
                                    <image mode="aspectFill" v-if="item.owner.avatar" :src="item.owner.avatar"/>
                                    <text class="iconfont icon-zhuanjiabiaozhishixin"></text>
                                </view>
                                <view class="lidR">
                                    <view class="lidR1">{{ item.owner.name }}</view>
                                    <view class="lidR2 textToLink" v-html="textToLink(item.content)"></view>
                                    <view class="lidR3">
                                        <view class="lidRtime"> {{item.created_at | timeago}}</view>
                                        <view class="lidROption" @tap.stop.prevent="vote(item)" :class="{active:item.is_supported}" hover-class="hoverClass" :hover-stop-propagation="true">
                                            <text class="iconfont icon-zan"></text><text class="span" v-if="item.supports">{{item.supports}}</text>
                                        </view>
                                    </view>
                                </view>
                            </view>

                            <view class="list-item-discuss-childrens" v-if="item.children.length">
                                <DiscussReplay
                                        v-if="item.children.length"
                                        :children="item.children"
                                        :parentOwnerName="item.owner.name"
                                        :isShow="true"
                                        @comment="clickComment"
                                        @vote="vote"
                                ></DiscussReplay>
                            </view>

                            <view class="line-river-after" v-if="index !== list.length-1"></view>

                        </template>
                    </view>
                </view>
            </RefreshList>
        </view>
        <commentTextarea ref="ctextarea" @sendMessage="sendMessage" :alwaysshow="true"
                         @onTap="onCommentTap"
        ></commentTextarea>

        <AlertTextarea ref="AlertTextarea"></AlertTextarea>
    </view>
</template>

<script>
  import ui from '@/lib/ui'
  import RefreshList from '@/components/iw-list/iw-list.vue'
  import { postRequest } from '@/lib/request'
  import { getLocalUserInfo } from '@/lib/user'
  import { getIndexByIdArray } from '@/lib/array'
  import commentTextarea from '@/components/iw-comment-textarea/iw-comment-textarea.vue'
  import Vue from 'vue'
  import { textToLinkHtml, transferTagToLink } from '@/lib/dom'
  import DiscussReplay from '@/components/iw-discover/discuss-reply.vue'
  import userAbility from '@/lib/userAbility'
  import AlertTextarea from '@/components/iw-comment-alerttextarea/iw-comment-alerttextarea.vue'
  import { showComment } from '@/lib/comment'

  export default {
    data () {
      return {
        pageOption: {},
        page: 1,
        mode: '最新',
        order_by: 1,
        slug: '',
        id: '',
        list: [],
        commentTarget: null,
        delCommentId: 0,
        delList: null,
        totalNumber: [],
        totalData: ''
      }
    },
    components: {
      DiscussReplay,
      commentTextarea,
      RefreshList,
      AlertTextarea
    },
    computed: {
      prevOtherData () {
        this.slug = this.pageOption.slug

        return {
          order_by: this.order_by,
          submission_slug: this.slug
        }
      }
    },
    onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
        this.pageOption = option
    },
    mounted: function () {
      this.comment(0, '', this.list)
    },
    methods: {
      onCommentTap () {
        this.newAddcomment()
      },
      refreshPageData () {
        this.$refs.ctextarea.refreshPageData()
        this.comment(0, '', this.list)
      },
      newAddcomment () {
        this.commentfoucs()
      },
      prevSuccessCallback () {
        this.totalNumber = this.$refs.RefreshList.getResponse()
        this.totalData = this.totalNumber.data.total
      },
      toResume (uuid) {
        if (!uuid) {
          return false
        }
        uni.navigateTo({url: '/share/resume?id=' + uuid + '&goback=1' + '&time=' + (new Date().getTime())})
      },
      sendMessage (message) {
        this.id = this.pageOption.id
        this.commentTarget = message.commentData

        var parentId = this.commentTarget.parentId

        var params = Object.assign({
          body: message.content,
          content: message.content,
          parent_id: parentId,
          mentions: message.noticeUsers,
          submission_id: this.id
        })
        postRequest(`article/comment-store`, params).then(response => {
          var code = response.code

          if (code === 6108) {
            userAbility.inviteJoinInGroup(this.$parent, response.data.group_id)
            return
          }

          if (code !== 1000) {
            ui.alert(response.message)
            return
          }

          var data = response.data

          ui.toast(response.message)

          this.prependItem(
            data.id,
            message.content,
            data.created_at,
            parentId
          )

          this.$refs.ctextarea.finish()
        })
      },
      resetList () {
        this.page = 1
        this.$refs.RefreshList.refreshPageData(this.prevOtherData)
      },
      switchMode () {
        if (this.mode === '最新') {
          this.order_by = 2
          this.mode = '最赞'
        } else {
          this.order_by = 1
          this.mode = '最新'
        }
        this.resetList()
      },
      textToLink (text) {
        return transferTagToLink(textToLinkHtml(' ' + text))
      },
      timeago (time) {
        let newDate = new Date()
        newDate.setTime(Date.parse(time.replace(/-/g, '/')))
        return newDate
      },
      vote (item) {
        postRequest('support/comment', {
          id: item.id
        }).then(response => {
          var code = response.code
          if (code !== 1000) {
            ui.toast(response.message)
            return
          }
          if (response.data.type === 'support') {
            // 已点赞
            item.supports++
            item.is_supported = 1
          } else {
            // 取消点赞
            item.supports--
            item.is_supported = 0
          }
        })
      },
      prependItem (id, msg, createdAt, parentId) {
        var userInfo = getLocalUserInfo()
        var item = {
          id,
          children: [],
          content: msg,
          is_supported: 0,
          supports: 0,
          owner: {
            is_expert: userInfo.is_expert,
            avatar: userInfo.avatar_url,
            user_id: userInfo.user_id,
            uuid: userInfo.uuid,
            name: userInfo.name
          },
          created_at: createdAt
        }
        console.log('discuss:item:' + JSON.stringify(item))

        console.log('discuss:parentid:' + parentId)
        if (parentId) {
          var parentIndex = getIndexByIdArray(this.commentTarget.list, parentId)
          console.log('discuss:parentIndex:' + parentIndex)
          if (parentIndex > 0) {
            if (this.commentTarget.list[parentIndex].children) {
              this.commentTarget.list[parentIndex].children.unshift(item)
            } else {
              this.commentTarget.list[parentIndex].children = [item]
            }
          } else {
            this.resetList()
          }
        } else {
          console.log('discuss:commentTarget:' + JSON.stringify(this.commentTarget))
          if (this.commentTarget.list.length) {
            this.commentTarget.list.unshift(item)
          } else {
            this.resetList()
          }
        }
      },
      clickComment (comment, list) {
        var commentUid = comment.owner.uuid
        var userInfo = getLocalUserInfo()
        var uuid = userInfo.uuid
        if (commentUid === uuid) {
          this.delComment(comment, list)
        } else {
          this.comment(comment.id, comment.owner.name, list)
        }
      },
      moreReply (item) {
        item.moreReply = 1
        var indexOfItem = getIndexByIdArray(this.list, item.id)
        Vue.set(this.list, indexOfItem, item)
      },
      doDelComment () {
        postRequest('article/destroy-comment', {
          id: this.delCommentId
        }).then(response => {
          var code = response.code
          if (code !== 1000) {
            ui.toast(response.message)
            return
          }
          var index = getIndexByIdArray(this.delList, this.delCommentId)
          if (index) {
            this.delList = this.delList.splice(index, 1)
          }
          this.hideDelComment()
          this.$emit('delCommentSuccess')
        })
      },
      hideDelComment () {

      },
      delComment (comment, list) {
        this.delCommentId = comment.id
        this.delList = list

        ui.confirm('删除我的回复', '', ['取消', '确定'], (event) => {
          if (event.index === 1) {
            this.doDelComment()
          }
        })
      },
      comment (parentId, commentTargetUsername, list, autoBlur) {
        var commentTarget = {
          parentId: parentId || 0,
          commentTargetUsername: commentTargetUsername || '',
          list: list
        }

        var data = {
          targetUsername: commentTargetUsername || '',
          commentData: commentTarget
        }

        console.log('回复 data:' + JSON.stringify(data))

        if (autoBlur) {
          this.$refs.ctextarea.comment(data, autoBlur)
        } else {
          showComment(
            this,
            data,
            this.$refs.ctextarea,
            this.$refs.AlertTextarea,
            this
          )
        }
      },
      commentfoucs () {
        this.comment(0, '', this.list)
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.name === from.name) {
          this.refreshPageData()
        }
      }
    }
  }

</script>

<style scoped lang="less">
    .refreshListWrapper{
        /*top: 87.98upx;*/
        /*bottom:50px; !* px不转换 *!*/
    }
    .commentWrapper {
        z-index: 300;
    }
    .mui-content {
        top: 0;
        bottom: 91.96upx;
        background: #fff;
    }
    .comment-empty {
        margin-top: 157.96upx;
        text-align: center;
        position: relative;
        z-index: 99;
        .comment-empty-content {
            .comment-wait-img {
                width: 139.96upx;
                height: 177.98upx;
                margin: 0 auto;
                .image {
                    width: 100%;
                    height: 100%;
                }
            }
            .span {
                color: #C8C8C8;
                font-size: 24upx;
                margin: 19.96upx 0 33.98upx;
                display: inline-block;
            }
            .commeny-button {
                width: 192upx;
                height: 72upx;
                margin: 0 auto;
                color: #FFFFFF;
                font-size: 27.98upx;
                line-height: 72upx;
                text-align: center;
                background: #03AEF9;
                border-radius: 199.96upx;
            }
        }
    }
    .right {
        color: #808080;
        font-size: 30upx;
        position: absolute;
        right: 31.96upx;
        top: 21.98upx;
    }
    .empty {
        width: 100%;
        background: #FFFFFF;
        margin-bottom: 19.96upx;
        text-align: center;
        padding: 39.98upx 0;
        .iconfont{
            font-size: 99.98upx;
        }
    }
    .lidL{
        position: relative;
        .iconfont{
            position: absolute;
            top:39.98upx;
            right:-6upx;
        }
    }
</style>
