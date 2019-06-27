<template>
    <view>
        
    </view>
</template>

<script>
	import share from "@/lib/sharePlus.js";
	var wv;//计划创建的webview
  export default {
    data() {
      return {
        detailData: {
          url: ''
        }
      }
    },
		onBackPress() {
			//监听back键，关闭弹出菜单
			if (this.shareObj.shareMenu.isVisible()) {
				this.shareObj.shareMenu.hide();
				this.shareObj.alphaBg.hide();
				return true
			}
		},
		onNavigationBarButtonTap(e) {
			switch(e.index) {
				case 0:
					this.shareInfo()
					break
			}
		},
    onLoad(options)
    {
      this.detailData = JSON.parse(options.data);
			if (!this.detailData.url) {
				uni.redirectTo({
					url: '/pages/discover/detail?slug=' + this.detailData.slug
				})
				return
			}
      uni.$on('articleWebviewToComment', () => {
        uni.navigateTo({ url: '/pages/dianping/comment?slug=' +  this.detailData.slug})
      })

      uni.$on('articleWebviewToShare', () => {
        this.shareInfo()
      })

      uni.setNavigationBarTitle({
					title: this.detailData.title
			});
			// #ifdef APP-PLUS
			var wv = plus.webview.create("","custom-webview",{
					progress: {
						color: '#FF3333'
					},
					bottom: '44px',
					plusrequire:"none", //禁止远程网页使用plus的API，有些使用mui制作的网页可能会监听plus.key，造成关闭页面混乱，可以通过这种方式禁止
					top:uni.getSystemInfoSync().statusBarHeight+44 //放置在titleNView下方。如果还想在webview上方加个地址栏的什么的，可以继续降低TOP值
			})
			wv.loadURL(this.detailData.url)
			var currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
			currentWebview.append(wv);//一定要append到当前的页面里！！！才能跟随当前页面一起做动画，一起关闭
			let subNVue = uni.getSubNVueById('comment_footer')
			
			subNVue.show('fade-in', 200, () => {
				setTimeout(()=>{
					console.log('show nvue')
					uni.$emit('refreshWebviewCommentPageData', {
					slug: this.detailData.slug,
					id: this.detailData.id
				})
				},300)
			})
			// #endif
    },
		onUnload() {
			// 移除监听事件  
      uni.$off('articleWebviewToComment')
			uni.$off('articleWebviewToShare')
		},
		methods: {
			shareInfo(){
				let shareInfo={
					href: this.detailData.h5Url,
					title: this.detailData.title,
					desc: '来自Inwehub，点击查看更多热度分享。',
					imgUrl: this.detailData.img + '?x-oss-process=image/resize,h_100,w_100'
				};
				let shareList=[
					{
						icon:"/static/images/sharemenu/wx.png",
						text:"微信好友",
					},
					{
						icon:"/static/images/sharemenu/pyq.png",
						text:"朋友圈"
					},
					{
						icon:"/static/images/sharemenu/copy.png",
						text:"复制"
					},
					{
						icon:"/static/images/sharemenu/more.png",
						text:"更多"
					},
				];
				this.shareObj=share(shareInfo,shareList,function(index){
					console.log("点击按钮的序号: " + index);
					let shareObj={
						href:shareInfo.href||"",
						title:shareInfo.title||"",
						summary:shareInfo.desc||"",
						success:(res)=>{
							console.log("success:" + JSON.stringify(res));
						},
						fail:(err)=>{
							console.log("fail:" + JSON.stringify(err));
						}
					};
					switch (index) {
						case 0:
							shareObj.provider="weixin";
							shareObj.scene="WXSceneSession";
							shareObj.type=0;
							shareObj.imageUrl=shareInfo.imgUrl||"";
							uni.share(shareObj);
							break;
						case 1:
							shareObj.provider="weixin";
							shareObj.scene="WXSenceTimeline";
							shareObj.type=0;
							shareObj.imageUrl=shareInfo.imgUrl||"";
							uni.share(shareObj);
							break;
						case 2:
							uni.setClipboardData({
								data:shareInfo.href,
								complete() {
									uni.showToast({
										title: "已复制到剪贴板"
									})
								}
							})
							break;
						case 3:
							plus.share.sendWithSystem({
								type:"web",
								title:shareInfo.title||"",
								thumbs:[shareInfo.imgUrl||""],
								href:shareInfo.href||"",
								content: shareInfo.desc||"",
							})
							break;
					};
				});
				this.$nextTick(()=>{
					this.shareObj.alphaBg.show();
					this.shareObj.shareMenu.show();
				})
			}
		},
  }
</script>

<style>

</style>