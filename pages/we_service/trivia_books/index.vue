<template>
	<view class="chenyu_page">
		<view class="chenyu_card" v-for="(item,index) in [1,2,3,4]" :key="index">
			<u-card
				v-if="true" 
				margin="0"
				:border="false">
				<view class="" slot="head">
					标题位置
				</view>
				<view class="" slot="body">
					内容
				</view>
				<view class="" slot="foot">
					页脚
				</view>
			</u-card>
		</view>
		<u-empty v-if="true" text="当前暂无" mode="list" />
		<!-- 右下角的悬浮图标 -->
		<uni-fab 
			ref="fab" 
			:pattern="pattern"
			:content="fab_list" 
			horizontal="right" 
			vertical="bottom" 
			direction="vertical" 
			@trigger="fab_trigger" 
			@fabClick="fab_Click" />
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
				title: 'template',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#347816',
					buttonColor: '#347816'
				},
				fab_list:[{
						iconPath: '/static/trivia_books/add.png',
						selectedIconPath: '/static/trivia_books/add_active.png',
						text: '新建便签',
						active: false,
						status:'add'
					},{
						iconPath: '/static/trivia_books/history.png',
						selectedIconPath: '/static/trivia_books/history_active.png',
						text: '历史记录',
						active: false,
						status:'history'
					},{
						iconPath: '/static/trivia_books/setting.png',
						selectedIconPath: '/static/trivia_books/setting_active.png',
						text: '设置',
						active: false,
						status:'setting'
					}
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
			// instance.request({
			// 	url: "index",
			// 	data: {}
			// }).then(res => {
			// 	console.log(res)
			// })
		},
		onHide() {},
		methods:{
			fab_trigger(e){
				uni.navigateTo({
					url:e.item.status
				})
			},
			fab_Click(e){
				console.log(111,e)
			}
		}
	}
</script>

<style lang="scss">
	
</style>
