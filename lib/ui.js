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
        callback()
      }
    }
  })
}

export default {
  toast,
  alert
}