<template>
  <view class="content">
    <!-- #ifdef APP-PLUS -->
    <view class="status_bar" />
    <!-- #endif -->
    <view class="container-control-logoAndTabsAndSearch searchBoxShadow">
      <view class="topSearchWrapper" @tap.stop.prevent="toSearch">
        <view class="searchFrame">
          <text class="iconfont icon-sousuo " />
          <view class="span">搜产品、内容</view>
        </view>
      </view>
      <view class="addIcon" @tap.stop.prevent="toDiscoverAdd">
        <text class="iconfont icon-tianjia" />
      </view>
    </view>

    <iw-list v-model="list" :api="'feed/list'" :css-top="cssTop" :request-data="{search_type: 2}">
      <view v-for="(item, index) in list" :key="index" class="iwItem">
        <iw-feed-item :item="item" @showPageMore="showPageMore" />
      </view>
    </iw-list>

    <iw-page-more
      ref="pageMore"
      :share-option="shareOption"
      :icon-menu="iconMenus"
    />
  </view>
</template>

<script>
import iwList from '@/components/iw-list/iw-list'
import iwFeedItem from '@/components/iw-feed-item/iw-feed-item'
import iwPageMore from '@/components/iw-page-more/iw-page-more'
import { getIconMenus, iconMenusClickedItem } from '@/lib/feed'

export default {
  components: {
    iwList,
    iwFeedItem,
    iwPageMore
  },
  data() {
    return {
      list: [],
      shareOption: {
        title: '',
        link: '',
        content: '',
        imageUrl: '',
        thumbUrl: '',
        shareName: '',
        targetType: 'submission',
        targetId: ''
      },
      iconMenus: [],
      cssTop: 88
    }
  },
  methods: {
    toSearch() {
      uni.navigateTo({ url: '/pages/search/index' })
    },
    toDiscoverAdd() {
      uni.navigateTo({ url: '/pages/discover/add' })
    },
    showPageMore(data) {
      this.iconMenus = getIconMenus(data.item)
      this.shareOption = data.shareOption
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
