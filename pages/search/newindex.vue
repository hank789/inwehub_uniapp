<template>
	<view class="content">
		<view class="mui-content">
			<!-- #ifndef APP-PLUS -->
			<view class="search">
				<view class="p border-football">
					<text class="iconfont icon-sousuo " />
					<input v-model.trim="searchText" class="input" type="text" focus="true" placeholder="搜产品、内容" @keydown.enter="enterKeyCode($event)">
					<text class="iconfont icon-times1 " />
				</view>
				<view class="p" @tap.stop.prevent="back()">取消</view>
			</view>
			<!-- #endif -->
			
			<scroll-view v-if="getCurrentMode === 'result' && searchText !== ''" id="nav-bar" class="nav-bar" scroll-x
			 scroll-with-animation :scroll-left="scrollLeft">
				<view v-for="(item,index) in tabBars" :key="item.id" class="nav-item" :style="{width: swiperWidth}" :class="{current: index === tabCurrentIndex}"
				 :id="'tab'+index" @click="changeTab(index)">{{item.name}}</view>
			</scroll-view>

			<view v-if="getCurrentMode === 'history'" class="hotSearch">
				<view class="hotSearchText">
					<text class="iconfont icon-huo " />
					<view class="span font-family-medium">热搜</view>
				</view>
				<view class="hotSearchList">
					<view v-for="(item, index) in hotSearchHistory.top" :key="index" class="span" @tap.stop.prevent="selectConfirmSearchText(item)">{{ item }}</view>
				</view>
				<view class="hotSearchText history">
					<view class="span font-family-medium">历史</view>
				</view>
				<view class="hotSearchList">
					<view v-for="(item, index) in hotSearchHistory.history" :key="index" class="span" @tap.stop.prevent="selectConfirmSearchText(item)">{{ item }}</view>
				</view>
			</view>

			<view v-if="getCurrentMode === 'match'" class="searchList">
				<view class="listOne div" @tap.stop.prevent="selectConfirmSearchText(searchText)">
					查看“{{ searchText }}”的搜索结果
					<view class="i bot" />
				</view>
			</view>

			<view v-if="getCurrentMode === 'match'" class="searchList">
				<view class="div" v-for="(item, index) in searchAdviceList" :key="index" @tap.stop.prevent="selectConfirmSearchText(item)">
					{{ item }}
					<view class="i bot" />
				</view>
			</view>
			
			<!-- <mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="90" @refresh="onPulldownReresh"
			 @setEnableScroll="setEnableScroll" v-if="getCurrentMode === 'result'"> -->
				<!-- 内容部分 -->
				<swiper id="swiper" class="swiper-box" :duration="300" :current="tabCurrentIndex" @change="changeTab">
					<swiper-item v-for="tabItem in tabBars" :key="tabItem.id">
						<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore">
							
							<view v-if="getCurrentMode === 'result' && searchText !== '' && tabItem.id === 1" >
								<iw-search :confirmSearchText="confirmSearchText"></iw-search>
							</view>
							<view v-if="getCurrentMode === 'result' && searchText !== '' && tabItem.id === 2">
								<iw-discover :confirmSearchText="confirmSearchText"></iw-discover>
							</view>
							<view v-if="getCurrentMode === 'result' && searchText !== '' && tabItem.id === 3">
								<iw-product :confirmSearchText="confirmSearchText"></iw-product>
							</view>
							<view v-if="getCurrentMode === 'result' && searchText !== '' && tabItem.id === 4">
								<iw-comment :confirmSearchText="confirmSearchText"></iw-comment>
							</view>

						</scroll-view>
					</swiper-item>
				</swiper>
			<!-- </mix-pulldown-refresh> -->

		</view>

		<PageMore ref="pageMore" :share-option="shareOption" :hide-share-btn="true" :icon-menu="iconMenus" @success="shareSuccess"
		 @fail="shareFail" @clickedItem="iconMenusClickedItem" />

		<iwDialogReport ref="alertReport"></iwDialogReport>

	</view>
