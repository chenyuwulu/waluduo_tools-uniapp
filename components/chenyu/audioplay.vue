<template>
	<view class="audio_play_box">
		<view class="slider_box">
			<slider 
				v-model="currentTime"
				:max="max"
				@change="edit_slider"
				@changing="editing_slider"
				:step="1" />
		</view>
		<view class="" @tap="play">
			播放
		</view>
		<view class="" @tap="pause">
			暂停
		</view>
	</view>
</template>

<script>
	const audio_play_object = uni.createInnerAudioContext()//创建播放对象
	export default {
		name:"audioplay",
		components:{},
		props:{
			autoplay:{//是否自动播放
				type:Boolean,
				default:false
			},
			audio_src:{//音频路径
				type:String,
				default:"https://weiqing.chenyuwulu.top/kong.mp3"
			},
			audio_loop:{//是否循环播放
				type:Boolean,
				default:false
			},
			max:{
				type:Number,
				default:282
			}
		},
		data(){
			return{
				currentTime:0,//当前音频播放时间点
				startTime:0,//控制音频从哪里开始播放
				slider_doing:false,//当前进度条是否在拖动中
			}
		},
		created() {//类似onload使用方式
			audio_play_object.autoplay = this.autoplay
			audio_play_object.src = this.audio_src
			audio_play_object.volume = 0.4
			audio_play_object.onPlay(()=>{
				console.log(audio_play_object.duration)
			})
			audio_play_object.onTimeUpdate((e)=>{//音频播放进度监听事件
				if(!this.slider_doing){//如果没在拖动中，就更新进度条
					this.currentTime = audio_play_object.currentTime
					this.$forceUpdate()
				}
				
			})
		},
		beforeDestroy() {//类似onhide
			
		},
		methods:{
			play(e){//播放事件
				audio_play_object.play()
			},
			pause(e){//暂停事件
				audio_play_object.pause()
			},
			stop(e){//结束事件
				audio_play_object.stop()
			},
			edit_slider(e){//进度条修改事件
				console.log('do',e)
				this.slider_doing = false
				audio_play_object.seek(e.detail.value)
			},
			editing_slider(e){//修改进度条中的事件，doing
				this.slider_doing = true
			}
		}
	}
</script>

<style lang="scss">
	.audio_play_box{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1rpx solid #0081ff;
		border-radius: 20rpx;
		min-height: 150rpx;
		padding: 20rpx 20rpx;
		.slider_box{
			width: 90%;
			height: 100rpx;
		}
	}
</style>
