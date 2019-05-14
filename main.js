import Vue from 'vue'
import App from './App'

import './config/index.js'
import store from './store'
import localstorage from "./lib/localstorage.js"
import ajax from './lib/ajax_request.js'

import './common/iconfont.js'
require('swiper/dist/css/swiper.css')

import ImageView from '@/components/image/ImageView.vue'
Vue.component('ImageView', ImageView)

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载的高度比例
  loading: '',
  attempt: 8, // 尝试次数
  listenEvents: [ 'scroll' ]
})

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
