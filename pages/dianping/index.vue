<template>
  <view class="content">
    <!-- #ifdef APP-PLUS -->
    <view class="status_bar" />
    <!-- #endif -->
    <view class="mui-content">
      <view class="container-control-logoAndTabsAndSearch">
        <text class="iconfont icon-logowenzi logoIcon " />
        <view class="span splitCircle" />
        <view class="logoAndTabsAndSearchTabs">
          <view class="tab active">点评</view>
        </view>
        <text class="iconfont icon-sousuo searchIcon " @tap.stop.prevent="toRoute('/pages/search/index')" />
      </view>

      <view class="line-river-after line-river-after-top marginTop" />

      <view class="main-content">
        <view class="topTitle font-family-medium">热门专题</view>
        <view class="heatAlbum">

          <view v-for="(item, indexAlbum) in hotAlbum" :key="indexAlbum"
          class="albumList"
          @tap.stop.prevent="toRoute('/pages/dianping/products?id=' + item.id +
          '&name=' + encodeURIComponent(item.name))">
            <view class="componentCarAlbum">
              <view class="albumName font-family-medium">{{ item.name }}</view>
              <view class="tags"><label>{{ item.tips }}</label></view>
              <view v-if="indexAlbum === 0" class="backgroundBig">
                <image mode="aspectFill" class="image" src="../../static/images/remen_zhunti_big1@3x.png" /></view>
              <view v-else class="backgroundSmall">
                <image mode="aspectFill" class="image" src="../../static/images/remen_zhunti_small2@3x.png" style="width: 100%;" /></view>
            </view>
          </view>

        </view>

        <view class="topTitle font-family-medium">热门产品</view>
        <view class="heatProduct">

          <view v-for="(item, index) in hotProductList" :key="index" class="productList" @tap.stop.prevent="toProductDetail(item)">
            <view class="componentCarProduct">
              <view class="topInfo">
                <view class="left">
                  <view class="logo">
                    <image mode="aspectFit" class="image" :src="item.logo | imageSuffix(42, 42)" /></view>
                  <view class="nameMark">
                    <view class="title font-family-medium text-line-1">{{ item.name }}</view>
                    <view class="stars">
                      <StarView :rating="item.review_average_rate" />
                      <view class="span span">{{ item.review_average_rate }}分</view>
                    </view>
                  </view>
                </view>
                <view class="right">
                  <view class="heatICon">
                    <image mode="aspectFit" class="image" src="../../static/images/zhuanti_fill@3x.png" /></view>
                  <view class="textNumber">{{ item.support_rate }}</view>
                </view>
              </view>
              <view class="bottom">
                <view class="describe text-line-2">{{ item.summary }}</view>
              </view>
            </view>
          </view>

        </view>

        <view class="topTitle font-family-medium">更多专题</view>
        <view class="specialWrapper">

          <scroll-view class="moreAlbum" scroll-x="true">
            <template v-for="(item, index) in albumList">
              <view class="display">
                <view v-for="(itemList, itemIndex) in item" :key="itemIndex">
                  <view v-if="itemList.type === 'product_album'" class="specialList" @tap.stop.prevent="toProductList(itemList)">
                    <view class="mask" />
                    <view class="img"><image mode="aspectFill" class="image" :src="itemList.icon | imageSuffix(166, 79)" /></view>
                    <view class="text font-family-medium">{{ itemList.name }}</view>
                  </view>
                  <view v-if="itemList.type === 'lastElement'" class="expectWrapper specialList" @tap.stop.prevent="showExpect">
                    <view class="content">
                      <text class="iconfont icon-tianjia iconfont " />
                      <view class="span expectText">我期待</view>
                    </view>
                  </view>
                </view>
              </view>

            </template>
          </scroll-view>
        </view>
      </view>

    </view>

    <iwLoading v-model="loading"></iwLoading>

  </view>
</template>

<script>
import { getRecommandProductList, getCategories, getHotProduct, gethotAlbum, getAlbumList, submitFeedback } from '@/lib/dianping'
import StarView from '@/components/iw-star/iw-star'
import localEvent from '@/lib/localstorage'
import iwLoading from '@/components/iw-loading/iw-loading'

