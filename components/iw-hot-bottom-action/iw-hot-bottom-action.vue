<template>
    <view>
    <uni-popup
            :show="isShow"
            :position="'bottom'"
            type="bottom"
            :h5-top="true"
            @hidePopup="hide"
    >
  <view class="hotHomeHeat mui-popover mui-popover-action mui-popover-bottom">
    <view class="heat-wrapper">
      <view class="footerMenu">
        <view class="left">
          <text class="iconfont icon-dingyue- " />
          <view class="hotRecommend">
            <image mode="aspectFill" class="image" src="../../static/images/hotrecommend@3x.png" alt="" /></view>
        </view>
        <view class="right">
          <view class="oneLine" />
          <view class="menu" @tap.stop.prevent="subscribeApp">
            <view :class="isOpenAppPush === 1 ? 'grey':''" class="span iconCircular one">
              <text class="iconfont icon-xiazaiapp " />
            </view>
            <view class="text">{{ isOpenAppPush ? '已订阅':'APP推送' }}</view>
          </view>
          <view class="menu" @tap.stop.prvent="subscribeEmail">
            <view :class="isOpenEmailPush ? 'grey':''" class="span iconCircular two">
              <text class="iconfont icon-youxiang " />
            </view>
            <view class="text">{{ isOpenEmailPush ? '已订阅':'邮件' }}</view>
          </view>
          <view class="menu" @tap.stop.prevent="subscribeGZH">
            <view :class="isOpenWeChatPush ? 'grey' : ''" class="span iconCircular three">
              <text class="iconfont icon-weixinfuwuhao " />
            </view>
            <view class="text">{{ isOpenWeChatPush ? '已订阅':'微信服务号' }}</view>
          </view>
        </view>
      </view>

      <view class="cancelW" @tap.stop.prevent="cancelShare">
        <view class="bot" />
        <view class="span">取消</view>
      </view>
    </view>
  </view>
    </uni-popup>

    <alertEmailSubscribe ref="alertEmailSubscribe" @emailChange="emailChange"></alertEmailSubscribe>
    <alertSubscribeGZH ref="alertSubscribeGZH"></alertSubscribeGZH>
    </view>
</template>

<script type="text/javascript">
import { postRequest } from '@/lib/request'
import { setHotRecommendAppPushStatus, setHotRecommendEmailStatus } from '@/lib/push'
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import alertEmailSubscribe from '@/components/iw-dialog/email-subscribe'
import alertSubscribeGZH from '@/components/iw-dialog/subscribegzh'

export default {
  components: {
    uniPopup,
    alertEmailSubscribe,
    alertSubscribeGZH
  },
  props: {
  },
  data() {
    return {
      isOpenAppPush: -1,
      isOpenEmailPush: -1,
      isOpenWeChatPush: -1,
      emailText: '',
      isShow: false
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
    this.refreshPageData()
  },
  methods: {
    hide () {
      this.isShow = false
    },
    subscribeApp() {
      if (!this.isOpenAppPush) {
        setHotRecommendAppPushStatus(this, 1, () => {
          this.isOpenAppPush = 1
          // ui.toast('“APP订阅”成功')
        }, () => {
        })
      }
    },
    subscribeEmail() {
      if (!this.isOpenEmailPush) {
        if (!this.emailText) {
          this.cancelShare()
          this.$refs.alertEmailSubscribe.show()
          return
        }
      }
    },
    emailChange(email){
      setHotRecommendEmailStatus(1, email, () => {
        this.isOpenEmailPush = 1
        this.$refs.alertEmailSubscribe.hide()
      }, () => {
      })
    },
    subscribeGZH() {
      this.cancelShare()
      this.$refs.alertSubscribeGZH.show()
      // setHotRecommendWechatStatus(this.isOpenWeChatPush, () => {
      //   if (!this.isOpenWeChatPush) {
      //     this.cancelShare()
      //   } else {
      //     this.isOpenWeChatPush = 0
      //     // ui.toast('已关闭“微信订阅”')
      //   }
      // }, () => {
      //   this.isOpenWeChatPush = 0
      // })
    },
    getNotification() {
      postRequest(`notification/push/info`, {}, false, {}, 0, false).then(response => {
        var code = response.code
        if (code !== 1000) {
          ui.alert(response.message)
          return
        }
        var res = response.data

        this.isOpenAppPush = res.push_daily_subscribe
        this.emailText = res.email_daily_subscribe
        this.isOpenWeChatPush = res.wechat_daily_subscribe
        this.isOpenEmailPush = res.email_daily_subscribe
        if (this.emailText) {
          this.isOpenEmailPush = 1
        }
      })
    },
    refreshPageData() {
      this.getNotification()
    },
    cancelShare() {
      this.hide()
    },
    show() {
      this.isShow = true
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
    .bot {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0upx;
        height: 1.96upx;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: rgb(220, 220, 220);
    }

    .heat-wrapper {
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: 999;
        padding-top: 39.98upx;
        background: #ffffff;
        border-top-left-radius: 36upx;
        border-top-right-radius: 36upx;
        .cancelW {
            position: relative;
            text-align: center;
            .bot {
                top: 0 !important;
            }
            .span {
                color: #444444;
                font-family: PingFangSC-Medium;
                font-size: 31.96upx;
                text-align: center;
                line-height: 103.96upx;
            }
        }
    }
    .footerMenu {
        display: flex;
        padding: 0 9.98upx 39.98upx;
        justify-content: space-between;
        .left {
            width: 91.96upx;
            text-align: center;
            margin-left: 60upx;
            .iconfont{
                color: #C8C8C8;
                font-size: 42upx;
                text-align: center;
            }
            .hotRecommend {
                width: 91.96upx;
                height: 51.98upx;
                margin-top: 19.96upx;
                .image {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .right {
            display: flex;
            .oneLine {
                width: 1.96upx;
                height: 87.98upx;
                background: #DCDCDC;
                margin-right: 30upx;
                position: relative;
                top: 19.96upx;
            }
            .menu {
                padding: 0 30upx;
                text-align: center;
                &:last-child {
                    padding-right: 49.96upx;
                }
                .one {
                    background: #03AEF9;
                }
                .two {
                    background: #5B84DE;
                }
                .three {
                    background: #77C819;
                }
                .iconCircular {
                    width: 87.98upx;
                    height: 87.98upx;
                    color: #FFFFFF;
                    font-size: 45.98upx;
                    text-align: center;
                    line-height: 87.98upx;
                    border-radius: 50%;
                    display: inline-block;
                    &.grey {
                        background: #F7F8FA;
                        color: #808080;
                    }
                }
                .text {
                    color: #808080;
                    font-size: 21.98upx;
                    text-align: center;
                    margin-top: 9.98upx;
                }
            }
        }
    }
</style>
