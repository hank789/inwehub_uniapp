<template>
    <view>
        <image :mode="mode" :style="getStyle" :src="src" alt="" class="image" lazy-load="true" @load="loaded"/>
    </view>
</template>

<script>

  export default {
    components: {

    },
    data() {
      return {
        width: 0,
        height: 0
      }
    },
    computed: {
      getStyle () {
        let style = ''
        if (this.width) {
          style += 'width:' + this.width + ';'
        }
        if (parseInt(this.height) < 320) {
          style += 'height:' + this.height + ';'
        }
        return style
      }
    },
    props: {
      mode: {
        type: String,
        default: 'widthFix'
      },
      src: {
        type: String,
        default: ''
      }
    },
    created() {

    },
    methods: {
      loaded(event) {
        let width = event.detail.width
        if (width > 375) {
          width = '100%'
        } else {
          width += 'px'
        }
        this.width = width
        this.height = event.detail.height + 'px'
      }
    }
  }
</script>

<style>

</style>
