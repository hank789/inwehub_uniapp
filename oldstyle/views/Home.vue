<style scoped lang="less">

  .mui-content {
    background: #FFFFFF;}
  .container-control-logoAndTabsAndSearch .topSearchWrapper .searchFrame {
    width: 619.96upx;}
  .tagLabel {
    width: auto !important;}

  .splitCircle {
    display: inline-block;
    position: relative;
    top: -3.98upx;
    border-radius: 50%;
    width: 3.98upx;
    height: 3.98upx;
    background: #B4B4B6;
  }
  .isFiexd {
    position: relative;
    z-index: 999;
    display: none;
    &.showTags {
      display: block;
    }
  }
  .container-wrapper {
    /*margin-top: 30upx;*/
    .dateWrapper {
      padding: 0 31.96upx;
      height: 42upx;
      display: flex;
      justify-content: space-between;
      line-height: 42upx;
      margin-bottom: 39.98upx;
      margin-top: 19.96upx;
      .icon {
        font-size: 30upx;
      }
      span {
        color: #444444;
        font-size: 24upx;
      }
      .rightDaily {
        position: relative;
        z-index: 9999;
      }
    }
    .container-list {
      padding: 0 31.96upx 0 27.98upx;
      position: relative;
      &.container-list-top {
        margin-top: 27.98upx;
      }
      .pointLine {
        display: inline-block;
        position: absolute;
        top: 0;
        .number {
          color: #444444;
          font-size: 21.98upx;
          font-family: HelveticaNeue-Medium;
        }
        .splitCircle {
          width: 7.96upx;
          height: 7.96upx;
          z-index: 100;
          background: #444444;
        }
        .splitLine {
          width: 1.96upx;
          height: 232.50upx;
          display: inline-block;
          background: #DCDCDC;
          position: absolute;
          top: 25.96upx;
          left: 1.96upx;
          -webkit-transform: scaleX(0.5);
          transform: scaleX(0.5);
        }
      }
      .content {
        width: 660upx;
        margin-left: 34.96upx;
        display: inline-block;
      }
      .top-time {
        span {
          color: #B4B4B6;
          font-size: 21.98upx;
          line-height: 21.98upx;
        }
      }
      .middle {
        display: flex;
        justify-content: space-between;
        /*overflow: hidden;*/
        /*height: 141.98upx;*/
        margin-bottom: 39.98upx;
        margin-top: 9.98upx;
        .left {
          /*width: 384upx;*/
          /*display: inline-block;*/
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
                border-left: 6upx solid transparent;
                border-right: 6upx solid transparent;
                border-top: 6upx solid #FA4975;
                position: absolute;
                top: 37.50upx;
                left: 12upx;
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
          /*float: right;*/
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

  .refreshListWrapper{
    top: 156upx !important;
    bottom: 50px !important; /* px不转换 */
  }

  .immersed44 .refreshListWrapper{
    bottom: 84px !important; /* px不转换 */
  }

  .nav-sticky {
    z-index: 9999;
    position: -webkit-sticky;
    position: sticky;
    top: 27.98upx;
  }

  .nav-fixed{
    z-index: 99;
    position: absolute;
    top: 156upx !important;
    left: 0;
  }
  .fixedData {
    color: #FFFFFF;
    padding-left: 31.96upx;
    padding-right: 19.96upx;
    background: #03AEF9;
    font-size: 24upx;
    display: none;
    margin-top: 27.98upx;
    border-top-right-radius: 99.98upx;
    border-bottom-right-radius: 99.98upx;
    box-shadow:0upx 9.98upx 19.96upx -3.98upx rgba(205,215,220,1);
    &.centerFiexd {
      height: 57.98upx;
      line-height: 57.98upx;
      left: 50%;
      transform: translateX(-21%);
      border-radius: 99.98upx;
    }
    .icon {
      font-size: 27.98upx;
      position: relative;
      top: 0.98upx;
      color: #CCF2FF;
    }
    .upLine {
      width: 1.96upx;
      height: 24upx;
      background: #67CEFB;
      display: inline-block;
      position: relative;
      top: 3.98upx;
      margin: 0 30upx;
    }
    .subscribeText {
      font-size: 24upx;
      margin-left: 114upx;
      .icon {
        font-size: 27.98upx;
        margin-right: 9.98upx;
      }
    }
    .shareText {
      font-size: 24upx;
      .icon {
        font-size: 30upx;
        margin-right: 9.98upx;
      }
    }
  }

  .everyDayWrapper {
    padding: 0 31.96upx;
    margin-top: 19.96upx;
    .everyDay {
      height: 87.98upx;
      line-height: 87.98upx;
      text-align: center;
      border-radius: 7.96upx;
      display: flex;
      justify-content: center;
      border: 1.96upx solid #E8E8E8;
      background: #ffffff;
      .icon {
        font-size: 27.98upx;
        color: #C8C8C8;
        position: relative;
        top: 27.98upx;
      }
      .textImg {
        width: 199.96upx;
        height: 24.98upx;
        line-height: 87.98upx;
        margin-left: 9.98upx;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .leftTopFixedShow{
    display: inline-block !important;
  }
  .mui-ios {
    .heatWrapper {
       .icon {
         top: -6upx !important;
         &.heatAddIcon {
           top: 11.26upx !important;
         }
       }
      span {
        top: -3.76upx !important;
      }
    }
  }
  .mui-android {
    .heatWrapper {
      .icon {
        &.heatAddIcon {
          top: 12upx !important;
        }
      }
    }
  }
  .hideData {
    display: none !important;
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