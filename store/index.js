import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		login:false,
		token:'',
		userinfo:{},
	},
	mutations: {
		login(state, provider){
			state.login = true
			state.token = provider.token
			state.userinfo = provider.userinfo
			console.log("这里快")
		},
		logout(state){
			state.login = false
			state.token = ''
			state.userinfo = {}
		}
	},
	actions:{
		login({ commit }, provider) {
			return new Promise((resolve, reject) => {
				if(provider.token){
					commit('login',provider)
					resolve(true)
				} else {
					reject('登录失败')
				}
			})
		},
	},
	getters:{
		
	}
})

export default store