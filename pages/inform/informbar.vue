<template>
  <view>
    <view class="uni-list">
      <view v-for="(item,key) in list" :key="key" class="uni-list-cell" hover-class="uni-list-cell-hover" @tap.stop.prevent="goUrl(item.data.url)">
        <view class="uni-media-list">
          <image class="uni-media-list-logo" :src="item.data.avatar" />
          <view class="uni-media-list-body">
            <view class="uni-media-list-text-top">{{ item.data.title }}</view>
            <view class="uni-media-list-text-bottom">
              <text>{{ item.data.body }}</text>
              <text>{{ item.created_at }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const Taskbar = {
  data: () => ({
    list: [],
    loading: true
  }),
  created() {

  },
  computed: {
    // 有无数据；
    nothing() {
      if (this.loading) {
        return -1
      }
      return this.list.length ? 0 : 1
    }
  },
  onPullDownRefresh() {
    this.page = 1
    this.getList(1)
    uni.stopPullDownRefresh()
  },
  onReachBottom() {
    this.getList(this.page)
  },
  methods: {
    typeDesc(type) {
      switch (type) {
        case 'App\\Notifications\\GroupAuditResult':
          return 1
        case 'App\\Notifications\\NewGroupMemberJoin':
          return 1
        case 'App\\Notifications\\NewGroupMemberApply':
          return 1
        case 'App\\Notifications\\GroupMemberApplyResult':
          return 1
        default:
          return 0
      }
    },
    goUrl(url) {
      if (/resume/.test(url)) {
        this.$router.pushPlus(url + '?goback=1', 'list-detail-page')
      } else {
        this.$router.pushPlus(url, 'list-detail-page')
      }
    },
    getList(page) {
      console.log(page)
      this.$request.post('notification/notice_list', { page: page }).then(res_data => {
        if (res_data.code == 1000) {
          this.page = page + 1
          if (page === 1) {
            this.list = res_data.data.data
          } else {
            this.list = this.list.concat(res_data.data.data)
          }
          this.loadingText = '加载更多...'
          this.isMore = true
          if (!res_data.data.next_page_url) {
            this.isMore = false
            this.loadingText = '没有更多了'
          }
        } else {
					    uni.showToast({
					        title: res_data.message,
					        icon: 'none'
					    })
        }
        this.refreshing = false
      })
    },
    // 请求标记
    sign() {
      this.$request.post(`notification/mark_as_read`, {
        notification_type: 1
      }).then(response => {

      })
    }
  },
  onLoad() {
    // 加载页面请求一次；
    this.getList(1)
    this.sign()
  }
}
export default Taskbar
</script>

<style scoped>
  .bot {
    position: absolute;
    right: 0.426rem;
    bottom: 0;
    left: 0.426rem;
    height: 0.026rem;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  /*清掉自带样式*/

  div,
  p,
  span,
  i,
  img,
  ul,
  li,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
  }

  /*滚动区域*/

  .mui-wechat #pullrefresh {
    margin-top: 0rem;
  }

  .mui-content {
    background: #FFFFFF;
  }

  /*主体部分样式*/

  ul li {
    position: relative;
    padding: 0.266rem 0.426rem 0.266rem 0.426rem;
    overflow: hidden;
  }
  ul li:nth-last-of-type(1) i{
    display: none;
  }
  ul li img {
    display: block;
    width:1.12rem;
    height: 1.12rem;
    float: left;
    border-radius: 0.266rem;
  }

  ul li p {
    margin-left: 3%;
    width: 82%;
    float: left;
  }

  ul li p span {
    display: block;
    margin-bottom: 0.133rem;
    width: 100%;
  }

  ul li p span:nth-of-type(1) {
    font-size: 0.426rem;
    color: #444444;
  }

  ul li p span:nth-of-type(2) {
    font-size: 0.373rem;
    color: #444444;
  }

  ul li p span:nth-of-type(3) {
    font-size: 0.32rem;
    color: #808080;
  }
  .message {
    width: 0.186rem;
    height: 0.186rem;
    background: #f03c69;
    border-radius: 50%;
    position: absolute;
    left: 15.5%;
    top: 10%;
  }

  /*无数据的样式 */

  .container {
    position: absolute;
    top: 40%;
    left: 36%;
  }

  .container svg {
    font-size: 1.6rem;
    margin-left: 0.613rem;
    margin-bottom: 0.213rem;
  }

  .container p {
    font-size: 0.32rem;
    color: #c8c8c8;
  }

  .time{
    display: inline-block;
    position: absolute;
    top: 0.213rem;
    right: 0.426rem;
    font-size: 0.32rem;
    color: rgba(180,180,182,1);
  }
</style>
