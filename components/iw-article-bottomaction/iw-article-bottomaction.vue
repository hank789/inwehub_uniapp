<template>
    <uni-popup
            :show="showPopupBottomShare"
            :position="'bottom'"
            type="bottom"
            :h5-top="true"
            @hidePopup="hidePopup">
    <view class="heat-wrapper">
      <view class="heatTop">
        <view class="left">
          <view class="fire"><image class="image" mode="aspectFill" src="../../static/images/fire@3x.png" /></view>
          <view class="heat"><image class="image" mode="aspectFill" src="../../static/images/heat@2x.png" /></view>
        </view>
        <view class="right">
          <view class="oneLine" />

          <view class="iconList " @tap.stop.prevent="clickItem('分享')">
            <view class="addNumber">
              <view class="span">+3</view>
            </view>
            <view class="span iconCircular">
              <text class="iconfont icon-shoucang-xiao" />
            </view>
            <view class="text">分享</view>
          </view>

          <view class="iconList" @tap.stop.prevent="clickItem('评论')">
            <view class="addNumber">
              <view class="span">+2</view>
            </view>
            <view class="span iconCircular">
              <text class="iconfont icon-pinglun" />
            </view>
            <view class="text active">评论<view class="i">{{ localItem.comment_number }}</view></view>
          </view>

          <view class="iconList" :class="localItem.is_upvoted ? 'active' : ''" @tap.stop.prevent="vote">
            <view class="addNumber">
              <view class="span">+1</view>
            </view>
            <view class="span iconCircular">
              <text class="iconfont icon-zan" />
            </view>
            <view class="text">{{ localItem.is_upvoted ? '已赞' : '赞' }}</view>
          </view>
        </view>
      </view>

      <view v-if="isAdmin" class="deleteWrapper">
        <view class="bot" />
        <view class="single alertConfirm" @tap.stop.prevent="deleteItem">
          <view class="span iconW">
            <text class="iconfont icon-shanchu1" />
          </view>
          <view class="span text">删除</view>
        </view>
      </view>

      <view v-if="isAdmin" class="choiceWrapper">
        <view class="bot" />
        <view class="title">设置精选</view>
        <view class="choiceList">
          <view
            v-for="(item, index) in localRegions"
            :key="index"
            class="span"
            :class="{active: item.selected }"
            @tap.stop.prevent="choiceItem(index, item)"
          >{{ item.text }}</view>
        </view>
      </view>

      <view v-if="isAdmin" class="submit" @tap.stop.prevent="submit">
        <view class="span">确定</view>
      </view>

      <view class="cancelW" @tap.stop.prevent="cancelShare">
        <view class="bot" />
        <view class="span">取消</view>
      </view>
    </view>
    </uni-popup>
</template>

<script type="text/javascript">
import { postRequest } from '@/lib/request'
import { upvoteOnlyHome } from '@/lib/discover'
import Vue from 'vue'
import { isAdmin } from '@/lib/user'
import uniPopup from "@/components/uni-popup/uni-popup.vue"

