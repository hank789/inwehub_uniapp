<template>
    <view class="content">

        <div class="component-userinfo">
            <div class="left"> <image :src="item.user.avatar"/></div>
            <div class="right">
                <div class="twoLevel">{{item.title}}</div>
                <div class="oneLevel">3天前</div>
            </div>
        </div>
        <div class="component-share">
            <div class="level-three">{{item.feed.title}}</div>
            <div class="level-two">
                <div class="ltLeft"><image :src="item.feed.img"/></div>
                <div class="ltRight">
                    <div class="ltRightTwo">{{item.feed.article_title}}</div>
                    <div class="ltRightOne">{{item.feed.domain}}</div>
                </div>
            </div>
            <div class="level-one">
                <div class="loLeft"><i class="iconfont icon-gengduo1"></i></div>
                <div class="loRight"><i class="iconfont icon-pinglun"></i><i class="iconfont icon-cai"></i><i class="iconfont icon-zan"></i></div>
            </div>
        </div>
    </view>
</template>

<script>

  export default {
    components: {

    },
    data() {
      return {

      }
    },
    computed: {

    },
    props: {
      item: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    created() {

    },
    methods: {
      showDownloadTip() {

      }
    }
  }
</script>

<style>
    .content{
        padding:20upx 32upx;
    }
    .component-userinfo {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center; }
    .component-userinfo .left {
        width: 68upx;
        height: 68upx;
        position: relative; }
    .component-userinfo .left image {
        width: 100%;
        height: 100%;
        border-radius: 50%; }
    .component-userinfo .left .iconfont {
        position: absolute;
        right: 0;
        bottom: 0;
        color: #fff; }
    .component-userinfo .right {
        padding-left: 12upx; }
    .component-userinfo .right .twoLevel {
        color: #444;
        font-size: 26upx; }
    .component-userinfo .right .oneLevel {
        color: #B4B4B6;
        font-size: 24upx; }

    .component-share .level-three {
        font-size: 28upx;
        color: #444;
        padding: 20upx 0; }

    .component-share .level-two {
        background: #F7F8FA;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 20upx; }
    .component-share .level-two .ltLeft {
        width: 88upx;
        height: 88upx; }
    .component-share .level-two .ltLeft image {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 8upx; }
    .component-share .level-two .ltRight {
        padding-left: 12upx; }
    .component-share .level-two .ltRight .ltRightTwo {
        font-family: PingFangSC-Medium, sans-serif;
        font-size: 26upx;
        color: #444; }
    .component-share .level-two .ltRight .ltRightOne {
        color: #B4B4B6;
        font-size: 24upx; }

    .component-share .level-one {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 20upx 0;
        color: #808080; }
    .component-share .level-one .loRight .iconfont {
        padding: 0 20upx; }

</style>
