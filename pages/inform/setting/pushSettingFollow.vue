<template>
	<view>
      <uni-list v-if="isOpenNotification === 0">
				<uni-list-item :show-switch="true" :switch-checked="notices.all?true:false" :show-arrow="false" title="开启系统通知" note="你可能错过重要的活动机会推荐，点击前往“设置”开启通知" @switchChange="switchAllChange" />        
      </uni-list>
      <div class="grey"  v-if="isOpenNotification === 0"></div>
      <uni-list>
				<uni-list-item :show-switch="true" :switch-checked="notices.system_notify?true:false" :show-arrow="false" title="活动通知及系统公告" @switchChange="switchSystemChange" />        
				<uni-list-item title="与我有关" @click="$router.pushPlus('/push/setting/aboutme')" />
       	<uni-list-item title="我的关注" @click="$router.pushPlus('/push/setting/follow')" />
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
          all: 1,
          disturb: 0,
          system_notify: 0
        }
      }
    },
		components: {
			uniList,
			uniListItem
		},
    methods: {
			switchAllChange: function (e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},
			switchSystemChange: function (e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},
			switchDisturbChange: function (e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},
      toSettingSubscribe () {
        localEvent.setLocalItem('needRefresh', {value: true})
        this.$router.pushPlus('/push/setting/subscribe')
      },
      refreshResumeData () {
        this.checkPermissionSelf()
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
          if (code !== 1000) {
            window.mui.alert(response.message)
            return
          }
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
            var btnArray = ['取消', '去设置']
            window.mui.confirm('现在开启通知，不错过任何一次可能的平台合作机会呦~。', '开启通知', btnArray, (e) => {
              if (e.index === 1) {
                toSettingSystem('NOTIFITION')
              } else {
           // 点击取消
           //  window.mui.back()
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
          if (code !== 1000) {
            window.mui.alert(response.message)
            return
          }
          this.notices.disturb = response.data.push_do_not_disturb
          this.notices.system_notify = response.data.push_system_notify
        })
      }
    },
    mounted () {
      this.checkPermissionSelf()
    },
    watch: {
      'notices.all': function (newValue, oldValue) {
        this.openDisturb('all')
      },
      'notices.disturb': function (newValue, oldValue) {
        this.openDisturb('disturb')
      },
      'notices.system_notify': function (newValue, oldValue) {
        this.openDisturb('system_notify')
      }
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