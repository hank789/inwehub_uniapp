<template>
	<view>
			<uni-popup :show="show" position="middle" mode="fixed" @hidePopup="hidePopup()">
				<view class="headAndNickname">
					<view class="iconImg">
						<text class="iconfont icon-wanshantouxiangnicheng"></text>
					</view>
					<view class="titleText"><text>补全头像和昵称<br>做一个有身份的人</text></view>
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
				buttonText: '导入微信头像和昵称'
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
.headAndNickname {
    text-align: center;
    background: #ffffff;
  }
  .headAndNickname {
    width: 600upx !important;
  }
	.headAndNickname .iconImg {
    margin-bottom: -80upx;
  }
  .headAndNickname .iconImg .iconfont {
    margin-top: 60upx;
    font-size: 219.98upx;
		color: #03aef9;
  }
  .headAndNickname .titleText {
    margin-top: 21.98upx;
  }
  .headAndNickname .titleText uni-text {
    color: #444444;
    font-size: 31.96upx;
    line-height: 45.0upx;
  }
  .headAndNickname .buttonText {
    line-height: 103.96upx;
  }
  .headAndNickname .buttonText span {
    font-size: 31.96upx;
  }
  .headAndNickname .weChat {
    margin-top: 73.96upx;
    color: #03AEF9;
  }
  .headAndNickname .close {
    color: #444444;
  }

	.headAndNickname .bottom-btn {
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
