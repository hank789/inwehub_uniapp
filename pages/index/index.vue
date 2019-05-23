<template>
  <view class="content">
    <view class="status_bar">
    </view>
    <view class="container-control-logoAndTabsAndSearch">
      <view class="topSearchWrapper" @tap.stop.prevent="$router.pushPlus('/searchAll','list-detail-page-three')">
        <view class="searchFrame">
          <text class="iconfont icon-sousuo" />
          <text>搜产品、问答、圈子、内容</text>
        </view>
      </view>
      <view class="addIcon" @tap.stop.prevent="toRoute('/pages/discover/addlink')">
        <text class="iconfont icon-tianjia" />
      </view>
    </view>

    <!-- 顶部选项卡 -->
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

    <!-- 下拉刷新组件 -->
    <mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="176" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
      <!-- 内容部分 -->
      <swiper
              id="swiper"
              class="swiper-box"
              :duration="300"
              :current="tabCurrentIndex"
              @change="changeTab"
      >
        <swiper-item v-for="tabItem in tabBars" :key="tabItem.id">
          <scroll-view
                  class="panel-scroll-box"
                  :scroll-y="enableScroll"
                  @scrolltolower="loadMore"
          >
            <!--
							* 新闻列表
							* 和nvue的区别只是需要把uni标签转为weex标签而已
							* class 和 style的绑定限制了一些语法，其他并没有不同
						-->
            <view class="download-tip" :style="{top: downloadTipTop}">{{ downloadTipalertMsg }}</view>

            <view v-for="(item, index) in tabItem.newsList" :key="index" class="news-item" @click="navToDetails(item)">
              <view class="container-wrapper">
                <view class="dateWrapper">
                  <view class="LeftDate">
                    <text class="iconfont icon-rili" />
                    <text class="text">{{ timeToHumanText(item.created_at) }}</text>
                  </view>
                  <view v-if="tabCurrentIndex === 1" class="rightDaily" @tap.stop.prevent="$router.pushPlus('/hotrecommend/' + item.created_at.split(' ')[0])">
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
                    <text class="number">1.</text>
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
                        <view class="heatWrapper border-football" @tap.stop.prevent="addHeat(item, itemIndex, listDataIndex)">
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
                          <image :src="item.img" width="97" :is-lazyload="true" :save-to-local="true" />
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

  </view>
</template>

