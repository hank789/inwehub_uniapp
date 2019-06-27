<template>

  <view>

    <view class="mui-content">

      <view class="topWrapper">
        <view class="bagImg">
          <image mode="aspectFill" class="image" src="../../static/images/hotTopImg@3x.png" /></view>
        <view class="dateWrapper">
          <view class="date">{{ dateShow }}</view>
        </view>
      </view>

      <view class="domainWrapper">
        <view class="contentWrapper">

          <view v-for="(item, index) in list" :key="index" class="newsList" @tap.stop.prevent="goArticle(item)">
            <view class="span indexNum">{{ index+1 }}.</view>
            <view class="middle">
              <view class="left">
                <view class="title font-family-medium text-line-2">{{ item.title }}</view>
                <view class="heatWrapper border-football" @tap.stop.prevent="addHeat(item, index)">
                  <view v-if="item.startAnimation" class="addOne">
                    <text class="i"/>
                    <view class="span">+{{ startAnimationNum }}</view>
                  </view>
                  <text class="iconfont icon-huo iconfontFirst" />
                  <view class="span">{{ item.rate }}</view>
                  <text class="iconfont icon-tianjia heatAddIcon iconfontTwo" />
                </view>
              </view>
              <view class="right">
                <view class="articleImg">
                  <image mode="aspectFill" class="image" :src="item.img" width="97" :is-lazyload="true" :save-to-local="true" />
                </view>
              </view>
            </view>
          </view>

          <view class="bottomLine" />
          <view class="circular leftC" />
          <view class="circular rightC" />

          <view class="footerMenu">
            <view class="left">
              <text class="iconfont icon-dingyue-" />
              <view class="hotRecommend">
                <image mode="aspectFill" class="image" src="../../static/images/hotrecommend@3x.png" alt="" /></view>
            </view>
            <view class="right">
              <view class="oneLine" />
              <view class="menu" @tap.stop.prevent="appPush">
                <view :class="AppPush === 1 ? 'grey':''" class="span iconCircular one">
                  <text class="iconfont icon-xiazaiapp" />
                </view>
                <view class="text">{{ AppPush === 1 ? '已订阅':'APP推送' }}</view>
              </view>
              <view class="menu" @tap.stop.prvent="setEmailSubscribe">
                <view :class="email_subscribe ? 'grey':''" class="span iconCircular two">
                  <text class="iconfont icon-youxiang" />
                </view>
                <view class="text">{{ email_subscribe ? '已订阅':'邮件' }}</view>
              </view>
              <view class="menu" @tap.stop.prevent="subscribeGZH">
                <view :class="wechat_subscribe === 1 ? 'grey':''" class="span iconCircular three">
                  <text class="iconfont icon-weixinfuwuhao" />
                </view>
                <view class="text">{{ wechat_subscribe === 1 ? '已订阅' : '微信服务号' }}</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <BottomActions
      ref="BottomActions"
      v-model="activeItem"
      :regions="regions"
      @clickDelete="clickDelete"
      @startAnimation="startAnimationEvent"
    />

    <PageMore
      ref="share"
      :share-option="shareOption"
      :hide-share-btn="true"
      :icon-menu="shareIconMenus"
      @success="shareSuccess"
      @fail="shareFail"
      @clickedItem="iconMenusClickedItem"
    />
    <alertSubscribeGZH ref="alertSubscribeGZH"></alertSubscribeGZH>
		
		<openNotice ref="openNotice" :showPopup="showPopup" @nowOpen="nowOpens"></openNotice>
		<alertEmailSubscribe ref="alertEmailSubscribe" @emailChange="emailChange"></alertEmailSubscribe>
  </view>
</template>

