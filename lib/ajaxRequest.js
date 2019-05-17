import {apiRequest, postRequest, uploadFile} from './request.js'

function post (url, data, showLoading = false) {
  return postRequest(url, data, showLoading)
}
function get (url, data, showLoading = false) {
  return apiRequest(url, data, showLoading)
}

function upload(url, files, formData=[], showLoading = false) {
	return uploadFile(url, files, formData=[], showLoading)
}



export default {
  get,
	post,
	upload
}
