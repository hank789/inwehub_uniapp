<template>
    <view class="mui-table-view-cell userInfoWrapper">
        <view class="avatar">
            <view class="avatarInner" @tap.stop.prevent="toResume()">
                <image mode="aspectFill" :src="avatar" class="image"/>
                <text class="iconfont icon-zhuanjiabiaozhishixin"  v-show="isExpert"></text>
            </view>
        </view>


        <view class="mui-media-body realnameMtop font-family-medium">
            {{ realname }}

      <view class="detail" v-if="isShowPositionAndCompany">
            <view class="position timeCreated">{{ position }}</view>
            <view class="split"></view>
            <view class="company">{{ company }}</view>
        </view>

            <view class="detail" v-if="time">
                <view class="position timeCreated" v-if="isTime(time)"> {{timeago(time)}} </view>
                <view class="position timeCreated" v-else>{{time}}</view>
            </view>

            <view class="followWrapper" v-if="isFollowStatus">
                <view class="followButton active border-football" @tap.stop.prevent="collectProfessor()" v-if="isFollowed">已关注</view>
                <view class="followButton border-football" v-show="uuid" @tap.stop.prevent="collectProfessor()" v-else>关注</view>
            </view>
            <!--<view class="timeData">-->
            <!--<view>-->
            <!--{{timeago(detail.created_at)}}-->
            <!--</view>-->
            <!--</view>-->
        </view>
    </view>
</template>
<script type="text/javascript">

  import { postRequest } from '@/lib/request'
  import ui from '@/lib/ui'
  import { getLocalUserInfo } from '@/lib/user'
  import { timeToHumanText } from '@/lib/time'

  export default {
    data () {
      return {
        localUuid: 0,
        detail: {
          created_at: ''
        }
      }
    },
    props: {
      uuid: {
        default: ''
      },
      avatar: {
        type: String,
        default: ''
      },
      realname: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: ''
      },
      company: {
        type: String,
        default: ''
      },
      isFollow: {
        type: Boolean,
        default: false
      },
      isFollowed: {
        type: Boolean,
        default: false
      },
      isExpert: {
        type: Number,
        default: false
      },
      isShowPositionAndCompany: {
        type: Boolean,
        default: false
      },
      isNiming: {
        type: Boolean,
        default: false
      },
      time: {
        type: String,
        default: ''
      },
      timeDesc: {
        type: String,
        default: ''
      }
    },
    created () {
      var user = getLocalUserInfo()
      this.localUuid = user.uuid
    },
    methods: {
      isFollowStatus () {
        return this.isFollow && this.realname !== '匿名' && this.uuid !== this.localUuid
      },
      isTime (time) {
        return /^[0-9\-\\:\s]+$/.test(time)
      },
      toResume () {
        var uuid = this.uuid
        if (!uuid) {
          return false
        }

        if (this.isNiming) {
          return false
        }

        uni.navigateTo({ url:'/pages/my/resume?id=' + uuid + '&goback=1' + '&time=' + (new Date().getTime())})
      },
      timeago (time) {
        return time
      },
      collectProfessor: function () {
        if (!this.uuid) {
          return
        }

        postRequest(`follow/user`, {
          id: this.uuid
        }).then(response => {
          var code = response.code
          if (code !== 1000) {
            ui.alert(response.message)
            return
          }

          var isFollowed = response.data.type === 'follow' ? 1 : 0

          ui.toast(response.data.tip)

          this.$emit('setFollowStatus', isFollowed)
        })
      }
    }
  }
</script>

<style scoped="scoped" lang="less">

    .avatar {
        z-index: 0;
        color: #ffffff;
        float: left;
        background-color: #bdbdbd;
        display: inline-block;
        height: 67.96upx;
        width: 67.96upx;
        font-size: 39.98upx;
        text-align: center;
        border-radius: 50%;
        margin-right:20upx;
				position: relative;
				z-index: 9;
    }

    .avatar .avatarInner {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 100%;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .avatar .image {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        display: block;
    }

    .mui-media-body {
        padding-left: 12upx;
        min-height: 90upx;
    }

    .mui-table-view-cell:after {
        display: none;
    }

    .detail {
        font-size: 20upx;
        color: #B4B4B6;
				.timeCreated {
					font-size: 20upx;
					color: #B4B4B6;
					margin-top: -4upx; 
				}
    }

    .split {
        position: relative;
        top: 6upx;
        margin: 0 7.96upx;
        display: inline-block;
        width: 1.96upx;
        height: 25.96upx;
        background: #c8c8c8;
        transform: scaleX(.5);
    }

    .followButton {
        width: 123.98upx;
        height: 54upx;
        color: #03aef9;
        line-height: 57.98upx;
        text-align: center;
        font-size: 27.98upx;
        display: inline-block;
        border-radius: 99.98upx;
    }
    .mui-android .followButton {
        line-height: 57.98upx;
    }

    .followButton.active {
        color: #B4B4B6;
    }

    .mui-media-body {
        font-size: 26upx;
        color: #444;
        position: relative;
        margin-top: -3.76upx;
    }

    .mui-media-body .followWrapper {
        position: absolute;
        top: 7.96upx;
        right: 1.96upx;
    }

    .avatarInner {
        position: relative;
    }

    .avatarInner .iconfont{
        position: absolute;
        width: 39.98upx;
        height: 39.98upx;
        right: -7.50upx;
        bottom: -5.26upx;
        font-size: 24upx;
        color: #03aef9;
    }

    .userInfoWrapper {
        padding: 0 30upx;
    }

</style>
