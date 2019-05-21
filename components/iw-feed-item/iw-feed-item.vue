<template>
    <view>
        <iw-feed-item-ask v-if="isAsk" :item="item"></iw-feed-item-ask>
        <iw-feed-item-dianping v-if="isComment" :item="item"></iw-feed-item-dianping>
        <iw-feed-item-share v-if="isDiscover" :item="item"></iw-feed-item-share>
    </view>
</template>

<script>
  import iwFeedItemShare from '@/components/iw-feed-item/iw-feed-item-share'
  import iwFeedItemAsk from '@/components/iw-feed-item/iw-feed-item-ask'
  import iwFeedItemDianping from '@/components/iw-feed-item/iw-feed-item-dianping'
  export default {
    components: {
      iwFeedItemShare,
      iwFeedItemAsk,
      iwFeedItemDianping
    },
    data() {
      return {

      }
    },
    computed: {
      isAsk () {
        switch (this.item.feed_type) {
          case 1:
          case 2:
          case 3:
          case 6:
          case 11:
          case 12:
          case 14:
            return true
          default:
            return false
        }
      },
      isDiscover () {
        switch (this.item.feed_type) {
          case 15:
          case 16:
          case 5:
            return true
          default:
            return false
        }
      },
      isComment () {
        switch (this.item.feed_type) {
          case 17:
            return true
          default:
            return false
        }
      }
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
