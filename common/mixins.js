export const Mixin_1 = {
	methods: {
		//这是对已有的uniapp的api做简单使用封装
		navigateTo(url){
			uni.navigateTo({
				url: url
			})
		},
		redirectTo(url){
			uni.redirectTo({
				url: url
			})
		},
		reLaunch(url){
			uni.reLaunch({
				url: url
			})
		},
		switchTab(url){
			uni.switchTab({
				url: url
			})
		},
		navigateBack(delta){
			uni.navigateBack({
				delta: delta
			})
		},
		showtoast(text){
			uni.showToast({
				title: text,
				icon:'none',
				duration: 2000,
				success: () => {
					// setTimeout(()=>{
					// 	uni.hideToast()
					// },2000)
				}
			})
		},
		
		//这是自己写的封装方法或复杂的uniapp的api使用方法
		
	}
}