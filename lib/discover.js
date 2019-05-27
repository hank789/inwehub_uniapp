import { postRequest } from './request.js'
import ui from './ui.js'

function addDiscover (content, successCallback) {
  let data = {
    type: 'text',
    title: content,
    photos: [],
    files: [],
    category_id: '',
    tags: [],
    new_tags: [],
    mentions: [],
    current_address_name: '',
    current_address_longitude: '',
    current_address_latitude: '',
    group_id: 0
  }
  postRequest(`article/store`, data, false).then(res => {
    var code = res.code
    if (code === 6101) {
      // 已存在
      ui.toast(res.message)
      uni.redirectTo({ url: res.data.exist_url})
      return
    }
    if (code !== 1000) {
      ui.toast(res.message)
      return
    }

    // var id = res.data.id
    successCallback(res)
  })
}

function addLink (content, url, successCallback) {
  let data = {
    type: 'link',
    title: content,
    photos: [],
    url: url,
    files: [],
    category_id: '',
    tags: [],
    new_tags: [],
    mentions: [],
    current_address_name: '',
    current_address_longitude: '',
    current_address_latitude: '',
    group_id: 0
  }
  postRequest(`article/store`, data, false).then(res => {
    var code = res.code
    if (code === 6101) {
      // 已存在
      ui.toast(res.message)
      uni.redirectTo({ url: res.data.exist_url})
      return
    }
    if (code !== 1000) {
      ui.toast(res.message)
      return
    }

    // var id = res.data.id
    successCallback(res)
  })
}

export {
  addDiscover,
  addLink
}