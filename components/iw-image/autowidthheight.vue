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
      },
      maxWidth: {
        type: Number,
        default: 216
      },
      maxHeight: {
        type: Number,
        default: 216
      },
    },
    created() {

    },
    methods: {
      loaded(event) {
        let width = event.detail.width
        let height = event.detail.height

        if (width >= height) {
          if (width > this.maxWidth) {
            height = height * this.maxWidth / width
            width = this.maxWidth
          }
        } else {
          if (height > this.maxHeight) {
            width = width * this.maxHeight / height
            height = this.maxHeight
          }
        }

        this.width = width + 'px'
        this.height = height + 'px'
      }
    }
  }
</script>

<style>

</style>
