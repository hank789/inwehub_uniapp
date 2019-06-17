<template>
  <view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in list" :key="key" @tap.stop.prevent="goUrl(item.data.url)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.data.avatar"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.data.title}}</view>
						<view class="uni-media-list-text-bottom">
							<view><text>{{item.data.body}}</text></view>
							<view><text>{{timeago(item.created_at)}}</text></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="status" :content-text="contentText" />
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
  export default {
    data() {
			return {
				list: [],
				isMore: false,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
    },
		components: {
			uniLoadMore
		},
		onPullDownRefresh() {
			this.page = 1;
			this.isMore = true;
			this.getList(1);
			uni.stopPullDownRefresh();
		},
		onReachBottom() {
			this.status = 'more';
			this.getList(this.page);
		},
    methods: {
      goUrl (url) {
        if (/resume/.test(url)) {
          url = url.split('/')
					console.log(url)
					let uuid = url[3]
					uni.navigateTo({
						url: '/pages/my/resume?id=' + uuid
					})
        } else if (/dianping\/comment/.test(url)) {
          url = url.split('/')
					console.log(url)
					let slug = url[3]
					uni.navigateTo({
						url: '/pages/dianping/comment?slug=' + slug
					})
        } else {
					url = url.split('/')
					console.log(url)
					let slug = url[3]
					uni.navigateTo({
						url: '/pages/discover/detail?slug=' + slug
					})
				}
      },
      getList(page) {
				console.log(page)
				if (this.isMore) {
					//说明已有数据，目前处于上拉加载
					this.status = 'loading';
				}
				this.$request.post('notification/readhub_list', {page: page}).then(res_data => {
					if (res_data.code == 1000) {
						this.page = page + 1;
						if (page === 1) {
							this.list = res_data.data.data;
						} else {
							this.list = this.list.concat(res_data.data.data);
						}
						this.isMore = true
						if (!res_data.data.next_page_url) {
							this.isMore = false;
							this.status = '';
						}
					} else {
					    uni.showToast({
					        title: res_data.message,
					        icon: 'none'
					    });
					}
					this.refreshing = false
				})
			},
      // 请求标记
      sign () {
        this.$request.post(`notification/mark_as_read`, {
          notification_type: 4
        }).then(response => {
          
        })
      }
    },
    onLoad () {
      // 加载页面请求一次；
      this.getList(1)
      this.sign()
    }
  }
</script>