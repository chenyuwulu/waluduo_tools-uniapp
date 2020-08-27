<template>
	<view class="page_box">
		<canvas 
			canvas-id="id_poster"
			:style="{
				width:canvas_width+'px',
				height:canvas_height+'px',
			}"
			style="position: absolute;top: 0px;left: 999999999px;" />
	</view>
</template>

<script>
	//目前仅支持px单位
	export default {
		name:"poster",
		props:{
			canvas_width:{//画布宽度
				type:String,
				default:"500"
			},
			canvas_height:{//画布高度
				type:String,
				default:"800"
			},
			background_img:{//背景图片，https网络地址
				type:String,
				default:""
				// default:"https://weiqing.chenyuwulu.top/data/timg.png"
			},
			arr_img:{//嵌入图片，可一张，亦可多张，可网络地址亦可base64转码的二维码数据
				type:Array,
				default:[
					// {
					// 	type:"buffer",
					// 	width:300,
					// 	height:300,
					// 	left:50,
					// 	top:50,
					// 	data:'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'
					// },
					// {
					// 	type:"url",
					// 	width:300,
					// 	height:300,
					// 	left:300,
					// 	top:500,
					// 	data:"https://weiqing.chenyuwulu.top/data/timg.png"
					// },
					// {
					// 	type:"url",
					// 	width:100,
					// 	height:100,
					// 	left:200,
					// 	top:300,
					// 	data:"https://weiqing.chenyuwulu.top/logo.jpg"
					// }
				]
			}
		},
		data(){
			return{
				
			}
		},
		created() {},
		beforeDestroy() {},
		methods:{
			async export_image(){//将图像绘制到画布，最后并导出
				const array_img = this.arr_img
				this.$emit("export_loading")
				const ctx = uni.createCanvasContext('id_poster',this)
				let background_img = await uni.getImageInfo({src:this.background_img})
				ctx.drawImage(background_img[1].path, 0, 0, Number(this.canvas_width), Number(this.canvas_height))
				for(let i=0,length=array_img.length;i<length;i++){
					if(array_img[i].type=="url"){
						let x = await uni.getImageInfo({src:array_img[i].data})
						ctx.drawImage(x[1].path, array_img[i].left, array_img[i].top, array_img[i].width, array_img[i].height)
					}
					if(array_img[i].type=="buffer"){
						let filePath = await this.save_buffer(i)
						ctx.drawImage(filePath, array_img[i].left, array_img[i].top, array_img[i].width, array_img[i].height)
					}
				}
				ctx.draw(false,()=>{
					uni.hideLoading()
					uni.authorize({//检测有无权限写入文件
						scope: 'scope.writePhotosAlbum',
						success:(res)=>{
							uni.canvasToTempFilePath({//将canvas画布上的图片导出成图像，获取临时地址
								canvasId: 'id_poster',
								success: canvas_data => {
									uni.saveImageToPhotosAlbum({//保存图片到系统相册
										filePath:canvas_data.tempFilePath,
										success:(save)=>{
											uni.saveFile({
												tempFilePath: canvas_data.tempFilePath,
												success:(zz)=> {
													console.log(zz)
												},
												fail:(err)=>{
													console.log(err)
												}
											})
											uni.hideLoading()
											this.$emit("export_success")
										}
									})
								},
								fail: (err) => {
									uni.hideLoading()
								}
							},this)
						},
						fail: (err) => {
							uni.hideLoading()
							uni.showModal({
								title: '提示',
								content: '请授权保存相册权限',
								success: (response)=> {
									if (response.confirm) {
										uni.openSetting()
									}
								}
							})
						}
					})
				})
			},
			save_buffer(index){//将buffer图片写入本地临时路径中
				return new Promise((resolve, reject) => {//buffer二维码数据
					let filePath = `${wx.env.USER_DATA_PATH}/poster`+index//微信小程序的保存路径
					uni.getFileSystemManager().writeFile({//将buffer图片保存成本地临时地址
						filePath: filePath,
						data:uni.base64ToArrayBuffer(this.arr_img[index].data),
						encoding: 'binary',
						success: () => { 
							resolve(filePath)
						},
						fail: err => {
							reject('写入失败：',err)
						}
					})
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.page_box{
		display: flex;
		position: relative;
	}
</style>
