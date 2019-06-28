<template>
  <view class="content">
    <view  class="mui-content">
      <MescrollDetail
        v-if="id"
        ref="mescrollDetail"
        :api="'article/detail-by-slug'"
        v-model="detail"
        :requestData="requestData"
        @finish="finish"
      >

        <view class="mui-table-view detail-discover" v-if="!loading">
          <UserInfo
            :uuid="detail.owner.uuid"
            :avatar="detail.owner.avatar"
            :realname="detail.owner.name"
            :is-follow="isFollow"
            :is-followed="detail.is_followed_author?true:false"
            :is-show-position-and-company="false"
            :is-expert="detail.owner.is_expert?1:0"
            :time="detail.created_at"
            @setFollowStatus="setFollowStatus"
          />
          <!--<view class="line-river lineMargin"></view>-->

          <view class="mark">
            <view class="stars">
              <StarView :rating="detail.rate_star" />
            </view>
            <view class="text">{{ detail.rate_star }}分</view>
          </view>

          <view class="discoverContentWrapper">
            <view id="contentWrapper" class="contentWrapper quillDetailWrapper container-editor container-editor-app">
              <view v-if="detail.type !== 'article'" class="span" v-html="textToLink(detail.title)" />
            </view>

            <view v-if="detail.type === 'review' && detail.data.img && detail.data.img.length" class="linkWrapper Column">
              <template v-for="(image, index) in detail.data.img">
                <ImageAutoHeight
								:key="index"
                  class="image discover_img lazyImg"
                  :src="image"
                />
              </template>
            </view>
          </view>
          <!-- 新增链接样式 -->
          <view v-if="detail.tags" class="link">
            <view class="linkBox" @tap.stop.prevent="goProductDetail()">
              <view v-if="!detail.tags[0].logo" class="span linkIimg">
                <text class="iconfont icon-biaozhunlogoshangxiayise " />
              </view>
              <view v-else class="productLogo border-football">
                <image mode="aspectFit" :src="detail.tags[0].logo" class="image lazyImg" /></view>
              <view class="linkContent">
                <view v-if="detail.tags[0].name" class="text-line-1">{{ detail.tags[0].name }}</view>
                <view v-else class="span seat" />
                <view class="mark">
                  <view class="stars">
                    <StarView :rating="detail.tags[0].review_average_rate" />
                  </view>
                  <view class="text">{{ detail.tags[0].review_average_rate }}分</view><view class="i" />
                  <view class="comment">{{ detail.tags[0].reviews }}条评论</view>
                </view>
              </view>
            </view>
          </view>

          <view class="timeContainer">
            <view class="makingCopy">著作权归作者所有</view>
          </view>
        </view>
        <view class="river" />
        <ArticleDiscuss
          v-if="detail.slug"
          id="commentTitle"
          ref="discuss"
          :list-api="'article/comments'"
          :list-params="discussListParams"
          :store-api="'article/comment-store'"
          :store-params="discussStoreParams"
          @comment="comment"
          @commentFinish="commentFinish"
          @goComment="goComment"
          @delCommentSuccess="delCommentSuccess"
        />
        <view v-if="detail.comments_number > 3" class="seeAll" @tap.stop.prevent="toComment(detail)">查看全部{{ detail.comments_number }}条评论</view>
        <view class="river" />

        <view class="allDianPing font-family-medium">大家都在评</view>
        <view class="line-river-after line-river-after-top" />

        <view class="productList">

          <view v-for="(item, index) in detail.related_tags" :key="index" class="comment-product">
            <view class="product-info" @tap.stop.prevent="toProduct(item)">
              <view class="product-img border-football">
                <image mode="aspectFill" :src="item.logo" alt="" class="image lazyImg" /></view>
              <view class="product-detail">
                <view class="productName font-family-medium text-line-1">{{ item.name }}</view>
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
            <view v-if="index !== 4 && index !== detail.related_tags.length-1" class="line-river-after line-river-after-top" />
          </view>
        </view>
        <view class="river" />
        <view class="openAppReadBox">
          <view class="openAppRead" @tap.stop.prevent="openApp()">
            <view class="span font-family-medium">打开APP</view>
            <view class="span">阅读更多推荐</view>
          </view>
          <view class="river openAppReadRiver" />
          <view class="followCode">
            <view class="CodeImg">
              <image mode="aspectFill" class="image" src="../../static/images/xiaohaWeChat@3x.png" alt="" /></view>
            <view class="codeText">
              <view>长按添加平台联络官“小哈”微信</view>
              <view>加行业群/互动交流/探索更多</view>
            </view>
          </view>
          <view class="river openAppReadRiver" />
        </view>

      </MescrollDetail>
    </view>

    <commentTextarea ref="ctextarea" @sendMessage="sendMessage" />

    <Detail
      :detail="this.detail"
      :icon-options="iconOptions"
      :is-detail-up-vote="isDetailUpVote"
      :is-num-up-vote="detail.is_upvoted"
      @detailMenuIcon="detailMenuIcon"
      @WriteComment="goComment"
      @clickUpVote="upVote"
    />

    <PageMore
      ref="share"
      :share-option="shareOption"
      :hide-share-btn="false"
      :icon-menu="iconMenus"
      @clickedItem="iconMenusClickedItem"
    />

    <AlertTextarea ref="AlertTextarea" />
    <iwDialogReport ref="alertReport"></iwDialogReport>
  </view>
