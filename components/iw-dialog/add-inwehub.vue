<template>
	<view>
		<uni-popup :show="show" position="middle" mode="fixed" @hidePopup="hidePopup()">
			<view class="component-addWeChat">
				<view class="close" @click="clickItem">
					<text class="iconfont icon-guanbi"></text>
				</view>
				<view class="weChatText">截图保存后扫描 添加客服小哈微信</view>
				<view class="weChatImg">
					<image class="codeImg" src="../../static/images/xhWeChat@3x.png"></image>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"

	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				show: this.showPopup
			}
		},
		watch: {
			showPopup(newValue, oldValue) {
				this.show = newValue
			}
		},
		props: {
			showPopup: {
				type: Boolean,
				default: false
			}
		},
		onLoad() {

		},
		methods: {
			showDialog() {
				this.show = true
			},
			hidePopup() {
				this.show = false
			},
			clickItem() {
				this.$emit('clickButton')
			},
			onBackPress() {
				if (this.show) {
					this.show = false
					return true
				}
			}
		}
	}
</script>

<style lang="less">
	.component-addWeChat {
		width: 600upx;
		padding-bottom: 60upx;
		border-radius: 26upx;
		background: #FFFFFF;
		.close {
			color: #808080;
			text-align: right;
			padding-top: 30upx;
			padding-right: 30upx;
			.iconfont {
				font-size: 37.96upx;
			}
		}
		.weChatText {
			color: #808080;
			font-size: 25.96upx;
			line-height: 36upx;
			text-align: center;
		}
		.weChatImg {
			width: 300upx;
			height: 300upx;
			margin: 25.96upx auto 0;
			.codeImg {
				width: 100%;
				height: 100%;
			}
		}
	}
	.component-addWeChat .bottom-btn {
		color: #03aef9;
		height: 90upx;
		line-height: 90upx;
		font-size: 32upx;
		border-top: 4upx #f5f5f5 solid;
		text-align: center;
		width: 100%;
		margin-top: 60upx;
		padding-top: 10upx;
	}
</style>
