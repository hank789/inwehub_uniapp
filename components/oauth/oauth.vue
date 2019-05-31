<template>
	<view>
		  <view @tap.stop.prevent="login" v-show="isShowBtn">{{ content }}</view>
			<wechat-bind-dialog ref="wechatBindDialog" :showPopup="showPopup" :title="dialogTitle" :phone="dialogPhone" :avatar="dialogAvatar" :name="dialogName" :codeType="dialogCodeType" :isVip="dialogVip" :buttonText="dialogButtonText" @clickButton="clickDialogButton"></phone-bind-dialog>
	</view>
</template>

<script>
	import wechatBindDialog from "@/components/iw-dialog/wechat-bind-dialog"
  export default{
    data () {
      return {
        oauth_services: [],
        oauth_waiting: null,
        bindType: 1,
				dialogTitle: '',
				dialogPhone: '',
				dialogAvatar: '',
				dialogName: '',
				dialogCodeType: 0,
				dialogVip: '',
				dialogButtonText: '',
				showPopup: false
      }
    },
    props: {
			serviceId: {
				type: String,
				default: 'weixin'
			},
      content: {
        type: String,
        default: '绑定微信'
      },
      isShowBtn: {
        type: Boolean,
        default: true
      }
    },
    components: {
			wechatBindDialog
		},
    methods: {
      setBindType (type) {
        this.bindType = type
      },
			clickDialogButton() {
				console.log(this.dialogCodeType)
				switch (this.dialogCodeType) {
					case 1131:
						this.bindType = 2
						this.login(this.serviceId)
						break;
					case 1113:
						break;
				}
			},
      isInstalled (id) {
        if (id === 'qihoo') {
          return true
        }
				var appDeviceInfo = this.$ls.get('appDeviceInfo')
        if (appDeviceInfo.platform == 'android') {
          var main = plus.android.runtimeMainActivity()
          var packageManager = main.getPackageManager()
          var PackageManager = plus.android.importClass(packageManager)
          var packageName = {
            'qq': 'com.tencent.mobileqq',
            'weixin': 'com.tencent.mm',
            'sinaweibo': 'com.sina.weibo'
          }
          try {
            return packageManager.getPackageInfo(packageName[id], PackageManager.GET_ACTIVITIES)
          } catch (e) {
          }
        } else {
          switch (id) {
            case 'qq':
              var TencentOAuth = plus.ios.import('TencentOAuth')
              return TencentOAuth.iphoneQQInstalled()
            case 'weixin':
              var WXApi = plus.ios.import('WXApi')
              return WXApi.isWXAppInstalled()
            case 'sinaweibo':
              var SinaAPI = plus.ios.import('WeiboSDK')
              return SinaAPI.isWeiboAppInstalled()
            default:
              break
          }
        }
      },
      login () {
				//#ifndef APP-PLUS
				uni.showToast({
						title: '仅支持app',
						duration: 2000
				})
				return
				//#endif
				var id = this.serviceId
				// 获取登录认证通道
				//#ifdef APP-PLUS
				var isInstalled = this.isInstalled(id)
				if (!isInstalled) {
					// plus.nativeUI.toast('您尚未安装微信客户端');
					return
				}
				uni.getProvider({
					service: 'oauth',
					success: (result) => {
						this.oauth_services = result.provider.map((value) => {
							let providerName = '';
							switch (value) {
								case 'weixin':
									providerName = '微信登录'
									break;
								case 'qq':
									providerName = 'QQ登录'
									break;
								case 'sinaweibo':
									providerName = '新浪微博登录'
									break;
								case 'xiaomi':
									providerName = '小米登录'
									break;
								case 'alipay':
									providerName = '支付宝登录'
									break;
								case 'baidu':
									providerName = '百度登录'
									break;
								case 'toutiao':
									providerName = '头条登录'
									break;
							}
							if (value == id) {
								uni.login({
									provider: value.id,
														// #ifdef MP-ALIPAY
														scopes: 'auth_user',  //支付宝小程序需设置授权类型
														// #endif
									success: (loginRes) => {
										console.log('login success:', loginRes);
										// 获取用户信息
										uni.getUserInfo({
											provider: value.id,
											success: (service) => {
												console.log(service.userInfo);
												var nickname = service.userInfo.nickName || service.userInfo.name || service.userInfo.miliaoNick
												this.$request.post(`oauth/weixinapp/callback`, {
													openid: loginRes.authResult.openid,
													nickname: nickname,
													avatar: service.userInfo.avatarUrl,
													access_token: loginRes.authResult.access_token,
													refresh_token: loginRes.authResult.refresh_token,
													expires_in: loginRes.authResult.expires_in,
													scope: loginRes.authResult.scope,
													full_info: service.userInfo,
													bindType: this.bindType
												}).then(response => {
													var code = response.code
													console.log(code)
													if (code !== 1000) {
														switch (code) {
															case 1131:
																this.dialogTitle = '此微信已注册'
																this.dialogPhone = response.data.wechat_name
																this.dialogAvatar = response.data.avatar
																this.dialogVip = response.data.is_expert
																this.dialogName = response.data.name
																this.dialogCodeType = code
																this.dialogButtonText = '合并账号并绑定'
																this.$refs.wechatBindDialog.showDialog()
																return
															case 1113:
																this.dialogTitle = '此微信已绑定其他手机号'
																this.dialogPhone = response.data.wechat_name
																this.dialogAvatar = response.data.avatar
																this.dialogVip = response.data.is_expert
																this.dialogName = response.data.name
																this.dialogCodeType = code
																this.dialogButtonText = '联系管理员微信：hiinwe'
																this.$refs.wechatBindDialog.showDialog()
																return
															default:
																uni.showModal({
																	title: '提示',
																	content: response.message,
																	success: function (res) {
																			if (res.confirm) {
																					console.log('用户点击确定');
																			} else if (res.cancel) {
																					console.log('用户点击取消');
																			}
																	}
																});
																return
														}
													}
													// 如果返回token有值，则登陆成功，如果为null，走注册流程
													var token = response.data.token
													// 是否为新用户注册
													var isNewUser = response.data.newUser
													console.log('获取微信信息成功: token:' + token + ', openid:' + loginRes.authResult.openid)
													this.$emit('success', token, loginRes.authResult.openid, service.userInfo.nickname, isNewUser)
												})
											}
										});
										
									},
									fail: (err) => {
										console.log('login fail:', err);
									}
								});
							}
							return {
								name: providerName,
								service: value
							}
						});
					},
					fail: (error) => {
						console.log('获取登录通道失败', error);
					}
				});
				//#endif
      },
      logout (auth) {
        auth.logout(function () {
          console.log('注销"' + auth.description + '"成功')
        }, function (e) {
          console.log('注销"' + auth.description + '"失败：' + e.message)
        })
      }
    }
  }
</script>