</template>
<script>
import ui from '@/lib/ui'
import { getCommentDetail } from '@/lib/dianping'
import { textToLinkHtml, transferTagToLink, addPreviewAttrForImg, scrollToElement } from '@/lib/dom'
import { postRequest } from '@/lib/request'
import UserInfo from '@/components/iw-discover/user-info.vue'
import { openVendorUrl, openAppUrl } from '@/lib/html5plus'
import localEvent from '@/lib/localstorage'
import ArticleDiscuss from '@/components/iw-discover/discuss.vue'
import commentTextarea from '@/components/iw-comment-textarea/iw-comment-textarea.vue'
import { upvote, downVote, report } from '@/lib/discover'
import PageMore from '@/components/iw-page-more/iw-page-more'
import { getDianpingCommentDetail } from '@/lib/shareTemplate'
import StarView from '@/components/iw-star/iw-star'
import Detail from '@/components/iw-menu-detail/iw-menu-detail.vue'
import AlertTextarea from '@/components/iw-comment-alerttextarea/iw-comment-alerttextarea.vue'
import { showComment } from '@/lib/comment'
import MescrollDetail from '@/components/iw-detail-refresh/iw-detail-refresh.vue'
import ImageAutoHeight from '@/components/iw-image/autoheight.vue'
import iwDialogReport from '@/components/iw-dialog/report.vue'

