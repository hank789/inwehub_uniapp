<style scoped lang="less">
  .mui-content {
    background: #ffffff;
    bottom: 44px; /* px不转换 */
  }
  .mark {
    display: flex;
    padding: 0 31.96upx;
    margin-top: -15.98upx;
    margin-bottom: 13.96upx;
    .stars {
      color: #FCC816;
      .icon {
        font-size: 22.96upx;
      }
    }
    .text {
      color: #FCC816;
      font-size: 21.98upx;
      margin-top: 3.98upx;
      margin-left: 6upx;
    }
  }
  .seeAll {
    padding: 24upx 0;
    font-size: 27.98upx;
    color: #808080;
    line-height: 39.98upx;
    text-align: center;
  }
  .allDianPing {
    padding: 0 31.96upx;
    color: #444444;
    font-size: 31.96upx;
    line-height: 87.98upx;
  }
  .detailTitle {
    font-size: 37.96upx;
    line-height: 60upx;
    margin-top: -21.98upx;
    padding: 0upx 31.96upx 43.96upx;
    font-family: PingFangSC-Medium;
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

  .linkWrapper {
    padding: 0 31.96upx;
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
  .link {
    padding: 0 31.96upx;
    margin-bottom: 34.96upx;
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
      .productLogo {
        width: 87.98upx;
        height: 87.98upx;
        float: left;
        margin-right: 19.96upx;
        img {
          width: 100%;
          height: 100%;
          border-radius: 7.96upx;
          object-fit: cover;
        }
        &.border-football {
          &:after {
            border-radius: 15.98upx;
            border-color: #DCDCDC;
          }
        }
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
        .mark {
          padding: 0;
          margin-top: 0;
          .text {
            color: #FCC816;
            margin-top: 0 !important;
          }
          i {
            width: 3.98upx;
            height: 3.98upx;
            background: #B4B4B6;
            border-radius: 50%;
            margin: 19.50upx 9.98upx 0;
            /*display: inline-block;*/
          }
          .comment {
            color: #B4B4B6;
            font-size: 21.98upx;
            /*margin-top: 1.96upx;*/
          }
        }
      }
    }
  }
  .timeContainer {
    display: flex;
    color: #B4B4B6;
    margin-bottom: 45.0upx;
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
        font-family:PingFangSC-Medium;
      }
      i {
        color: #B4B4B6;
        font-style: normal;
        margin-right: 6upx;
      }
    }
  }
  .productList {
    .comment-product {
      padding: 25.96upx 30upx 0;
      .product-info {
        padding: 0 0 30upx;
        background: none;
      }
      .productName {
        width: 567.98upx;
      }
    }
  }
  .comment-product {
    padding: 21.98upx 30upx 30upx;
    .product-info {
      overflow: hidden;
      background: #F7F8FA;
      padding: 19.96upx;
      .product-img {
        width: 87.98upx;
        height: 87.98upx;
        float: left;
        img {
          width: 100%;
          height: 100%;
          border-radius: 7.96upx;
          object-fit: cover;
        }
      }
      .product-detail {
        float: left;
        margin-left: 19.96upx;
        .productName {
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
        }
      }
    }
  }

  .mui-table-view-cell {
    padding-top: 9.98upx;
  }
  .detail-discover {
    padding-bottom: 9.98upx;
    margin-top: 0 !important;
  }
  .detail-discover:before {
    display: none;
  }
  .detail-discover:after {
    display: none;
  }
  .lineMargin {
    margin-top: -31.96upx;
    margin-bottom: 27.98upx;
  }
  .active {
    color: #d4d4d4;
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