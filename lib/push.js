
import html5plus from './html5plus'
import { postRequest } from './request'
import ui from './ui'
// import { alertHotOpenNotice } from './dialogList'
import localEvent from '@/lib/localstorage'

function _apiNotificationPushUpdate(data, successCallback, failCallback) {
  postRequest(`notification/push/update`, data).then(response => {
    var code = response.code
    if (code !== 1000) {
      ui.toast(response.message)
      failCallback(response.message)
      return
    }

    successCallback(response.message)
    ui.toast(response.message)
  })
}

/**
 * 需要app开启通知权限
 * @private
 */
function needNotifitionPermission(context) {
  //#ifdef APP-PLUS
    html5plus.checkPermission('NOTIFITION', () => {}, () => {
      alertHotOpenNotice(context, (num) => {
        switch (num) {
          case -1:
            break
          case 0:
            html5plus.toSettingSystem('NOTIFITION')
            break
          case 1:
            break
        }
      })
    })
  //#endif
}

/**
 * 打开或关闭热点推荐-app推送
* */
function setHotRecommendAppPushStatus(context, isOpen, successCallback, failCallback) {
  if (isOpen) {
    //#ifdef APP-PLUS
      html5plus.checkPermission('NOTIFITION', () => {
        _apiNotificationPushUpdate({
          push_daily_subscribe: 1
        }, successCallback, failCallback)
      }, () => {
        alertHotOpenNotice(context, (num) => {
          switch (num) {
            case -1:
              failCallback()
              break
            case 0:
              html5plus.toSettingSystem('NOTIFITION')
              localEvent.set('hotRecommendAppMonitor', { isTrue: 1 })
              window.addEventListener('resume', () => {
                var hotRecommendAppMonitor = localEvent.get('hotRecommendAppMonitor')
                if (hotRecommendAppMonitor && hotRecommendAppMonitor.isTrue) {
                  localEvent.remove('hotRecommendAppMonitor')
                  setHotRecommendAppPushStatus(context, isOpen, successCallback, failCallback)
                }
              }, false)
              break
            case 1:
              failCallback()
              break
          }
        })
      })
    //#endif

    //#ifndef APP-PLUS
      _apiNotificationPushUpdate({
        push_daily_subscribe: 1
      }, successCallback, failCallback)
    //#endif
  } else {
    _apiNotificationPushUpdate({
      push_daily_subscribe: 0
    }, successCallback, failCallback)
  }
}

/**
 * 打开或关闭邮件订阅
 */
function setHotRecommendEmailStatus(isOpen, email, successCallback, failCallback) {
  if (isOpen && !email) return

  if (!isOpen) {
    email = 0
  }

  _apiNotificationPushUpdate({
    email_daily_subscribe: email
  }, successCallback, failCallback)
}

/**
 * 打开或关闭微信订阅
 */
function setHotRecommendWechatStatus(isOpen, successCallback, failCallback) {
  _apiNotificationPushUpdate({
    wechat_daily_subscribe: isOpen ? 1 : 0
  }, successCallback, failCallback)
}

export {
  setHotRecommendAppPushStatus,
  setHotRecommendEmailStatus,
  setHotRecommendWechatStatus,
  needNotifitionPermission
}
