<template>
        <view class="uni-tab-bar">

            <view class="container-control-logoAndTabsAndSearch">
                <view class="topSearchWrapper" @tap.stop.prevent="$router.pushPlus('/searchAll','list-detail-page-three')">
                    <view class="searchFrame">
                        <text class="iconfont icon-sousuo"></text>
                        <text>搜产品、问答、圈子、内容</text>
                    </view>
                </view>
                <view class="addIcon" @tap.stop.prevent="jumpToDiscoverAdd">
                    <text class="iconfont icon-tianjia"></text>
                </view>
            </view>

            <view class="container-tags-home">
                <view class="container-allTags " :class="tabIndex === 0 ? 'active' : ''"
                      :data-current="0" @click="tapTab">
                    全部<text class="allTagsLine" :class="tabIndex === 0 ? 'activeLine':''"></text>
                </view>

                <scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
                    <view v-for="(tab, index) in tabBarsNoAll" :key="tab.id" class="swiper-tab-list"
                          :class="tabIndex == index + 1 ? 'active' : ''"
                          :id="'tabbaritem_' + index + 1" :data-current="index + 1" @click="tapTab">{{tab.text}}
                      <text class="allTagsLine" :class="tabIndex == index + 1 ? 'activeLine':''"></text>
                    </view>
                </scroll-view>
            </view>

            <swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
                <swiper-item v-for="(listData, listDataIndex) in lists" :key="listDataIndex">
                    <scroll-view class="list" scroll-y @scrolltolower="loadMore(listDataIndex)">

                        <view class='download-tip' :style="{top: downloadTipTop}">{{downloadTipalertMsg}}</view>

                        <block v-for="(item, itemIndex) in listData.data" :key="itemIndex">
                            <view class="container-wrapper">
                                <view class="dateWrapper" v-if="showDate(item, itemIndex, listDataIndex)">
                                    <view class="LeftDate">
                                        <text class="iconfont icon-riliyouse"></text>
                                        <text class="text">{{ timeToHumanText(item.created_at) }}</text>
                                    </view>
                                    <view class="rightDaily"  @tap.stop.prevent="$router.pushPlus('/hotrecommend/' + item.created_at.split(' ')[0])" v-if="tabIndex === 1">
                                        <text class="iconfont icon-fenxiang1"></text>
                                        <text>日报</text>
                                    </view>
                                </view>
                                <view class="container-list">
                                    <view class="pointLine" v-if="tabIndex === 0">
                                        <text class="splitCircle"></text>
                                        <text class="splitLine" v-if="isShowSplitLine(itemIndex, listDataIndex)"></text>
                                    </view>
                                    <view class="pointLine" v-if="tabIndex !== 0">
                                        <text class="number">{{ getLiIndex(itemIndex, listDataIndex) }}.</text>
                                    </view>
                                    <view class="content">
                                        <view class="top-time">
                                            <text class="time">{{ topTime(item) }}</text>
                                            <text class="splitCircle"></text>
                                            <text class="linkURL">{{ item.domain }}</text>
                                        </view>
                                        <view class="middle">
                                            <view class="left">
                                                <view class="title font-family-medium text-line-2">{{ item.title }}</view>
                                                <view class="heatWrapper border-football" @tap.stop.prevent="addHeat(item, itemIndex, listDataIndex)">
                                                    <view class="addOne" v-if="item.startAnimation">
                                                        <text></text>
                                                        <text>+{{startAnimationNum}}</text>
                                                    </view>
                                                    <text class="iconfont icon-huo first"></text>
                                                    <text class="text">{{ item.rate }}</text>
                                                    <text class="iconfont icon-tianjia second"></text>
                                                </view>
                                            </view>
                                            <view class="right" v-if="item.img.length">
                                                <view class="articleImg">
                                                    <image :src="item.img" width="97" :isLazyload="true" :saveToLocal="true"></image>
                                                </view>
                                            </view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </block>
                        <view class="uni-tab-bar-loading">
                            {{listData.loadingText}}
                        </view>
                    </scroll-view>
                </swiper-item>
            </swiper>
        </view>
