import { postRequest } from './request.js'

function getHomeData (successCallback) {
  postRequest(`home`, {}, false, {}, 0, false).then(res => {
    var code = res.code
    if (code !== 1000) {
      // window.mui.toast(res.message)
      return
    }
    successCallback(res.data)
  })
}

function getListData (pageNum, typeValue, successCallback) {
  postRequest(`readList`, {page: pageNum, tagFilter: typeValue}, false).then(res => {
    var code = res.code
    if (code !== 1000) {
      // window.mui.toast(res.message)
      return
    }
    successCallback(res.data)
  })
}

export {
    getHomeData,
    getListData
}