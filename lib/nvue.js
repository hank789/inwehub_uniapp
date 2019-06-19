import ls from '@/lib/localstorage.js'
import util from '@/lib/util.js'
import {logout, needPhoneAuth} from '@/lib/auth.js'
let app_id = 'www';
//#ifdef APP-PLUS
app_id = plus.runtime.appid;
//#endif

function getRequest(url, data = {}) {
	var appDeviceInfo = ls.get('appDeviceInfo')
	var platform = appDeviceInfo.platform
	//#ifdef H5
	platform = 'web'
	//#endif
  data.current_version = ls.get('app_install_version')
  data.user_device = platform
  data.system_appid = app_id
  return new Promise(function(resolve, reject) {
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
					reject(res.data)
				}
        if (res.data.code == 1002 || res.data.code == 1001 || res.data.code === 1004 || res.data.code === 1102) {
          uni.showToast({
            title: '您的登陆已过期',
            icon: 'none'
          })
          logout()
          reject(res.data)
        }
        resolve(res.data)
      },
      fail: function(err) {
        uni.showToast({
          title: '网络不给力',
          icon: 'none'
        })
        reject(err)
      },
      complete: function() {}
    })
  })
}

function postRequest(url, data = {}, showLoading = false) {
	var appDeviceInfo = ls.get('appDeviceInfo')
	var platform = appDeviceInfo.platform
	//#ifdef H5
	platform = 'web'
	//#endif
  console.log(url)
  console.log('postRequest-data:' + JSON.stringify(data))
  //console.log(data)
  data.current_version = ls.get('app_install_version')
  data.user_device = platform
  data.system_appid = app_id
  if (showLoading) {
    uni.showLoading({
      title: '请求中'
    });
  }
  return new Promise(function(resolve, reject) {
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
					reject(res.data)
				}
        if (res.data.code == 1002 || res.data.code == 1001 || res.data.code === 1004 || res.data.code === 1102) {
          uni.showToast({
            title: '您的登陆已过期',
            icon: 'none'
          })
          logout()
          reject(res.data)
        }
        resolve(res.data)
      },
      fail: function(err) {
        uni.showToast({
          title: '网络不给力',
          icon: 'none'
        })
        reject(err)
      },
      complete: function() {
        uni.hideLoading()
      }
    })
  })
}

function uploadFile(url, files, formData=[], showLoading = false) {
	var appDeviceInfo = ls.get('appDeviceInfo')
	var platform = appDeviceInfo.platform
	//#ifdef H5
	platform = 'web'
	//#endif
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
	return new Promise(function(resolve, reject) {
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
					reject(result)
				}
				if (result.code == 1002 || result.code == 1001 || result.code === 1004 || result.code === 1102) {
					uni.showToast({
						title: '您的登陆已过期',
						icon: 'none'
					})
					logout()
					reject(result)
				}
				resolve(result)
			},
			fail: function(err) {
				uni.showToast({
					title: '网络不给力',
					icon: 'none'
				})
				reject(err)
			},
			complete: function() {
				uni.hideLoading()
			}
		})
	})
}


export default {
  postRequest,
	uploadFile,
  getRequest
}