<script>
  import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh'
  import mixLoadMore from '@/components/mix-load-more/mix-load-more'
  let windowWidth = 0; let scrollTimer = false; let tabBar
  import { getHomeData, getListData } from '@/lib/home'
  import { timeToHumanText, getTimestampByDateStr } from '@/lib/time'
  import { urlencode } from '@/lib/string'

  export default {
    components: {
      mixPulldownRefresh,
      mixLoadMore
    },
    data() {
      return {
        tabCurrentIndex: 0, // 当前选项卡索引
        scrollLeft: 0, // 顶部选项卡左滑距离
        enableScroll: true,
        tabBars: [],
        downloadTipTop: '-100px',
        downloadTipalertMsg: ''
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
    async onLoad() {
      // 获取屏幕宽度
      windowWidth = uni.getSystemInfoSync().windowWidth
      this.loadTabbars()
    },
    onReady() {
    },
    methods: {
      showDownloadTip() {
        this.downloadTipTop = '0px'
      },
      hideDownloadTip() {
        this.downloadTipTop = '-100px'
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
      /**
       * 数据处理方法在vue和nvue中通用，可以直接用mixin混合
       * 这里直接写的
       * mixin使用方法看index.nuve
       */
      // 获取分类
      loadTabbars() {
        getHomeData((data) => {
          data.regions.forEach(item => {
            item.name = item.text
            item.id = item.value
            item.newsList = []
            item.page = 0
            item.loadMoreStatus = 0 // 加载更多 0加载前，1加载中，2没有更多了
            item.refreshing = 0
          })
          this.tabBars = data.regions
          this.loadNewsList('add')
        })
      },
      // 新闻列表
      loadNewsList(type) {
        const tabItem = this.tabBars[this.tabCurrentIndex]

        // type add 加载更多 refresh下拉刷新
        if (type === 'add') {
          if (tabItem.loadMoreStatus === 2) {
            return
          }
          tabItem.loadMoreStatus = 1
        }
        // #ifdef APP-PLUS
        else if (type === 'refresh') {
          tabItem.refreshing = true
        }
        // #endif

        if (type === 'refresh') {
          tabItem.newsList = [] // 刷新前清空数组
          tabItem.page = 0
        } else {
        }

        getListData(tabItem.page + 1, tabItem.value, (res) => {
          tabItem.page += 1
          const list = res.data

          list.forEach(item => {
            tabItem.newsList.push(item)
          })

          if (type === 'refresh') {
            this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh()
            // #ifdef APP-PLUS
            tabItem.refreshing = false
            // #endif

            if (tabItem.page === 1) {
              if (res.alert_msg) {
                this.downloadTipalertMsg = res.alert_msg
                this.showDownloadTip()
              }
              setTimeout(() => {
                this.hideDownloadTip()
              }, 2000)
            }
          }

          tabItem.loadMoreStatus = res.next_page_url ? 0 : 2
        })
      },
      // 新闻详情
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
      },

      // 下拉刷新
      onPulldownReresh() {
        this.loadNewsList('refresh')
      },
      // 上滑加载
      loadMore() {
        this.loadNewsList('add')
      },
      // 设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
      setEnableScroll(enable) {
        if (this.enableScroll !== enable) {
          this.enableScroll = enable
        }
      },

      // tab切换
      async changeTab(e) {
        if (scrollTimer) {
          // 多次切换只执行最后一次
          clearTimeout(scrollTimer)
          scrollTimer = false
        }
        let index = e
        // e=number为点击切换，e=object为swiper滑动切换
        if (typeof e === 'object') {
          index = e.detail.current
        }
        if (typeof tabBar !== 'object') {
          tabBar = await this.getElSize('nav-bar')
        }
        // 计算宽度相关
        const tabBarScrollLeft = tabBar.scrollLeft
        let width = 0
        let nowWidth = 0
        // 获取可滑动总宽度
        for (let i = 0; i <= index; i++) {
          const result = await this.getElSize('tab' + i)
          width += result.width
          if (i === index) {
            nowWidth = result.width
          }
        }
        if (typeof e === 'number') {
          // 点击切换时先切换再滚动tabbar，避免同时切换视觉错位
          this.tabCurrentIndex = index
        }
        // 延迟300ms,等待swiper动画结束再修改tabbar
        scrollTimer = setTimeout(() => {
          if (width - nowWidth / 2 > windowWidth / 2) {
            // 如果当前项越过中心点，将其放在屏幕中心
            this.scrollLeft = width - nowWidth / 2 - windowWidth / 2
          } else {
            this.scrollLeft = 0
          }
          if (typeof e === 'object') {
            this.tabCurrentIndex = index
          }
          this.tabCurrentIndex = index

          // 第一次切换tab，动画结束后需要加载数据
          const tabItem = this.tabBars[this.tabCurrentIndex]
          if (this.tabCurrentIndex !== 0 && tabItem.loaded !== true) {
            this.loadNewsList('add')
            tabItem.loaded = true
          }
        }, 300)
      },
      // 获得元素的size
      getElSize(id) {
        return new Promise((res, rej) => {
          const el = uni.createSelectorQuery().select('#' + id)
          el.fields({
            size: true,
            scrollOffset: true,
            rect: true
          }, (data) => {
            res(data)
          }).exec()
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
    height: 90upx;
    white-space: nowrap;
    box-shadow: 0 2upx 8upx rgba(0,0,0,.06);
    background-color: #fff;
    .nav-item{
      display: inline-block;
      width: 150upx;
      height: 90upx;
      text-align: center;
      line-height: 90upx;
      font-size: 30upx;
      color: #303133;
      position: relative;
      &:after{
        content: '';
        width: 0;
        height: 0;
        border-bottom: 4upx solid #007aff;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        transition: .3s;
      }
    }
    .current{
      color: #007aff;
      &:after{
        width: 50%;
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
      padding: 30px 0;
      border-bottom: 2px solid #000;
    }
  }

</style>

<style scoped lang="less">
  .uni-tab-bar{
    height:100%;
  }
  .uni-tab-bar .swiper-box{
    height:calc(100% - 76px);
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
              i {
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
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
</style>