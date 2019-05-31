<template>
  <view class="content">
    <view class="status_bar" />
    <view class="container-control-logoAndTabsAndSearch">
      <view class="topSearchWrapper" @tap.stop.prevent="toSearch">
        <view class="searchFrame">
          <text class="iconfont icon-sousuo" />
          <text>搜产品、问答、圈子、内容</text>
        </view>
      </view>
      <view class="addIcon" @tap.stop.prevent="toRoute('/pages/discover/addlink')">
        <text class="iconfont icon-tianjia" />
      </view>
    </view>

    <scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft">
      <view
        v-for="(item,index) in tabBars"
        :id="'tab'+index"
        :key="item.id"
        class="nav-item"
        :class="{current: index === tabCurrentIndex}"
        @click="changeTab(index)"
      >{{ item.name }}</view>
    </scroll-view>

    <mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="176" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
      <swiper
        id="swiper"
        class="swiper-box"
        :duration="300"
        :current="tabCurrentIndex"
        @change="changeTab"
      >
        <swiper-item v-for="(tabItem, tabIndex ) in tabBars" :key="tabItem.id">
          <scroll-view
            class="panel-scroll-box"
            :scroll-y="enableScroll"
            @scrolltolower="loadMore"
          >
            <view class="download-tip" :style="{top: downloadTipTop}">{{ downloadTipalertMsg }}</view>

            <view v-if="tabCurrentIndex === 1" class="everyDayWrapper" @tap.stop.prevent="sharHotspot">
              <view class="everyDay">
                <text class="iconfont icon-dingyue-" />
                <view class="textImg">
                  <image mode="aspectFill" class="image" src="../../static/images/everyDay@3x.png" alt="" /></view>
              </view>
            </view>

            <view v-for="(item, index) in tabItem.newsList" :key="index" class="news-item" @click="navToDetails(item)">
              <view class="container-wrapper">
                <view v-if="isShowDate(item, index, tabItem.newsList)" class="dateWrapper" @tap.stop.prevent="toReport(item)">
                  <view class="LeftDate">
                    <text class="iconfont icon-rili" />
                    <text class="text">{{ timeToHumanText(item.created_at) }}</text>
                  </view>
                  <view v-if="tabCurrentIndex === 1" class="rightDaily">
                    <text class="iconfont icon-fenxiang1" />
                    <text>日报</text>
                  </view>
                </view>
                <view class="container-list">
                  <view v-if="tabCurrentIndex === 0" class="pointLine">
                    <text class="splitCircle" />
                    <text class="splitLine" />
                  </view>
                  <view v-if="tabCurrentIndex !== 0" class="pointLine">
                    <text class="number">{{ getLiIndex(index, tabIndex) }}.</text>
                  </view>
                  <view class="content">
                    <view class="top-time">
                      <text class="time">{{ topTime(item) }}</text>
                      <text class="splitCircle" />
                      <text class="linkURL">{{ item.domain }}</text>
                    </view>
                    <view class="middle">
                      <view class="left">
                        <view class="title font-family-medium text-line-2">{{ item.title }}</view>
                        <view class="heatWrapper border-football" @tap.stop.prevent="addHeat(item, index, tabIndex)">
                          <view v-if="item.startAnimation" class="addOne">
                            <text />
                            <text>+{{ startAnimationNum }}</text>
                          </view>
                          <text class="iconfont icon-huo first" />
                          <text class="text">{{ item.rate }}</text>
                          <text class="iconfont icon-tianjia second" />
                        </view>
                      </view>
                      <view v-if="item.img.length" class="right">
                        <view class="articleImg">
                          <image mode="aspectFill" :src="item.img" width="97" :is-lazyload="true" :save-to-local="true" />
                        </view>
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </view>

            <!-- 上滑加载更多组件 -->
            <mix-load-more :status="tabItem.loadMoreStatus" />
          </scroll-view>
        </swiper-item>
      </swiper>
    </mix-pulldown-refresh>

    <BottomActions
      ref="BottomActions"
      v-model="activeItem"
      :regions="regions"
      @clickDelete="clickDelete"
      @startAnimation="startAnimationEvent"
      @showItemMore="showItemMore"
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

  </view>
</template>

