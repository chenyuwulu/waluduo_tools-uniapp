<template>
	<view class="chenyu_page">
		<view class="caption">
			<image class="image" src="/static/logo.png" mode="aspectFit" />
			<view class="text">{{title}}</view>
		</view>
		<u-grid :col="2">
			<u-grid-item v-for="(item,index) in list" :key="index" @click="navigateTo(item.url)">
				<u-icon :name="item.icon" :size="45"></u-icon>
				<view class="grid-text">{{item.name}}</view>
			</u-grid-item>
		</u-grid>
		<u-tabbar :border-top="true" activeColor="#0071FE" :list="vuex_tabbar" />
	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				title: '兴趣来自于缘分',
				list:[
					{
						name:"音频播放器",
						icon:"volume",
						url:"/pages/chenyu/audioplay_template"
					},
					{
						name:"自定义配置",
						url:"/pages/we_service/yuanshen_relic/role_setting"
					},
					{
						name:"自定义海报",
						icon:"gift",
						url:"/pages/chenyu/poster_template"
					},
					// {
					// 	name:"琐事便签",
					// 	icon:"order",
					// 	url:"/pages/we_service/trivia_books/index"
					// },
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
		computed:{
			vuex_tabbar(){
				return this.$store.state.vuex_tabbar
			}
		},
		components:{
			
		},
		onShow() {
			console.log(111,"https://weiqing.chenyuwulu.top/kong.mp3")
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
