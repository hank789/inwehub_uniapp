<template>
  <view>
    <view class="mui-content searchSubmission">
      <!-- #ifndef APP-PLUS -->
      <view class="search">
        <view class="p border-football pFirst">
          <text class="iconfont icon-sousuo iconfontFirst" />
          <input v-model.trim="searchText" type="text" placeholder="搜产品、内容" class="input input input" @keydown.enter="enterKeyCode($event)" @focus="focus">
          <text class="iconfont icon-times1 iconfontSecond" @tap.stop.prevent="empty()" v-if="isShowCancelButton"/>
        </view>
        <view class="p pSecond font-family-medium" @tap.stop.prevent="back()">取消</view>
      </view>
      <!-- #endif -->
      <view v-if="list.length || getCurrentMode === 'result' && searchText !== ''" class="menu">

        <view class="span" @tap.stop.prevent="redirectTo('/pages/search/index?text=' + searchText)">综合</view>
        <view class="span" @tap.stop.prevent="redirectTo('/pages/search/discover?text=' + searchText)">分享</view>
        <view class="span spanSecond font-family-medium">产品<view class="i" /></view>
        <view class="span" @tap.stop.prevent="toSearchDianping">点评</view>

        <view class="i bot" />
      </view>

      <view v-if="getCurrentMode === 'history'" class="hotSearch">
        <view class="hotSearchText">
          <text class="iconfont icon-huo " />
          <view class="span font-family-medium">热搜</view>
        </view>
        <view class="hotSearchList">
          <view v-for="(item, index) in hotSearchHistory.top" :key="index" class="span" @tap.stop.prevent="selectConfirmSearchText(item)">{{ item }}</view>
        </view>
        <view class="hotSearchText history">
          <view class="span font-family-medium">历史</view>
        </view>
        <view class="hotSearchList">
          <view v-for="(item, index) in hotSearchHistory.history" :key="index" class="span" @tap.stop.prevent="selectConfirmSearchText(item)">{{ item }}</view>
        </view>
      </view>

      <view v-if="getCurrentMode === 'match'" class="searchList">
        <view class="item listOne" @tap.stop.prevent="selectConfirmSearchText(searchText)">
          查看“{{ searchText }}”的搜索结果
          <view class="i bot" />
        </view>
      </view>

      <view v-if="getCurrentMode === 'match'" class="searchList">
        <view v-for="(item, index) in searchAdviceList" :key="index" class="item" @tap.stop.prevent="selectConfirmSearchText(item)">
          {{ item }}
          <view class="i bot" />
        </view>
      </view>

      <RefreshList
        v-if="getCurrentMode === 'result'"
        ref="refreshlist"
        v-model="list"
        :api="'search/tagProduct'"
        :request-data="dataList"
        class="listWrapper"
      >

        <view class="productList">
          <view v-for="(item, index) in list" :key="index" class="comment-product">
            <view class="product-info" @tap.stop.prevent="toProduct(item)">
              <view class="product-img border-football">
                <image mode="aspectFill" class="image" :src="item.logo" width="44" height="44" />
                <!--<image mode="aspectFill" class='image' src="../../static/images/uicon.jpg" alt="">-->
              </view>
              <view class="product-detail">
                <view class="productName font-family-medium text-line-1" v-html="getHighlight(item.name)" />
                <view class="productMark">
                  <view class="stars">
                    <StarView :rating="item.review_average_rate" />
                  </view>
                  <view class="starsText">
                    <view class="span">{{ item.review_average_rate }}分</view>
                    <view class="i" /><view class="span">{{ item.review_count }}条评论</view>
                  </view>
                </view>
              </view>
            </view>
            <view class="line-river-after line-river-after-top" />
          </view>
          <!--<view v-if="list.length" class="container-noMore noResultText">暂无结果，您可<view class="span" @tap.stop.prevent="cooperation">提交产品，开展合作</view></view>-->
        </view>

        <view v-if="getCurrentMode === 'result' && !list.length && !resultLoading" class="noResult increase dianping-search">
          <view class="empty-Img">
            <image mode="aspectFill" class="image" src="../../static/images/empty@3x.png" />
          </view>
          <!--<view class="noResultText">暂无结果，您可 <view class="span" @tap.stop.prevent="cooperation">提交产品，开展合作</view></view>-->
        </view>

      </RefreshList>

    </view>

    <Options
      :id="'itemOptions'"
      ref="itemOptions"
      :options="iconOptions"
      @selectedItem="selectedItem"
    />

  </view>
</template>

