<template>
	<view class="">

		<view class="mui-content">
			<view class="warningWrapper" v-if="bindedPhone">当前绑定手机<span>{{bindedPhone}}</span>，请输入新的手机号</view>
			<view class="inputWrapper">
				<text class="iconfont icon-shoujihao"></text>
				
				<input 
					ref="phone"
					v-model="phone"
					class="textInput" 
					placeholder="输入手机号"  
					pattern="\d*" 
					autofocus="autofocus"
					placeholder-class="inputPlaceholder"
					type="text" 
					name="phone"  
					autocomplete="off"
				>


				<text class="getYzm disabled" @tap.stop.prevent="" v-if="!isCanGetCode">{{getCodeText}}</text>
				<text class="getYzm" @tap.stop.prevent="getCode" >{{getCodeText}}</text>
			</view>

			<view class="inputWrapper">
				<text class="iconfont icon-yanzhengma"></text>
				<input 
					class="textInput" 
					ref="code"  
					type="text"
					placeholder="输入验证码" 
					name="code" 
					v-model.trim="code" 
					autocomplete="off"
					:focus="yzmFocus"
				>
			</view>

			<view class="buttonWrapper">
				<button type="button" class=" button mui-btn mui-btn-block mui-btn-primary"
				 @click.prevent="register">确认
				</button>
			</view>
		</view>
		<wechat-bind-dialog ref="wechatBindDialog" :showPopup="showPopup" :title="dialogTitle" :phone="dialogPhone" :avatar="dialogAvatar" :name="dialogName" :codeType="dialogCodeType" :isVip="dialogVip" :buttonText="dialogButtonText" @clickButton="clickDialogButton"></wechat-bind-dialog>

	</view>
</template>

<script>
	import {getLocalUserInfo, getAndUpdateUserInfo} from '@/lib/user.js'
	import wechatBindDialog from "@/components/iw-dialog/wechat-bind-dialog"

	export default {
		data() {
			return {
				phone: '', // 手机号码
				isCanGetCode: false,
				time: 0, // 时间倒计时
				openid: '',
				code: '', // 手机验证码,
				disableRegister: true,
				disableSendCode: true,
				errorMsg: '',
				redirect: '',
				type: 1, // 1不合并账户 2合并微信账户, 默认1
				loading: true,
				bindedPhone: '',
				yzmFocus: false,
				getCodeText: '发送验证',
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
		computed: {
		},
		onLoad() {
			var user = getLocalUserInfo()
			if (user && user.info.mobile) {
				this.bindedPhone = user.info.mobile
			}
		},
		components: {
			wechatBindDialog
		},
		methods: {
			timer() {
				if (this.time > 0) {
					this.isCanGetCode = false
					this.time -= 1
					if (this.time === 0) {
						this.isCanGetCode = true
						return
					}
					setTimeout(this.timer, 1000)
				}
			},
			clickDialogButton() {
				console.log(this.dialogCodeType)
				switch (this.dialogCodeType) {
					case 1127:
						this.type = 2
						this.register()
						break;
					case 1113:
						break;
				}
			},
			getCode() {
				if (!this.phone) {
					uni.showToast({
					  title: '请输入手机号',
					  icon: 'none'
					})
					return
				}
				
				this.$request.post('auth/sendPhoneCode', {
				  mobile: this.phone,
				  type: 'change_phone',
				  openid: this.openid,
				  'registration_code': ''
				}).then(res => {
						if (res.code === 1000) {
							uni.showToast({
								title: '验证码发送成功'
							})
							this.yzmFocus = true
							this.getCodeText = 59
							const timer = setInterval(() => {
								this.getCodeText--
								if (this.getCodeText == 0) {
									this.getCodeText = '获取验证码'
									clearInterval(timer)
								}	
							}, 1000)
						} else {
							uni.showToast({
								title: res.message,
								icon: 'none'
							})
						}
					})
			},
			register () {
        var data = {
          mobile: this.phone,
          code: this.code,
          type: this.type
        }

        this.$request.post('auth/changePhone', data)
          .then(response => {
            var code = response.code

            if (code !== 1000) {
              switch (code) {
                case 1127:
									this.dialogTitle = '此手机号已注册'
									this.dialogPhone = response.data.mobile
									this.dialogAvatar = response.data.avatar
									this.dialogVip = response.data.is_expert
									this.dialogName = response.data.name
									this.dialogCodeType = code
									this.dialogButtonText = '合并账号并绑定'
									this.$refs.wechatBindDialog.showDialog()
                  return
                case 1128:
									this.dialogTitle = '此手机号已绑定其他微信'
									this.dialogPhone = response.data.mobile
									this.dialogAvatar = response.data.avatar
									this.dialogVip = response.data.is_expert
									this.dialogName = response.data.name
									this.dialogCodeType = code
									this.dialogButtonText = '联系管理员微信：hiinwe'
									this.$refs.wechatBindDialog.showDialog()
                  return
                default:
									uni.showToast({
										title: response.message
									})
                  return
              }
            }
						this.$ls.set('token',response.data.token)
						getAndUpdateUserInfo(()=>{
							uni.navigateBack({})
						})
          })
      }
		}
	}
</script>

<style lang="less">
	.warningWrapper {
		background: #F3F4F6;
		height: 67.96upx;
		line-height: 67.96upx;
		padding-left: 31.96upx;
		font-size: 24upx;
		color: #B4B4B6;
	}

	.inputWrapper {
		margin: 0 66upx 43.96upx;
		position: relative;
		top: 64.96upx;

		.iconfont {
			position: absolute;
			top: 7.96upx;
			font-size: 48upx;
			color: #c8c8c8;
		}

		.getYzm {
			display: inline-block;
			font-size: 27.98upx;
			color: #3c95f9;
			position: absolute;
			z-index: 999;
			right: 3.98upx;
			top: 12upx;
			border: 1.96upx solid #3c95f9;
			border-radius: 9.98upx;
			padding: 6upx 27.98upx;

			&.disabled {
				border: 1.96upx solid #dcdcdc;
				color: #c8c8c8;
			}
		}

		.textInput {
			color: #444;
			border: none;
			margin: 3px 0 0;
			padding: 0 0 0 72upx;
			font-size: 27.98upx;
			background: none;
			display: inline-block;
		}
	}

	.inputWrapper.focus {
		&:after {
			background-color: #3c95f9;
		}

		.iconfont {
			color: #3c95f9;
		}
	}

	.inputWrapper:after {
		position: absolute;
		right: 0;
		bottom: 6upx;
		left: 0;
		height: 1.96upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: rgb(220, 220, 220);
	}

	.buttonWrapper {
		margin: 79.96upx 72upx 31.96upx;

		.button {
			border-radius: 9.98upx;
			top: 45.0upx;

			&:disabled {
				background: #dcdcdc;
				border: 1.96upx solid #dcdcdc;
				color: #b4b4b6;
			}
		}
	}
</style>
