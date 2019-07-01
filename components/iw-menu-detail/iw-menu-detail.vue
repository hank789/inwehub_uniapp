<template>
  <view class="container-footer">
    <view class="footerLeft" @tap.stop.prevent="WriteComment()">
      <view class="footerMenuOne">说点什么</view>
    </view>
    <view class="footerRight">

      <view v-for="(menuItem, index) in iconOptions" :key="index" class="collectionComment" :class="[{showNumer: menuItem.showNumber || menuItem.ShowIsUpVote }]" :title="menuItem.text" @tap.stop.prevent="detailMenuIcon(menuItem)" hover-class="hoverClass" :hover-stop-propagation="true">
        <view class="iconWrapper" :class="{active: menuItem.showClass}" :title="menuItem.text">
          <text class="iconfont" :class="menuItem.icon" />
        </view>
        <text class="span" v-if="menuItem.number">{{ menuItem.number }}</text>
      </view>

      <view v-show="isDetailUpVote" class="detailFollwers" @tap.click.prevent="clickUpVote" />
      <view v-if="isNumUpVote" class="collectProduct" @tap.click.prevent="clickUpVote">
        <text class="iconfont icon-yizan" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default: {}
    },
    iconOptions: {
      type: Array,
      default: []
    },
    isDetailUpVote: {
      type: Boolean,
      default: false
    },
    isNumUpVote: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  methods: {
    detailMenuIcon(item) {
      this.$emit('detailMenuIcon', item)
    },
    WriteComment() {
      this.$emit('WriteComment')
    },
    clickUpVote() {
      this.$emit('clickUpVote')
    }
  }
}
</script>

<style scoped lang="less">

    .container-footer {
        position: absolute;
        bottom: 0;
        width: 750upx;
        left: 50%;
        height: 100upx;
        overflow: hidden;
        margin-left: -375.0upx !important;
        background: #FFFFFF;
        &:before {
            position: absolute;
            top: 0;
            width: 100%;
            height: 2upx;
            content: '';
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
            background-color: #dcdcdc;
        }
        .footerLeft {
            display: flex;
            font-size: 27.98upx;
            float: left;
            padding: 18upx 0 9.98upx 31.96upx;
            .footerMenuTwo {
                display: flex;
                .containerBtn {
                    display: flex;
                    width: 222upx;
                    height: 72upx;
                    color: #ffffff;
                    margin-right: 9.98upx;
                    line-height: 72upx;
                    text-align: center;
                    border-radius: 15.98upx;
                    justify-content: center;
                }
                .noBullish {
                    background: #FA4975;
                }
                .bullish {
                    background: #03AEF9;
                }
            }
            .footerMenuOne {
                width: 369.98upx;
                height: 67.96upx;
                color: #C8C8C8;
                line-height: 67.96upx;
                border-radius: 7.96upx;
                background: #F3F4F6;
                padding-left: 19.96upx;
                &.activeRed {
                    color: #FA4975;
                }
                &.activeBlue {
                    color: #03AEF9;
                }
            }
        }
        .footerRight {
            color: #B4B4B6;
            font-size: 19.96upx;
            text-align: center;
            display: flex;
            position: relative;
            .collectionComment {
                width: 99.98upx;
                height: 97.96upx;
                flex-grow:1;
                color: #808080;
                padding-top: 27.98upx;
                position: relative;

                .iconWrapper{
                    width:100%;
                    height:100%;
                }

                &.showNumer {
                    .iconfont{
                      color: #03AEF9;
                    }
                    .span {
                    }
                }
                .span {
                    position: absolute;
                    top: 21.98upx;
                    left: 61.96upx;
                    color: #FA4975;
                    font-size: 19.96upx;
                    margin-top: -7.96upx;
                }
            }
            .iconfont{
                font-size: 31.96upx;
                &.active {
                  color: #03AEF9;
                }
            }
        }
    }

    .collectProduct {
        position: absolute;
        top: 27.98upx;
        right: 114upx;
        .iconfont{
            color: #03AEF9;
            font-size: 31.96upx;
        }
    }
    .detailFollwers {
        width: 57.98upx;
        height: 57.98upx;
        position: absolute;
        top: 15.0upx;
        right: 99.98upx;
    }
</style>
