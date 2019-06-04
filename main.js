import Vue from 'vue'
import App from './App'

import './config/index.js'
import store from './store'
import localstorage from "./lib/localstorage.js"

import ui from './lib/ui.js'
import ajax from './lib/ajaxRequest.js'
import timeago from './lib/timeComponent.js'
import globalFilter from './lib/globalFilter.js'
// 检查错误信息插件
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

var sentryUrl = 'https://6cd9e4811e7f4ade86ff3d4a18b28e19@sentry.io/167478'
if (process.env.NODE_ENV === 'production') {
	sentryUrl = 'https://0b85668d118943ffa71c7b6c34f0a6bf@sentry.io/175782'
}
Raven
	.config(sentryUrl)
	.addPlugin(RavenVue, Vue)
	.install()

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
