<template>
  <view>
    <view class="mui-content">
      <!-- #ifndef APP-PLUS -->
      <view class="search">
        <view class="p border-football">
          <text class="iconfont icon-sousuo " />
          <input v-model.trim="searchText" class="input" type="text" focus="true" placeholder="搜产品、内容" @keydown.enter="enterKeyCode($event)">
          <text class="iconfont icon-times1 " />
        </view>
        <view class="p" @tap.stop.prevent="back()">取消</view>
      </view>
      <!-- #endif -->
      <!--导航栏-->
      <view v-if="getCurrentMode === 'result' && searchText !== ''" class="menu">
        <view class="span font-family-medium">综合<view class="i" /></view>
        <view class="span" @tap.stop.prevent="redirectTo('/pages/search/discover?text=' + searchText)">分享</view>
        <view class="span" @tap.stop.prevent="redirectTo('/pages/search/product?text=' + searchText)">产品</view>
        <view class="span " @tap.stop.prevent="redirectTo('/pages/search/comment?text=' + searchText)">点评</view>
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
        <view class="listOne div" @tap.stop.prevent="selectConfirmSearchText(searchText)">
          查看“{{ searchText }}”的搜索结果
          <view class="i bot" />
        </view>
      </view>

      <view v-if="getCurrentMode === 'match'" class="searchList">
        <view class="div" v-for="(item, index) in searchAdviceList" :key="index" @tap.stop.prevent="selectConfirmSearchText(item)">
          {{ item }}
          <view class="i bot" />
        </view>
      </view>

      <RefreshList
        v-if="getCurrentMode === 'result'"
        ref="refreshlist"
        v-model="list"
        :api="'search/all'"
        :request-data="dataList"
      >

        <view v-if="list.submission.list.length" class="searchSubmission">
          <view class="searchTitle">分享</view>
          <view v-for="(submission, index) in list.submission.list" :key="index" class="">
            <FeedItem
              :item="submission"
              @showPageMore="showItemMore"
            />
          </view>
          <view v-if="list.submission.total > 3" class="checkAll" @tap.stop.prevent="$router.replace('/searchSubmission?text=' + searchText)">
            <view class="span font-family-medium">查看全部{{ list.submission.total }}个分享</view>
          </view>
        </view>

        <view v-if="list.question.list.length" class="searchQuestion">
          <view class="searchTitle">问答</view>
          <view class="">

            <template v-for="(item, index) in list.question.list">
              <view class="container-list-question" @tap.stop.prevent="toDetail(item.id,item.question_type)">
                <view class="question text-line-3">
                  <label v-if="item.price>0" class="component-label">{{ item.status_description }}</label><view class="span" v-html="textToLink(item.description)" />
                </view>
                <view v-if="item.question_type == 2" class="statistics">{{ item.answer_number }}回答<view class="span line-wall" />{{ item.follow_number }}关注</view>
                <view v-if="item.question_type == 1" class="statistics">{{ item.comment_number }}评论<view class="span line-wall" />{{ item.support_number }}点赞<view v-if="item.average_rate" class="span line-wall" />{{ item.average_rate?item.average_rate:'' }}</view>
              </view>
              <view v-if="index === 2 && index === list.question.list.length-1" class="line-river-after line-river-after-top" />
              <view v-if="index !== 3 && index !== list.question.list.length-1" class="line-river-big" />
            </template>

          </view>
          <view v-if="list.question.total > 3" class="checkAll" @tap.stop.prevent="$router.replace('/searchQuestion?text=' + searchText)">
            <view class="span font-family-medium">查看全部{{ list.question.total }}个问答</view>
          </view>
        </view>

        <view v-if="list.group.list.length" class="searchGroup">
          <view class="searchTitle">圈子</view>
          <view v-for="(submission, index) in list.group.list" :key="index" class="">
            <view class="component-group" @tap.stop.prevent="$uni.navigateTo('/group/detail/' + submission.id)">
              <view class="groupLogo">
                <image mode="aspectFill" class="image" :src="submission.logo" width="44" height="44" />
              </view>
              <view class="groupContent">
                <view class="groupName">
                  <view class="font-family-medium groupOwnerWrapper">
                    <view class="span text-line-1" v-html="getHighlight(submission.name)" /><view v-if="submission.is_joined === 3" class="span border-football">圈主</view>
                  </view>
                </view>
                <view class="span groupDescribe text-line-1">{{ submission.description }}</view>
                <view class="span groupText">{{ submission.subscribers }}人气</view>
                <view class="span groupText">{{ submission.articles }}分享</view>
                <view v-if="!submission.public" class="span groupText">
                  <text class="iconfont icon-simi " />
                  私密
                </view>
              </view>
              <view class="i bot" />
            </view>
          </view>
          <view v-if="list.group.total > 3" class="checkAll" @tap.stop.prevent="$router.replace('/group/search?text=' + searchText)">
            <view class="span font-family-medium">查看全部{{ list.group.total }}个圈子</view>
          </view>
        </view>

        <view v-if="list.review.list.length" class="searchComment">
          <view class="searchTitle">点评</view>
          <view v-for="(submission, index) in list.review.list" :key="index" class="">
            <FeedItem
              :key="'feedItem_' + submission.id"
              :item="submission"
              :is-show-link="true"
              @showItemMore="showItemMore"
            />
          </view>
          <view v-if="list.review.total > 3" class="checkAll" @tap.stop.prevent="$router.replace('/dianping/search/comments?text=' + searchText)">
            <view class="span font-family-medium">查看全部{{ list.review.total }}个点评</view>
          </view>
        </view>

        <view v-if="list.product.list.length" class="searchProduct">
          <view class="searchTitle">产品</view>
          <view class="">
            <view class="productList">
              <view v-for="(tag, index) in list.product.list" :key="index" class="comment-product">
                <view class="product-info" @tap.stop.prevent="$uni.navigateTo('/dianping/product/' + encodeURIComponent(tag.name))">
                  <view class="product-img border-football">
                    <image :src="tag.logo" mode="aspectFill" alt="" class="image lazyImg" />
                  </view>
                  <view class="product-detail">
                    <view class="productName font-family-medium text-line-1" v-html="getHighlight(tag.name)" />
                    <view class="productMark">
                      <view class="stars">
                        <StarView :rating="tag.review_average_rate" />
                      </view>
                      <view class="starsText">
                        <view class="span">{{ tag.review_average_rate }}分</view>
                        <view /><view class="span">{{ tag.review_count }}条评论</view>
                      </view>
                    </view>
                  </view>
                </view>
                <view class="line-river-after line-river-after-top" />
              </view>
            </view>
          </view>
          <view v-if="list.product.total > 3" class="checkAll" @tap.stop.prevent="$router.replace('/dianping/search/products?text=' + searchText)">
            <view class="span font-family-medium">查看全部{{ list.product.total }}个产品</view>
          </view>
        </view>

        <view class="river" />
        <view class="noTime">
          <view class="span">暂无更多</view>
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

