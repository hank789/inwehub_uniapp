<template>
  <view>
    <view class="container-feed-item feed-currency" @tap.stop.prevent="toDetail(item)" hover-class="hoverClass" :hover-stop-propagation="true">
      <UserInfo
        :uuid="item.user.uuid"
        :avatar="item.user.avatar"
        :realname="item.title"
        :is-show-position-and-company="false"
        :is-expert="item.user.is_expert?1:0"
        :time="item.created_at"
        :address="item.feed.current_address_name"
        :show-set-top="item.top"
        hover-class="hoverClass"
        :hover-stop-propagation="true"
      />
      <view class="currency-title text-line-5 feed-title"><view>{{ item.feed.title }}</view></view>
      <view class="feed-open-all font-family-medium" @tap.stop.prevent="extendAll">展开全部</view>
      <!--图片-->
      <view
        v-if="itemObj.feed.img.length && item.feed.submission_type !== 'link'"
        class="container-images container-images-discover"
        :class="'container-images-' + (itemObj.feed.img.length)"
      >

        <view v-for="(img, imgIndex) in itemObj.feed.img" :key="imgIndex" class="container-image" :class="'container-image-' + imgIndex">
          <autoWidthHeight :src="img" v-if="itemObj.feed.img.length === 1"></autoWidthHeight>
          <image mode="aspectFit" class="image" :src="img | imageSuffix(226, 226)" :lazy-load="true" v-else />
          </view>
      </view>
      <!--链接-->
      <view v-if="item.feed.submission_type === 'link'" class="container-feed-link-box" @tap.stop.prevent="goArticle(item)">
        <view class="feed-link-box">
          <view class="linkImg"><image class="image" mode="aspectFill" :src="item.feed.img" width="44" height="44" /></view>
          <view class="linkText">
            <view class="firstSpan font-family-medium text-line-2">{{ item.feed.article_title }}</view>
            <view class="twoSpan">{{ item.feed.domain }}</view>
          </view>
        </view>
      </view>
      <!--PDF-->
      <view v-if="itemObj.feed.files.length" class="container-pdf-box">
        <view v-for="(pdf, pdfIndex) in itemObj.feed.files" :key="pdfIndex" class="feed-pdf-box">
          <view class="pdfIcon">
            <text class="iconfont icon-pdf" />
          </view>
          <view class="pdfText">
            <view class="font-family-medium text-line-2">{{ pdf.name }}</view>
          </view>
        </view>
      </view>
      <!--操作区-->
      <view class="feed-moreOperation">

        <view class="feed-mord" @tap.stop.prevent="showItemMore" hover-class="hoverClass" :hover-stop-propagation="true">
          <text class="iconfont icon-gengduo1" />
        </view>
        <view class="feed-operation">

          <view class="first">
            <view class="span" @tap.stop.prevent="toComment" hover-class="hoverClass" :hover-stop-propagation="true">
              <text class="iconfont icon-pinglun" /><view v-if="localItem.feed.comment_number" class="i">{{ localItem.feed.comment_number }}</view>
            </view>
            <view class="span" :class="localItem.feed.is_downvoted ? 'activeSpan':''" @tap.stop.prevent="discoverDown()" hover-class="hoverClass" :hover-stop-propagation="true">
              <text class="iconfont icon-cai" /><view v-if="localItem.feed.downvote_number" class="i">{{ localItem.feed.downvote_number }}</view>
            </view>
            <view class="span" :class="localItem.feed.is_upvoted ? 'activeSpan':''" @tap.stop.prevent="dianpingDiscoverUp()" hover-class="hoverClass" :hover-stop-propagation="true">
              <text class="iconfont icon-zan" /><view v-if="localItem.feed.support_number" class="i">{{ localItem.feed.support_number }}</view>
            </view>
          </view>
        </view>

      </view>

      <view class="line-river-after line-river-after-top" />
    </view>
  </view>
</template>

<script>

import { upvote, downVote } from '@/lib/discover'
import UserInfo from '@/components/iw-discover/user-info.vue'
import { getTextDiscoverDetail } from '@/lib/shareTemplate'
import { urlencode } from '@/lib/string'
import autoWidthHeight from '@/components/iw-image/autowidthheight'

