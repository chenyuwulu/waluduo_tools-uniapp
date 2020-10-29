<template>
	<view class="page_box">
		<view class="">
			<u-checkbox-group @change="checkboxGroupChange">
				<u-checkbox 
					@change="checkboxChange" 
					v-model="item.checked" 
					v-for="(item, index) in role" :key="index" 
					:name="item.name"
				>{{item.name}}
				<image style="width: 100rpx;height: 100rpx;" :src="'/pages/we_service/yuanshen_relic/static/'+ item.icon +'.png'"></image>
				</u-checkbox>
			</u-checkbox-group>
			<u-button @click="checkedAll">全选</u-button>
		</view>
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
			checkboxGroupChange(e){
				console.log(e)
			},
			checkboxChange(e){
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
