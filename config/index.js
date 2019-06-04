	import store from '../store'
	import devEnv from './dev.env.js'
	import prodEnv from './prod.env.js'
	
	if (process.env.NODE_ENV === 'development') {
		store.commit('setBaseApiUrl', devEnv.BASE_API_URL)
    store.commit('setWebRoot', devEnv.H5_ROOT)
		console.log('开发环境:' + devEnv.BASE_API_URL)
	} else {
		store.commit('setBaseApiUrl', prodEnv.BASE_API_URL)
    store.commit('setWebRoot', prodEnv.H5_ROOT)
		console.log('生产环境')
	}
