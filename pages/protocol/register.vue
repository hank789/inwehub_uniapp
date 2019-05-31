<template>
  <view>
    <view class="mui-content" v-show="!loading">
      <view class="content" v-html="html">

      </view>
    </view>
  </view>
</template>

<script>

  var Protocol = {
    data: () => ({
      html: '',
      loading: 1
    }),
    mounted () {

    },
    created () {
      // showInwehubWebview();
      this.$request.post(`system/service_register`, {}).then(response => {
        this.html = response.data.html
        this.loading = 0
      })
    }
  }
  export default Protocol
</script>


<style scoped>
  .mui-content {
    background: #fff;
  }

  .content {
    padding: 19.96upx 30upx;
  }
</style>
