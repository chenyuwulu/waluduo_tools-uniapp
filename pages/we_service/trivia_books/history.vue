<template>
	<view class="flex_box">
		<view class="top">
			这是顶部区域
		</view>
		<view class="content">
			这里是内容区域
		</view>
		<!--底部弹出选择-->
		<tui-calendar 
			:lunar="true" 
			:isFixed="true" 
			btnType="green" 
			activeBgColor="#347816"
			rangeBgColor="rgba(52,120,22,0.1)" 
			rangeColor="#347816" 
			startText="开始" 
			endText="结束" 
			:arrowType="1"
			:type="2" 
			ref="calendar" 
			@change="calendar_change" />
	</view>
</template>

<script>
	import request from "@/common/pocky-request/index"
	const instance = new request()
	const app = getApp()
	export default {
		//声明引用组件
		components:{},
		data() {
			return {
				title: 'template'
			}
		},
		//计算属性
		computed:{},
		//检测属性
		watch:{},
		onReady() {
			this.$refs.calendar.show()
		},
		onShow() {},
		onLoad(options) {
			console.log(this)
		},
		onHide() {},
		methods:{
			calendar_change(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	.flex_box{
		display: flex;
		flex-direction: column;
	}
</style>
