<template>

  <view>
    <!--导航栏-->
    <view class="mui-content">
      <!--搜索区域-->
      <Contact v-model="lastList" :list="list" :search="search">
        <view slot="header" class="indexHeader">
          <view v-if="!apperClose" class="searchWrapper">
            <text class="iconfont icon-sousuo" />
            <input v-model.trim="search" class="input" type="text" placeholder="输入用户名">
          </view>
          <!--确定搜索框-->
          <view v-if="apperClose" class="searchContainer">
            <view class="searchContainerTwo">
              <text class="iconfont icon-sousuo" />
              <input v-model.trim="search" type="text" placeholder="输入用户名">
              <text v-if="search" @tap.stop.prevent="empty()">
                <text class="iconfont icon-guanbi" />
              </text>
            </view>
            <view class="searchContainerOne" @tap.stop.prevent="submitInfo()">确定</view>
          </view>

          <view class="notFound">
            找不到成员？<text>添加新的关注</text>
          </view>
        </view>

        <view class="indexTitle">
          已关注的成员
        </view>

        <view class="groupWrapper">
          <view v-for="(sonlist, key) in lastList" :key="key" class="index-bar-group">
            <view class="index-bar-cell index-bar-cell-head">{{ key }}</view>
            <view
              v-for="(item, index) in sonlist"
              :key="index"
              :data-raw="item.raw"
              class="index-bar-cell tap-active"
              :class="{bottomBorder:index !== sonlist.length-1 }"
            >
              <view class="avatar">
                <view class="avatarInner">
                  <image class="image" :src="item.avatar_url" />
                  <text class="iconfont icon-zhuanjiabiaozhishixin" />
                </view>
              </view>

              <view class="textBody ">
                <view class="name mui-ellipsis">{{ item.name }} &nbsp;</view>
                <view class="desc mui-ellipsis">{{ item.description }} &nbsp;</view>
              </view>


              <view v-if="isLocalSelect(key + '_' + index)" class="selectUser" @tap.stop.prevent="collectProfessor(key + '_' + index, item)">
                <view class="select active">
                  <text class="iconfont icon-check-circle" />
                </view>
              </view>
              <view v-else class="selectUser" @tap.stop.prevent="collectProfessor(key + '_' + index, item)">
                <view class="select" />
              </view>
            </view>
          </view>
        </view>
      </Contact>
    </view>
  </view>
</template>
<script>
import Contact from '@/components/iw-index/iw-index.vue'
import { postRequest } from '@/lib/request'
import localEvent from '@/lib/localstorage'
import localStorageKey from '@/lib/localstoragekey'
import Vue from 'vue'

export default {
  components: {
    Contact
  },
  data() {
    return {
      pageOption: {},
      apperClose: false,
      id: 0,
      search: '',
      username: '',
      shareUrl: '',
      shareImg: '',
      answernum: 0,
      followednum: 0,
      title: '',
      list: [],
      lastList: [],
      userId: 0,
      loading: 1,
      Selected: []
    }
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
    const currentUser = localEvent.get('UserInfo')
    this.userId = currentUser.user_id
    this.getList()
  },
  created() {
    console.log(this.lastList)
  },
  methods: {
    isLocalSelect (key) {
      return !!this.Selected[key]
    },
    submitInfo() {
      uni.navigateBack()
    },
    empty() {
      this.search = ''
    },
    // 点击选择；
    collectProfessor(index, item) {
      item.listindex = index

      var value = this.Selected[index] ? false : item
      this.Selected[index] = value
      Vue.set(this.Selected, index, value)

      var options = []
      for (var i in this.Selected) {
        if (this.Selected[i]) {
          options.push(this.Selected[i])
        }
      }
      // 判断是否有带确定的输入框出现
      if (options.length) {
        this.apperClose = true
      } else {
        this.apperClose = false
      }

      if (this.pageOption.from === 'discover') {
        localEvent.set(localStorageKey.discover_select_user, options)
      } else if (this.pageOption.from === 'comment') {

      } else {
        return false
      }
    },
    // 数据；
    getList() {
      postRequest(`followed/searchUsers`, {}).then(response => {
        var code = response.code
        if (code !== 1000) {
          window.mui.alert(response.data.message)
          uni.navigateBack()
          return
        }
        if (response.data.length > 0) {
          var arr = response.data
          for (var i = 0; i < arr.length; i++) {
            if (!arr[i].user_name) {
              continue
            }
            var item = {
              id: arr[i].user_id,
              name: arr[i].user_name,
              avatar_url: arr[i].user_avatar_url,
              description: arr[i].description,
              is_expert: arr[i].is_expert,
              is_followed: arr[i].is_followed,
              uuid: arr[i].uuid

            }
            this.list = this.list.concat(item)
          }

          if (this.pageOption.from === 'discover') {
            var user = localEvent.get(localStorageKey.discover_select_user)
            for (var num = 0; num < user.length; num++) {
              this.collectProfessor(user[num].listindex, user[num])
            }
          } else if (this.pageOption.from === 'comment') {

          }
        }
        this.loading = 0
      })
    }
  }
}
</script>

