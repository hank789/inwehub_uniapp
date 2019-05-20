<template>
	<view>
     <uni-list>
				<uni-list-item :show-switch="true" :switch-checked="notices.upvoted?true:false" :show-arrow="false" title="赞了我" @switchChange="switchUpvotedChange" />
				<uni-list-item :show-switch="true" :switch-checked="notices.followed?true:false" :show-arrow="false" title="关注了我" @switchChange="switchFollowedChange" />
				<uni-list-item :show-switch="true" :switch-checked="notices.mentioned?true:false" :show-arrow="false" title="提到了我" @switchChange="switchMentionedChange" />
				<uni-list-item :show-switch="true" :switch-checked="notices.commented?true:false" :show-arrow="false" title="回复了我" @switchChange="switchCommentedChange" />
				<uni-list-item :show-switch="true" :switch-checked="notices.invited?true:false" :show-arrow="false" title="邀请了我" @switchChange="switchInvitedChange" />
				<uni-list-item :show-switch="true" :switch-checked="notices.chatted?true:false" :show-arrow="false" title="私聊了我" @switchChange="switchChattedChange" />
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
        loading: 1,
        isOpenNotification: -1, // -1， 未知, 1 yes 0 no
        isNotificationPermission: -1, // -1， 未知, 1 yes 0 no
        notices: {
          upvoted: 1,
          followed: 1,
          mentioned: 1,
          commented: 1,
          invited: 1,
          chatted: 1
        }
      }
    },
		components: {
			uniList,
			uniListItem
		},
    methods: {
			switchUpvotedChange: function (e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},
			switchFollowedChange: function (e) {
				
			},
			switchMentionedChange: function (e) {
				
			},
			switchCommentedChange: function (e) {
				
			},
			switchInvitedChange: function (e) {
				
			},
			switchChattedChange: function (e) {
				
			},
      closeAll () {
        this.notices = {
          upvoted: 0,
          followed: 0,
          mentioned: 0,
          commented: 0,
          invited: 0,
          chatted: 0
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
          this.notices.upvoted = response.data.push_rel_mine_upvoted
          this.notices.followed = response.data.push_rel_mine_followed
          this.notices.mentioned = response.data.push_rel_mine_mentioned
          this.notices.commented = response.data.push_rel_mine_commented
          this.notices.invited = response.data.push_rel_mine_invited
          this.notices.chatted = response.data.push_rel_mine_chatted
        })
      },
      openNotification (type) {
        var value = this.notices[type]
        if (value && this.isOpenNotification === 0) {
          //  todo 显示confirm 提示用户去开启通知权限
          this.notices[type] = 0
          var btnArray = ['取消', '去设置']
          window.mui.confirm('现在开启通知，不错过任何一次可能的平台合作机会呦~。', '开启通知', btnArray, (e) => {
            if (e.index === 1) {
              toSettingSystem('NOTIFITION')
            } else {
              window.mui.back()
            }
          })
        } else {
          this.updateNotification()
        }
      },
      checkPermission () {
        util.checkPermission('NOTIFITION', () => {
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
          push_rel_mine_upvoted: this.notices.upvoted ? 1 : 0,
          push_rel_mine_followed: this.notices.followed ? 1 : 0,
          push_rel_mine_mentioned: this.notices.mentioned ? 1 : 0,
          push_rel_mine_commented: this.notices.commented ? 1 : 0,
          push_rel_mine_invited: this.notices.invited ? 1 : 0,
          push_rel_mine_chatted: this.notices.chatted ? 1 : 0
        }).then(response => {
          var code = response.code
          if (code !== 1000) {
            window.mui.alert(response.message)
            return
          }
          this.notices.upvoted = response.data.push_rel_mine_upvoted
          this.notices.followed = response.data.push_rel_mine_followed
          this.notices.mentioned = response.data.push_rel_mine_mentioned
          this.notices.commented = response.data.push_rel_mine_commented
          this.notices.invited = response.data.push_rel_mine_invited
          this.notices.chatted = response.data.push_rel_mine_chatted
        })
      }
    },
    mounted () {
      this.checkPermission()
    },
    watch: {
      'notices.upvoted': function (newValue, oldValue) {
        this.openNotification('upvoted')
      },
      'notices.followed': function (newValue, oldValue) {
        this.openNotification('followed')
      },
      'notices.mentioned': function (newValue, oldValue) {
        this.openNotification('mentioned')
      },
      'notices.commented': function (newValue, oldValue) {
        this.openNotification('commented')
      },
      'notices.invited': function (newValue, oldValue) {
        this.openNotification('invited')
      },
      'notices.chatted': function (newValue, oldValue) {
        this.openNotification('chatted')
      }
    }
  }
</script>