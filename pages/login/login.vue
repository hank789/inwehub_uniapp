<template>
  <view class="mui-content">
    <view class="login">
      <view class="logo">
        <text class="iconfont icon-logowenzi" />
      </view>
      <view class="inputWrapper half">
        <text class="iconfont icon-shoujihao" />
        <input
          ref="phone"
          v-model="phone"
					focus=true
          class="inputPhone text"
          placeholder="请输入手机号"
          pattern="\d*"
          autofocus="autofocus"
          placeholder-class="inputPlaceholder"
          type="number"
          name="phone"
          autocomplete="off"
        >

        <text v-if="!isCanGetCode" class="getYzm disabled" @tap.stop.prevent="">{{ get_msg_btn }}</text>
        <text v-else class="getYzm" @tap.stop.prevent="entryYzm">{{ get_msg_btn }}</text>
      </view>
      <view class="inputWrapper">
        <text class="iconfont icon-yanzhengma" />
        <input
          ref="yzmInput"
          v-model.trim="yzm"
          placeholder="请输入验证码"
          :focus="yzmFocus"
          class="text"
          type="number"
          name="code"
          autocomplete="off"
        >
      </view>

      <button
        type="button"
        class="mui-btn mui-btn-block mui-btn-primary"
        :disabled="btnDisabled"
        @click.prevent="submitLogin"
      >登录
      </button>
      <view class="registerPassword">
        <text class="firstSpan"></text>
        <text class="firstSpan">验证即可登录，未注册用户将根据手机号自动创建账号</text>
      </view>

      <view class="weChat" @tap.stop.prevent="wechatLogin()">
        <view class="weChatIcon">
          <text class="iconfont icon-wechat" />
        </view>
        <text class="span">微信授权登录</text>
      </view>

      <view class="protocol">注册即同意<text class="span" @tap.stop.prevent="navToProtocol">《用户注册服务协议》</text></view>
		</view>
		<oauth ref="oauth" serviceId="weixin" :isShowBtn="false" @success="wechatLoginSuccess" @fail="wechatLoginFail"></oauth>
  </view>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'