</template>
<script>

  import {getHomeData, getListData} from '@/lib/home'
  import { timeToHumanText, getTimestampByDateStr } from '@/lib/time'

  export default {
    components: {

    },
    data() {
      return {
        downloadTipalertMsg: '',
        scrollLeft: 0,
        isClickChange: false,
        tabIndex: 0,
        lists: [],
        tabBars: [],
        liIndexConfig: [],
        downloadTipTop: '-100px'
      }
    },
    computed: {
      tabBarsNoAll () {
        return this.tabBars.slice(1)
      }
    },
    onLoad() {
      getHomeData((data) => {
        data.regions.unshift({value:0, text: '全部'})
        this.tabBars = data.regions
        this.lists = this.initLists()
        this.addData(this.tabIndex)
      })
    },
    onPullDownRefresh () {
      let index = this.tabIndex
      getListData(1, this.tabBars[index].value, (res) => {
        this.lists[index].page = 0
        this.lists[index].data = []
        this.downloadTipalertMsg = res.alert_msg || ''
        for (let i = 1; i < res.data.length; i++) {
          this.lists[index].data.push(res.data[i])
        }

        if (this.lists[index].page === 0) {
          if (this.downloadTipalertMsg) {
            this.showDownloadTip()
          }
          setTimeout(() => {
            this.hideDownloadTip()
          }, 2000)
        }
        uni.stopPullDownRefresh()
      })
    },
    methods: {
      topTime (item) {
        return item.created_at.split(' ')[1].substring(0, 5)
      },
      showDownloadTip () {
        this.downloadTipTop = '0px'
      },
      hideDownloadTip () {
        this.downloadTipTop = '-100px'
      },
      resetData(listDataIndex) {
        console.log('reset' + listDataIndex)
      },
      getAllRecommend () {
        this.tabIndex = 0
      },
      timeToHumanText (time) {
        return timeToHumanText(getTimestampByDateStr(time))
      },
      isShowSplitLine (itemIndex, listDataIndex) {
        if (itemIndex >= this.lists[listDataIndex].data.length - 1) {
          return false
        }

        var nextItemIndex = itemIndex + 1
        var isNextDate = this.showDate(this.lists[listDataIndex].data[nextItemIndex], nextItemIndex, listDataIndex)
        if (isNextDate) {
          return false
        }

        return true
      },
      getLiIndex (itemIndex, listDataIndex) {
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
      showDate (item, index, listDataIndex) {
        if (index >= 0) {
          var itemTime = item.created_at.split(' ')[0]
          var time = timeToHumanText(getTimestampByDateStr(itemTime))

          let currentData = time
          let prevData = this.lists[listDataIndex].data[index - 1] && timeToHumanText(getTimestampByDateStr(this.lists[listDataIndex].data[index - 1].created_at.split(' ')[0]))
          return currentData !== prevData
        }
      },
      goDetail(e) {
        uni.navigateTo({
          url: '/pages/template/tabbar/detail/detail?title=' + e.title
        });
      },
      loadMore(e) {
        this.addData(e);
      },
      addData(index) {
        getListData(this.lists[index].page + 1, this.tabBars[index].value, (res) => {
          this.lists[index].page += 1
          for (let i = 1; i < res.data.length; i++) {
            this.lists[index].data.push(res.data[i])
          }
        })
      },
      async changeTab(e) {
        let index = e.target.current;
        if (this.lists[index].data.length === 0) {
          this.addData(index)
        }

        if (this.isClickChange) {
          this.tabIndex = index;
          this.isClickChange = false;
          return;
        }
        let tabBar = await this.getElSize("tab-bar"),
          tabBarScrollLeft = tabBar.scrollLeft;
        let width = 0;

        for (let i = 0; i < index; i++) {
          let result = await this.getElSize('tabbaritem_' + i + 1);
          width += result.width;
        }
        let winWidth = uni.getSystemInfoSync().windowWidth,
          nowElement = await this.getElSize('tabbaritem_' + index + 1),
          nowWidth = nowElement.width;
        if (width + nowWidth - tabBarScrollLeft > winWidth) {
          this.scrollLeft = width + nowWidth - winWidth;
        }
        if (width < tabBarScrollLeft) {
          this.scrollLeft = width;
        }
        this.isClickChange = false;
        this.tabIndex = index
      },
      getElSize(id) {
        return new Promise((res, rej) => {
          uni.createSelectorQuery().select("#" + id).fields({
            size: true,
            scrollOffset: true
          }, (data) => {
            res(data);
          }).exec();
        })
      },
      async tapTab(e) {
        let tabIndex = e.target.dataset.current;
        if (!this.lists[tabIndex] || this.lists[tabIndex].length === 0) {
          this.addData(tabIndex)
        }
        if (this.tabIndex === tabIndex) {
          return false;
        } else {
          let tabBar = await this.getElSize("tab-bar")
          let tabBarScrollLeft = tabBar.scrollLeft;
          this.scrollLeft = tabBarScrollLeft;
          this.isClickChange = true;
          this.tabIndex = tabIndex;
        }
      },
      initLists () {
        let ary = [];
        for (let i = 0, length = this.tabBars.length; i < length; i++) {
          let aryItem = {
            loadingText: '加载更多...',
            page: 0,
            data: []
          };
          ary.push(aryItem);
        }
        return ary;
      }
    }
  }
</script>

<style>
    .container-tags-home{
        position: relative;
    }
    .container-tags-home #tab-bar{
        position: absolute;
        top:0;
        left:50px;
        height:34px;
        line-height: 34px;
        border-bottom:0;
    }
    .container-tags-home .swiper-tab-list{
        color: #808080;
        font-size: 15px;
        position: relative;
    }
    .container-tags-home .active{
        color: #444;
        font-family: PingFangSC-Medium;
    }
    .uni-tab-bar-loading {
        text-align: center;
        font-size: 28 upx;
        color: #999;
    }

    uni-page-body {
        height: 100%;
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
