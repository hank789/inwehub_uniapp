let tabsListMixin = {
  data() {
    return {
      tabCurrentIndex: 0, // 当前选项卡索引
      scrollLeft: 0, // 顶部选项卡左滑距离
      enableScroll: true,
      tabBars: [],
      tabBar: undefined,
      windowWidth: 0,
      downloadTipTop: '-200upx',
      downloadTipalertMsg: '',
      scrollTimer: false
    }
  },
  methods: {
    showDownloadTip() {
      this.downloadTipTop = '0upx'
    },
    hideDownloadTip() {
      this.downloadTipTop = '-200upx'
    },
    // 设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
    setEnableScroll(enable) {
      if (this.enableScroll !== enable) {
        this.enableScroll = enable
      }
    },
    async changeTab(e) {
			let index = e
      // e=number为点击切换，e=object为swiper滑动切换
      if (typeof e === 'object') {
        index = e.detail.current
				if (e.detail.source != 'touch') return
      }
			console.log(e)
      this.position = ''
      if (this.scrollTimer) {
        // 多次切换只执行最后一次
        clearTimeout(this.scrollTimer)
        this.scrollTimer = false
      }
      
			this.tabCurrentIndex = index
      if (typeof this.tabBar !== 'object') {
        this.tabBar = await this.getElSize('nav-bar')
      }
      // 计算宽度相关
      const tabBarScrollLeft = this.tabBar.scrollLeft
      let width = 0
      let nowWidth = 0
      // 获取可滑动总宽度
      for (let i = 0; i <= index; i++) {
        const result = await this.getElSize('tab' + i)
        width += result.width
        if (i === index) {
          nowWidth = result.width
        }
      }
      
      // 延迟300ms,等待swiper动画结束再修改tabbar
      this.scrollTimer = setTimeout(() => {
        if (width - nowWidth / 2 > this.windowWidth / 2) {
          // 如果当前项越过中心点，将其放在屏幕中心
          this.scrollLeft = width - nowWidth / 2 - this.windowWidth / 2
        } else {
          this.scrollLeft = 0
        }
        if (typeof e === 'object') {
          this.tabCurrentIndex = index
        }
        this.tabCurrentIndex = index

        // 第一次切换tab，动画结束后需要加载数据
        const tabItem = this.tabBars[this.tabCurrentIndex]
        if (this.tabCurrentIndex !== -1 && tabItem.loaded !== true) {
          this.loadNewsList('add')
          tabItem.loaded = true
        }
      }, 300)
    },
    // 获得元素的size
    getElSize(id) {
      return new Promise((res, rej) => {
        const el = uni.createSelectorQuery().select('#' + id)
        el.fields({
          size: true,
          scrollOffset: true,
          rect: true
        }, (data) => {
          res(data)
        }).exec()
      })
    },
    // 获取分类
    loadTabbars() {
      this.loadTabs((tabs) => {
        tabs.forEach(item => {
          item.name = item.text
          item.id = item.value
          item.newsList = []
          item.page = 1
          item.loadMoreStatus = 0 // 加载更多 0加载前，1加载中，2没有更多了
          item.refreshing = 0
        })
        this.tabBars = tabs
        this.loadNewsList('add')
      })
    },
    // 新闻列表
    loadNewsList(type) {
      const tabItem = this.tabBars[this.tabCurrentIndex]

      // type add 加载更多 refresh下拉刷新
      if (type === 'add') {
        if (tabItem.loadMoreStatus === 2) {
          return
        }
        tabItem.loadMoreStatus = 1
      }
      else if (type === 'refresh') {
				// #ifdef APP-PLUS
        tabItem.refreshing = true
				// #endif
				tabItem.page = 1
      }

      this.loadListData(tabItem, (res) => {
        tabItem.page += 1
				
				var list = res.data
				if(type === 'refresh'){
					tabItem.newsList = list
					tabItem.page = 1
				} else {
					tabItem.newsList = tabItem.newsList.concat(list)
				}

        if (type === 'refresh') {
          this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh()
          // #ifdef APP-PLUS
          tabItem.refreshing = false
          // #endif

          if (tabItem.page === 1) {
            if (res.alert_msg) {
              this.downloadTipalertMsg = res.alert_msg
              this.showDownloadTip()
            }
            setTimeout(() => {
              this.hideDownloadTip()
            }, 2000)
          }
        }

        tabItem.loadMoreStatus = res.next_page_url ? 0 : 2
      })
    },
    // 下拉刷新
    onPulldownReresh() {
      this.loadNewsList('refresh')
    },
    // 上滑加载
    loadMore() {
      this.loadNewsList('add')
    }
  }
}

export default tabsListMixin