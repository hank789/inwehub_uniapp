import html5plus from "./html5plus.js"
import localstorage from "./localstorage.js"
import ajaxRequest from './ajaxRequest.js'

/**
 * 获取地理位置
 * @param callback
 * @param failCallback
 */
function getGeoPosition (callback, failCallback) {
	//#ifdef APP-PLUS
	console.log('交由plus获取位置信息')
  html5plus.getGeoPosition(callback, failCallback)
	//#endif
	//#ifndef APP-PLUS
	console.log('交由uniapp获取位置信息')
	uni.getLocation({
    type: 'wgs84',
    success: function (res) {
        console.log('当前位置的经度：' + res.longitude);
        console.log('当前位置的纬度：' + res.latitude);
				var info = {
					coordsType: 'wgs84', // 坐标类型
					addresses: '', // 地址信息
					longt: res.longitude, // 经度
					lat: res.latitude // 纬度
      }
			callback(info)
    },
		fail(e) {
      if (failCallback) {
        failCallback(e)
      }
		}
	});
	//#endif
}

/**
 * 保存用户当前位置信息
 */
function saveLocationInfo () {
	var appDeviceInfo = localstorage.get('appDeviceInfo')
  getGeoPosition((position) => {
    let deviceSystem = appDeviceInfo.platform
		let deviceName = appDeviceInfo.platform
    let deviceModel = ''
    let deviceCode = ''
    //#ifdef APP-PLUS
    deviceName = plus.os.name
    deviceModel = plus.os.version
    deviceCode = plus.device.uuid
    //#endif
		
    var iosPushNoticeOpen = -1
		html5plus.checkPermission('NOTIFITION',() => {
      iosPushNoticeOpen = 1
    }, () => {
			iosPushNoticeOpen = 0
		})

    localstorage.set('location', position)

    ajaxRequest.post(`system/location`, {
      device_name: deviceName,
      device_system: deviceSystem,
      device_model: deviceModel,
      device_code: deviceCode,
      current_address_name: position.addresses,
      current_address_longitude: position.longt,
      current_address_latitude: position.lat,
      ios_push_notify: iosPushNoticeOpen
    }).then(res => {

    })
  })
}

function appShowNotify() {
	var iosPushNoticeOpen = -1
	var appDeviceInfo = localstorage.get('appDeviceInfo')
	var platform = appDeviceInfo.platform
	//#ifdef H5
	platform = 'web'
	//#endif
	html5plus.checkPermission('NOTIFITION',() => {
		iosPushNoticeOpen = 1
	}, () => {
		iosPushNoticeOpen = 0
	})
	ajaxRequest.post(`system/activityNotify`, {
		device_system: platform,
		type: 'login',
		ios_push_notify: iosPushNoticeOpen
	}).then(res => {

	})
}

function getCurrentRoute () {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  return page.route
}

function setNavbarSearchInputText (context, text) {
  // #ifdef APP-PLUS
  var webview = context.$mp.page.$getAppWebview();
  webview.setTitleNViewSearchInputText(text)
  // #endif
}

/* 获取平台 */
function getPlatform () {
  let platform = ''

  // #ifdef APP-PLUS
  var appDeviceInfo = localstorage.get('appDeviceInfo')
  if (appDeviceInfo && appDeviceInfo.platform) {
    platform = appDeviceInfo.platform
  }
  // #endif

  //#ifdef H5
  platform = 'web'
  //#endif

  return platform
}

export {
  getGeoPosition,
  saveLocationInfo,
	appShowNotify,
  getCurrentRoute,
  setNavbarSearchInputText,
  getPlatform
}