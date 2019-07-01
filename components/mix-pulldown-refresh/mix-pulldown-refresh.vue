<template>
	<!-- #ifdef H5	 -->	
	<view 
		class="mix-refresh-content"
		:style="{
				transform: 'translateY('+ pageDeviation +'px)',
				transition: pageTransition + 's',
				height: 'calc(100% - ' + pageTop + 'px)',
				maxHeight: 'calc(100% - ' + pageTop + 'px)'
			}"
		@touchstart="pageTouchstart"
		@touchmove="pageTouchmove"
		@touchend="pageTouchend"
	>
	<!-- #endif -->
	<!-- #ifndef H5	 -->	
	<view 
		class="mix-refresh-content"
		:style="{
				transform: 'translateY('+ pageDeviation +'px)',
				transition: pageTransition + 's',
				height: 'calc(100vh - ' + pageTop + 'px)',
				maxHeight: 'calc(100vh - ' + pageTop + 'px)'
			}"
		@touchstart="pageTouchstart"
		@touchmove="pageTouchmove"
		@touchend="pageTouchend"
	>
	<!-- #endif -->

            <!-- 下拉刷新 -->
		<view class="mix-loading-wrapper">
			<image 
				class="mix-loading-icon" 
				:class="{active: refreshing, ready: refreshReady}" 
				src="data:image/jpeg;base64,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">
			</image>
		</view>
		
		<slot></slot>
		
	</view>
</template>

<script>
	let startY, moveY, windowHeight = 500, platform;
	let timeDiff = 0;
	let touchending;
	export default {
		
		props: {
			top: {
				//距离顶部距离，单位upx
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				pageDeviation: 0, //下偏移量
				pageTransition: 0, //回弹过渡时间
				refreshReady: false, //进入刷新准备状态
				refreshing: false, // 进入刷新状态
			};
		},
		computed: {
			pageTop(){
				return uni.upx2px(this.top);
			}
		},
		created(){
			uni.getSystemInfo({
				success: function(e) {
					platform = e.platform;
					windowHeight = e.windowHeight;
				}
			})
		},
		methods: {
			pageTouchstart(e){
				touchending = false;
				this.pageTransition = 0;
				startY = e.touches[0].pageY;
			},
			pageTouchmove(e){
				if(touchending){
					return;
				}
				moveY = (e.touches[0].pageY - startY) * 0.4;
				if(moveY >= 0){
					this.pageDeviation = moveY;
					
					this.$emit('setEnableScroll', false);
				}
				if(moveY >= 50 && this.refreshReady === false){
					this.refreshReady = true;
				}else if(moveY < 50 && this.refreshReady === true){
					this.refreshReady = false;
				}
				if(platform === 'ios' && e.touches[0].pageY > windowHeight + 10){
					this.pageTouchend();
				}
			},
			pageTouchend(){
				touchending = true;
				if(moveY === 0){
					return;
				}
				this.pageTransition = 0.3;
				if(moveY >= 50){
					this.startPulldownRefresh();
				}else{
					this.pageDeviation = 0;
				}
				
				if(this.refreshReady === true){
					this.refreshReady = false;
				}
				//修复下拉一点回弹后页面无法滚动的bug
				this.$emit('setEnableScroll', true);
				startY = moveY = 0;
			},
			//开启下拉刷新
			startPulldownRefresh(){
				if(+new Date() - timeDiff < 100){
					return;
				}
				timeDiff = +new Date();
				this.refreshing = true;
				this.pageDeviation = uni.upx2px(90);
				this.$emit('refresh');
			},
			//结束下拉刷新
			endPulldownRefresh(){
				this.refreshing = false;
				this.pageDeviation = uni.upx2px(0);
				//this.$emit('setEnableScroll', true);
			},
		}
	}
</script>

<style>
	.mix-refresh-content{
		display: flex;
		flex-direction: column;
		position: relative;
	}
	/* 下拉刷新部分 */
	.mix-loading-wrapper{
		position: absolute;
		left: 0;
		top: 0;
		transform: translateY(-100%);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	
	.mix-loading-icon{
		width: 50upx;
		height: 50upx;
		transition: .3s;
	}
	.mix-loading-icon.ready{
		/*transform: scaleX(1.3);*/
	}
	.mix-loading-icon.active{
		animation: mescrollRotate .5s ease-in infinite both alternate;
	}
	
	@keyframes loading {
		0% {
			transform: translateY(-20upx) scaleX(1);
		}
		100% {
			transform: translateY(4upx)  scaleX(1.3);
		}
	}

	@-webkit-keyframes mescrollRotate{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes mescrollRotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
	
</style>
