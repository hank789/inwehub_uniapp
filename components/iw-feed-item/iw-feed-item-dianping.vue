<template>
  <view>
    <view class="commentList" @tap.stop.prevent="toDetail()" hover-class="hoverClass" :hover-stop-propagation="true">
      <view class="commentUser" @tap.stop.prevent="toResume()" hover-class="hoverClass" :hover-stop-propagation="true">
        <view class="userInfo">
          <view class="avatar avatarInner">
            <image mode="aspectFill" class="image" :src="item.user.avatar" :is-lazyload="true" width="34" height="34" />
            <text class="iconfont icon-zhuanjiabiaozhishixin"  v-show="isExpert"></text>
          </view>
          <view class="userName">
            <view class="userNameTop">
              <view class="span spanFirst font-family-medium">{{ item.title }}</view>
              <view v-if="item.feed.is_recommend" class="border-football">优质</view>
            </view>

            <view class="time">{{ item.created_at }}</view>
          </view>
        </view>
        <view class="mark font-family-medium">{{ item.feed.rate_star }}分</view>
      </view>
      <view class="commentFeedTitle text-line-5 currency-title">{{ item.feed.title }}</view>
      <view class="feed-open-all font-family-medium" @tap.stop.prevent="extendAll">展开全部</view>

      <view
        v-if="itemObj.feed.img.length && item.feed.submission_type === 'review'"
        class="container-images container-images-discover"
        :class="'container-images-' + (itemObj.feed.img.length)"
      >
        <view v-for="(img, imgIndex) in itemObj.feed.img" :key="imgIndex" class="container-image">
          <autoWidthHeight :src="img" v-if="itemObj.feed.img.length === 1"></autoWidthHeight>
          <image mode="aspectFill" class="image" :src="img | imageSuffix(226, 226)" :lazy-load="true" v-else />
        </view>
      </view>

      <view v-if="item.feed.tags && isShowLink" class="link">
        <view class="linkBox" @tap.stop.prevent="goProductDetail()">
          <view v-if="!item.feed.tags[0].logo" class="span linkIimg">
            <text class="iconfont icon-biaozhunlogoshangxiayise " />
          </view>
          <view v-else class="productLogo border-football">
            <image mode="aspectFit" class="image" :src="item.feed.tags[0].logo  | imageSuffix(45, 45)" :lazy-load="true" width="45" height="45" />
          </view>
          <view class="linkContent">
            <view v-if="item.feed.tags[0].name" class="div text-line-1">{{ item.feed.tags[0].name }}</view>
            <view v-else class="span seat" />
            <view class="mark div">
              <view class="stars">
                <StarView :rating="item.feed.tags[0].review_average_rate" />
              </view>
              <view class="text">{{ item.feed.tags[0].review_average_rate }}分</view><view class="i" />
              <view class="comment">{{ item.feed.tags[0].reviews }}条评论</view>
            </view>
          </view>
        </view>
      </view>

      <view class="feed-moreOperation">
        <view class="feed-mord" @tap.stop.prevent="showItemMore" hover-class="hoverClass" :hover-stop-propagation="true">
          <text class="iconfont icon-gengduo1 " />
        </view>
        <view class="feed-operation">

          <view class="first">
            <view class="span" @tap.stop.prevent="toDetail()" hover-class="hoverClass" :hover-stop-propagation="true">
              <text class="iconfont icon-pinglun " /><view v-if="localItem.feed.comment_number" class="i">{{ localItem.feed.comment_number }}</view>
            </view>

            <view class="span" :class="localItem.feed.is_downvoted ? 'activeSpan':''" @tap.stop.prevent="discoverDown()" hover-class="hoverClass" :hover-stop-propagation="true">
              <text class="iconfont icon-cai " /><view v-if="localItem.feed.downvote_number" class="i">{{ localItem.feed.downvote_number }}</view>
            </view>

            <view class="span" :class="localItem.feed.is_upvoted ? 'activeSpan':''" @tap.stop.prevent="dianpingDiscoverUp()" hover-class="hoverClass" :hover-stop-propagation="true">
              <text class="iconfont icon-zan " /><view v-if="localItem.feed.support_number" class="i">{{ localItem.feed.support_number }}</view>
            </view>
          </view>

        </view>
      </view>
      <view class="line-river-after line-river-after-top" />
    </view>
  </view>
</template>

<script>
import { getDianpingCommentDetail } from '@/lib/shareTemplate'
import { upvote, downVote } from '@/lib/discover'
import StarView from '@/components/iw-star/iw-star'
import autoWidthHeight from '@/components/iw-image/autowidthheight'

