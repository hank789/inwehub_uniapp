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
    onLoad(options)
    {
      this.detailData = JSON.parse(options.data);
    }
  }
</script>

<style>

</style>