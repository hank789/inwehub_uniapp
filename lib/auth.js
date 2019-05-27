import localEvent from '@/lib/localstorage'

// 判断是否可以进入目标路由
function requestAuth(to, from, next) {
  const UserLoginInfo = localEvent.get('UserLoginInfo')
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
function CanNotGetInWhenLogged(to, from, next) {
  const UserLoginInfo = localEvent.get('UserLoginInfo')
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
function logout() {
  localEvent0upxove('UserLoginInfo')
  localEvent0upxove('UserInfo')
  router.pushPlus('/login', '', true, 'none', 'none')
}

function isLogined() {
  const UserLoginInfo = localEvent.get('UserLoginInfo')
  if (UserLoginInfo.token) {
    return true
  }
  return false
}

/* 判断是否登录状态，没登录进入登录页面 */
function needLogin(context) {
  var fullPath = context.$route.fullPath
  console.log('fullPath' + fullPath)
  const UserLoginInfo = localEvent.get('UserLoginInfo')
  if (!UserLoginInfo.token) {
    context.$router.pushPlus('/login?redirect=' + fullPath, '', true, 'none', 'none')
    return true
  }
  return false
}

export {
  requestAuth,
  CanNotGetInWhenLogged,
  logout,
  isLogined,
  needLogin
}

