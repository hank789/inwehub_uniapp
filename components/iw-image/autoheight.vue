<template>
    <view>
        <image :mode="mode" :style="getStyle" :src="src" :data-src="src" alt="" class="image" lazy-load="true" @load="loaded" @tap.stop.prevent="previewImage" />
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

        style += 'height:' + this.height + ';'
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
        let height = event.detail.height
        if (width > 345) {
          height = height * 345 / width
          width = '100%'
        } else {
          width += 'px'
        }
        this.width = width
        this.height = height + 'px'
      },
			previewImage: function(e) {
				var current = e.target.dataset.src
				this.$emit('previewImage',{current: current})
			}
    }
  }
</script>

<style>

</style>
