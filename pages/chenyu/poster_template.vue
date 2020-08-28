<template>
	<view class="page_box">
		<view class="button_box">
			<u-button type="primary" shape="circle" open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</u-button>
			<u-button type="primary" shape="circle" @click="show_func">展开海报</u-button>
		</view>
		<u-popup v-model="poster_show" mode="top" @close="poster_show=false">
			<view class="view_box">
				<image class="background_img" src="https://weiqing.chenyuwulu.top/data/timg.png" mode="scaleToFill" />
				<view style="margin-top: 50rpx;">
					<u-button type="warning" shape="circle">保存海报到相册</u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		components:{},
		data(){
			return{
				poster_show:false
			}
		},
		onShow() {},
		onLoad() {},
		methods:{
			getUserInfo(e){
				console.log(e)
			},
			show_func(e){
				this.poster_show = true
			}
		}
	}
</script>

<style lang="scss">
	.page_box{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 36rpx 36rpx;
		/deep/ .u-mode-center-box{
			background-color: transparent !important;
		}
		/deep/ .u-drawer-top{
			background-color: transparent !important;
		}
		.button_box{
			width: 100%;
		}
		.view_box{
			position: relative;
			width: 100%;
			height: 1000rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: rgba(#000000, 0);
			.background_img{
				width: 600rpx;
				height: 1000rpx;
			}
		}
	}
</style>
