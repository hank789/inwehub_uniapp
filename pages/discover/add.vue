<template>
  <view class="content">
    <textarea v-model="description" class="textarea" :placeholder="placeholder" />

    <view class="container-bottom-menus">
      <view class="leftItems">
        <view class="leftItem" @tap.stop.prevent="toUser">
          <text class="iconfont icon-icon-test2" />
        </view>
        <view class="leftItem" @tap.stop.prevent="totags">
          <text class="iconfont icon-biaoqian2" />
        </view>
        <view class="leftItem" :class="{'disable': !isUploadImage}" @tap.stop.prevent="uploadImage">
          <text class="iconfont icon-tupian" />
        </view>
        <view class="leftItem" :class="{'disable': !isUploadPdf}" @tap.stop.prevent="uploadPdf">
          <text class="iconfont icon-wenjian" />
        </view>
        <view class="leftItem" :class="{'disable': !isUploadLink}" @tap.stop.prevent="promptUrl">
          <text class="iconfont icon-lianjie2" />
        </view>
      </view>

      <view class="rightItems">
        <view
          v-if="address"
          class="component-labelWithIcon selectGroup float-right text-line-1"
          @tap.stop.prevent="selectGroup"
        >
          <template v-if="selectedGroup.name">
            <text class="iconfont icon-wodequanzi-shouye" />
            {{ selectedGroup.name }}
          </template>
          <template v-else>
            <text class="iconfont icon-wodequanzi-shouye" />
            选择圈子
          </template>
        </view>
        <view
          v-if="address"
          class="component-labelWithIcon selectedAddress float-right text-line-1"
          @tap.stop.prevent="toAddress"
        >
          <text class="iconfont icon-dingwei1" />
          {{ selectedAddress }}
        </view>
      </view>

    </view>
  </view>

</template>

<script>
export default {
  components: {},
  data() {
    return {
      description: '',
      address: '所在位置',
      placeholder: '在这里输入您的分享内容\n底部的按钮可以添加：标签、链接、附件',
      isUploadImage: true,
      isUploadPdf: true,
      isUploadLink: true,
      selectedGroup: {
        name: ''
      },
      selectedAddress: '所在位置'
    }
  },
  onShow: function () { //option为object类型，会序列化上个页面传递的参数
     this.$ls.get()
  },
  methods: {
    addDiscover() {

    },
    toUser() {
      uni.navigateTo({ url: '/pages/user/select?from=discover' })
    },
    totags() {
      uni.navigateTo({ url: '/pages/tag/select?from=discover' })
    },
    uploadImage() {

    }
  }
}
</script>

<style>
    .content {
        height: 100%;
        background: #f3f4f6;
    }

    .textarea {
        width: 100%;
        height:calc(100% - 88upx);
        padding:12px 15px;
    }

    .container-bottom-menus {
        position: fixed;
        display: flex;
        align-items:center;
        width: 100%;
        bottom: 0;
        height: 88upx;
        background: #fff;
        justify-content: space-between;
        line-height: 88upx; }

    .container-bottom-menus .leftItems{
        flex-grow: 2;
    }
    .container-bottom-menus .leftItem{
        display: block;
        float: left;
        padding: 0 15.0upx;
        font-size: 37.96upx;
        color: grey;
    }

    .container-bottom-menus .leftItem .iconfont{
        font-size: 37.96upx;
    }

    .container-bottom-menus .component-labelWithIcon{
        align-self: flex-end;
    }

    .container-bottom-menus .selectGroup{
        background: #03AEF9;
    }

    .component-labelWithIcon {
        margin: 25.96upx 9.98upx;
    }
</style>
