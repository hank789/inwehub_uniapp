<style lang="less" scoped>
  .mui-content{
    background: #fff;
  }
  .listWrapper {
    top: 87.98upx !important;
    bottom: 50px !important; /* px不转换 */
  }

  .immersed44 .listWrapper{
    bottom: 84px !important; /* px不转换 */
  }

  .component-recommendFollow {
    padding: 21.98upx 0 0upx;
    .line-river-after:after {
      left: 31.96upx;
      right: 31.96upx;
    }
    .swiper-slide {
      width: auto !important;
      padding: 21.98upx 0 31.96upx;
      &:first-child {
        .recommendFollowList {
          margin-left: 31.96upx;
        }
      }
      &:last-child {
         .recommendFollowList {
           margin-right: 31.96upx;
         }
       }
    }
    .recommendFollowWrapper {
      /*padding: 0 31.96upx;*/
      .title {
        color: #444444;
        font-size: 31.96upx;
        line-height: 45.0upx;
        padding: 0 31.96upx;
      }
      .recommendFollowList {
        width: 255.98upx;
        height: 340.96upx;
        padding: 0 18upx;
        position: relative;
        background: #FFFFFF;
        margin: 0 9.98upx;
        box-shadow:0upx 0upx 25.96upx 0upx #F2F4F7;
        .recommendListWrapper {
          padding: 30upx 0 0;
          position: relative;
          text-align: center;
          .delRecommend {
            position: absolute;
            right: 0;
            top: 19.96upx;
            .icon {
              font-size: 15.98upx;
              color: #DCDCDC;
            }
          }
          .feed-IconImg {
            width: 141.98upx;
            height: 87.98upx;
            margin: 49.96upx auto 13.96upx;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .desc {
            color: #03AEF9;
            font-size: 21.98upx;
            line-height: 30upx;
            margin-bottom: 66upx;
          }
          .avatar {
            width: 99.98upx;
            height: 99.98upx;
            margin: 0 auto;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .userName {
            color: #444444;
            font-size: 27.98upx;
            line-height: 39.98upx;
            padding: 13.96upx 0 3.0upx;
          }
          .commonFriend {
            color: #B4B4B6;
            font-size: 21.98upx;
            line-height: 30upx;
          }
        }
        .follow {
          width: 219.98upx;
          position: absolute;
          bottom: 30upx;
          text-align: center;
          .text {
            height: 54upx;
            font-size: 24upx;
            padding: 0 30upx;
            line-height: 54upx;
            background: #03AEF9;
            color: #FFFFFF;
            border-radius: 199.96upx;
            display: inline-block;
            &.active {
              background: #DCDCDC;
              color: #B4B4B6;
            }
          }
        }
      }
    }
  }
  .component-feed-item-guide {
    padding-top: 60upx;
    &.feedListNo {
      margin-top: 199.96upx;
      button {
        margin-top: 33.98upx;
      }
    }
    .line-river-after {
      margin-top: 60upx;
      &:after {
        left: 31.96upx;
        right: 31.96upx;
      }
    }
    .feed-IconImg {
      width: 240upx;
      height: 147.98upx;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .newLink {
    margin-top: 18upx;
    // padding: 0 31.96upx;
    .newLinkBox {
      margin-top: 19.96upx;
      padding: 30upx 30upx 21.98upx;
      background: #F7F8FA;
      border-radius: 7.96upx;
      .container-image {
        margin-top: 0;
        margin-bottom: 15.98upx;
      }
      img {
        // width: 627.98upx;
        // height: 223.96upx;
        border-radius: 7.96upx;
      }
      .linkContent {
        font-size: 27.98upx;
        color: #808080;
        // line-height: 39.98upx;
      }
      .link {
        font-size: 24upx;
        color: #B4B4B6;
      }
    }
  }
  .feedResult {
    .noResult {
      padding-bottom: 0;
    }
    .noContent {
      /*padding-top: 240upx;*/
      .buttonWrapper {
        margin-bottom: 30upx;
      }
    }
  }

</style>