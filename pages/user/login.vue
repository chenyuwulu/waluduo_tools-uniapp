<template>
	<view class="flex flex-direction padding-left-lg padding-right-lg padding-top-lg">
		<!-- #ifdef H5 || APP-PLUS -->
		<view v-if="isweixin()==false">
			<view class="flex flex-direction" style="border: 1rpx solid #EEEEEE;border-radius: 10rpx;">
				<view class="cu-form-group">
					<view class="title">
						<text class="lg text-blue cuIcon-people"></text>
					</view>
					<input type="text" v-model="login_info.username" placeholder="请输入用户帐号" />
					<text v-if="login_info.username !=''" class="lg text-blue cuIcon-roundclosefill" @tap="delete_username"></text>
				</view>
				<view class="cu-form-group">
					<view class="title">
						<text class="lg text-blue cuIcon-lock"></text>
					</view>
					<input type="text" v-model="login_info.password" :password="login_info.password_flag" placeholder="请输入密码(最少8位)" />
					<text v-if="login_info.password !=''" class="lg text-blue" :class="'cuIcon-'+login_info.password_img" @tap="exchange(login_info.password_flag)"></text>
				</view>
			</view>
			<view class="flex flex-direction margin-top-lg">
				<!-- #ifdef H5 -->
				<button class="cu-btn bg-blue lg" @tap="login_pwd">登录</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<button class="cu-btn lg bg-blue" @tap="login_pwd">登录</button>
				<!-- #endif -->
			</view>
			<view class="flex justify-between padding-left-sm padding-right-sm padding-top-lg">
				<view class="text-grey flex" @tap="navigateTo('register')">立即注册</view>
				<view class="text-grey flex" @tap="navigateTo('forget')">忘记密码?</view>
			</view>
			<!-- #ifdef APP-PLUS -->
			<view style="width: 100%;text-align: center;">
				<tui-divider>快捷登录</tui-divider>
				<button class="cu-btn round bg-blue" @tap="showtoast('当前暂未做好')">QQ登录</button>
				<button class="cu-btn round bg-green" @tap="showtoast('当前暂未做好')">微信登录</button>
			</view>
			<!-- #endif -->
		</view>
		<view v-if="isweixin()==true">
			<view>
				<image style="width: 100%;" src="../../static/logo.png" mode="widthFix"></image>
			</view>
			<view style="width: 100%;text-align: center;">
				<view style="padding-top: 15rpx; padding-bottom: 5rpx;">
					<text class="text-black text-bold">请阅读用户许可协议后并勾选</text>
				</view>
				<view style="padding-top: 5rpx;">
					<text class="text-gray text-sm">获得您的公开信息(昵称、头像等)</text>
				</view>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-grey lg" v-show="protocol==0?true:false" @tap="navigateBack(1)">暂不授权</button>
				<button class="cu-btn bg-blue lg" v-show="protocol==1?true:false" @tap="showtoast('当前暂未做好')">授权登录</button>
			</view>
			<view class="flex justify-center">
				<checkbox-group @change="protocol_tap">
					<view class="center">
						<label>
							<checkbox checked="true" class="green" :class="protocol==1?'checked':''" :checked="protocol==1?true:false" value="1"></checkbox>已阅读并同意
						</label>
						<text class="text-blue" @tap="navigateTo('protocol')">《用户服务协议》</text>
						和
						<text class="text-blue" @tap="navigateTo('protocol')">《隐私政策》</text>
					</view>
				</checkbox-group>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP -->
		<view>
			<image style="width: 100%;" src="../../static/logo.png" mode="widthFix"></image>
		</view>
		<view style="width: 100%;text-align: center;">
			<view style="padding-top: 15rpx; padding-bottom: 5rpx;">
				<text class="text-black text-bold">请阅读用户许可协议后并勾选</text>
			</view>
			<view style="padding-top: 5rpx;">
				<text class="text-gray text-sm">获得您的公开信息(昵称、头像等)</text>
			</view>
		</view>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-grey lg" v-show="protocol==0?true:false" @tap="navigateBack(1)">暂不授权</button>
			<!-- #ifdef MP-WEIXIN -->
				<button class="cu-btn bg-blue lg" open-type="getUserInfo" v-show="protocol==1?true:false" @getuserinfo="mp_wx_getuserinfo">授权登录</button>
			<!-- #endif -->
		</view>
		<view class="flex justify-center">
			<checkbox-group @change="protocol_tap">
				<view class="center">
					<label>
						<checkbox checked="true" class="green" :class="protocol==1?'checked':''" :checked="protocol==1?true:false" value="1"></checkbox>已阅读并同意
					</label>
					<text class="text-blue" @tap="navigateTo('protocol')">《用户服务协议》</text>
					和
					<text class="text-blue" @tap="navigateTo('protocol')">《隐私政策》</text>
				</view>
			</checkbox-group>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import request from "@/common/pocky-request/index"
	const instance = new request()
	const app = getApp()
	export default {
		//声明引用组件
		components: {},
		data() {
			return {
				title: 'login',
				protocol: 0,
				login_info: {
					username: "",
					password: "",
					password_flag: true,
					password_img: 'attentionforbidfill'
				}
			}
		},
		//计算属性
		computed: {},
		//检测属性
		watch: {},
		onReady() {},
		onShow() {},
		onLoad(options) {
			console.log(this)
		},
		onHide() {},
		methods: {
			//清空帐号
			delete_username(e) {
				this.login_info.username = ""
			},
			//显示隐藏密码
			exchange(flag) {
				if (this.login_info.password_flag == true) {
					this.login_info.password_img = "attentionfill"
				} else {
					this.login_info.password_img = "attentionforbidfill"
				}
				this.login_info.password_flag = !this.login_info.password_flag
			},
			//同意用户协议
			protocol_tap(e) {
				let protocol_value = 0
				if (e.detail.value[0] == 1) {
					protocol_value = 1
				}
				this.protocol = protocol_value
			},
			//帐号密码登陆
			// #ifdef H5 || APP-PLUS
				login_pwd(e) {
					if(this.login_info.username==""){
						this.showtoast("帐号不得为空")
						return false
					}
					if(this.login_info.password==""){
						this.showtoast("密码不得为空")
						return false
					}
					instance.request({
						url: "login",
						data: {
							username: this.login_info.username,
							password: this.login_info.password
						},
						methods: "POST",
					}).then(res => {
						console.log(res)
						this.$store.dispatch('login',res.data).then(z=>{
							if(z==true){
								this.switchTab('user')
							} else {
								this.showtoast(z)
							}
						})
					})
				},
			// #endif
			
			//授权方法
			// #ifdef MP-WEIXIN
				mp_wx_getuserinfo(e){
					console.log(e)
					const that = this
					if(e.detail.errMsg=="getUserInfo:ok"){
						uni.login({
							success: (x) => {
								console.log(x)
								instance.request({
									url: "uniapp/article/index",
									data: {
										code:x.code,
										platform:app.$vm.$options.globalData.platform,
										config_id:app.$vm.$options.globalData.config_id,
										rawData:e.detail.rawData,
										signature:e.detail.signature,
										iv:e.detail.iv,
										encryptedData:e.detail.encryptedData,
										page:222,
									},
									methods: "POST",
								}).then(res => {
									console.log(res)
								})
							}
						})
					}
				},
			// #endif
		}
	}
</script>

<style>

</style>
