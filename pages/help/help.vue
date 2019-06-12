<template>
  <view>
		<view class="uni-list">
			<view class="iwItem" hover-class="uni-list-cell-hover" v-for="(item,key) in list" :key="key" @tap.stop.prevent="goUrl(item.data.url)">
				<iw-feed-item :item="item" @showPageMore="showPageMore" />
			</view>
		</view>
		<uni-load-more :status="status" :content-text="contentText" />
		<iw-page-more
      ref="pageMore"
      :share-option="shareOption"
      :icon-menu="iconMenus"
    />
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import iwFeedItem from '@/components/iw-feed-item/iw-feed-item'
	import iwPageMore from '@/components/iw-page-more/iw-page-more'
	import { getIconMenus, iconMenusClickedItem } from '@/lib/feed'

  export default {
    data() {
			return {
				group_id: 0,
				list: [],
				isMore: false,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
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
				iconMenus: []
			}
    },
		components: {
			uniLoadMore,
			iwFeedItem,
			iwPageMore
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/discover/add?group_id=' + this.group_id
			})
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
			showPageMore(data) {
				console.log(data)
				this.iconMenus = getIconMenus(data.item)
				this.shareOption = data.shareOption
				this.$refs.pageMore.show()
			},
      getList(page) {
				console.log(page)
				if (this.isMore) {
					//说明已有数据，目前处于上拉加载
					this.status = 'loading';
				}
				this.$request.post('group/submissionList', {page: page, id: this.group_id, type: 1}).then(res_data => {
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
			}
    },
    onLoad () {
      // 加载页面请求一次；
			this.$request.post('group/getHelpGroup').then(res=>{
				this.group_id = res.data.id
				this.getList(1)
			})
    }
  }
</script>