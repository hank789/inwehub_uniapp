
import userAbilityCheck from './userAbilityCheck'

function showComment (context, commentTargetName, plusTextareaComponent, wechatTextareaComponent, discussComponent) {
  var isValid = true // userAbilityCheck.checkPhoneCertification(context)
  if (isValid) {
      // #ifdef  APP-PLUS
      plusTextareaComponent.comment(commentTargetName)
      // #endif

      // #ifdef  H5 || MP-WEIXIN
      var id = commentTargetName.commentData.parentId
      var placeholder = commentTargetName.targetUsername ? '回复' + commentTargetName.targetUsername : '在此留言'
      if (placeholder) {
        wechatTextareaComponent.setPlaceholder(placeholder)
      }
      wechatTextareaComponent.cacheShow(id, '', () => {}, (value) => {
        var message = {
          content: value,
          noticeUsers: [],
          commentData: commentTargetName.commentData
        }
        discussComponent.sendMessage(message)
        return true
      })
      // #endif
    }
}

export {
  showComment
}