import allPlatform from '@/lib/allPlatform.js'
import oauth from '@/components/oauth/oauth.vue'
export default {
  data() {
    return {
      isCanGetCode: true,
			  phone: '',
			  yzm: '',
			  get_msg_btn: '获取验证码',
			  can_send_msg: true,
			  btnDisabled: false,
			  yzmFocus: false
    }
  },
	components: {
		oauth
	},
  onLoad() {
    console.log(this.$ls.get('token'))
  },
  methods: {
    ...mapMutations(['setUser', 'setToken']),
    entryYzm() {
      const phone = this.phone
      if (!this.can_send_msg) {
        return
      }
      if (!phone) {
        uni.showToast({
          title: '请输入手机号',
          icon: 'none'
        })
        return
      }
      this.$request.post('auth/sendPhoneCode', { mobile: phone, type: 'login' }).then(res => {
        console.log(res)
        if (res.code == 1000) {
          uni.showToast({
            title: '验证码发送成功'
          })
          this.can_send_msg = false
          this.get_msg_btn = 59
          this.yzmFocus = true
          const timer = setInterval(() => {
            this.get_msg_btn--
            if (this.get_msg_btn == 0) {
              this.get_msg_btn = '获取验证码'
              this.can_send_msg = true
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
    submitLogin() {
      const params = {
        mobile: this.phone,
        phoneCode: this.yzm
      }
      console.log(params)
      if (!this.phone) {
        uni.showToast({
          title: '请填写手机号',
          icon: 'none'
        })
        return
      }
      if (!this.yzm) {
        uni.showToast({
          title: '请填写验证码',
          icon: 'none'
        })
        return
      }
      this.btnDisabled = true
      this.$request.post('auth/login', params).then(res => {
        console.log(res)
        this.btnDisabled = false
        if (res.code == 1000) {
          this.setUser(res.data)
          this.setToken(res.data.token)
          this.$ls.set('token', res.data.token)
          this.$ls.set('UserInfo', res.data)
					allPlatform.saveLocationInfo()
          uni.switchTab({
              url: '/pages/index/index'
          })
        } else {
          uni.showToast({
            title: res.message,
            icon: 'none'
          })
        }
      })
    },
		wechatLoginSuccess (token, openid, nickname = '', isNewUser = '') {
			console.log(token)
			console.log(openid)
			if (token) {
				this.$ls.set('token', token)
				allPlatform.saveLocationInfo()
				this.$request.get('profile/info').then(response => {
					this.$ls.set('UserInfo', response.data)
					uni.hideLoading()
					uni.switchTab({
						url: '/pages/index/index'
					})
				})
			} else {
				uni.hideLoading()
				uni.showToast({
					title: '登陆失败',
					icon: 'none'
				})
			}
		},
		wechatLoginFail (errorMessage) {
			console.log(errorMessage)
			uni.hideLoading()
			uni.showToast({
				title: errorMessage
			})
		},
		wechatLogin () {
			uni.showLoading({
					title: ''
			})
			this.$refs.oauth.login()
		},
		navToProtocol () {
			uni.navigateTo({
				url: '/pages/protocol/register'
			})
		}
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

	.registerPassword {
		padding: 0 73.96upx;
		display: flex;
		justify-content: space-between;

		.firstSpan {
			color: #B4B4B6;
			font-size: 24upx;
			text-align: left;
		}
		.twoSpan {
			color: #444444;
			font-size: 30upx;
		}

	}
	.weChat {
		position: absolute;
		bottom: 111.98upx;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		.weChatIcon {
			width: 79.96upx;
			height: 79.96upx;
			margin: 0 auto;
			color: #FFFFFF;
			line-height: 79.96upx;
			border-radius: 50%;
			background: linear-gradient(155deg,#7ADF75 0%,#51C944 100%);
			.iconfont{
				font-size: 49.96upx;
			}
		}
		.span {
			color: #B4B4B6;
			font-size: 21.98upx;
			margin-top: 12upx;
		}
	}
	.mui-content{
		background: #FFFFFF;
		min-height: 1135.96upx;
	}
	.login {
		position: absolute;
		width: 100%;
		min-height: 100%;
		background: #FFFFFF;
		background-size: cover;
	}
	/*协议*/
	.protocol {
		position: absolute;
		bottom: 39.98upx;
		left: 50%;
		transform: translateX(-50%);
		color: #808080;
		text-align: center;
		font-size: 24upx;
		.span {
			color: #3C95F9;
		}
	}

	/*登录*/
	.button, .mui-btn {
		border-radius: 9.98upx;
		width: 80%;
		margin-left: 10%;
		margin-top: 30upx;
		margin-bottom: 24upx;
	}

	button {
		border-radius: 9.98upx;
		&:disabled {
			background: #DCDCDC;
			border: 1.96upx solid #dcdcdc;
			color: #b4b4b6;
		}
	}

	/*邀请码*/
	.help {
		font-size: 27.98upx;
		color: #3c95f9;
		text-align: center;

	}

	/*小箭头*/

	.leftNav {

		position: absolute;
		left: 24upx;
		top: 30upx;
		font-size: 39.98upx;
		color: #808080;
	}

	/*图标*/
	.logo{
		font-size: 295.96upx;
		text-align: center;
		margin: 9.98upx 0;
		padding-top: 39.98upx;
		height: 295.96upx;
	}
	.logo .iconfont {
		font-size: 295.96upx;
		position: relative;
		top:-120upx;
	}

	/*输入框的内容*/
	.inputWrapper {
		margin: 0 66upx 49.96upx;
		position: relative;
		width: 80%;
		margin-left: 10%;
		.iconfont {
			position: absolute;
			top: 9.98upx;
			font-size: 43.96upx;
			color: #c8c8c8;
			left: 0;
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

	/*验证码*/
	.inputWrapper .getYzm {
		display: inline-block;
		font-size: 27.98upx;
		color: #444444;
		position: absolute;
		right: 3.98upx;
		top: 9.0upx;
		height: 60upx;
		padding: 0 30upx;
		line-height: 60upx;
		border-radius: 9.98upx;
		border: 1.96upx solid #dcdcdc;
	}

	.inputWrapper .getYzm.disabled {
		border: 1.96upx solid #DCDCDC;
		color: #C8C8C8;
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

	.inputWrapper input {
		color: #444;
		border: none;
		margin: 0;
		font-size: 27.98upx;
		background: none;
		display: inline-block;
		height: 72upx;
		line-height: 72upx;
		margin-left: 30upx;
		position: relative;
		top:10upx;
		padding-top:0;
		padding-bottom:0;
	}

	/*手机号input输入框的调整*/
	.inputPhone {
		color: #444;
		border: none;
		margin: 0;
		font-size: 27.98upx;
		background: none;
		display: inline-block;
		height: 72upx;
		margin-left: 24upx;
		/*background: #ccc;*/
		width: 60%;
		padding-top:0;
		padding-bottom:0;
		margin-right: 40%;
	}

	.half:after {
		position: absolute;
		right: 36%;
		bottom: 6upx;
		left: 0;
		height: 1.96upx;
		content: '';
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: #dcdcdc;
	}

	/*2 3图标大小的微调*/
	.inputWrapper:nth-of-type(3) .iconfont {
		position: absolute;
		top: 6upx;
		font-size: 49.96upx;
		/*color: #c8c8c8;*/
		left: 0;
	}

	.inputWrapper:nth-of-type(4) .iconfont {
		position: absolute;
		top: 6upx;
		font-size: 49.96upx;
		/*color: #c8c8c8;*/
		left: 0;
	}

	.inputWrapper:nth-of-type(5) .iconfont {
		position: absolute;
		top: 9.98upx;
		font-size: 39.98upx;
		/*color: #c8c8c8;*/
		left: 0;
	}

	uni-button[disabled] {
		color:#b4b4b6;
		opacity: .6;
	}
</style>
