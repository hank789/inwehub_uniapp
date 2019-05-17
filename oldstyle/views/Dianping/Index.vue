<style scoped lang="less">
  .listWrapper {
    top: 87.98upx !important;
    bottom: 99.98upx !important;
  }
  .mui-content {
    background: #fff !important;
  }
  .moreAlbum {
    .swiper-slide {
      margin-right: 0 !important;
      width: auto !important;
    }
  }
  .main-content {
    position: absolute;
    left:0;
    top:87.98upx;
    bottom: 50px; /* px不转换 */
    width:100%;
    overflow-y: scroll;
  }

  .moreAlbum .swiper-wrapper .swiper-slide:last-child .display {
    margin-right: 19.96upx !important;
  }

  .topTitle {
    color: #3C3E44;
    font-size: 39.98upx;
    padding: 36upx 31.96upx 0;
  }
  .heatAlbum {
    padding: 0 31.96upx;
    margin-top: 25.96upx;
    margin-bottom: 24upx;
  }

  .albumList {
    display: inline-block;
    vertical-align: top;
    &:nth-of-type(1) {
      .componentCarAlbum {
        width: 456upx;
        .tags {
          label {
            color: #ffffff;
            background:linear-gradient(90deg,rgba(253,128,173,1) 0%,rgba(250,73,117,1) 100%);
          }
        }
      }
    }
    &:nth-of-type(2) {
      .componentCarAlbum {
        margin-right: 0;
      }
    }
    &:last-child {
      .componentCarAlbum {
        margin-right: 0;
      }
    }
    .componentCarAlbum {
      width: 225.98upx;
      height: 304.96upx;
      position: relative;
      border-radius: 7.96upx;
      margin: 1.96upx 3.98upx 0 0;
      background: linear-gradient(39deg, rgba(60, 87, 119, 1) 0%, rgba(28, 44, 66, 1) 100%);
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
        label {
          height: 31.96upx;
          color: #1C2C42;
          font-size: 19.96upx;
          line-height: 33.0upx;
          padding: 0 9.98upx;
          display: inline-block;
          border-radius: 0upx 7.96upx 0upx 7.96upx;
          background: linear-gradient(45deg, rgba(83, 223, 221, 1) 0%, rgba(41, 188, 184, 1) 100%);
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
      }
    }
  }

  .albumList .componentCarAlbum .backgroundSmall img,
  .albumList .componentCarAlbum .backgroundBig img {
    width: 100%;
    height: 100%;
  }
  .heatProduct {
    margin-top: 30upx;
    margin-bottom: 24upx;
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
            width: 408upx;
            color: #3C3E44;
            font-size: 31.96upx;
            line-height: 45.0upx;
            margin-bottom: 13.96upx;
          }
          .stars {
            display: flex;
            margin-top: -9.98upx;
            .span {
              font-size: 21.98upx;
              line-height: 30upx;
              margin-left: 6upx;
              margin-top: 7.96upx;
              display: inline-block;
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
            object-fit: contain;
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
            vertical-align: top;
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
        img {
          height: 100%;
          width: 100%;
          border-radius: 7.96upx;
        }
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
<style>
  .dianpingBanners .swiper-pagination-bullet {
    width: 5px; /* px不转换 */
    height: 5px; /* px不转换 */
    margin: 0 2px !important; /* px不转换 */
    background: #D8D8D8;
    opacity: 1;
  }

  .dianpingBanners .swiper-pagination-bullets .swiper-pagination-bullet-active {
    background: #03AEF9;
    width: 7.5px; /* px不转换 */
    border-radius: 100px !important; /* px不转换 */
  }
</style>