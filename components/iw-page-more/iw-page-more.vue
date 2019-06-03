<template>
  <view class="red">
    <uni-popup
      :show="showPopupBottomShare"
      :position="'bottom'"
      type="bottom"
      :h5-top="true"
      @hidePopup="hidePopup"
    >

      <view id="sharePageMoreWrapper" class="sharePageMoreWrapper">
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
          <view class="single" @tap.stop.prevent="shareToChat()">
            <image mode="aspectFill" class="image" src="../../static/images/sendFriend@2x.png" />
            <text class="text">私信</text>
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

    </uni-popup></view>
</template>
<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'

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
      showPopupBottomShare: false,
      isHaveNavigationBar: false
    }
  },
  onLoad() {

  },
  methods: {
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

    },
    toggle () {
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
</style>
