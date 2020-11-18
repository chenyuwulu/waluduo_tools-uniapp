<template>
	<view class="page_box">
		<block v-for="(item,index) in role" :key="index">
			<u-gap height="48"></u-gap>
				<view class="yuansu_box">
<!-- 					<view class="title" :style="{
						'border-left':'6rpx solid '+item.color
					}">
						{{item.type_name}}
					</view> -->
					<u-collapse>
						<u-collapse-item :ref="'collapse_item'+index">
							<view class="title" :style="{
								'border-left':'6rpx solid '+item.color
							}"
							slot="title-all">
								{{item.type_name}}
							</view>
							<view class="ren_box">
								<view class="item" v-for="(x,y) in item.array" :key="y">
									<view class="right">
										<!-- <image @tap="checkboxChange(index,y)" style="width: 100rpx;height: 100rpx;" mode="widthFix" :src="'/pages/we_service/yuanshen_relic/static/'+x.icon+'.png'" /> -->
										<image :class="x.have?'have_role':''" @tap="checkboxChange(index,y)" style="width: 100rpx;height: 100rpx;" mode="widthFix" src="/static/uni_logo.png" />
										<view class="text_name">
											{{x.name}}
										</view>
										<u-rate v-if="x.have"
											v-model="x.life"
											active-color="#FA3534" 
											inactive-color="#b2b2b2" 
											:count="6"
											gutter="0" />
									</view>
								</view>
							</view>
						</u-collapse-item>
					</u-collapse>
					
				</view>
		</block>
	</view>
</template>

<script>
	import {role} from "@/pages/we_service/yuanshen_relic/common/role.js"
	const app = getApp()
	export default {
		components:{},
		data(){
			return {
				role:role,//拥有角色数组
				// arms:[],//拥有武器数组
				// relic:[],//圣遗物数组
			}
		},
		onShow() {
			
		},
		onLoad(options) {
			
		},
		methods:{
			checkboxChange(index1,index2){
				console.log(index1,index2)
				
				this.role[index1].array[index2].have = !this.role[index1].array[index2].have
				this.$nextTick(()=>{
					this.$refs['collapse_item'+index1][0].init()
					console.log(this)
				})
			}
		}
	}
</script>

<style lang="scss">
	.page_box{
		width: 100%;
		height: auto;
		min-height: 100vh;
		background-color: #f8f8f8;
		.yuansu_box{
			margin-left: 24rpx;
			margin-right: 24rpx;
			box-shadow:0rpx 0rpx 15rpx 2rpx #EFEFEF;
			.title{
				font-weight: 700;
				font-size: 34rpx;
				color: #000000;
				border-top-left-radius: 5rpx;
				border-bottom-right-radius: 5rpx;
				padding-left: 20rpx;
			}
			.ren_box{
				display: flex;
				flex-wrap: wrap;
				padding-top: 20rpx;
				padding-bottom: 20rpx;
				.item{
					width: 33.3%;
					margin-top: 20rpx;
					display: flex;
					align-items: center;
					.right{
						flex: 1;
						display: flex;
						flex-direction: column;
						align-items: center;
						.have_role{
							border: 2rpx solid #FFD700;
							box-shadow: 0rpx 0rpx 10rpx #FFD700;
						}
						.text_name{
							font-size: 28rpx;
							text-align: center;
						}
					}
				}
			}
		}
	}
</style>
