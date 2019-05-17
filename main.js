import Vue from 'vue'
import App from './App'

import './config/index.js'
import store from './store'
import localstorage from "./lib/localstorage.js"

import ui from './lib/ui.js'
import ajax from './lib/ajaxRequest.js'
import timeago from './lib/timeComponent.js'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$ls = localstorage

Vue.prototype.$ui = ui

Vue.prototype.$request = ajax

App.mpType = 'app'

Vue.use(timeago)

const app = new Vue({
	store,
    ...App
})
app.$mount()
