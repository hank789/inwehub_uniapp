<template>
    <view>
        <view v-if="detailData.url">
            <web-view :webview-styles="webviewStyles"
                      :src="detailData.url"></web-view>

        </view>
        <view v-else>参数错误</view>
    </view>
</template>

<script>
	import share from "@/lib/sharePlus.js";
  export default {
    data() {
      return {
        webviewStyles: {
          progress: {
            color: '#FF3333'
          }
        },
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
    },
		methods: {
			shareInfo(){
				let shareInfo={
					href: this.detailData.url,
					title: this.detailData.title,
					desc: this.detailData.title,
					imgUrl: this.detailData.img
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