<template>
    <view>
        <mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="176" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
            <scroll-view
                    class="panel-scroll-box"
                    :scroll-y="enableScroll"
                    @scrolltolower="loadMore"
            >
                <view v-for="(item, index) in list" :key="index" class="news-item">
                    {{item.id}}
                </view>

                <slot></slot>

                <mix-load-more :status="loadMoreStatus" />
            </scroll-view>
        </mix-pulldown-refresh>
    </view>
</template>
<script>
  import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh'
  import mixLoadMore from '@/components/mix-load-more/mix-load-more'
  import { getListData } from '@/lib/home'

  export default {
    components: {
      mixPulldownRefresh,
      mixLoadMore
    },
    data() {
      return {
        list: [],
        enableScroll: true,
        page: 0,
        tabCurrentIndex: 0, // 当前选项卡索引
        loadMoreStatus: 0 // 加载更多 0加载前，1加载中，2没有更多了
      }
    },
    created() {
      // 获取屏幕宽度
      this.loadNewsList('add')
    },
    methods: {
      // 下拉刷新
      onPulldownReresh() {
        this.loadNewsList('refresh')
      },
      // 上滑加载
      loadMore() {
        this.loadNewsList('add')
      },
      loadNewsList(type) {
        getListData(this.page + 1, '-1', (res) => {
          this.page += 1

          const list = res.data
          list.forEach(item => {
            this.list.push(item)
          })

          this.loadMoreStatus = res.next_page_url ? 0 : 2
        })
      },
      setEnableScroll(enable) {
        if (this.enableScroll !== enable) {
          this.enableScroll = enable
        }
      }
    }


  }
</script>