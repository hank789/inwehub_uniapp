<template>
	<view class="">
		
		<view class="mui-content">

      <view class="contactusWrapper">
        <view class="title font-family-medium">联系我们</view>
        <view class="textWrapper">
          <view class="text textBottom">
            <text>客服微信：hiinwe</text>
            <text class="textColor" @tap.stop.prevent="showWeChat">添加</text>
          </view>
          <view class="text">
            <text>联系邮箱：hi@inwehub.com</text>
            <text class="textColor" v-clipboard="'hi@inwehub.com'" @success="shareEmail()" @error="clipboardError">复制</text>
          </view>
        </view>
        <view class="bot"></view>
      </view>

      <view class="contactusWrapper">
        <view class="title font-family-medium">广告合作</view>
        <view class="textWrapper">
          <view class="text">
            <text>联系邮箱：Ad@inwehub.com</text>
            <text class="textColor" v-clipboard="'Ad@inwehub.com'" @success="shareEmail()" @error="clipboardError">复制</text>
          </view>
        </view>
        <view class="bot"></view>
      </view>

      <view class="contactusWrapper">
        <view class="title font-family-medium">成为合作伙伴</view>
        <view class="textWrapper">
          <view class="text">
            <text>联系邮箱：BD@inwehub.com</text>
            <text class="textColor" v-clipboard="'BD@inwehub.com'" @success="shareEmail()" @error="clipboardError">复制</text>
          </view>
        </view>
        <view class="bot"></view>
      </view>

      <view class="contactusWrapper">
        <view class="title font-family-medium">投稿/寻求报道</view>
        <view class="textWrapper">
          <view class="text">
            <text>联系邮箱：Hi@inwehub.com</text>
            <text class="textColor" v-clipboard="'Hi@inwehub.com'" @success="shareEmail()" @error="clipboardError">复制</text>
          </view>
        </view>
        <view class="bot"></view>
      </view>

      <view class="contactusWrapper">
        <view class="title font-family-medium">加入我们</view>
        <view class="textWrapper">
          <view class="text">
            <text>联系邮箱：HR@inwehub.com</text>
            <text class="textColor" v-clipboard="'HR@inwehub.com'" @success="shareEmail()" @error="clipboardError">复制</text>
          </view>
        </view>
        <!--<view class="bot"></view>-->
      </view>

    </view>
		
	</view>
</template>

<script>
</script>

<style lang="less">
	
	.mui-content {
    background: #ffffff;
  }
  .bot {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }


  .contactusWrapper {
    position: relative;
    padding: 0 31.96upx;
    margin-top: 33.98upx;
    .bot {
      right: 36upx;
      left: 31.96upx;
    }
    .title {
      color: #444444;
      font-size: 30upx;
      line-height: 42upx;
    }
    .textWrapper {
      padding-bottom: 31.96upx;
      .textBottom {
        margin-bottom: 27.98upx !important;
      }
      .text {
        display: flex;
        justify-content: space-between;
        color: #808080;
        font-size: 27.98upx;
        line-height: 39.98upx;
        &:nth-of-type(1) {
          margin: 18upx 0 0upx;
        }
		.textColor {
			color: #03AEF9;
		}
      }
    }

  }
	
</style>
