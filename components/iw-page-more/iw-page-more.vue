<template>
  <view class="red">
    <uni-popup
      :show="showPopupBottomShare"
      :position="'bottom'"
      type="bottom"
      :h5-top="true"
      @hidePopup="hidePopup"
    >

      <view class="sharePageMoreWrapper">
        <view class="title">
          分享到
        </view>
        <view class="more">
          <view class="single" @tap.stop.prevent="shareToHaoyou()">
            <image mode="aspectFill" class="image" src="../../static/images/wechat_2x.png" />
            <text class="text">微信</text>
          </view>
          <view class="single" @tap.stop.prevent="shareToPengyouQuan()">
            <image mode="aspectFill" class="image" src="../../static/images/pengyouquan.png" />
            <text class="text">朋友圈</text>
          </view>
          <view v-if="shareOption.link" class="single" @success="shareToCopyLink()">
            <image mode="aspectFill" class="image" src="../../static/images/copyLink@3x.png" />
            <text class="text">复制链接</text>
          </view>
        </view>

        <view class="line-river-after line-river-after-height" />

        <view v-if="iconMenu.length">
          <view class="more twoLevel">
            <view v-for="(item, index) in iconMenu" :key="index" class="delete single" @tap.stop.prevent="clickItem(item)">
              <text class="iconBorder" :class="item.isBookMark ? 'active' : ''">
                <text class="iconfont" :class="item.icon" />
              </text>
              <text class="text" :class="item.isBookMark ? 'active' : ''">{{ item.text }}</text>
            </view>
          </view>
          <view class="line-river-after line-river-after-height" />
        </view>
        <view class="cancel" @tap.stop.prevent="hidePopup()"><text class="text font-family-medium">取消</text></view>
      </view>
    </uni-popup>

    <uni-popup
      :show="isShowH5Guide"
      :position="'top'"
      type="top"
      :h5-top="true"
      @hidePopup="isShowH5Guide = false"
    >
      <view
        class="shareShowWrapper mui-popover mui-popover-action mui-popover-top"
        @tap.stop.prevent="toggleShareNav()"
      >
        <text class="iconfont icon-dianzheli " />
      </view>

    </uni-popup>
  </view>
</template>
<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import Share from '@/lib/share'
import { getLocalUserId } from '@/lib/user'

export default {
  components: {
    uniPopup
  },
  props: {
    iconMenu: {
      type: Array,
      default: () => {
        return []
      }
    },
    shareOption: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      isShowH5Guide: false,
      showPopupBottomShare: false,
      isHaveNavigationBar: false
    }
  },
  onLoad() {

  },
  methods: {
    toggleShareNav() {
      this.isShowH5Guide = true
    },
    clickItem(item) {
      this.$emit('clickedItem', item)
    },
    hidePopup() {
      this.showPopupBottomShare = false
      // uni.showTabBar()

      if (this.isHaveNavigationBar) {
        setTimeout(() => {
          uni.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#ffffff'
          })
        }, 100)
      }
    },
    shareToCopyLink() {
      // todo 复制到剪切板
    },
    shareToChat() {
      this.hidePopup()
    },
    shareToHaoyou() {
      // #ifdef H5 || MP-WEIXIN
      this.hidePopup()
      this.isShowH5Guide = true
      // #endif

      var shareParams = 'isShare=1&fromUser=' + getLocalUserId()
      if (this.shareOption.link.indexOf('?') < 0) {
        shareParams = '?' + shareParams
      } else {
        shareParams = '&' + shareParams
      }

      var data = {
        title: this.shareOption.title,
        link: this.shareOption.link + shareParams,
        content: this.shareOption.content,
        imageUrl: this.shareOption.imageUrl,
        thumbUrl: this.shareOption.thumbUrl,
        pyqTitle: this.shareOption.pyqTitle,
        pyqContent: this.shareOption.pyqContent
      }



      Share.bindShare(
        this,
        data,
        this.successCallback,
        this.failCallback
      )

      setTimeout(() => {
        if (this.sendHaoyou) {
          this.sendHaoyou()
        }
      }, 500)
    },
    successCallback () {

    },
    failCallback (error) {

    },
    toggle() {
      this.isHaveNavigationBar = !this.isHaveNavigationBar
    },
    share(isHaveNavigationBar) {
      this.$emit('share')
      this.show(isHaveNavigationBar)
    },
    show(isHaveNavigationBar) {
      this.showPopupBottomShare = true
      // uni.hideTabBar()

      this.isHaveNavigationBar = false

      if (isHaveNavigationBar) {
        this.isHaveNavigationBar = true
        setTimeout(() => {
          uni.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#b3b3b3'
          })
        }, 100)
      }
    },
    shareToPengyouQuan() {

      var shareParams = 'isShare=1&fromUser=' + getLocalUserId()
      if (this.shareOption.link.indexOf('?') < 0) {
        shareParams = '?' + shareParams
      } else {
        shareParams = '&' + shareParams
      }

      var data = {
        title: this.shareOption.title,
        link: this.shareOption.link + shareParams,
        content: this.shareOption.content,
        imageUrl: this.shareOption.imageUrl,
        thumbUrl: this.shareOption.thumbUrl,
        pyqTitle: this.shareOption.pyqTitle,
        pyqContent: this.shareOption.pyqContent
      }

      Share.bindShare(
        this,
        data,
        this.successCallback,
        this.failCallback
      )

      if (this.sendPengYouQuan) {
        this.sendPengYouQuan()
      }
    }
  }
}
</script>

