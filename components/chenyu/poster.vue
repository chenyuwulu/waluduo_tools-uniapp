<template>
	<view class="page_box">
		<canvas 
			id="id_poster"
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
				default:[]
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
						if(array_img[i].round==true){
							ctx.save()
							ctx.beginPath()
							ctx.arc(Number(array_img[i].width) / 2 + Number(array_img[i].left), Number(array_img[i].height) / 2 + Number(array_img[i].top), Number(array_img[i].width) / 2, 0, Math.PI * 2, false)
							ctx.clip()
						}
						let x = await uni.getImageInfo({src:array_img[i].data})
						ctx.drawImage(x[1].path, Number(array_img[i].left), Number(array_img[i].top), Number(array_img[i].width), Number(array_img[i].height))
						ctx.restore()
					}
					if(array_img[i].type=="buffer"){
						if(array_img[i].round==true){
							ctx.save()
							ctx.beginPath()
							ctx.arc(Number(array_img[i].width) / 2 + Number(array_img[i].left), Number(array_img[i].height) / 2 + Number(array_img[i].top), Number(array_img[i].width) / 2, 0, Math.PI * 2, false)
							ctx.clip()
						}
						let filePath = await this.save_buffer(i)
						ctx.drawImage(filePath, Number(array_img[i].left), Number(array_img[i].top), Number(array_img[i].width), Number(array_img[i].height))
						ctx.restore()
					}
					if(array_img[i].type=="text"){
						ctx.setFillStyle(array_img[i].color)
						ctx.setTextBaseline('top')
						ctx.setTextAlign('center')
						ctx.setFontSize(Number(array_img[i].size))
						ctx.fillText(array_img[i].data, Number(array_img[i].left), Number(array_img[i].top))
					}
				}
				ctx.draw(false,()=>{
					uni.authorize({//检测有无权限写入文件
						scope: 'scope.writePhotosAlbum',
						success:(res)=>{
							uni.canvasToTempFilePath({//将canvas画布上的图片导出成图像，获取临时地址
								canvasId: 'id_poster',
								success: canvas_data => {
									uni.saveImageToPhotosAlbum({//保存图片到系统相册
										filePath:canvas_data.tempFilePath,
										success:(save)=>{
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
			async export_image_canvas_2d(){//采用canavs2d的方式来输出
				const query = uni.createSelectorQuery()
				uni.createSelectorQuery().select('#id_poster').fields({ node: true, size: true }).exec((node_res) => {
					const canvas = node_res[0].node
					const ctx = canvas.getContext('2d')
					
					const dpr = uni.getSystemInfoSync().pixelRatio
					canvas.width = node_res[0].width * dpr
					canvas.height = node_res[0].height * dpr
					ctx.scale(dpr, dpr)
					
					ctx.fillRect(0, 0, 100, 100)
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
