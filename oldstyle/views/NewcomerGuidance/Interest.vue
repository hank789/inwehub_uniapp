<style lang="less" scoped>
  .mui-content {
    background: #FFFFFF;
    .right {
      float: right;
      font-size: 27.98upx;
      color: #03AEF9;
      padding: 0 31.96upx 60upx;
    }
  }

  /*订阅的头部*/
  .invitation-title {
    width: 100%;
    height: 264upx;
    background: #f3f4f6;
    padding: 0 33.98upx;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      color: #b4b4b6;
      font-size: 49.96upx;
      position: absolute;
      left: 33.98upx;
      top: 39.98upx;
    }
    .next-step {
      width: 150upx;
      height: 67.96upx;
      line-height: 63.98upx;
      border: 1.96upx solid #03aef9;
      border-radius: 99.98upx;
      font-size: 27.98upx;
      color: #03aef9;
      position: absolute;
      right: 33.98upx;
      top: 31.96upx;
    }
    .invitation-text {
      position: absolute;
      top: 117.98upx;
      left: 180upx;
      text-align: left;
      display: flex;
      flex-direction: column;
    }
    p {
      &:nth-of-type(1) {
        font-size: 27.98upx;
        color: #808080;
      }
      &:nth-of-type(2) {
        font-size: 39.98upx;
        color: #323232;
      }
    }
  }

  // 列表
  .interestList {
    padding: 30upx 31.96upx 0;
    .interestGroup {
      width: 331.96upx;
      padding: 0 19.96upx;
      height: 126upx;
      font-size: 30upx;
      color: #444444;
      line-height: 126upx;
      text-align: center;
      border-radius: 7.96upx;
      margin-bottom: 19.96upx;
      display: inline-block;
      background: #F7F8FA;
      &:nth-child(odd) {
        margin-right: 19.96upx;
      }
    }
    .active {
      color: #fff;
      background: #03AEF9;
    }
  }

  // 弹窗

  .popupWrapper {
    text-align: left;
    .title {
      background: #fff;
      text-align: center;
      font-size: 27.98upx;
      padding: 24upx 0;
      position: relative;
      color: #808080;
      border-bottom: 2upx solid #DCDCDC;
      span {
        font-family:PingFangSC-Regular;
        position: absolute;
        left: 43.96upx;
        font-size: 31.96upx;
      }
    }
    .wraperBox {
      background: #fff;
      padding-top: 30upx;
      padding-bottom: 60upx;
      .inputWrapper {
        text-align: center;
        margin-bottom: 60upx;
        input {
          width: 685.96upx;
          margin-bottom: 0;
          border-radius: 9.98upx;
          border: 1.96upx solid #DCDCDC;
          &::placeholder {
            font-size: 27.98upx;
            color: #C8C8C8;
          }
        }
      }
      .refer {
        width: 685.96upx;
        height: 87.98upx;
        line-height: 87.98upx;
        text-align: center;
        font-size: 31.96upx;
        color: #ffffff;
        margin: 0 auto;
        background: #03AEF9;
        border-radius: 99.98upx;
      }
    }
  }
</style>