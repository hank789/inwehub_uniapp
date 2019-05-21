<template>
    <view class="content">
        <cmd-nav-bar :fixed="false" right-color="#03AEF9" right-text="确认分享" back title="发布" @rightText="addDiscover"/>

        <textarea class="textarea" :placeholder="placeholder" :value="description"></textarea>

        <view class="container-bottom-menus">
            <view @tap.stop.prevent="toUser">
              <text class="iconfont icon-icon-test2"></text>
            </view>
            <view @tap.stop.prevent="totags">
        </view>
            <view @tap.stop.prevent="uploadImage" :class="{'disable': !isUploadImage}">
            <text class="iconfont icon-tupian"></text>
        </view>
            <view @tap.stop.prevent="uploadPdf" :class="{'disable': !isUploadPdf}">
          <text class="iconfont icon-wenjian"></text>
        </view>
            <view @tap.stop.prevent="promptUrl" :class="{'disable': !isUploadLink}">
          <text class="iconfont icon-lianjie2"></text>
        </view>
            <view class="component-labelWithIcon selectGroup float-right text-line-1" v-if="address"
                 @tap.stop.prevent="selectGroup">
                <template v-if="selectedGroup.name">
                    <text class="iconfont icon-wodequanzi-shouye"></text>
                    {{selectedGroup.name}}
                </template>
                <template v-else>
                    <text class="iconfont icon-wodequanzi-shouye"></text>
                    选择圈子
                </template>
            </view>
            <view class="component-labelWithIcon selectedAddress float-right text-line-1" v-if="address"
                 @tap.stop.prevent="toAddress">
                <text class="iconfont icon-dingwei1"></text>
                {{selectedAddress}}
            </view>

        </view>
    </view>

</template>

<script>
  import cmdNavBar from '@/components/cmd-nav-bar/cmd-nav-bar.vue'

  export default {
    components: {cmdNavBar},
    data() {
      return {
        description: '',
        address: '所在位置',
        placeholder: '在这里输入您的分享内容底部的按钮可以添加：标签、链接、附件',
        isUploadImage: true,
        isUploadPdf: true,
        isUploadLink: true,
        selectedGroup: {
          name: ''
        },
        selectedAddress: '所在位置',
      }
    },
    methods: {
      addDiscover() {

      },
      toUser () {

      },
      totags () {

      },
      uploadImage () {

      }
    }
  }
</script>

<style>
    .content {
        height: 100%;
    }

    .textarea {
        width: 100%;
        height:calc(100% - 180upx);
        padding:5px;
    }

    .container-bottom-menus{
        position: absolute;
        padding-left: 15.0upx;
        background: #fff;
        left:0;
    }
    .container-bottom-menus view{
        display: block;
        float: left;
        padding: 0 15.0upx;
        font-size: 37.96upx;
        color: grey;
    }

    .container-bottom-menus {
        position: fixed;
        width: 100%;
        bottom: 0;
        background: #ececee;
        height: 88upx;
        line-height: 88upx; }
    .container-bottom-menus .menu {
        margin-left: 30upx;
        color: #808080;
        font-size: 38upx; }

    .component-labelWithIcon {
        margin: 25.96upx 9.98upx;
    }
</style>