<script>
import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh'
import mixLoadMore from '@/components/mix-load-more/mix-load-more'
import { getHomeData, getListData } from '@/lib/home'
import { timeToHumanText, getTimestampByDateStr } from '@/lib/time'
import { urlencode } from '@/lib/string'
import tabsListMixin from '@/lib/tabsListMixin.js'
import BottomActions from '@/components/iw-article-bottomaction/iw-article-bottomaction'
import PageMore from '@/components/iw-page-more/iw-page-more'
import { getHomeDetail } from '@/lib/shareTemplate'

export default {
  components: {
    mixPulldownRefresh,
    mixLoadMore,
    BottomActions,
    PageMore
  },
  mixins: [tabsListMixin],
  data() {
    return {
      activeItem: {},
      activeItemIndex: 0,
      activeListIndex: 0,
      regions: [],
      shareOption: {},
      itemOptionsObj: {},
      liIndexConfig: [],
      shareIconMenus: [
        {
          icon: '#icon-shoucangdilantongyi',
          text: '收藏',
          isBookMark: 0
        },
        {
          icon: '#icon-jubao',
          text: '举报'
        }
      ]
    }
  },
  computed: {
    advertNavUrl() {
      const data = {
        title: '测试跳转新闻详情',
        author: '测试作者',
        time: '2019-04-26 21:21'
      }
      return `/pages/details/details?data=${JSON.stringify(data)}`
    }
  },
  async onLoad(option) {
    this.pageOption = option
    this.windowWidth = uni.getSystemInfoSync().windowWidth
    this.loadTabbars()
  },
  onReady() {
  },
  methods: {
    sharHotspot () {
      // this.$refs.HotBottomActions.show()
    },
    getLiIndex(itemIndex, listDataIndex) {
      if (!this.liIndexConfig[listDataIndex]) {
        this.liIndexConfig[listDataIndex] = 1
      } else {
        this.liIndexConfig[listDataIndex]++
      }

      if (!this.isShowSplitLine(itemIndex - 1, listDataIndex)) {
        this.liIndexConfig[listDataIndex] = 1
      }

      return this.liIndexConfig[listDataIndex]
    },
    isShowSplitLine(itemIndex, listDataIndex) {
      if (itemIndex >= this.tabBars[listDataIndex].newsList.length - 1) {
        return false
      }

      var nextItemIndex = itemIndex + 1
      var isNextDate = this.isShowDate(this.tabBars[listDataIndex].newsList[nextItemIndex], nextItemIndex, this.tabBars[listDataIndex].newsList)
      if (isNextDate) {
        return false
      }

      return true
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
    addHeat(item, itemIndex, listIndex) {
      this.activeItem = item
      this.activeItemIndex = itemIndex
      this.activeListIndex = listIndex
      this.$refs.BottomActions.show()
    },
    startAnimationEvent(num) {

    },
    isShowDate(item, index, list) {
      const itemTime = item.created_at.split(' ')[0]
      const currentData = timeToHumanText(getTimestampByDateStr(itemTime))

      const prevItem = list[index - 1]
      if (!prevItem) return true

      const prevData = timeToHumanText(getTimestampByDateStr(prevItem.created_at.split(' ')[0]))
      return currentData !== prevData
    },
    toSearch() {
      uni.navigateTo({ url: '/pages/search/index' })
    },
    toReport(item) {
      uni.navigateTo({ url: '/pages/report/daily?date=' + item.created_at.split(' ')[0] })
    },
    toRoute(url) {
      uni.navigateTo({ url: url })
    },
    topTime(item) {
      return item.created_at.split(' ')[1].substring(0, 5)
    },
    timeToHumanText(time) {
      return timeToHumanText(getTimestampByDateStr(time))
    },
    loadTabs(successCallback) {
      getHomeData((data) => {
        data.regions.unshift({ value: '', text: '全部' })
        successCallback(data.regions)
      })
    },
    loadListData(tabItem, successCallback) {
      getListData(tabItem.page + 1, tabItem.value, (res) => {
        successCallback(res)
      })
    },
    navToDetails(item) {
      const data = {
        id: item.id,
        title: item.title,
        url: item.link_url,
        img: item.img
      }

      uni.navigateTo({
        url: `/pages/webview/article?data=${urlencode(JSON.stringify(data))}`
      })
    }
  }
}
</script>

<style lang='scss'>

  page, .content{
    background-color: #fff;
    height: 100%;
    overflow: hidden;
  }

  /* 顶部tabbar */
  .nav-bar{
    position: relative;
    z-index: 10;
    height: 68upx;
    white-space: nowrap;
    box-shadow: 0 2upx 8upx rgba(0,0,0,.06);
    background-color: #fff;
    .nav-item{
      display: inline-block;
      width: 94upx;
      height: 68upx;
      text-align: center;
      line-height: 68upx;
      font-size: 30upx;
      color: #808080;
      position: relative;
      &:after{
        content: '';
        width: 31.96upx;
        height: 7.96upx;
        border-radius: 49.96upx;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        transition: .3s;
      }
    }
    .current{
      color: #444;
      font-family: PingFangSC-Medium;
      font-size:30upx;
      &:after{
        background: #03AEF9;
      }
    }
  }

  .swiper-box{
    height: 100%;
  }

  .panel-scroll-box{
    height: 100%;

    .panel-item{
      background: #fff;
      padding: 60upx 0;
      border-bottom: 4upx solid #000;
    }
  }

</style>

<style scoped lang="less">
  .splitCircle {
    display: inline-block;
    position: relative;
    top: -3.98upx;
    border-radius: 50%;
    width: 3.98upx;
    height: 3.98upx;
    background: #B4B4B6;
  }
  .uni-tab-bar{
    height:100%;
  }
  .uni-tab-bar .swiper-box{
    height:calc(100% - 152upx);
  }
  .container-wrapper {
    /*margin-top: 30upx;*/
    .dateWrapper {
      padding: 0 31.96upx;
      height: 42upx;
      display: flex;
      justify-content: space-between;
      line-height: 42upx;
      margin-bottom: 39.98upx;
      margin-top: 19.96upx;
      .iconfont {
        font-size: 30upx;
        color:rgb(3, 174, 249);
        margin-right:10upx;
      }
      text {
        color: #444444;
        font-size: 24upx;
      }
      .rightDaily {
        position: relative;
        z-index: 9999;
      }
    }
    .container-list {
      padding: 0 31.96upx 0 27.98upx;
      position: relative;
      &.container-list-top {
        margin-top: 27.98upx;
      }
      .pointLine {
        display: inline-block;
        position: absolute;
        top: 0;
        .number {
          color: #444444;
          font-size: 21.98upx;
          font-family: HelveticaNeue-Medium;
        }
        .splitCircle {
          width: 7.96upx;
          height: 7.96upx;
          z-index: 100;
          background: #444444;
        }
        .splitLine {
          width: 1.96upx;
          height: 232.50upx;
          display: inline-block;
          background: #DCDCDC;
          position: absolute;
          top: 25.96upx;
          left: 1.96upx;
          -webkit-transform: scaleX(0.5);
          transform: scaleX(0.5);
        }
      }
      .content {
        width: 660upx;
        margin-left: 34.96upx;
        display: inline-block;
      }
      .top-time {
        text {
          color: #B4B4B6;
          font-size: 21.98upx;
          line-height: 21.98upx;
        }
      }
      .middle {
        display: flex;
        justify-content: space-between;
        /*overflow: hidden;*/
        /*height: 141.98upx;*/
        margin-bottom: 39.98upx;
        margin-top: 9.98upx;
        .left {
          /*width: 384upx;*/
          /*display: inline-block;*/
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
                border-left: 6upx solid transparent;
                border-right: 6upx solid transparent;
                border-top: 6upx solid #FA4975;
                position: absolute;
                top: 37.50upx;
                left: 12upx;
              }
              .text {
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
            .text {
              color: #C8C8C8;
              font-size: 21.98upx;
              margin-right: 7.96upx;
              position: relative;
              top: -5upx;
              left: 6upx;
            }
            .iconfont {
              position: relative;
              top: -6upx;
              &.first {
                color: #FA4975;
                font-size: 22.50upx;
              }
              &.second {
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
          /*float: right;*/
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

  .everyDayWrapper {
    padding: 0 31.96upx;
    margin-top: 19.96upx;
    .everyDay {
      height: 87.98upx;
      line-height: 87.98upx;
      text-align: center;
      border-radius: 7.96upx;
      display: flex;
      justify-content: center;
      border: 1.96upx solid #E8E8E8;
      background: #ffffff;
      .iconfont{
        font-size: 27.98upx;
        color: #C8C8C8;
        position: relative;
        top: 27.98upx;
        line-height: 1;
      }
      .textImg {
        width: 199.96upx;
        height: 24.98upx;
        line-height: 87.98upx;
        margin-left: 9.98upx;
        .image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
