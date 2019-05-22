<template>
    <view class="content">
      <view class="status_bar">
      </view>
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

      <iw-list v-model="list" :api="'feed/list'" :cssTop="cssTop" :requestData="{search_type: 2}">
        <view v-for="(item, index) in list" :key="index" class="iwItem">
          <iw-feed-item :item="item" @showPageMore="showPageMore"></iw-feed-item>
        </view>
      </iw-list>

      <iw-page-more
              ref="pageMore"
      ></iw-page-more>
    </view>
</template>

<script>
import iwList from '@/components/iw-list/iw-list'
import iwFeedItem from '@/components/iw-feed-item/iw-feed-item'
import iwPageMore from "@/components/iw-page-more/iw-page-more"

export default {
  components: {
    iwList,
    iwFeedItem,
    iwPageMore
  },
  data() {
    return {
      list: [],
      cssTop: 88
    }
  },
  onLoad() {
    uni.getSystemInfo({
      success: (res) =>  {
        this.cssTop += res.statusBarHeight * 2
      }
    });
  },
  methods: {
    showPageMore () {
      this.$refs.pageMore.show()
    }
  }
}
</script>
<style lang="less">
page, .content{
  background-color: #fff;
  height: 100%;
  overflow: hidden;
}

.searchBoxShadow{
  z-index:10;
  background: #fff;
}
</style>
