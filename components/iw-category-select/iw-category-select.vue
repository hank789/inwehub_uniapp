<template>
  <uni-popup
    :show="isShow"
    :position="'top'"
    type="bottom"
    :h5-top="true"
    @hidePopup="hide"
  >
    <view :class="positionClass" class="dropDownMenuWrapper shareWrapper mui-popover">
      <slot name="dropDownMenuHeader" />
      <scroll-view :scroll-y="true" class="scrollViewHeight">
      <view class="container-select">
        <view class="select-top">
          <view class="type" @tap.stop.prevent="hide">
            <view class="span">选择类型</view>
            <view class="jianTou">
              <text class="iconfont icon-xiangshangjiantou " />
            </view>
          </view>
        </view>
        <view class="mui-scroll-wrapper dropDownScrollWrapper">
          <view class="mui-scroll">
            <view class="listWrapper">
              <view v-for="(item, index) in localTree" :key="index" :class="{active: item.isShow}" class="list">
                <view :class="{active: item.isShow}" class="text ListTitle" @tap.stop.prevent="selectItem(item)">
                  <view class="span">{{ item.name }} {{ parseInt(item.children_count) > 0 ? '(' + item.children_count + ')' : '' }}</view>
                  <text class="iconfont icon-xiangshangjiantou " />
                </view>
                <DropDownMenuChild
                  v-if="item.children && item.children.length"
                  :class="{listChildrenActive: item.isShow, listChildrenHide: !item.isShow}"
                  :tree="item"
                  :depth="1"
                  @selectChange="selectChange"
                />
              </view>

            </view>
          </view>

        </view>

      </view>
      </scroll-view>
      <view v-if="showProductAddBack" id="productAddBack" class="font-family-medium productAddBack" @tap.stop.prevent="ProductAddBack">取消
        <view class="bot" />
      </view>
    </view>
  </uni-popup>
</template>

<script>
import DropDownMenuChild from
  '@/components/iw-category-select/iw-category-select-children.vue'
import uniPopup from '@/components/uni-popup/uni-popup.vue'

export default {
  components: {
    DropDownMenuChild,
    uniPopup
  },
  props: {
    positionClass: {
      type: String,
      default: 'mui-popover-top immersed-top'
    },
    tree: {
      type: Array,
      default: function() {
        return []
      }
    },
    showSelectTop: {
      type: Boolean,
      default: true
    },
    showProductAddBack: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedIterms: [],
      isShow: false
    }
  },
  computed: {
    localTree() {
      return this.tree
    }
  },
  mounted() {
  },
  methods: {
    hide() {
      this.isShow = false
    },
    getClassName(item) {
      return item.isShow ? 'active' : ''
    },
    selectItem(item) {
      if (item.children_count) {
        item.isShow = !item.isShow
        this.$forceUpdate()
      } else {
        this.selectChange({ id: item.id, name: item.name })
      }
    },
    selectChange(data) {
      this.hide()

      // 兼容ios
      if (data.detail) {
        if (data.detail.__args__[0] && data.detail.__args__[0].detail.__args__[0]) {
          data = data.detail.__args__[0].detail.__args__[0]
        }
      }

      // 兼容android
      if (data.detail) {
        if (data.detail.__args__[0]) {
          data = data.detail.__args__[0]
        }
      }
      console.log(data)

      this.$emit('input', data)
    },
    autoScrollWrapperHeight() {
      var height = document.querySelector('.dropDownScrollWrapper > .mui-scroll').offsetHeight
      if (height > 400) {
        height = 400
      }

      document.querySelector('.dropDownScrollWrapper').style.height = height + 'px'
      if (!this.showProductAddBack) {
        document.querySelector('#dropDownMenuWrapper').style.height = height + 'px'
      } else {
        var backHeight = document.querySelector('#productAddBack').clientHeight
        document.querySelector('#dropDownMenuWrapper').style.height = height + backHeight + 'px'
      }
      document.querySelector('.container-select').style.height = height + 'px'
    },
    show() {
      this.isShow = true
    }
  }
}
</script>

