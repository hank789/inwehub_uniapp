<script>
	import util from './lib/util.js'
	export default {
		onLaunch: function () {
			console.log('App Launch');
			this.$ls.set('appDeviceInfo',uni.getSystemInfoSync())
			//#ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary');
			util.checkUpdate(this)
			//#endif
		},
		onShow: function () {
			console.log('App Show')
			this.$store.commit('setAppHide', false)
		},
		onHide: function () {
			console.log('App Hide')
			this.$store.commit('setAppHide', true)
		}
	}
</script>
<style>
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import "./common/uni.css";
	@import "./common/style.css";
</style>