import { postRequest } from './request.js'

function addLink (title, url, tags, successCallback, failCallback) {
  let data = {
    type: 'link',
    title: title,
    url: url,
    tags: tags,
    draft: 0
  }
  postRequest(`article/store`, data, false).then(res => {
    var code = res.data.code
    if (code === 6101) {
      // 已存在
      failCallback(res)
      return
    }
    if (code !== 1000) {
      return
    }
    successCallback(res.data.data)
  })
}

function getRegions (successCallback) {
  postRequest(`home`, {}, false, {}, 0, false).then(res => {
    var code = res.code
    if (code !== 1000) {
      // window.mui.toast(res.message)
      return
    }
    successCallback(res.data.regions)
  })
}

export {
  addLink,
  getRegions
}