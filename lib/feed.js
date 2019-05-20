import { postRequest } from './request.js'

function getFeedList (searchType, successCallback) {
	postRequest(`feed/list`, {search_type: searchType }, false).then(res => {
		var code = res.code
		if (code !== 1000) {
		  // window.mui.toast(res.message)
		  return
		}
		successCallback(res.data)
	})
}

export {
	getFeedList
}