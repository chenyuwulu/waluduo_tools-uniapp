<template>
	<view class="chenyu_page" style="padding-left: 40rpx;">
		<u-time-line>
			<u-time-line-item v-for="(item,index) in list" :key="index">
				<template v-slot:node>
					<u-icon name="bell-fill" :color="index==0?'#1AA034':'#969696'" :size="40"></u-icon>
				</template>
				<template v-slot:content>
					<view class="chenyu_card">
						<view class="u-order-title" :style="index==0?'color:#000000;font-size: 40rpx;':''">{{item.title}}</view>
						<view class="u-order-desc" :style="index==0?'color:#000000':''">
							<view class="text" v-for="(items,idx) in item.content" :key="idx">
								{{items}}
							</view>
						</view>
						<view class="u-order-time">{{item.time}}</view>
					</view>
				</template>
			</u-time-line-item>
		</u-time-line>
<!-- 		<chenyu-audioplay
			:audio_src="src"
			:audio_max="281"
			:audio_volume ="volume"
			:is_volume="true"
		/> -->
		<!-- <chenyu-textarea /> -->
	</view>
</template>

<script>
	const app = getApp()
	export default {
		//声明引用组件
		components:{},
		data() {
			return {
				list:[
					{
						title:"v1.0.1",
						content:[
							"1.强化海报功能的定制性，加入文字对齐和图片是否圆角功能。",
							"2.新增我的页面，后续将会明确首页和我的页面",
						],
						time:"2020年9月13日"
					},
					{
						title:"v1.0.0",
						content:[
							"1.初始版本，包含自定义海报功能",
						],
						time:"2020年9月8日"
					},
				],
				content:"",
				src:"",
				volume:0.8,
			}
		},
		//计算属性
		computed:{},
		//检测属性
		watch:{},
		onReady() {},
		onShow() {},
		onLoad(options) {
			// #ifdef MP-ALIPAY
				this.src = 'XNDc4NzAwMzk4OA'
			// #endif
			// #ifndef MP-ALIPAY
				this.src = "https://weiqing.chenyuwulu.top/kong.mp3"
			// #endif
			// console.log(this)
		},
		onHide() {},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.u-order-title {
		color: #c8c8c8;
		font-weight: bold;
		font-size: 30rpx;
	}
	.u-order-desc {
		margin-top: 20rpx;
		color: #969696;
		font-size: 30rpx;
		.text{
			margin-top: 20rpx;
		}
	}
	.u-order-time {
		margin-top: 20rpx;
		color: #c8c8c8;
		font-size: 26rpx;
	}
</style>
