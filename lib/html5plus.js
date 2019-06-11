import localstorage from "./localstorage.js"

//检查版本更新
function checkUpdate (that) {
	plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
		console.log(JSON.stringify(widgetInfo))
		var wgtVer = widgetInfo.version
		var appInstallVersion = localstorage.get('app_install_version')
		if (!appInstallVersion || appInstallVersion < wgtVer) {
			localstorage.set('app_install_version', wgtVer)
			appInstallVersion = wgtVer
		}
		console.log('当前应用版本：' + wgtVer)
		console.log('当前安装版本：' + appInstallVersion)
		that.$request.get('system/version',{app_uuid: plus.device.uuid + wgtVer, appid: widgetInfo.appid, appname: widgetInfo.name}).then(responseData => {
			if (responseData.code == 1000) {
			  var appVersion = responseData.data.app_version
			  if (appVersion && appInstallVersion < appVersion) {
				var packageUrl = responseData.data.package_url
				var isIosForce = responseData.data.is_ios_force
				var isAndroidForce = responseData.data.is_android_force
				var platform = uni.getSystemInfoSync().platform
				// 如果是强更
				if (isIosForce === 1 && platform=='ios') {
				  uni.showToast({
				  	title: '有新的版本升级',
				  	icon: 'none'
				  })
				  plus.runtime.openURL(responseData.data.ios_force_update_url)
				} else if (isAndroidForce === 1 && platform=='android') {
				  uni.showToast({
				  	title: '有新的版本升级',
				  	icon: 'none'
				  })
				  // market://details?id=io.dcloud.HelloMUI
				  // 'com.tencent.android.qqdownloader'
				  plus.runtime.openURL(responseData.data.android_force_update_url, function (e) {
					plus.nativeUI.confirm('很抱歉，您未安装腾讯应用宝，请安装后再更新', function (i) {
					  if (i.index === 0) {
						plus.runtime.openURL('market://details?id=com.tencent.android.qqdownloader')
					  } else if (i.index === 1) {
						plus.runtime.quit()
					  } else {
						plus.runtime.quit()
					  }
					}, inf.name, ['立即下载', '暂不下载', '取消'])
				  })
				} else if ((isIosForce === 2 && platform=='ios') || (isAndroidForce === 2 && platform=='android')) {
				  // 什么都不做
				} else {
				  localstorage.set('app_update_msg', {msg: responseData.data.update_msg})
				  // 下载升级包
				  downWgt(packageUrl, appVersion)
				}
			  }
			}
		})
	});
}

function downWgt (wgtUrl, appVersion) {
  console.log('下载安装包')
  // window.plus.nativeUI.showWaiting('有新版本更新')
  plus.downloader.createDownload(wgtUrl, {filename: '_doc/update/'}, function (d, status) {
    if (status === 200) {
      console.log('下载wgt文件成功！' + appVersion)
      installWgt(d.filename, appVersion) // 安装wgt包
    } else {
      plus.nativeUI.alert('下载更新文件失败:' + status)
    }
    plus.nativeUI.closeWaiting()
  }).start()
}

// 更新应用资源
function installWgt (path, appVersion) {
  // window.plus.nativeUI.showWaiting()
  plus.runtime.install(path, {}, function () {
    plus.nativeUI.closeWaiting()
    console.log('安装wgt文件成功！' + appVersion)
    removeFile(path)
    localstorage.set('app_install_version', appVersion)
    var updateMsg = localstorage.get('app_update_msg')
    uni.showModal({content: updateMsg.msg, title: '新版本更新', success: (e) => {
      if (e.confirm) {
        plus.runtime.restart()
      }
    }})
  }, function (e) {
    plus.nativeUI.closeWaiting()
    console.log('安装wgt文件失败[' + e.code + ']:' + e.message)
    removeFile(path)
    // plus.nativeUI.alert("失败["+e.code+"]："+e.message);
  })
}

function removeFile (path) {
  plus.io.resolveLocalFileSystemURL(path, function (entry) {
    // 可通过entry对象操作文件
    entry.remove(function (entry) {
      console.log('Remove succeeded')
    }, function (e) {
      console.log(e.message)
    })
  }, function (e) {
    console.log('Resolve file URL failed: ' + e.message)
  })
}

