import Vue from 'vue'
import App from './App'

import store from './store'
import {Mixin_1} from './common/mixins'
import uView from "./components/uview-ui"
Vue.use(uView)

Vue.config.productionTip = true
Vue.prototype.$store = store
Vue.mixin(Mixin_1)
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()//手动挂载扩展，主要是用于非小程序端的web网页和app环境来使用vue的环境
