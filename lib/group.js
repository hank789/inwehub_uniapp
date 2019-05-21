import { postRequest } from './request.js'

function groupList (uuid, successCallback) {
	postRequest(`group/mine`, {uuid: uuid }, false).then(res => {
		var code = res.code
		if (code !== 1000) {
		  // window.mui.toast(res.message)
		  return
		}
		successCallback(res.data)
	})
}

export {
	groupList
}