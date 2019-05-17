<template>
    <view class="mui-content">
              <view class="noticeWrapper" v-if="isOpenNotification === 1 && closingNotice">
                <view class="closeNotice" @tap.stop.prevent="closeNotice">
                  
                </view>
                <view class="noticeText">打开通知，避免错过订阅的热点新闻，深度文章，招聘动态和招标快讯</view>
                <view class="unlock border-football" @tap.stop.prevent="goUnlock">开启</view>
              </view>
              <view class="line-river-after" v-if="isOpenNotification === 1 && closingNotice"></view>

              <ul>
                <view class="notice" @tap.stop.prevent="toTask" v-if="list.todo_task_message.unread_count">
                  <p>
                    <image src="/static/images/notice_img@2x.png"  class="notice_l"></image>
                    <span>({{list.todo_task_message.unread_count}})</span>
                    <image src="/static/images/notice_text@2x.png" class="notice_r"></image>
                  </p>
                  <p>前往完成</p>
                </view>

                <li @tap.stop.prevent="skip(1)" v-if="list.notice_message.last_message">
                  <image src="/static/images/inform1.png"/></image>
                  <view class="message" v-if="list.notice_message.unread_count">{{list.notice_message.unread_count}}</view>
                  <p>
                    <span>通知公告</span>
                    <span class="mui-ellipsis">{{list.notice_message.last_message ? list.notice_message.last_message.data.title : ''}}</span>
                  </p>
                  <a>
                    {{(list.notice_message.last_message ? list.notice_message.last_message.created_at : '')}}
                  </a>
                  <i class="bot"></i>
                </li>
                <li @tap.stop.prevent="skip(2)" v-if="list.money_message.last_message ">
                  <image src="/static/images/balance1.png"/></image>
                  <view class="message" v-if="list.money_message.unread_count">{{list.money_message.unread_count}}</view>
                  <p>
                    <span>余额变动</span>
                    <span class="mui-ellipsis">{{list.money_message.last_message ? list.money_message.last_message.data.title : ""}} </span>
                  </p>
                  <a>
                    {{(list.money_message.last_message ? list.money_message.last_message.created_at : '')}}
                  </a>
                  <i class="bot"></i>
                </li>

                <li @tap.stop.prevent="skip(3)" v-if="list.task_message.last_message">
                  <image src="/static/images/mission.png"/></image>
                  <view class="message" v-if="list.task_message.unread_count">{{list.task_message.unread_count}}</view>
                  <p>
                    <span>问答通知</span>
                    <span class="mui-ellipsis">{{list.task_message.last_message ? list.task_message.last_message.data.title : ""}} </span>
                  </p>
                  <a>
                    {{(list.task_message.last_message ? list.task_message.last_message.created_at : '')}}
                  </a>
                  <i class="bot"></i>
                </li>
                <li @tap.stop.prevent="skip(4)" v-if="list.readhub_message.last_message">
                  <image src="/static/images/read1.png"/></image>
                  <view class="message" v-if="list.readhub_message.unread_count">{{list.readhub_message.unread_count}}</view>
                  <p>
                    <span>动态通知</span>
                    <span class="mui-ellipsis">{{list.readhub_message.last_message ? list.readhub_message.last_message.data.title : ""}} </span>
                  </p>
                  <a>
                    {{(list.readhub_message.last_message ? list.readhub_message.last_message.created_at : '')}}
                  </a>
                  <i class="bot"></i>
                </li>
                <!--消息通知-->
                <li v-for="(item, index) in list.im_messages" :key="index" :class="'type_' + item.room_type">
                  <view class="headerLogo" @tap.stop.prevent="toAvatar(item.contact_uuid)">
                    
                  </view>
                  <view class="message" v-if="item.unread_count != 0">{{item.unread_count}}</view>
                  <p @tap.stop.prevent="gochat(item)">
                    <span class="mui-ellipsis">{{item.name}}</span>
                    <span class="mui-ellipsis" v-if="item.last_message.data.img">[图片]</span>
                    <span class="mui-ellipsis" v-else>{{item.last_message.data.text}}</span>
                  </p>
                  <a>
                    {{(item.last_message ? item.last_message.created_at : '')}}
                  </a>
                  <i class="bot"></i>
                </li>
              </ul>
        </view>

</template>

