<template>
  <uni-popup
    :show="isShow"
    :position="'middle'"
    :h5-top="true"
    @hidePopup="hide"
  >
    <view class="subscribeWrapper">

      <view class="close alertClose" @tap.stop.prevent="hide">
        <text class="iconfont icon-times-- " />
      </view>
      <view class="title font-family-medium">热点推荐-服务号订阅</view>

      <view class="text">请先微信扫码关注InweHub服务号</view>
      <view class="text">我们将为您推送每日热点推荐~</view>

      <view class="GZHimg">
        <image mode="aspectFill" class="image" src="../../static/images/GZHcode@3x.png" alt="" /></view>

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
      isShow: false
    }
  },
  methods: {
    hide() {
      this.isShow = false
    },
    show() {
      this.isShow = true
    }
  }
}
</script>

<style lang="less">

    .subscribeWrapper {
        width: 600upx;
        background: #ffffff;
        padding-bottom: 60upx;
        text-align: center;
        color: #000;
        border-radius: 0.346rem;
    }
    .subscribeWrapper .title, .hotRecommendWrapper .title, .EmailSubscribe .title {
        color: #444444;
        font-size: 36upx;
        line-height: 48upx;
        margin-bottom: 19.96upx;
    }
    .subscribeWrapper .text, .hotRecommendWrapper .text, .EmailSubscribe .text {
        color: #808080;
        font-size: 25.96upx;
        line-height: 42upx;
    }
    .subscribeWrapper .GZHimg {
        width: 295.96upx;
        height: 300upx;
        margin: 19.96upx auto 0;
    }
    .subscribeWrapper .GZHimg .image {
        width: 100%;
        height: 100%;
    }

    .subscribeWrapper .close {
        text-align: right;
        padding: 30upx;
        color: #808080;
        font-size: 25.96upx;
    }
</style>
