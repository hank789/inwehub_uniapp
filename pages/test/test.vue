<template>
    <view class="red">
        <iwLoading></iwLoading>
    </view>
</template>
<script>

  import iwLoading from '@/components/iw-loading/iw-loading'

  export default {
    components: {
      iwLoading
    },
    data() {
      return {
        downloadTipalertMsg: '',

      }
    },

    onLoad() {

    },

    methods: {
      showDownloadTip () {

      }
    }
  }
</script>

<style>

</style>
