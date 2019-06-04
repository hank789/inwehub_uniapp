<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {
          id: 0
        },
        loading: 1,
        isInGroup: false
			}
		},
		methods: {
			getData () {
        this.$request.post(`group/getHelpGroup`, {}).then(response => {
          var code = response.code
          this.detail = response.data
          this.isInGroup = true
          this.loading = 0
        })
      },
		}
	}
</script>

<style>

</style>
