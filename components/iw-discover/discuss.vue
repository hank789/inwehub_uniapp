<template>
  <view>
    <view class="component-block-title">
      <view class="left">评论<text v-if="total">({{ total }})</text></view>
    </view>
    <view class="line-river-after" />

    <view class="message" v-if="!loading">
      <view class="container-list-discuss">
        <view class="list-item-discuss">
          <view class="lidL">
            <image mode="aspectFill" :src="info.avatar_url" />
            <text class="iconfont icon-zhuanjiabiaozhishixin" v-show="info.is_expert" />
          </view>
          <view class="lidR">
            <view class="lidR1">{{ info.name }}</view>
            <view class="lidR2">
              <view class="lidframe" @tap.stop.prevent="goComment()">
                <view v-if="list.length === 0" class="span">有花堪折直须折，快做评论第一人</view>
                <view v-else-if="list.length > 3" class="span">知音千里难寻觅，说点什么不后悔</view>
                <view v-else class="span">有想法就说，莫负好时光</view>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view v-if="list.length !== 0 && showList" class="container-list-discuss">

        <scroll-view
          scroll-y="true"
          class="scroll-Y"
          @scrolltolower="loadMore"
        >

          <template v-for="(item, index) in list" v-if="index < 3">
            <view class="list-item-discuss" @tap.stop.prevent="clickComment(item, list)" hover-class="hoverClass" :hover-stop-propagation="true">
              <view class="lidL" @tap.stop.prevent="toResume(item.owner.uuid)">
                <image mode="aspectFill" :src="item.owner.avatar" />
                <text class="iconfont icon-zhuanjiabiaozhishixin" v-show="item.owner.is_expert"/>
              </view>
              <view class="lidR">
                <view class="lidR1">{{ item.owner.name }}</view>
                <view class="lidR2 textToLink" v-html="textToLink(item.content)">
								
								</view>
                <view class="lidR3">
                  <view class="lidRtime"> {{ item.created_at | timeago }} </view>
                  <view class="lidROption" :class="{active:item.is_supported}" @tap.stop.prevent="vote(item)" hover-class="hoverClass" :hover-stop-propagation="true">
                    <text class="iconfont icon-zan" /><text v-if="item.supports">{{ item.supports }}</text>
                  </view>
                </view>
              </view>
            </view>

            <view v-if="item.children.length" class="list-item-discuss-childrens">
              <DiscussReplay
                v-if="item.children.length"
                :children="item.children"
                :parent-owner-name="item.owner.name"
                :is-show="true"
                @comment="clickCommentChild"
                @vote="vote"
              />
            </view>

            <view v-if="index !== list.length-1" class="line-river-after" />

          </template>
        </scroll-view>
      </view>
    </view>

  </view>
</template>

