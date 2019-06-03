<template>
	<view>
			<uni-popup :show="show" position="middle" mode="fixed" @hidePopup="hidePopup()">
				<view class="component-addWeChat">
					<view class="weChatText">截图保存后扫描 添加客服小哈微信</view>
					<view class="weChatImg"><image src="../../static/images/xhWeChat@3x.png"></image></view>
					<view class="bottom-btn" @click="clickItem">{{buttonText}}</view>
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
        show: this.showPopup,
				buttonText: '确定'
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
    background: #FFFFFF;
  }
  .component-addWeChat .close {
    color: #808080;
    text-align: right;
    padding-top: 30upx;
    padding-right: 30upx;
  }
  .component-addWeChat .close .icon {
    font-size: 37.96upx;
  }
  .component-addWeChat .weChatText {
    color: #808080;
    font-size: 25.96upx;
    line-height: 36upx;
    text-align: center;
  }
  .component-addWeChat .weChatImg {
    width: 300upx;
    height: 300upx;
    margin: 25.96upx auto 0;
  }
  .component-addWeChat .weChatImg uni-image {
    width: 100%;
    height: 100%;
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
