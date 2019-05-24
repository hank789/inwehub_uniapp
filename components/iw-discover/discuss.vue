<template>
    <view>
        <view class="component-block-title">
            <view class="left">评论<view v-if="total">({{total}})</view></view>
        </view>
        <view class="line-river-after"></view>

        <view class="message">
            <view class="container-list-discuss">
                <view class="list-item-discuss">
                    <view class="lidL">
                        <image :src="info.avatar_url"/>
                        <text class="iconfont icon-zhuanjiabiaojishixin"></text>
                    </view>
                    <view class="lidR">
                        <view class="lidR1">{{info.name}}</view>
                        <view class="lidR2">
                            <view class="lidframe" @tap.stop.prevent="goComment()">
                                <view v-if="list.length === 0">有花堪折直须折，快做评论第一人</view>
                                <view v-else-if="list.length > 3">知音千里难寻觅，说点什么不后悔</view>
                                <view v-else>有想法就说，莫负好时光</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>

            <view class="container-list-discuss" v-show="list.length !== 0 && showList">
                <view v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                    <template v-for="(item, index) in list" v-if="index < 3">
                        <view class="list-item-discuss"  @tap.stop.prevent="clickComment(item, list)" :key="index">
                            <view class="lidL" @tap.stop.prevent="toResume(item.owner.uuid)">
                                <image :src="item.owner.avatar"/>
                                <text class="iconfont icon-zhuanjiabiaojishixin"></text>
                            </view>
                            <view class="lidR">
                                <view class="lidR1">{{ item.owner.name }}</view>
                                <view class="lidR2 textToLink" v-html="textToLink(item.content)"></view>
                                <view class="lidR3">
                                    <view class="lidRtime"> {{ timeago(item.created_at) }} </view>
                                    <view class="lidROption" @tap.stop.prevent="vote(item)" :class="{active:item.is_supported}">
                                        <text class="iconfont icon-zan"></text><view v-if="item.supports">{{item.supports}}</view>
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
        </view>

        <view id="sheet1" class="mui-popover mui-popover-bottom mui-popover-action">
            <!-- 可选择菜单 -->
            <view class="mui-table-view">
                <view class="mui-table-view-cell">
                    <a @tap.stop.prevent="doDelComment">删除我的回复</a>
                </view>
            </view>
            <!-- 取消菜单 -->
            <view class="mui-table-view">
                <view class="mui-table-view-cell">
                    <a @tap.stop.prevent="hideDelComment"><b>取消</b></a>
                </view>
            </view>
        </view>

    </view>
</template>

