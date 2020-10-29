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
		globalData:{//这里放不变的常量，变量统统放到vuex内
			platform:platform,//平台名称
			config_id:config_id,//对应配置表的id
			system_info:uni.getSystemInfoSync(),//获取当前平台下的系统信息
			yuanshen_relic:{},//原神圣遗物公共存储
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

<style lang="scss">/*每个页面公共css */
	@import "@/components/uview-ui/index.scss";//引入uview的css库
	.chenyu_page{//统一的box设置
		display: flex;
		flex-direction: column;
		padding: 20rpx 20rpx 20rpx 20rpx;
		color: #0A0A0A;
		.chenyu_card{
			margin-top: 20rpx;
			margin-bottom: 20rpx;
			padding: 20rpx 20rpx;
			border-radius: 10rpx;
			box-shadow:0rpx 0rpx 5rpx 0rpx $chenyu-color-main;
		}
	}
</style>
