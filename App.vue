<script>
	import { 
		platform,
		config_id
	} from "@/common/config"
	export default {
		onLaunch() {
			console.log('当uni-app初始化完成时触发（全局只触发一次）')
			console.log('初始化的this',this)
			let storage = uni.getStorageSync('waluduo_userinfo')
			// if(!storage){
			// 	uni.navigateTo({
			// 		url:'/pages/user/login'
			// 	})
			// }
		},
		ceshi(){
			const that =this
			return new Promise(resolve => {
				setTimeout(()=>{
					that.$store.commit('login', {
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
			//锁式便签小程序
			platform:platform,
			config_id:config_id
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "components/colorui/main.css";
	@import "components/colorui/icon.css";
	@import "components/colorui/animation.css";
	page{
		background-color: #FFFFFF;
	}
</style>
