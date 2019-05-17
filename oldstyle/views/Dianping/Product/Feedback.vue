<style scoped lang="less">
  .mui-content {
    background: #ffffff;
  }
  .bot {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.96upx;
    transform: scaleY(0.5);
    background-color: #dcdcdc;
  }
  .titleText {
    color: #808080;
    font-size: 27.98upx;
    padding: 0 31.96upx;
    line-height: 39.98upx;
  }
  .feedBackWrapper {
    padding: 0 31.96upx;
    .title {
      padding: 24upx 0;
      position: relative;
      overflow: hidden;
      &.active {
        span {
          color: #C8C8C8;
        }
        .icon {
          display: block;
        }
      }
      span {
        color: #444444;
        font-size: 27.98upx;
        line-height: 39.98upx;
        float: left;
      }
      .icon {
        float: right;
        font-size: 33.98upx;
        color: #03AEF9;
        display: none;
      }
    }
  }
  .productSummary {
    padding-top: 21.98upx;
    .textareaWrapper {
      padding: 25.96upx 31.96upx 0;
      textarea {
        padding: 24upx 30upx;
        height: 327.98upx;
        color: #444444;
        font-size: 27.98upx;
        line-height: 39.98upx;
      }
    }
  }
  .pictureCaption {
    .container-images {
      margin-top: 24upx;
    }
  }
  .sureButton {
    margin: 19.96upx auto 30upx;
    width: 685.96upx;
    height: 87.98upx;
    color: #FFFFFF;
    font-size: 31.96upx;
    line-height: 87.98upx;
    text-align: center;
    background: #03AEF9;
    border-radius: 199.96upx;
    font-family:PingFangSC-Medium;
  }

  .component-photograph {
    width:121.96upx !important;
    height:121.96upx !important;
  }
</style>
<style>
  .dianpingFeedBack .container-images .container-image:nth-of-type(3n) {
    margin-right: 20upx;
  }
</style>