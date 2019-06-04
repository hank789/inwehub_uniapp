<template>
  <view>
    <view class="mui-content">
      <!--搜索框-->
      <view class="searchContainer">
        <view class="p">
          <text class="iconfont icon-sousuo " />
          <input v-model.trim="searchText" type="text" placeholder="搜索附近位置" class="input input input input input">
          <view v-if="isShow" class="span" @tap.stop.prevent="empty()">
            <text class="iconfont icon-guanbi " />
          </view>
        </view>
      </view>
      <!--申请添加-->
      <view v-if="applyIsShow" class="apply">
        <view class="p pFirst" @tap.stop.prevent="addAddress('不显示位置')">不显示位置</view>
        <view class="i bot" />
      </view>
      <!--搜索列表 :class="clicked? 'blue-class':'red-class'"-->
      <RefreshList
        v-if="dataList != null"
        v-model="list"
        :api="'location/nearbySearch'"
        :page-mode="true"
        :request-data="dataList"
        class="listWrapper"
      >
        <view class="ul">
          <view v-for="(item, index) in list" class="li" @tap.stop.prevent="addAddress(item.name)">
            <view class="p pFirst" :class="address === item.name ? 'blue' : ''">{{ item.name }}</view>
            <view class="p pSecond">{{ item.address }}</view>
            <view class="i bottom" />
          </view>
        </view>
      </RefreshList>
    </view>
  </view>
</template>

<script>
import ui from '@/lib/ui'
import { getGeoPosition } from '@/lib/allPlatform'
import RefreshList from '@/components/iw-list/iw-list'
import { toSettingSystem } from '@/lib/html5plus'
import localEvent from '@/lib/localstorage'
import { getLocalUserInfo } from '@/lib/user'
import localStorageKey from '@/lib/localstoragekey'
const currentUser = getLocalUserInfo()

export default {
  components: {
    RefreshList
  },
  data() {
    return {
      pageOption: {},
      id: currentUser.user_id,
      list: [],
      searchText: '',
      loading: 1,
      isShow: false,
      coords: '',
      longt: '121.498981',
      lat: '31.232772',
      value: '',
      applyIsShow: true,
      data: '',
      distance: '',
      dataList: null,
      address: '',
      isLocation: false
    }
  },
  watch: {
    searchText: function(newValue) {
      if (newValue && this.isLocation) {
        this.value = newValue
        this.dataList = {
          name: newValue,
          longitude: this.longt,
          latitude: this.lat
        }
        this.isShow = true
      } else {
        this.isShow = false

        this.applyIsShow = true
      }
    }
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
    this.isLocation = true
    getGeoPosition((position) => {
      this.dataList = {
        longitude: position.longt,
        latitude: position.lat
      }
      this.longt = position.longt
      this.lat = position.lat
    }, () => {
      //  如果获取位置失败
      // #ifdef APP-PLUS
      var btnArray = ['取消', '去设置']
      ui.confirm('请在设置中打开定位服务。', '无法启用定位模式', btnArray, (e) => {
        if (e.index === 1) {
          toSettingSystem('LOCATION')
        } else {
          uni.navigateBack()
        }
      })

      // #endif

      // #ifdef H5
      ui.toast('请开启定位服务。')
      // #endif
    })
  },
  mounted() {
    this.getData()
  },
  updated() {
  },
  methods: {
    // 保存位置名称
    addAddress(address) {
      if (this.pageOption.from === 'discover') {
        localEvent.set(localStorageKey.discover_select_position, address)
        uni.navigateBack()
      } else {
        return false
      }
    },
    //  点击清空输入框
    empty() {
      this.searchText = ''
    },
    // 获取数据 longt: '121.498981',lat: '31.232772',
    getData() {
      if (this.pageOption.from === 'discover') {
        this.address = localEvent.get('selected_' + this.pageOption.from + '_address' + this.id)
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped="scoped">
    .input {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .bot {
        position: absolute;
        right: 4%;
        bottom: 0;
        left: 4%;
        height: 1.96upx;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: rgb(220, 220, 220);
    }
    .bottom {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1.96upx;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: rgb(220, 220, 220);
    }

    .mui-content {
        background:#fefefe;
    }
    /*搜索框*/
    .searchContainer{
        width:100%;
        height:108upx;
        background:#ffffff;
        padding-top: 19.96upx;
        position: absolute;
        top:0;
    }
    .searchContainer .p {
        width:92%;
        height:67.96upx;
        background: #f3f4f6;
        border-radius: 99.98upx;
        margin-left: 4%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        /*justify-content:space-between;*/
        align-items:center;
        padding:0 24upx;
    }
    .searchContainer .input {
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
        background: #f3f4f6;
    }
    .searchContainer .input::placeholder{
        color: #c8c8c8;
    }
    .searchContainer .p .iconfont{
        color:#c8c8c8;
        font-size: 33.98upx;
    }
    .searchContainer .span {
        width:36upx;
        height:36upx;
        background: #c8c8c8;
        border-radius: 50%;
        position: relative;
        float:right;
      line-height: 38upx;
    }
    .searchContainer .span .iconfont{
        color: #FFFFFF;
        position: absolute;
        right:0;
        left:0;
        top:0;
        bottom:0;
        margin:auto;
    }
    /*申请添加*/
    .apply{
        width:100%;
        height:87.98upx;
        padding: 0 4%;
        line-height: 87.98upx;
        position: absolute;
        top:108upx;
      z-index: 7;
      background: #fff;
    }
    .apply .pFirst{
        float: left;
        font-size:27.98upx;
        color:#235280;
      line-height: inherit;
    }
    .ul {
        width:100%;
        padding: 0 4%;
        overflow: hidden;
    }
    .ul .li {
        width:100%;
        height:117.98upx;
        padding: 18upx 0 24upx;
        position: relative;
    }
    .ul .li .pFirst{
        font-size:27.98upx;
        color: #444444;
    }
    .ul .li .pSecond{
        font-size:24upx;
        color: #808080;
    }
    /*选中的颜色*/
    .ul .li .p.blue{
        color: #03aef9;
    }
    .listWrapper{
        top:195upx !important;
    }

</style>
