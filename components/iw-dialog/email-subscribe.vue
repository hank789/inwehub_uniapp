<template>
  <uni-popup
    :show="isShow"
    :position="'middle'"
    :h5-top="true"
    @hidePopup="hide"
  >
    <view class="EmailSubscribe">
      <view class="close alertClose" @tap.stop.prevent="hide">
        <text class="iconfont icon-times-- " />
      </view>

      <view class="title font-family-medium">热点推荐-服务号订阅</view>
      <view class="text">我们将为您推送每日热点推荐~</view>

      <view class="inputWrapper">
        <input type="text" v-model="email" placeholder="输入您的邮箱地址" class="input EmailText">
      </view>

      <view class="tipsInfo showEmailErrorTips" v-if="isShowError">邮箱格式有误，请重新输入</view>

      <view class="buttonWrapper sure alertConfirm">
        <view class="span font-family-medium" @tap.stop.prevent="submit">订阅</view>
        <view class="bot" />
      </view>
    </view>
  </uni-popup>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'
export default {
  components: {
    uniPopup
  },
  data() {
    return {
      isShow: false,
      isShowError: false,
      email: ''
    }
  },
  methods: {
    hide() {
      this.isShow = false
    },
    show() {
      this.isShow = true
    },
    submit () {
      var re = /^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!re.test(this.email)) {
        this.isShowError = true
        return false
      }

      this.$emit('emailChange', this.email)
    }
  }
}
</script>

<style>
    .bot {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0rem;
        height:1px;
        transform: scaleY(.5);
        background-color: rgb(220, 220, 220);
    }
    .EmailSubscribe {
        width: 600upx;
        background: #ffffff;
        text-align: center;
        color: #000;
        border-radius: 0.346rem;
    }
    .EmailSubscribe .inputWrapper {
        width: 540upx;
        margin: 30upx auto 0;
    }
    .EmailSubscribe .inputWrapper .input {
        border-color: #DCDCDC;
        padding:0;
        margin-bottom:10px;
    }
    .EmailSubscribe .tipsInfo {
        color: #FA4975;
        font-size: 21.98upx;
        text-align: left;
        padding-left: 49.96upx;
        margin: 20upx 0;
    }

    .EmailSubscribe .close {
        text-align: right;
        padding: 30upx;
        color: #808080;
        font-size: 25.96upx;
    }

    .EmailSubscribe .buttonWrapper {
        position: relative;
        text-align: center;
        color: #03AEF9;
        line-height: 97.96upx;
    }

    .EmailSubscribe .buttonWrapper .bot {
        top: 0;
    }

    .EmailSubscribe .title {
        color: #444444;
        font-size: 36upx;
        line-height: 48upx;
        margin-bottom: 19.96upx;
    }

    .EmailSubscribe .text {
        color: #808080;
        font-size: 25.96upx;
        line-height: 42upx;
    }
</style>
