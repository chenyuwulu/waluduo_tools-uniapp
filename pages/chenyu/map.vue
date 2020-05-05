<template>
	<view class="flex">
		这是{{title}}默认flex排版容器
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
		onReady() {},
		onShow() {},
		onLoad(options) {
			console.log(this)
			instance.request({
				url: "index",
				data: {}
			}).then(res => {
				console.log(res)
			})
		},
		onHide() {},
		methods:{
			
		}
	}
</script>

<style>
	
</style>
