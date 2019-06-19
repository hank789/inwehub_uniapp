<template>
	<view class="">
		<view class="mui-content">
			<textarea class="textArea" rows="5" maxlength="1000" v-model.trim="description" placeholder-style="color:#bbb" placeholder="请输入"></textarea>
		</view>
	</view>
</template>

<script>
	import { getUserInfo, getLocalUserInfo } from '@/lib/user'
	import { postRequest } from '@/lib/request'
	export default {
		data () {
			return {
				description: ''
			}
		},
		created () {
		  var userInfo = getLocalUserInfo()
		  this.description = userInfo.info.description
		},
		onNavigationBarButtonTap() {  
			if (!this.description) {
				uni.showToast({
					title: '请填写个性签名'
				})
				return false
			}
			postRequest(`profile/update`, {
				description: this.description
			}).then(response => {
				var code = response.code
				if (code !== 1000) {
					uni.showToast({
						title: response.message
					})
					return
				}
				uni.showToast({
					title: '保存成功'
				})
				uni.navigateBack({
					delta: 1
				});
			})
		},
		methods: {
		}
	}
</script>

<style lang="less">
	.mui-content {
		background: #efeff4;
	}
	.textArea {
		width: 98%;
		margin: 6upx auto;
		background: #FFF;
		padding: 8upx;
		border-radius: 8upx;
		line-height: 42upx;
		color: #3f3f3f;
		font-size: 28upx;
	}
</style>
