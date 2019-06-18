<template>
  <view class="listChildren">
    <view class="list">
      <view class="text ListTitle" @tap.stop.prevent="selectItem(tree)">
        <view class="span">全部</view>
        <text class="iconfont icon-xiangshangjiantou " />
      </view>
    </view>
    <template v-for="(child, childIndex) in tree.children">
      <view class="list">
        <view :class="{active: child.isShow}" class="text ListTitle" @tap.stop.prevent="selectItem(child)">
          <view class="span">{{ child.name }} {{ parseInt(child.children_count) > 0 ? '(' + child.children_count + ')' : '' }}</view>
          <text class="iconfont icon-xiangshangjiantou " />
        </view>

        <DropDownMenuChild
          v-if="child.children && child.children.length"
          :class="{active: child.isShow}"
          :tree="child"
          @selectChange="selectChange"
        />
      </view>
    </template>
  </view>
</template>

<script>
const DropDownMenuChildObj = {
  name: 'DropDownMenuChild',
  data: () => ({
  }),
  props: {
    tree: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted() {
  },
  components: {

  },
  methods: {
    selectItem(item) {
      if (item.children_count) {
        item.isShow = !item.isShow
        this.$forceUpdate()
      } else {
        this.$emit('selectChange', { id: item.id, name: item.name })
      }
    },
    selectChange(data) {
      this.$emit('selectChange', data)
    }
  }
}
export default DropDownMenuChildObj
</script>

<style scoped="scoped" lang="less">
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
</style>

<style>

  .listChildren {
    display: none;
  }

  .dropDownScrollWrapper .list .listChildren.active{
    display: block;
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
