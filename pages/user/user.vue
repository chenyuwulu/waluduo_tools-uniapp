<template>
	<view class="flex flex-direction">
		这是{{title}}默认flex排版容器
		<tui-divider>快捷登录</tui-divider>
		<uni-popup ref="is_login" type="center" :maskClick="false" :animation="true">
			<view class="uni-tip">
				<view class="uni-tip-title">警告</view>
				<view class="uni-tip-content">您当前没登录。</view>
				<view class="uni-tip-group-button">
					<view class="uni-tip-button" @tap="switchTab('/pages/index/index')">返回首页</view>
					<view class="uni-tip-button" @tap="navigateTo('login')">进行登录</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import request from "@/common/pocky-request/index"
	import {mapState,mapMutations} from "vuex"
	const instance = new request()
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
		computed:{},
		//检测属性
		watch:{},
		onReady() {},
		onShow() {
			setTimeout(()=>{
				this.$refs.is_login.open()
			},0)
		},
		onLoad(options) {
			console.log(this)
			this.login({
				avatarUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/nav_menu/10.jpg',
				token: 'user123456',
				userName: 'uni-app'
			})
			instance.request({
				url: "token",
				data: {
					page:1,
					rows:2,
					totalPage:3,
					totalSize:4,
					orderBy:"desc",
					Params:{
						a:1,
						b:2
					},
					object:{
						c:1,
						d:2,
						e:3,
						f:4
					}
				}
			}).then(res => {
				console.log(res)
			})
		},
		onHide() {},
		methods:{
			...mapMutations([
				'login'
			])
		}
	}
</script>

<style>
	/* 提示窗口 */
	.uni-tip {
		padding: 15px;
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
	}
	
	.uni-tip-group-button {
		margin-top: 10px;
		display: flex;
	}
	
	.uni-tip-button {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #3b4144;
	}
</style>
