<template>
	<view style="display: flex;flex-direction: column;height: 100%;">
		<view style="height: 100rpx;">此处可以放选项卡组定义组件</view>
		<scroll-view :scroll-y="true" style="display: flex;flex:30;">
			<view style="height: 500rpx;background-color: #C0C0C0;">text</view>
			<view style="height: 500rpx;background-color: #999999;">text</view>
			<view style="height: 500rpx;background-color: #8F8F94;">text</view>
		</scroll-view>
		<swiper style="flex:70;">
			<swiper-item style="background-color: #EEEEEE;">
				<chenyu-audioplay
					audio_src="https://weiqing.chenyuwulu.top/yi.mp3"
					:is_volume="true"
				/>
			</swiper-item>
			<swiper-item style="background-color: #4CD964;">
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
	}
</style>
