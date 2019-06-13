<template>
    <view class="starViewWrapper">
        <view class="upStar" :style="style">
            <text class="iconfont icon-xingxingyidian"></text>
        </view>
        <view class="downStar">
            <text class="iconfont icon-xingxingweidian"></text>
        </view>
    </view>
</template>

<script type="text/javascript">
  export default {
    props: {
      rating: {
        type: Number,
        default: 0
      }
    },
    computed: {
      style () {
        const ratingPercent = this.rating / 5 * 100
        return 'width:' + ratingPercent + '%'
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
    .starViewWrapper{
        position: relative;
        width:151.96upx;
        height:42upx;
    }
    .starViewWrapper .iconfont{
        font-size: 151.96upx;
    }
    .upStar{
        position: absolute;
        color: #fcc816;
        top:-112upx;
        overflow: hidden;
    }
    .downStar{
        position: absolute;
        color: #fcc816;
        top:-112upx;
        overflow: hidden;
    }
</style>
