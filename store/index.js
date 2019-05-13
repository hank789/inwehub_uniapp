import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: "",
		baseApiUrl: "",
		token: "",
		isAppHide: false
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
		setToken(state, token) {
			state.token = token;
		},
        logout(state) {
            state.user = "";
			state.token = "";
        },
		setBaseApiUrl(state, url) {
			state.baseApiUrl = url
		},
		setAppHide(state, hide) {
			state.isAppHide = hide
		}
    }
})

export default store
