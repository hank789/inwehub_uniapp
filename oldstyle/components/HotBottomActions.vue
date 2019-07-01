<style lang="less" rel="stylesheet/less" scoped>
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

  .heat-wrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 999;
    padding-top: 39.98upx;
    background: #ffffff;
    border-top-left-radius: 36upx;
    border-top-right-radius: 36upx;
    .cancelW {
      position: relative;
      text-align: center;
      .bot {
        top: 0 !important;
      }
      span {
        color: #444444;
        font-family: PingFangSC-Medium;
        font-size: 31.96upx;
        text-align: center;
        line-height: 103.96upx;
      }
    }
  }
  .footerMenu {
    display: flex;
    padding: 0 9.98upx 39.98upx;
    justify-content: space-between;
    .left {
      width: 91.96upx;
      text-align: center;
      margin-left: 60upx;
      .icon {
        color: #C8C8C8;
        font-size: 42upx;
        text-align: center;
      }
      .hotRecommend {
        width: 91.96upx;
        height: 51.98upx;
        margin-top: 19.96upx;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .right {
      display: flex;
      .oneLine {
        width: 1.96upx;
        height: 87.98upx;
        background: #DCDCDC;
        margin-right: 30upx;
        position: relative;
        top: 19.96upx;
      }
      .menu {
        padding: 0 30upx;
        text-align: center;
        &:last-child {
          padding-right: 49.96upx;
        }
        .one {
          background: #03AEF9;
        }
        .two {
          background: #5B84DE;
        }
        .three {
          background: #77C819;
        }
        .iconCircular {
          width: 87.98upx;
          height: 87.98upx;
          color: #FFFFFF;
          font-size: 45.98upx;
          text-align: center;
          line-height: 87.98upx;
          border-radius: 50%;
          display: inline-block;
          &.grey {
            background: #F7F8FA;
            color: #808080;
          }
        }
        .text {
          color: #808080;
          font-size: 21.98upx;
          text-align: center;
          margin-top: 9.98upx;
        }
      }
    }
  }
</style>