export default {
  components: {
    UserInfo,
    ArticleDiscuss,
    commentTextarea,
    PageMore,
    StarView,
    Detail,
    AlertTextarea,
    MescrollDetail,
    ImageAutoHeight,
    iwDialogReport
  },
  data() {
    return {
      pageOption: {},
      id: '',
      uuid: '',
      title: '点评',
      detail: {
        id: '',
        slug: '',
        owner: {
          id: '',
          uuid: '',
          avatar: '',
          username: ''
        }
      },
      shareOption: {
        title: '',
        link: '',
        content: '',
        imageUrl: '',
        thumbUrl: '',
        shareName: '',
        targetType: 'submission',
        targetId: ''
      },
      loading: 1,
      isFollow: true,
      editorOptionRead: {
        placeholder: ' ',
        modules: {
          toolbar: []
        },
        readOnly: true
      },
      tags: {},
      isDetailUpVote: false,
      animObjects: []
    }
  },
  computed: {
    requestData () {
      return {
        slug: this.id
      }
    },
    discussStoreParams() {
      return { 'submission_id': this.detail.id }
    },
    discussListParams() {
      return { 'submission_slug': this.detail.slug, order_by: 2, perPage: 3 }
    },
    iconOptions() {
      return [
        {
          icon: 'icon-pinglun',
          text: '评论',
          number: this.detail.comments_number,
          showNumer: false,
          ShowIsUpVote: false
        },
        {
          icon: 'icon-cai',
          text: '踩',
          number: this.detail.downvotes,
          showClass: this.detail.is_downvoted,
          showNumer: false,
          ShowIsUpVote: false
        },
        {
          icon: 'icon-zan',
          text: '赞',
          number: this.detail.upvotes,
          showClass: this.isDetailUpVote,
          showNumber: this.isDetailUpVote,
          ShowIsUpVote: this.detail.is_upvoted
        },
        {
          icon: 'icon-shoucang-xiao',
          text: '分享',
          number: 0,
          showNumer: false,
          ShowIsUpVote: false
        }
      ]
    },
    iconMenus() {
      var iconMenus = []

      if (this.uuid === this.detail.owner.uuid) {
        iconMenus.push({
          icon: 'icon-shanchu1',
          text: '删除'
        })
      }
      if (this.detail.is_bookmark) {
        iconMenus.push({
          icon: 'icon-shoucangdilantongyi',
          text: '已收藏',
          isBookMark: 1
        })
      } else {
        iconMenus.push({
          icon: 'icon-shoucangdilantongyi',
          text: '收藏',
          isBookMark: 0
        })
      }
      iconMenus.push({
        icon: 'icon-jubao',
        text: '举报'
      })
      return iconMenus
    }
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
    const currentUser = localEvent.get('UserInfo')
    this.uuid = currentUser.uuid
    this.getDetail()
  },
  watch: {

  },
  mounted() {
  },
  updated() {
    this.$nextTick(function() {
      if (this.isShow) {
        openVendorUrl(this.$el.querySelector('#contentWrapper'))
        openAppUrl(this.$el.querySelector('#contentWrapper'))
      }
    })
  },
  onNavigationBarButtonTap(e) {
    this.$refs.share.show(true)
  },
  methods: {
		toProduct(item) {
			var url = '/pages/dianping/product?name=' + encodeURIComponent(item.name)
			this.toRoute(url)
		},
		toComment(detail) {
			var url = '/pages/comment/index?category_id=' + detail.category_id + '&slug=' + detail.slug + '&id=' + detail.id
			this.toRoute(url)
		},
    toRoute (url) {
      uni.navigateTo({ url: url})
    },
    finish () {
      // this.showItemOptions()
      var shareOption = getDianpingCommentDetail(this.detail.slug, this.detail.title, this.detail.owner.avatar, this.detail.owner.name, this.detail.rate_star)
      this.shareOption = Object.assign(this.shareOption, shareOption)
      this.loading = 0
    },
    detailMenuIcon(item) {
      switch (item.text) {
        case '评论':
          this.toRoute('/pages/comment/index?category_id=' + this.detail.category_id + '&slug=' + this.detail.slug + '&id=' + this.detail.id)
          break
        case '踩':
          this.detailDownVote()
          break
        case '赞':
          this.upVote()
          break
        case '分享':
          this.$refs.share.share()
          break
      }
    },
    goProductDetail() {
      uni.navigateTo({url: '/pages/dianping/product?name=' + encodeURIComponent(this.detail.tags[0].name)})
    },
    showItemMore(shareOption, item) {
      this.iconMenus = []
      this.shareOption = shareOption
      this.$refs.share.share()
    },
    openApp() {
      // window.mui.trigger(document.querySelector('.AppOne'), 'tap')
    },
    iconMenusClickedItem(item) {
      switch (item.text) {
        case '删除':
          this.deleterow()
          break
        case '收藏':
          this.collect()
          break
        case '已收藏':
          this.collect()
          break
        case '举报':
          this.$refs.share.toggle()
          report(this)
          break
      }
    },
    // showItemOptions () {
    //   this.iconMenus = []
    //
    //   if (this.uuid === this.detail.owner.uuid) {
    //     this.iconMenus.push({
    //       icon: 'icon-shanchu1',
    //       text: '删除'
    //     })
    //   }
    //   if (this.detail.is_bookmark) {
    //     this.iconMenus.push({
    //       icon: 'icon-shoucangdilantongyi',
    //       text: '已收藏',
    //       isBookMark: 1
    //     })
    //   } else {
    //     this.iconMenus.push({
    //       icon: 'icon-shoucangdilantongyi',
    //       text: '收藏',
    //       isBookMark: 0
    //     })
    //   }
    //
    // },
    collect() {
      var data = {
        id: this.detail.id
      }

      postRequest(`article/bookmark-submission`, data).then(response => {
        var code = response.code
        if (code === 6108) {
          return
        } else if (code !== 1000) {
          ui.alert(response.message)
          return
        }
        if (response.data.type === 'unbookmarked') {
          this.detail.bookmarks--
          this.detail.is_bookmark = 0
          ui.toast('已取消收藏')
        } else {
          this.detail.bookmarks++
          this.detail.is_bookmark = 1
          ui.toast('收藏成功')
        }
        if (process.env.NODE_ENV === 'production') {
          // mixpanel
//          window.mixpanel.track(
//            'inwehub:bookmark:success',
//            {
//              'app': 'inwehub',
//              'user_device': window.getUserAppDevice(),
//              'page': this.id,
//              'page_name': 'submission',
//              'page_title': this.isCollected ? 'cancel' : 'bookmark',
//              'referrer_page': ''
//            }
//          )
        }
        // window.mui('#shareWrapper').popover('toggle')
        // this.showItemOptions()
      })
    },
    // 删除
    deleterow() {
      this.$refs.share.toggle()
      var btnArray = ['取消', '确定']
      ui.confirm('确定删除吗？', ' ', btnArray, (e) => {
        if (e.index === 1) {
          // 进行删除
          postRequest(`article/destroy-submission`, {
            id: this.detail.id
          }).then(response => {
            var code = response.code
            // 如果请求不成功提示信息 并且返回上一页；
            if (code !== 1000) {
              ui.alert(response.message)
              uni.navigateBack()
              return
            }
            if (response.data) {
              uni.navigateBack()
              ui.toast('删除成功')
            }
          })
        }
      })
    },
    detailDownVote() {
      downVote(this, this.detail.id, (response) => {
        this.detail.downvotes++
        this.detail.is_downvoted = 1
        this.detail.support_description = response.data.support_description
        this.detail.support_percent = response.data.support_percent
        this.isUpvote = response.data.type
        if (process.env.NODE_ENV === 'production') {
          // mixpanel
//          window.mixpanel.track(
//            'inwehub:downvote:success',
//            {
//              'app': 'inwehub',
//              'user_device': window.getUserAppDevice(),
//              'page': this.id,
//              'page_name': 'submission',
//              'page_title': 'downvote',
//              'referrer_page': ''
//            }
//          )
        }
      }, (response) => {
        this.detail.downvotes--
        this.detail.support_description = response.data.support_description
        this.detail.support_percent = response.data.support_percent
        this.detail.is_downvoted = 0
        this.isUpvote = response.data.type

        if (process.env.NODE_ENV === 'production') {
          // mixpanel
//          window.mixpanel.track(
//            'inwehub:downvote:success',
//            {
//              'app': 'inwehub',
//              'user_device': window.getUserAppDevice(),
//              'page': this.id,
//              'page_name': 'submission',
//              'page_title': 'cancelDownvote',
//              'referrer_page': ''
//            }
//          )
        }
      })
    },
    upVote() {
      upvote(this, this.detail.id, (response) => {
        this.detail.upvotes++
        // this.detail.is_upvoted = 1
        this.detail.support_description = response.data.support_description
        this.detail.support_percent = response.data.support_percent
        this.isUpvote = response.data.type
        var support = {
          name: this.name,
          uuid: this.uuid
        }
        this.detail.supporter_list = this.detail.supporter_list.concat(support)
        this.isDetailUpVote = true

//        if (process.env.NODE_ENV === 'production' && window.mixpanel) {
//          // mixpanel
//          window.mixpanel.track(
//            'inwehub:support:success',
//            {
//              'app': 'inwehub',
//              'user_device': window.getUserAppDevice(),
//              'page': this.id,
//              'page_name': 'submission',
//              'page_title': 'support',
//              'referrer_page': ''
//            }
//          )
//        }
      }, (response) => {
        this.detail.upvotes--
        this.detail.is_upvoted = 0
        this.isDetailUpVote = false
        this.detail.support_description = response.data.support_description
        this.detail.support_percent = response.data.support_percent
        this.isUpvote = response.data.type
        for (var i in this.detail.supporter_list) {
          if (this.detail.supporter_list[i].uuid === this.uuid) {
            this.detail.supporter_list.splice(i, 1)
          }
        }
      })
    },
    refreshPageDataNoLoading() {
      this.refreshPageData(0)
    },
    goComment() {
      this.$refs.discuss.rootComment()
    },
    commentFinish() {
      this.commentNumAdd()
      this.$refs.ctextarea.finish()
    },
    commentNumAdd() {
      this.detail.comments_number++
    },
    delCommentSuccess() {
      this.detail.comments_number--
    },
    sendMessage(message) {
      this.$refs.discuss.sendMessage(message)
    },
    comment(commentTargetName) {
      showComment(
        this,
        commentTargetName,
        this.$refs.ctextarea,
        this.$refs.AlertTextarea,
        this.$refs.discuss
      )
    },
    getDetail(loading = 1) {
      this.loading = loading
      this.id = this.pageOption.slug
    },
    setFollowStatus(status) {
      this.detail.is_followed_author = status
    },
    textToLink(text) {
      return transferTagToLink(textToLinkHtml(' ' + text))
    },
    onEditorReadyRead(editor) {
      this.editorReadObj = editor
      if (this.editorReadContentObj) {
        this.editorReadObj.setContents(this.editorReadContentObj)
      }
    },
    change(editor) {
      
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
    .mui-content {
      bottom: 100upx;
      background: #fff;
    }
    .mark {
        display: flex;
        padding: 0 31.96upx;
        margin-top: -15.98upx;
        margin-bottom: 13.96upx;
        .stars {
            color: #FCC816;
            .iconfont{
                font-size: 22.96upx;
            }
        }
        .text {
            color: #FCC816;
            font-size: 21.98upx;
            margin-top: 3.98upx;
            margin-left: 6upx;
        }
    }
    .seeAll {
        padding: 24upx 0;
        font-size: 27.98upx;
        color: #808080;
        line-height: 39.98upx;
        text-align: center;
    }
    .allDianPing {
        padding: 0 31.96upx;
        color: #444444;
        font-size: 31.96upx;
        line-height: 87.98upx;
    }
    .detailTitle {
        font-size: 37.96upx;
        line-height: 60upx;
        margin-top: -21.98upx;
        padding: 0upx 31.96upx 43.96upx;
        font-family: PingFangSC-Medium;
    }
    .contentWrapper {
        padding: 0 30upx;
        white-space: pre-line !important;
        word-wrap: break-word;
        font-size: 31.96upx;
        color: #444;
        line-height: 51.98upx;
        margin-bottom: 51.98upx;
    }

    .linkWrapper {
        padding: 0 31.96upx;
    }
    .Column {
        width: 100%;
        height: max-content;
    }
    .Column .discover_img {
        width: 100%;
        border-radius: 7.96upx;
        margin-bottom: 51.98upx;
        vertical-align: top;
    }
    .link {
        padding: 0 31.96upx;
        margin-bottom: 34.96upx;
        .linkBox {
            padding: 19.96upx;
            border-radius: 7.96upx;
            background: #F7F8FA;
            .linkIimg {
                width: 87.98upx;
                height: 87.98upx;
                float: left;
                text-align: center;
                line-height: 99.98upx;
                margin-right: 19.96upx;
                border-radius: 7.96upx;
                background: #ECECEE;
                .iconfont{
                    color: #C8C8C8;
                    font-size: 55.96upx;
                }
            }
            .productLogo {
                width: 87.98upx;
                height: 87.98upx;
                float: left;
                margin-right: 19.96upx;
                .image {
                    width: 100%;
                    height: 100%;
                    border-radius: 7.96upx;
                    object-fit: cover;
                }
                &.border-football {
                    &:after {
                        border-radius: 15.98upx;
                        border-color: #DCDCDC;
                    }
                }
            }
            .linkContent {
                font-size: 27.98upx;
                color: #808080;
                .seat {
                    width: 19.96upx;
                    height: 30upx;
                    display: inline-block;
                }
                div {
                    word-break: break-all;
                }
                .text-line-2 {
                    color: #808080;
                }
                .mark {
                    padding: 0;
                    margin-top: 0;
                    .text {
                        color: #FCC816;
                        margin-top: 0 !important;
                    }
                    .i {
                        width: 3.98upx;
                        height: 3.98upx;
                        background: #B4B4B6;
                        border-radius: 50%;
                        margin: 19.50upx 9.98upx 0;
                        /*display: inline-block;*/
                    }
                    .comment {
                        color: #B4B4B6;
                        font-size: 21.98upx;
                        /*margin-top: 1.96upx;*/
                    }
                }
            }
        }
    }
    .timeContainer {
        display: flex;
        color: #B4B4B6;
        margin-bottom: 45.0upx;
        padding: 0 31.96upx;
        justify-content: space-between;
        .makingCopy {
            font-size: 24upx;
        }
        .fromGroup {
            /*width: 237.98upx;*/
            height: 42upx;
            padding: 0 15.98upx;
            font-size: 24upx;
            line-height: 42upx;
            text-align: center;
            background: #F7F8FA;
            border-radius: 199.96upx;
            .span {
                color: #808080;
                font-family:PingFangSC-Medium;
            }
            .i {
                color: #B4B4B6;
                font-style: normal;
                margin-right: 6upx;
            }
        }
    }
    .productList {
        .comment-product {
            padding: 25.96upx 30upx 0;
            .product-info {
                padding: 0 0 30upx;
                background: none;
            }
            .productName {
                width: 567.98upx;
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
                    object-fit: cover;
                }
            }
            .product-detail {
                float: left;
                margin-left: 19.96upx;
                .productName {
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
                }
            }
        }
    }

    .mui-table-view-cell {
        padding-top: 9.98upx;
    }
    .detail-discover {
        padding-bottom: 9.98upx;
        margin-top: 0 !important;
    }
    .detail-discover:before {
        display: none;
    }
    .detail-discover:after {
        display: none;
    }
    .lineMargin {
        margin-top: -31.96upx;
        margin-bottom: 27.98upx;
    }
    .active {
        color: #d4d4d4;
    }
</style>

<style type="text/css">
    .detail-discover .followWrapper {
        margin-top: 15.98upx;
    }
    .detail-discover .followWrapper .followButton {
        min-width: 87.98upx;
        height: 42upx;
        line-height: 42upx;
        font-size: 24upx;
        width: auto;
        padding: 0 19.96upx;
    }
</style>
