
<template>
  <view class="content">
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

    <iw-list v-model="list" :api="'feed/list'" :cssTop="88" :requestData="{search_type: 2}">
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
      list: []
    }
  },
  onLoad() {

  },
  methods: {
    showPageMore () {
      this.$refs.pageMore.show()
    }
  }
}
</script>
<style lang="less">
.content{
  height:100%;
}
.searchBoxShadow{
  z-index:10;
  background: #fff;
}
</style>
