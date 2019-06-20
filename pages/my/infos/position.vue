<template>
	<view class="">
		<view class="mui-content">
			<view class="mui-table-view">
				<view class="mui-table-view-cell">
					<view class="mui-input-row">
						<label class="mui-navigate">当前职位</label>
						<input type="text" placeholder="请填写" v-model.trim="title" maxlength="15">
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getUserInfo, getLocalUserInfo } from '@/lib/user'
	import { postRequest } from '@/lib/request'
	export default {
		data () {
			return {
				title: ''
			}
		},
		created () {
		  var userInfo = getLocalUserInfo()
		  this.title = userInfo.title
		},
		onNavigationBarButtonTap() {  
			if (!this.title) {
				uni.showToast({
					title: '请填写当前职位'
				})
				return false
			}
			postRequest(`profile/update`, {
				title: this.title
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
	.mui-table-view {
		position: relative;
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
		list-style: none;
		background-color: #fff;
	}
	.mui-input-row label {
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		line-height: 36upx;
		float: left;
		width: 20%;
		font-size: 36upx;
		padding: 21upx 20upx;
	}
	.mui-input-row input {
		width: 536upx !important;
		height: 62upx;
		border: none;
		font-size: 32upx;
		color: #444444;
		z-index: 990;
		padding: 0 0upx;
		float: right;
		margin-top: 6upx;
		text-align: right;
	}
	.mui-table-view-cell {
    position: relative;
    overflow: hidden;
    padding: 0.293rem 0.4rem;
    -webkit-touch-callout: none;
}
</style>
