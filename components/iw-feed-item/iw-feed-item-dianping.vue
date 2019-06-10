<template>
  <view>
    <view class="commentList" @tap.stop.prevent="toDetail()">
      <view class="commentUser" @tap.stop.prevent="toResume()">
        <view class="userInfo">
          <view class="avatar">
            <image mode="aspectFill" class="image" :src="item.user.avatar" :is-lazyload="true" width="34" height="34" />
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
        <view v-for="(img, imgIndex) in itemObj.feed.img" :key="imgIndex" class="container-image"><image mode="aspectFill" class="image" :src="img" :is-lazyload="true" width="108" height="108" /></view>
      </view>

      <view v-if="item.feed.tags && isShowLink" class="link">
        <view class="linkBox" @tap.stop.prevent="goProductDetail()">
          <view v-if="!item.feed.tags[0].logo" class="span linkIimg">
            <text class="iconfont icon-biaozhunlogoshangxiayise " />
          </view>
          <view v-else class="productLogo border-football">
            <image mode="aspectFill" class="image" :src="item.feed.tags[0].logo" :is-lazyload="true" width="45" height="45" />
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
        <view class="feed-mord" @tap.stop.prevent="showItemMore">
          <text class="iconfont icon-gengduo1 " />
        </view>
        <view class="feed-operation">

          <view class="first">
            <view class="span" @tap.stop.prevent="toDetail()">
              <text class="iconfont icon-pinglun " /><view v-if="item.feed.comment_number" class="i">{{ item.feed.comment_number }}</view>
            </view>

            <view class="span" :class="item.feed.is_downvoted ? 'activeSpan':''" @tap.stop.prevent="discoverDown()">
              <text class="iconfont icon-cai " /><view v-if="item.feed.downvote_number" class="i">{{ item.feed.downvote_number }}</view>
            </view>
          </view>

          <view class="posiZan">

            <view class="span" :class="item.feed.is_upvoted ? 'activeSpan':''" @tap.stop.prevent="dianpingDiscoverUp(index)">
              <text class="iconfont icon-zan " />
              <text v-if="item.feed.is_upvoted === 1" class="iconfont icon-yizan yizan " /><view v-if="item.feed.support_number" class="i numberColor">{{ item.feed.support_number }}</view>
            </view>
            <view v-show="showUpvo" :class="'zan' + index" class="span upvoted" @tap.stop.prevent="dianpingDiscoverUp(index)" />

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

export default {
  components: {

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
      showUpvo: false
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
    toDetail() {
      uni.navigateTo({url: '/pages/dianping/comment?slug=' + this.item.feed.slug})
    },
    dianpingDiscoverUp(index) {
      upvote(this, this.item.feed.submission_id, (response) => {
        this.item.feed.support_number++
        this.item.feed.is_upvoted = -1
        this.showUpvo = true
      }, (response) => {
        this.showUpvo = false
        this.item.feed.support_number--
        this.item.feed.is_upvoted = 0
      })
    },
    discoverDown() {
      downVote(this, this.item.feed.submission_id, (response) => {
        this.item.feed.downvote_number++
        this.item.feed.is_downvoted = response.data.support_percent
      }, (response) => {
        this.item.feed.downvote_number--
        this.item.feed.is_downvoted = 0
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
      this.$emit('showPageMore', this.shareOption)
    }
  }
}
</script>

<style lang="less">

    .commentList {
        margin-top: 39.98upx;
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
                            font-size: 25.96upx;
                            line-height: 36.98upx;
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
                .first {
                    margin-right: 90upx;
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
</style>
