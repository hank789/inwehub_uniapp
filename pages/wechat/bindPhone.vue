<template>
	<view class="">

		<view class="mui-content">
			<view class="warningWrapper" v-if="bindedPhone">当前绑定手机<span>{{bindedPhone}}</span>，请输入新的手机号</view>
			<view class="inputWrapper">
				<text class="iconfont icon-shoujihao"></text>
				<input class="textInput" ref="phone" pattern="\d*" type="text" maxlength="11"
				 placeholder="输入手机号" name="phone" @hover.stop.prevent="" v-model.trim.num="phone" autocomplete="off" v-tooltip="{content:errorMsg, placement:'bottom', trigger:'manual'}" />


				<!-- <text class="getYzm disabled" @tap.stop.prevent="getCode" v-if="!isCanGetCode">{{getCodeText}}</text> -->
				<text class="getYzm" @tap.stop.prevent="getCode" >{{getCodeText}}</text>
			</view>

			<view class="inputWrapper">
				<text class="iconfont icon-yanzhengma"></text>
				<input class="textInput" ref="code" v-tooltip="{content:'请输入验证码', placement:'bottom', trigger:'manual'}" type="text"
				 placeholder="输入验证码" name="code" v-model.trim.num="code" autocomplete="off" />
			</view>

			<view class="buttonWrapper">
				<button type="button" class=" button mui-btn mui-btn-block mui-btn-primary" :disabled="disableRegister"
				 @click.prevent="register">确认
				</button>
			</view>
		</view>

	</view>
</template>

<script>
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
				bindedPhone: ''
			}
		},
		computed: {
			getCodeText() {
				return this.time === 0 ? '发送验证' : this.time + '秒后重发'
			}
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

			getCode() {
				let mobile = this.phone
				let type = 'change_phone'

				if (!this.isCanGetCode) {
					return
				}

				if (mobile.length !== 11 || /^1\d{10}$/.test(mobile) === false) {
					this.showTip(this.$refs.phone, '请输入有效的手机号码')
					return
				}

				this.isCanGetCode = true
				
				postRequest('auth/sendPhoneCode', {
				  mobile,
				  type,
				  openid: this.openid,
				  'registration_code': ''
				})
					.then(response => {
						var code = response.data.code
						if (code !== 1000) {
							this.isCanGetCode = true
							window.mui.toast(response.data.message)
							return
						}

						this.time = 120
						this.timer()
					})
					.catch(({
						response: {
							data = {}
						} = {}
					}) => {
						this.isCanGetCode = true
						const {
							code = 'xxxx'
						} = data
						this.errors = Object.assign({}, this.errors, {
							serverError: errorCodes[code]
						})
					})
			},
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