<style lang="less">

    .bot {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0upx;
        height: 1.96upx;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: rgb(220, 220, 220);
    }

    /*搜索区域*/

    .indexHeader {
        background-color: #f3f4f6;
        padding: 19.96upx 30upx;
        .searchWrapper {
            .iconfont{
                position: absolute;
                left: 49.96upx;
                top: 24upx;
                color: #c8c8c8;
                z-index:1;
            }
            .input {
                height: 69.98upx;
                font-size: 27.98upx;
                border-radius: 99.98upx;
                background: #fff;
                padding:0;
                border: 1.96upx solid #dcdcdc;
                margin-bottom: 9.98upx;
                padding-left: 60upx;
                &::placeholder {
                    color: #c8c8c8;
                }
            }
        }
        .notFound {
            font-size: 25.96upx;
            color: #808080;
            text {
                color: #03aef9;
            }
        }
    }

    .indexTitle {
        background: #ececee;
        font-size: 25.96upx;
        height: 49.96upx;
        line-height: 49.96upx;
        padding: 0 30upx;
        color: #808080;
    }

    .mui-content {
        background: #fff;
    }

    .textBody {
        width: 50%;
    }
    .selectUser{
        float: right;
        position: relative;
        right: 9.98upx;
        width: 45.98upx;
        height: 99.98upx;
    }
    .select{
        width:45.98upx;
        height:45.98upx;
        border-radius: 50%;
        background: #FFFFFF;
        color: #03aef9;
        border: 1.96upx solid #dcdcdc;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        margin: auto;
    }
    .select.active{
        background:#FFFFFF;
        border: 1.96upx solid #FFFFFF;

    }
    .select.active .iconfont{
        font-size:45.98upx;
        position: absolute;
        color:#03aef9;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        margin: auto;
    }
    /*搜索有确定按钮的*/
    .searchContainer{
        width:100%;
        height:69.98upx;
        background:#f3f4f6;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        margin-bottom: 9.98upx;
    }
    .searchContainer .searchContainerTwo{
        width: 80%;
        height:67.96upx;
        background: #FFFFFF;
        border-radius: 99.98upx;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        /*justify-content:space-between;*/
        align-items:center;
        padding:0 24upx;
    }
    .searchContainer .searchContainerOne{
        width:17%;
        height:67.96upx;
        background:#03aef9;
        border-radius:99.98upx;
        text-align: center;
        line-height: 67.96upx;
        font-size:27.98upx;
        color: #FFFFFF;
    }
    .searchContainer input{
        width:85%;
        height:100%;
        margin: 0;
        border:none;
        padding: 0;
        padding-left: 0;
        font-size:27.98upx;
        color:#444444;
        float: left;
        margin-left: 19.96upx;
    }
    .searchContainer p .iconfont{
        color:#c8c8c8;
        font-size: 33.98upx;
    }
    .searchContainer text{
        width:36upx;
        height:36upx;
        background: #c8c8c8;
        border-radius: 50%;
        position: relative;
        float:right;
    }
    .searchContainer text .iconfont{
        color: #FFFFFF;
        position: absolute;
        right:0;
        left:0;
        top:0;
        bottom:0;
        margin:auto;
    }
    input::-webkit-input-placeholder { /*WebKit browsers*/
        color:#c8c8c8;
        font-size: 27.98upx;
    }

    .avatar .avatarInner {
        position: relative;
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

    .avatarInner .iconfont {
        position: absolute;
        right: -12upx;
        bottom: -1.96upx;
        font-size: 24upx;
        color: #03aef9;
        line-height: normal;
    }

    .index-bar-container {

    }

    .index-bar-container .index-bar-main {
        position: relative;
    }

    .index-bar-container .index-bar-main .index-bar-content .index-bar-group {
        padding: 0;
        margin: 0;
        color: #656565;
    }

    .index-bar-container .index-bar-main .index-bar-content .index-bar-group .index-bar-cell {
        padding-left: 30upx;
        color: #000000;
        position: relative;
        background-color: #ffffff;
    }

    .index-bar-container .index-bar-main .index-bar-content .index-bar-group .index-bar-cell.index-bar-cell-head {
        font-size: 25.96upx;
        height: 49.96upx;
        line-height: 49.96upx;
        padding-left: 30upx;
        background-color: #f5f5f5;
    }

    .index-bar {
        position: fixed;
        right: 0;
        bottom: 93.98upx;
        z-index: 12;
        width: 45.98upx;
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
        font-size: 19.96upx;
        color: #316ccb;
    }

    .index-bar .index-bar-list {

        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        box-orient: vertical;
        -webkit-flex-direction: column;
        flex-direction: column;
        list-style: none;
        height: 100%;
        padding: 0;
        width: 100%;
    }

    .index-bar .index-bar-item {
        color: #444;
        line-height: 33.98upx;
        font-size: 24upx;
        text-align: center;
        display: inline-block;
    }

    @media screen and (max-width: 370px) {
        .index-bar .index-bar-item {
            line-height: 27.98upx;
        }
    }

    .groupWrapper {
        background: #fff;
        overflow-y: scroll;
    }

    .bottomBorder:after {
        right: 0;
    }

    .groupWrapper:last-child:after {
        display: none;
    }

    .avatar {
        z-index: 0;
        color: #ffffff;
        background-color: #bdbdbd;
        display: inline-block;
        height: 87.98upx;
        width: 87.98upx;
        font-size: 39.98upx;
        text-align: center;
        border-radius: 50%;
    }

    .tap-active {
        font-size: 27.98upx;
        padding: 19.96upx 0 7.96upx;
    }

    .textBody {
        position: absolute;
        top: 24upx;
        right: 135.98upx;
        left: 135.98upx;
        vertical-align: top;
        color: #565656;
    }

    .textBody .desc {
        color: #b4b4b6;
    }

    .ibutton {
        float: right;
        border-radius: 99.98upx;
        width: 123.0upx;
        height: 54upx;
        text-align: center;
        line-height: 54upx;
        position: relative;
        top: 19.96upx;
        margin-right: 9.98upx;
        background: #03aef9;
        color: #fff;
    }

    .ibutton.active {
        background: #dcdcdc;
        color: #b4b4b6;
    }
    .index-bar-content{
        padding-right:60upx;
    }
</style>
