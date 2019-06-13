<template>
  <view v-show="showTextarea || alwaysshow" id="commentWrapper" class="commentWrapper" @tap.capture="onTap($event)">
    <view class="textareaWrapper">
      <textarea v-model="textarea"></textarea>
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
    allowBr: false
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
      if (targetUsername === '') {
        this.showTextarea = !this.showTextarea
      } else {
        this.showTextarea = true
      }

      this.targetUsername = targetUsername

      // this.editorObj.setContents([{ insert: '' }])

      this.getHistoryDescription()

      var textarea = this.textarea
      textarea = textarea.replace(/(<view><br><\/view>)*$/, '')
      textarea = textarea.replace(/(<view> <\/view>)*$/, '')

      console.log('comment-textarea:' + textarea)
      if (!textarea.trim()) {
        targetUsername = targetUsername ? '回复' + targetUsername : '在此留言'
        // this.$refs.myAddEditor.setPlaceholder(targetUsername)
      }
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
        width: 100%;
        bottom: 0;
        left: 0;
        min-height: 90upx;
        overflow: hidden;
        padding: 9.98upx 30upx;
        z-index: 10001;
    }

    .commentWrapper .textareaWrapper {
        position: relative;
        background: #fff;
        border-radius: 9.98upx;
        min-height: 69.98upx;
        width: 88%;
    }
    .commentWrapper .send {
        position: absolute;
        right: 31.96upx;
        bottom: 24upx;
        color: #B4B4B6;
        font-size: 30upx;
    }
    .commentWrapper .send.active {
        color: #03AEF9;
    }

    .commentWrapper textarea {
        border: none;
        display: inline-block;
        width: 100%;
        height: 39.98upx;
        margin: 12upx 0 0;
        padding: 0 61.96upx 0 9.98upx;
        font-size: 27.98upx;

    }

    .commentWrapper textarea::placeholder {
        color: #c8c8c8;
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

<style>
    #commentJeditor .textarea-wrapper{
        border:none;
        background: none;
        padding-bottom:0;
    }

    #commentJeditor .counter{
        bottom:-189.98upx;
    }
    #commentJeditor .ql-editor.ql-blank::before{
        font-style:normal;
        margin-top:3.98upx;
        font-size: 27.98upx;
        color: #9b9b9b;
    }
    #commentJeditor .textarea-wrapper .quill-editor {
        min-height:69.98upx;
        height:auto;
    }
    #commentJeditor .quill-editor .ql-container {
        min-height: 69.98upx;
        height:auto;
        font-size: 27.98upx;
        color: #9b9b9b;
    }
    #commentJeditor .counter {
        display: none;
    }
    #commentJeditor .ql-editor .ql-size-small{
        font-size: 31.96upx;
    }

    #commentJeditor .ql-snow .ql-editor a{
        text-decoration: none;
    }
    #commentJeditor .ql-editor {
        box-sizing: border-box;
        line-height: 1.42;
        height: 100%;
        outline: none;
        overflow-y: auto;
        padding: 13.96upx 49.96upx 13.96upx 18upx;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    #commentJeditor .ql-editor .p {
        position: relative;
        color: #444444;
    }
</style>
