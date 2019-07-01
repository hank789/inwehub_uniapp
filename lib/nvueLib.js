import ls from '@/lib/localstorage.js'
import util from '@/lib/util.js'
import {logout, needPhoneAuth} from '@/lib/auth.js'
import { getPlatform } from '@/lib/allPlatform'

let app_id = 'www';
//#ifdef APP-PLUS
app_id = plus.runtime.appid;
//#endif

function get(url, data = {}, successCallback) {
	let platform = getPlatform()

  data.current_version = ls.get('app_install_version')
  data.user_device = platform
  data.system_appid = app_id
  
	uni.request({
		url: ls.get('baseApiUrl') + url,
		header: {
			'content-type': 'application/json',
			'Authorization': 'bearer ' + ls.get('token')
		},
		data: data,
		method: 'GET',
		dataType: 'json',
		responseType: 'text',
		success: function(res) {
			if (res.data.code === 1129) {
				needPhoneAuth()
				return
			}
			if (res.data.code == 1002 || res.data.code == 1001 || res.data.code === 1004 || res.data.code === 1102) {
				logout()
				return
			}
			successCallback(res.data)
		},
		fail: function(err) {
			uni.showToast({
				title: '网络不给力',
				icon: 'none'
			})
		},
		complete: function() {}
	})
  
}

function post(url, data = {}, showLoading = false, successCallback) {
  let platform = getPlatform()

  console.log(url)
  //console.log(data)
  data.current_version = ls.get('app_install_version')
  data.user_device = platform
  data.system_appid = app_id
  if (showLoading) {
    uni.showLoading({
      title: '请求中'
    });
  }
	uni.request({
		header: {
			'content-type': 'application/json',
			'Authorization': 'bearer ' + ls.get('token')
		},
		url: ls.get('baseApiUrl') + url,
		data: data,
		method: 'POST',
		dataType: 'json',
		responseType: 'text',
		success: function(res) {
			if (res.data.code === 1129) {
				needPhoneAuth()
				return
			}
			if (res.data.code == 1002 || res.data.code == 1001 || res.data.code === 1004 || res.data.code === 1102) {
				logout()
				return
			}
			successCallback(res.data)
		},
		fail: function(err) {
			uni.showToast({
				title: '网络不给力',
				icon: 'none'
			})
			return
		},
		complete: function() {
			uni.hideLoading()
		}
	})
  
}

function uploadFile(url, files, formData=[], showLoading = false, successCallback) {
  let platform = getPlatform()
	console.log(url)
	console.log(files)
	console.log(formData)
	formData.current_version = ls.get('app_install_version')
	formData.user_device = platform
	formData.system_appid = app_id
	if (showLoading) {
		uni.showLoading({
			title: '请求中'
		});
	}
	
	uni.uploadFile({
		header: {
			'Authorization': 'bearer ' + ls.get('token')
		},
		url: ls.get('baseApiUrl') + url,
		formData: formData,
		files: files,
		success: function(res) {
			var result = res.data
			if (!result.code) {
				result = JSON.parse(result)
			}
			if (result.code === 1129) {
				needPhoneAuth()
				return
			}
			if (result.code == 1002 || result.code == 1001 || result.code === 1004 || result.code === 1102) {
				logout()
				return
			}
			successCallback(result)
		},
		fail: function(err) {
			uni.showToast({
				title: '网络不给力',
				icon: 'none'
			})
			return
		},
		complete: function() {
			uni.hideLoading()
		}
	})

}


export default{
  post,
	get,
	uploadFile,
}
