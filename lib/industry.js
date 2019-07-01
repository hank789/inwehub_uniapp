import { postRequest } from './request.js'

function getTagsList(tagType, successCallback) {
  postRequest(`tags/load`, { tag_type: tagType }, false).then(res => {
    var code = res.code
    if (code !== 1000) {
		  return
    }
	var list = res.data.tags
	list.forEach(item=> {item.isSelected = true })
	
    successCallback(list)
  })
}
export {
	getTagsList
}
