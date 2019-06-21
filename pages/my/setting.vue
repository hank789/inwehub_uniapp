<template>
	<view class="">
		<cmd-item title="绑定手机" @click="fnClick('modify')" :addon="phone" arrow></cmd-item>
		<cmd-item title="绑定微信" @click="fnClick('bindWechat')" :addon="bindWeixinNickname"></cmd-item>
		<cmd-item title="推送设置" @click="fnClick('pushSetting')" arrow></cmd-item>
		<cmd-item title="常见问题" @click="fnClick('help')" arrow></cmd-item>
		<cmd-item title="关于我们" @click="fnClick('aboutus')" arrow></cmd-item>
		<cmd-item title="前往评价" @click="fnClick('starApp')" arrow></cmd-item>
		<cmd-item title="清除缓存" @click="fnClick('clearCache')" arrow></cmd-item>
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
		<oauth ref="oauth" serviceId="weixin" :isShowBtn="false" @success="wechatLoginSuccess" @fail="wechatLoginFail"></oauth>
	</view>
</template>

<script>
	import cmdItem from "@/components/cmd-item/cmd-item.vue"
	import oauth from '@/components/oauth/oauth.vue'

	export default {
		components: {
			cmdItem,
			oauth
		},

		data() {
			return {
				bindWeixinNickname: '', // 绑定微信名称
        isBindWeixin: 0, // 是否绑定微信
        appVersion: '',
        im_tokenMsg: '',
        name: '',
        phone: '',
        avatar: '',
        title: '',
        company: '',
        ios_market_url: '',
        android_market_url: ''
			};
		},
		onLoad() {
			//#ifdef APP-PLUS
			var version = this.$ls.get('app_install_version')
			var appDeviceInfo = this.$ls.get('appDeviceInfo')
      if (version) {
        if (appDeviceInfo.platform == 'ios') {
          this.appVersion = 'for iPhone V' + version
        } else {
          this.appVersion = 'for android V' + version
        }
      }
			//#endif
			var userInfo = this.$ls.get('UserInfo')
			this.name = userInfo.name
			this.phone = userInfo.mobile
			this.avatar = userInfo.avatar_url
			this.title = userInfo.title
			this.company = userInfo.company
			this.getWallet()
		},
		methods: {
			fnClick (type) {
				switch (type){
					case 'modify':
						uni.navigateTo({ url: '/pages/wechat/bindPhone' })
						break;
					case 'pushSetting':
						uni.navigateTo({ url: '/pages/inform/setting/pushSetting' })
						break;
					case 'clearCache':
						this.clearUserCache()
						break;
					case 'bindWechat':
						if (!this.isBindWeixin) {
							this.$refs.oauth.login()
						}
						break;
					case 'aboutus':
						uni.navigateTo({ url: '/pages/protocol/aboutus' })
						break;
					case 'help':
						uni.navigateTo({ url: '/pages/help/help' })
						break;
					case 'starApp':
						var appDeviceInfo = this.$ls.get('appDeviceInfo')
						this.$request.post(`system/app_market_url`, {}).then(responseData => {
							if (responseData.data !== false) {
								this.ios_market_url = responseData.data.ios_url
								this.android_market_url = responseData.data.android_url
								//#ifdef APP-PLUS
								if (appDeviceInfo.platform == 'ios') {
									plus.runtime.openURL(this.ios_market_url)
								} else if (appDeviceInfo.platform == 'android') {
									plus.runtime.openURL(this.android_market_url, function (e) {
										uni.showToast({
											title: '很抱歉，您未安装腾讯应用宝，暂时无法评分，感谢支持'
										})
									}, 'com.tencent.android.qqdownloader')
								} else {
									window.location.href = this.ios_market_url
								}
								//#endif
								//#ifdef H5
								window.location.href = this.ios_market_url
								//#endif
							}
						})
						break;
				}
			},
			getWallet () {
        this.$request.post(`account/wallet`, {}).then(response => {
          var code = response.code
          if (code !== 1000) {
            return
          }
          var data = response.data
          this.isBindWeixin = data.is_bind_weixin
          this.bindWeixinNickname = data.bind_weixin_nickname
					if (!this.bindWeixinNickname) {
						this.bindWeixinNickname = '前往绑定'
					}
        })
      },
			clearUserCache() {
				this.$ls.remove('UserLoginInfo')
				this.$ls.remove('UserInfo')
				this.$ls.remove('UserInfoReal')
				this.$ls.remove('token')
				uni.reLaunch({
					url: `/pages/login/login`
				})
			},
			logOut() {
				//#ifdef APP-PLUS
				var deviceInfo = plus.push.getClientInfo()
					this.$request.get(`auth/logout`, {
						client_id: deviceInfo.clientid,
						device_token: deviceInfo.token,
						appid: deviceInfo.appid,
						appkey: deviceInfo.appkey,
						device_type: plus.os.name === 'iOS' ? 2 : 1
				}).then(res => {
					this.clearUserCache()
				})
				//#endif
				this.clearUserCache()
			},
			getOperators () {
        //#ifdef APP-PLUS
				this.$request.get(`system/getOperators`, {}, false).then(responseData => {
					if (responseData.data.length > 0) {
						var btnArray = []
						responseData.data.forEach(function (i, r) {
							btnArray.push({title: i.name, id: i.id})
						})
						plus.nativeUI.actionSheet({
							title: '切换账户',
							cancel: '取消',
							buttons: btnArray
						}, (e) => {
							if (e.index > 0) {
								this.$request.get('auth/operatorLogin', {
									user_id: btnArray[e.index - 1].id
								})
									.then(response => {
										if (response.data === false) {
											return
										}
										this.$ls.set('token', response.data.token)
										uni.switchTab({
											url: '/pages/my/index'
										})
									})
							}
						})
					}
				})
        //#endif
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