export default {
  components: {
    uniPopup
  },
  props: {
    regions: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      localRegions: [],
      localItem: this.value,
      showPopupBottomShare: false
    }
  },
  computed: {
    initTagsIds() {
      var rtags = []

      if (this.localItem.tags) {
        rtags = this.localItem.tags
      }
      var tagsIds = rtags.map(tags => { return tags.id })
      return tagsIds
    },
    isAdmin() {
      return isAdmin()
    }
  },
  watch: {
    regions: function(newValue, oldValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        this.localRegions = JSON.parse(JSON.stringify(newValue))
      }
    },
    localItem: function(newValue, oldValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        this.$emit('input', newValue)
      }
    },
    value: function(newValue, oldValue) {
      if (newValue) {
        this.localItem = newValue
      }
    }
  },
  created() {},
  methods: {
    setItem(item) {
      this.localItem = item
    },
    vote() {
      upvoteOnlyHome(this, this.localItem.id, (response) => {
        this.localItem.is_upvoted = 1
        this.localItem.support_number++
        this.cancelShare()
        setTimeout(() => {
          this.$emit('startAnimation', 1)
        }, 300)
      }, (response) => {
        this.localItem.is_upvoted = 0
        this.localItem.support_number--
        this.cancelShare()
      })
    },
    submit() {
      var tags = []
      var newTags = []
      for (var i = 0; i < this.localRegions.length; i++) {
        if (this.localRegions[i].selected) {
          tags.push(this.localRegions[i].value)
          newTags.push({
            id: this.localRegions[i].value,
            name: this.localRegions[i].text
          })
        }
      }
      postRequest(`article/regionOperator`, {
        id: this.localItem.id,
        tags: tags
      }).then(response => {
        var code = response.code
        if (code !== 1000) {
          ui.toast(response.message)
          return
        }

        this.localItem.tags = newTags

        ui.toast(response.message)
        this.cancelShare()
      })
    },
    choiceItem(index, item) {
      item.selected = item.selected ? 0 : 1
      Vue.set(this.localRegions, index, item)
    },
    deleteItem() {
      this.$emit('clickDelete')
    },
    clickItem(text) {
      switch (text) {
        case '评论':
          this.cancelShare()
          uni.navigateTo({url: '/pages/comment/index?category_id=' + this.localItem.category_id + '&slug=' + this.localItem.slug + '&id=' + this.localItem.id})
          break
        case '分享':
          this.cancelShare()
          this.$emit('showItemMore', this.localItem)
          break
      }
    },
    cancelShare() {
      this.hidePopup()
    },
    hidePopup() {
      this.showPopupBottomShare = false
    },
    resetRegions() {
      for (var i = 0; i < this.localRegions.length; i++) {
        var item = this.localRegions[i]
        item.selected = 0

        if (this.initTagsIds.indexOf(item.value) > -1) {
          item.selected = 1
        }

        Vue.set(this.localRegions, i, item)
      }
    },
    show() {
        this.resetRegions()
        this.showPopupBottomShare = true
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
    .homeHeat{
        display: none;
    }
    .bot {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0upx;
        height: 1.96upx;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: rgb(220, 220, 220);
    }

    .heat-wrapper {
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: 999;
        padding-top: 39.98upx;
        background: #ffffff;
        border-top-left-radius: 36upx;
        border-top-right-radius: 36upx;
    }

    .heat-wrapper .heatTop {
        overflow: hidden;
        padding: 0 30upx 39.98upx;
    }

    .heat-wrapper .left {
        display: flex;
        float: left;
        margin-top: 27.98upx;
        margin-left: 30upx;
    }

    .heat-wrapper .left .fire {
        width: 43.96upx;
        height: 49.96upx;
        position: relative;
        top: 10.96upx;
        margin-right: 15.98upx;
    }

    .heat-wrapper .left .fire .image {
        width: 100%;
        height: 100%;
    }

    .heat-wrapper .left .heat {
        width: 67.96upx;
        height: 72upx;
    }

    .heat-wrapper .left .heat .image {
        width: 100%;
        height: 100%;
    }

    .heat-wrapper .right {
        float: right;
        display: flex;
    }

    .heat-wrapper .right .oneLine {
        width: 1.96upx;
        height: 87.98upx;
        background: #DCDCDC;
        margin-right: 30upx;
        position: relative;
        top: 19.96upx;
    }

    .heat-wrapper .right .iconList {
        margin: 0 30upx;
        position: relative;
    }

    .heat-wrapper .right .iconList.active .iconCircular {
        color: #FFFFFF;
        background: #03AEF9;
    }

    .heat-wrapper .right .iconList .addNumber {
        height: 27.98upx;
        line-height: 27.98upx;
        position: absolute;
        top: 6upx;
        right: -19.96upx;
        display: inline-block;
        padding: 0 9.98upx;
        background: #E5E5E5;
        border-radius: 199.96upx;
    }

    .heat-wrapper .right .iconList .addNumber .span {
        color: #808080;
        font-size: 19.96upx;
        position: relative;
        top: -3.98upx;
    }

    .heat-wrapper .right .iconList .iconCircular {
        width: 87.98upx;
        height: 87.98upx;
        color: #808080;
        font-size: 31.96upx;
        text-align: center;
        line-height: 87.98upx;
        border-radius: 50%;
        display: inline-block;
        background: #F7F8FA;
    }

    .heat-wrapper .right .iconList .text {
        color: #808080;
        font-size: 21.98upx;
        text-align: center;
        margin-top: 9.98upx;
    }

    .heat-wrapper .right .iconList .text.active {
        color: #444444;
    }

    .heat-wrapper .right .iconList .text .i {
        color: #FA4975;
        font-style: normal;
    }

    .heat-wrapper .cancelW {
        position: relative;
        text-align: center;
    }

    .heat-wrapper .cancelW .bot {
        top: 0 !important;
    }

    .heat-wrapper .cancelW .span {
        color: #444444;
        font-family: PingFangSC-Medium;
        font-size: 31.96upx;
        text-align: center;
        line-height: 103.96upx;
    }

    .heat-wrapper .submit {
        width: 630upx;
        height: 87.98upx;
        margin: 0 auto 30upx;
        line-height: 87.98upx;
        text-align: center;
        border-radius: 87.98upx;
        background: #03AEF9;
    }

    .heat-wrapper .submit .span {
        color: #FFFFFF;
        font-size: 31.96upx;
    }

    .deleteWrapper {
        position: relative;
        padding: 30upx 0 24.98upx;
    }

    .deleteWrapper .bot {
        top: 0;
    }

    .deleteWrapper .single {
        height: 139.96upx;
        display: inline-block;
        margin-left: 60upx;
    }

    .deleteWrapper .single .iconW {
        width: 87.98upx;
        height: 87.98upx;
        /*margin: 0 24upx;*/
        /*margin-left: 60upx;*/
        line-height: 97.96upx;
        text-align: center;
        display: inline-block;
        border-radius: 15.98upx;
        border: 1.96upx solid #DCDCDC;
        color: #C8C8C8;
    }

    .deleteWrapper .single .iconW .iconfont{
        font-size: 43.96upx;
    }

    .deleteWrapper .single .text {
        display: block;
        font-size: 24upx;
        color: #808080;
        line-height: 31.96upx;
        text-align: center;
        margin-top: 15.98upx;
    }

    .choiceWrapper {
        position: relative;
        padding: 24upx 60upx 30upx;
    }

    .choiceWrapper .bot {
        top: 0;
    }

    .choiceWrapper .title {
        font-size: 21.98upx;
        color: #B4B4B6;
        line-height: 30upx;
        margin-bottom: 3.98upx;
    }

    .choiceWrapper .choiceList {
    }

    .choiceWrapper .choiceList .span {
        height: 54upx;
        padding: 0 19.96upx;
        line-height: 54upx;
        color: #444444;
        font-size: 24upx;
        display: inline-block;
        background: #F3F4F6;
        border-radius: 199.96upx;
        margin: 19.96upx 19.96upx 0upx 0;
    }

    .choiceWrapper .choiceList span.active {
        background: #03AEF9;
        color: #FFFFFF;
    }
</style>
