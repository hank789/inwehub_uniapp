<template>
    <view>
        <view class="container-control-logoAndTabsAndSearch">
            <view class="topSearchWrapper" @tap.stop.prevent="$router.pushPlus('/searchAll','list-detail-page-three')">
                <view class="searchFrame">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                    <span>搜产品、问答、圈子、内容</span>
                </view>
            </view>
            <view class="addIcon" @tap.stop.prevent="jumpToDiscoverAdd">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tianjia"></use>
                </svg>
            </view>
        </view>

        <view class="container-tags-home container-tags-home-margin" id="container-tags-home-content">
            <view>
                <view class="container-allTags " :class="type === 0 ? 'active' : ''"
                      @tap.stop.prevent="getAllRecommend()">
                    全部<i class="allTagsLine" :class="type === 0 ? 'activeLine':''"></i>
                </view>
                <view class="container-tabLabels">
                    <customSwiper ref="inTags" :options="swiperOption" class="container-upload-images">
                        <customSwiperSlide v-for="(tag, index) in regions" :key="index" class="tagLabel">
                    <span class="tab" :class="type === index+1 ? 'active' : ''"
                          @tap.stop.prevent="selectTag(index + 1)">{{ tag.text }}</span>
                            <i class="" :class="type === index+1 ? 'activeLine' : ''"></i>
                        </customSwiperSlide>
                    </customSwiper>
                </view>
            </view>
        </view>

        <view class="leftTopFixed fixedData">
            <svg class='icon' aria-hidden='true'>
                <use xlink:href='#icon-rili'></use>
            </svg>
            <span class="indexPosition"></span>
        </view>

        <SwiperMescrollList
                ref="RefreshList"
                class="refreshListWrapper"
                :api="'readList'"
                v-if="listDataConfig.length"
                :listDataConfig="listDataConfig"
                :isLoading="loading"
                :initPageIndex="initPageIndex"
                v-model="lists"
                @prevSuccessCallback="prevSuccessCallback"
                @curNavIndexChange="curNavIndexChange"
                @listScroll="listScroll"
        >

            <template v-for="(listData, listDataIndex) in listDataConfig">
                <view :slot="'swiperList-' + listDataIndex">

                    <view class="everyDayWrapper" @tap.stop.prevent="sharHotspot" v-if="type === 1">
                        <view class="everyDay">
                            <svg class='icon' aria-hidden='true'>
                                <use xlink:href='#icon-dingyue-'></use>
                            </svg>
                            <view class="textImg">
                                <img src="@/static/images/everyDay@3x.png" alt="">
                            </view>
                        </view>
                    </view>

                    <view v-for="(item, itemIndex) in lists[listDataIndex]" :key="itemIndex">

                        <view class="container-wrapper" @tap.stop.prevent="goArticle(item)">
                            <view class="dateWrapper" v-if="showData(item, itemIndex, listDataIndex)">
                                <view class="LeftDate">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-riliyouse"></use>
                                    </svg>
                                    <span>{{ timeToHumanText(item.created_at) }}</span>
                                </view>
                                <view class="rightDaily"  @tap.stop.prevent="$router.pushPlus('/hotrecommend/' + item.created_at.split(' ')[0])" v-if="type === 1">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-fenxiang1"></use>
                                    </svg>
                                    <span>日报</span>
                                </view>
                            </view>
                            <view class="container-list">
                                <view class="pointLine" v-if="type === 0">
                                    <span class="splitCircle"></span>
                                    <span class="splitLine" v-if="isShowSplitLine(itemIndex, listDataIndex)"></span>
                                </view>
                                <view class="pointLine" v-if="type !== 0">
                                    <span class="number">{{ getLiIndex(itemIndex, listDataIndex) }}.</span>
                                </view>
                                <view class="content">
                                    <view class="top-time">
                                        <span class="time">{{ item.created_at.split(' ')[1].substring(0, 5) }}</span>
                                        <i class="splitCircle"></i>
                                        <span class="linkURL">{{ item.domain }}</span>
                                    </view>
                                    <view class="middle">
                                        <view class="left">
                                            <view class="title font-family-medium text-line-2">{{ item.title }}</view>
                                            <view class="heatWrapper border-football" @tap.stop.prevent="addHeat(item, itemIndex, listDataIndex)">
                                                <view class="addOne" v-if="item.startAnimation">
                                                    <i></i>
                                                    <span>+{{startAnimationNum}}</span>
                                                </view>
                                                <svg class="icon" aria-hidden="true">
                                                    <use xlink:href="#icon-huo"></use>
                                                </svg>
                                                <span>{{ item.rate }}</span>
                                                <svg class="icon heatAddIcon" aria-hidden="true">
                                                    <use xlink:href="#icon-tianjia"></use>
                                                </svg>
                                            </view>
                                        </view>
                                        <view class="right" v-if="item.img.length">
                                            <view class="articleImg">
                                                <ImageView :src="item.img" width="97" :isLazyload="true" :saveToLocal="true"></ImageView>
                                            </view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </template>
        </SwiperMescrollList>

        <BottomActions
                ref="BottomActions"
                v-model="activeItem"
                :regions="regions"
                @clickDelete="clickDelete"
                @startAnimation="startAnimationEvent"
                style="display: none"
        >
        </BottomActions>

        <HotBottomActions
                ref="HotBottomActions"
                style="display: none"
        >
        </HotBottomActions>

        <PageMore
                style="display: none"
                ref="share"
                :shareOption="shareOption"
                :hideShareBtn="true"
                :iconMenu="shareIconMenus"
                @success="shareSuccess"
                @fail="shareFail"
                @clickedItem="iconMenusClickedItem"
        ></PageMore>

        <Footer></Footer>
    </view>