<script>
import ui from '@/lib/ui'
import { postRequest } from '@/lib/request'
// import { goThirdPartyArticle } from '@/lib/webview'
// import { openAppUrlByUrl } from '@/lib/plus'
// import { alertSubscribeGZH, alertEmailSubscribe } from '@/lib/dialogList'
import { timeToHumanDay } from '@/lib/time'
import BottomActions from '@/components/iw-article-bottomaction/iw-article-bottomaction'
import { getHomeData } from '@/lib/home'
import { deleteItem } from '@/lib/discover'
import PageMore from '@/components/iw-page-more/iw-page-more.vue'
import Vue from 'vue'
import { iconMenusClickedItem } from '@/lib/feed'
import { getHomeDetail } from '@/lib/shareTemplate'
import { setHotRecommendAppPushStatus, setHotRecommendEmailStatus, needNotifitionPermission } from '@/lib/push'
import alertSubscribeGZH from '@/components/iw-dialog/subscribegzh'
import alertEmailSubscribe from '@/components/iw-dialog/email-subscribe.vue'
import openNotice from '@/components/iw-dialog/open-notice.vue'
import html5plus from "@/lib/html5plus.js"

export default {
  components: {
    BottomActions,
    PageMore,
    alertSubscribeGZH,
		openNotice,
		alertEmailSubscribe
  },
  data() {
    return {
			showPopup: false,
      pageOption: {},
      list: {},
      date: '',
      dateTime: '',
      dateShow: '',
      activeItem: {},
      activeItemIndex: 0,
      regions: [],
      startAnimationNum: '',
      shareOption: {},
      shareIconMenus: [],
      itemOptionsObj: {},
      AppPush: 0,
      wechat_subscribe: -1, // -1， 未知, 1 yes 0 no
      emailText: '',
      email_subscribe: ''

    }
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
    this.refreshPageData()
		html5plus.checkPermission('NOTIFITION', () => {}, () => {
      this.showPopup = true
    })
  },
  mounted() {
    this.getNotification()
    // #ifdef APP-PLUS
    if (this.pageOption.showShare !== '0') {
      this.clickShare()
    }
    // #endif
  },
  methods: {
		emailChange(email) {
				setHotRecommendEmailStatus(1, email, () => {
					this.isOpenEmailPush = 1
					this.$refs.alertEmailSubscribe.hide()
				}, () => {})
			},
		nowOpens() {
			toSettingSystem('NOTIFITION')
		},
    clickShare() {
      this.$refs.share.share()
      this.shareOption = getHomeDetail(
        '/hotrecommend/' + this.date, // item.link_url,
        'InweHub今日热点推荐:' + this.date
      )
    },
    openApp() {
      window.mui.trigger(document.querySelector('.AppOne'), 'tap')
    },
    appPush() {
      if (!this.AppPush) {
        // #ifndef APP-PLUS
          this.openApp()
          return
        // #endif

        setHotRecommendAppPushStatus(this, true, () => {
          this.AppPush = 1
        }, () => {
          this.AppPush = 0
        })
      }
    },
    subscribeGZH() {
			this.$refs.alertSubscribeGZH.show()
    },
    setEmailSubscribe() {
			this.$refs.alertEmailSubscribe.show()
    },
    getNotification() {
      postRequest(`notification/push/info`, {}, false, {}, 0, false).then(response => {
        var code = response.code
        if (code !== 1000) {
          ui.alert(response.message)
          return
        }
        var res = response.data
        this.AppPush = res.push_daily_subscribe
        this.wechat_subscribe = res.wechat_daily_subscribe
        this.email_subscribe = res.email_daily_subscribe

        if (this.AppPush) {
          needNotifitionPermission(this)
        }
      })
    },
    showItemMore(item) {
      item.feed_type = 16
      item.user = {
        id: 0
      }
      item.feed = {
        is_bookmark: item.is_upvoted,
        submission_id: item.id
      }
      this.shareIconMenus = [] // getIconMenus(item)
      this.itemOptionsObj = item
      this.shareOption = getHomeDetail(
        '/c/' + item.category_id + '/' + item.slug, // item.link_url,
        item.title,
        item.img
      )
      this.shareOption.targetId = item.slug
      this.shareOption.targetType = 'submission'
      this.$refs.share.share()
    },
    iconMenusClickedItem(item) {
      this.itemOptionsObj.feed_type = 16
      this.itemOptionsObj.user = {
        id: 0
      }
      this.itemOptionsObj.feed = {
        is_bookmark: this.itemOptionsObj.is_upvoted,
        submission_id: this.itemOptionsObj.id
      }
      iconMenusClickedItem(this, this.itemOptionsObj, item, () => {})
    },
    shareFail() {

    },
    shareSuccess() {
      this.activeItem.share_number++
      this.startAnimationEvent(3)
    },
    startAnimationEvent(num) {
      this.startAnimationNum = num
      this.activeItem.startAnimation = 1
      this.activeItem.rate += num
      Vue.set(this.list, this.activeListIndex, this.activeItem)

      setTimeout(() => {
        this.activeItem.startAnimation = 0
        Vue.set(this.list, this.activeListIndex, this.activeItem)
      }, 2500)
    },
    addHeat(item, itemIndex) {
      this.activeItem = item
      this.activeItemIndex = itemIndex
      this.$refs.BottomActions.show()
    },
    clickDelete() {
      this.$refs.BottomActions.cancelShare()
      deleteItem(this.activeItem.id, (context) => {
        this.lists.splice(this.activeItemIndex, 1)
      })
    },
    refreshPageData() {
      this.date = this.pageOption.date
      if (this.date) {
        this.dateTime = new Date(this.date.replace(/-/g, '/')).getTime() / 1000

        var day = timeToHumanDay(this.dateTime)
        var dates = this.date.split('-')
        this.dateShow = dates[1] + '月' + dates[2] + '日' + day

        this.getDailyReport()

        getHomeData((data) => {
          this.regions = data.regions
        })
      }
    },
    goArticle: function(detail) {
      if (detail.link_url.indexOf(process.env.H5_ROOT) === 0) {
        openAppUrlByUrl(detail.link_url)
      } else {
        goThirdPartyArticle(
          detail.link_url,
          detail.id,
          detail.title,
          '/c/' + detail.category_id + '/' + detail.slug,
          detail.img
        )
      }
    },
    getDailyReport() {
      postRequest(`dailyReport`, { date: this.date }).then(response => {
        this.list = response.data
      })
    }
  }
}
</script>

