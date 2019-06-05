<template>
  <view :id="id" class="mui-popover mui-popover-action mui-popover-bottom">
    <view class="ul mui-table-view optionsWrapper">
      <view v-for="(item, index) in options" class="li mui-table-view-cell" @tap.stop.prevent="selectItem(item)">{{ item.text ? item.text : item }}</view>
    </view>

    <view class="ul mui-table-view">
      <view class="li mui-table-view-cell" @tap.stop.prevent="toggle">取消</view>
    </view>

    <!--<view class="allOptions">-->
    <!--<view class="mui-poppicker-header">-->
    <!--<button class="mui-btn mui-poppicker-btn-cancel" @tap.stop.prevent="toggle">取消</button>-->
    <!--<view class="mui-poppicker-clear"></view>-->
    <!--</view>-->
    <!--<view class="mui-poppicker-body" v-for="(item, index) in options">-->
    <!--<view class="option" @tap.stop.prevent="selectItem(item)">{{item}}</view>-->
    <!--</view>-->
    <!--</view>-->
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    id: {
      type: String,
      default: 'options'
    },
    options: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  created() {

  },

  methods: {
    toggle() {
      window.mui('#' + this.id).popover('toggle')
    },
    selectItem(item) {
      this.$emit('selectedItem', item)
    }
  }
}
</script>

<style scoped>
  .allOptions{
    background:#fff;
  }
  .allOptions .mui-poppicker-body{
    height:auto;
  }
  .allOptions .option{
    text-align: center;
    color:#444;
    height:87.98upx;
    line-height: 87.98upx;
  }
  .mui-popover.mui-popover-action .mui-table-view {
    border-radius: 0 !important;
    margin: 0 !important;
  }
  .mui-popover.mui-popover-action .mui-table-view:first-child {
    border-top-left-radius: 36upx !important;
    border-top-right-radius: 36upx !important;
  }
  .mui-popover.mui-popover-action .mui-table-view:last-child .mui-table-view-cell:after {
    height: 0 !important;
  }
  .mui-table-view-cell {
    padding: 30upx 0 !important;
    color: #444444 !important;
    font-size: 31.96upx !important;
  }
  .mui-popover.mui-popover-action .mui-table-view:last-child {
    font-family:PingFangSC-Medium;
  }
  .mui-popover .mui-table-view:after {
    height: 1.96upx !important;
  }
  .mui-popover.mui-popover-action .mui-table-view:last-child:after {
    height: 0 !important;
  }
  .optionsWrapper{
    max-height:none !important;
  }
</style>