<script>
import ui from '@/lib/ui'
import { postRequest } from '@/lib/request'
import { getLocalUserInfo } from '@/lib/user'
import { getIndexByIdArray, getListByIdArray } from '@/lib/array'
import Vue from 'vue'
import DiscussReplay from '@/components/iw-discover/discuss-reply.vue'
import { textToLinkHtml } from '@/lib/dom'
import userAbility from '@/lib/userAbility'
import { getPlatform } from '@/lib/allPlatform'

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
    info: { name: '游客', is_expert: 0, avatar_url: 'https://cdn.inwehub.com/system/user_default_avatar.png' }
  }),
  props: {
    autoLoading: {
      type: Boolean,
      default: true
    },
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
  methods: {
    goComment() {
      this.$emit('goComment')
    },
    vote(item) {
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
    switchMode() {
      if (this.mode === '最新') {
        this.order_by = 2
        this.mode = '最赞'
      } else {
        this.order_by = 1
        this.mode = '最新'
      }
      this.resetList()
    },
    rootComment() {
      this.comment(0, '', this.list)
    },
    clickCommentChild (event) {
      let platform = getPlatform()
      console.log('platform:' + platform)
      console.log(event)
      let data = {}
      if (platform === 'web') {
        data = event
      } else {
        data = event.detail.__args__[0]
      }
      console.log(data)

      const comment = data.comment
      const list = data.list
      this.clickComment(comment, list)
    },
    clickComment(comment, list) {
      console.log(comment)
      var commentUid = comment.owner.uuid
      var userInfo = getLocalUserInfo()
      var uuid = userInfo.uuid
      if (commentUid === uuid) {
        this.delComment(comment, list)
      } else {
        this.comment(comment.id, comment.owner.name, list)
      }
    },
    doDelComment() {
      postRequest('article/destroy-comment', {
        id: this.delCommentId
      }).then(response => {
        var code = response.code
        if (code !== 1000) {
          ui.toast(response.message)
          return
        }
        this.delList = getListByIdArray(this.delCommentId, this.list)
        var index = getIndexByIdArray(this.delList, this.delCommentId)
        if (index) {
          this.delList = this.delList.splice(index, 1)
        }
        this.hideDelComment()
        this.$emit('delCommentSuccess')
      })
    },
    hideDelComment() {

    },
    delComment(comment, list) {
      this.delCommentId = comment.id
      this.delList = list
      ui.confirm('提示', '删除我的回复', ['取消', '确定'], (e) => {
        if (e.index === 1) {
          this.doDelComment()
        }
      })
    },
    textToLink(text) {
      return textToLinkHtml(text)
    },
    moreReply(item) {
      item.moreReply = 1
      var indexOfItem = getIndexByIdArray(this.list, item.id)
      Vue.set(this.list, indexOfItem, item)
    },
    toResume(uuid) {
      if (!uuid) {
        return false
      }
      uni.navigateTo('/share/resume?id=' + uuid + '&goback=1' + '&time=' + (new Date().getTime()), 'list-detail-page')
    },
    resetList() {
      this.page = 1
      this.list = []
      this.getList()
    },
    comment(parentId, commentTargetUsername, list) {
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
    sendMessage(message) {
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

        this.$emit('commentFinish')
      })
    },
    prependItem(id, msg, createdAt, parentId) {
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
        this.commentTarget.list = getListByIdArray(parentId, this.list)
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
    loadMore() {
      this.busy = true
      console.log('loadMore')
      if (JSON.stringify(this.listParams) === '{}') {
        return
      }
      this.getList()
    },
    getList() {
      if (!this.listParams) {
        return false
      }
      var params = Object.assign({ page: this.page, order_by: this.order_by }, this.listParams)

      if (this.page > 1) {
        return
      }

      postRequest(this.listApi, params).then(response => {
        var code = response.code
        if (code !== 1000) {
          ui.toast(response.message)
          return
        }
        this.total = response.data.total
        if (response.data.data.length > 0) {
          this.list = this.list.concat(response.data.data)
        }

        this.$forceUpdate()

        if (response.data.data.length < 10) {
          this.busy = true
        } else {
          this.busy = false
        }

        this.page++

        this.loading = 0
      })
    },
    getInfo() {
      var info = getLocalUserInfo()
      if (info.uuid) {
        this.info = info
      }
    }
  },
  mounted() {
    this.getInfo()
    if (this.autoLoading) {
      this.resetList()
    }
  },
  created() {

  },
  updated() {

  }
}
export default Discuss
</script>

<style scoped="scoped" lang="less">
    .lidROption{
      display: inline-block;
      padding:10upx;
    }
    .lidR2 {
        .lidframe {
            width: 607.96upx;
            height: 67.96upx;
            line-height: 67.96upx;
            padding-left: 19.96upx;
            border-radius: 9.98upx;
            border: 1.96upx solid #DCDCDC;
            .span {
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

    .empty .p {
        width: 100%;
        font-size: 24upx;
        color: #c8c8c8;
        text-align: center;
    }

    .lidL{
        position: relative;
    }

    .lidL .iconfont{
        position: absolute;
        color:#03aef9;
        top:39.98upx;
        right:-6upx;
    }
</style>
