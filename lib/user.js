import localEvent from './localstorage.js'

/**
 * 获取本地用户信息
 */
function getLocalUserInfo () {
  var UserInfo = localEvent.get('UserInfo')
  return UserInfo
}

export default {
  getLocalUserInfo
}
