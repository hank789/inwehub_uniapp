let globalFilters = {
    capitalize: function (value) { // 首字母大写
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    timeago: function (value) { // timeago
      return value
    }
}

export default globalFilters