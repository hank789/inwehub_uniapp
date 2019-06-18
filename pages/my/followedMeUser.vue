<template>
  <view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in list" :key="key">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" lazy-load style="border-radius: 50%;" :src="item.user_avatar_url" @tap.stop.prevent="toResume(item.uuid)"></image>
					<view class="uni-media-list-body" @tap.stop.prevent="toResume(item.uuid)">
						<view class="uni-media-list-text-top">{{item.user_name}}</view>
						<view class="uni-media-list-text-bottom">
							<view><text>{{item.description}}</text></view>
						</view>
					</view>
					<view class="tag-view">
						<uni-tag :circle="true" :inverted="item.is_following?true:false" :text="item.is_following?'已关注':'关注Ta'" :type="item.is_following?'default':'primary'" @click="followUser(item.uuid, key)" />
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="status" :content-text="contentText" />
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import uniTag from '@/components/uni-tag/uni-tag.vue'
	import {getLocalUuid} from '@/lib/user.js'
  export default {
    data() {
			return {
				list: [],
				isMore: false,
				hot_number: '0',
				status: 'more',
				uuid: '',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
    },
		components: {
			uniLoadMore,
			uniTag
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
      toResume (uuid) {
				if (this.uuid == uuid) {
					uni.navigateTo({
						url: '/pages/my/resume'
					})
				} else {
					uni.navigateTo({
						url: '/pages/my/resume?id=' + uuid
					})
				}
      },
			followUser(id, index) {
				this.$request.post('follow/user',{id: id}).then(res => {
					var code = res.code
					if (code !== 1000) {
						uni.showToast({
							title:res.message
						})
						return
					}
					this.list[index].is_following = !this.list[index].is_following
					uni.showToast({
						title: res.data.tip
					})
				})
			},
      getList(page) {
				console.log(page)
				if (this.isMore) {
					//说明已有数据，目前处于上拉加载
					this.status = 'loading';
				}
				this.$request.post('follow_my/users', {page: page, uuid: this.uuid}).then(res_data => {
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
    onLoad (options) {
      // 加载页面请求一次；
			this.uuid = options.id
			var currentUuid = getLocalUuid()
			if (currentUuid != this.uuid) {
				uni.setNavigationBarTitle({
						title: '关注Ta的'
				})
			}
      this.getList(1)
    }
  }
</script>
<style scoped>

</style>