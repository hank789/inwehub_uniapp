import store from '../store'
import ls from './localstorage.js'
import util from './util.js'
// 接口地址
let base_url = store.state.baseApiUrl;
let app_id = 'www';
//#ifdef APP-PLUS
app_id = plus.runtime.appid;
//#endif

let appDeviceInfo = ls.get('appDeviceInfo')

function apiRequest(url, data = {}) {
  data.current_version = ls.get('app_install_version')
  data.user_device = appDeviceInfo.platform
  data.system_appid = app_id
  return new Promise(function(resolve, reject) {
    uni.request({
      url: base_url + url,
      header: {
        'content-type': 'application/json',
        'Authorization': 'bearer ' + ls.get('token')
      },
      data: data,
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if (res.data.code == 1002 || res.data.code == 1001) {
          uni.showToast({
            title: '您的登陆已过期',
            icon: 'none'
          })
          uni.reLaunch({
            url: '/pages/login/login'
          });
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

function post (url, data, showLoading = false) {
  return postRequest(url, data, showLoading)
}
function get (url, data, showLoading = false) {
  return apiRequest(url, data, showLoading)
}

function postRequest(url, data, showLoading = false) {
  console.log(base_url + url)
  //console.log(data)
  data.current_version = ls.get('app_install_version')
  data.user_device = appDeviceInfo.platform
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
      url: base_url + url,
      data: data,
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if (res.data.code == 1002 || res.data.code == 1001) {
          uni.showToast({
            title: '您的登陆已过期',
            icon: 'none'
          })
          uni.reLaunch({
            url: '/pages/login/login'
          });
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
	console.log(base_url + url)
	console.log(files)
	console.log(formData)
	formData.current_version = ls.get('app_install_version')
	formData.user_device = appDeviceInfo.platform
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
			url: base_url + url,
			formData: formData,
			files: files,
			success: function(res) {
				var result = res.data
				if (!result.code) {
					result = JSON.parse(result)
				}
				if (result.code == 1002 || result.code == 1001) {
					uni.showToast({
						title: '您的登陆已过期',
						icon: 'none'
					})
					uni.reLaunch({
						url: '/pages/login/login'
					});
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


export {
  apiRequest,
  postRequest,
  post,
	get,
	uploadFile
}
