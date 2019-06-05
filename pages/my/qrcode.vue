<template>
  <view>
    <view class="mui-content" v-if="!loading">
        <view class="headPortraitInfo">
          <view class="headPortraitImg">
            <image :src="resume.info.avatar_url" class="avatar"></image>
          </view>
          扫码关注{{resume.info.name}}
        </view>

        <view class="myCode">
          <view class="myCodeWrapper">
						<tki-qrcode v-if="!loading" ref="qrcode" :val="shareUrl" :size="size" :unit="unit" :background="background" :foreground="foreground" :pdground="pdground" :icon="icon" :iconSize="iconsize" :onval="onval" :loadMake="loadMake" :usingComponents="true" @result="qrR" />
          </view>
        </view>

        <view class="preservation" @tap.stop.prevent="saveToGallery">
					<text class="iconfont icon-baocuntupian"></text>
          <span>保存我的卡片</span>
        </view>
    </view>
  </view>
</template>

<script>
	import {getLocalUuid} from '@/lib/user.js'
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
  export default {
    data() {
			return {
				shareUrl: '',
				loading: 1,
				generateImgIng: 0,
				resume: {},
				uuid: '',
				size: 155,
				unit: 'px',
				background: '#000000',
				foreground: '#ffffff',
				pdground: '#ffffff',
				icon: '',
				iconsize: 40,
				onval: true,
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '' // 二维码生成后的图片地址或base64
			}
    },
    onLoad(option) {
    	this.getData(option)
    },
		components: {
			tkiQrcode
		},
		methods: {
			qrR(res) {
				this.src = res
			},
			saveToGallery () {
        if (this.generateImgIng) return

        this.generateImgIng = 1
				this.$refs.qrcode._saveCode()
      },
			getData (option) {
        this.uuid = getLocalUuid()

        if (option.id) {
          this.uuid = option.id
        }

        if (!this.uuid) return

        this.$request.post(`profile/resumeInfo`, {
          uuid: this.uuid
        }).then(response => {
          var code = response.code
          if (code !== 1000) {
            return
          }
					uni.downloadFile({
						url: response.data.info.avatar_url,
						success: (res) => {
								if (res.statusCode === 200) {
										console.log('下载成功');
										this.icon = res.tempFilePath
										setTimeout(() => {
											this.$refs.qrcode._makeCode()
										}, 100);
								}
						}
					});
					
          this.resume = response.data
          this.shareUrl = this.$store.state.webRoot + '/#/share/resume/' + this.uuid + '?uuid=' + getLocalUuid()
          this.loading = 0
        })
      }
		}
  }
</script>


<style lang="less" scoped>
  .mui-content {
    background: #FFFFFF;
    text-align: center;
  }
  .headPortraitInfo {
    font-size: 36upx;
    color: #444444;
    line-height: 49.96upx;
    margin-top: 127.96upx;
    margin-bottom: 30upx;
    .headPortraitImg {
      width: 67.96upx;
      height: 67.96upx;
      margin: 0 auto 19.96upx;
      .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .myCode {
    width: 475.96upx;
    height: 499.96upx;
    margin: 0 auto;
    background: url("~@/static/images/group.png") no-repeat 0 63.98upx;
    background-size: contain;
    .myCodeWrapper {
      position: relative;
      text-align: center;
      height: 334.96upx;
      view {
        position: absolute;
        left: 50%;
        margin-left: -167.48upx;
        width: 334.96upx;
        height: 334.96upx;
        border-radius: 7.96upx;
        background: #ffffff;
        padding: 12.98upx;
        box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;
      }
    }
  }

  .preservation {
    margin-top: 181.96upx;
    .iconfont {
      color: #B4B4B6;
			margin-right: 10upx;
    }
    span {
      color: #444444;
      font-size: 27.98upx;
      font-weight: 500;
    }
  }

  .bottomText {
    width: 100%;
    font-size: 24upx;
    color: #808080;
    position: absolute;
    bottom: 66upx;
  }

  /*适配*/
  @media (min-width: 414px) {
    .myCode {
      background-position: 0 39.98upx;
    }
  }
.myCodeWrapperImg uni-image{
    position: absolute;
    top: 50%;
    margin-top: -77px; /* px不转换 */
    left: 50%;
    margin-left: -77px; /* px不转换 */
  }
</style>
