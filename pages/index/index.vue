<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
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
		onLoad() {
			uni.request({
				url: 'http://localhost:9529/dev-api/api/index', //仅为示例，并非真实接口地址。
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
						d:2
					}
				},
				method:"POST",
				header: {
					'Content-Type': 'application/x-www-form-urlencoded' ,//自定义请求头信息
				},
				success: (res) => {
					console.log(res.data.data)
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
