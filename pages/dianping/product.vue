<template>
  <view>
    <view v-show="!loading" class="mui-content">
      <MescrollDetail
        v-if="id"
        ref="mescrollDetail"
        v-model="detail"
        :api="'tags/product'"
        :request-data="requestData"
        @finish="finish"
      >
        <view class="product-introduce" v-if="!loading">
          <view class="companyLogo border-football">
            <image mode="aspectFit" :src="detail.logo" alt="" class="image lazyImg" /></view>
          <view class="companyNmae font-family-medium">{{ detail.name }}</view>
          <view class="companyMark">
            <view class="stars">
              <StarView :rating="detail.review_average_rate" />
            </view>
            <view class="starsText">
              <view class="span">{{ detail.review_average_rate }}分</view>
              <view class="i" /><view class="span comment">{{ detail.review_count }}条评论</view>
            </view>
          </view>
          <view class="companyDescribe">{{ detail.summary }}</view>
          <view
            v-if="detail.vendor"
            class="supply"
          ><view class="span">供应商</view><view
            class="span font-family-medium"
          >{{ detail.vendor.name }}</view></view>
        </view>
        <view class="optionlList" v-if="detail.categories.length">
          <template v-for="(category, index) in detail.categories">
            <view class="list" @tap.stop.prevent="toRoute('/pages/dianping/products?id=' + category.id + '&name=' + encodeURIComponent(category.name))">
              <view class="span">{{ category.name }}</view>
              <view class="span ranking">No.{{ category.rate }}</view>
              <text class="iconfont icon-jinru " />
            </view>
            <view v-if="index !== detail.categories.length-1" class="line-river-after line-river-after-top" />
          </template>
        </view>

        <view v-if="detail.review_count">
          <view class="line-river-big" />
          <view class="allDianPing font-family-medium">点评 {{ detail.review_count ? '(' + detail.review_count + ')' : '' }}</view>
          <view class="line-river-after line-river-after-top" />

          <view v-if="productComments.length">
            <template v-for="(comment, index) in productComments">
              <feedDianping :item="comment" :index="index" @showPageMore="showItemMore" />
            </template>
          </view>

          <view
            class="openAllDianPing font-family-medium"
            @tap.stop.prevent="toRoute('/pages/dianping/comments?id=' + encodeURIComponent(detail.name))"
          >
            查看全部{{ detail.review_count ? detail.review_count + '条' : '' }}点评
          </view>
        </view>

        <view class="line-river-big" />

        <view class="component-score">
          <view class="text">就您的感受而言，您会给他打多少分？</view>
          <!--<starRating-->
          <!--v-model="star"-->
          <!--:increment="1"-->
          <!--:padding="4"-->
          <!--:active-color="'#fcc816'"-->
          <!--:star-size="23"-->
          <!--:show-rating="false"-->
          <!--:border-color="'#fcc816'"-->
          <!--:border-width="3"-->
          <!--:inactive-color="'#FFFFFF'"-->
          <!--:star-points="[48.3,190.9,46.5,190.8,43.2,189.7,41.6,188.7,40.4,187.7,38.4,185.2,37.2,182.3,36.9,179.1,37.1,177.5,46,125.9,8.5,89.4,7.4,88.2,5.9,85.4,5.1,82.4,5.2,79.3,5.6,77.7,6.2,76.2,8,73.6,10.4,71.6,13.2,70.3,14.8,69.9,66.6,62.4,89.8,15.4,90.6,14,92.7,11.7,95.4,10,98.4,9.1,100,9,101.6,9.1,104.7,10,107.3,11.6,109.4,14,110.2,15.4,133.4,62.4,185.2,69.9,186.8,70.2,189.7,71.5,192.1,73.5,193.8,76.2,194.4,77.7,194.8,79.3,194.9,82.4,194.1,85.4,192.6,88.2,191.5,89.4,154,125.9,162.9,177.5,163.1,179.1,162.7,182.2,161.5,185.1,159.6,187.6,158.4,188.7,157,189.6,154.1,190.7,151,190.9,147.9,190.2,146.4,189.6,100,165.2,53.7,189.6,51,190.6,48.3,190.9,48.3,190.9]"-->
          <!--@rating-selected="waitGoDianping"-->
          <!--/>-->
        </view>
        <view class="line-river-big" />
        <view class="allDianPing font-family-medium"  v-if="detail.related_tags && detail.related_tags.length">相关推荐</view>
        <view class="line-river-after line-river-after-top"  v-if="detail.related_tags && detail.related_tags.length"/>

        <view class="productList" v-if="detail.related_tags && detail.related_tags.length">
          <view v-for="(tag, index) in detail.related_tags" :key="index" class="comment-product">
            <view class="product-info" @tap.stop.prevent="toRoute('/pages/dianping/product?name=' + encodeURIComponent(tag.name))">
              <view class="product-img border-football">
                <image mode="aspectFit" :src="tag.logo | imageSuffix(43, 43)" alt="" class="image lazyImg" /></view>
              <view class="product-detail">
                <view class="productName font-family-medium text-line-1">{{ tag.name }}</view>
                <view class="productMark">
                  <view class="stars">
                    <StarView :rating="tag.review_average_rate" />
                  </view>
                  <view class="starsText">
                    <view class="span">{{ tag.review_average_rate }}分</view>
                    <view class="i" /><view class="span">{{ tag.review_count }}条评论</view>
                  </view>
                </view>
              </view>
            </view>
            <view v-if="index !== 4 && index !== detail.related_tags.length-1" class="line-river-after line-river-after-top" />
          </view>
        </view>
        <view class="line-river-big" />
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
        </view>
      </MescrollDetail>
    </view>

    <FooterMenu
      :options="footerMenus"
      :is-follwers="isFollwers"
      :collect="detail.is_followed"
      @clickedItem="footerMenuClickedItem"
      @clickCollect="clickCollect"
    />

    <PageMore
      ref="share"
      :share-option="shareOption"
      :hide-share-btn="true"
      :icon-menu="iconMenus"
    />

  </view>
