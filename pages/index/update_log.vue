<template>
	<view class="chenyu_page" style="padding-left: 40rpx;">
<!-- 		<u-time-line>
			<u-time-line-item v-for="(item,index) in list" :key="index">
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
		</u-time-line> -->
<!-- 		<chenyu-audioplay
			:audio_src="src"
			:audio_max="281"
			:audio_volume ="volume"
			:is_volume="true"
		/> -->
		<!-- <chenyu-textarea /> -->
		<chenyu-poster ref="daochu" />
		<button type="default" @tap="chufa">触发</button>
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
						title:"v1.0.0",
						content:[
							"1.初始版本，包含琐事便签功能",
							"2.本版本不包含用户信息体系，采用本地缓存技术来存储，删除本小程序后会随之消失"
						],
						time:"2020年6月25日"
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
			return_value(e){
				this.content = e.value
			},
			chufa(){
				this.$refs.daochu.export_image()
			}
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
