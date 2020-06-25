<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="flex-direction padding-left-lg padding-right-lg">
			<u-button type="primary" @tap="nav('chenyu/template')">vue模板页</u-button>
			<u-button type="primary" @tap="nav('chenyu/auto_view')">css实现自动布局</u-button>
			<u-button type="primary" @tap="nav('we_service/article/list')">文章页面</u-button>
			<u-button type="primary" @tap="nav('we_service/trivia_books/index')">琐事账簿</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
		},
		onLoad() {
			// uni.request({
			// 	url: 'http://localhost:8011/uniapp/index', //仅为示例，并非真实接口地址。
			// 	data: {
			// 		page:1,
			// 		rows:2,
			// 		totalPage:3,
			// 		totalSize:4,
			// 		orderBy:"desc",
			// 		// Params:{
			// 		// 	a:1,
			// 		// 	b:2
			// 		// },
			// 		// object:{
			// 		// 	c:1,
			// 		// 	d:2
			// 		// }
			// 	},
			// 	method:"POST",
			// 	header: {
			// 		'content-type': 'application/x-www-form-urlencoded' ,//自定义请求头信息
			// 	},
			// 	success: (res) => {
			// 		console.log(res.data.data)
			// 	}
			// })
		},
		methods: {
			nav(text){
				uni.navigateTo({
				    url: '../'+text
				})
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
	}
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: stretch; */
		/* justify-content: center; */
		width: 100%;
		height: 100%;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
