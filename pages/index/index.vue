<template>
	<view class="chenyu_page">
		<view class="caption">
			<image class="image" src="/static/logo.png" mode="aspectFit" />
			<view class="text">{{title}}</view>
		</view>
		<u-grid :col="2">
			<u-grid-item v-for="(item,index) in list" :key="index" @click="navigateTo(item.url)">
				<u-icon :name="item.icon" :size="40"></u-icon>
				<view class="grid-text">{{item.name}}</view>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '兴趣来自于缘分',
				list:[
					// {
					// 	name:"vue模板页",
					// 	icon:"",
					// 	url:"/pages/chenyu/auto_view"
					// },
					// {
					// 	name:"css实现自动布局",
					// 	url:"/pages/chenyu/auto_view"
					// },
					// {
					// 	name:"文章页面",
					// 	url:"/pages/we_service/article/list"
					// },
					{
						name:"琐事便签",
						icon:"order",
						url:"/pages/we_service/trivia_books/index"
					},
					{
						name:"更新日志",
						icon:"calendar",
						url:"/pages/index/update_log"
					},
					{
						name:"关于本应用",
						icon:"more-circle",
						url:"/pages/index/about"
					},
				]
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
			
		}
	}
</script>

<style lang="scss">
	.caption {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 36rpx;
		padding-bottom: 36rpx;
		.image{
			width: 300rpx;
			height: 300rpx;
			border-radius: 50%;
		}
		.text{
			margin-top: 36rpx;
			font-size: 36rpx;
			color: #000000;
		}
	}
	.grid-text {
		font-size: 30rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}
</style>
