
<template>
	<view class="uni-tab-bar">

		<view class="container-control-logoAndTabsAndSearch searchBoxShadow">
			<view class="topSearchWrapper" @tap.stop.prevent="$router.pushPlus('/searchAll','list-detail-page-three')">
				<view class="searchFrame">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-sousuo"></use>
					</svg>
					<span>搜产品、问答、圈子、内容</span>
				</view>
			</view>
			<view class="addIcon" @tap.stop.prevent="toDiscoverAdd">
				<text class="iconfont icon-tianjia"></text>
			</view>
		</view>

		<view class="component-feed-item-guide feedListNo">
			<view class="feed-IconImg">
				<image src="../../static/images/feed@3x.png"></image>
			</view>
			<view class="desc">关注你感兴趣的人和圈子，了解他们的最新动态</view>
			<view class="buttonWrapper" @tap.stop.prevent="$router.pushPlus('/userGuide/stepone?from=feed')">
				<button>去看看</button>
			</view>
		</view>

	</view>
</template>

<script>
	import { getFeedList } from '@/lib/feed'

	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			getFeedList(2, (res) => {
				this.list = res.data
			})
		}
	}
</script>
<style lang="less">
  .mui-content{
    background: #fff;
  }
  .listWrapper {
    top: 1.173rem !important;
    bottom: 50px !important; /* px不转换 */
  }


  .immersed44 .listWrapper{
    bottom: 84px !important; /* px不转换 */
  }


  .component-recommendFollow {
    padding: 0.293rem 0 0rem;
    .line-river-after:after {
      left: 0.426rem;
      right: 0.426rem;
    }
    .swiper-slide {
      width: auto !important;
      padding: 0.293rem 0 0.426rem;
      &:first-child {
        .recommendFollowList {
          margin-left: 0.426rem;
        }
      }
      &:last-child {
         .recommendFollowList {
           margin-right: 0.426rem;
         }
       }
    }
    .recommendFollowWrapper {
      /*padding: 0 0.426rem;*/
      .title {
        color: #444444;
        font-size: 0.426rem;
        line-height: 0.6rem;
        padding: 0 0.426rem;
      }
      .recommendFollowList {
        width: 3.413rem;
        height: 4.546rem;
        padding: 0 0.24rem;
        position: relative;
        background: #FFFFFF;
        margin: 0 0.133rem;
        box-shadow:0rem 0rem 0.346rem 0rem #F2F4F7;
        .recommendListWrapper {
          padding: 0.4rem 0 0;
          position: relative;
          text-align: center;
          .delRecommend {
            position: absolute;
            right: 0;
            top: 0.266rem;
            .icon {
              font-size: 0.213rem;
              color: #DCDCDC;
            }
          }
          .feed-IconImg {
            width: 1.893rem;
            height: 1.173rem;
            margin: 0.666rem auto 0.186rem;
            image {
              width: 100%;
              height: 100%;
            }
          }
          .desc {
            color: #03AEF9;
            font-size: 0.293rem;
            line-height: 0.4rem;
            margin-bottom: 0.88rem;
          }
          .avatar {
            width: 1.333rem;
            height: 1.333rem;
            margin: 0 auto;
            image {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .userName {
            color: #444444;
            font-size: 0.373rem;
            line-height: 0.533rem;
            padding: 0.186rem 0 0.04rem;
          }
          .commonFriend {
            color: #B4B4B6;
            font-size: 0.293rem;
            line-height: 0.4rem;
          }
        }
        .follow {
          width: 2.933rem;
          position: absolute;
          bottom: 0.4rem;
          text-align: center;
          .text {
            height: 0.72rem;
            font-size: 0.32rem;
            padding: 0 0.4rem;
            line-height: 0.72rem;
            background: #03AEF9;
            color: #FFFFFF;
            border-radius: 2.666rem;
            display: inline-block;
            &.active {
              background: #DCDCDC;
              color: #B4B4B6;
            }
          }
        }
      }
    }
  }
  .component-feed-item-guide {
    padding-top: 0.8rem;
    &.feedListNo {
      margin-top: 2.666rem;
      button {
        margin-top: 0.453rem;
      }
    }
    .line-river-after {
      margin-top: 0.8rem;
      &:after {
        left: 0.426rem;
        right: 0.426rem;
      }
    }
    .feed-IconImg {
      width: 3.2rem;
      height: 1.973rem;
      margin: 0 auto;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
  .newLink {
    margin-top: 0.24rem;
    // padding: 0 0.426rem;
    .newLinkBox {
      margin-top: 0.266rem;
      padding: 0.4rem 0.4rem 0.293rem;
      background: #F7F8FA;
      border-radius: 0.106rem;
      .container-image {
        margin-top: 0;
        margin-bottom: 0.213rem;
      }
      image {
        // width: 8.373rem;
        // height: 2.986rem;
        border-radius: 0.106rem;
      }
      .linkContent {
        font-size: 0.373rem;
        color: #808080;
        // line-height: 0.533rem;
      }
      .link {
        font-size: 0.32rem;
        color: #B4B4B6;
      }
    }
  }
  .feedResult {
    .noResult {
      padding-bottom: 0;
    }
    .noContent {
      /*padding-top: 3.2rem;*/
      .buttonWrapper {
        margin-bottom: 0.4rem;
      }
    }
  }
</style>
