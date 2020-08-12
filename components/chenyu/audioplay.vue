<template>
	<view class="audio_play_box">
		<view class="slider_box">
			<slider 
				class="sliders"
				activeColor="#0081ff"
				:value="currentTime"
				block-size="20"
				:max="audio_max==0?slider_max:audio_max"
				@change="edit_slider"
				@changing="editing_slider"
				:step="1" />
			<view class="right">
				{{format(currentTime)}}/{{format(audio_max==0?slider_max:audio_max)}}
			</view>
		</view>
		<view class="button_box" :style="{'justify-content':(is_volume?'space-between':'center')}">
			<view class="volume" v-if="is_volume">
				<u-icon name="volume" color="#0081ff" :top="0"></u-icon>
				<slider
					class="sliders"
					activeColor="#0081ff"
					v-model="volume"
					:max="1"
					block-size="15"
					@change="volume_edit_slider"
					@changing="volume_editing_slider"
					:step="0.01" />
					<view class="">
						{{parseInt(volume*100)}}
					</view>
			</view>
			<view class="play" @tap="play_pause">
				<u-icon :name="is_play?'pause':'play-right-fill'" size="60" />
			</view>
		</view>
	</view>
</template>

<script>
	const audio_play_object = uni.createInnerAudioContext()//创建播放对象
	export default {
		name:"audioplay",
		props:{
			isshow:{//当多页面同时使用这个播放器时，起重要作用
				type:Boolean,
				default:true
			},
			is_volume:{//是否显示音量
				type:Boolean,
				default:false
			},
			audio_startTime:{//音频播放的起点时间
				type:Number,
				default:0
			},
			audio_autoplay:{//是否自动播放
				type:Boolean,
				default:false
			},
			audio_src:{//音频路径
				type:String,
				default:""
			},
			audio_loop:{//是否循环播放
				type:Boolean,
				default:false
			},
			audio_max:{//音频的时长，如果有则直接用
				type:Number,
				default:0
			},
			audio_obeyMuteSwitch:{//是否遵循系统静音，默认不遵循
				type:Boolean,
				default:false
			},
			audio_volume:{//音量百分比
				type:Number,
				default:0.8
			}
		},
		data(){
			return{
				is_play:false,//是否正在播放
				currentTime:0,//当前音频播放时间点
				startTime:0,//控制音频从哪里开始播放
				slider_doing:false,//当前进度条是否在拖动中
				slider_max:this.audio_max==0?100:this.audio_max,//进度条最大值
				volume:this.audio_volume,//当前音频的音量
			}
		},
		watch:{//监听props属性的改变
			isshow(bool){
				bool?this.on_func():''
			},
			audio_startTime(e){
				audio_play_object.startTime = e
			},
			audio_autoplay(e){
				audio_play_object.autoplay = e
			},
			audio_src(e){//监听src的改变
				this.init_src(e)
			},
			audio_loop(e){
				audio_play_object.loop = e
			},
			audio_max(e){
				this.slider_max = e
			},
			audio_obeyMuteSwitch(e){
				audio_play_object.obeyMuteSwitch = e
			},
			audio_volume(e){
				audio_play_object.volume = e
				this.volume = e
			}
		},
		created() {//类似onload使用方式
			audio_play_object.volume = this.volume
			audio_play_object.autoplay = this.audio_autoplay
			audio_play_object.loop = this.audio_loop
			// audio_play_object.obeyMuteSwitch = this.audio_obeyMuteSwitch
			this.init_src(this.audio_src)
			this.on_func()
		},
		beforeDestroy() {//组件实例销毁前调用
			audio_play_object.stop()
			audio_play_object.destroy()
		},
		methods:{
			format(num) {//如果是240秒，格式化出04:00这种模式的结构
				// return num
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60)
			},
			init_src(src){//初始化当前播放器的播放源
				audio_play_object.src =src//更新播放器对应的src
				if(this.audio_max ==0){//如果没有设置音频时长，则自动获取
				console.log("这是新增src",audio_play_object.duration)
					// #ifdef H5
						let get_duration = ()=>{
							setTimeout(()=>{
								if(isNaN(audio_play_object.duration)){
									get_duration()
								} else {
									this.slider_max = audio_play_object.duration
								}
							},0)
						}
					// #endif
					// #ifndef H5
						let get_duration = ()=>{
							setTimeout(()=>{
								if(audio_play_object.duration==0){
									get_duration()
								} else {
									this.slider_max = audio_play_object.duration
								}
							},0)
						}
					// #endif
					get_duration()
				}
			},
			on_func(){//音频组件的监听事件
				audio_play_object.onPlay(()=>{//音频开始播放
					this.is_play = true
				})
				audio_play_object.onPause(()=>{//音频中途暂停
					this.is_play = false
				})
				audio_play_object.onWaiting(()=>{//资源加载中
					// #ifdef MP-WEIXIN
					
					// #endif
					// #ifndef MP-WEIXIN
						uni.showLoading({
							title:"正在加载资源"
						})
					// #endif
					
				})
				audio_play_object.onSeeking(()=>{//doing
					console.log('onSeeking')
				})
				audio_play_object.onSeeked(()=>{//doed
					console.log('onSeeked')
				})
				audio_play_object.onTimeUpdate((e)=>{//音频播放进度监听事件
					console.log(audio_play_object.currentTime)
					if(!this.slider_doing){//如果没在拖动中，就更新进度条
						this.currentTime = audio_play_object.currentTime
						this.$forceUpdate()
						// console.log(audio_play_object.currentTime)
						uni.hideLoading()
					}
				})
				audio_play_object.onError((err)=>{
					console.log('这是监听报错',err)
				})
				audio_play_object.onEnded((e)=>{//音频自然播放结束
					this.currentTime = 0
					this.is_play = false
				})
			},
			play_pause(e){//播放和暂停事件
				// #ifdef MP-WEIXIN
					uni.hideLoading()
				// #endif
				this.is_play?audio_play_object.pause():audio_play_object.play()
			},
			volume_edit_slider(e){//音量进度条修改事件
				this.volume = e.detail.value
				audio_play_object.volume = e.detail.value
				this.volume_slider_doing = false
			},
			volume_editing_slider(e){//音量修改进度条中的事件，doing
				this.volume = e.detail.value
				audio_play_object.volume = e.detail.value
				this.volume_slider_doing = true
			},
			edit_slider(e){//进度条修改事件
				// #ifdef MP-WEIXIN
					audio_play_object.seek(e.detail.value)
					this.currentTime = e.detail.value
					audio_play_object.pause()
				// #endif
				// #ifndef MP-WEIXIN
					this.is_play?"":audio_play_object.play()
					audio_play_object.seek(e.detail.value)
				// #endif
					
				this.slider_doing = false
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
		// border: 1rpx solid #0081ff;
		box-shadow:1rpx 1rpx 18rpx 1rpx rgba(#999999,0.47);
		border-radius: 20rpx;
		min-height: 150rpx;
		padding: 20rpx 20rpx;
		.slider_box{
			width: 100%;
			display: flex;
			.sliders{
				flex: 1;
			}
			.right{
				width: 30%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.button_box{
			width: 100%;
			display: flex;
			align-items: center;
			.volume{
				width: 40%;
				display: flex;
				justify-content: center;
				align-items: center;
				.sliders{
					flex: 1;
					margin-left: 15rpx;
				}
			}
			.play{
				width: 100rpx;
				height: 100rpx;
				margin: 20rpx 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				color: #0081ff;
			}
			.pause{
				width: 100rpx;
				height: 100rpx;
				margin: 20rpx 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				color: #0081ff;
			}
			.stop{
				width: 100rpx;
				height: 100rpx;
				margin: 20rpx 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				color: #0081ff;
			}
		}
	}
</style>