<script>
import RefreshList from '@/components/iw-list/iw-list'
import StarView from '@/components/iw-star/iw-star'
import { postRequest } from '@/lib/request'
import { searchText as searchTextFilter } from '@/lib/search'
import { autoBlur } from '@/lib/dom'
import Options from '@/components/iw-popup-options/iw-popup-options'
import { setNavbarSearchInputText } from '@/lib/allPlatform'

export default {
  components: {
    RefreshList,
    StarView,
    Options
  },
  data() {
    return {
      pageOption: {},
      searchText: '',
      isShowCancelButton: false,
      confirmSearchText: '',
      list: [],
      resultLoading: 1,
      searchAdviceList: [],
      hotSearchHistory: {
        history: [],
        top: []
      },
      iconOptions: []
    }
  },
	onNavigationBarButtonTap(e) {
		uni.navigateBack({
			animationType: 'none'
		})
	},
  computed: {
    dataList() {
      return { search_word: this.confirmSearchText }
    },
    getCurrentMode() {
      if (this.searchText === '') {
        return 'history'
      }

      if (this.searchText !== this.confirmSearchText) {
        return 'match'
      }

      setTimeout(() => {
        autoBlur()
      }, 100)

      return 'result'
    }
  },
  watch: {
    searchText: function(newValue, oldValue) {
      searchTextFilter(newValue, (text) => {
        if (newValue) {
          this.isShowCancelButton = true
          this.searchAdvice(newValue)

          if (newValue !== this.confirmSearchText) {
            this.list = []
          }
        }
      })
    }
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
    this.refreshPageData()
  },
  onNavigationBarSearchInputChanged(e) {
    this.searchText = e.text
  },
  onNavigationBarSearchInputConfirmed(e) {
    this.searchText = e.text
  },
  methods: {
    toSearchDianping () {
      this.redirectTo('/pages/search/comment?text=' + this.searchText)
    },
    toProduct (item) {
      this.redirectTo('/pages/dianping/product?name=' + encodeURIComponent(item.name))
    },
    to(url) {
      uni.navigateTo({ url: url })
    },
    redirectTo(url) {
      uni.redirectTo({ url: url })
    },
    cooperation() {
      this.iconOptions = []
      this.iconOptions.push(
        {
          text: '我有产品，需要入驻展示'
        }
      )
      // todo 跳转到产品添加页
    },
    selectedItem(item) {
      this.$refs.itemOptions.toggle()
      switch (item.text) {
        case '我是企业，需要产品服务':
          this.goCustomer()
          break
        case '我有产品，需要入驻展示':
          uni.navigateTo('/dianping/product/add')
          break
      }
    },
    empty() {
      this.searchText = ''
    },
    focus: function() {
      this.confirmSearchText = ''
      this.list = []
      if (this.searchText) {
        this.searchAdvice(this.searchText)
      }
    },
    hotSearch() {
      postRequest(`search/topInfo`, {}).then(response => {
        var code = response.code
        if (code !== 1000) {
          ui.alert(response.message)
          return
        }
        this.hotSearchHistory = response.data
      })
    },
    searchAdvice(searchText) {
      postRequest(`search/suggest`, {
        search_word: searchText
      }).then(response => {
        var code = response.code
        if (code !== 1000) {
          ui.alert(response.message)
          return
        }
        this.searchAdviceList = response.data.suggest
      })
    },
    back() {
      this.empty()
      uni.navigateBack()
      return
    },
    prevSuccessCallback() {
      this.resultLoading = 0
    },
    refreshPageData: function() {
      var text = this.pageOption.text
      if (text) {
        this.searchText = text
        this.selectConfirmSearchText(text)
      }
      this.hotSearch()
    },
    enterKeyCode: function(ev) {
      if (ev.keyCode === 13) {
        this.selectConfirmSearchText(this.searchText)
      }
    },
    selectConfirmSearchText(text) {
      this.searchText = text
      setNavbarSearchInputText(this, text)
      if (text) {
        this.resultLoading = 1
        this.confirmSearchText = text
      }
      this.searchAdviceList = []
    },
    // 文字高亮
    getHighlight(content) {
      var reg = new RegExp('(' + this.searchText + ')', 'gi') // 正则验证匹配
      var newstr = content.replace(reg, '<view class=\'span\'  style="color: #03aef9">$1</view>') // 动态添加颜色
      return newstr
    }
  }
}

</script>

