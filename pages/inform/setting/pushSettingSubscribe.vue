<template>
	<view>
     <uni-list>
				<uni-list-item :show-switch="true" :switch-checked="isOpenAppPush?true:false" :show-arrow="false" title="APP推送" @switchChange="switchAppPushChange" />
				<uni-list-item :show-switch="true" :switch-checked="isOpenEmailPush?true:false" :show-arrow="false" title="邮件订阅" @switchChange="switchEmailPushChange" />
				<uni-list-item :show-switch="true" :switch-checked="isOpenWeChatPush?true:false" :show-arrow="false" title="微信订阅" @switchChange="switchChatPushChange" />
      </uni-list>
    </view>
</template>
<script>
  import util from '@/lib/util'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	
  export default {
    data () {
      return {
				isNotificationPermission: -1,
        isOpenAppPush: -1,
        isOpenEmailPush: -1,
        isOpenWeChatPush: -1,
        emailText: ''
      }
    },
		components: {
			uniList,
			uniListItem
		},
    methods: {
			switchAppPushChange: function (e) {
				this.isOpenAppPush = e.value
				if (e.value) {
					util.checkPermission('NOTIFITION', () => {
					  this.isNotificationPermission = 1
					}, (result) => {
					  console.log('没有通知权限:')
					  //  失败的回调
						this.isNotificationPermission = 0
					  this.isOpenAppPush = false
						uni.showModal({
							title: '开启通知',
							content: '现在开启通知，不错过任何一次可能的平台合作机会呦~。',
							confirmText: '去设置',
							success: function (res) {
									if (res.confirm) {
											util.toSettingSystem('NOTIFITION')
											this.updateNotification()
									} else if (res.cancel) {
											console.log('用户点击取消')
									}
							}
						})
					})
				}
				this.updateNotification()
			},
			switchEmailPushChange: function (e) {
				this.isOpenEmailPush = e.value
				this.updateNotification()
			},
			switchChatPushChange: function (e) {
				this.isOpenWeChatPush = e.value
				this.updateNotification()
			},
      getNotification () {
        this.$request.post(`notification/push/info`, {}).then(response => {
          var code = response.code
          if (code !== 1000) {
            uni.showToast({
							title: response.message
						})
            return
          }
          this.isOpenAppPush = response.data.push_daily_subscribe
          this.emailText = response.data.email_daily_subscribe
					this.isOpenWeChatPush = response.data.wechat_daily_subscribe
					if (this.emailText) {
            this.isOpenEmailPush = true
          } else {
            this.isOpenEmailPush = false
          }
					if (this.isOpenAppPush) {
						this.checkPermission()
					}
        })
      },
      checkPermission () {
        util.checkPermission('NOTIFITION', () => {
          this.isNotificationPermission = 1
        }, (result) => {
          console.log('没有通知权限:')
          //  失败的回调
					this.isNotificationPermission = 0
          this.isOpenAppPush = false
					uni.showModal({
						title: '开启通知',
						content: '现在开启通知，不错过任何一次可能的平台合作机会呦~。',
						confirmText: '去设置',
						success: function (res) {
								if (res.confirm) {
										util.toSettingSystem('NOTIFITION')
								} else if (res.cancel) {
										console.log('用户点击取消')
								}
						}
					})
        })
      },
      updateNotification () {
        this.$request.post(`notification/push/update`, {
          push_daily_subscribe: this.isOpenAppPush ? 1 : 0,
					wechat_daily_subscribe: this.isOpenWeChatPush ? 1:0,
          email_daily_subscribe: this.emailText
        }).then(response => {
          var code = response.code
          this.isOpenAppPush = response.data.push_daily_subscribe
					this.isOpenWeChatPush = response.data.wechat_daily_subscribe
          this.emailText = response.data.email_daily_subscribe
        })
      }
    },
		mounted () {
      this.getNotification()
    }
  }
</script>