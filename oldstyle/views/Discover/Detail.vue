<style lang="less" rel="stylesheet/less" scoped>
  .active {
    color: #d4d4d4;
  }

  .seeAll {
    padding: 24upx 0;
    font-size: 27.98upx;
    color: #808080;
    line-height: 39.98upx;
    text-align: center;
  }

  .container-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 99.98upx;
    overflow: hidden;
    /*padding: 27.0upx 31.96upx;*/
    background: #FFFFFF;
    &:before {
      position: absolute;
      top: 0;
      width: 100%;
      height: 2upx;
      content: '';
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
      background-color: #dcdcdc;
    }
    .footerLeft {
      display: flex;
      font-size: 27.98upx;
      float: left;
      padding: 13.96upx 0 13.96upx 31.96upx;
      .footerMenuTwo {
        display: flex;
        .containerBtn {
          display: flex;
          width: 222upx;
          height: 72upx;
          color: #ffffff;
          margin-right: 9.98upx;
          line-height: 72upx;
          text-align: center;
          border-radius: 15.98upx;
          justify-content: center;
        }
        .noBullish {
          background: #FA4975;
        }
        .bullish {
          background: #03AEF9;
        }
      }
      .footerMenuOne {
        width: 444.98upx;
        height: 72upx;
        display: flex;
        color: #03AEF9;
        line-height: 72upx;
        border-radius: 15.98upx;
        background: #F3F4F6;
        text-align: center;
        justify-content: center;
        &.activeRed {
          color: #FA4975;
        }
        &.activeBlue {
          color: #03AEF9;
        }
      }
    }
    .footerRight {
      color: #B4B4B6;
      font-size: 19.96upx;
      text-align: center;
      display: flex;
      float: right;
      margin-top: 13.96upx;
      margin-right: 31.96upx;
      .collectionComment {
        width: 99.98upx;
        height: 97.96upx;
        flex-grow: 1;
        color: #808080;
        span {
          color: #B4B4B6;
          display: block;
          margin-top: -7.96upx;
          i {
            font-style: normal;
          }
        }
      }
      .icon {
        font-size: 43.96upx;
        /*margin-top: -7.96upx;*/
      }
    }
  }

  .lineMargin {
    margin-top: -31.96upx;
    margin-bottom: 27.98upx;
  }

  .container-image {
    height: 399.98upx;
    border-radius: 0;
    img {
      border-radius: 0;
    }
  }

  .topImg {
    margin-bottom: 24upx;
    img {
      width: 750upx;
      height: 399.98upx;
    }
  }

  .detailTitle {
    font-size: 37.96upx;
    line-height: 60upx;
    margin-top: -21.98upx;
    padding: 0upx 31.96upx 43.96upx;
    font-family: PingFangSC-Medium;
  }

  .detail-discover {
    padding-bottom: 9.98upx;
    margin-top: 0 !important;
  }

  .mui-table-view-cell {
    padding-top: 9.98upx;
    padding-bottom: 27.98upx;
  }

  .detail-discover:before {
    display: none;
  }

  .detail-discover:after {
    display: none;
  }

  .contentWrapper {
    padding: 0 30upx;
    white-space: pre-line !important;
    word-wrap: break-word;
    font-size: 31.96upx;
    color: #444;
    line-height: 51.98upx;
    margin-bottom: 51.98upx;
  }

  .contentWrapper .tags {
    color: rgb(33, 77, 120);
    margin-right: 12upx;
  }

  .newestList {
    padding: 19.96upx 30upx 0;
    background: #fff;
  }

  .linkWrapper {
    padding: 0 31.96upx;
  }

  .timeContainer {
    display: flex;
    color: #B4B4B6;
    padding: 0 31.96upx;
    justify-content: space-between;
    .makingCopy {
      font-size: 24upx;
    }
    .fromGroup {
      /*width: 237.98upx;*/
      height: 42upx;
      padding: 0 15.98upx;
      font-size: 24upx;
      line-height: 42upx;
      text-align: center;
      background: #F7F8FA;
      border-radius: 199.96upx;
      span {
        color: #808080;
        font-family: PingFangSC-Medium;
      }
      i {
        color: #B4B4B6;
        font-style: normal;
        margin-right: 6upx;
      }
    }
  }

  .address {
    width: 100%;
    padding: 9.98upx 30upx 0;
    background: #fff;
    font-size: 24upx;
    color: #808080;
  }

  .statistics {
    background: #fff;
  }

  .mui-content {
    bottom: 99.98upx;
    background: #fff;
  }

  .statisticsWrapper {
    padding: 0 30upx 30upx;
  }

  /*点赞样式*/
  .component-dianzanList {
    width: 100%;
    padding: 25.96upx 30upx;
  }

  .component-dianzanList span {
    font-size: 25.96upx;
    color: #03aef9;
  }

  .contentWrapper span {
    font-size: 30upx;
  }

  .Column {
    width: 100%;
    height: max-content;
  }

  .Column .discover_img {
    width: 100%;
    border-radius: 7.96upx;
    margin-bottom: 51.98upx;
    vertical-align: top;
  }

  /*删除按钮*/
  .discover_datail_dalete {
    width: 114upx;
    height: 54upx;
    border: 1.96upx solid #444444;
    text-align: center;
    line-height: 54upx;
    font-size: 25.96upx;
    color: #444444;
    border-radius: 99.98upx;
    position: absolute;
    right: 31.96upx;
    top: 31.96upx;
  }

  .timeData {
    position: absolute;
    top: 54upx;
    left: 111.98upx;
    font-size: 24upx;
    color: #C8C8C8;
    margin-top: -7.96upx;
  }

  .share {
    padding: 0 33.98upx;
    margin: 9.98upx 0 54upx 0;
    .location {
      margin-left: -6upx;
      .icon {
        color: #C8C8C8;
        vertical-align: middle;
      }
    }
    span {
      margin-left: -7.96upx;
      font-size: 24upx;
      color: #B4B4B6;
    }
    .shareGo {
      margin: 51.98upx auto 0;
      text-align: center;
      p {
        font-size: 27.98upx;
        color: #808080;
      }
      .shareList {
        margin-top: -30upx;
        text-align: center;
        ul {
          width: 100%;
          padding: 0;
          display: inline-block;
          li {
            margin: 0 25.96upx;
            display: inline-block;
            &:nth-of-type(1) {
              img {
                width: 73.96upx;
                height: 60upx;
              }
            }
            &:nth-of-type(2) {
              img {
                width: 60upx;
                height: 60upx;
              }
            }
          }
          p {
            font-size: 24upx;
            color: #B4B4B6;
          }
        }
      }
    }
  }

  // 新增链接样式
  .link {
    padding: 0 31.96upx;
    margin-bottom: 51.98upx;
    .linkBox {
      padding: 19.96upx;
      border-radius: 7.96upx;
      background: #F7F8FA;
      .linkIimg {
        width: 87.98upx;
        height: 87.98upx;
        float: left;
        text-align: center;
        line-height: 99.98upx;
        margin-right: 19.96upx;
        border-radius: 7.96upx;
        background: #ECECEE;
        .icon {
          color: #C8C8C8;
          font-size: 55.96upx;
        }
      }
      img {
        width: 87.98upx;
        height: 87.98upx;
        float: left;
        margin-right: 19.96upx;
        border-radius: 7.96upx;
        object-fit: contain;
      }
      .linkContent {
        font-size: 27.98upx;
        color: #808080;
        .seat {
          width: 19.96upx;
          height: 30upx;
          display: inline-block;
        }
        div {
          word-break: break-all;
        }
        .text-line-2 {
          color: #808080;
        }
        .text-line-1 {
          color: #B4B4B6;
          font-size: 24upx;
        }
      }
    }
  }

  // 关联问答
  .answer {
    padding: 0 31.96upx;
    margin-top: 43.96upx;
    .answerBox {
      padding: 30upx 30upx 31.96upx;
      border-radius: 7.96upx;
      border: 1.96upx solid #DCDCDC;
      .answerContent {
        font-size: 27.98upx;
        color: #444;
        .price {
          // width: 78upx;
          height: 33.98upx;
          padding: 0 7.96upx;
          font-size: 21.98upx;
          color: #235280;
          text-align: right;
          line-height: 33.98upx;
          border-radius: 7.96upx;
          background: #A8DFF7;
          display: inline-block;
          span {
            width: 6upx;
            height: 6upx;
            margin-top: -6upx;
            margin-right: 6upx;
            border-radius: 50%;
            background: #fff;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
    }
    .followAnswer {
      margin-top: 13.96upx;
      .follow {
        font-size: 24upx;
        color: #808080;
        line-height: 39.98upx;
        vertical-align: top;
        display: inline-block;
      }
      .rightLine {
        width: 1.96upx;
        height: 21.98upx;
        margin: -19.96upx 31.96upx 0 7.96upx;
        vertical-align: middle;
        display: inline-block;
        background: #DCDCDC;
      }
      .replay {
        display: inline-block;
        img {
          width: 39.98upx;
          height: 39.98upx;
          margin-left: -24upx;
          border: 3.98upx solid #fff;
          border-radius: 50%;
        }
        span {
          font-size: 24upx;
          color: #808080;
          line-height: 39.98upx;
          vertical-align: top;
        }
      }
    }
  }

  .groups {
    width: 92%;
    margin-left: 4%;
    text-align: center;
    height: 67.96upx;
    line-height: 67.96upx;
    border-radius: 7.96upx;
    border: 1.96upx solid #DCDCDC;
    margin-bottom: 25.96upx;
    font-size: 27.98upx;
    color: #03AEF9;
  }

  .groupsList {
    width: 92%;
    margin-left: 4%;
    padding-bottom: 19.96upx;
  }

  .groupsBot {
    width: 92%;
    margin-left: 4%;
    padding-bottom: 19.96upx;
    position: absolute;
    bottom: 0;
  }

  .riverBot {
    width: 100%;
    height: 19.96upx;
    position: absolute;
    bottom: 133.50upx;
    background: #f3f4f6;
  }

  .groupsCenter {
    width: 399.98upx;
    height: 319.96upx;
    position: absolute;
    top: 0;
    bottom: 147.98upx;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }

  .groupsCenter svg {
    font-size: 139.96upx;
  }

  .groupsCenter p:nth-of-type(1) {
    font-size: 24upx;
    color: #C8C8C8;
    text-align: center;
    margin-top: 13.96upx;
    margin-bottom: 42upx;
  }

  .groupsCenter p:nth-of-type(2) {
    width: 229.96upx;
    height: 81.98upx;
    line-height: 81.98upx;
    background: #03AEF9;
    border-radius: 99.98upx;
    font-size: 31.96upx;
    color: #FFFFFF;
    text-align: center;
    margin: auto;
  }

  .shortContentWrapper {
    max-height: 600upx;
    overflow: hidden;
    position: relative;
    margin-bottom: 19.96upx;

    &:after {
      position: absolute;
      bottom: 0;
      content: '';
      height: 124.96upx;
      width: 100%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    }
  }

  .container-recommentProduct {
    .title {
      height: 87.98upx;
      line-height: 87.98upx;
      .text {
        color: #444444;
        font-size: 31.96upx;
        padding: 0 31.96upx;
      }
    }

    .comment-product {
      padding: 25.96upx 30upx 0;
      .product-info {
        overflow: hidden;
        border-radius: 7.96upx;
        padding: 0 0 30upx;
        background: none;
        .product-img {
          width: 87.98upx;
          height: 87.98upx;
          float: left;
          img {
            width: 100%;
            height: 100%;
            border-radius: 7.96upx;
            object-fit: contain;
          }
        }
        .product-detail {
          float: left;
          margin-left: 19.96upx;
          .productName {
            width: 567.98upx;
            color: #444444;
            font-size: 31.96upx;
            line-height: 45.0upx;
          }
          .productMark {
            display: flex;
            .icon {
              color: #FCC816;
              font-size: 24upx;
            }
            span {
              color: #B4B4B6;
              font-size: 21.98upx;
              line-height: 30upx;
              &:nth-of-type(1) {
                color: #FCC816;
                margin-left: 6upx;
              }
            }
            i {
              width: 3.98upx;
              height: 3.98upx;
              margin-right: 9.98upx;
              vertical-align: middle;
              border-radius: 50%;
              background: #B4B4B6;
              display: inline-block;
            }
            .stars {
              display: flex;
              div {
                margin-right: 6upx;
              }
            }
            .starsText {
            }
          }
        }
      }
    }
  }

  .container-pdf-list {
    padding: 0upx 30upx;
    .pdf {
      margin-bottom: 51.98upx;
    }
  }

  .hiddenWrapper {
    display: none;
  }

  .discoverContent {
    padding: 0;
  }

  .component-upAndDown {
    margin-top: 36upx;
    margin-bottom: 36upx;
  }

  .commentTitle {
    padding-bottom: 19.96upx;
  }
</style>
<style type="text/css">
  .detail-discover .followWrapper {
    margin-top: 15.98upx;
  }

  .detail-discover .followWrapper .followButton {
    min-width: 87.98upx;
    height: 42upx;
    line-height: 42upx;
    font-size: 24upx;
    width: auto;
    padding: 0 19.96upx;
  }


</style>