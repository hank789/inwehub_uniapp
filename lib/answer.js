import { postRequest } from './request.js'

function getAnswerList (uuid, successCallback) {
	postRequest(`answer/myList`, {uuid: uuid }, false).then(res => {
		var code = res.code
		if (code !== 1000) {
		  // window.mui.toast(res.message)readhub/mySubmission
		  return
		}
		successCallback(res.data)
	})
}

export{
	getAnswerList
}