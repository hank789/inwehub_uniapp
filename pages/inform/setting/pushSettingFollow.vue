<template>
	<view>
     <uni-list>
				<uni-list-item :show-switch="true" :switch-checked="notices.new_user?true:false" :show-arrow="false" title="关注的用户有新动态" @switchChange="switchNewUserChange" />
				<uni-list-item :show-switch="true" :switch-checked="notices.new_answered?true:false" :show-arrow="false" title="关注的问题有新回答" @switchChange="switchNewAnsweredChange" />
      </uni-list>
    </view>
</template>
<script>
  import html5plus from '@/lib/html5plus'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	
  export default {
    data () {
      return {
        loading: 1,
        isOpenNotification: -1, // -1， 未知, 1 yes 0 no
        isNotificationPermission: -1, // -1， 未知, 1 yes 0 no
        notices: {
          new_user: 1,
          new_answered: 1
        }
      }
    },
		components: {
			uniList,
			uniListItem
		},
    methods: {
			switchNewUserChange: function (e) {
				this.notices.new_user = e.value
				console.log('switch1 发生 change 事件，携带值为', e.value)
				this.openNotification('new_user')
			},
			switchNewAnsweredChange: function (e) {
				this.notices.new_answered = e.value
				this.openNotification('new_answered')
			},
      closeAll () {
        this.notices = {
          new_user: 0,
          new_answered: 0
        }
        this.isOpenNotification = 0
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
          this.notices.new_user = response.data.push_my_user_new_activity
          this.notices.new_answered = response.data.push_my_question_new_answered
        })
      },
      openNotification (type) {
        var value = this.notices[type]
        if (value && this.isOpenNotification === 0) {
          //  todo 显示confirm 提示用户去开启通知权限
          this.notices[type] = 0
					uni.showModal({
							title: '开启通知',
							content: '现在开启通知，不错过任何一次可能的平台合作机会呦~。',
							confirmText: '去设置',
							success: function (res) {
									if (res.confirm) {
											html5plus.toSettingSystem('NOTIFITION')
									} else if (res.cancel) {
											console.log('用户点击取消');
									}
							}
						})
        } else {
          this.updateNotification()
        }
      },
      checkPermission () {
        html5plus.checkPermission('NOTIFITION', () => {
          this.isOpenNotification = 1
          this.isNotificationPermission = 1
          this.getNotification()
        }, (result) => {
          console.log('没有通知权限:')
          this.isNotificationPermission = 0
          //  失败的回调
          this.closeAll()
          this.loading = 0
        })
      },
      updateNotification () {
        this.$request.post(`notification/push/update`, {
          push_my_user_new_activity: this.notices.new_user ? 1 : 0,
          push_my_question_new_answered: this.notices.new_answered ? 1 : 0
        }).then(response => {
          var code = response.code
          this.notices.new_user = response.data.push_my_user_new_activity
          this.notices.new_answered = response.data.push_my_question_new_answered
        })
      }
    },
    mounted () {
      this.checkPermission()
    }
  }
</script>