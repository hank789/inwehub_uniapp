<template>
  <uni-popup
    :show="isShow"
    :position="'bottom'"
    type="bottom"
    :h5-top="true"
    @hidePopup="hide"
  >
    <view :id="id" class="mui-popover mui-popover-action mui-popover-bottom mui-active">
      <view class="ul mui-table-view optionsWrapper">
        <view v-for="(item, index) in options" class="li mui-table-view-cell" @tap.stop.prevent="selectItem(item)">{{ item.text ? item.text : item }}</view>
      </view>

      <view class="ul mui-table-view">
        <view class="li mui-table-view-cell" @tap.stop.prevent="toggle">取消</view>
      </view>
    </view>
  </uni-popup>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'

export default {
  components: {
    uniPopup
  },
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
      isShow: false
    }
  },
  created() {

  },

  methods: {
    hide() {
      this.isShow = false
    },
    toggle() {
      this.isShow = !this.isShow
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
    position: relative;
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

  .mui-popover
  {
    position: absolute;
    z-index: 999;
    width: 559.96upx;

    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    -webkit-transition-property: opacity;
    transition-property: opacity;
    -webkit-transform: none;
    transform: none;

    opacity: 0;
    border-radius: 13.96upx;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
    box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
  }
  .mui-popover .mui-popover-arrow
  {
    position: absolute;
    z-index: 1000;
    top: -49.96upx;
    left: 0;

    overflow: hidden;

    width: 51.98upx;
    height: 51.98upx;
  }
  .mui-popover .mui-popover-arrow:after
  {
    position: absolute;
    top: 37.96upx;
    left: 0;

    width: 51.98upx;
    height: 51.98upx;

    content: ' ';
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);

    border-radius: 6upx;
    background: #f7f7f7;
  }
  .mui-popover .mui-popover-arrow.mui-bottom
  {
    top: 100%;
    left: -51.98upx;

    margin-top: -1.96upx;
  }
  .mui-popover .mui-popover-arrow.mui-bottom:after
  {
    top: -37.96upx;
    left: 0;
  }
  .mui-popover.mui-popover-action
  {
    bottom: 0;

    width: 100%;

    -webkit-transition: -webkit-transform .3s, opacity .3s;
    transition:         transform .3s, opacity .3s;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);

    border-radius: 0;
    background: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .mui-popover.mui-popover-action .mui-popover-arrow
  {
    display: none;
  }
  .mui-popover.mui-popover-action.mui-popover-bottom
  {
    position: fixed;
  }
  .mui-popover.mui-popover-action.mui-active
  {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .mui-popover.mui-popover-action .mui-table-view
  {
    margin: 15.98upx;

    text-align: center;

    color: #007aff;
    border-radius: 7.96upx;
  }
  .mui-popover.mui-popover-action .mui-table-view .mui-table-view-cell:after
  {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    height: 1.96upx;

    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);

    background-color: #c8c7cc;
  }
  .mui-popover.mui-popover-action .mui-table-view small
  {
    font-weight: 400;
    line-height: 1.3;

    display: block;
  }
  .mui-popover.mui-active
  {
    display: block;

    opacity: 1;
  }
  .mui-popover .mui-bar ~ .mui-table-view
  {
    padding-top: 87.98upx;
  }

  .mui-popover.mui-popover-action .mui-table-view{
    color:#03AEF9;
    border-radius: 31.96upx;
    background: #FFFFFF;
  }
</style>
