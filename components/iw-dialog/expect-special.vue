<template>
  <uni-popup
    :show="isShow"
    :position="'middle'"
    :h5-top="true"
    @hidePopup="hide"
  >
    <view class="wxPopup">
      <view class="codeWrapper">
        <view class="title">我期待的专题</view>
        <input placeholder="输入您期待的专题名称" class="input" v-model="text">
        <view class="submit alertConfirm"><text class="alertClose" @tap.stop.prevent="hide">取消</text><text @tap.stop.prevent="submit">提交</text></view>
      </view>
    </view>
  </uni-popup>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import { submitFeedback } from '@/lib/dianping'
import ui from '@/lib/ui'

export default {
  components: {
    uniPopup
  },
  data() {
    return {
      isShow: false,
      isShowError: false,
      text: ''
    }
  },
  methods: {
    hide() {
      this.isShow = false
    },
    show() {
      this.isShow = true
    },
    submit() {
      if (!this.text) {
        ui.toast('请输入专题名称')
        return
      }

      submitFeedback(this, this.text, (res) => {
        this.text = ''
        this.hide()
      })

    }
  }
}
</script>

<style>
    .codeWrapper {
        width: 600upx;
        /*height: 319.96upx;*/
        padding: 60upx 0upx 0;
        background:#FFFFFF;
        border-radius: 36upx;
        text-align: center;
        margin: 0 auto;
        position: relative;
    }
    .codeWrapper .title {
        color: #444;
        font-size:36upx;
        font-family:PingFangSC-Medium;
    }
    .codeWrapper .input {
        width: 499.96upx;
        margin: 30upx auto 58.96upx;
        height: 78upx;
        line-height: 78upx;
        text-align: left;
        border-radius: 9.98upx;
        padding: 0 19.96upx;
        color: #444;
        border: 0.98upx solid #DCDCDC;
    }
    .codeWrapper .submit {
        color: #03AEF9;
        font-size: 31.96upx;
        line-height:99.0upx;
        font-family:PingFangSC-Medium;
        border-top: 0.98upx solid #DCDCDC;
    }

    .codeWrapper text {
        padding: 0 79.96upx;
    }
</style>
