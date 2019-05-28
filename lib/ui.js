function toast (title) {
  uni.showToast({
    title,
    icon: 'none'
  })
}

function alert (title, content, callback, okText) {
  uni.showModal({
    title: title,
    content: content,
    showCancel: false,
    confirmText: okText || '确定',
    success: function (res) {
      if (res.confirm) {
        if (callback) {
          callback()
        }
      }
    }
  })
}

function confirm (title, content, btnArray) {
  uni.showModal({
    title: title,
    content: content,
    showCancel: false,
    cancelText: btnArray[0] || '取消',
    confirmText: btnArray[1] || '确定',
    success: function (res) {
      if (res.confirm) {
        callback({index: 1})
      } else if (res.cancel) {
        callback({index: 0})
      }
    }
  })
}

export default {
  toast,
  alert,
  confirm
}