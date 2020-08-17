<template>
	<view class="textarea_box">
		<textarea v-if="focus_status==true"
			class="textarea"
			:style="{
				width:width,
				height:height
			}"
			:focus="focus"
			:controlled="true"
			:show-count="false"
			@focus="func_focus"
			@blur="blur"
			v-model="textarea_value"
		/>
		<view v-if="focus_status==false"
			@tap="view_click"
			class="view_textarea"
			:style="{
				width:width,
				height:height
			}"
		>
			{{view_value}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"textarea",
		components:{},
		props:{
			width:{
				type:String,
				default:"100%"
			},
			height:{
				type:String,
				default:"150rpx"
			}
		},
		watch:{
			textarea_value(val){
				this.$emit("return_value",{
					value:val
				})
				this.view_value = val
			},
			focus_status(val){
				if(val){
					let a = this.view_value
					this.textarea_value = a+" "
					setTimeout(()=>{
						this.textarea_value = a
					},0)
				} else {
					this.focus = false
				}
			}
		},
		data(){
			return {
				textarea_value:"",//textarea的value
				view_value:"",//view的value
				focus:true,//是否获取焦点
				focus_status:false,//是否失去焦点
			}
		},
		created() {
			
		},
		beforeDestroy() {
			
		},
		methods:{
			blur(e){
				console.log(e)
				this.focus_status = false
				// this.focus = false
			},
			func_focus(e){
				console.log(e)
			},
			view_click(e){
				console.log(e)
				this.focus_status = true
				// this.focus = true
				setTimeout(()=>{
					this.focus=true
					this.$forceUpdate()
				},1000)
			}
		}
	}
</script>

<style lang="scss">
	.textarea_box{
		display: flex;
		.textarea{
			padding: 20rpx 20rpx;
			width: 100%;
			font-size: 26rpx;
			color: #000000;
		}
		.view_textarea{
			padding: 20rpx 20rpx;
			width: 100%;
			font-size: 26rpx;
			color: #000000;
			// text-align: justify;
		}
	}
</style>
