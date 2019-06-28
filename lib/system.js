import { postRequest } from './request.js'
import ui from './ui.js'

function feedback (title, content, successCallback) {
  postRequest(`system/feedback`, {
    title: title,
    content: content
  }).then(response => {
    var code = response.code
    if (code !== 1000) {
      ui.toast(response.message)
      return
    } else {
      ui.toast(response.message)
      successCallback()
    }
  })
}
export {
  feedback
}
