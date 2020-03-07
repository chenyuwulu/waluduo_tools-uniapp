import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		login: false,
		token: '',
		avatarUrl: '',
		userName: '',
	},
	mutations: {
		login(state, provider){
			console.log("这是vuex方法的state",state)
			console.log("这是vuex方法的provider",provider)
			console.log("这是vuex方法的this",this)
			state.login = true
			state.token = provider.token
			state.userName = provider.userName
			state.avatarUrl = provider.avatarUrl
		},
		logout(state){
			state.login = false
			state.token = ''
			state.userName = ''
			state.avatarUrl = ''
		}
	},
	actions:{
		
	},
	getters:{
		
	}
})

export default store