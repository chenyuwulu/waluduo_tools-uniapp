export const Mixin1 = {
	methods: {
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
	}
}