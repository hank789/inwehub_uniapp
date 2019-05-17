<style scoped lang="less">

  .mui-bar-nav {
    .shareIcon {
      position: absolute;
      top: 21.98upx;
      right: 31.96upx;
      font-size: 48upx;
      color: #000000;
    }
  }
  .mui-content {
    background: #6AD2FF;
  }
  .topWrapper {
    position: relative;
    .bagImg {
      width: 100%;
      height: 507.98upx;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .dateWrapper {
      position: absolute;
      top: 252upx;
      left: 50%;
      transform: translateX(-50%);
      .date {
        height: 31.96upx;
        padding: 0 9.98upx;
        color: #ffffff;
        font-size: 24upx;
        line-height: 31.96upx;
        border-radius: 7.96upx;
        background: #024FDE;
      }
    }

  }

  .domainWrapper {
    padding: 0 15.98upx 15.98upx;
    .contentWrapper {
      padding: 22.50upx 33.98upx 0;
      border-radius: 39.98upx;
      background: #ffffff;
      margin-top: -111.98upx;
      position: relative;
      .newsList {
        padding: 30upx 0;
        .indexNum {
          font-size: 19.96upx;
          color: #808080;
          line-height: 21.98upx;
          font-family:HelveticaNeue-Medium;
        }
        .middle {
          display: flex;
          justify-content: space-between;
          .left {
            .title {
              color: #444444;
              font-size: 31.96upx;
              line-height: 45.98upx;
              word-break: break-word;
            }
            .heatWrapper {
              height: 37.96upx;
              margin-top: 18upx;
              width: max-content;
              padding: 0 49.96upx 0 15.98upx;
              position: relative;
              .addOne {
                height: 42upx;
                position: absolute;
                top: -55.96upx;
                left: 31.96upx;
                opacity: 0;
                transition-delay: 1.5s;
                -moz-transition-delay: 1.5s;
                -webkit-transition-delay: 1.5s; /* Safari 和 Chrome */
                -o-transition-delay: 1.5s;
                animation: addone 0.8s;
                -moz-animation: addone 0.8s; /* Firefox */
                -webkit-animation: addone 0.8s; /* Safari and Chrome */
                -o-animation: addone 0.8s; /* Opera */
                i {
                  width: 0;
                  height: 0;
                  border-left: 7.96upx solid transparent;
                  border-right: 7.96upx solid transparent;
                  border-top: 7.96upx solid #FA4975;
                  position: absolute;
                  top: 39.0upx;
                  left: 9.76upx;
                }
                span {
                  width: 45.98upx;
                  height: 36upx;
                  line-height: 36upx;
                  color: #FFFFFF;
                  font-size: 21.98upx;
                  text-align: center;
                  border-radius: 7.96upx;
                  background: #FA4975;
                  display: inline-block;
                }
              }
              span {
                color: #C8C8C8;
                font-size: 21.98upx;
                margin-right: 7.96upx;
                position: relative;
                top: -1.96upx;
                left: -3.98upx;
              }
              .icon {
                position: relative;
                top: -3.98upx;
                &:nth-of-type(1) {
                  color: #FA4975;
                  font-size: 22.50upx;
                }
                &:nth-of-type(2) {
                  color: #808080;
                  font-size: 18upx;
                  top: 9.98upx;
                  position: absolute !important;
                  right: 15.98upx !important;
                }
              }
            }
            .border-football {
              &:after {
                border-radius: 15.98upx;
                border-color: #DCDCDC;
              }
            }
          }
          .right {
            margin-left: 36upx;
            margin-right: 7.96upx;
            .articleImg {
              width: 193.96upx;
              height: 141.98upx;
              border-radius: 7.96upx;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
    .bottomLine {
      width: 100%;
      margin: 30upx 0 39.98upx;
      border: 0.98upx dashed #DCDCDC;
    }
    .circular {
      width: 30upx;
      height: 30upx;
      border-radius: 50%;
      background: #82d1f8;
      position: absolute;
      bottom: 207.98upx;
      &.leftC {
        left: -15.98upx;
      }
      &.rightC {
        right: -15.98upx;
      }
    }
    .footerMenu {
      display: flex;
      padding: 0 9.98upx 39.98upx;
      justify-content: space-between;
      .left {
        width: 91.96upx;
        text-align: center;
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
            padding-right: 0;
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
  }

  @keyframes addone
  {
    0% {
      top: -55.96upx;
      opacity: 1;
    }
    50% {
      top: -55.96upx;
      opacity: 5;
    }
    100% {
      top: -90upx;
      opacity: 0;
    }
  }
  @-moz-keyframes addone /* Firefox */
  {
    0% {
      top: -55.96upx;
      opacity: 1;
    }
    50% {
      top: -55.96upx;
      opacity: 5;
    }
    100% {
      top: -90upx;
      opacity: 0;
    }
  }
  @-webkit-keyframes addone /* Safari and Chrome */
  {
    0% {
      top: -55.96upx;
      opacity: 1;
    }
    50% {
      top: -55.96upx;
      opacity: 5;
    }
    100% {
      top: -90upx;
      opacity: 0;
    }
  }
  @-o-keyframes addone /* Opera */
  {
    0% {
      top: -55.96upx;
      opacity: 1;
    }
    50% {
      top: -55.96upx;
      opacity: 5;
    }
    100% {
      top: -90upx;
      opacity: 0;
    }
  }
</style>