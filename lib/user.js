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
		localEvent.set('UserInfo', response.data)
		callback(response.data)
	})
}

export {
  getLocalUuid,
  getLocalUserInfo,
  isAdmin,
	getAndUpdateUserInfo
}
