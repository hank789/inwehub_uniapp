
function getIndexByIdArray (arr, value, key = 'id') {
  for (var i in arr) {
    if (arr[i][key] === value) {
      return i
    }
  }
  return -1
}

/* 通过id获取递归中list */
function getListByIdArray (id, list) {
  let destList = null
  for (var i in list) {
    if (list[i].id === id) {
      destList = list
      return destList
    }

    if (list[i].children.length) {
      destList = getListByIdArray(id, list[i].children)
      if (destList) {
        return destList
      }
    }
  }
  return destList
}

export {
  getIndexByIdArray,
  getListByIdArray
}
