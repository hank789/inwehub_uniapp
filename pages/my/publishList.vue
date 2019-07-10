<template>
	<view class="content">
		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft">
			<view v-for="(item,index) in tabBars" :key="item.id" class="nav-item" :style="{width: swiperWidth}" :class="{current: index === tabCurrentIndex}"
			 :id="'tab'+index" @click="changeTab(index)">{{item.name}}</view>
		</scroll-view>

		<!-- 下拉刷新组件 -->
		<mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="90" @refresh="onPulldownReresh"
		 @setEnableScroll="setEnableScroll">
			<!-- 内容部分 -->
			<swiper id="swiper" class="swiper-box" :duration="300" :current="tabCurrentIndex" @change="changeTab">
				<swiper-item v-for="tabItem in tabBars" :key="tabItem.id">
					<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore">
						
						<view v-for="(item, index) in tabItem.newsList" :key="index" class="news-item">
							<view v-if="tabItem.id == 1" @click="navToDetails(item)">
								<text :class="['title', 'title'+(item.img.length>1?3:0),'uni-article-title']">{{item.title}}</text>
								<view v-if="item.img.length > 0" :class="['img-list', 'img-list'+(item.img.length>1?3:0),item.img.length === 1 && item.type==='link' ? 'img-list-single': '']">
									<view v-for="(imgItem, imgIndex) in item.img" :key="imgIndex" :class="['img-wrapper','img-wrapper'+(item.img.length>1?3:0), item.img.length === 1 && item.type==='link' ? 'img-wrapper-single': '']">
										<image class="img" lazy-load :src="imgItem"></image>
									</view>
								</view>
								<!-- 空图片占位 -->
								<view v-else class="img-empty"></view>
								<view>
									<text class="author">{{timeago(item.created_at)}}</text>
									<text :class="['bot', 'bot'+(item.img.length>1?3:0)]"></text>
								</view>

							</view>


							<view v-if="tabItem.id == 2" class="container-commentWrapper" @tap.stop.prevent="navToComment(item)">
								<view class="container-commentList">
									<view class="title uni-article-title" v-html="item.content"></view>
									<view class="commentWrapper-content uni-article-title" v-html="item.origin_title"></view>
									<view class="commentWrapper-time">
										<text>{{item.created_at}}</text>
									</view>
									<text class="bot"></text>
								</view>
							</view>

							<view v-if="tabItem.id == 3" class="container-commentWrapper" @tap.stop.prevent="navToDianping(item)">
								<view class="container-commentList">
									<view class="title uni-article-title" v-html="item.title"></view>
									<view class="commentWrapper-content uni-article-title" v-html="item.category_name"></view>
									<view class="commentWrapper-time">
										<text>{{item.created_at}}</text>
									</view>
									<text class="bot"></text>
								</view>

							</view>
						</view>

						<!-- 上滑加载更多组件 -->
						<mix-load-more :status="tabItem.loadMoreStatus"></mix-load-more>
					</scroll-view>
				</swiper-item>
			</swiper>
		</mix-pulldown-refresh>

	</view>
</template>