<style scoped="scoped" lang="less">
  .scrollViewHeight{
    height:600upx;
  }
  .mui-scroll-wrapper {
    top: 67.96upx;
    margin-top: 0 !important;
    border-radius: 0 !important;
  }

  .container-select .listWrapper > .list {
    &:last-child {
      border-bottom-right-radius: 36upx;
      border-bottom-left-radius: 36upx;
      overflow: hidden;
    }
  }
  .bot {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    height: 1.96upx;
    transform: scaleY(0.5);
    background-color: #dcdcdc;
  }

  .container-select {
    position: absolute;
    width: 100%;

    .select-top {
      font-size: 25.96upx;
      line-height: 67.96upx;
      padding: 0 31.96upx;
      display: flex;
      position: relative;
      z-index: 2;
      background: #ffffff;
      justify-content: space-between;
      box-shadow: 0upx 9.98upx 19.96upx 0upx #F9F9FB;
      .type {
        display: flex;
        color: #03AEF9;
        .iconfont{
          font-size: 13.96upx;
        }
        .jianTou {
          margin-left: 6upx;
          margin-top: -3.98upx;
        }
      }
    }
  }
  .productAddBack {
    color: #444444;
    font-size: 31.96upx;
    padding: 30upx 0;
    text-align: center;
    position: absolute;
    background: #FFFFFF;
    z-index: 9;
    bottom: 0;
    width: 100%;
  }
  .mui-popover .mui-scroll-wrapper {
    overflow: hidden;
    border-bottom-right-radius: 36upx !important;
    border-bottom-left-radius: 36upx !important;
  }
  .dropDownMenuRoot .shareWrapper {
    display: none;
    border-bottom-right-radius: 36upx;
    border-bottom-left-radius: 36upx;
  }

  .showTagsHome {
    display: block !important;
  }

  .dropDownMenuWrapper {
    width:100%;
    bottom: auto !important;
    box-shadow: none !important;
  }

  .openAppH5 .dropDownMenuWrapper {
    top: 97.96upx;
    bottom: auto !important;
  }

  .dropDownMenuRoot {
    position: absolute;
    width: 100%;
  }
  .ListTitle{
    height:66upx;
  }
</style>

<style>
  .dropDownScrollWrapper{

  }
  .dropDownScrollWrapper .list .listChildren {
    display: none;
  }

  .dropDownScrollWrapper .list .listChildrenActive{
    display: block;
  }

  .dropDownScrollWrapper .list .listChildrenHide{
    display: none;
  }

  .dropDownScrollWrapper .list .text.active {
    color: #03AEF9;
    background: #F9F9FB;
  }

  .dropDownScrollWrapper  .list {
    background: #FFF;
  }

  .dropDownScrollWrapper  .list .list {
     background: #F9F9FB;
   }

  .dropDownScrollWrapper .list .list .list {
    background: #F3F4F6;
  }

  .dropDownScrollWrapper .list .list .list .list {
    background: #ECECEE;
  }

  .dropDownScrollWrapper .list .list .list .active {
    background: #ECECEE;
  }

  .dropDownScrollWrapper .list .list .active {
    color: #03AEF9;
    background: #F3F4F6;
  }

  .dropDownScrollWrapper .list .text {
    color: #444444;
    font-size: 27.98upx;
    line-height: 67.96upx;
    display: flex;
    justify-content: space-between;
  }

  .dropDownScrollWrapper .list .text .span {
    padding: 0 31.96upx;
    line-height:66upx;
  }

  .dropDownScrollWrapper .list .text.active .iconfont{
    display: block;
    color: #03AEF9;
  }

  .dropDownScrollWrapper .list .text .iconfont{
    font-size: 13.96upx;
    margin: 0 31.96upx;
    display: none;
  }
</style>