<style scoped lang="less">

    .mui-bar-nav {
        .shareIcon {
            position: absolute;
            top: 21.98upx;
            right: 31.96upx;
            font-size: 48upx;
            color: #000000;
        }
    }
    .mui-content {
        background: #6AD2FF;
    }
    .topWrapper {
        position: relative;
        .bagImg {
            width: 100%;
            height: 507.98upx;
            .image {
                width: 100%;
                height: 100%;
            }
        }
        .dateWrapper {
            position: absolute;
            top: 252upx;
            left: 50%;
            transform: translateX(-50%);
            .date {
                height: 31.96upx;
                padding: 0 9.98upx;
                color: #ffffff;
                font-size: 24upx;
                line-height: 31.96upx;
                border-radius: 7.96upx;
                background: #024FDE;
            }
        }

    }

    .domainWrapper {
        padding: 0 15.98upx 15.98upx;
        .contentWrapper {
            padding: 22.50upx 33.98upx 0;
            border-radius: 39.98upx;
            background: #ffffff;
            margin-top: -111.98upx;
            position: relative;
            .newsList {
                padding: 30upx 0;
                .indexNum {
                    font-size: 19.96upx;
                    color: #808080;
                    line-height: 21.98upx;
                    font-family:HelveticaNeue-Medium;
                }
                .middle {
                    display: flex;
                    justify-content: space-between;
                    .left {
                        .title {
                            color: #444444;
                            font-size: 31.96upx;
                            line-height: 45.98upx;
                            word-break: break-word;
                        }
                        .heatWrapper {
                            height: 37.96upx;
                            margin-top: 18upx;
                            width: max-content;
                            padding: 0 49.96upx 0 15.98upx;
                            position: relative;
                            .addOne {
                                height: 42upx;
                                position: absolute;
                                top: -55.96upx;
                                left: 31.96upx;
                                opacity: 0;
                                transition-delay: 1.5s;
                                -moz-transition-delay: 1.5s;
                                -webkit-transition-delay: 1.5s; /* Safari 和 Chrome */
                                -o-transition-delay: 1.5s;
                                animation: addone 0.8s;
                                -moz-animation: addone 0.8s; /* Firefox */
                                -webkit-animation: addone 0.8s; /* Safari and Chrome */
                                -o-animation: addone 0.8s; /* Opera */
                                .i {
                                    width: 0;
                                    height: 0;
                                    border-left: 7.96upx solid transparent;
                                    border-right: 7.96upx solid transparent;
                                    border-top: 7.96upx solid #FA4975;
                                    position: absolute;
                                    top: 39.0upx;
                                    left: 9.76upx;
                                }
                                .span {
                                    width: 45.98upx;
                                    height: 36upx;
                                    line-height: 36upx;
                                    color: #FFFFFF;
                                    font-size: 21.98upx;
                                    text-align: center;
                                    border-radius: 7.96upx;
                                    background: #FA4975;
                                    display: inline-block;
                                }
                            }
                            .span {
                                color: #C8C8C8;
                                font-size: 21.98upx;
                                margin-right: 7.96upx;
                                position: relative;
                                top: -7.0upx;
                                left: 6upx;
                            }
                            .iconfont{
                                position: relative;
                                top: -6upx;
                                &.iconfontFirst {
                                    color: #FA4975;
                                    font-size: 22.50upx;
                                }
                                &.iconfontTwo {
                                    color: #808080;
                                    font-size: 18upx;
                                    top: -2upx;
                                    position: absolute !important;
                                    right: 15.98upx !important;
                                }
                            }
                        }
                        .border-football {
                            &:after {
                                border-radius: 15.98upx;
                                border-color: #DCDCDC;
                            }
                        }
                    }
                    .right {
                        margin-left: 36upx;
                        margin-right: 7.96upx;
                        .articleImg {
                            width: 193.96upx;
                            height: 141.98upx;
                            border-radius: 7.96upx;
                            overflow: hidden;
                            .image {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                    }
                }
            }
        }
        .bottomLine {
            width: 100%;
            margin: 30upx 0 39.98upx;
            border: 0.98upx dashed #DCDCDC;
        }
        .circular {
            width: 30upx;
            height: 30upx;
            border-radius: 50%;
            background: #82d1f8;
            position: absolute;
            bottom: 207.98upx;
            &.leftC {
                left: -15.98upx;
            }
            &.rightC {
                right: -15.98upx;
            }
        }
        .footerMenu {
            display: flex;
            padding: 0 9.98upx 39.98upx;
            justify-content: space-between;
            .left {
                width: 91.96upx;
                text-align: center;
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
                        padding-right: 0;
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
    }

    @keyframes addone
    {
        0% {
            top: -55.96upx;
            opacity: 1;
        }
        50% {
            top: -55.96upx;
            opacity: 5;
        }
        100% {
            top: -90upx;
            opacity: 0;
        }
    }
    @-moz-keyframes addone /* Firefox */
    {
        0% {
            top: -55.96upx;
            opacity: 1;
        }
        50% {
            top: -55.96upx;
            opacity: 5;
        }
        100% {
            top: -90upx;
            opacity: 0;
        }
    }
    @-webkit-keyframes addone /* Safari and Chrome */
    {
        0% {
            top: -55.96upx;
            opacity: 1;
        }
        50% {
            top: -55.96upx;
            opacity: 5;
        }
        100% {
            top: -90upx;
            opacity: 0;
        }
    }
    @-o-keyframes addone /* Opera */
    {
        0% {
            top: -55.96upx;
            opacity: 1;
        }
        50% {
            top: -55.96upx;
            opacity: 5;
        }
        100% {
            top: -90upx;
            opacity: 0;
        }
    }
</style>