<script>
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh'
	import mixLoadMore from '@/components/mix-load-more/mix-load-more'

	let windowWidth = 0,
		scrollTimer = false,
		tabBar;
	export default {
		components: {
			mixPulldownRefresh,
			mixLoadMore,
			uuid: ''
		},
		data() {
			return {
				swiperWidth: '150upx',
				tabCurrentIndex: 0, //当前选项卡索引
				scrollLeft: 0, //顶部选项卡左滑距离
				enableScroll: true,
				tabBars: [],
			}
		},
		async onLoad(option) {
			this.uuid = option.id
			// 获取屏幕宽度
			windowWidth = uni.getSystemInfoSync().windowWidth;
			var appInfo = this.$ls.get('appDeviceInfo')
			this.swiperWidth = appInfo.windowWidth / 3 + 'px'
			this.loadTabbars();
		},
		onReady() {

		},
		methods: {
			/**
			 * 数据处理方法在vue和nvue中通用，可以直接用mixin混合
			 * 这里直接写的
			 * mixin使用方法看index.nuve
			 */
			//获取分类
			loadTabbars() {
				let tabList = [{
						name: '分享',
						id: 1,
						page: 1,
						url: 'readhub/mySubmission?imageArray=1'
					},
					{
						name: '评论',
						id: 2,
						page: 1,
						url: 'comment/myList'
					},
					{
						name: '点评',
						id: 3,
						page: 1,
						url: 'readhub/mySubmission?type=2'
					}
				];
				tabList.forEach(item => {
					item.newsList = [];
					item.loadMoreStatus = 0; //加载更多 0加载前，1加载中，2没有更多了
					item.refreshing = 0;
				})
				this.tabBars = tabList;
				this.loadNewsList('add');
			},
			showPageMore(data) {
				this.iconMenus = getIconMenus(data.item)
				this.shareOption = data.shareOption
				this.$refs.pageMore.show()
			},
			//新闻列表
			loadNewsList(type) {
				let tabItem = this.tabBars[this.tabCurrentIndex];

				//type add 加载更多 refresh下拉刷新
				if (type === 'add') {
					if (tabItem.loadMoreStatus === 2) {
						return;
					}
					tabItem.loadMoreStatus = 1;
				} else if (type === 'refresh') {
					// #ifdef APP-PLUS
					tabItem.refreshing = true;
					// #endif
					tabItem.page = 1
				}


				//异步请求数据
				this.$request.post(tabItem.url, {
					page: tabItem.page,
					uuid: this.uuid
				}).then(res => {
					tabItem.page = tabItem.page + 1
					var list = res.data.data
					if (type === 'refresh') {
						tabItem.newsList = list
						tabItem.page = 1
					} else {
						tabItem.newsList = tabItem.newsList.concat(list)
					}

					//下拉刷新 关闭刷新动画
					if (type === 'refresh') {
						this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh();
						// #ifdef APP-PLUS
						tabItem.refreshing = false;
						// #endif
						tabItem.loadMoreStatus = 0;
					}
					if (!res.data.next_page_url) {
						tabItem.loadMoreStatus = 2
					} else {
						tabItem.loadMoreStatus = 0
					}
				})
			},
			//新闻详情
			navToDetails(item) {
				uni.navigateTo({
					url: '/pages/discover/detail?slug=' + item.slug
				})
			},
			navToDianping(item) {
				uni.navigateTo({
					url: '/pages/dianping/comment?slug=' + item.slug
				})
			},
			navToComment(item) {
				if (/dianping\/comment/.test(item.comment_url)) {
					uni.navigateTo({
						url: '/pages/dianping/comment?slug=' + item.slug
					})
				} else {
					uni.navigateTo({
						url: '/pages/discover/detail?slug=' + item.slug
					})
				}
			},
			//下拉刷新
			onPulldownReresh() {
				this.loadNewsList('refresh');
			},
			//上滑加载
			loadMore() {
				this.loadNewsList('add');
			},
			//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
			setEnableScroll(enable) {
				if (this.enableScroll !== enable) {
					this.enableScroll = enable;
				}
			},

			//tab切换
			async changeTab(e) {

				console.log(tabBar, 'qiehuan')
				if (scrollTimer) {
					//多次切换只执行最后一次
					clearTimeout(scrollTimer);
					scrollTimer = false;
				}
				let index = e;
				//e=number为点击切换，e=object为swiper滑动切换
				if (typeof e === 'object') {
					index = e.detail.current
				}
				if (typeof tabBar !== 'object') {
					tabBar = await this.getElSize("nav-bar")
				}
				//计算宽度相关
				let tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;
				let nowWidth = 0;
				//获取可滑动总宽度
				for (let i = 0; i <= index; i++) {
					let result = await this.getElSize('tab' + i);
					width += result.width;
					if (i === index) {
						nowWidth = result.width;
					}
				}
				//if(typeof e === 'number'){
				//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
				this.tabCurrentIndex = index;
				//}
				//延迟300ms,等待swiper动画结束再修改tabbar
				scrollTimer = setTimeout(() => {
					if (width - nowWidth / 2 > windowWidth / 2) {
						//如果当前项越过中心点，将其放在屏幕中心
						this.scrollLeft = width - nowWidth / 2 - windowWidth / 2;
					} else {
						this.scrollLeft = 0;
					}
					if (typeof e === 'object') {
						this.tabCurrentIndex = index;
					}
					this.tabCurrentIndex = index;


					//第一次切换tab，动画结束后需要加载数据
					let tabItem = this.tabBars[this.tabCurrentIndex];
					if (this.tabCurrentIndex !== 0 && tabItem.loaded !== true) {
						this.loadNewsList('add');
						tabItem.loaded = true;
					}
				}, 300)

			},
			//获得元素的size
			getElSize(id) {
				return new Promise((res, rej) => {
					let el = uni.createSelectorQuery().select('#' + id);
					el.fields({
						size: true,
						scrollOffset: true,
						rect: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
		}
	}
</script>

<style lang='scss' scoped>
	page,
	.content {
		background-color: #f8f8f8;
		height: 100%;
		overflow: hidden;
	}

	/* 顶部tabbar */
	.nav-bar {
		position: relative;
		z-index: 10;
		height: 90upx;
		white-space: nowrap;
		box-shadow: 0 2upx 8upx rgba(0, 0, 0, .06);
		background-color: #fff;

		.nav-item {
			display: inline-block;
			width: 150upx;
			height: 90upx;
			text-align: center;
			line-height: 90upx;
			font-size: 30upx;
			color: #303133;
			position: relative;

			&:after {
				content: '';
				width: 0;
				height: 0;
				border-bottom: 4upx solid #007aff;
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
				transition: .3s;
			}
		}

		.current {
			color: #007aff;

			&:after {
				width: 50%;
			}
		}
	}

	.swiper-box {
		height: 100%;
	}

	.panel-scroll-box {
		height: 100%;

		.panel-item {
			background: #fff;
			padding: 30px 0;
			border-bottom: 2px solid #000;
		}
	}

	/**
	 * 新闻列表 直接拿的nvue样式修改，,
	 * 一共需要修改不到10行代码, 另外px需要直接修改为upx，只有单位不一样，计算都是一样的
	 * 吐槽：难道不能在编译的时候把nuve中的upx转为px? 这样就不用修改单位了
	 */
	.video-wrapper {
		width: 100%;
		height: 440upx;

		.video {
			width: 100%;
		}
	}

	view {
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
	}

	.news-item {
		position: relative;
	}

	/* 修改结束 */

	/* 新闻列表  emmm 仅供参考 */
	.news-item {
		width: 750upx;
		padding: 24upx 30upx;
		border-bottom-width: 1px;
		border-color: #eee;
		background-color: #fff;
	}

	.title {
		font-size: 32upx;
		color: #303133;
		line-height: 46upx;
	}

	.author {
		font-size: 26upx;
		color: #aaa;
	}

	.time {
		font-size: 26upx;
		color: #aaa;
		margin-left: 20upx;
	}

	.img-list {
		display: flex;
		display: -webkit-flex;
		flex-shrink: 0;
		flex-direction: row;
		background-color: #fff;
		width: 100%;
		height: auto;
		flex-wrap: wrap;
	}

	.img-wrapper {
		flex-direction: row;
		margin-right: 10upx;
		height: 140upx;
	}

	.img {
		width: 100%;
		height: 100%;
	}

	.img-empty {
		height: 20upx;
	}

	/* 图在左 */
	.img-list1 {
		position: absolute;
		left: 30upx;
		top: 24upx;
	}

	.title1 {
		padding-left: 240upx;
	}

	.bot1 {
		padding-left: 240upx;
		margin-top: 20upx;
	}

	/* 图在右 */
	.img-list2 {
		position: absolute;
		right: 30upx;
		top: 24upx;
	}

	.title2 {
		padding-right: 210upx;
	}

	.bot2 {
		margin-top: 20upx;
	}

	/* 底部3图 */
	.img-list3 {
		width: 700upx;
		margin: 16upx 0upx;
	}

	.img-wrapper3 {
		width: 32%;
		margin-top: 10upx;
	}

	/* 底部大图 */
	.img-list-single {
		width: 690upx;
		height: 240upx;
		margin: 16upx 0upx;
	}

	.img-wrapper-single {
		height: 240upx;
		margin-right: 0upx;
	}

	.video-tip {
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .3);
	}

	.video-tip-icon {
		width: 60upx;
		height: 60upx;
	}

	.container-commentWrapper {
		.container-commentList {
			position: relative;
			padding: 21.0upx 0 22.96upx;

			.text {
				color: #444444;
				font-size: 31.96upx;
				line-height: 48upx;
			}

			.commentWrapper-content {
				color: #808080;
				font-size: 25.96upx;
				line-height: 48upx;
				margin-top: 7.96upx;
			}

			.commentWrapper-time {
				color: #B4B4B6;
				font-size: 24upx;
				line-height: 33.0upx;
				margin-top: 12upx;
			}
		}
	}

	.bot {
		position: absolute;
		right: 0upx;
		bottom: 0;
		left: 0upx;
		height: 2upx;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: rgb(220, 220, 220);
	}
</style>
