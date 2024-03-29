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
  if (userInfo && userInfo.uuid) {
    return userInfo.uuid
  }
  return null
}

function isAdmin () {
  var userInfo = getLocalUserInfo()
  if (userInfo && userInfo.is_admin) {
    return true
  }
  return false
}

function getAndUpdateUserInfo(callback = ()=>{}) {
	var info = ajaxRequest.get('profile/info').then(response => {
		localEvent.set('UserInfo', response.data.info)
		callback(response.data)
	})
}

function getLocalUserId () {
  var userInfo = getLocalUserInfo()
  if (userInfo && userInfo.id) {
    return userInfo.id
  }
  return null
}

/**
 * 获取本地用户名
 */
function getLocalName () {
  var userInfo = getLocalUserInfo()
  if (userInfo && userInfo.name) {
    return userInfo.name
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
