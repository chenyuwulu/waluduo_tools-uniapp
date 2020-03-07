<script>
	export default {
		onLaunch() {
			console.log('当uni-app初始化完成时触发（全局只触发一次）')
		},
		onShow() {
			console.log('当uni-app启动，或从后台进入前台显示')
		},
		onHide() {
			console.log('当uni-app从前台进入后台')
		},
		onError() {
			console.log('当uni-app报错时触发')
		},
		onUniNViewMessage() {
			console.log('对nvue页面发送的数据进行监听')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "components/colorui/main.css";
	@import "components/colorui/icon.css";
	@import "components/colorui/animation.css";
	page{
		background-color: #FFFFFF;
	}
</style>
