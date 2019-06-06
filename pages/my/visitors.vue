<template>
  <view>
		<view class="component-card">
			<view class="number">
				<template v-for="(number, index) in hot_number">
				<text :class="'iconfont' +  ' icon-' + number" v-bind:key="index"></text>
				</template>
			</view>
			<view class="label">人气指数</view>
			<view class="desc">完善个人资料/参与平台互动/积极分享<br>可快速提升人气</view>
		</view>
		<view class="component-title-home">
			<text class="left">最近访客</text>
		</view>
		<view class="line-river"></view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in list" :key="key" @tap.stop.prevent="toResume(item.uuid)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" style="border-radius: 50%;" :src="item.user_avatar_url"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.user_name}}</view>
						<view class="uni-media-list-text-bottom">
							<view><text>{{item.description}}</text></view>
							<view><text>{{item.visited_time}}</text></view>
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
      getList(page) {
				console.log(page)
				if (this.isMore) {
					//说明已有数据，目前处于上拉加载
					this.status = 'loading';
				}
				this.$request.post('profile/recentVisitors', {page: page, uuid: this.uuid}).then(res_data => {
					if (res_data.code == 1000) {
						this.page = page + 1;
						this.hot_number = res_data.data.hot_number.toString()
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
			this.uuid = getLocalUuid()
      this.getList(1)
    }
  }
</script>
<style scoped>
  @media (-webkit-device-pixel-ratio: 2) {
    .line-river {
      height: 1px !important; /* px不转换 */} }

  .line-river {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 0.5px; /* px不转换 */
    position: relative;
    width: 100%;
    background-color: #dcdcdc;
    overflow: hidden; }
  .line-river:after{
    display: none;
  }
  .mui-content{
    background:#fff;
  }
	.component-title-home {
    height: 88upx;
    line-height: 88upx;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 31.0upx
	}
	.component-title-home .left {
    font-family: PingFangSC-Medium;
    font-size: 32upx;
    color: #444
	}
  .component-card {
    position: relative;
    height: 288upx;
    background: linear-gradient(-135.1deg, #07d6fc, #03aef9);
    width: 100%;
    text-align: center; }
  .component-card:before {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    content: '';
    height: 100%;
    background-image: url("~@/static/images/baisebolang@3x.png");
    background-size: contain;
    background-position: left 144upx;
    background-repeat: no-repeat;
    opacity: 0.16; }
  .component-card .number {
    font-size: 55.96upx;
    line-height: 81.98upx;
    padding-top: 37.96upx;
    color: #fff; }
  .component-card .number .iconfont {
		font-size: 55.96upx;
    margin: 0 -6upx; }
  .component-card .label {
    display: inline-block;
    width: 135.98upx;
    height: 37.96upx;
    font-size: 24upx;
    line-height: 37.96upx;
    background: #235280;
    border-radius: 7.96upx;
    color: #A8DFF7;
    margin-top: 3.98upx; }
  .component-card .desc {
    margin-top: 13.96upx;
    font-size: 24upx;
    color: #fff;
    line-height: 33.98upx; }

  .component-imageAndText {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 9.98upx;
    position: relative;}
  .component-imageAndText .imageWrapper img {
    width: 87.98upx;
    height: 87.98upx;
    border-radius: 50%; }
  .component-imageAndText .textWrapper {
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    padding: 9.98upx 0 0 15.98upx;
    line-height: 36upx; }
  .component-imageAndText .textWrapper .line-1 {
    max-width: 445.96upx;
    color: #444444;
    font-size: 27.98upx; }
  .component-imageAndText .textWrapper .line-2 {
    color: #B4B4B6;
    font-size: 25.96upx; }
  .component-imageAndText .time {
    font-size: 24upx;
    color: #235280;
    position: absolute;
    right: 0;
    top: 6upx; }

  .container-list-people .item {
    padding: 19.96upx 31.96upx 0; }

  .component-button-empty{
    margin-top:60upx;
  }
</style>