<style scoped lang="less">
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
  .detailInfoWrapper {
    bottom: 96upx;
    /*background: #FFFFFF;*/
  }
  .cardWrapper {
    padding: 0 31.96upx;
    width: 100%;
    background-color: #FFFFFF;
    .card {
      border-radius: 7.96upx;
      width: 100%;
      position: relative;
      padding-bottom: 30upx;
      padding-top: 30upx;
      .erweima {
        width: 109.96upx;
        height: 102upx;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .header {
        height: 126upx;
        .expert {
          position: absolute;
          right: 0;
          bottom: 0;
          z-index: 10;
          .icon {
            font-size: 48upx;
            color: #FCC816;
            border: 3.98upx solid #FFF;
            border-radius: 50%;
            background: #FFF;
          }
        }
        .avatar {
          position: absolute;
          left: 50%;
          margin-left: -60upx;
          z-index: 9;
          color: #ffffff;
          display: inline-block;
          height: 117.98upx;
          width: 117.98upx;
          font-size: 39.98upx;
          text-align: center;
          border-radius: 50%;
          vertical-align: top;
        }
        .avatar .avatarInner {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          width: 100%;
          height: 100%;
          position: relative;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .avatar img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .detail {
        margin-top: 12.98upx;
        text-align: center;
        .realname {
          font-weight: bold;
          span {
            &:nth-of-type(1) {
              position: relative;
              right: -6upx;
              color: #444444;
              font-size: 36upx;
            }
          }
          .icon {
            vertical-align: bottom;
            font-size: 43.96upx;
            color: #3c95f9;
          }
        }
        .item {
          color: #808080;
          font-size: 25.96upx;
          margin: 25.96upx 13.96upx 0upx 13.96upx;
          .icon {
            color: #b4b4b6;
            font-size: 31.96upx;
          }
          .my-detail {
            width: 100%;
            height: 60upx;
            span {
              font-size: 25.96upx;
              color: #444444;
              .icon {
                color: #B4B4B6;
              }
            }
            .line-wall {
              margin: 0 19.96upx;
              background-color: #C8C8C8;
            }
          }
        }
      }
    }
  }
  .skilled {
    padding: 24upx 27.98upx 19.96upx 27.98upx;
    overflow: hidden;
    position: relative;
    background-color: #FFFFFF;
    .skilledBrief {
      .bot {
        left: 0;
        right: 0;
      }
      position: relative;
      color: #808080;
      font-size: 27.98upx;
      padding-bottom: 15.98upx;
      margin-bottom: 24upx;
    }
    .synopsisContent {
      color: #444444;
      font-size: 25.96upx;
      line-height: 49.96upx;
    }
  }

  // 个人简历
  .separate {
    display: inline-block;
    height: 19.96upx;
    margin: 0 15.98upx;
    border-left: 1.96upx solid #c8c8c8;
  }
  h5 {
    margin: 0;
    padding: 21.98upx 0;
    background: #f3f4f6;
    width: 100%;
    font-size: 27.98upx;
    color: #313131;
    text-align: center;
  }
  .seeMoreWrapper {
    background: #fff;
    padding-bottom: 60upx;
    margin-top: -3.98upx;
    z-index: 5;
    position: relative;
    .seeMore {
      font-size: 27.98upx;
      color: #03AEF9;
      text-align: center;
      padding: 18upx 0 15.98upx;
      background: #fff;
      border: 1.96upx solid #dcdcdc;
      border-radius: 7.96upx;
      margin: 0 39.98upx;
    }
  }
  .list {
    background: #fff;
    padding: 0 19.96upx 0 60upx;
    position: relative;
    &:before {
      position: absolute;
      top: 39.98upx;
      left: 39.98upx;
      content: '';
      width: 1.96upx;
      bottom: 24upx;
      background-color: #ececee;
    }
    .itemJobMore,
    .itemProjectMore,
    .itemEduMore {
      display: none;
    }
    .item {
      position: relative;
      padding: 19.96upx 0 19.96upx 9.98upx;
      &:after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1.96upx;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #dcdcdc;
      }
      &:last-child:after {
        display: none;
      }
      .others {
        color: #b4b4b6;
        font-size: 25.96upx;
        .other {
          display: -webkit-box;
          overflow: hidden;
          .title {
            margin-left: -15.98upx;
            width: 159.98upx;
          }
          .content {
            padding-right: 139.96upx;
          }
        }
      }
      .time {
        position: relative;
        font-size: 27.98upx;
        margin-top: 3.98upx;
        color: #03AEF9;
      }
      .time:before {
        position: absolute;
        left: -36upx;
        top: 9.98upx;
        content: '';
        width: 15.98upx;
        height: 15.98upx;
        background: #03AEF9;
        border-radius: 7.96upx;
      }
      .company {
        font-size: 27.98upx;
        color: #444;
        margin: 9.98upx 0;
      }
      .description {
        color: #808080;
        font-size: 25.96upx;
        margin-top: 12upx;
        line-height: 48upx;
        -webkit-transition: all 3s;
        margin-bottom: 60upx;
        height: auto;
        white-space: pre-wrap;
        &.hide {
          height: 138upx;
        }
      }
      .toggle {
        position: absolute;
        right: 0;
        bottom: 19.96upx;
        font-size: 25.96upx;
        margin-right: 9.98upx;
        color: #03AEF9;
        &.show:before {
          border: none;
          border-left: 12upx solid transparent;
          border-right: 12upx solid transparent;
          border-top: 19.96upx solid #d8d8d8;
        }
        &:before {
          position: absolute;
          left: -37.96upx;
          top: 9.98upx;
          width: 0;
          height: 0;
          content: '';
          border: none;
          border-left: 12upx solid transparent;
          border-right: 12upx solid transparent;
          border-bottom: 19.96upx solid #d8d8d8;
        }
      }
    }
  }
  .noPublic {
    margin: 39.98upx 0 0;
    background: #fff;
    text-align: center;
    font-size: 25.96upx;
    color: #b4b4b6;
    padding-bottom: 60upx;
    padding-top: 39.98upx;
    .icon {
      font-size: 99.98upx;
      color: #f3f4f6;
    }
  }

  .buttonWrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 99.98upx;
    overflow: hidden;
    background: #FFFFFF;
    &:before {
      position: absolute;
      top: 0;
      width: 100%;
      height: 2upx;
      content: '';
      transform: scaleY(0.5);
      background-color: #dcdcdc;
    }
    .edit {
      width: 685.96upx;
      height: 72upx;
      color: #ffffff;
      font-size: 31.96upx;
      line-height: 72upx;
      text-align: center;
      border-radius: 15.98upx;
      background: #03AEF9;
      margin: 15.98upx auto 0;
    }
    .consultWrapper {
      div {
        margin-top: 12.98upx;
      }
      .buttonLeft {
        float: left;
        width: 25%;
        color: #B4B4B6;
        font-size: 19.96upx;
        text-align: center;
        .icon {
          color: #808080;
          font-size: 39.98upx;
          text-align: center;
          display: block;
          margin-left: 73.96upx;
        }
      }
      .buttonRight {
        float: right;
        width: 529.96upx;
        height: 72upx;
        color: #ffffff;
        margin-right: 31.96upx;
        line-height: 72upx;
        text-align: center;
        border-radius: 15.98upx;
        background: #03AEF9;
      }
    }
  }

  .mui-android .list .item .others .other .title{
    margin-left:-7.50upx;
  }
</style>