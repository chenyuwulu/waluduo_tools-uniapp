<template>
	<view class="page_box">
		<u-gap height="60"></u-gap>
		<view class="audioplay_box">
			<chenyu-audioplay
				:audio_src="audioplay_src"
				:audio_max="0"
				:audio_volume ="audio_volume"
				:is_volume="true"
			/>
		</view>
		<u-gap height="40"></u-gap>
		<view class="">
			
		</view>
		<u-grid :col="1" hover-class="none">
			<u-grid-item>
				<view class="">
					这是放
				</view>
			</u-grid-item>
		</u-grid>
		<u-gap height="200"></u-gap>
	</view>
</template>

<script>
	export default {
		components:{},
		data(){
			return {
				audioplay_src:"",
				audio_volume:0.6,
			}
		},
		onShow() {},
		onLoad(options) {
			this.audioplay_src = "https://weiqing.chenyuwulu.top/yi.mp3"
			// this.audioplay_src = "https://weiqing.chenyuwulu.top/kong.mp3"
			// this.audioplay_src = "https://weiqing.chenyuwulu.top/kong1mb.mp3"
			// this.audioplay_src = "https://weiqing.chenyuwulu.top/shuangxue.mp3"
			// this.audioplay_src = "https://weiqing.chenyuwulu.top/shuangxue1mb.mp3"
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.page_box{
		height: auto;
		min-height: 100vh;
		background-color: #F8F8F8;
		.audio_play_box{
			margin-left: 36rpx;
			margin-right: 36rpx;
		}
	}
</style>