<script>
  import util from '@/lib/util'
  export default {
    data() {
			return {
				list: {
					todo_task_message: {
						last_message: {
							status_description: '',
							task_type_description: ''
						},
						unread_count: ''
					},
					notice_message: {
						last_message: {
							created_at: '',
							data: {
								title: ''
							}
						},
						unread_count: ''
					},
					money_message: {
						last_message: {
							created_at: '',
							data: {
								title: ''
							}
						},
						unread_count: ''
					},
					readhub_message: {
						last_message: {
							created_at: '',
							data: {
								title: ''
							}
						},
						unread_count: ''
					},
					task_message: {
						last_message: {
							created_at: '',
							data: {
								title: ''
							}
						},
						unread_count: ''
					},
					im_messages: []
				},
				loading: true,
				total_count: 0,
				mobile: 0,
				closingNotice: '',
				Today: '',
				isShowNotice: -1,
				isOpenNotification: -1 // -1， 未知, 1 yes 0 no
			}
		},
    onLoad() {
			this.checkPermission()
			this.$request.get('notification/count').then((res)=>{
				this.list = res.data
			})
    },
		onNavigationBarButtonTap(e) {
			switch(e.index) {
				case 0:
					uni.navigateTo({
						url: '/pages/inform/setting'
					});
					break;
				case 1:
					var itemList = ['全部标记为已读']
					uni.showActionSheet({
					title:'通知',
					itemList: itemList,
					success: (e) => {
						switch (itemList[e.tapIndex]) {
							case '全部标记为已读':
								this.notification()
								break;
							}
						}
					})
					break
			}
		},
    methods: {
      checkPermission () {
        util.checkPermission('NOTIFITION', () => {
            this.isOpenNotification = 0
          }, () => {
            this.isOpenNotification = 1
          })
      },
      goUnlock () {
        toSettingSystem('NOTIFITION')
      },
      closeNotice () {
        var data = new Date().toLocaleString().split(' ')[0]
        this.$ls.set('closingNotice', data)
        this.closingNotice = false
      },
      toSetting () {
        uni.navigateTo({
					url: '/pages/inform/setting'
				});
      },
			toTask () {
				uni.navigateTo({
					url: '/pages/inform/task'
				});
			},
			notification () {
				this.$request.post(`notification/mark_as_read`, {
					notification_type: 0
				}).then(response => {
					this.list.money_message.unread_count = 0
					this.list.notice_message.unread_count = 0
					this.list.readhub_message.unread_count = 0
					this.list.task_message.unread_count = 0
					for (var i = 0; i < this.list.im_messages.length; i++) {
						this.list.im_messages[i].unread_count = 0
					}
					uni.showToast({
						title: '标记为已读'
					})
				})
			},
      toAvatar (uuid) {
        if (!uuid) {
          return false
        }
        this.$router.pushPlus('/share/resume?id=' + uuid + '&goback=1' + '&time=' + (new Date().getTime()))
      },
      messagecountchange (obj) {
        this.total_count = obj
      },
      gochat (item) {
        item.unread_count = 0
        if (item.room_type === 1) {
          // 私聊
          this.$router.pushPlus('/chat/' + item.contact_id)
        } else {
          // 群聊
          this.$router.pushPlus('/group/chat/' + item.room_id)
        }
      },
      skip (num) {
        switch (num) {
          case 1:
            this.list.notice_message.unread_count = 0
						uni.navigateTo({
							url: '/pages/inform/informbar'
						});
            break
          case 2:
            this.list.money_message.unread_count = 0
						uni.navigateTo({
							url: '/pages/inform/balancebar'
						});
            break
          case 3:
            this.list.task_message.unread_count = 0
						uni.navigateTo({
							url: '/pages/inform/taskbar'
						});
            break
          case 4:
            this.list.readhub_message.unread_count = 0
						uni.navigateTo({
							url: '/pages/inform/readbar'
						});
            break
        }
      }
    },
    onReady () {
      this.closingNotice = this.$ls.get('closingNotice')
      var data = new Date().toLocaleString().split(' ')[0]
      if (data === this.closingNotice) {
        this.closingNotice = false
      } else {
        this.closingNotice = true
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .bot {
    position: absolute;
    right: 0.426rem;
    bottom: 0;
    left: 0.426rem;
    height: 0.026rem;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  /*清掉自带样式*/

  view,
  p,
  span,
  i,
  uni-image,
  ul,
  li,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
  }

  .mui-icon {
    .icon {
      font-size: 0.56rem;
    }
  }

  .noticeWrapper {
    padding: 0.266rem 0.426rem;
    height: 1.493rem;
    background: #F3F4F6;
    display: flex;
    .closeNotice {
      font-size: 0.48rem;
      display: flex;
      color: #C8C8C8;
      margin-right: 0.4rem;
      margin-top: 0.24rem;
      .icon {
        font-size: 0.48rem;
      }
    }
    .noticeText {
      width: 71%;
      color: #03AEF9;
      font-size: 0.373rem;
      line-height: 0.533rem;
      margin-top: -0.026rem;
    }
    .unlock {
      width: 1.76rem;
      height: 0.72rem;
      color: #03AEF9;
      font-size: 0.373rem;
      margin: 0.133rem 0 0 0.4rem;
      line-height: 0.72rem;
      text-align: center;
      border-radius: 2.666rem;
      /*border: 0.026rem solid #03AEF9;*/
    }
    .border-football {
      &:after {
        border-color: #03AEF9;
      }
    }
  }

  .mui-content {
    background: #FFFFFF;
  }
  /*内容区域*/
  .mui-content ul li {
    width: 100%;
    height: 1.6rem;
    padding: 0 0.426rem;
    position: relative;
  }

  .mui-content ul li uni-image {
    width: 1.12rem;
    height: 1.12rem;
    margin-top: 0.266rem;
    float: left;
  }


  .mui-content ul li p {
    float: left;
    margin-top: 0.266rem;
    margin-left: 0.32rem;
  }

  .mui-content ul li a {
    position: absolute;
    top: 0.266rem;
    right: 0.426rem;
    font-size: 0.32rem;
    color: #c8c8c8;
  }

  .mui-content ul li p span:nth-of-type(1) {
    display: block;
    font-size: 0.426rem;
    color: #444444;
  }

  .mui-content ul li p {
    width: 81%;
  }

  .mui-content ul li p span:nth-of-type(2) {
    display: block;
    width: 100%;
    height: 0.48rem;
    font-size: 0.346rem;
    color: #808080;
  }
  .mui-content ul li:nth-last-of-type(1) i{
    display: none;
  }
  .message {
    position: absolute;
    font-size: 0.293rem;
    color: #ffffff;
    min-width: 0.48rem;
    height: 0.48rem;
    background: #f03c69;
    border-radius: 0.48rem;
    text-align: center;
    line-height: 0.48rem;
    left: 1.2rem;
    top: 0.133rem;
  }

  .menu_message {
    position: absolute;
    left: 79%;
    top: 0.213rem;
    background: #f03c69;
    font-size: 0.293rem;
    text-align: center;
    color: #fff;
    padding: 0rem 0.08rem;
    min-width: 0.4rem;
    min-height: 0.4rem;
    border-radius: 0.4rem;
    line-height: 0.4rem;
  }
  .radius {
    border-radius: 50%;
  }
  /*客服头像方形*/
  .mui-content ul li:nth-of-type(5) uni-image{
    border-radius: 0.266rem;
  }

  .listWrapper{
    bottom: 1.333rem !important;
  }

  .w414-3 .listWrapper{
    bottom:50px !important;  /* px不转换 */
  }

  .immersed44 .listWrapper{
    bottom: 84px !important; /* px不转换 */
  }

  /*待完成任务*/
  .notice{
    width:100%;
    height:1.173rem;
    margin-top: 0.2rem;
    padding: 0 0.426rem;
  }
  .notice p:nth-of-type(1){
    width: 72%;
    height:100%;
    background:#dcdcdc;
    border-radius: 0.106rem 0 0rem 0.106rem;
    float: left;
    position: relative;
    z-index: 9;
  }
  .notice p:nth-of-type(1) .notice_l{
    float: left;
    height:100%;
  }
  .notice p:nth-of-type(1) .notice_r{
    height:0.4rem;
    float: right;

    margin-top: 0.386rem;

  }
  .notice p:nth-of-type(1) span{
    display: block;
    height: 100%;
    float: right;
    margin-right: 4%;
    margin-left: 1%;
    line-height: 1.146rem;
    font-size: 0.426rem;
    color: #235280;
  }
  .notice p:nth-of-type(1):after {
    content: "";
    display: block;
    width: 0.266rem;
    height: 0.266rem;
    border-radius: 0.053rem;
    background: #dcdcdc;
    position: absolute;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    right: -0.106rem;
    top: 0rem;
    bottom: 0;
    margin: auto;
  }

  .notice p:nth-of-type(2){
    float: right;
    width: 27%;
    height:100%;
    background:#f03c69;
    text-align: center;
    line-height: 1.173rem;
    font-size:0.426rem;
    color: #FFFFFF;
    font-weight:500;
    border-radius:  0 0.106rem 0.106rem 0;
    position: relative;
  }
  .notice p:nth-of-type(2):after {
    content: "";
    display: block;
    width: 0.266rem;
    height: 0.266rem;
    border-radius: 0.053rem;
    background: #FFFFFF;
    /*border: 0.026rem solid #000000;*/
    position: absolute;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    left: -0.133rem;
    top: 0rem;
    bottom: 0;
    margin: auto;
  }
  /*适配*/
  @media (min-width: 320px) {
    .notice p:nth-of-type(1) .notice_l{
      width:45%;
      margin-right: 0;
    }
  }

  @media (min-width: 375px) {
    .notice p:nth-of-type(1) .notice_l{
      margin-right: 5%;
    }
  }

  @media (min-width: 414px) {
    .notice p:nth-of-type(1) .notice_l{
      margin-right: 5%;
    }
    .noticeText {
      /*margin-top: 0.026rem;*/
    }
  }
  header svg{
    font-size: 0.453rem;
    color:#808080;
    position: relative;
    /*top:-0.106rem;*/
  }
  .type_2 uni-image{
    border-radius: 0.266rem;
  }
  .settingBtn{
    padding-top:0.266rem;
    font-size:0.4rem;
    font-family:PingFangSC-Medium;
    color:#808080;
  }
</style>
