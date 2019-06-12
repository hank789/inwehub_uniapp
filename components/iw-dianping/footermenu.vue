<template>
  <view v-if="options.length" class="container-menuFooter">
    <template v-for="(item, index) in options">
      <view class="menu" :class="[{lightWidth: item.isLight, is_FollWers: item.is_FollWers , disable: item.disable, 'new': item.isNew}, 'menu_' + index, item.class]" @tap.stop.prevent="clickItem(item)">
        <view class="iconWrapper">
          <text class="iconfont " :class="item.icon" />
        </view>
        <view class="desc">{{ item.text }}{{ item.number?item.number:'' }}</view>
        <view v-if="item.newNum" class="mui-badge">{{ item.newNum }}</view>
      </view>
      <!--<view class="line-vertical" v-if="item.rightLine"></view>-->
    </template>
    <view v-show="isFollwers" class="follwers" @tap.stop.prevent="isCollect" />
    <view v-if="collect" class="collectProduct" @tap.stop.prevent="isCollect">
      <text class="iconfont icon-shoucanghover " />
    </view>
  </view>
</template>

<script type="text/javascript">
export default {
  components: {},
  props: {
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    isFollwers: {
      type: Boolean,
      default: false
    },
    collect: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    clickItem(item) {
      this.$emit('clickedItem', item)
    },
    isCollect() {
      this.$emit('clickCollect')
    }
  }
}
</script>

<style scoped>
    .container-menuFooter .menu.lightWidth .desc {
        width: 186upx !important;
        height: 61.96upx;
        border-radius: 15.98upx;
        background: #03AEF9;
        line-height: 61.96upx !important;
        color: #FFFFFF;
        font-size: 27.98upx;
        top: 21.98upx;
        left: 31.96upx;
    }

    .container-menuFooter .menu.lightWidth {
        position: relative;
    }
    .container-menuFooter .menu.is_FollWers .iconfont{
        color: #ffffff;
    }
    .container-menuFooter .menu .iconWrapper .iconfont{
        color: #808080;
    }
    .container-menuFooter .menu .desc {
        color: #B4B4B6;
    }
    .container-menuFooter .menu.disable .iconWrapper .iconfont{
        color: #fff;
    }

    .container-menuFooter .menu_1 .iconWrapper .iconfont{
        font-size: 43.96upx;
    }
    .follwers {
        width: 57.98upx;
        height: 57.98upx;
        position: absolute;
        top: 6upx;
        left: 345.98upx;
    }
    .follwers .iconfont{
    }
    .collectProduct {
        position: absolute;
        left: 372upx;
    }
    .collectProduct .iconfont{
        color: #FA4975;
        font-size: 43.96upx;
    }

    .container-menuFooter {
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 100upx;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      background: #fff
    }

    .container-menuFooter:before {
      position: absolute;
      width: 100%;
      height: 2upx;
      content: '';
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
      background-color: #dcdcdc
    }

    .container-menuFooter .line-vertical {
      position: relative;
      width: 2upx;
      height: 48upx;
      top: 50%;
      margin-top: -24upx;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      background-color: #dcdcdc
    }

    .container-menuFooter .line-vertical:after {
      display: none
    }

    .container-menuFooter .menu {
      position: relative;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      text-align: center;
      height: 100%
    }

    .container-menuFooter .menu.disable {
      color: #c8c8c8
    }

    .container-menuFooter .menu.new:after {
      content: '';
      position: absolute;
      width: 16upx;
      height: 16upx;
      border-radius: 50%;
      background: #fa4975;
      margin-left: 25.0upx;
      top: 14upx
    }

    .container-menuFooter .menu .iconWrapper {
      margin-top: 14upx
    }

    .container-menuFooter .menu .iconWrapper .iconfont{
      font-size: 38upx;
      line-height: 38upx
    }

    .container-menuFooter .menu .desc {
      position: absolute;
      width: 100%;
      top: 62upx;
      font-size: 22upx;
      line-height: 22upx;
      color: grey
    }

    .container-menuFooter .menu.noRightBorder:after {
      display: none
    }

    .container-menuFooter .menu.light {
      background: url(../../static/images/shareBtnSmall@3x.png) no-repeat;
      background-size: cover
    }
</style>
