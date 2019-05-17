<style scoped lang="less">
  .mui-content {
    background: #fff !important;
  }

  .topTitle {
    color: #3C3E44;
    font-size: 39.98upx;
    padding: 36upx 31.96upx 0;
  }

  .heatAlbum {
    padding: 0 31.96upx;
    margin-top: 25.96upx;

    .albumList {
      display: inline-block;
    }
  }

  .albumList {
    .componentCarAlbum {
      width: 225.98upx;
      height: 304.96upx;
      position: relative;
      border-radius: 7.96upx;
      margin: 3.98upx 3.98upx 0 0;
      background: linear-gradient(39deg, rgba(60, 87, 119, 1) 0%, rgba(28, 44, 66, 1) 100%);

      &:nth-of-type(2) {
        margin-right: 0;
      }

      .albumName {
        position: relative;
        z-index: 1;
        color: #FFFFFF;
        font-size: 27.98upx;
        padding: 39.98upx 30upx 0;
        line-height: 43.96upx;
      }

      .tags {
        position: absolute;
        z-index: 1;
        left: 30upx;
        bottom: 39.98upx;
        height: 30upx;
        padding: 0 9.98upx;
        line-height: 30upx;
        border-radius: 0upx 7.96upx 0upx 7.96upx;
        background: linear-gradient(45deg, rgba(83, 223, 221, 1) 0%, rgba(41, 188, 184, 1) 100%);

        span {
          color: #1C2C42;
          font-size: 19.96upx;
          line-height: 27.98upx;
        }
      }

      .backgroundSmall {
        position: absolute;
        top: 0;
        left: 0;
        width: 225.98upx;
        height: 304.96upx;
      }

      .backgroundBig {
        position: absolute;
        top: 0;
        left: 0;
        width: 456upx;
        height: 304.96upx;
        display: none;
      }
    }
  }

  .albumList .componentCarAlbum .backgroundSmall image,
  .albumList .componentCarAlbum .backgroundBig img {
    width: 100%;
    height: 100%;
  }

  .heatProduct {
    margin-top: 30upx;
  }

  .productList {
    margin-top: 19.96upx;
    padding: 0 31.96upx;
  }

  .componentCarProduct {
    padding: 30upx;
    background: #FFFFFF;
    border-radius: 7.96upx;
    box-shadow: 0upx 0upx 51.98upx 0upx rgba(232, 241, 241, 1);

    .topInfo {
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;

        .nameMark {
          .title {
            color: #3C3E44;
            font-size: 31.96upx;
            line-height: 45.0upx;
            margin-bottom: 13.96upx;
          }

          .stars {
            display: flex;

            .span {
              font-size: 21.98upx;
              line-height: 30upx;
              margin-left: 6upx;
              margin-top: 3.0upx;
            }
          }
        }

        .logo {
          width: 87.98upx;
          height: 87.98upx;
          margin-right: 19.96upx;
          overflow: hidden;
          border-radius: 7.96upx;
          border: 0.98upx solid #ECECEE;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .right {
        display: flex;

        .heatICon {
          width: 18upx;
          height: 22.96upx;
          margin-right: 7.96upx;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .textNumber {
          color: #3C3E44;
          font-size: 24upx;
          line-height: 28.96upx;
          margin-top: 1.96upx;
        }
      }
    }

    .bottom {
      .describe {
        color: #808080;
        font-size: 27.98upx;
        line-height: 45.0upx;
        margin-top: 19.96upx;
      }
    }
  }

  .specialWrapper {
    width: 100%;
    height: 892.96upx;
    padding: 0upx 0 0 0upx;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 60upx;

    .specialList {
      position: relative;
      margin: 19.96upx 0upx 0 0;

      .img {
        width: 333.0upx;
        height: 159.0upx;
        border-radius: 7.96upx;
      }

      img {
        height: 100%;
        width: 100%;
        border-radius: 7.96upx;
      }

      .text {
        font-size: 25.96upx;
        color: #FFFFFF;
        position: absolute;
        bottom: 30upx;
        left: 30upx;
        white-space: normal;
        padding-right: 30upx;
      }

      .mask {
        width: 333.0upx;
        height: 159.0upx;
        background: linear-gradient(180deg, rgba(28, 44, 66, 0) 0%, rgba(28, 44, 66, 1) 100%);
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 7.96upx;
      }
    }
  }

  .display {
    display: inline-block;
    vertical-align: top;
    margin-left: 19.96upx;

    &:last-child {
      margin-right: 19.96upx;
    }
  }

  .marginR {
    margin-right: 39.98upx;
  }

  .expectWrapper {
    width: 333.0upx;
    height: 156upx;

    .content {
      height: 100%;
      line-height: 156upx;
      border-radius: 7.96upx;
      border: 0.98upx solid #DCDCDC;

      .iconfont {
        font-size: 25.96upx;
        color: #3C3E44;
        margin-left: 30upx;
        margin-right: 6.98upx;
      }

      .expectText {
        color: #808080;
        font-size: 25.96upx;
      }
    }
  }
</style>