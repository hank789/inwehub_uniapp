import { postRequest } from './request'
import ls from './localstorage.js'
import ui from './ui'

function getImageSuffix(src, width, height) {
  if (/\.svg$/.test(src) || /\.ico$/.test(src)) {
    return src
  }
  // 小米mix不压缩
  // #ifdef APP-PLUS
	var appInfo = ls.get('appDeviceInfo')
  if (appInfo.model.indexOf('MIX') > 0) {
    return src
  }
  // #endif

  var suffix = '?x-oss-process=image/resize,m_lfit'
  if (width) {
    suffix += ',w_' + width * 3
  }

  if (height) {
    suffix += ',h_' + height * 3
  }
  return src + suffix
}

function saveImageByBase64(base64, dest, successCallback, faillCallback) {
  var b = new plus.nativeObj.Bitmap()
  b.loadBase64Data(base64, function() {
    console.log('创建成功')
  }, function() {
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

function saveHtmlImgToGallery(html, path, successCallback, failCallback) {
  // #ifndef H5
  return
  // #endif

  html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title></title><style></style></head><body>' + html + '</body></html>'

  console.log('htmlToImage:' + html)

  postRequest('system/htmlToImage', { html: html })
    .then(response => {
      var code = response.code
      if (code !== 1000) {
        uni.showToast({
          title: response.message,
          icon: 'none'
        })
        return
      }
      saveImageByBase64(response.data.image, path, (url) => {
        plus.gallery.save(url, function() {
          console.log('保存图片到相册成功')
          successCallback(url)
        }, function() {
          console.log('保存图片到相册失败')
          failCallback()
        })
      }, () => {
        failCallback()
      })
    })
}

function pathToBase64(path) {
  return new Promise(function(resolve, reject) {
    if (typeof window === 'object' && 'document' in window) {
      var canvas = document.createElement('canvas')
      var c2x = canvas.getContext('2d')
      var img = new Image()
      img.onload = function() {
        canvas.width = img.width
        canvas.height = img.height
        c2x.drawImage(img, 0, 0)
        resolve(canvas.toDataURL())
      }
      img.onerror = reject
      img.src = path
      return
    }
    if (typeof plus === 'object') {
      var bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now())
      bitmap.load(path, function() {
        try {
          var base64 = bitmap.toBase64Data()
        } catch (error) {
          reject(error)
        }
        bitmap.clear()
        resolve(base64)
      }, function(error) {
        bitmap.clear()
        reject(error)
      })
      return
    }
    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      wx.getFileSystemManager().readFile({
        filePath: path,
        encoding: 'base64',
        success: function(res) {
          resolve('data:image/png;base64,' + res.data)
        },
        fail: function(error) {
          reject(error)
        }
      })
      return
    }
    reject(new Error('not support'))
  })
}

async function imagesToBase64(images) {
  const rs = await Promise.all(images.map(image => pathToBase64(image.path)))
    .then(res => {
      return res
    })
    .catch(error => {
      console.error(error)
      return []
    })
  return rs
}

/**
 * 上传图片到服务器，服务器返回url地址
 */
function uploadImagesByBase64(context, id, photos, successCallback, failCallback) {
  if (photos.length < 1) {
    failCallback('请选择图片')
    return
  }

  var imageCount = photos.length

  var finishCount = 0

  var options = {
    disableAutoClose: true,
    onUploadProgress: (progressEvent) => {
      var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      if (percentCompleted) {
        var percentCompletedNew = (percentCompleted / (imageCount * 100)) * 100
        var totalFinishCompleted = finishCount * (1 / imageCount * 100)
        console.log('imageCount:' + imageCount)
        console.log('percentCompletedPrev:' + percentCompleted)
        console.log('percentCompletedIng:' + percentCompletedNew)
        console.log('percentCompleted:' + context.percentCompleted)
        console.log('totalFinishCompleted:' + totalFinishCompleted)
        context.percentCompleted = totalFinishCompleted + percentCompletedNew
        console.log('percentCompletedAfter:' + context.percentCompleted)

        // window.mui.uploadWaitingValue(context.percentCompleted)

        if (percentCompleted === 100) {
          finishCount++
        }
      }
    }
  }

  // window.mui.showUploadWaiting()

  _circleUploadImageByBase64(context, id, photos, successCallback, failCallback, options)
}

function _uploadImagesByBase64(context, id, photos, successCallback, failCallback, options) {
  postRequest('article/uploadImage', { id: id, photos: photos }, false, options)
    .then(response => {
      var code = response.code
      if (code !== 1000) {
        ui.toast(response.message)
        if (failCallback) {
          failCallback(response.message)
        }
        return
      }

      successCallback(response.data)
    })
}

function _circleUploadImageByBase64(context, id, photos, successCallback, failCallback, options) {
  if (photos.length) {
    var waitUploads = photos.splice(0, 2)
    _uploadImagesByBase64(context, id, waitUploads, (data) => {
      if (photos.length) {
        _circleUploadImageByBase64(context, id, photos, successCallback, failCallback, options)
      } else {
        // window.mui.closeUploadWaiting()
        successCallback(data)
      }
    }, (data) => {
      failCallback(data)
    }, options)
  }
}

export {
  getImageSuffix,
  saveHtmlImgToGallery,
  saveImageByBase64,
  pathToBase64,
  imagesToBase64,
  uploadImagesByBase64
}