export default {
  components: {
    UserInfo,
    autoWidthHeight
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      showUpvo: false,
      shareOption: {},
      localItem: this.item
    }
  },
  computed: {
    itemObj() {
      var item = JSON.parse(JSON.stringify(this.item))
      if (typeof item.feed.img === 'string') {
        if (item.feed.img) {
          item.feed.img = [item.feed.img]
        } else {
          item.feed.img = []
        }
      }

      if (typeof item.feed.files === 'string') {
        if (item.feed.files) {
          item.feed.files = [item.feed.files]
        } else {
          item.feed.files = []
        }
      }
      return item
    }
  },
  created() {

  },
  methods: {
    dianpingDiscoverUp(index) {
      upvote(this, this.item.feed.submission_id, (response) => {
        this.localItem.feed.support_number++
        this.localItem.feed.is_upvoted = 1
        this.showUpvo = true

      }, (response) => {
        this.showUpvo = false
        this.localItem.feed.support_number--
        this.localItem.feed.is_upvoted = 0
      })
    },
    discoverDown() {
      downVote(this, this.item.feed.submission_id, (response) => {
        this.localItem.feed.downvote_number++
        this.localItem.feed.is_downvoted = 1
      }, (response) => {
        this.localItem.feed.downvote_number--
        this.localItem.feed.is_downvoted = 0
      })
    },
	goArticle(item) {
		const data = {
			id: item.feed.submission_id,
			title: item.feed.article_title,
			url: item.feed.link_url,
			img: item.feed.img,
			slug: item.feed.slug,
			h5Url: this.$ls.get('webRoot') + '/#/' + item.feed.comment_url
		}

		uni.navigateTo({
			url: `/pages/webview/article?data=${urlencode(JSON.stringify(data))}`
		})
	},
    toDetail(item) {
      uni.navigateTo({ url: '/pages/discover/detail?slug=' + item.feed.slug })
    },
    toComment() {
      uni.navigateTo({ url: '/pages/comment/index?slug=' + this.item.feed.slug + '&id=' + this.item.id + '&category_id=' + this.item.feed.category_id })
    },
    showDownloadTip() {

    },
    showItemMore() {
      this.shareOption = getTextDiscoverDetail(
        this.item.feed.comment_url,
        this.item.feed.title,
        this.item.user.avatar,
        this.item.user.name,
        this.item.feed.group.name
      )
      this.$emit('showPageMore', { shareOption: this.shareOption, item: this.item })
    }
  }
}
</script>

