<script>
	import { //区分不同平台所用的配置文件
		platform,
		config_id,
	} from "@/common/config"
	export default {
		onLaunch() {
			console.log('当uni-app初始化完成时触发（全局只触发一次）')
			console.log('app.vue处,初始化的this',this)
		},
		ceshi(){
			return new Promise((resolve,reject) => {
				setTimeout(()=>{
					this.$store.commit('login', {
						avatarUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/nav_menu/10.jpg',
						token: 'user123456',
						userinfo: {
							name:'尘雨',
							age:24
						}
					})
					resolve()
				},2000)
			})
		},
		onShow() {
			console.log('当uni-app启动，或从后台进入前台显示')
		},
		onHide() {
			console.log('当uni-app从前台进入后台')
		},
		onError(e) {
			console.log('当uni-app报错时触发',e)
		},
		onUniNViewMessage() {
			console.log('对nvue页面发送的数据进行监听')
		},
		globalData:{
			platform:platform,
			config_id:config_id
		},
		//判断当前环境是不是微信环境
		// #ifdef H5
			isweixin() {
				const ua = window.navigator.userAgent.toLowerCase()
				if(ua.match(/MicroMessenger/i) == 'micromessenger'){
					return true
				} else {
					return false
				}
			},
		// #endif
	}
</script>

<style>
	/*每个页面公共css */
/* 	@import "@/components/colorui/main.css";
	@import "@/components/colorui/icon.css";
	@import "@/components/colorui/animation.css"; */
</style>
