import { postRequest } from './request.js'

function feedback (title, content) {
  postRequest(`system/feedback`, {
    title: title,
    content: content
  }).then(response => {
    var code = response.data.code
    if (code !== 1000) {
      ui.toast(response.message)
      return
    } else {
      ui.toast(response.message)
    }
  })
}
export {
  feedback
}
