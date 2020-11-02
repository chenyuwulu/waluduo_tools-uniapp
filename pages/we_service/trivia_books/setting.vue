<template>
	<view class="flex">
		这是设置页面
	</view>
</template>

<script>
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
		},
		onHide() {},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	
</style>
