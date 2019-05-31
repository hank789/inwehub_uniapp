import Vue from 'vue'
import App from './App'

import './config/index.js'
import store from './store'
import localstorage from "./lib/localstorage.js"

import ui from './lib/ui.js'
import ajax from './lib/ajaxRequest.js'
import timeago from './lib/timeComponent.js'
import globalFilter from './lib/globalFilter.js'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$ls = localstorage

Vue.prototype.$ui = ui

Vue.prototype.$request = ajax

App.mpType = 'app'

Vue.use(timeago)

Object.keys(globalFilter).forEach(key => {
  Vue.filter(key, globalFilter[key])
})

const app = new Vue({
	store,
    ...App
})

console.log(App)

app.$mount()
