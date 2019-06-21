/**
 * 检查权限
 */
function checkPermission(type, successCallback, failCallback) {

	// #ifndef APP-PLUS
	failCallback()
	return
	// #endif

	var permissionName = ''
	switch (type) {
		case 'LOCATION':
			permissionName = 'LOCATION'
			break
		case 'NOTIFITION':
			permissionName = 'NOTIFITION'
			break
		default:
			throw new Error('checkPermission type 不支持')
	}
	// #ifdef
	var permission = window.plus.navigator.checkPermission(permissionName)
	console.log('permissionQueryResult type:' + type + ' , permission:' + permission)
	switch (permission) {
		case 'authorized':
			successCallback(permission)
			break
		default:
			failCallback(permission)
			break
	}
	// #endif
}

export {
	checkPermission
}
