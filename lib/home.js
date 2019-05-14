import { postRequest } from './request.js'

function getHomeData (successCallback) {
  postRequest(`home`, {}, false, {}, 0, false).then(res => {
    var code = res.data.code
    if (code !== 1000) {
      // window.mui.toast(res.message)
      return
    }
    successCallback(res.data.data)
  })
}

export {
    getHomeData
}