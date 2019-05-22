<template>
    <mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="cssTop" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
        <scroll-view
                class="panel-scroll-box"
                :scroll-y="enableScroll"
                @scrolltolower="loadMore"
        >
            <view class="download-tip" :style="{top: downloadTipTop}">{{ downloadTipalertMsg }}</view>
            <slot></slot>

            <mix-load-more :status="loadMoreStatus" />
        </scroll-view>
    </mix-pulldown-refresh>
</template>
<script>
  import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh'
  import mixLoadMore from '@/components/mix-load-more/mix-load-more'
  import { postRequest } from '@/lib/request.js'

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
        loadMoreStatus: 0, // 加载更多 0加载前，1加载中，2没有更多了
        downloadTipTop: '-100px',
        downloadTipalertMsg: ''
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
    },
    methods: {
      showDownloadTip() {
        this.downloadTipTop = '0px'
      },
      hideDownloadTip() {
        this.downloadTipTop = '-100px'
      },
      // 下拉刷新
      onPulldownReresh() {
        this.loadNewsList('refresh')
      },
      // 上滑加载
      loadMore() {
        this.loadNewsList('add')
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

          const list = res.data.data
          list.forEach(item => {
            this.list.push(item)
          })

          if (type === 'refresh') {
            this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh()
          }

          if (this.page === 1) {
            if (res.data.alert_msg) {
              this.downloadTipalertMsg = res.data.alert_msg
              this.showDownloadTip()
            }
            setTimeout(() => {
              this.hideDownloadTip()
            }, 2000)
          }

          this.loadMoreStatus = res.data.next_page_url ? 0 : 2

          this.$emit('input', this.list)
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
    .panel-scroll-box{
        height:100%;
    }

    .iwItem{
        height:300px;
    }
</style>