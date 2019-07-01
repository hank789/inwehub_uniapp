import { getImageSuffix } from '@/lib/image'
var timeago = require("timeago.js");

let globalFilters = {
    capitalize: function (value) { // 首字母大写
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    timeago: function (value) { // timeago
      return timeago.format(value, 'zh_CN')
    },
    imageSuffix: function (value, width, height) {
      return getImageSuffix(value, width, height)
    }
}

export default globalFilters