</template>

<script>
  import {swiper as customSwiper, swiperSlide as customSwiperSlide} from 'vue-awesome-swiper'
  import SwiperMescrollList from '@/components/refresh/SwiperMescrollList.vue'
  import { timeToHumanText, getTimestampByDateStr } from '@/lib/time'
  import { saveLocationInfo, isIos } from '@/lib/allPlatform'
  import userAbility from '@/lib/userAbility'
  import { goThirdPartyArticle } from '@/lib/webview'
  import { openAppUrlByUrl } from '@/lib/plus'
  import BottomActions from '@/components/BottomActions'
  import HotBottomActions from '@/components/HotBottomActions'
  import { deleteItem } from '@/lib/discover'
  import PageMore from '@/components/PageMore.vue'
  import { iconMenusClickedItem } from '@/lib/feed'
  import { getHomeDetail } from '@/lib/shareTemplate'
  import { getIndexByIdArray } from '@/lib/array'
  import Vue from 'vue'
  import { getHomeData } from '@/lib/home'
  import Footer from '@/components/Footer'

  export default {
    data() {
      return {
        loading: true,
        startAnimation: false,
        lists: [],
        regions: [],
        shareOption: {},
        itemOptionsObj: {},
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
        ],
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          freeMode: true
        },
        type: 1,
        initPageIndex: 1,
        isShowAddOne: false,
        activeItem: {},
        activeItemIndex: 0,
        activeListIndex: 0,
        startAnimationNum: '1',
        liIndexConfig: [],
        indexPosition: ''
      }
    },
    components: {
      customSwiper,
      customSwiperSlide,
      SwiperMescrollList,
      BottomActions,
      PageMore,
      HotBottomActions,
      Footer
    },
    onLoad: function (option) {
      getHomeData((data) => {
        console.log(data)
        this.regions = data.regions
      })
    },
    computed: {
      listDataConfig () {
        var rs = this.regions.map(item => {
          return {
            api: 'readList',
            data: {
              tagFilter: item.value
            },
            autoShow: false
          }
        })
        rs.unshift({
          api: 'readList',
          data: {
            tagFilter: ''
          },
          autoShow: false
        })

        if (rs[this.initPageIndex]) {
          rs[this.initPageIndex].autoShow = true
        }

        return rs
      }
    },
    methods: {
      sharHotspot () {
        this.$refs.HotBottomActions.show()
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
      isShowSplitLine (itemIndex, listDataIndex) {
        if (itemIndex >= this.lists[listDataIndex].length - 1) {
          return false
        }

        var nextItemIndex = itemIndex + 1
        var isNextDate = this.showData(this.lists[listDataIndex][nextItemIndex], nextItemIndex, listDataIndex)
        if (isNextDate) {
          return false
        }

        return true
      },
      prevSuccessCallback (data) {
        if (this.type === 1) {
          this.$ls.set('HomeDataList', data)
          this.$refs.HotBottomActions.getNotification()
        }
      },
      startAnimationEvent (num) {
        this.startAnimationNum = num
        var list = this.lists[this.activeListIndex]
        list[this.activeItemIndex].startAnimation = 1
        list[this.activeItemIndex].rate += num
        Vue.set(this.lists, this.activeListIndex, list)

        setTimeout(() => {
          list[this.activeItemIndex].startAnimation = 0
          Vue.set(this.lists, this.activeListIndex, list)
        }, 2500)
      },
      showItemMore (item) {
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
      iconMenusClickedItem (item) {
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
      shareFail () {

      },
      shareSuccess () {
        this.activeItem.share_number++
        this.startAnimationEvent(3)
      },
      clickDelete () {
        this.$refs.BottomActions.cancelShare()
        deleteItem(this.activeItem.id, (context) => {
          var index = getIndexByIdArray(this.lists, this.item.id)
          this.lists.splice(index, 1)
        })
      },
      goArticle: function (detail) {
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
      listScroll (index, y, isUp) {
        var navWarp = document.querySelector('.leftTopFixed')
        if (!navWarp) {
          return
        }
        if (isIos()) {
          if (y < 10) {
            navWarp.classList.remove('leftTopFixedShow')
            navWarp.classList.remove('nav-sticky')
          } else {
            navWarp.classList.add('leftTopFixedShow')
            navWarp.classList.add('nav-sticky')
          }
        } else {
          if (y >= 10) {
            navWarp.classList.add('leftTopFixedShow')
            navWarp.classList.add('nav-fixed')
          } else {
            navWarp.classList.remove('leftTopFixedShow')
            navWarp.classList.remove('nav-fixed')
          }
        }

        var bmpPosition = ''
        var positionValues = this.$refs.RefreshList.positionValues[index]
        if (positionValues && positionValues.length) {
          for (var i = 0; i < positionValues.length; i++) {
            if (positionValues[i].offsetTop <= y) {
              bmpPosition = positionValues[i].text
            }
          }
        }

        document.querySelector('.indexPosition').innerText = bmpPosition
        // this.indexPosition = bmpPosition
      },
      toDetail (item) {
        switch (item.type) {
          case 'link':
          case 'text':
          case 'article':
            this.$router.pushPlus('/c/' + item.category_id + '/' + item.slug)
            break
          default:
        }
      },
      jumpToDiscoverAdd () {
        userAbility.jumpToDiscoverAddLink(this)
      },
      addHeat (item, itemIndex, listIndex) {
        this.activeItem = item
        this.activeItemIndex = itemIndex
        this.activeListIndex = listIndex
        this.$refs.BottomActions.show()
      },
      timeToHumanText (time) {
        return timeToHumanText(getTimestampByDateStr(time))
      },
      showData (item, index, listDataIndex) {
        if (index >= 0) {
          var itemTime = item.created_at.split(' ')[0]
          var time = timeToHumanText(getTimestampByDateStr(itemTime))

          let currentData = time
          let prevData = this.lists[listDataIndex][index - 1] && timeToHumanText(getTimestampByDateStr(this.lists[listDataIndex][index - 1].created_at.split(' ')[0]))
          return currentData !== prevData
        }
      },
      selectTag (index) {
        console.log('indexTAG:' + index)
        this.loading = true
        this.$refs.inTags.swiper.slideTo(index - 1, 1000)
        this.$refs.RefreshList.slideTo(index)
      },
      getAllRecommend () {
        this.type = 0
        this.$refs.RefreshList.slideTo(0)
      },
      curNavIndexChange (index) {
        this.type = index
        this.loading = true
        this.$refs.inTags.swiper.slideTo(index - 1, 1000)
      },
      refreshPageData () {
        var refreshHomeByAddLink = this.$ls.get('refreshHomeByAddLink')
        if (refreshHomeByAddLink && refreshHomeByAddLink.status) {
          this.$ls.remove('refreshHomeByAddLink')
          this.refreshHomeByAddLink()
        } else {
          userAbility.newbieTask(this)
          getHomeData((data) => {
            console.log(data)
            this.regions = data.regions
          })
        }
      },
      refreshHomeByAddLink () {
        // addlink页操作完后刷新首页
        this.getAllRecommend()
        this.$refs.RefreshList.refreshPage(0)
      },
      getRegionIndex (value) {
        for (var i = 0; i < this.regions.length; i++) {
          if (this.regions[i].value === parseInt(value)) {
            return i + 1
          }
        }
        return 0
      }
    }
  }
</script>

<style scoped lang="less">

    .mui-content {
        background: #FFFFFF;}
    .container-control-logoAndTabsAndSearch .topSearchWrapper .searchFrame {
        width: 619.96upx;}
    .tagLabel {
        width: auto !important;}

    .splitCircle {
        display: inline-block;
        position: relative;
        top: -3.98upx;
        border-radius: 50%;
        width: 3.98upx;
        height: 3.98upx;
        background: #B4B4B6;
    }
    .isFiexd {
        position: relative;
        z-index: 999;
        display: none;
        &.showTags {
            display: block;
        }
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
            .icon {
                font-size: 30upx;
            }
            span {
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
                span {
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
                            span {
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
                        span {
                            color: #C8C8C8;
                            font-size: 21.98upx;
                            margin-right: 7.96upx;
                            position: relative;
                            top: -1.96upx;
                            left: -3.98upx;
                        }
                        .icon {
                            position: relative;
                            top: -3.98upx;
                            &:nth-of-type(1) {
                                color: #FA4975;
                                font-size: 22.50upx;
                            }
                            &:nth-of-type(2) {
                                color: #808080;
                                font-size: 18upx;
                                top: 9.98upx;
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

    .refreshListWrapper{
        top: 156upx !important;
        bottom: 50px !important; /* px不转换 */
    }

    .immersed44 .refreshListWrapper{
        bottom: 84px !important; /* px不转换 */
    }

    .nav-sticky {
        z-index: 9999;
        position: -webkit-sticky;
        position: sticky;
        top: 27.98upx;
    }

    .nav-fixed{
        z-index: 99;
        position: absolute;
        top: 156upx !important;
        left: 0;
    }
    .fixedData {
        color: #FFFFFF;
        padding-left: 31.96upx;
        padding-right: 19.96upx;
        background: #03AEF9;
        font-size: 24upx;
        display: none;
        margin-top: 27.98upx;
        border-top-right-radius: 99.98upx;
        border-bottom-right-radius: 99.98upx;
        box-shadow:0upx 9.98upx 19.96upx -3.98upx rgba(205,215,220,1);
        &.centerFiexd {
            height: 57.98upx;
            line-height: 57.98upx;
            left: 50%;
            transform: translateX(-21%);
            border-radius: 99.98upx;
        }
        .icon {
            font-size: 27.98upx;
            position: relative;
            top: 0.98upx;
            color: #CCF2FF;
        }
        .upLine {
            width: 1.96upx;
            height: 24upx;
            background: #67CEFB;
            display: inline-block;
            position: relative;
            top: 3.98upx;
            margin: 0 30upx;
        }
        .subscribeText {
            font-size: 24upx;
            margin-left: 114upx;
            .icon {
                font-size: 27.98upx;
                margin-right: 9.98upx;
            }
        }
        .shareText {
            font-size: 24upx;
            .icon {
                font-size: 30upx;
                margin-right: 9.98upx;
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
            .icon {
                font-size: 27.98upx;
                color: #C8C8C8;
                position: relative;
                top: 27.98upx;
            }
            .textImg {
                width: 199.96upx;
                height: 24.98upx;
                line-height: 87.98upx;
                margin-left: 9.98upx;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .leftTopFixedShow{
        display: inline-block !important;
    }
    .mui-ios {
        .heatWrapper {
            .icon {
                top: -6upx !important;
                &.heatAddIcon {
                    top: 11.26upx !important;
                }
            }
            span {
                top: -3.76upx !important;
            }
        }
    }
    .mui-android {
        .heatWrapper {
            .icon {
                &.heatAddIcon {
                    top: 12upx !important;
                }
            }
        }
    }
    .hideData {
        display: none !important;
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
