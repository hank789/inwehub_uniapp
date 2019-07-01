<style scoped lang="less">
  .mui-content {
    background: #ffffff;
  }
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


  .contactusWrapper {
    position: relative;
    padding: 0 31.96upx;
    margin-top: 33.98upx;
    .bot {
      right: 36upx;
      left: 31.96upx;
    }
    .title {
      color: #444444;
      font-size: 30upx;
      line-height: 42upx;
    }
    .textWrapper {
      padding-bottom: 31.96upx;
      .textBottom {
        margin-bottom: 27.98upx !important;
      }
      .text {
        display: flex;
        justify-content: space-between;
        color: #808080;
        font-size: 27.98upx;
        line-height: 39.98upx;
        &:nth-of-type(1) {
          margin: 18upx 0 0upx;
        }
        span {
          &:nth-of-type(2) {
            color: #03AEF9;
          }
        }
      }
    }

  }
</style>