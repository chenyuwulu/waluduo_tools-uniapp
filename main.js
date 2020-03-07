import Vue from 'vue'
import App from './App'

import store from './store'
import {Mixin1} from './common/mixins'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.mixin(Mixin1)
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
