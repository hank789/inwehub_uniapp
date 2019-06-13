<template>
  <view>
    <view class="mui-content searchSubmission">

        <view class="search">
            <view class="p border-football pFirst">
                <text class="iconfont icon-sousuo iconfontFirst" />
                <input v-model.trim="searchText" type="text" placeholder="搜产品、问答、圈子、内容" class="input input input" @keydown.enter="enterKeyCode($event)" @focus="focus">
                <text class="iconfont icon-times1 iconfontSecond" @tap.stop.prevent="empty()" v-if="isShowCancelButton"/>
            </view>
            <view class="p pSecond font-family-medium" @tap.stop.prevent="back()">取消</view>
        </view>
        <view v-if="list.length || getCurrentMode === 'result' && searchText !== ''" class="menu">

            <view class="span" @tap.stop.prevent="to('/pages/search/index?text=' + searchText)">综合</view>
            <view class="span" @tap.stop.prevent="to('/pages/search/discover?text=' + searchText)">分享<view class="i" /></view>
            <view class="span" @tap.stop.prevent="to('/pages/search/product?text=' + searchText)">产品</view>
            <view class="span spanSecond font-family-medium">点评</view>

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
                :api="'search/reviews'"
                :page-mode="true"
                :request-data="dataList"
                class="listWrapper"
              >

                <template v-for="(item, index) in list">
                  <DianPingFeed
                    :item="item"
                    :is-show-link="true"
                    @showPageMore="showItemMore"
                  />
                </template>
                <view v-if="list.length" class="container-noMore">暂无更多</view>

                <view v-if="getCurrentMode === 'result' && !list.length && !resultLoading" class="noResult increase dianping-search">
                  <view class="empty-Img">
                    <image mode="aspectFill" class="image" src="../../static/images/empty@3x.png" />
                  </view>
                  <view class="noResultText">暂无结果，换个关键词试试~</view>
                </view>

              </RefreshList>

            </view>
            <PageMore
              ref="share"
              :share-option="shareOption"
              :hide-share-btn="true"
              :icon-menu="iconMenus"
              @success="shareSuccess"
              @fail="shareFail"
              @clickedItem="iconMenusClickedItem"
            />
          </view>

</template>

<script>
import RefreshList from '@/components/iw-list/iw-list'
import { postRequest } from '@/lib/request'
import { searchText as searchTextFilter } from '@/lib/search'
import DianPingFeed from '@/components/iw-feed-item/iw-feed-item'
import PageMore from '@/components/iw-page-more/iw-page-more'
import { autoBlur } from '@/lib/dom'

export default {
  components: {
    RefreshList,
    DianPingFeed,
    PageMore
  },
  data() {
    return {
      pageOption: {},
      shareOption: {},
      iconMenus: [],
      searchText: '',
      isShowCancelButton: false,
      confirmSearchText: '',
      list: [],
      resultLoading: 1,
      searchAdviceList: [],
      hotSearchHistory: {
        history: [],
        top: []
      }
    }
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
  created() {
    this.refreshPageData()
  },
  activated() {
    this.refreshPageData()
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
    this.refreshPageData()
  },
  methods: {
    to(url) {
      uni.navigateTo({ url: url })
    },
    empty() {
      this.searchText = ''
    },
    showItemMore(shareOption) {
      this.shareOption = shareOption
      this.$refs.share.share()
    },
    shareFail() {

    },
    shareSuccess() {

    },
    iconMenusClickedItem() {
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
    // 文字高亮
    getHighlight(content) {
      var reg = new RegExp('(' + this.searchText + ')', 'gi') // 正则验证匹配
      var newstr = content.replace(reg, '<view class=\'span\'  style="color: #03aef9">$1</view>') // 动态添加颜色
      return newstr
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
      if (text) {
        this.resultLoading = 1
        this.confirmSearchText = text
      }
      this.searchAdviceList = []
    }
  }
}

</script>

<style scoped lang="less">

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

    .bot {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height:2upx;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: rgb(220, 220, 220);
    }
    .mui-content{
        background: #ffffff;
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
