	import store from '../store'
	import devEnv from './dev.env.js'
	import prodEnv from './prod.env.js'
	import ls from '@/lib/localstorage.js'
	var appid = ''
	//#ifdef APP-PLUS
	appid = plus.runtime.appid
	//#endif
	if (process.env.NODE_ENV === 'development' || appid === '__UNI__3FD074B') {
		store.commit('setBaseApiUrl', devEnv.BASE_API_URL)
    store.commit('setWebRoot', devEnv.H5_ROOT)
		ls.set('baseApiUrl',devEnv.BASE_API_URL)
		ls.set('webRoot',devEnv.H5_ROOT)
		console.log('开发环境:' + devEnv.BASE_API_URL)
	} else {
		store.commit('setBaseApiUrl', prodEnv.BASE_API_URL)
    store.commit('setWebRoot', prodEnv.H5_ROOT)
		ls.set('baseApiUrl',prodEnv.BASE_API_URL)
		ls.set('webRoot',prodEnv.H5_ROOT)
		console.log('生产环境')
	}