export default {
  components: {
    StarView,
    iwLoading
  },
  data() {
    return {
      loading: true,
      pageOption: {},
      categories: [],
      list: [],
      hotProductList: [],
      hotAlbum: [],
      albumList: [],
      recommandProductList: [],
      orderBy: 1,
      category: {
        id: ''
      },
      sortOrderByName: '排序',
      swiperOption: {
        loop: false,
        effect: 'cubeEffect',
        centeredSlides: false,
        slidesPerView: 'auto',
        spaceBetween: 0,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 60,
          modifier: 2,
          slideShadows: false
        },
        pagination: {
          el: 'null'
        }
      },
      iconOptions: []
    }
  },
  computed: {
    prevOtherData() {
      return { category_id: this.category.id, orderBy: this.orderBy }
    },
    nextOtherData() {
      return { category_id: this.category.id, orderBy: this.orderBy }
    }
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
    this.refreshPageData()
  },
  mounted() {},
  methods: {
    toProductList (itemList) {
      this.toRoute('/pages/dianping/products?id=' + itemList.id + '&name=' + encodeURIComponent(itemList.name))
    },
    toProductDetail (item) {
      this.toRoute('/pages/dianping/product?name=' + encodeURIComponent(item.name))
    },
    toRoute(url) {
      uni.navigateTo({ url: url })
    },
    showExpect() {
      alertExpect(this, (num, text) => {
        if (num === 0) {
          submitFeedback(this, text, (res) => {
          })
        }
      })
    },
    goGroups() {
      window.mui('#dropDownMenuWrapper').popover('toggle')
      uni.redirectTo('/groups')
    },
    goAskOffers() {
      window.mui('#dropDownMenuWrapper').popover('toggle')
      uni.redirectTo('/ask/offers')
    },
    selectedItem(item) {
      this.$refs.itemOptions.toggle()
      switch (item.text) {
        case '评分':
          this.orderBy = 1
          this.sortOrderByName = '评分'
          break
        case '热度':
          this.orderBy = 2
          this.sortOrderByName = '热度'
          break
        case '我是企业，需要产品服务':
          this.goCustomer()
          break
        case '我有产品，需要入驻展示':
          uni.navigateTo('/dianping/product/add')
          break
      }
    },
    selectSort() {
      this.iconOptions = []
      this.iconOptions.push(
        {
          text: '评分'
        },
        {
          text: '热度'
        }
      )
      this.$refs.itemOptions.toggle()
    },
    cooperation() {
      this.iconOptions = []
      this.iconOptions.push(
        {
          text: '我有产品，需要入驻展示'
        }
      )
      this.$refs.itemOptions.toggle()
    },
    goCustomer() {
      var information = ''

      localEvent.set('needRefresh', { value: true })
      information = '我是产品服务方，需要合作入驻'

      localEvent.set('information', information)

      uni.navigateTo('/chat/79')
    },
    showDropdownMenu() {
      // var searchInputHeight = document.querySelector('#searchWrapper').clientHeight
      var height = document.querySelector('.dianpingBanners').clientHeight - 20
      this.$refs.RefreshList.scrollTo(0, height)
      this.$refs.dropdownMenu.show()
    },
    timeago(time) {
      const newDate = new Date()
      newDate.setTime(Date.parse(time.replace(/-/g, '/')))
      return newDate
    },
    refreshPageData() {
      getRecommandProductList(this, 5, (recommandProductList) => {
        this.recommandProductList = recommandProductList
        this.loading = false
      })

      getCategories(this, (categories) => {
        this.categories = categories
      })

      getHotProduct(this, 3, (hotProductList) => {
        this.hotProductList = hotProductList
      })

      gethotAlbum(this, (hotAlbum) => {
        this.hotAlbum = hotAlbum
      })

      getAlbumList(this, 100, (res) => {
        const listArry = res.data

        listArry.push({
          type: 'lastElement'
        })

        const len = listArry.length
        const n = 5 // 假设每行显示5个
        const lineNum = len % 5 === 0 ? len / 5 : Math.ceil(len / 5)
        const resD = []
        for (let i = 0; i < lineNum; i++) {
          const temp = listArry.slice(i * n, i * n + n)
          resD.push(temp)
        }
        this.albumList = resD
      })
    }
  }
}
</script>