</template>

<script type="text/javascript">
	import { searchText as searchTextFilter } from '@/lib/search'
	import { postRequest } from '@/lib/request'
	import { autoBlur, textToLinkHtml } from '@/lib/dom'
	import FeedItem from '@/components/iw-feed-item/iw-feed-item.vue'
	import StarView from '@/components/iw-star/iw-star'
	import PageMore from '@/components/iw-page-more/iw-page-more'
	import { getIconMenus, iconMenusClickedItem } from '@/lib/feed'
	import { setNavbarSearchInputText } from '@/lib/allPlatform'
	import iwDialogReport from '@/components/iw-dialog/report.vue'
	import iwDiscover from "@/components/iw-search-page/iw-discover.vue"
	import iwSearch from "@/components/iw-search-page/iw-search.vue"
	import iwComment from "@/components/iw-search-page/iw-comment.vue"
	import iwProduct from "@/components/iw-search-page/iw-product.vue"

	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh'
	import mixLoadMore from '@/components/mix-load-more/mix-load-more'

	let windowWidth = 0,
		scrollTimer = false,
		tabBar;

	export default {
		components: {
			FeedItem,
			StarView,
			PageMore,
			iwDialogReport,
			mixPulldownRefresh,
			mixLoadMore,
			iwDiscover,
			iwSearch,
			iwProduct,
			iwComment
		},
		data() {
			return {
				pageOption: {},
				searchText: '',
				confirmSearchText: '',
				isShowCancelButton: false,
				shareOption: {},
				iconMenus: [],
				list: {
					submission: {
						list: []
					},
					question: {
						list: []
					},
					group: {
						list: []
					},
					review: {
						list: []
					},
					product: {
						list: []
					}
				},
				listPage: [],
				searchAdviceList: [],
				resultLoading: 1,
				hotSearchHistory: {
					history: [],
					top: []
				},
				tabBars: [],
				swiperWidth: '150upx',
				tabCurrentIndex: 0, //当前选项卡索引
				scrollLeft: 0, //顶部选项卡左滑距离
				enableScroll: true
			}
		},
		computed: {
			dataList() {
				return {
					search_word: this.confirmSearchText
				}
			},
			getCurrentMode() {
				if (this.searchText === '') {
					return 'history'
				}

				if (this.searchText !== this.confirmSearchText) {
					return 'match'
				}

				setTimeout(() => {
					autoBlur()
				}, 100)

				return 'result'
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateBack({
				animationType: 'none'
			})
		},
		watch: {
			searchText: function(newValue, oldValue) {
				searchTextFilter(newValue, (text) => {
					if (newValue) {
						this.isShowCancelButton = true
						// this.loadNewsList('add', newValue)

						if (newValue !== this.confirmSearchText) {
							this.initList()
						}
					}
				})
			}
		},
		created() {
			this.refreshPageData()
		},
		activated() {
			this.refreshPageData()
		},
		mounted() {},
		onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
			this.pageOption = option
			windowWidth = uni.getSystemInfoSync().windowWidth;
			var appInfo = this.$ls.get('appDeviceInfo')
			this.swiperWidth = appInfo.windowWidth / 4 + 'px'
			this.loadTabbars()
		},
		onNavigationBarSearchInputChanged(e) {
			this.searchText = e.text
		},
		onNavigationBarSearchInputConfirmed(e) {
			this.searchText = e.text
		},
		methods: {

			//下拉刷新
			onPulldownReresh() {
				// this.loadNewsList('refresh', this.searchText);
			},
			//上滑加载
			loadMore() {
				// this.loadNewsList('add', this.searchText);
			},

			//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
			setEnableScroll(enable) {
				if (this.enableScroll !== enable) {
					this.enableScroll = enable;
				}
			},
			loadTabbars() {
				let tabList = [{
						name: '综合',
						id: 1,
						page: 1,
						url: 'search/all'
					},
					{
						name: '分享',
						id: 2,
						page: 1,
						url: 'search/submission'
					},
					{
						name: '产品',
						id: 3,
						page: 1,
						url: 'search/tagProduct'
					},
					{
						name: '点评',
						id: 4,
						page: 1,
						url: 'search/reviews'
					}
				];
				tabList.forEach(item => {
					item.newsList = [];
					item.loadMoreStatus = 0; //加载更多 0加载前，1加载中，2没有更多了
					item.refreshing = 0;
				})
				this.tabBars = tabList;
			},
// 			loadNewsList(type, searchText) {
// 				let tabItem = this.tabBars[this.tabCurrentIndex];
// 
// 				//type add 加载更多 refresh下拉刷新
// 				if (type === 'add') {
// 					if (tabItem.loadMoreStatus === 2) {
// 						return;
// 					}
// 					tabItem.loadMoreStatus = 1;
// 				} else if (type === 'refresh') {
// 					// #ifdef APP-PLUS
// 					tabItem.refreshing = true;
// 					// #endif
// 					tabItem.page = 1
// 				}
// 				
// 				this.list = this.$options.data().list
// 
// 				//异步请求数据
// 				this.$request.post(tabItem.url, {
// 					search_word: searchText
// 				}).then(res => {
// 					tabItem.page = tabItem.page + 1
// 					
// 					if (tabItem.id !==1 ) {
// 						if (type === 'refresh') {
// 							this.listPage = res.data.data
// 							tabItem.page = 1
// 						} else {
// 							this.listPage = res.data.data
// 						}
// 					} else {
// 						if (type === 'refresh') {
// 							this.list = res.data
// 							tabItem.page = 1
// 						} else {
// 							this.list = res.data
// 						}
// 					}
// 
// 					//下拉刷新 关闭刷新动画
// 					if (type === 'refresh') {
// 						this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh();
// 						// #ifdef APP-PLUS
// 						tabItem.refreshing = false;
// 						// #endif
// 						tabItem.loadMoreStatus = 0;
// 					}
// 					if (!res.data.next_page_url) {
// 						tabItem.loadMoreStatus = 2
// 					} else {
// 						tabItem.loadMoreStatus = 0
// 					}
// 				})
// 			},

			//tab切换
			async changeTab(e) {
				
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

				let tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;
				let nowWidth = 0;
				for (let i = 0; i <= index; i++) {
					let result = await this.getElSize('tab' + i);
					width += result.width;
					if (i === index) {
						nowWidth = result.width;
					}
				}
				this.tabCurrentIndex = index;

				scrollTimer = setTimeout(() => {
					if (width - nowWidth / 2 > windowWidth / 2) {
						this.scrollLeft = width - nowWidth / 2 - windowWidth / 2;
					} else {
						this.scrollLeft = 0;
					}
					if (typeof e === 'object') {
						this.tabCurrentIndex = index;
					}
					this.tabCurrentIndex = index;

					let tabItem = this.tabBars[this.tabCurrentIndex];
					if (this.tabCurrentIndex !== 0 && tabItem.loaded !== true) {
						// this.loadNewsList('add', this.searchText);
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

			toProduct(item) {
				this.to('/pages/dianping/product?name=' + encodeURIComponent(item.name))
			},
			to(url) {
				uni.navigateTo({
					url: url
				})
			},
			redirectTo(url) {
				uni.redirectTo({
					url: url
				})
			},
			iconMenusClickedItem(item) {
				iconMenusClickedItem(this, this.itemOptionsObj, item, () => {
					this.iconMenus = getIconMenus(this.itemOptionsObj)
				})
			},
			shareFail() {

			},
			shareSuccess() {

			},
			showItemMore(data) {
				const shareOption = data.shareOption
				const item = data.item
				this.iconMenus = getIconMenus(item)
				this.itemOptionsObj = item
				this.shareOption = shareOption
				this.$refs.pageMore.share()
			},
			toDetail(id, type) {
				uni.navigateTo('/ask/offer/answers/' + id, 'list-detail-page', true, 'pop-in', 'hide', true)
			},
			initList() {
				this.list = {
					submission: {
						list: []
					},
					question: {
						list: []
					},
					group: {
						list: []
					},
					review: {
						list: []
					},
					product: {
						list: []
					}
				}
			},
			enterKeyCode: function(ev) {
				if (ev.keyCode === 13) {
					this.selectConfirmSearchText(this.searchText)
				}
			},
			getStateClass(state) {
				return getQuestionStateClass(state)
			},
			textToLink(text) {
				return textToLinkHtml(' ' + text)
			},
			refreshPageData: function() {
				var text = this.pageOption.text
				if (text) {
					this.searchText = text
					this.selectConfirmSearchText(text)
				}
				this.hotSearch()
			},
			focus: function() {
				this.confirmSearchText = ''
				// this.list = []
				if (this.searchText) {
					this.searchAdvice(this.searchText)
				}
			},
			selectConfirmSearchText(text) {
				this.searchText = text
				setNavbarSearchInputText(this, text)
				if (text) {
					this.resultLoading = 1
					this.confirmSearchText = text
				}
				this.searchAdviceList = []
			},
			hotSearch() {
				postRequest(`search/topInfo`, {}).then(response => {
					var code = response.code
					if (code !== 1000) {
						ui.alert(response.message)
						return
					}
					this.hotSearchHistory = response.data
				})
			},
			searchAdvice(searchText) {
				postRequest(`search/suggest`, {
					search_word: searchText
				}).then(response => {
					var code = response.code
					if (code !== 1000) {
						ui.alert(response.message)
						return
					}
					this.searchAdviceList = response.data.suggest
				})
			},
			toResume(uuid) {
				if (!uuid) {
					return false
				}
				uni.navigateTo('/share/resume?id=' + uuid + '&goback=1' + '&time=' + (new Date().getTime()))
			},
			back() {
				this.empty()
				uni.navigateBack()
				return
			},
			// 文字高亮
			getHighlight(content) {
				var reg = new RegExp('(' + this.searchText + ')', 'gi') // 正则验证匹配
				var newstr = content.replace(reg, '<view class=\'span\'  style="color: #03aef9">$1</view>') // 动态添加颜色
				return newstr
			},
			// 时间处理；
			timeago(time) {
				const newDate = new Date()
				newDate.setTime(Date.parse(time.replace(/-/g, '/')))
				return newDate
			},
			//  点击清空输入框
			empty() {
				this.searchText = ''
			}
		}
	}
</script>

<style scoped lang="less">
	.bot {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 2upx;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: rgb(220, 220, 220);
	}

	page,
	.content {
		background-color: #f8f8f8;
		height: 100%;
		overflow: hidden;
	}

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

	.mui-content {
		height: 100%;
		overflow: hidden;
		background: #ffffff;

		.listWrapper {
			top: 168upx;
		}

		.search {
			position: relative;
			width: 100%;
			padding: 0 31.96upx;
			display: flex;
			height: 87.98upx;
			margin-top: 9.98upx;
			flex-direction: row;
			align-items: center;
			background: #ffffff;
			justify-content: space-between;

			.border-football {
				&:after {
					height: 132.76upx;
				}
			}

			.p {
				&:nth-of-type(1) {
					width: 585.98upx;
					height: 67.96upx;
					border-radius: 99.98upx;
					background: #f3f4f6;
					/*border:1.96upx solid #dcdcdc;*/
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					padding: 0 19.96upx;

					.iconfont {
						color: #c8c8c8;

						&:nth-of-type(1) {
							font-size: 36upx;
							margin-top: 3.98upx;
						}

						&:nth-of-type(2) {
							margin-left: 19.96upx;
							font-size: 39.98upx;
							position: relative;
							z-index: 980;
						}
					}

					.input {
						width: 451.96upx !important;
						height: 63.98upx;
						border: none;
						background: #f3f4f6;
						font-size: 27.98upx;
						color: #444444;
						position: absolute;
						left: 63.98upx;
						z-index: 990;
						padding: 0 19.96upx;
					}
				}

				&:nth-of-type(2) {
					width: 79.96upx;
					font-size: 30upx;
					color: #03aef9;
					text-align: right;
					line-height: 42upx;
				}
			}
		}

		/*导航栏的样式*/
		.menu {
			width: 100%;
			height: 78upx;
			background: #ffffff;
			font-size: 27.98upx;
			color: #444444;
			display: flex;
			flex-direction: row;
			position: relative;
			z-index: 7;
			margin-top: -7.96upx;

			.span {
				display: flex;
				width: 13.5%;
				height: 100%;
				justify-content: center;
				align-items: center;

				&:nth-of-type(1) {
					font-size: 27.98upx;
					position: relative;
					color: #444444;
					font-weight: 500;

					.i {
						position: absolute;
						width: 54upx;
						height: 3.98upx;
						border-radius: 99.98upx;
						background: #03aef9;
						left: 0;
						right: 0;
						bottom: 0;
						margin: auto;
					}
				}
			}
		}
	}

	.hotSearch {
		padding: 24upx 31.96upx;

		.history {
			margin-top: 12upx;
		}

		.hotSearchText {
			padding-bottom: 24upx;

			.span {
				color: #444444;
				font-size: 31.96upx;
				line-height: 43.96upx;
			}

			.iconfont {
				color: #FA4975;
			}
		}

		.hotSearchList {
			.span {
				height: 54upx;
				line-height: 54upx;
				color: #444444;
				font-size: 24upx;
				padding: 0upx 19.96upx;
				background: #F3F4F6;
				border-radius: 199.96upx;
				margin: 0 9.98upx 19.96upx 0;
				display: inline-block;
			}
		}
	}

	/*搜索建议*/
	.searchList {
		padding: 0 31.96upx;
		position: relative;
		z-index: 1000;

		.div {
			color: #808080;
			font-size: 30upx;
			padding: 24upx 0;
			line-height: 43.96upx;
			position: relative;
		}

		.listOne {
			color: #03AEF9;
		}
	}

	.searchTitle {
		color: #808080;
		font-size: 25.96upx;
		padding-left: 31.96upx;
		line-height: 57.98upx;
		background: #F3F4F6;
	}

	.checkAll {
		height: 87.98upx;
		line-height: 87.98upx;
		text-align: center;

		.span {
			color: #808080;
			font-size: 25.96upx;
		}
	}

	.noTime {
		height: 114upx;
		padding-top: 24.98upx;
		text-align: center;

		.span {
			color: #C8C8C8;
			font-size: 24upx;
		}
	}

	.productList {
		.comment-product {
			padding: 25.96upx 30upx 0;

			.product-info {
				padding: 0 0 30upx;
				background: none;
			}
		}
	}

	.comment-product {
		padding: 21.98upx 30upx 30upx;

		.product-info {
			overflow: hidden;
			background: #F7F8FA;
			padding: 19.96upx;

			.product-img {
				width: 87.98upx;
				height: 87.98upx;
				float: left;

				.image {
					width: 100%;
					height: 100%;
					border-radius: 7.96upx;
					object-fit: contain;
				}
			}

			.product-detail {
				float: left;
				margin-left: 19.96upx;
				width: 562.50upx;

				.productName {
					color: #444444;
					font-size: 31.96upx;
					line-height: 45.0upx;
				}

				.productMark {
					display: flex;
					align-items: center;

					.stars {
						margin-right: 10upx;
					}

					.iconfont {
						color: #FCC816;
						font-size: 24upx;
					}

					.span {
						color: #B4B4B6;
						font-size: 24upx;

						&:nth-of-type(1) {
							color: #FCC816;
							margin-left: 6upx;
						}
					}

					.i {
						width: 3.98upx;
						height: 3.98upx;
						margin: 9.98upx;
						vertical-align: middle;
						border-radius: 50%;
						background: #B4B4B6;
						display: inline-block;
					}
				}
			}
		}
	}

	.container-list-question .question {
		margin-top: 0 !important;
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
</style>