<script type="text/javascript">
import { searchText as searchTextFilter } from '@/lib/search'
import { postRequest } from '@/lib/request'
import RefreshList from '@/components/iw-detail-refresh/iw-detail-refresh'
import { autoBlur, textToLinkHtml } from '@/lib/dom'
import FeedItem from '@/components/iw-feed-item/iw-feed-item.vue'
import StarView from '@/components/iw-star/iw-star'
// import { getQuestionStateClass } from '@/lib/ask'
import PageMore from '@/components/iw-page-more/iw-page-more'
import { getIconMenus, iconMenusClickedItem } from '@/lib/feed'
import { setNavbarSearchInputText } from '@/lib/allPlatform'

export default {
  components: {
    RefreshList,
    FeedItem,
    StarView,
    PageMore
  },
  data() {
    return {
      pageOption: {},
      searchText: '',
      confirmSearchText: '',
      isShowCancelButton: false,
      shareOption: {},
      iconMenus: [],
      list: {
        submission: {
          list: []
        },
        question: {
          list: []
        },
        group: {
          list: []
        },
        review: {
          list: []
        },
        product: {
          list: []
        }
      },
      searchAdviceList: [],
      resultLoading: 1,
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
            this.initList()
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
  mounted() {
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
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
    iconMenusClickedItem(item) {
      iconMenusClickedItem(this, this.itemOptionsObj, item, () => {
        this.iconMenus = getIconMenus(this.itemOptionsObj)
      })
    },
    shareFail() {

    },
    shareSuccess() {

    },
    showItemMore(data) {
      const shareOption = data.shareOption
      const item = data.item
      this.iconMenus = getIconMenus(item)
      this.itemOptionsObj = item
      this.shareOption = shareOption
      this.$refs.share.share()
    },
    toDetail(id, type) {
      uni.navigateTo('/ask/offer/answers/' + id, 'list-detail-page', true, 'pop-in', 'hide', true)
    },
    initList() {
      this.list = {
        submission: {
          list: []
        },
        question: {
          list: []
        },
        group: {
          list: []
        },
        review: {
          list: []
        },
        product: {
          list: []
        }
      }
    },
    enterKeyCode: function(ev) {
      if (ev.keyCode === 13) {
        this.selectConfirmSearchText(this.searchText)
      }
    },
    getStateClass(state) {
      return getQuestionStateClass(state)
    },
    textToLink(text) {
      return textToLinkHtml(' ' + text)
    },
    prevSuccessCallback: function() {
      this.resultLoading = 0
      this.list = this.$refs.refreshlist.getResponse().data
    },
    refreshPageData: function() {
      var text = this.pageOption.text
      if (text) {
        this.searchText = text
        this.selectConfirmSearchText(text)
      }
      this.hotSearch()
    },
    focus: function() {
      this.confirmSearchText = ''
      // this.list = []
      if (this.searchText) {
        this.searchAdvice(this.searchText)
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

<style scoped lang="less">
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
    .mui-content {
        background: #ffffff;
        .listWrapper {
            top: 168upx;
        }
        .search {
            position: relative;
            width: 100%;
            padding: 0 31.96upx;
            display: flex;
            height: 87.98upx;
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
                &:nth-of-type(1) {
                    width: 585.98upx;
                    height: 67.96upx;
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
                        &:nth-of-type(1) {
                            font-size: 36upx;
                            margin-top: 3.98upx;
                        }
                        &:nth-of-type(2) {
                            margin-left: 19.96upx;
                            font-size: 39.98upx;
                            position: relative;
                            z-index: 980;
                        }
                    }
                    .input {
                        width: 451.96upx !important;
                        height: 63.98upx;
                        border: none;
                        background: #f3f4f6;
                        font-size: 27.98upx;
                        color: #444444;
                        position: absolute;
                        left: 63.98upx;
                        z-index: 990;
                        padding: 0 19.96upx;
                    }
                }
                &:nth-of-type(2) {
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
                width:13.5%;
                height:100%;
                justify-content: center;
                align-items: center;
                &:nth-of-type(1){
                    font-size: 27.98upx;
                    position:relative;
                    color: #444444;
                    font-weight: 500;
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
        .div {
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

    .searchTitle {
        color: #808080;
        font-size: 25.96upx;
        padding-left: 31.96upx;
        line-height: 57.98upx;
        background: #F3F4F6;
    }
    .checkAll {
        height: 87.98upx;
        line-height: 87.98upx;
        text-align: center;
        .span {
            color: #808080;
            font-size: 25.96upx;
        }
    }

    .noTime {
        height: 114upx;
        padding-top: 24.98upx;
        text-align: center;
        .span {
            color: #C8C8C8;
            font-size: 24upx;
        }
    }

    .productList {
        .comment-product {
            padding: 25.96upx 30upx 0;
            .product-info {
                padding: 0 0 30upx;
                background: none;
            }
        }
    }

    .comment-product {
        padding: 21.98upx 30upx 30upx;
        .product-info {
            overflow: hidden;
            background: #F7F8FA;
            padding: 19.96upx;
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
                width: 562.50upx;
                .productName {
                    color: #444444;
                    font-size: 31.96upx;
                    line-height: 45.0upx;
                }
                .productMark {
                    display: flex;
                    .stars {
                        margin-top: 1.96upx;
                    }
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
                }
            }
        }
    }

    .container-list-question .question {
        margin-top: 0 !important;
    }

</style>
