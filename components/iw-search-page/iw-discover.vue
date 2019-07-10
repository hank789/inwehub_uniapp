<template>
  <view>
    <view class="mui-content searchSubmission">
     
      <RefreshList
        ref="refreshlist"
        v-model="list"
        :api="'search/submission'"
        :request-data="dataList"
        class="listWrapper"
      >
        <view>
          <template v-for="(item, index) in list">

            <FeedItem
              :item="item"
							:key="item.id"
              @showPageMore="showItemMore"
            />

          </template>
        </view>

        <view v-if="list.length" class="noResult">
          <view class="empty-Img">
            <image mode="aspectFill" class="image" src="../../static/images/empty@3x.png" /></view>
          <view v-if="list.length" class="noResultText">无更多结果，快来发布相关分享~</view>
          <view class="goRelease" @tap.stop.prevent="to('/pages/discover/add')">发分享</view>
        </view>
        <view v-if="list.length" class="line-river-big" />
      </RefreshList>
    </view>

    <view v-if="getCurrentMode === 'result' && !list.length && !resultLoading" class="noResult increase">
      <view class="empty-Img">
        <image mode="aspectFill" class="image" src="../../static/images/empty@3x.png" /></view>
      <view class="noResultText">暂无结果，快来发布相关分享~</view>
      <view class="goRelease" @tap.stop.prevent="to('/pages/discover/add')">发分享</view>
    </view>

    <PageMore
      ref="pageMore"
      :share-option="shareOption"
      :hide-share-btn="true"
      :icon-menu="iconMenus"
      @success="shareSuccess"
      @fail="shareFail"
      @clickedItem="iconMenusClickedItem"
    />

    <iwDialogReport ref="alertReport"></iwDialogReport>

  </view>
</template>

<script>
import { searchText as searchTextFilter } from '@/lib/search'
import { postRequest } from '@/lib/request'
import RefreshList from '@/components/iw-list/iw-list'
import FeedItem from '@/components/iw-feed-item/iw-feed-item'
import PageMore from '@/components/iw-page-more/iw-page-more'
import { autoBlur } from '@/lib/dom'
import { getIconMenus, iconMenusClickedItem } from '@/lib/feed'
import ui from '@/lib/ui'
import { setNavbarSearchInputText } from '@/lib/allPlatform'
import iwDialogReport from '@/components/iw-dialog/report.vue'

export default {
  components: {
    RefreshList,
    FeedItem,
    PageMore,
    iwDialogReport
  },
  data() {
    return {
      pageOption: {},
      shareOption: {},
      iconMenus: [],
      searchText: '',
      // confirmSearchText: '',
      isShowCancelButton: false,
      list: [],
      searchAdviceList: [],
      itemOptionsObj: {},
      resultLoading: 1,
      hotSearchHistory: {
        history: [],
        top: []
      }
    }
  },
  props: {
	  confirmSearchText: {
			type: String,
			default: () => {
				return {}
			}
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
  mounted() {},
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
    to(url) {
      uni.navigateTo({ url: url })
    },
    redirectTo(url) {
      uni.redirectTo({ url: url })
    },
    showItemMore(data) {
      let shareOption = data.shareOption
      let item = data.item
      this.iconMenus = getIconMenus(item)
      this.itemOptionsObj = item
      this.shareOption = shareOption
      this.$refs.pageMore.share()
    },
    shareFail() {

    },
    shareSuccess() {

    },
    iconMenusClickedItem(item) {
      iconMenusClickedItem(this, this.itemOptionsObj, item, () => {
        this.iconMenus = getIconMenus(this.itemOptionsObj)
      })
    },
    focus: function() {
      this.confirmSearchText = ''
      this.list = []
      if (this.searchText) {
        this.searchAdvice(this.searchText)
      }
    },
    prevSuccessCallback: function() {
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
    toResume(uuid) {
      if (!uuid) {
        return false
      }
      uni.navigateTo('/share/resume?id=' + uuid + '&goback=1' + '&time=' + (new Date().getTime()))
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
    toDetail(item) {
      switch (item.feed_type) {
        case 1:
        case 2:
        case 3:
        case 5:
        case 6:
        case 11:
        case 12:
        case 14:
        case 15:
        case 16:
          uni.navigateTo(item.url, 'list-detail-page')
          break
        case -1:
          // 已废弃
          var linkArticle = {
            view_url: item.url,
            id: item.feed.submission_id,
            title: item.feed.title,
            comment_url: item.feed.comment_url,
            img_url: item.feed.img
          }
          this.goArticle(linkArticle)
          break
        default:
          uni.navigateTo(item.url, 'list-detail-page')
          break
      }
    },
    // 时间处理；
    timeago(time) {
      const newDate = new Date()
      newDate.setTime(Date.parse(time.replace(/-/g, '/')))
      return newDate
    },
    //  点击清空输入框
    empty() {
      this.searchText = ''
    }
  }
}
</script>

<style lang="less" scoped>
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
        .listWrapper{
            /*top: 168upx;*/
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
    }

    .newLink {
        margin-top: 18upx;
        .newLinkBox {
            margin-top: 19.96upx;
            padding: 30upx 30upx 21.98upx;
            background: #F7F8FA;
            border-radius: 7.96upx;
            .container-image {
                margin-top: 0;
                margin-bottom: 15.98upx;
            }
            .image {
                border-radius: 7.96upx;
            }
            .linkContent {
                font-size: 27.98upx;
                color: #808080;
            }
            .link {
                font-size: 24upx;
                color: #B4B4B6;
            }
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

