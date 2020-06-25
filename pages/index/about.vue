<template>
	<view class="chenyu_page about_page">
		<view class="title">
			兴趣来缘
		</view>
		<view class="content">
			<view class="text">
				兴趣来自于缘分，可能是听到了一首好听的钢琴曲而喜欢上弹钢琴，又或是看到一幅好看的画而喜欢上绘画。
				那我就是体验过便利软件之后，喜欢用自己的双手去实现出一系列的实用功能。
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
			
		}
	}
</script>

<style lang="scss">
	.about_page{
		padding: 20rpx 20rpx;
		display: flex;
		flex-direction: column;
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
			.text{
				color: #000000;
				font-size: 30rpx;
				text-indent:2em;
			}
		}
	}
</style>