export default {
  components: {
    StarView,
    autoWidthHeight
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    isShowLink: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      showUpvo: false,
      localItem: this.item
    }
  },
  computed: {
    isExpert () {
      return !!this.item.user.is_expert
    },
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
  mounted() {
  },
  methods: {
    goProductDetail () {
      uni.navigateTo({url: '/pages/dianping/product?name=' + encodeURIComponent(this.item.feed.tags[0].name)})
    },
    toResume () {
      var uuid = this.item.user.uuid
      if (!uuid) {
        return false
      }

      if (this.isNiming) {
        return false
      }

      uni.navigateTo({url: '/pages/my/resume?id=' + uuid + '&goback=1' + '&time=' + (new Date().getTime())})
    },
    toDetail() {
      uni.navigateTo({url: '/pages/dianping/comment?slug=' + this.item.feed.slug})
    },
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
    showDownloadTip() {

    },
    showItemMore() {
      this.shareOption = getDianpingCommentDetail(
        this.item.feed.slug,
        this.item.feed.title,
        this.item.user.avatar,
        this.item.user.name,
        this.item.feed.rate_star
      )
      this.$emit('showPageMore', {shareOption: this.shareOption, item: this.item})
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
    .commentList {
        padding-top: 39.98upx;
        .line-river-after {
            margin-top: 19.96upx;
            &:after {
                left: 31.96upx;
                right: 31.96upx;
            }
        }
        .container-images {
            margin-top: 19.96upx;
        }
        .commentUser {
            display: flex;
            padding: 0 31.96upx;
            justify-content: space-between;
            .userInfo {
                display: flex;
                .avatar {
                    width: 67.96upx;
                    height: 67.96upx;
                    margin-right: 15.98upx;
                    .image {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                }
                .userName {
                    /*margin-top: -3.98upx;*/
                    .border-football {
                        &:after {
                            border-radius: 15.98upx;
                            border-color: #FA4975;
                        }
                    }
                    .userNameTop {
                        display: flex;
                        .border-football {
                            height: 30upx;
                            color: #FA4975;
                            font-size: 19.96upx;
                            padding: 0 9.98upx;
                            line-height: 30upx;
                            margin-left: 6upx;
                            /*display: inline-block;*/
                        }
                    }
                    .span {
                        &.spanFirst {
                            color: #444444;
                            font-size: 26upx;
                            line-height: 37upx;
                        }
                        &.spanSecond {

                        }
                    }
                    .time {
                        color: #B4B4B6;
                        font-size: 21.98upx;
                        line-height: 30upx;
                        margin-top: 3.98upx;
                    }
                }
            }
            .mark {
                color: #FCC816;
                font-size: 25.96upx;
                line-height: 36.98upx;
            }
        }
        .commentFeedTitle {
            padding: 0 31.96upx;
            color: #444444;
            font-size: 27.98upx;
            line-height: 43.96upx;
            margin-top: 12upx;
            letter-spacing: 0.98upx;
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
        .feed-moreOperation {
            margin-top: 19.96upx;
            color: #808080;
            display: flex;
            padding: 0 25.96upx;
            margin-bottom: 19.96upx;
            justify-content: space-between;
            .feed-mord {

                padding: 9.98upx;
                color: #808080;
            }
            .feed-operation {
                padding-top: 9.98upx;
                position: relative;
                .span {
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
                        font-style: normal;
                    }
                }
                .activeSpan {
                    color: #B4B4B6;
                    .iconfont{
                        color: #03AEF9;
                    }
                    .yizan {
                        font-size: 30upx;
                        margin-right: 13.50upx;
                    }
                    .numberColor {
                        color: #03AEF9;
                    }
                }

                .posiZan {
                    position: absolute;
                    top: 6upx;
                    right: -13.96upx;
                    .upvoted {
                        width: 61.96upx;
                        height: 61.96upx;
                        display: inline-block;
                        position: absolute;
                        top: -7.50upx;
                        right: 30upx;
                        /*padding: 0 0 0 39.98upx;*/
                        .iconfont{
                            position: absolute;
                            top: 0;
                            right: 0;
                        }
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
  }

  .avatarInner{
    position: relative;
  }

  .avatarInner .iconfont{
    position: absolute;
    width: 39.98upx;
    height: 39.98upx;
    right: -7.50upx;
    bottom: -5.26upx;
    font-size: 24upx;
    color: #03aef9;
  }
</style>
