import localEvent from '@/lib/localstorage'

// 判断是否可以进入目标路由
function requestAuth (to, from, next) {
  let UserLoginInfo = localEvent.get('UserLoginInfo')
  if ((!window.mui.os.plus && window.mui.os.wechat === undefined) || UserLoginInfo.token) {
    next()
  } else {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  }
}

// 登录状况不能进入的页面
function CanNotGetInWhenLogged (to, from, next) {
  let UserLoginInfo = localEvent.get('UserLoginInfo')
  if (UserLoginInfo.token) {
    next({
      path: '/my',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
}

// 退出登录
function logout () {
  localEvent.remove('UserLoginInfo')
  localEvent.remove('UserInfo')
  uni.navigateTo({url: '/pages/login/login'})
}

function isLogined () {
  let UserLoginInfo = localEvent.get('UserLoginInfo')
  if (UserLoginInfo.token) {
    return true
  }
  return false
}

/* 判断是否登录状态，没登录进入登录页面 */
function needLogin (context) {
  var fullPath = context.$route.fullPath
  console.log('fullPath' + fullPath)
  let UserLoginInfo = localEvent.get('UserLoginInfo')
  if (!UserLoginInfo.token) {
    uni.navigateTo({url: '/pages/login/login?redirect=' + fullPath})
    return true
  }
  return false
}

function needPhoneAuth() {
	uni.showModal({
    title: '请完成实名认证',
    content: '使用互联网服务需依法实名认证',
		confirmText: '去认证',
    success: function (res) {
        if (res.confirm) {
            console.log('用户点击确定');
						uni.navigateTo({url: '/pages/wechat/bindPhone'})
        } else if (res.cancel) {
            console.log('用户点击取消');
        }
    }
	});
}

export {
  requestAuth,
  CanNotGetInWhenLogged,
  logout,
  isLogined,
  needLogin,
	needPhoneAuth
}