/**
 * 检查权限
 */
function checkPermission (type, successCallback, failCallback) {
	//#ifdef APP-PLUS
	var permissionName = ''
  switch (type) {
    case 'LOCATION':
      permissionName = 'LOCATION'
      break
    case 'NOTIFITION':
      permissionName = 'NOTIFITION'
      break
    default:
      throw new Error('checkPermission type 不支持')
  }
  var permission = plus.navigator.checkPermission(permissionName)
	console.log('permissionQueryResult type:' + type + ' , permission:' + permission)
	switch (permission) {
		case 'unsupported':
		case 'notdeny':
		case 'undetermined':
		case 'authorized':
			successCallback(permission)
			break
		case 'denied':
			failCallback(permission)
			break
		default:
			successCallback(permission)
			break
	}
  //#endif
	//#ifndef APP-PLUS
	successCallback()
	//#endif
}

/**
 * 跳转到系统位置设置信息页
 */
function toSettingSystem (type) {
  //#ifdef APP-PLUS
  let appDeviceInfo = localstorage.get('appDeviceInfo')
  var platform = appDeviceInfo.platform
  if (platform == 'ios') {
    plus.runtime.openURL('app-settings:')
  } else {
    var main = plus.android.runtimeMainActivity() // 获取activity
    var Intent = plus.android.importClass('android.content.Intent')
    var Settings = plus.android.importClass('android.provider.Settings')

    var intent = null
    switch (type) {
      case 'LOCATION':
        intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS)
        break
      case 'NOTIFITION':
        intent = new Intent(Settings.ACTION_APPLICATION_SETTINGS)
        break
      case 'Contact':
        intent = new Intent(Settings.ACTION_SETTINGS)
        break
      default:
        throw new Error('toSettingSystem type 不支持')
    }

    main.startActivity(intent)
  }
  //#endif
}

function saveDeviceInfo(that) {
	//#ifdef APP-PLUS
	var appDeviceInfo = localstorage.get('appDeviceInfo')
	var token = localstorage.get('token')
	if (!token) return
	var deviceInfo = plus.push.getClientInfo()
	console.log(deviceInfo)
	that.$request.post(`system/device`, {
		client_id: deviceInfo.clientid,
		device_token: deviceInfo.token,
		appid: deviceInfo.appid,
		appkey: deviceInfo.appkey,
		device_type: appDeviceInfo.platform === 'ios' ? 2 : 1
	}, false).then(res => {

	})
	//#endif
}

/**
 * 获取geo位置
 */
function getGeoPosition (callback, failCallback) {
  console.log('准备获取位置信息')
	plus.geolocation.getCurrentPosition((position) => {
		var codns = position.coords
		var info = {
			coordsType: position.coordsType, // 坐标类型
			addresses: position.addresses, // 地址信息
			longt: codns.longitude, // 经度
			lat: codns.latitude // 纬度
		}
		console.log('获取到定位信息: ' + JSON.stringify(info))
		callback(info)
	}, (e) => {
		console.log('获取位置信息失败: ' + JSON.stringify(e))
		if (failCallback) {
			failCallback(e.message)
		}
	}, {geocode: true, provider: 'baidu', coordsType: 'bd09ll'})
}

/**
 * 获取手机联系人
 */
function getContacts (successCallback, failCallback) {
	plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, function (addressbook) {
      addressbook.find(null, function (contacts) {
        if (contacts.length === 0) {
          console.error('addressbook.find failed: 数据为空')
          failCallback()
        } else {
          console.log('getContacts Success:' + JSON.stringify({contacts: contacts}))
          successCallback(contacts)
        }
      }, function (e) {
        failCallback(e)
        console.error('addressbook.find failed:' + e.message)
      }, {multiple: true})
    }, function (e) {
      failCallback(e)
      console.error('Get address book failed:' + e.message)
  })
}


export default{
	checkUpdate,
  checkPermission,
  toSettingSystem,
  saveDeviceInfo,
	getGeoPosition,
	getContacts
}