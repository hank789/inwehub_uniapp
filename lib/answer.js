import { postRequest } from './request.js'

function getAnswerList (uuid, returnType, successCallback) {
	postRequest(`answer/myList`, {uuid: uuid, return_type: returnType }, false).then(res => {
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