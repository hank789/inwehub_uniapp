import { postRequest } from './request.js'
import ui from './ui.js'
import userAbility from './userAbility'

function addDiscover (content, tags, new_tags, mentions, selectedAddress, successCallback) {
  let data = {
    type: 'text',
    title: content,
    photos: [],
    files: [],
    category_id: '',
    tags: tags,
    new_tags: new_tags,
    mentions: mentions,
    current_address_name: selectedAddress && selectedAddress !== '不显示位置' && selectedAddress !== '所在位置' ? selectedAddress : '',
    current_address_longitude: selectedAddress && selectedAddress !== '不显示位置' && selectedAddress !== '所在位置' ? this.position.longt : '',
    current_address_latitude: selectedAddress && selectedAddress !== '不显示位置' && selectedAddress !== '所在位置' ? this.position.lat : '',
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

function addLink (content, url, group_id, successCallback) {
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
    group_id: group_id
  }
  postRequest(`article/store`, data, false).then(res => {
    var code = res.code
    if (code === 6101) {
      // 已存在
			let url = res.data.exist_url.split('/')
			uni.showModal({
				title: '提示',
				content: res.message,
				success: (res) => {
						if (res.confirm) {
								console.log('用户点击确定');
								uni.redirectTo({ 
									url: '/pages/discover/detail?slug='+url[3]
								})
						} else if (res.cancel) {
								console.log('用户点击取消');
						}
				}
			})
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

/* 点赞 */
function upvote (context, submissionId, increaseCallback, decreaseCallback) {
  postRequest(`article/upvote-submission`, {
    submission_id: submissionId
  }).then(response => {
    var code = response.code
    if (code !== 1000) {
      //if (code === 6108) {
        //userAbility.inviteJoinInGroup(context, response.data.group_id)
        //return
      //}

      ui.toast(response.message)
      return
    }

    var isFollowed = response.data.type === 'upvote' ? 1 : 0

    // ui.toast(response.data.tip)
    if (isFollowed) {
      increaseCallback(response)
    } else {
      decreaseCallback(response)
    }
  })
}

/* 点赞 */
function upvoteOnlyHome (context, submissionId, increaseCallback, decreaseCallback) {
  postRequest(`article/upvote-submission`, {
    submission_id: submissionId
  }, false).then(response => {
    var code = response.code
    if (code !== 1000) {
      // if (code === 6108) {
      //   userAbility.inviteJoinInGroup(context, response.data.group_id)
      //   return
      // }

      ui.toast(response.message)
      return
    }

    var isFollowed = response.data.type === 'upvote' ? 1 : 0

    // ui.toast(response.data.tip)
    if (isFollowed) {
      increaseCallback(response)
    } else {
      decreaseCallback(response)
    }
  })
}

/* 点踩 */
function downVote (context, submissionId, increaseCallback, decreaseCallback) {
  postRequest(`article/downvote-submission`, {
    submission_id: submissionId
  }).then(response => {
    var code = response.code
    if (code !== 1000) {
      // if (code === 6108) {
      //   userAbility.inviteJoinInGroup(context, response.data.group_id)
      //   return
      // }

      ui.toast(response.message)
      return
    }

    var isFollowed = response.data.type === 'downvote' ? 1 : 0

    // ui.toast(response.data.tip)
    if (isFollowed) {
      increaseCallback(response)
    } else {
      decreaseCallback(response)
    }
  })
}

/* 收藏，取消收藏 */
function collect (context, submissionId, increaseCallback, decreaseCallback) {
  var data = {
    id: submissionId
  }

  postRequest(`article/bookmark-submission`, data).then(response => {
    var code = response.code
    if (code === 6108) {
      // userAbility.inviteJoinInGroup(context, response.data.group_id)
      ui.toast(response.message)
      return
    } else if (code !== 1000) {
      ui.alert(response.message)
      return
    }
    var isCollected = false
    if (response.data.type === 'unbookmarked') {
      decreaseCallback()
      isCollected = false
      ui.toast('已取消收藏')
    } else {
      increaseCallback()
      isCollected = true
      ui.toast('收藏成功')
    }
    if (process.env.NODE_ENV === 'production' && window.mixpanel) {
      // mixpanel
      window.mixpanel.track(
        'inwehub:bookmark:success',
        {
          'app': 'inwehub',
          'user_device': window.getUserAppDevice(),
          'page': submissionId,
          'page_name': 'submission',
          'page_title': !isCollected ? 'cancel' : 'bookmark',
          'referrer_page': ''
        }
      )
    }
  })
}

/* 删除 */
function deleteItem (id, successCallback) {
  var btnArray = ['取消', '确定']
  ui.confirm('确定删除吗？', ' ', btnArray, (e) => {
    if (e.index === 1) {
      // 进行删除
      postRequest(`article/destroy-submission`, {
        id: id
      }).then(response => {
        var code = response.code
        // 如果请求不成功提示信息 并且返回上一页；
        if (code !== 1000) {
          ui.toast(response.message)
        } else {
          ui.toast('删除成功')
          successCallback()
        }
      })
    }
  })
}

/* 设置为精选 */
function addGood (submissionId, callback) {
  postRequest(`group/setSubmissionRecommend`, {submission_id: submissionId}).then(response => {
    var code = response.code
    if (code !== 1000) {
      ui.toast(response.message)
      return
    }
    ui.toast('操作成功')
    callback()
  })
}

/* 取消精选 */
function cancelGood (submissionId, callback) {
  postRequest(`group/cancelSubmissionRecommend`, {submission_id: submissionId}).then(response => {
    var code = response.code
    if (code !== 1000) {
      ui.toast(response.message)
      return
    }

    ui.toast('操作成功')
    callback()
  })
}

/* 设为置顶 */
function setTop (submissionId, callback) {
  postRequest(`group/setSubmissionTop`, {submission_id: submissionId}).then(response => {
    var code = response.code
    if (code !== 1000) {
      ui.toast(response.message)
      return
    }
    ui.toast('操作成功')
    callback()
  })
}

/* 取消置顶 */
function cancelTop (submissionId, callback) {
  postRequest(`group/cancelSubmissionTop`, {submission_id: submissionId}).then(response => {
    var code = response.code
    if (code !== 1000) {
      ui.toast(response.message)
      return
    }
    ui.toast('操作成功')
    callback()
  })
}

/* 举报 */
function report (context, link) {
  context.$refs.alertReport.setLink(link)
  context.$refs.alertReport.show()
}


export {
  addDiscover,
  addLink,
  upvote,
  downVote,
  deleteItem,
  collect,
  addGood,
  cancelGood,
  cancelTop,
  setTop,
  report,
  upvoteOnlyHome
}