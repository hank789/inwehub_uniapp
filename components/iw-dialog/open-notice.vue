<template>
	<view>
		<uni-popup :show="show" position="middle" mode="fixed" @hidePopup="hidePopup()">
			<view class="contentWrapper">

				<view class="close alertClose" @tap="hidePopup">
					<text class="iconfont icon-times--"></text>
				</view>

				<view class="text">请先开启通知，</view>
				<view class="text">我们将为您推送每日热点推荐~</view>
				<view class="setingStep">“设置”-“通知”-开启InweHub</view>

				<view class="buttonWrapper sure alertConfirm" @tap.stop.prevent="nowOpen">
					<text class="font-family-medium">现在开启</text>
					<view class="bot"></view>
				</view>
				<view class="buttonWrapper sure alertConfirm"  @tap.stop.prevent="hidePopup()">
					<text class="font-family-medium">稍后提醒</text>
					<view class="bot"></view>
				</view>

			</view>
		</uni-popup>

	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				show: this.showPopup,
				buttonText: '确定'
			}
		},
		components: {
			uniPopup
		},
		props: {
			showPopup: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			nowOpen() {
				this.$emit('nowOpens')
			},
			showDialog() {
				this.show = true
			},
			hidePopup() {
				this.show = false
			},
		}
	}
</script>

<style lang="less">
	.contentWrapper {
    width: 600upx;
    background: #FFFFFF;
  }
  .contentWrapper .close, .subscribeWrapper .close, .hotRecommendWrapper .close, .EmailSubscribe .close {
    text-align: right;
    padding: 30upx;
    color: #808080;
    font-size: 25.96upx;
  }
  .contentWrapper .text {
    color: #444444;
    font-size: 31.96upx;
    line-height: 48upx;
    text-align: left;
    padding: 0 30upx;
    font-family:PingFangSC-Medium;
  }
  .contentWrapper .setingStep {
    color: #808080;
    font-size: 25.96upx;
    line-height: 36upx;
    margin-top: 19.96upx;
    text-align: left;
    padding: 0 30upx 60upx;
  }
  .contentWrapper .buttonWrapper, .hotRecommendWrapper .buttonWrapper, .EmailSubscribe .buttonWrapper {
    position: relative;
    text-align: center;
    color: #03AEF9;
    line-height: 97.96upx;
  }
  .contentWrapper .buttonWrapper .bot, .hotRecommendWrapper .buttonWrapper .bot, .EmailSubscribe .buttonWrapper .bot {
    top: 0;
  }
</style>
