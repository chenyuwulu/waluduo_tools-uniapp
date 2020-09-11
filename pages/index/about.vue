<template>
	<view class="chenyu_page">
		<view class="title">
			兴趣来缘
		</view>
		<view class="content chenyu_card">
			<view class="text">
				兴趣来自于缘分，可能是听到了一首好听的钢琴曲而喜欢上弹钢琴，又或是看到一幅好看的画而喜欢上绘画。
				那我就是体验过便利软件之后，喜欢用自己的双手去实现出一系列的实用功能。
			</view>
		</view>
		<view class="content chenyu_card">
			本项目所使用的组件库：
			<view class="open_button_list">
				<u-button
					shape="square"
					size="default"
					:ripple="true"
					type="primary"
					@click="go_to_mp(uview_appid)"
					>uview</u-button>
				<u-button
					shape="square"
					size="default"
					:ripple="true"
					type="primary"
					@click="go_to_mp(uniui_appid)"
				>uni-ui</u-button>
				<u-button
					shape="square"
					size="default"
					:ripple="true"
					type="primary"
					@click="go_to_mp(thorui_appid)"
				>thorui</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		//声明引用组件
		components:{},
		data() {
			return {
				// #ifdef MP-WEIXIN
				uview_appid:"wxc256e348c4032ebd",
				uniui_appid:"wx999bf02c8e05dfc9",
				thorui_appid:"wxb6a98ca343f57a38",
				// #endif
				
				// #ifdef MP-QQ
				uview_appid:"",
				uniui_appid:"1109689877",
				thorui_appid:"1109627073",
				// #endif
			}
		},
		//计算属性
		computed:{},
		//检测属性
		watch:{},
		onReady() {},
		onShow() {},
		onLoad(options) {
			
		},
		onHide() {},
		methods:{
			go_to_mp(appid){
				uni.navigateToMiniProgram({
				  appId: appid
				})
			}
		}
	}
</script>

<style lang="scss">
	.title{
		color: #000000;
		font-size: 35rpx;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
	}
	.content{
		padding: 30rpx 30rpx;
		display: flex;
		flex-direction: column;
		.text{
			color: #000000;
			font-size: 30rpx;
			text-indent:2em;
		}
		.open_button_list{
			padding-top: 20rpx;
			padding-bottom: 20rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}
	}
</style>
