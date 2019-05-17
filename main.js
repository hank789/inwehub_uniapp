import Vue from 'vue'
import App from './App'

import './config/index.js'
import store from './store'
import localstorage from "./lib/localstorage.js"
import ajax from './lib/request.js'
import ui from './lib/ui.js'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$ls = localstorage
Vue.prototype.$ajax = ajax
Vue.prototype.$ui = ui

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