<script>
  import ui from '@/lib/ui'
  import { postRequest } from '@/lib/request'
  import { getLocalUserInfo } from '@/lib/user'
  import { getIndexByIdArray } from '@/lib/array'
  import Vue from 'vue'
  import DiscussReplay from '@/components/iw-discover/discuss-reply.vue'
  import { textToLinkHtml } from '@/lib/dom'
  import { openVendorUrl, openAppUrl } from '@/lib/plus'
  import userAbility from '@/lib/userAbility'

  const Discuss = {
    data: () => ({
      loading: true,
      busy: false,
      showList: true,
      commentTarget: null,
      delCommentId: 0,
      delList: null,
      page: 1,
      list: [],
      total: '',
      mode: '最新',
      order_by: 1,
      info: {name: '游客', is_expert: 0, avatar_url: 'https://cdn.inwehub.com/system/user_default_avatar.png'}
    }),
    props: {
      listApi: {
        type: String,
        default: ''
      },
      listParams: {
        type: Object,
        default: () => {
          return null
        }
      },
      storeApi: {
        type: String,
        default: ''
      },
      storeParams: {
        type: Object,
        default: () => {
          return null
        }
      }
    },
    components: {
      DiscussReplay
    },
    computed: {},
    methods: {
      goComment () {
        this.$emit('goComment')
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
      timeago (time) {
        let newDate = new Date()
        newDate.setTime(Date.parse(time.replace(/-/g, '/')))
        return newDate
      },
      rootComment () {
        this.comment(0, '', this.list)
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
        var del = document.getElementById('sheet_comment_del')
        if (del) {
          window.mui('#sheet_comment_del').popover('hide')
        }
      },
      delComment (comment, list) {
        this.delCommentId = comment.id
        this.delList = list
        var del = document.getElementById('sheet_comment_del')
        if (del) {
          window.mui('#sheet_comment_del').popover('toggle')
        } else {
          var ele = document.getElementById('sheet1')
          ele.id = 'sheet_comment_del'
          document.body.appendChild(ele)
          setTimeout(() => {
            window.mui('#sheet_comment_del').popover('toggle')
          }, 100)
        }
      },
      textToLink (text) {
        return textToLinkHtml(text)
      },
      moreReply (item) {
        item.moreReply = 1
        var indexOfItem = getIndexByIdArray(this.list, item.id)
        Vue.set(this.list, indexOfItem, item)
      },
      toResume (uuid) {
        if (!uuid) {
          return false
        }
        this.$router.pushPlus('/share/resume?id=' + uuid + '&goback=1' + '&time=' + (new Date().getTime()), 'list-detail-page')
      },
      resetList () {
        this.page = 1
        this.list = []
        this.getList()
      },
      comment (parentId, commentTargetUsername, list) {
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

        this.$emit('comment', data)
      },
      sendMessage (message) {
        console.log(message)
        this.commentTarget = message.commentData
        var parentId = this.commentTarget.parentId
        var params = Object.assign({
          body: message.content,
          content: message.content,
          parent_id: parentId,
          mentions: message.noticeUsers
        }, this.storeParams)

        postRequest(this.storeApi, params).then(response => {
          var code = response.code

          if (code === 6108) {
            userAbility.inviteJoinInGroup(this.$parent, response.data.group_id)
            return
          }

          if (code !== 1000) {
            window.mui.alert(response.message)
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

          this.$emit('commentFinish')
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
          if (this.commentTarget.list) {
            this.commentTarget.list.unshift(item)
          } else {
            this.resetList()
          }
        }
      },
      loadMore () {
        this.busy = true
        console.log('loadMore')
        if (JSON.stringify(this.listParams) === '{}') {
          return
        }
        this.getList()
      },
      getList () {
        if (!this.listParams) {
          return false
        }
        var params = Object.assign({page: this.page, order_by: this.order_by}, this.listParams)

        if (this.page > 1) {
          return
        }

        postRequest(this.listApi, params).then(response => {
          var code = response.code
          if (code !== 1000) {
            window.mui.alert(response.message)
            return
          }
          this.total = response.data.total
          if (response.data.data.length > 0) {
            this.list = this.list.concat(response.data.data)
          }

          if (response.data.data.length < 10) {
            this.busy = true
          } else {
            this.busy = false
          }

          this.page++

          this.loading = 0
        })
      },
      getInfo () {
        var info = getLocalUserInfo()
        if (info.uuid) {
          this.info = info
        }
      }
    },
    mounted () {
      this.getInfo()
    },
    watch: {
      'listParams' (newVal, oldVal) {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
          this.resetList()
        }
      }
    },
    created () {

    },
    updated () {
      this.$nextTick(() => {
        var eles = this.$el.querySelectorAll('.textToLink')
        for (var i in eles) {
          openVendorUrl(eles[i])
          openAppUrl(eles[i])
        }
      })
    }
  }
  export default Discuss
</script>

<style scoped="scoped" lang="less">
    .lidR2 {
        .lidframe {
            width: 607.96upx;
            height: 67.96upx;
            line-height: 67.96upx;
            padding-left: 19.96upx;
            border-radius: 9.98upx;
            border: 1.96upx solid #DCDCDC;
            span {
                font-size: 27.98upx;
                color: #C8C8C8;
            }
        }
    }
    .mui-plus {
        .lidR2 {
            .lidframe {
                border: 0.98upx solid #DCDCDC !important;
            }
        }
    }
    .empty {
        width: 100%;
        background: #FFFFFF;
        margin-bottom: 19.96upx;
        text-align: center;
        padding: 39.98upx 0;
    }

    .empty .iconfont{
        font-size: 99.98upx;
    }

    .empty p {
        width: 100%;
        font-size: 24upx;
        color: #c8c8c8;
        text-align: center;
    }

    .lidL{
        position: relative;
    }

    .lidL .icon{
        position: absolute;
        top:39.98upx;
        right:-6upx;
    }
</style>
