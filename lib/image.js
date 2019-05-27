import { postRequest } from './request'
import ls from './localstorage.js'

function getImageSuffix (src, width, height) {
  if (/\.svg$/.test(src) || /\.ico$/.test(src)) {
    return src
  }
  // 小米mix不压缩
	//#ifdef APP-PLUS
	if (ls.appDeviceInfo.model.indexOf('MIX') > 0) {
     return src
  }
	//#endif

  var suffix = '?x-oss-process=image/resize,m_lfit'
  if (width) {
    suffix += ',w_' + width
  }

  if (height) {
    suffix += ',h_' + height
  }
  return src + suffix
}

function saveImageByBase64 (base64, dest, successCallback, faillCallback) {
  var b = new plus.nativeObj.Bitmap()
    b.loadBase64Data(base64, function () {
      console.log('创建成功')
    }, function () {
      console.log('创建失败')
    })
    b.save(dest, {
      overwrite: true,
      quality: 100
    }, () => {
      console.log('保存成功')
      if (successCallback) {
        getLocalUrl(dest, (url) => {
          successCallback(url)
        })
      }
    }, () => {
      faillCallback()
      console.log('保存失败')
    })
}

function saveHtmlImgToGallery (html, path, successCallback, failCallback) {
  //#ifndef H5
	return
	//#endif
	
  html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title></title><style></style></head><body>' + html + '</body></html>'

  console.log('htmlToImage:' + html)

  postRequest('system/htmlToImage', {html: html})
    .then(response => {
      var code = response.code
      if (code !== 1000) {
				uni.showToast({
						title: response.message,
						icon: 'none'
				});
        return
      }
      saveImageByBase64(response.data.data.image, path, (url) => {
        plus.gallery.save(url, function () {
            console.log('保存图片到相册成功')
            successCallback(url)
          }, function () {
            console.log('保存图片到相册失败')
            failCallback()
          })
      }, () => {
        failCallback()
      })
    })
}




export {
  getImageSuffix,
  saveHtmlImgToGallery,
	saveImageByBase64
}
