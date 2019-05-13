import Vue from 'vue'
import App from './App'

import './config/index.js'
import store from './store'
import localstorage from "./lib/localstorage.js"
import ajax from './lib/ajax_request.js'

import './common/iconfont.js'
require('swiper/dist/css/swiper.css')


Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$ls = localstorage
Vue.prototype.$ajax = ajax

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
