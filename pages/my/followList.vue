<template>
	<view class="content">
		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft">
			<view 
				v-for="(item,index) in tabBars" :key="item.id"
				class="nav-item"
				:style="{width: swiperWidth}"
				:class="{current: index === tabCurrentIndex}"
				:id="'tab'+index"
				@click="changeTab(index)"
			>{{item.name}}</view>
		</scroll-view>
		
		<!-- 下拉刷新组件 -->
		<mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="90" @refresh="onPulldownReresh" @setEnableScroll="setEnableScroll">
			<!-- 内容部分 -->
			<swiper 
				id="swiper"
				class="swiper-box" 
				:duration="300" 
				:current="tabCurrentIndex" 
				@change="changeTab"
			>
				<swiper-item v-for="tabItem in tabBars" :key="tabItem.id">
					<scroll-view 
						class="panel-scroll-box" 
						:scroll-y="enableScroll" 
						@scrolltolower="loadMore"
						>
						<!-- 
							* 新闻列表 
							* 和nvue的区别只是需要把uni标签转为weex标签而已
							* class 和 style的绑定限制了一些语法，其他并没有不同
						-->
						
						<user-directory v-if="tabItem.id == 1" :phones="tabItem.newsList" @paramClick="paramClick"></user-directory>
						<view v-if="tabItem.id == 2"  v-for="(item, index) in tabItem.newsList" :key="index" class="comment-product">
							<view class="product-info" @tap.stop.prevent="toProduct(item)">
									<view class="product-img">
										<image mode="aspectFill" lazy-load :src="item.logo" alt="" class="image lazyImg" /></view>
									<view class="product-detail">
										<view class="productName font-family-medium text-line-1">{{ item.name }}</view>
										<view class="productMark">
											<view class="stars">
												<StarView :rating="item.review_average_rate" />
											</view>
											<view class="starsText">
												<view class="span spanFirst">{{ item.review_average_rate }}分</view>
												<view class="i"></view><view class="span">{{ item.review_count }}条评论</view>
											</view>
										</view>
									</view>
								</view>
								<text class="bot"></text>
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
	import userDirectory from '@/components/user-directory/directory.vue'
	import StarView from '@/components/iw-star/iw-star'

	let windowWidth = 0, scrollTimer = false, tabBar;
	export default {
		components: {
			mixPulldownRefresh,
			mixLoadMore,
			userDirectory,
			StarView
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
		async onLoad() {
			// 获取屏幕宽度
			windowWidth = uni.getSystemInfoSync().windowWidth;
			var appInfo = this.$ls.get('appDeviceInfo')
			this.swiperWidth = appInfo.windowWidth/2 + 'px'
			this.loadTabbars();
		},
		onReady(){

		},
		methods: {
		  	toProduct (item) {
              this.toRoute('/pages/dianping/product?name=' + encodeURIComponent(item.name))
			},
			paramClick (e) {
				console.log(e)
				uni.navigateTo({
						url: '/pages/my/resume?id=' + e.uuid
				})
			},
			toRoute(url) {
				uni.navigateTo({
					url: url
				})
			},
			/**
			 * 数据处理方法在vue和nvue中通用，可以直接用mixin混合
			 * 这里直接写的
			 * mixin使用方法看index.nuve
			 */
			//获取分类
			loadTabbars(){
				let tabList = [
					{
						name: '用户',
						id: 1,
						page: 1,
						url: 'followed/searchUsers?directory=1',
						newsList: {}
					},
					{
						name: '产品服务',
						id: 2,
						page: 1,
						url: 'followed/products',
						newsList: []
					}
				];
				tabList.forEach(item=>{
					item.loadMoreStatus = 0;  //加载更多 0加载前，1加载中，2没有更多了
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
			loadNewsList(type){
				let tabItem = this.tabBars[this.tabCurrentIndex];
				
				//type add 加载更多 refresh下拉刷新
				if(type === 'add'){
					if(tabItem.loadMoreStatus === 2){
						return;
					}
					tabItem.loadMoreStatus = 1;
				}
				
				else if(type === 'refresh'){
					// #ifdef APP-PLUS
					tabItem.refreshing = true;
					// #endif
					tabItem.page = 1
				}
				
				
				//异步请求数据
				this.$request.post(tabItem.url,{page: tabItem.page}).then(res=>{
					tabItem.page = tabItem.page + 1
					var list = [];
					if (tabItem.id == 1) {
						list = res.data
						tabItem.newsList = list
					} else {
						list = res.data.data
						if(type === 'refresh'){
							tabItem.newsList = list; //刷新
							tabItem.page = 1
							} else {
								tabItem.newsList = tabItem.newsList.concat(list);
							}
					}
					
					
					//下拉刷新 关闭刷新动画
					if(type === 'refresh'){
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
			navToDetails(item){
				uni.navigateTo({
					url: '/pages/discover/detail?slug=' + item.slug
				})
			},
			
			//下拉刷新
			onPulldownReresh(){
				this.loadNewsList('refresh');
			},
			//上滑加载
			loadMore(){
				this.loadNewsList('add');
			},
			//设置scroll-view是否允许滚动，在小程序里下拉刷新时避免列表可以滑动
			setEnableScroll(enable){
				if(this.enableScroll !== enable){
					this.enableScroll = enable;
				}
			},

			//tab切换
			async changeTab(e){
				
				if(scrollTimer){
					//多次切换只执行最后一次
					clearTimeout(scrollTimer);
					scrollTimer = false;
				}
				let index = e;
				//e=number为点击切换，e=object为swiper滑动切换
				if(typeof e === 'object'){
					index = e.detail.current
				}
				if(typeof tabBar !== 'object'){
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
					if(i === index){
						nowWidth = result.width;
					}
				}
				//if(typeof e === 'number'){
					//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
					this.tabCurrentIndex = index; 
				//}
				//延迟300ms,等待swiper动画结束再修改tabbar
				scrollTimer = setTimeout(()=>{
					if (width - nowWidth/2 > windowWidth / 2) {
						//如果当前项越过中心点，将其放在屏幕中心
						this.scrollLeft = width - nowWidth/2 - windowWidth / 2;
					}else{
						this.scrollLeft = 0;
					}
					if(typeof e === 'object'){
						this.tabCurrentIndex = index; 
					}
					this.tabCurrentIndex = index; 
					
					
					//第一次切换tab，动画结束后需要加载数据
					let tabItem = this.tabBars[this.tabCurrentIndex];
					if(this.tabCurrentIndex !== 0 && tabItem.loaded !== true){
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
	
	page, .content{
		background-color: #f8f8f8;
		height: 100%;
		overflow: hidden;
	}

	/* 顶部tabbar */
	.nav-bar{
		position: relative;
		z-index: 10;
		height: 90upx;
		white-space: nowrap;
		box-shadow: 0 2upx 8upx rgba(0,0,0,.06);
		background-color: #fff;
		.nav-item{
			display: inline-block;
			width: 150upx;
			height: 90upx;
			text-align: center;
			line-height: 90upx;
			font-size: 30upx;
			color: #303133;
			position: relative;
			&:after{
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
		.current{
			color: #007aff;
			&:after{
				width: 50%;
			}
		}
	}

	.swiper-box{
		height: 100%;
	}

	.panel-scroll-box{
		height: 100%;
		
		.panel-item{
			background: #fff;
			padding: 30px 0;
			border-bottom: 2px solid #000;
		}
	}
	.news-item{
		position:relative;
	}
	/* 修改结束 */
	
	/* 新闻列表  emmm 仅供参考 */
	.news-item{
		width: 750upx;
		padding: 24upx 30upx;
		border-bottom-width: 1px;
		border-color: #eee;
		background-color: #fff;
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
	.comment-product {
    width: 750upx;
		padding: 24upx 30upx;
		border-bottom-width: 1px;
		border-color: #eee;
		background-color: #fff;
		position:relative;
    .product-info {
      overflow: hidden;
      padding-bottom: 31.96upx;
      .product-img {
        width: 87.98upx;
        height: 87.98upx;
        float: left;
        .image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 7.96upx;
        }
      }
      .product-detail {
        float: left;
        margin-left: 19.96upx;
        .productName {
          width: 567.98upx;
          color: #444444;
          font-size: 31.96upx;
          line-height: 45.0upx;
        }
        .productMark {
          display: flex;
          .iconfont{
            color: #FCC816;
            font-size: 24upx;
          }
          .span {
            color: #B4B4B6;
            font-size: 21.98upx;
            line-height: 30upx;
            .spanFirst {
              color: #FCC816;
              margin-left: 6upx;
            }
          }
          .i {
            width: 3.98upx;
            height: 3.98upx;
            margin-right: 9.98upx;
            vertical-align: middle;
            border-radius: 50%;
            background: #B4B4B6;
            display: inline-block;
          }
        }
      }
    }
  }
</style>
