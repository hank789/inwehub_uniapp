<style scoped lang="less">
  .mui-content {
    background: #FFFFFF;
    text-align: center;
  }
  .logoUpDown {
    text-align: left;
    .icon {
      font-size: 240upx;
    }
  }
  .headPortraitInfo {
    font-size: 36upx;
    color: #444444;
    line-height: 49.96upx;
    margin-top: 127.96upx;
    margin-bottom: 30upx;
    .headPortraitImg {
      width: 67.96upx;
      height: 67.96upx;
      margin: 0 auto 19.96upx;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .myCode {
    width: 475.96upx;
    height: 499.96upx;
    margin: 0 auto;
    background: url("../../statics/images/group.png") no-repeat 0 63.98upx;
    background-size: contain;
    .myCodeWrapper {
      position: relative;
      text-align: center;
      height: 334.96upx;
      div {
        position: absolute;
        left: 50%;
        margin-left: -167.48upx;
        width: 334.96upx;
        height: 334.96upx;
        border-radius: 7.96upx;
        background: #ffffff;
        padding: 12.98upx;
        box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;
      }
    }
  }

  .preservation {
    margin-top: 181.96upx;
    .icon {
      color: #B4B4B6;
    }
    span {
      color: #444444;
      font-size: 27.98upx;
      font-weight: 500;
    }
  }

  .bottomText {
    width: 100%;
    font-size: 24upx;
    color: #808080;
    position: absolute;
    bottom: 66upx;
  }

  /*适配*/
  @media (min-width: 414px) {
    .myCode {
      background-position: 0 39.98upx;
    }
  }
</style>
<style>
  .myCodeWrapperImg img{
    position: absolute;
    top: 50%;
    margin-top: -77px; /* px不转换 */
    left: 50%;
    margin-left: -77px; /* px不转换 */
  }
</style>