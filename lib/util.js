import localstorage from "./localstorage.js"

//将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
function parseDateStr(str) {
	var a = str.split(/[^0-9]/);
	return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
}

//时间戳 转 YY-mm-dd HH:ii:ss 
function formatDateTime(inputTime) {
	var date = new Date(inputTime);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}

function getCurrentWebview() {
	var pages = getCurrentPages();
	var page = pages[pages.length - 1];
	// #ifdef APP-PLUS
	var currentWebview = page.$getAppWebview();
	console.log(currentWebview.id);
	return currentWebview;
	// #endif
}

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
		that.$ajax.get('system/version',{app_uuid: plus.device.uuid + wgtVer, appid: widgetInfo.appid, appname: widgetInfo.name}).then(responseData => {
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
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function (milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function (dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function (number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};
	
export default{
	parseDateStr,
	formatDateTime,
	getCurrentWebview,
	checkUpdate,
	dateUtils
}
