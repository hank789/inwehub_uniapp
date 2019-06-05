<template>
  <uni-popup
          :show="isShow"
          :position="'top'"
          type="bottom"
          :h5-top="true"
          @hidePopup="hide"
  >
  <view id="dropDownMenuWrapper" :class="positionClass" class="shareWrapper mui-popover">
    <slot name="dropDownMenuHeader" />
    <view class="container-select">
      <view v-if="showSelectTop" class="select-top">
        <view class="type" @tap.stop.prevent="show">
          <view class="span">选择类型</view>
          <view class="jianTou">
            <text class="iconfont icon-xiangshangjiantou " />
          </view>
        </view>
      </view>
      <view class="mui-scroll-wrapper dropDownScrollWrapper">
        <view class="mui-scroll">
          <view class="listWrapper">
            <view v-for="(item, index) in tree" :key="index" class="list">
              <view class="text ListTitle" @tap.capture="selectItem($event, item)">
                <view class="span">{{ item.name }} {{ parseInt(item.children_count) > 0 ? '(' + item.children_count + ')' : '' }}</view>
                <text class="iconfont icon-xiangshangjiantou " />
              </view>

              <DropDownMenuChild
                v-if="item.children.length"
                :tree="item"
                @selectItem="selectItem"
              />
            </view>

          </view>
        </view>

      </view>

    </view>
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
  mounted() {
  },
  methods: {
    hide () {
      this.isShow = false
    },
    ProductAddBack() {
      window.mui('#dropDownMenuWrapper').popover('toggle')
    },
    selectItem(event, item) {
      var curEle = event.target
      if (curEle.tagName === 'SPAN') {
        curEle = curEle.parentElement
      }

      var status = curEle.classList.contains('active')
      //        window.mui.each(curEle.parentElement.parentElement.children, function (index, children) {
      //          var listTitle = children.querySelector('.ListTitle')
      //          if (listTitle) {
      //            listTitle.classList.remove('active')
      //          }
      //          var listChildren = children.querySelector('.listChildren')
      //          if (listChildren) {
      //            listChildren.classList.remove('active')
      //          }
      //        })

      if (!status) {
        curEle.classList.add('active')

        if (curEle.nextElementSibling) {
          curEle.nextElementSibling.classList.add('active')
        } else {
          window.mui('#dropDownMenuWrapper').popover('toggle')
          setTimeout(() => {
            this.selectedIterms.push({ id: item.id, name: item.name })
            if (!this.showSelectTop) {
              this.$emit('input', this.selectedIterms)
            } else {
              this.$emit('input', { id: item.id, name: item.name })
            }
          }, 100)
        }

        //          if (curEle && curEle.offsetTop) {
        //            document.querySelector('.dropDownScrollWrapper > .mui-scroll').style.transform = 'translate3d(0upx, -' + curEle.offsetTop + 'px, 0upx) translateZ(0upx)'
        //          }
      } else {
        curEle.classList.remove('active')
        if (curEle.nextElementSibling) {
          curEle.nextElementSibling.classList.remove('active')
        }
      }

      setTimeout(() => {
        this.autoScrollWrapperHeight()
      }, 100)
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

  #dropDownMenuWrapper {
    width:100%;
    bottom: auto !important;
    box-shadow: none !important;
  }

  .openAppH5 #dropDownMenuWrapper {
    top: 97.96upx;
    bottom: auto !important;
  }

  .dropDownMenuRoot {
    position: absolute;
    width: 100%;
  }
</style>

<style>
  .dropDownScrollWrapper{

  }
  .dropDownScrollWrapper .list .listChildren {
    display: none;
  }

  .dropDownScrollWrapper .list .listChildren.active {
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
  }

  .dropDownScrollWrapper .list .text.active .iconfont{
    display: block;
    color: #03AEF9;
  }

  .dropDownScrollWrapper .list .text .iconfont{
    font-size: 13.96upx;
    margin: 21.98upx 31.96upx 0;
    display: none;
  }
</style>
