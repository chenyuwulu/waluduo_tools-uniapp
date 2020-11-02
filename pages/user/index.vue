<template>
	<view class="page_box">
		<u-gap height="20" />
		<view class="user_box">
			<!-- #ifdef MP-WEIXIN -->
				<view style="width: 300rpx;height: 300rpx;border-radius: 50%;overflow: hidden;">
					<open-data type="userAvatarUrl"></open-data>
				</view>
				<u-gap height="20"></u-gap>
				<open-data type="userNickName"></open-data>
			<!-- #endif -->
		</view>
		<u-gap height="50" />
<!-- 		<u-button type="success" open-type="getUserInfo" @getuserinfo="get_userinfo_func">
			获取用户基础信息
		</u-button> -->
<!-- 		这是{{title}}默认flex排版容器
		<tui-divider>快捷登录</tui-divider>
		<uni-popup ref="is_login" type="center" :maskClick="false" :animation="true">
			<view class="uni-tip">
				<view class="uni-tip-title">提示</view>
				<view class="uni-tip-content">您当前没登录。</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @tap="switchTab('/pages/index/index')">返回首页</view>
					<view class="uni-tip-button" @tap="navigateTo('login')">进行登录</view>
				</view>
			</view>
		</uni-popup> -->
		<u-tabbar :border-top="true" activeColor="#0071FE" :list="vuex_tabbar" />
	</view>
</template>

<script>
	import {mapState,mapMutations} from "vuex"
	const app = getApp()
	export default {
		//声明引用组件
		components:{},
		data() {
			return {
				title: 'user'
			}
		},
		//计算属性
		computed:{
			vuex_tabbar(){
				return this.$store.state.vuex_tabbar
			}
		},
		//检测属性
		watch:{},
		onReady() {},
		onShow() {
			
		},
		mounted() {
			// #ifdef MP-TOUTIAO
			if(this.$store.state.login==false){
				this.$refs.is_login.open()
			}
			// #endif
		},
		onLoad(options) {
			const that = this
			console.log(this.$store.state.login)
			if(this.$store.state.login==false){
				this.$nextTick(()=>{
					// this.$refs.is_login.open()
				})
			}
			console.log(app)
			// this.login({
			// 	avatarUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/nav_menu/10.jpg',
			// 	token: 'user123456',
			// 	userinfo: {
			// 		name:'尘雨',
			// 		age:24
			// 	}
			// })
		},
		onHide() {},
		methods:{
			...mapMutations([
				'login'
			]),
			get_userinfo_func(e){
				console.log(e.detail)
			}
		}
	}
</script>

<style lang="scss">
	.page_box{
		display: flex;
		flex-direction: column;
		.user_box{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			box-shadow: 0rpx 0rpx 5rpx 5rpx #EEEEEE;
			color: #000000;
			margin-left: 36rpx;
			margin-right: 36rpx;
			padding-left: 36rpx;
			padding-right: 36rpx;
			padding-top: 36rpx;
			padding-bottom: 36rpx;
			border-radius: 20rpx;
		}
	}
	/* 提示窗口 */
	.uni-tip {
		padding-left: 30rpx;
		padding-right: 30rpx;
		padding-top: 30rpx;
		width: 300px;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10px;
	}
	
	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #333;
	}
	
	.uni-tip-content {
		padding: 15px;
		font-size: 14px;
		color: #666;
		text-align: center;
	}
	
	.uni-tip-group-button {
		margin-top: 10px;
		display: flex;
	}
	
	.uni-tip-button {
		width: 100%;
		padding-bottom: 30rpx;
		text-align: center;
		font-size: 14px;
		color: #3b4144;
	}
</style>
