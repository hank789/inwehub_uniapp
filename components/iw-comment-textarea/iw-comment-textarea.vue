<template>
  <view v-show="showTextarea || alwaysshow" class="commentWrapper" @tap.capture="onTap($event)">
    <view class="textareaWrapper">
      <textarea v-if="showTextarea" maxlength="-1" v-model="textarea" :focus="focus" auto-height="true" class="textarea" :placeholder="targetUsername" />
      <!--<text class="iconfont icon-fasong"></text>-->
    </view>
    <view class="send font-family-medium" :class="text.length - 2 ? 'active' : ''" @tap.stop.prevent="sendMessage">发送</view>
  </view>
</template>

<script>
import localEvent from '@/lib/localstorage'
import { onceGet, onceSave } from '@/lib/cache'

import { getLocalUserInfo } from '@/lib/user'
const currentUser = getLocalUserInfo()

const CommentTextarea = {
  data: () => ({
    id: currentUser.user_id,
    showTextarea: false,
    description: {},
    cacheKey: '',
    textarea: '',
    text: '',
    descMaxLength: 5000,
    targetUsername: '',
    noticeUsers: [],
    editorObj: null,
    oldList: [],
    commentData: [], // 评论时需要的参数
    historyDescription: [], // 历史内容
    focusCallback: null, // 获取焦点时的回调
    allowBr: false,
		focus: false
  }),
  props: {
    alwaysshow: false
  },
  components: {

  },
  activated() {
    this.init()
  },
  mounted() {
    var referer = localEvent.get('referer')
    if (!(referer && referer.path === '/selectUser')) {
      localEvent.remove('selected_comment_user' + this.id)
    }

    this.init()
  },
  created() {
    this.cacheKey = '_comment_textarea'
  },
  methods: {
    onTap(event) {
      if (this.alwaysshow) {
        // #ifndef APP-PLUS
        event.preventDefault()
        event.stopPropagation()
        this.$emit('onTap')
        // #endif
      }
    },
    refreshPageData() {
      this.init()
    },
    smallSpanArrChange(arr) {
      setTimeout(() => {
        this.syncSelectUser()
      }, 500)
    },
    resetData() {
      this.textarea = ''
      this.noticeUsers = []
      this.delCurrentHistoryDescription()
      localEvent.remove('selected_comment_user' + this.id)
      // // this.$refs.myAddEditor.resetContent()
      this.showTextarea = false
			this.focus = false
    },
    addressAppearDelete(text) {
      var users = localEvent.get('selected_comment_user' + this.id)
      for (var i in users) {
        var name = '@' + users[i].name + ''
        if (name === text) {
          this.delNoticeUser(users[i].id)
          users.splice(i, 1)
        }
      }
      localEvent.set('selected_comment_user' + this.id, users)
    },
    getSelectUser() {
      var users = localEvent.get('selected_comment_user' + this.id)
      var spanUserNameAndIds = []
      var spanUserNames = []
      for (var i in users) {
        this.noticeUser(users[i].id)
        var data = {
          name: '@' + users[i].name + '',
          id: users[i].uuid
        }
        spanUserNameAndIds.push(data)
        spanUserNames.push(data.name)
      }
      return {
        nameAndIds: spanUserNameAndIds,
        names: spanUserNames
      }
    },
    syncSelectUser() {
      // 循环插入@人
      var users = this.getSelectUser()
      var spanUserNameAndIds = users.nameAndIds
      var smallSpanArr = // this.$refs.myAddEditor.getSmallSpanArr()
      console.log('selected_comment_user:' + JSON.stringify(users) + ', 文本框里的人数:' + JSON.stringify(smallSpanArr))

      // 已选的用户都要添加上
      var waitAddArr = []
      for (var num = 0; num < spanUserNameAndIds.length; num++) {
        var selectUserName = spanUserNameAndIds[num].name
        var selectUserid = spanUserNameAndIds[num].id
        if (smallSpanArr.indexOf(selectUserName) === -1) {
          waitAddArr.push({
            text: selectUserName,
            attribute: {
              'color': '#42AEF9',
              'size': 'small',
              'link': 'https://m.inwehub.com/#/share/resume/' + selectUserid + '?goback=1'
            }
          })
        }
      }

      if (waitAddArr.length) {
        // this.$refs.myAddEditor.appendTexts(waitAddArr)
      }

      // 文本框里未选择的，都要删除
      var deleteUser = []
      var spanUserNames = users.names

      for (var n in smallSpanArr) {
        if (spanUserNames.indexOf(smallSpanArr[n]) === -1) {
          deleteUser.push(smallSpanArr[n])
        }
      }
      // this.$refs.myAddEditor.delSmallSpan(deleteUser)
    },
    initEditorData() {
      console.log('initEditorData() fired')

      this.syncSelectUser()
    },
    //  监听@事件
    addressAppearFound() {
      onceSave(this, this.cacheKey, {
        showTextarea: this.showTextarea,
        description: this.description,
        cacheKey: this.cacheKey,
        targetUsername: this.targetUsername,
        noticeUsers: this.noticeUsers,
        commentData: this.commentData,
        currentUser: this.currentUser
      })
      uni.navigateTo({ url: '/selectUser?from=comment' })
    },
    init() {
      console.log('init() fired')
      this.oldList = this.commentData.commentList
      var result = onceGet(this, this.cacheKey)
      if (result) {
        this.initEditorData()
        this.commentData.commentList = this.oldList
        // this.commentData.list = null  // 临时解决方案，强制discuss刷新列表, 等待删除
        this.focusCallback = () => {
          this.focusCallback = null
        }
      }
    },
    onEditorChange(editor) {
      this.textarea = editor.html
      this.text = editor.text
    },
    onEditorBlur(editor) {
      // window.mui.closeWaitingBlank()
      console.log('comment blur')
      this.showTextarea = false
			this.focus = false
      this.setHistoryDescription()
    },
    delCurrentHistoryDescription() {
      for (var i in this.historyDescription) {
        if (this.historyDescription[i].targetUsername === this.targetUsername) {
          this.historyDescription.splice(i, 1)
        }
      }
    },
    setHistoryDescription() {
      this.delCurrentHistoryDescription()

      this.historyDescription.push({
        targetUsername: this.targetUsername,
        description: this.description
      })
    },
    getHistoryDescription() {
      for (var i in this.historyDescription) {
        if (this.historyDescription[i].targetUsername === this.targetUsername) {
          this.historyDescription.splice(i, 1)
          break
        }
      }
    },
    onEditorFocus(editor) {
      if (!this.textarea.replace('<view> </view>', '').trim()) {
        var targetUsername = this.targetUsername ? '回复' + this.targetUsername : '在此留言'
        // this.$refs.myAddEditor.setPlaceholder(targetUsername)
      }

      if (this.focusCallback) {
        this.focusCallback()
      }

      // window.mui.waitingBlank()
      console.log('comment focus')
    },
    onEditorReady(editor) {
    },
    comment(data, autoBlur) {
      var targetUsername = data.targetUsername
      console.log('comment targetUsername:' + targetUsername)
      this.commentData = data.commentData
			if (this.focus === false) {
				this.focus = true
			} else {
				this.focus = false
			}
      if (targetUsername === '') {
        this.showTextarea = !this.showTextarea
      } else {
        this.showTextarea = true
      }
      console.log('this.showTextarea:' + this.showTextarea)
      this.$forceUpdate()

      this.targetUsername = targetUsername ? '回复' + targetUsername : '在此留言'

      this.getHistoryDescription()
			
			var pages = getCurrentPages();
			var page = pages[pages.length - 1];
			// #ifdef APP-PLUS
			var currentWebview = page.$getAppWebview();
			currentWebview.setStyle({softinputMode: 'adjustResize'})
			// #endif
			
      console.log('comment-textarea:' + this.textarea)
    },
    finish() {
      this.resetData()
    },
    noticeUser(id) {
      this.delNoticeUser(id)
      this.noticeUsers.push(id)
    },
    delNoticeUser(id) {
      var noticeIndex = this.noticeUsers.indexOf(id)
      if (noticeIndex > -1) {
        this.noticeUsers.splice(noticeIndex, 1)
      }
    },
    sendMessage(event) {
      event.preventDefault()
      event.stopPropagation()

      var textarea = this.textarea
      textarea = textarea.replace(/(<view><br><\/view>)*$/, '')

      if (!textarea.trim()) {
        return false
      }

      var data = {
        content: textarea,
        noticeUsers: this.noticeUsers,
        commentData: this.commentData
      }
			this.textarea = ''
      this.$emit('sendMessage', data)
    }
  }
}
export default CommentTextarea
</script>

<style scoped="scoped">
    .commentWrapper {
        background: #F3F4F5;
        position: absolute;
        width: 750upx;
        bottom: 0;
        left: 0;
        overflow: hidden;
        padding: 9.98upx 30upx;
        z-index: 3;
    }

    .commentWrapper .textareaWrapper {
        position: relative;
        background: #fff;
        border-radius: 9.98upx;
        width: 88%;
				min-height:150upx;
    }
    .commentWrapper .send {
        position: absolute;
        right: 31.96upx;
        bottom: 12upx;
        color: #B4B4B6;
        font-size: 30upx;
    }
    .commentWrapper .send.active {
        color: #03AEF9;
    }

    .commentWrapper .textarea {
        border: none;
        display: inline-block;
        width: 100%;
        height: 68upx;
        padding: 0 61.96upx 0 9.98upx;
        font-size: 27.98upx;
        position: relative;
        top: 10upx;
    }

    .commentWrapper .iconfont{
        position: absolute;
        right: 9.98upx;
        color: #03aef9;
        font-size: 51.98upx;
        bottom: 9.98upx;
    }

    .commentShadowWrapper{
        display: none;
        position: absolute;
        left:0;
        width:100%;
        bottom:0;
    }
</style>