<style lang="less">
  .container-images-2 .container-image{
    width:216upx;
    height:216upx;
  }
    .container-images-2 .container-image .image{
      width:216upx;
      height:216upx;
    }
  .container-images-3 .container-image{
    width:216upx;
    height:216upx;
  }
    .container-images-3 .container-image .image{
      width:216upx;
      height:216upx;
    }

  .container-images-4 .container-image{
      width:216upx;
      height:216upx;
  }
  .container-images-4 .container-image .image{
      width:216upx;
      height:216upx;
  }
  .container-images-5 .container-image{
      width:216upx;
      height:216upx;
  }
  .container-images-5 .container-image .image{
      width:216upx;
      height:216upx;
  }
  .container-images-6 .container-image{
      width:216upx;
      height:216upx;
  }
  .container-images-6 .container-image .image{
      width:216upx;
      height:216upx;
  }
  .container-images-7 .container-image{
      width:216upx;
      height:216upx;
  }
  .container-images-7 .container-image .image{
      width:216upx;
      height:216upx;
  }
  .container-images-8 .container-image{
      width:216upx;
      height:216upx;
  }
  .container-images-8 .container-image .image{
      width:216upx;
      height:216upx;
  }
  .container-images-9 .container-image{
      width:216upx;
      height:216upx;
  }
  .container-images-9 .container-image .image{
      width:216upx;
      height:216upx;
  }

    .feed-currency {
        .line-river-after {
            margin-top: 19.96upx;
            &:after {
                left: 31.96upx;
                right: 31.96upx;
            }
        }
        .currency-title {
            color: #444444;
            font-size: 27.98upx;
            line-height: 43.96upx;
            margin-top: 1.96upx;
            letter-spacing: 0.98upx;
        }
        .userInfoWrapper {
            padding: 0 31.96upx !important;
            .mui-media-body {
                margin-left: 75.98upx;
                color: #444444;
                font-size: 25.96upx;
                font-family: PingFangSC-Medium;
                .detail {
                    color: #B4B4B6;
                    font-size: 21.98upx;
                    font-family: PingFangSC-Regular;
                }
            }
        }
    }

    .container-feed-item {
        position: relative;
        padding-top: 39.98upx;
        .feed-address {
            color: #B4B4B6;
            font-size: 21.98upx;
            position: absolute;
            top: 31.96upx;
            left: 223.96upx;
        }
        .feed-title {
            padding: 0 31.96upx;
        }
        .feed-open-all {
            color: #03AEF9;
            font-size: 25.96upx;
            margin-top: 15.98upx;
            display: none;
            padding: 0 31.96upx;
            line-height: 36upx;
            &.showOpenAll {
                display: block;
            }
        }

        .container-images {
            padding: 19.96upx 30upx 0;

        }
        .container-feed-link-box {
            padding: 0 31.96upx;
            .feed-link-box {
                background: #F7F8FA;
                border-radius: 7.96upx;
                padding: 19.96upx;
                display: flex;
                margin-top: 24upx;
                margin-bottom: 19.96upx;
                .linkImg {
                    width: 87.98upx;
                    height: 87.98upx;
                    .image {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 7.96upx;
                    }
                }
                .linkText {
                    width: 537.98upx;
                    margin-left: 19.96upx;
					.firstSpan {
						width: inherit;
						color: #444444;
						font-size: 25.96upx;
						line-height: 39.98upx;
						letter-spacing: 0.98upx;
					}
					.twoSpan {
						color: #B4B4B6;
						font-size: 21.98upx;
					}
                }
            }
        }
        .container-pdf-box {
            padding: 0 31.96upx;
            .feed-pdf-box {
                background: #F7F8FA;
                border-radius: 7.96upx;
                padding: 19.96upx 19.96upx;
                display: flex;
                margin-top: 19.96upx;
                .pdfIcon {
                    width: 87.98upx;
                    height: 87.98upx;
                    text-align: center;
                    border-radius: 7.96upx;
                    background: #DF6F5A;
                    .iconfont{
                        color: #ffffff;
                        font-size: 67.96upx;
                        margin-top: 9.98upx;
						line-height: 87.98upx;
                    }
                }
                .pdfText {
                    width: 537.98upx;
                    margin-left: 19.96upx;
                    .font-family-medium {
                        width: inherit;
                        color: #444444;
                        font-size: 25.96upx;
                        line-height: 39.98upx;
                        letter-spacing: 0.98upx;
                    }
                }
            }
        }
        .feed-group {
            width: fit-content;
            height: 42upx;
            color: #444444;
            padding: 0 19.96upx;
            font-size: 21.98upx;
            line-height: 42upx;
            background: #F7F8FA;
            border-radius: 199.96upx;
            display: flex;
            margin-top: 19.96upx;
            margin-left: 31.96upx;
            &.moveUp {
                margin-top: 9.98upx;
            }
            .image {
                width: 21.98upx;
                height: 21.98upx;
                margin-top: 9.98upx;
                margin-right: 6upx;
            }
        }
        .feed-moreOperation {
            margin-top: 19.96upx;
            color: #808080;
            display: flex;
            padding: 0 25.96upx;
            justify-content: space-between;
            .feed-mord {
                padding: 9.98upx;
                color: #808080;
            }
            .feed-operation {
                position: relative;
                padding-top: 9.98upx;
                .span {
                    display: inline-block;
                    padding: 9.98upx 19.96upx;
                    font-size: 21.98upx;
                    color: #444444;
                    /*margin-left: 39.98upx;*/
                    .iconfont{
                        margin-right: 9.98upx;
                        color: #808080;
                        font-size: 30upx;
                    }
                    .i {
                        display: inline-block;
                        font-style: normal;
                    }
                }
                .posiZan {
                    position: absolute;
                    top: 12upx;
                    right: 32upx;
                    .upvoted {
                        width: 61.96upx;
                        height: 61.96upx;
                        display: inline-block;
                        position: absolute;
                        top: -7.50upx;
                        right: 30upx;
                        .iconfont{
                            position: absolute;
                            top: 0;
                            right: 0;
                        }
                    }
                }
                .activeSpan {
                    color: #B4B4B6;
                    .iconfont{
                        color: #03AEF9;
                    }
                    .numberColor {
                        color: #03AEF9;
                    }
                }
            }
        }
    }

    .link {
        padding: 19.96upx 31.96upx 0;
        /*margin-bottom: 34.96upx;*/
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
                .div {
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
                    }
                    .comment {
                        color: #B4B4B6;
                        font-size: 21.98upx;
                    }
                }
            }
        }
        .mark {
            display: flex;
            padding: 0 31.96upx;
            margin-top: -15.98upx;
            margin-bottom: 13.96upx;
            .stars {
                color: #FCC816;
            }
            .text {
                color: #FCC816;
                font-size: 21.98upx;
                margin-top: 3.98upx;
                margin-left: 6upx;
            }
        }
    }

    .container-images-discover .image{
      width:452upx;
      height:452upx;
	  object-fit: contain;
    }
</style>
