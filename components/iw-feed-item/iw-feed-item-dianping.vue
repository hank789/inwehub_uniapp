<template>
    <view>
        dianping {{item.id}}
    </view>
</template>

<script>

  export default {
    components: {

    },
    data() {
      return {

      }
    },
    computed: {

    },
    props: {
      item: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    created() {

    },
    methods: {
      showDownloadTip() {

      }
    }
  }
</script>

<style>

</style>
