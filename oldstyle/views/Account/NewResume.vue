<style scoped lang="less">
  .mui-content {
    background: #ffffff;}

  .showHeader {
    position: relative;
    z-index: 9999;
    display: block !important;
  }
  .bot {
    position: absolute;
    right: 27.98upx;
    bottom: 0;
    left: 27.98upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
    /*border: 1.96upx solid #dcdcdc;*/
  }
  .marginTop {
    margin-top: 99.98upx;
  }

  .content-header-hide {
    display: none;
  }
  .mui-bar-nav {
    transition: all ease-out .3s;
    top: 0 ;
    .mui-title {
      /*color: #ffffff;*/
    }
    .openNotice {
      float: right;
      position: relative;
      z-index: 9;
      font-size: 48upx;
      padding-top: 21.0upx;
      /*color: #ffffff;*/
    }
    .share {
      float: right;
      padding-right: 15.0upx;
      padding-left: 34.66upx;
    }
  }

  .infoBg {
    width: 100%;
    background: #1C3F6D;
    position: absolute;
    height: 642.98upx;
    border-bottom-left-radius: 39.98upx;
    border-bottom-right-radius: 39.98upx;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-bottom-left-radius: 39.98upx;
      border-bottom-right-radius: 39.98upx;
    }
    .backMask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      border-bottom-left-radius: 39.98upx;
      border-bottom-right-radius: 39.98upx;
      background:linear-gradient(360deg,rgba(27,68,194,1) 0%,rgba(81,167,254,0.8) 100%);
    }
  }
  .muiContent {
    position: relative;
    /*top: -642.98upx;*/
  }
  .header-wrapper {
    height: 642.98upx;
    position: relative;
    margin-bottom: 73.96upx;
  }
  .headers {
    position: relative;
    /*height: 642.98upx;*/
    .title {
      position: absolute;
      top: 19.96upx;
      left: 50%;
      font-size: 36upx;
      color: #FFFFFF;
      transform: translateX(-50%);
    }

    .headerBack {
      /*width: 100%;*/
      display: flex;
      height: 87.98upx;
      position: absolute;
      top: 0;
      z-index: 10;
      padding-left: 24upx;
      .icon {
        margin-top: 19.96upx;
        font-size: 45.98upx;
        color: #FFFFFF;
      }
    }
    .openNotice {
      position: absolute;
      top: 21.98upx;
      right: 120upx;
      .icon {
        font-size: 48upx;
        color: #ffffff;
      }
      &.share {
        right: 31.96upx;
      }
    }
    .headPhotowrapper {
      width: 90%;
      position: absolute;
      top: 117.98upx;
      left: 51.98upx;
      z-index: 100;
      .headImages {
        width: 183.98upx;
        height: 183.98upx;
        text-align: center;
        background: #E3E3E3;
        border-radius: 50%;
        border: 1.96upx solid #ffffff;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .personalInfo {
        .nameAndLevel {
          margin-top: 19.96upx;
          .name {
            color: #FFFFFF;
            font-size: 39.98upx;
            line-height: 55.96upx;
          }
          .level {
            padding: 1.96upx 9.98upx;
            position: relative;
            top: -6upx;
            font-style: normal;
            line-height: 30upx;
            font-size: 19.96upx;
            color: #FFFFFF;
            text-align: center;
            border-radius: 199.96upx;
            background:linear-gradient(180deg,#07D7FD 0%,#03AEF9 100%);
          }
        }
        .detailInfo {
          margin-top: 12upx;
          font-size: 24upx;
          line-height: 33.0upx;
          .text {
            color: #ffffff;
            opacity: 0.7;
          }
          .number {
            color: #ffffff;
          }
          i {
            display: inline-block;
            width: 3.98upx;
            height: 3.98upx;
            border-radius: 50%;
            background: #ffffff;
            opacity: 0.7;
            margin: 0 9.98upx 6upx;
          }
        }
        .consultWrapper {
          margin-top: 36upx;
          display: flex;
          justify-content: space-between;
          .leftButton {
            display: flex;
            .letter {
              margin-right: 16.96upx;
            }
            .border-football {
              color: #ffffff;
              font-size: 25.96upx;
              padding: 7.96upx 33.0upx;
              &:after {
                border-radius: 15.98upx;
                border-color: #85A3E4;
              }
            }
          }
          .rightDetailInfo {
            margin-right: 1.96upx;
            margin-top: 12.98upx;
            span {
              color: #FFFFFF;
              font-size: 24upx;
            }
            .icon {
              color: #FFFFFF;
              font-size: 24upx;
            }
          }
        }
        .operationWrapper {
          position: absolute;
          top: 30.98upx;
          right: 0;
          display: flex;
          .iconAndText {
            width: 87.98upx;
            text-align: center;
            &.isFollowed {
              position: relative;
              top: -12upx;
              margin-left: 12upx;
              .icon {
                font-size: 60upx;
              }
            }
            .word {
              color: #FFFFFF;
              font-size: 21.98upx;
              opacity: 0.7;
            }
            &.code {
              .icon {
                font-size: 45.98upx;
              }
            }
            &.active {
              .icon {
                color: #FA4975;
              }
            }
            .icon {
              color: #ffffff;
              font-size: 43.96upx;
            }
          }
        }
      }
    }
  }

  .counter {
    width: 685.96upx;
    /*height: 129.98upx;*/
    padding: 18upx 0 27.0upx;
    position: relative;
    top: 51.98upx;
    left: -19.96upx;
    overflow: hidden;
    text-align: center;
    border-radius: 15.98upx;
    background: #ffffff;
    box-shadow: 0upx 9.98upx 19.96upx 0upx rgba(247,248,250,1);
    .counterList {
      width: 25%;
      float: left;
      span {
        display: block;
      }
      .font-family-medium {
        font-size: 37.96upx;
        color: #444444;
        line-height: 52.96upx;
      }
      .script {
        font-size: 21.98upx;
        line-height: 30upx;
        color: #808080;
        margin-top: 1.96upx;
      }
    }
  }

  .domainWrapper {
    padding: 0 31.96upx;
    overflow: hidden;
    position: relative;
    /*margin-top: 73.96upx;*/
    .skilledTags {
      height: 87.98upx;
      line-height: 87.98upx;
      margin-bottom: 9.98upx;
      .icon {
        font-size: 30upx;
        margin-right: 3.98upx;
      }
      span {
        color: #444444;
        font-size: 31.96upx;
      }
    }
    .tags {
      float: left;
      margin-right: 15.98upx;
      margin-bottom: 30upx;
      span {
        float: left;
        background: #ececee;
        border-radius: 99.98upx;
        padding: 0upx 19.96upx;
        line-height: 48upx;
        font-size: 24upx;
        color: #444444;
      }
    }
    .addTags {
      float: left;
      color: #03AEF9;
      padding: 0upx 19.96upx;
      line-height: 48upx;
      font-size: 24upx;
      vertical-align: sub;
      margin-bottom: 30upx;
      border-radius: 99.98upx;
      border: 1.96upx solid #DCDCDC;
      .icon {
        font-size: 24upx;
        color: #B4B4B6;
        margin-right: 6upx;
      }
    }
  }

  .specialColumn {
    padding: 0 31.96upx;
    display: flex;
    height: 87.98upx;
    line-height: 87.98upx;
    justify-content: space-between;
    .titleText {
      .icon {
        font-size: 30upx;
        margin-right: 3.98upx;
      }
      span {
        color: #444444;
        font-size: 31.96upx;
      }
    }
    .iconFont {
      /*margin-top: 30.98upx;*/
    }
  }

  .noDynamic {
    text-align: center;
    font-size: 99.98upx;
    padding-top: 60upx;
    padding-bottom: 73.96upx;
    span {
      color: #C8C8C8;
      font-size: 24upx;
      display: block;
    }
    .empty-IconImg {
      width: 123.0upx;
      height: 177.98upx;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &.goAddpage {
      span {
        margin-top: 19.96upx;
        line-height: 31.96upx;
      }
      .releaseButton {
        margin-top: 33.98upx;
        button {
          width: 186upx;
          height: 72upx;
          border: none;
          color: #FFFFFF;
          font-size: 27.98upx;
          line-height: 27.98upx;
          background: #03AEF9;
          border-radius: 199.96upx;
        }
      }
    }
  }
</style>
<style>
  .mui-content-top-0{
    top:0 !important;
  }
  .immersedWrapperNone{
    display: none !important;
  }
  .openAppH5 .resume .mui-bar-nav {
    top: 0 !important;
  }
  .mescroll {
    position: relative;
  }
</style>