<style scoped lang="less">
  page, .content{
    background-color: #fff;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  /*  #ifdef APP-PLUS */
  .mui-content{
    top: var(--status-bar-height);
  }
  /* #endif */
  .mui-content {
    background: #fff !important;
  }
  .moreAlbum {
    .swiper-slide {
      margin-right: 0 !important;
      width: auto !important;
    }
  }
  .main-content {
    position: absolute;
    left:0;
    top: 87.98upx;
    bottom: 0;
    width:100%;
    overflow-y: scroll;
  }

  .moreAlbum .swiper-wrapper .swiper-slide:last-child .display {
    margin-right: 19.96upx !important;
  }

  .topTitle {
    color: #3C3E44;
    font-size: 39.98upx;
    padding: 36upx 31.96upx 0;
  }
  .heatAlbum {
    padding: 0 31.96upx;
    margin-top: 25.96upx;
    margin-bottom: 24upx;
  }

  .albumList {
    display: inline-block;
    vertical-align: top;
    &:nth-of-type(1) {
      .componentCarAlbum {
        width: 456upx;
        .tags {
          label {
            color: #ffffff;
            background:linear-gradient(90deg,rgba(253,128,173,1) 0%,rgba(250,73,117,1) 100%);
          }
        }
      }
    }
    &:nth-of-type(2) {
      .componentCarAlbum {
        margin-right: 0;
      }
    }
    &:last-child {
      .componentCarAlbum {
        margin-right: 0;
      }
    }
    .componentCarAlbum {
      width: 225.98upx;
      height: 304.96upx;
      position: relative;
      border-radius: 7.96upx;
      margin: 1.96upx 3.98upx 0 0;
      overflow:hidden;
      background: linear-gradient(39deg, rgba(60, 87, 119, 1) 0%, rgba(28, 44, 66, 1) 100%);
      .albumName {
        position: relative;
        z-index: 1;
        color: #FFFFFF;
        font-size: 27.98upx;
        padding: 39.98upx 30upx 0;
        line-height: 43.96upx;
      }
      .tags {
        position: absolute;
        z-index: 1;
        left: 30upx;
        bottom: 39.98upx;
        label {
          height: 31.96upx;
          color: #1C2C42;
          font-size: 19.96upx;
          line-height: 33.0upx;
          padding: 0 9.98upx;
          display: inline-block;
          border-radius: 0upx 7.96upx 0upx 7.96upx;
          background: linear-gradient(45deg, rgba(83, 223, 221, 1) 0%, rgba(41, 188, 184, 1) 100%);
        }
      }
      .backgroundSmall {
        position: absolute;
        top: 0;
        left: 0;
        width: 225.98upx;
        height: 304.96upx;

      }
      .backgroundBig {
        position: absolute;
        top: 0;
        left: 0;
        width: 456upx;
        height: 304.96upx;

      }
    }
  }

  .albumList .componentCarAlbum .backgroundSmall img,
  .albumList .componentCarAlbum .backgroundBig .image {
    width: 100%;
    height: 100%;
  }
  .heatProduct {
    margin-top: 30upx;
    margin-bottom: 24upx;
  }
  .productList {
    margin-top: 19.96upx;
    padding: 0 31.96upx;
  }
  .componentCarProduct {
    padding: 30upx;
    background: #FFFFFF;
    border-radius: 7.96upx;
    box-shadow: 0upx 0upx 51.98upx 0upx rgba(232, 241, 241, 1);

    .topInfo {
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;
        .nameMark {
          .title {
            width: 408upx;
            color: #3C3E44;
            font-size: 31.96upx;
            line-height: 45.0upx;
            margin-bottom: 13.96upx;
          }
          .stars {
            display: flex;
            margin-top: -9.98upx;
            .span {
              font-size: 21.98upx;
              line-height: 30upx;
              margin-left: 6upx;
              margin-top: 7.96upx;
              display: inline-block;
            }
          }
        }
        .logo {
          width: 87.98upx;
          height: 87.98upx;
          margin-right: 19.96upx;
          overflow: hidden;
          border-radius: 7.96upx;
          border: 0.98upx solid #ECECEE;
          .image {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }

      .right {
        display: flex;
        .heatICon {
          width: 18upx;
          height: 22.96upx;
          margin-right: 7.96upx;
          .image {
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
        }
        .textNumber {
          color: #3C3E44;
          font-size: 24upx;
          line-height: 28.96upx;
          margin-top: 1.96upx;
        }
      }
    }

    .bottom {
      .describe {
        color: #808080;
        font-size: 27.98upx;
        line-height: 45.0upx;
        margin-top: 19.96upx;
      }
    }
  }

  .specialWrapper {
    width: 100%;
    height: 892.96upx;
    padding: 0upx 20upx 0 0upx;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 60upx;
    .specialList {
      position: relative;
      margin: 19.96upx 0upx 0 0;

      .img {
        width: 333.0upx;
        height: 159.0upx;
        border-radius: 7.96upx;
        .image {
          height: 100%;
          width: 100%;
          border-radius: 7.96upx;
        }
      }
      .text {
        font-size: 25.96upx;
        color: #FFFFFF;
        position: absolute;
        bottom: 30upx;
        left: 30upx;
        white-space: normal;
        padding-right: 30upx;
      }
      .mask {
        width: 333.0upx;
        height: 159.0upx;
        background: linear-gradient(180deg, rgba(28, 44, 66, 0) 0%, rgba(28, 44, 66, 1) 100%);
        position: absolute;
        top: 0;
        left: 0;
        z-index:7;
        border-radius: 7.96upx;
      }
    }
  }

  .display {
    display: inline-block;
    vertical-align: top;
    margin-left: 19.96upx;
  }

  .marginR {
    margin-right: 39.98upx;
  }

  .expectWrapper {
    width: 333.0upx;
    height: 156upx;

    .content {
      height: 100%;
      line-height: 156upx;
      border-radius: 7.96upx;
      border: 0.98upx solid #DCDCDC;

      .iconfont {
        font-size: 25.96upx;
        color: #3C3E44;
        margin-left: 30upx;
        margin-right: 6.98upx;
      }

      .expectText {
        color: #808080;
        font-size: 25.96upx;
      }
    }
  }
</style>

<style>
  .dianpingBanners .swiper-pagination-bullet {
    width: 5px; /* px不转换 */
    height: 5px; /* px不转换 */
    margin: 0 2px !important; /* px不转换 */
    background: #D8D8D8;
    opacity: 1;
  }

  .dianpingBanners .swiper-pagination-bullets .swiper-pagination-bullet-active {
    background: #03AEF9;
    width: 7.5px; /* px不转换 */
    border-radius: 100px !important; /* px不转换 */
  }
</style>
