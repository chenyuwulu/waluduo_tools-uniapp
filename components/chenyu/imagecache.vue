<template>
	<image :style="{
		width:width,
		height:height
	}" :src="show_src" :mode="mode"></image>
</template>

<script>
	export default {
		name:"imagecache",
		props:{
			src:{
				type:String,
				default:""
			},
			width:{
				type:String,
				default:""
			},
			height:{
				type:String,
				default:""
			},
			mode:{
				type:String,
				default:""
			}
		},
		data(){
			return{
				show_src:""
			}
		},
		created() {
			if(true){
				this.show_src = this.src
			}
		},
		beforeDestroy() {},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.page_box{
		display: flex;
	}
</style>
