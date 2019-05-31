<template>
	<view>
			<uni-popup :show="show" position="middle" mode="fixed" @hidePopup="hidePopup()">
				<view class="component-phoneBindWarning">
					<view class="pbwTitle">{{title}}</view>
					<view class="pbwIphone">{{phone}}</view>
					<view class="pwbAvatar"><image :src="avatar"></image></view>
					<view class="pwbName">{{name}}</view>
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
        show: this.showPopup
      }
    },
		watch: {
			showPopup(newValue, oldValue) {
				this.show = newValue
			}
		},
    props: {
      title: {
        type: String,
        default: ''
      },
			buttonText: {
				type: String,
				default: '确定'
			},
      phone: {
        type: String,
        default: ''
      },
      avatar: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
			codeType: {
				type: Number,
        default: 1131
			},
      isVip: {
        type: Boolean,
        default: false
      },
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
	
  .component-phoneBindWarning {
    text-align: center;
		width: 520upx;
	}
  .component-phoneBindWarning .pbwTitle {
    font-size: 37.96upx;
		margin-top: 20upx;
    font-family: PingFangSC-Medium;
    color: #03aef9;
    line-height: 52.96upx; }
  .component-phoneBindWarning .pbwIphone {
    font-size: 27.98upx;
    font-weight: 400;
    color: gray;
    line-height: 48upx; }
  .component-phoneBindWarning .pwbAvatar {
    margin-top: 48upx;
    position: relative;
    display: inline-block;
    width: 87.98upx;
    height: 87.98upx;
    border-radius: 50%; }
  .component-phoneBindWarning .pwbAvatar uni-image {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%; }
  .component-phoneBindWarning .pwbAvatar svg {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: 9.98upx; }
  .component-phoneBindWarning .pwbName {
    font-size: 27.98upx;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #444444;
    line-height: 30upx; }
	.component-phoneBindWarning .bottom-btn {
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
