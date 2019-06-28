<template>
    <mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="cssTop" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
        <scroll-view
                class="panel-scroll-box"
                :scroll-y="enableScroll"
                @scrolltolower="loadMore"
        >
            <slot></slot>

            <!--<mix-load-more :status="loadMoreStatus" />-->
            <view class="ios-footer-hakcer" v-if="platform === 'ios'"></view>
        </scroll-view>
    </mix-pulldown-refresh>
</template>
<script>
  import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh'
  import mixLoadMore from '@/components/mix-load-more/mix-load-more'
  import { postRequest } from '@/lib/request.js'
  import { getPlatform } from '@/lib/allPlatform'

  export default {
    components: {
      mixPulldownRefresh,
      mixLoadMore
    },
    data() {
      return {
        detail: {},
        enableScroll: true,
        page: 0,
        platform: '',
        loadMoreStatus: 0 // 加载更多 0加载前，1加载中，2没有更多了
      }
    },
    props: {
      cssTop: {
        type: Number,
        default: 0
      },
      api: {
        type: String,
        default: ''
      },
      requestData: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    created() {
      // 获取屏幕宽度
      this.loadNewsList('add')
      this.platform = getPlatform()
    },
    methods: {
      onPulldownReresh() {
        this.loadNewsList('refresh')
      },
      loadMore() {
        // this.loadNewsList('add')
      },
      loadNewsList(type) {

        if (type === 'refresh') {
          this.list = [] // 刷新前清空数组
          this.page = 0
        }

        var requestData = Object.assign({
          page: this.page + 1
        }, this.requestData)

        postRequest(this.api, requestData).then(res => {
          var code = res.code
          if (code !== 1000) {
            // window.mui.toast(res.message)
            return
          }

          this.page += 1

          this.detail = res.data

          if (type === 'refresh') {
            this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh()
          }

          this.loadMoreStatus = res.data.next_page_url ? 0 : 2

          this.$emit('input', this.detail)
          this.$emit('finish', this.detail)
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

<style scoped="scoped">
    .ios-footer-hakcer{
        height:100upx;
        width:100%;
    }
    .panel-scroll-box{
        height:100%;
    }

    .iwItem{
        height:300px;
    }
</style>