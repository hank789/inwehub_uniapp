import localEvent from './localstorage.js'
import ajaxRequest from './ajaxRequest.js'

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
  if (userInfo && userInfo.info.uuid) {
    return userInfo.info.uuid
  }
  return null
}

function isAdmin () {
  var userInfo = getLocalUserInfo()
  if (userInfo && userInfo.info.is_admin) {
    return true
  }
  return false
}

function getAndUpdateUserInfo(callback = ()=>{}) {
	var info = ajaxRequest.get('profile/info').then(response => {
		localEvent.set('UserInfo', response.data)
		callback(response.data)
	})
}

function getLocalUserId () {
  var userInfo = getLocalUserInfo()
  if (userInfo && userInfo.info.id) {
    return userInfo.info.id
  }
  return null
}

/**
 * 获取本地用户名
 */
function getLocalName () {
  var userInfo = getLocalUserInfo()
  if (userInfo && userInfo.info.name) {
    return userInfo.info.name
  }
  return null
}

export {
  getLocalUserId,
  getLocalUuid,
  getLocalUserInfo,
  isAdmin,
  getLocalName,
	getAndUpdateUserInfo
}