<style scoped lang="less">
    .mui-android .mui-content .menu .bot {
        height: 1.96upx;
    }
    .bot {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 2upx;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: rgb(220, 220, 220);
    }
    .mui-content{
        background: #ffffff;
    }

    .search{
        position: relative;
        width:100%;
        padding: 0 31.96upx;
        display: flex;
        height:87.98upx;
        margin-top: 9.98upx;
        flex-direction: row;
        align-items: center;
        background: #ffffff;
        justify-content: space-between;
        .border-football {
            &:after {
                height: 132.76upx;
            }
        }
        .p {
            &.pFirst{
                width: 585.98upx;
                height:67.96upx;
                border-radius: 99.98upx;
                background: #f3f4f6;
                /*border:1.96upx solid #dcdcdc;*/
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 0 19.96upx;
                .iconfont{
                    color: #c8c8c8;
                    &.iconfontFirst{
                        font-size: 36upx;
                        margin-top: 3.98upx;
                    }
                    &.iconfontSecond{
                        margin-left: 19.96upx;
                        font-size: 39.98upx;
                        position: relative;
                        z-index: 100;
                    }
                }
                .input {
                    width: 451.96upx !important;
                    height:63.98upx;
                    border: none;
                    background: #f3f4f6;
                    font-size: 27.98upx;
                    color: #444444;
                    position: absolute;
                    left: 63.98upx;
                    z-index: 100;
                    padding: 0 19.96upx;
                }
            }
            &.pSecond{
                width: 79.96upx;
                font-size: 30upx;
                color: #03aef9;
                text-align: right;
                line-height: 42upx;
            }
        }
    }
    /*导航栏的样式*/
    .menu{
        width:100%;
        height:78upx;
        background: #ffffff;
        font-size:27.98upx;
        color: #444444;
        display: flex;
        flex-direction: row;
        position: relative;
        z-index:7;
        margin-top: -7.96upx;
        .span {
            display: flex;
            width: 13.5%;
            height:100%;
            justify-content: center;
            align-items: center;
            &.spanSecond{
                font-size: 27.98upx;
                position:relative;
                color: #444444;
                .i {
                    position:absolute;
                    width:54upx;
                    height:3.98upx;
                    border-radius: 99.98upx;
                    background:#03aef9;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                }
            }
        }
    }

    .comment-product {
        padding: 25.96upx 30upx 0;
        .product-info {
            overflow: hidden;
            border-radius: 7.96upx;
            padding: 0 0 30upx;
            background: none;
            .product-img {
                width: 87.98upx;
                height: 87.98upx;
                float: left;
                .image {
                    width: 100%;
                    height: 100%;
                    border-radius: 7.96upx;
                    object-fit: contain;
                }
            }
            .product-detail {
                float: left;
                margin-left: 19.96upx;
                .productName {
                    width: 567.98upx;
                    color: #444444;
                    font-size: 31.96upx;
                    line-height: 45.0upx;
                }
                .productMark {
                    display: flex;
                    .iconfont{
                        color: #FCC816;
                        font-size: 24upx;
                    }
                    .span {
                        color: #B4B4B6;
                        font-size: 21.98upx;
                        line-height: 30upx;
                        &:nth-of-type(1) {
                            color: #FCC816;
                            margin-left: 6upx;
                        }
                    }
                    .i {
                        width: 3.98upx;
                        height: 3.98upx;
                        margin-right: 9.98upx;
                        vertical-align: middle;
                        border-radius: 50%;
                        background: #B4B4B6;
                        display: inline-block;
                    }
                    .stars {
                        display: flex;
                    }
                    .starsText {
                    }
                }
            }
        }
    }

    .noResultText {
        .span {
            color: #03AEF9;
            font-size:inherit;
        }
    }


    .hotSearch {
        padding: 24upx 31.96upx;
        .history {
            margin-top: 12upx;
        }
        .hotSearchText {
            padding-bottom: 24upx;
            .span {
                color: #444444;
                font-size: 31.96upx;
                line-height: 43.96upx;
            }
            .iconfont{
                color: #FA4975;
            }
        }
        .hotSearchList {
            .span {
                height: 54upx;
                line-height: 54upx;
                color: #444444;
                font-size: 24upx;
                padding: 0upx 19.96upx;
                background: #F3F4F6;
                border-radius: 199.96upx;
                margin: 0 9.98upx 19.96upx 0;
                display: inline-block;
            }
        }
    }

    /*搜索建议*/
    .searchList {
        padding: 0 31.96upx;
        position: relative;
        z-index: 1000;
        .item {
            color: #808080;
            font-size: 30upx;
            padding: 24upx 0;
            line-height: 43.96upx;
            position: relative;
        }
        .listOne {
            color: #03AEF9;
        }
    }

    .increase {
        position: relative;
        z-index: 1000;
        top: 447.98upx;
    }
</style>
