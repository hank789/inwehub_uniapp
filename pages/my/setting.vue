<template>
	<view class="">
		<cmd-item title="绑定手机" @click="fnClick('modify')" addon="18300624364" arrow></cmd-item>
		<cmd-item title="绑定微信" @click="fnClick('modify')" addon="18300624364"></cmd-item>
		<cmd-item title="修改密码" @click="fnClick('modify')" addon="" arrow></cmd-item>
		<cmd-item title="推送设置" @click="fnClick('modify')" addon="" arrow></cmd-item>
		<cmd-item title="常见问题" @click="fnClick('modify')" addon="" arrow></cmd-item>
		<cmd-item title="关于我们" @click="fnClick('modify')" addon="" arrow></cmd-item>
		<cmd-item title="前往评价" @click="fnClick('modify')" addon="" arrow></cmd-item>
		<cmd-item title="清楚缓存" @click="fnClick('modify')" addon="" arrow></cmd-item>
		<button type="button" class="btn-logout" @tap.stop.prevent="logOut">退出应用</button>
		<view class="foot">
			<view class="logo">
				<text class="iconfont icon-inwehubzuoyou"></text>
				<view class="appVersion">{{ appVersion }}</view>
			</view>

			<view class="copyright" @tap.stop.prevent="getOperators">
				<view class="copyrightDesc">Copyright 2017 InweTech.</view>
				<view class="copyrightDesc">All Rights Reserved</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cmdItem from "@/components/cmd-item/cmd-item.vue"
	export default {
		components: {
			cmdItem
		},

		data() {
			return {};
		},
		mounted() {},
		methods: {
			fnClick (type) {
				switch (type){
					case 'modify':
						uni.navigateTo({ url: '/pages/wechat/bindPhone' })
						break;
				}
			},
			clearUserCache() {
				localEvent.clearLocalItem('UserLoginInfo')
				localEvent.clearLocalItem('UserInfo')
				localEvent.clearLocalItem('UserInfoReal')
				this.$store.dispatch(ASKS_LIST_APPEND, {})
				this.$store.dispatch(ANSWERS_LIST_APPEND, {})
				this.$store.dispatch(TASK_LIST_APPEND, {})
				if (!window.mui.os.plus) {
					this.$parent.$refs.OpenAppComponent.refreshData()
				}
				uni.navigateTo({
					url: `/pages/login/login`
				})
			},
			logOut() {
				if (window.mui.os.plus) {
					window.mui.plusReady(() => {
						var deviceInfo = window.plus.push.getClientInfo()
						apiRequest(`auth/logout`, {
							client_id: deviceInfo.clientid,
							device_token: deviceInfo.token,
							appid: deviceInfo.appid,
							appkey: deviceInfo.appkey,
							device_type: window.plus.os.name === 'iOS' ? 2 : 1
						}).then(res => {
							this.clearUserCache()
						})
					})
				} else {
					this.clearUserCache()
				}
			}
		}
	}
</script>

<style lang="less">
	.btn-logout {
		width: 92%;
		height: 88upx;
		line-height: 88upx;
		margin-left: 4%;
		font-size: 30upx;
		color: #fff;
		background: #03aef9;
		margin-top: 39.98upx;
		border-radius: 9.98upx;
	}

	.foot {
		width: 100%;
		overflow: hidden;

		.logo {
			width: 100%;
			overflow: hidden;
			text-align: center;
			padding-bottom: 85.96upx;

			.iconfont {
				font-size: 300upx;
				margin-top: -84upx;
				line-height: 168upx;
			}

			.appVersion {
				display: block;
				color: #444444;
				line-height: 39.98upx;
				margin-top: -84upx;
				font-size: 27.98upx;
			}
		}
	}

	.copyright {
		width: 100%;
		overflow: hidden;
		text-align: center;
		padding-bottom: 57.98upx;

		.copyrightDesc {
			color: #b4b4b6;
			font-size: 28upx;
		}
	}
</style>
