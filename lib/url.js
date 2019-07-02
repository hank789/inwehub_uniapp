import { postRequest } from './request'
import ui from '@/lib/ui'

/**
 * 获取url信息
 * @param answerId
 */
function fetchArticle (url, succeeCallback) {
  postRequest(`article/fetch-url-title`, {
    url: url
  }).then(response => {
    var code = response.code

    if (code !== 1000) {
      ui.toast(response.message)
      return
    }

    succeeCallback(response.data)
  })
}

function isUrl (url) {
  return /^https?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+/.test(url)
}

export {
  fetchArticle,
  isUrl
}

