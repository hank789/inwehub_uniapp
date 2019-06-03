<template>

  <uni-popup
    :show="isShow"
    :position="'bottom'"
    type="bottom"
    :h5-top="true"
    @hidePopup="hidePopup"
  >
    <view class="component-report">

      <view id="reportxxx" class="report-list reportxxx">

        <view v-for="(item, index) in reportTitle" :key="index" :class="{addActive: item.text === type}" class="title alertConfirm" @tap.stop.prevent="selectItem(item)">
          <view :id="'span_'+index" class="span">{{ item.text }}</view>
          <text class="iconfont icon-gou1 " :class="'icon_'+index" />
          <view class="bot" />
        </view>
      </view>

      <view class="inputWrapper">
        <textarea id="inputText" v-model="content" class="input inputText" placeholder="输入具体举报原因" />
        <view class="bot" />
      </view>

      <view class="buttonWrapper sure alertConfirm" @tap.stop.prevent="confirm">
        <view class="span font-family-medium">确定</view>
        <view class="bot" />
      </view>
      <view class="buttonWrapper alertClose" @tap.stop.prevent="hide">
        <view class="span font-family-medium">取消</view>
      </view>

    </view>
  </uni-popup>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import { getCurrentRoute } from '@/lib/allPlatform'
import { feedback } from '@/lib/system'
import ui from '@/lib/ui'

export default {
  components: {
    uniPopup
  },
  data() {
    return {
      isShow: false,
      type: '',
      reportTitle: [
        { text: '广告、垃圾信息', selected: false },
        { text: '抄袭、未授权转载', selected: false },
        { text: '内容不实、主观判断', selected: false },
        { text: '恶意辱骂、人身攻击', selected: false },
        { text: '其他', selected: false }
      ],
      content: ''
    }
  },
  computed: {},
  methods: {
    selectItem(item) {
      this.type = item.text
    },
    confirm() {
      const link = getCurrentRoute()

      const type = this.reportTitle.filter(item => item.selected === true)

      if (!type) {
        ui.toast('请选择举报类型')
      } else if (!this.content) {
        ui.toast('请输入举报内容')
      } else {
        const content = '举报类型:' + this.type + '/举报内容:' + this.content + '/链接:' + link
        feedback('举报内容', content)
      }
    },
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    }
  }
}
</script>
<style lang="less">

    .component-report {
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: 999;
        background: #ffffff;
        border-top-left-radius: 36upx;
        border-top-right-radius: 36upx;
    }
    .component-report .report-list {
    }
    .component-report .report-list .title {
        position: relative;
        color: #444444;
        font-size: 31.96upx;
        padding: 30upx 31.96upx;
        overflow: hidden;
        box-sizing: border-box;
    }

    .component-report .report-list .title .span {
        float: left;
    }
    .component-report .report-list .title .iconfont{
        display: none;
        position: absolute;
        right:30upx;
        font-size: 33.98upx;
        color: #03AEF9;
    }
    .reportxxx .addActive .span {
        color: #C8C8C8 !important;
    }
    .reportxxx .addActive .iconfont {
        display: inline-block !important;
    }
    .component-report .inputWrapper {
        margin-top: 30upx;
        padding: 0 31.96upx 30upx;
        position: relative;
    }
    .component-report .inputWrapper .input {
        border: none;
        background: #F3F4F6;
        height:124upx;
        width:100%;
        padding: 19.96upx 30upx;
        border-radius: 6upx;
        text-align: left;
    }
    .component-report .inputWrapper .bot{
        margin-top:60upx;
    }
    .component-report .buttonWrapper {
        position: relative;
        text-align: center;
    }
    .component-report .buttonWrapper .span {
        color: #444444;
        font-size: 31.96upx;
        line-height: 103.96upx;
    }
    .component-report .buttonWrapper.sure .span {
        color: #03AEF9;
    }

    .bot {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0upx;
        height: 2upx;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: rgb(220, 220, 220);
    }

</style>
