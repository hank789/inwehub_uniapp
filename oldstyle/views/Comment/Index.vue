<style scoped lang="less">
  .mui-content {
    background:linear-gradient(180deg,#DCDCDC 0%,#F3F4F6 100%);
  }
  .container-control-logoAndTabsAndSearch {
    background: #FFFFFF;
  }

  .container-product-comment {
    width: 625.96upx;
    background: #ffffff;
    margin: 30upx auto 0;
    border-radius: 15.98upx;
    .comment-info {
      overflow: hidden;
      padding: 30upx 30upx 19.96upx;
      .avatarImg {
        width: 67.96upx;
        height: 67.96upx;
        float: left;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .comment-name {
        color: #B4B4B6;
        font-size: 21.98upx;
        line-height: 30upx;
        float: left;
        margin-left: 15.98upx;
        .font-family-medium {
          color: #444444;
          font-size: 25.96upx;
          line-height: 36upx;
          margin-bottom: 3.98upx;
        }
      }
      .comment-mark {
        float: right;
        color: #FCC816;
        font-size: 25.96upx;
        line-height: 36upx;
      }
    }
    .comment-content {
      color: #444444;
      font-size: 27.98upx;
      line-height: 45.0upx;
      padding: 0 30upx;
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
  .container-product-list {
    background: #ffffff;
    margin-top: 60upx;
    padding-bottom: 30upx;
    border-top-left-radius: 31.96upx;
    border-top-right-radius: 31.96upx;
    .productMenu {
      height: 67.96upx;
      display: flex;
      color: #808080;
      font-size: 25.96upx;
      padding: 0 31.96upx;
      line-height: 67.96upx;
      justify-content: space-between;
      box-shadow:0upx 9.98upx 19.96upx 0upx rgba(249,249,251,1);
    }
    .productList {
      .comment-product {
        padding: 25.96upx 30upx 0;
        .product-info {
          padding: 0 0 30upx;
          background: none;
        }
      }
    }
  }
</style>