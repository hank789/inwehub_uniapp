<style scoped lang="less">
  .mui-content {
    background: #ffffff;
  }
  .listWrapper {
    top: 73.96upx !important;
  }
  .listSelect {
    height: 67.96upx;
    padding: 0 31.96upx;
    line-height: 67.96upx;
    display: flex;
    justify-content: space-between;
    box-shadow:0upx 9.98upx 19.96upx 0upx rgba(249,249,251,1);
    div {
      color: #444444;
      font-size: 25.96upx;
      &:nth-of-type(1) {
        .icon {
          font-size: 13.96upx;
          margin-bottom: 1.96upx;
        }
      }
      &:nth-of-type(2) {
        .icon {
          font-size: 19.96upx;
        }
      }
    }
  }

  .list {
    margin-top: 3.0upx;
  }
  .comment-product {
    padding: 27.98upx 30upx 0;
    .product-info {
      overflow: hidden;
      padding-bottom: 31.96upx;
      .product-img {
        width: 87.98upx;
        height: 87.98upx;
        float: left;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 7.96upx;
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
        }
      }
    }
  }
  .noData {
    margin-top: 99.98upx;
    margin-bottom: 99.98upx;
    .DataImg {
      width: 121.96upx;
      height: 177.98upx;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .noDataText {
      color: #C8C8C8;
      font-size: 24upx;
      line-height: 31.96upx;
      margin-top: 19.96upx;
      text-align: center;
    }
  }
  .dianPingListHeader {
    position: relative;
    height: 87.98upx;
    line-height: 87.98upx;
    background-color: #FFF;
    /*display: flex;*/
    .headerBack {
      font-size: 49.96upx;
      color: #3C3E44;
      margin-left: 19.96upx;
    }
    .headerTitle {
      color: #3C3E44;
      font-size: 36upx;
      text-align: center;
      font-family:PingFangSC-Medium;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>