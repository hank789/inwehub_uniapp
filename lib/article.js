import { postRequest } from './request.js'
import ui from './ui'

function addLink (title, url, tags, successCallback, failCallback) {
  let data = {
    type: 'link',
    title: title,
    url: url,
    tags: tags,
    draft: 0
  }
  postRequest(`article/store`, data, false).then(res => {
    var code = res.code
    if (code === 6101) {
      // 已存在
      failCallback(res)
      return
    }
    if (code !== 1000) {
      ui.toast(res.message)
      return
    }
    successCallback(res.data)
  })
}

function getRegions (successCallback) {
  postRequest(`home`, {}, false, {}, 0, false).then(res => {
    var code = res.code
    if (code !== 1000) {
      ui.toast(res.message)
      return
    }
    successCallback(res.data.regions)
  })
}

function getShareList (uuid, successCallback) {
	postRequest(`readhub/mySubmission`, {uuid: uuid }, false).then(res => {
		var code = res.code
		if (code !== 1000) {
      ui.toast(res.message)
		  return
		}
		successCallback(res.data)
	})
}

function getDetail(slug, successCallback) {
  postRequest(`article/detail-by-slug`, {slug: slug}, false).then(response => {
    var code = response.code
    if (code !== 1000) {
      ui.toast(response.message)
      return
    }

    successCallback(response.data)
  })
}

function support(id, upCallback, downCallback){
  var data = {
    submission_id: id
  }

  postRequest(`article/upvote-submission`, data, false).then(response => {
    var code = response.code

    if (code !== 1000) {
      ui.alert(response.message)
      return
    }
    var isUpvoted = response.data.type === 'upvote' ? 1 : 0
    if (isUpvoted) {
      upCallback()
    } else {
      downCallback()
    }

    ui.toast(response.message)
  })
}


export {
  addLink,
  getRegions,
	getShareList,
  getDetail,
  support
}