<style lang="less">
    .red{
        height:100%;
    }

    .line-river-after-height {
        height: 0;
    }
    .shareBtn {
        position: fixed;
        right: 19.96upx;
        top: 19.96upx;
        z-index: 11;
        color: #3c3e44;
        font-size: 42upx;
    }

    .resumeWrapper .shareBtn {
        position: absolute;
        top: 48upx !important;
        font-size: 43.96upx;
        right: 61.96upx;
        color: #808080;
    }

    .mui-content {
        padding: 399.98upx;
        text-align: center;
    }

    .sharePageMoreWrapper {
        text-align: left;
        .title {
            background: #FFF;
            text-align: center;
            font-size: 21.98upx;
            padding: 33.98upx 0 0;
            position: relative;
            color: #B4B4B6;
            line-height: 30upx;
            border-top-left-radius: 36upx;
            border-top-right-radius: 36upx;
        }
        .more {
            background: #fff;
            padding: 25.96upx 33.98upx 18.76upx;
            font-size: 0;
            .single {
                height: 139.96upx;
                display: inline-block;
                .image {
                    width: 87.98upx;
                    height: 85.96upx;
                    margin: 0 24upx;
                }
                .text {
                    display: block;
                    font-size: 24upx;
                    color: #808080;
                    line-height: 31.96upx;
                    text-align: center;
                    margin-top: -6upx;
                }
            }
        }
        .more.twoLevel {
            padding: 30upx 33.98upx 18.76upx;
            .delete {
                .iconBorder {
                    width: 87.98upx;
                    height: 87.98upx;
                    margin: 0 24upx;
                    line-height: 88upx;
                    text-align: center;
                    display: inline-block;
                    border-radius: 15.98upx;
                    border: 1.96upx solid #DCDCDC;
                    color: #C8C8C8;
                    &.active {
                        color: #DCDCDC;
                    }
                    .iconfont{
                        font-size: 43.96upx;
                    }
                }
            }
            .text {
                display: block;
                font-size: 24upx;
                color: #808080;
                line-height: 31.96upx;
                text-align: center;
                margin-top: 15.98upx;
                &.active {
                    color: #C8C8C8;
                }
            }
        }
    }

    .cancel {
        height: 103.96upx;
        line-height: 103.96upx;
        background: #FFF;
        text-align: center;
        .text {
            color: #444444;
            font-size: 31.96upx;
        }
    }

    .shareShowWrapper {
      position: absolute;
      right: 0;
      top: 0;
      .iconfont{
        color: #fff;
        position: absolute;
        right: 30upx;
        top: 19.96upx;
        font-size: 139.96upx;
      }
    }
</style>
