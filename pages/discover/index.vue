
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
        <iw-feed-item :item="item"></iw-feed-item>
      </view>
    </iw-list>
  </view>
</template>

<script>
import iwList from '@/components/iw-list/iw-list'
import iwFeedItem from '@/components/iw-feed-item/iw-feed-item'

export default {
  components: {
    iwList,
    iwFeedItem
  },
  data() {
    return {
      list: []
    }
  },
  onLoad() {

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
