<template>
	<view>
      <uni-list v-if="isOpenNotification === 0">
				<uni-list-item :show-switch="true" :switch-checked="notices.all?true:false" :show-arrow="false" title="开启系统通知" note="你可能错过重要的活动机会推荐，点击前往“设置”开启通知" @switchChange="switchAllChange" />        
      </uni-list>
      <div class="grey"  v-if="isOpenNotification === 0"></div>
      <uni-list>
				<uni-list-item :show-switch="true" :switch-checked="notices.system_notify?true:false" :show-arrow="false" title="活动通知及系统公告" @switchChange="switchSystemChange" />        
				<uni-list-item title="与我有关" @click="goSettingMe" />
       	<uni-list-item title="我的关注" @click="goSettingFollow" />
      </uni-list>

      <div class="grey"></div>
			<uni-list>
				<uni-list-item title="订阅热点推荐" @click="toSettingSubscribe" />
      </uni-list>

      <div class="grey"></div>
      <uni-list>
				<uni-list-item :show-switch="true" :switch-checked="notices.disturb?true:false" :show-arrow="false" title="免打扰" note="22:00-07:30自动关闭推送" @switchChange="switchDisturbChange" />
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
        isOpenNotification: -1, // -1， 未知, 1 yes 0 no
        isNotificationPermission: -1, // -1， 未知, 1 yes 0 no
        notices: {
          all: true,
          disturb: false,
          system_notify: false
        }
      }
    },
		components: {
			uniList,
			uniListItem
		},
    methods: {
			switchAllChange(e) {
				this.notices.all = e.value
				this.openDisturb('all')
			},
			switchSystemChange(e) {
				this.notices.system_notify = e.value
				this.openDisturb('system_notify')
			},
			switchDisturbChange(e) {
				this.notices.disturb = e.value
				this.openDisturb('disturb')
			},
			goSettingMe() {
				uni.navigateTo({
						url: '/pages/inform/setting/pushSettingAboutMe'
					});
			},
			goSettingFollow() {
				uni.navigateTo({
						url: '/pages/inform/setting/pushSettingFollow'
					});
			},
      toSettingSubscribe () {
				uni.navigateTo({
						url: '/pages/inform/setting/pushSettingSubscribe'
					});
      },
      closeAll () {
        this.notices = {
          all: 0,
          disturb: 0,
          system_notify: 0
        }
        this.isOpenNotification = 0
      },
      getNotification () {
        this.$request.post(`notification/push/info`, {}).then(response => {
          var code = response.code
          this.notices.disturb = response.data.push_do_not_disturb
          this.notices.system_notify = response.data.push_system_notify
        })
      },
      openDisturb (type) {
        if (type === 'all' && !this.notices.all) {
          this.closeAll()
        } else {
          var value = this.notices[type]
          if (value && this.isOpenNotification === 0) {
            this.notices[type] = 0
						uni.showModal({
							title: '开启通知',
							content: '现在开启通知，不错过任何一次可能的平台合作机会呦~。',
							confirmText: '去设置',
							success: function (res) {
									if (res.confirm) {
											util.toSettingSystem('NOTIFITION')
									} else if (res.cancel) {
											console.log('用户点击取消');
									}
							}
						})
          }
          this.updateNotification()
        }
      },
      checkPermissionSelf () {
        util.checkPermission('NOTIFITION', () => {
          this.notices.all = 1
          this.isOpenNotification = 1
          this.isNotificationPermission = 1
          this.getNotification()
        }, (result) => {
          this.notices.all = 0
          this.isOpenNotification = 0
          this.isNotificationPermission = 0
          this.closeAll()
        })
      },
      updateNotification () {
        this.$request.post(`notification/push/update`, {
          push_system_notify: this.notices.system_notify ? 1 : 0,
          push_do_not_disturb: this.notices.disturb ? 1 : 0
        }).then(response => {
          var code = response.code
          this.notices.disturb = response.data.push_do_not_disturb
          this.notices.system_notify = response.data.push_system_notify
        })
      }
    },
    mounted () {
      this.checkPermissionSelf()
    }
  }
</script>

<style scoped>
  .grey {
    width: 100%;
    height: 19.96upx;
    background: #F3F4F5;
  }
</style>