</template>

<script>
import ui from '@/lib/ui'
import feedDianping from '@/components/iw-feed-item/iw-feed-item'
import { getProductDetail, getProductComments, collectProduct } from '@/lib/dianping'
import userAbility from '@/lib/userAbility'
import FooterMenu from '@/components/iw-dianping/footermenu'
import PageMore from '@/components/iw-page-more/iw-page-more'
import { getDianpingProductDetail } from '@/lib/shareTemplate'
const currentUser = localEvent.get('UserInfo')
import localEvent from '@/lib/localstorage'
import { urlencode } from '@/lib/string'
import StarView from '@/components/iw-star/iw-star'
import { getLocalName } from '@/lib/user'
import MescrollDetail from '@/components/iw-detail-refresh/iw-detail-refresh.vue'

export default {
  components: {
    feedDianping,
    FooterMenu,
    PageMore,
    StarView,
    MescrollDetail
  },
  data() {
    return {
      pageOption: {},
      title: '产品服务',
      loading: 1,
      id: '',
      userName: currentUser.name,
      detail: {
        reviews: 0,
        followers: 0,
        is_followed: 0,
        related_tags: []
      },
      isFollwers: false,
      swiperOption: {
        loop: false,
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 60,
          modifier: 2,
          slideShadows: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      productComments: [],
      shareOption: {},
      iconMenus: [],
      star: 0,
      animObjects: [],
      is_FollWers: false
    }
  },
  computed: {
    requestData() {
      return {
        tag_name: this.id
      }
    },
    footerMenus() {
      return [{
        icon: 'icon-yaoqing',
        text: '邀人点评',
        number: 0,
        disable: false,
        rightLine: true,
        isLight: false,
        is_FollWers: false
      },
      {
        icon: 'icon-shoucang',
        text: '关注',
        number: this.detail.followers,
        disable: this.detail.is_followed,
        rightLine: true,
        isLight: false,
        is_FollWers: this.is_FollWers
      },
      {
        // icon: 'icon-pinglun',
        text: '写点评',
        number: 0,
        disable: false,
        rightLine: false,
        isLight: true,
        is_FollWers: false
      }]
    }
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
    this.refreshPageData()
  },
  mounted() {
  },
  onNavigationBarButtonTap(e) {
    this.$refs.share.show(true)
  },
  methods: {
    toRoute(url) {
      uni.navigateTo({ url: url })
    },
    finish() {
      this.loading = 0
      this.title = '产品服务'
      this.getShareOption()
    },
    init() {
    },
    openApp() {

    },
    waitGoDianping(rating) {
      localEvent.set('dianping_rating', { rating: rating })
      setTimeout(() => {
        this.star = 0
        this.goDianping()
      }, 500)
    },
    toResume(uuid) {
      uni.navigateTo('/share/resume?id=' + uuid + '&goback=1' + '&time=' + (new Date().getTime()))
    },
    showItemMore(data) {
      this.iconMenus = []
      this.shareOption = data.shareOption
      this.$refs.share.share()
    },
    joinShare() {
      this.getShareOption()
      this.$refs.share.share()
    },
    goChat(uid) {
      userAbility.jumpToChat(uid, this)
    },
    refreshPageData(loading = true) {
      const id = this.pageOption.name
      this.loading = loading
      if (!id) {
        ui.toast('请求异常')
        uni.navigateBack()
        return
      }
      this.id = id

      getProductComments(this, id, 3, (productComments) => {
        this.productComments = productComments
      })
    },
    getShareOption() {
      this.iconMenus = []
      var getUserName = getLocalName()
      var shareOption = getDianpingProductDetail(
        getUserName,
        this.detail.name,
        this.detail.summary,
        this.detail.logo
      )
      this.shareOption = Object.assign(this.shareOption, shareOption)
    },
    goDianping() {
      userAbility.jumpToDianpingAdd(this, urlencode(this.detail.name))
    },
    getAnimObject(item) {

    },
    clickCollect() {
      collectProduct(this, this.detail.id, () => {
      }, () => {
        this.is_FollWers = false
        this.isFollwers = false
        this.detail.followers--
        this.detail.is_followed = 0
      })
    },
    footerMenuClickedItem(item) {
      switch (item.text) {
        case '写点评':
          this.goDianping()
          break
        case '关注':
          collectProduct(this, this.detail.id, () => {
            this.detail.followers++
            this.isFollwers = true
            this.is_FollWers = true
          }, () => {
            this.is_FollWers = false
            this.isFollwers = true
            this.detail.followers--
            this.detail.is_followed = 0
          })
          break
        case '邀人点评':
          this.joinShare()
          break
      }
    }
  }
}
</script>

<style scoped lang="less">
    .mui-content {
        background: #ffffff;
        bottom: 100upx;
    }
    .recommenBanners {
        height: 246upx;
        padding-top: 87.98upx;
        .swiper-slide {
            width: auto !important;
        }
    }
    .topMore {
        float: right;
        color: #3C3E44;
        margin-top: 19.96upx;
        font-size: 42upx;
    }
    .product-introduce {
        width: 685.96upx;
        margin: 0 auto;
        padding: 19.96upx 0 33.98upx;
        background: #ffffff;
        border-bottom-left-radius: 39.98upx;
        border-bottom-right-radius: 39.98upx;
        box-shadow: 0upx 13.96upx 39.98upx 0upx rgba(240, 242, 245, 1);
        .companyLogo {
            width: 120upx;
            height: 120upx;
            margin: 0 auto 19.96upx;
            overflow: hidden;
            border-radius: 7.96upx;
            .image {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .companyNmae {
            color: #444444;
            font-size: 36upx;
            text-align: center;
            line-height: 49.96upx;
        }
        .companyMark {
            color: #FCC816;
            font-size: 21.98upx;
            line-height: 30upx;
            text-align: center;
            margin-top: 15.98upx;
            .stars {
                display: inline-block;
            }
            .starViewWrapper {
                top:7.96upx;
            }
            .starsText {
                display: inline-block;
                position: relative;
                top: -1.96upx;
            }
            .comment {
                color: #B4B4B6;
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
        .companyDescribe {
            color: #808080;
            font-size: 24upx;
            padding: 0 31.96upx;
            margin-top: 18upx;
            line-height: 37.96upx;
            letter-spacing: 0.013rem
        }
        .supply {
            text-align: right;
            padding: 0 31.96upx;
            .span {
                color: #444444;
                font-size: 24upx;
                line-height: 33.0upx;
                &:nth-of-type(1) {
                    color: #B4B4B6;
                    margin-right: 6upx;
                }
            }
        }
    }

    .optionlList {
        .list {
            color: #444444;
            font-size: 27.98upx;
            padding: 24upx 31.96upx;
            display: flex;
            position: relative;
            line-height: 36upx;
            justify-content: space-between;
            .ranking {
                color: #B4B4B6;
                font-size: 19.96upx;
                right: 66upx;
                position: absolute;
            }
            .iconfont{
                color: #808080;
                margin-top: 6upx;
            }
        }
        .line-river-after {
            &:after {
                left: 31.96upx;
                right: 31.96upx;
            }
        }
    }

    .recommend {
        position: relative;
        /*padding-bottom: 49.96upx;*/
        .recommendTitle {
            position: absolute;
            padding: 21.98upx 31.96upx 0;
            .span {
                &:nth-of-type(1) {
                    color: #444444;
                    font-size: 31.96upx;
                    line-height: 45.0upx;
                    margin-top: 21.98upx;
                }
            }
        }
    }

    .recommendList {
        width: 609.0upx;
        margin: 0 auto 49.96upx;
        padding: 19.96upx 30upx;
        background: #F7F8FA;
        border-radius: 15.98upx;
        overflow: hidden;
        .avatar {
            width: 87.98upx;
            height: 87.98upx;
            float: left;
            .image {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .personalInfo {
            float: left;
            margin-top: 6upx;
            margin-left: 19.96upx;
            .name {
                color: #565656;
                line-height: 39.98upx;
                font-size: 27.98upx;
            }
            .good {
                width: 337.50upx;
                color: #B4B4B6;
                font-size: 24upx;
                line-height: 33.0upx;
            }
        }
        .speak {
            float: right;
            margin-top: 16.96upx;
            .span {
                color: #03AEF9;
                font-size: 24upx;
                padding: 0 19.96upx;
                line-height: 54upx;
                display: inline-block;
            }
            .border-football {
                &:after {
                    border-color: #03AEF9;
                }
            }
        }
    }

    .allDianPing {
        padding: 0 31.96upx;
        color: #444444;
        font-size: 31.96upx;
        line-height: 87.98upx;
    }

    .openAllDianPing {
        text-align: center;
        font-size: 27.98upx;
        color: #808080;
        line-height: 87.98upx;
    }

    .component-score {
        padding: 24.98upx 31.96upx 30upx;
        .text {
            color: #B4B4B6;
            font-size: 24upx;
            line-height: 33.0upx;
            margin-bottom: 15.98upx;
        }
        .stars {
            .iconfont{
                font-size: 45.98upx;
                color: #FCC816;
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
    .feedBack {
        padding: 30upx 0 60upx;
        text-align: center;
        .text {
            color: #B4B4B6;
            font-size: 24upx;
            line-height: 33.0upx;
            .span {
                color: #03AEF9;
                font-size: 24upx;
                font-family:PingFangSC-Medium;
            }
        }
    }
    .container-menuFooter .menu .iconWrapper {
        color: red;
    }

    .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 180upx;
        text-align: right;
        padding-right: 31.96upx;
    }
</style>

<style>
    .recommenBanners .swiper-pagination-bullet {
        width: 5px; /* px不转换 */
        height: 5px; /* px不转换 */
        margin: 0 2px !important; /* px不转换 */
        background: #D8D8D8;
        opacity: 1;
    }

    .recommenBanners .swiper-pagination-bullets .swiper-pagination-bullet-active {
        background: #03AEF9;
        width: 7.5px; /* px不转换 */
        border-radius: 100px !important; /* px不转换 */
    }

    .recommenBanners .container-menuFooter .menu .iconWrapper .iconfont{
        color: red;
    }
</style>
