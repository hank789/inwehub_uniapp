<template>
    <view class="red">
        <uni-popup
                :show="showPopupBottomShare"
                :position="'bottom'"
                type="bottom"
                :h5-top="true"
                @hidePopup="hidePopup">

            <div id="sharePageMoreWrapper" class="sharePageMoreWrapper">
                <div class="title">
                    分享到
                  </div>
                <div class="more">
                    <div class="single" @tap.stop.prevent="shareToHaoyou()">
                        <img src="~@/static/images/wechat_2x.png"/>
                        <span>微信</span>
                    </div>
                    <div class="single" @tap.stop.prevent="shareToPengyouQuan()">
                        <img src="~@/static/images/pengyouquan.png"/>
                        <span>朋友圈</span>
                    </div>
                    <div class="single" @tap.stop.prevent="shareToChat()">
                        <img src="~@/static/images/sendFriend@2x.png"/>
                        <span>私信</span>
                    </div>
                    <div class="single" v-if="shareOption.link" @success="shareToCopyLink()">
                        <img src="~@/static/images/copyLink@3x.png"/>
                        <span>复制链接</span>
                    </div>
                </div>

                <div class="line-river-after line-river-after-height"></div>

                <div v-if="iconMenu.length">
                    <div class="more twoLevel">
                        <div class="delete single" @tap.stop.prevent="clickItem(item)"  v-for="(item, index) in iconMenu" :key="index">
          <span class="iconBorder" :class="item.isBookMark ? 'active' : ''">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.icon"></use>
            </svg>
          </span>
                            <span class="text" :class="item.isBookMark ? 'active' : ''">{{item.text}}</span>
                        </div>
                    </div>
                    <div class="line-river-after line-river-after-height"></div>
                </div>
                <div class="cancel" @tap.stop.prevent="hidePopup()"><span class="font-family-medium">取消</span></div>
            </div>

        </uni-popup>
    </view>
</template>
<script>
  import uniPopup from "@/components/uni-popup/uni-popup.vue"

  export default {
    components: {
      uniPopup
    },
    data() {
      return {
        showPopupBottomShare: false
      }
    },
    props: {
      iconMenu: {
        type: Array,
        default: () => {
          return []
        }
      },
      shareOption: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    onLoad() {

    },
    methods: {
      clickItem (item) {
        this.$emit('clickedItem', item)
      },
      hidePopup () {
        this.showPopupBottomShare = false
      },
      shareToCopyLink () {
         // todo 复制到剪切板
      },
      shareToChat () {
        this.hidePopup()
      },
      shareToHaoyou () {

      },
      show () {
        this.showPopupBottomShare = true
      },
      shareToPengyouQuan () {

      }
    }
  }
</script>

<style lang="less" scoped="scoped">
    .red{
        height:100%;
    }

    .line-river-after-height {
        height: 0;
    }
    .shareBtn {
        position: fixed;
        right: 19.96upx;
        top: 19.96upx;
        z-index: 11;
        color: #3c3e44;
        font-size: 42upx;
    }

    .resumeWrapper .shareBtn {
        position: absolute;
        top: 48upx !important;
        font-size: 43.96upx;
        right: 61.96upx;
        color: #808080;
    }

    .mui-content {
        padding: 399.98upx;
        text-align: center;
    }

    .sharePageMoreWrapper {
        text-align: left;
        .title {
            background: #FFF;
            text-align: center;
            font-size: 21.98upx;
            padding: 33.98upx 0 0;
            position: relative;
            color: #B4B4B6;
            line-height: 30upx;
            border-top-left-radius: 36upx;
            border-top-right-radius: 36upx;
        }
        .more {
            background: #fff;
            padding: 25.96upx 33.98upx 18.76upx;
            font-size: 0;
            .single {
                height: 139.96upx;
                display: inline-block;
                img {
                    width: 87.98upx;
                    height: 85.96upx;
                    margin: 0 24upx;
                }
                span {
                    display: block;
                    font-size: 24upx;
                    color: #808080;
                    line-height: 31.96upx;
                    text-align: center;
                    margin-top: -6upx;
                }
            }
        }
        .more.twoLevel {
            padding: 30upx 33.98upx 18.76upx;
            .delete {
                .iconBorder {
                    width: 87.98upx;
                    height: 87.98upx;
                    margin: 0 24upx;
                    line-height: 97.96upx;
                    text-align: center;
                    display: inline-block;
                    border-radius: 15.98upx;
                    border: 1.96upx solid #DCDCDC;
                    color: #C8C8C8;
                    &.active {
                        color: #DCDCDC;
                    }
                    .icon {
                        font-size: 43.96upx;
                    }
                }
            }
            .text {
                display: block;
                font-size: 24upx;
                color: #808080;
                line-height: 31.96upx;
                text-align: center;
                margin-top: 15.98upx;
                &.active {
                    color: #C8C8C8;
                }
            }
        }
    }

    #shareShowWrapper {
        position: absolute;
        right: 0;
        top: 0;
        .icon {
            color: #fff;
            position: absolute;
            right: 30upx;
            top: 19.96upx;
            font-size: 139.96upx;
        }
    }
    .cancel {
        height: 103.96upx;
        line-height: 103.96upx;
        background: #FFF;
        text-align: center;
        span {
            color: #444444;
            font-size: 31.96upx;
        }
    }
</style>
