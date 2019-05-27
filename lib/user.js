import localEvent from './localstorage.js'

/**
 * 获取本地用户信息
 */
function getLocalUserInfo() {
  var UserInfo = localEvent.get('UserInfo')
  return UserInfo
}

/**
 * 获取本地用户uuid
 */
function getLocalUuid() {
  var userInfo = getLocalUserInfo()
  if (userInfo && userInfo.uuid) {
    return userInfo.uuid
  }
  return null
}

export {
  getLocalUuid,
  getLocalUserInfo
}
