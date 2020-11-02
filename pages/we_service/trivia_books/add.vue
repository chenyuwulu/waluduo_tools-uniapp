<template>
	<view class="chenyu_page">
		<view class="category">
			<u-form>
				<!-- 类别选择 -->
				<u-form-item label-position="top" label="选择类型" label-width="150">
					<u-radio-group v-model="select_category" @change="click_category" :wrap="false">
						<u-radio 
							shape="circle" 
							v-model="item.type" 
							v-for="(item, index) in category_list" 
							:key="index" 
							:name="item.type">{{ item.name }}</u-radio>
					</u-radio-group>
				</u-form-item>
				<!-- 平分式主体 -->
				<block v-if="select_category==1">
					<u-form-item label-width="150" label-position="left" label="便签名称">
						<u-input placeholder="请输入名称" v-model="info.name" type="text" />
					</u-form-item>
				</block>
				<!-- 随机式主体 -->
				<block v-if="select_category==2">
					
				</block>
				<!-- 轮流式主体 -->
				<block v-if="select_category==3">
					
				</block>
			</u-form>
		</view>
	</view>
</template>

<script>
	const app = getApp()
	export default {
		
		components:{//声明引用组件
			
		},
		data() {
			return {
				category_list:[//当前可选择类型
					{	name:"平分式",
						type:"pingfen"
					},
					{	name:"随机式",
						type:"suiji"
					},
					{	name:"轮流式",
						type:"lunliu"
					},
				],
				select_category:"pingfen",
				info:{
					name:""
				},
			}
		},
		computed:{//计算属性
			
		},	
		watch:{//检测属性
			
		},
		onReady() {},
		onShow() {},
		onLoad(options) {
			console.log(this)
		},
		onHide() {},
		methods:{
			click_category(e){
				this.select_category = e
			}
		}
	}
</script>

<style lang="scss">
	
</style>
