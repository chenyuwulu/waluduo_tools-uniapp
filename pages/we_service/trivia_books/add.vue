<template>
	<view class="chenyu_page">
		<view class="category">
			
		</view>
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
				category_list:[
					{	name:"随机式"	},
					{	name:"平分式"	},
					{	name:"轮流式"	}
				]
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
