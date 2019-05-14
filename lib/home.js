import { post as postRequest } from './ajax_request.js'

function getHomeData (successCallback) {
  postRequest(`home`, {}, false, {}, 0, false).then(res => {
    console.log(res)
    var code = res.code
    if (code !== 1000) {
      // window.mui.toast(res.message)
      return
    }
    successCallback(res.data)
  })
}

export {
    getHomeData
}