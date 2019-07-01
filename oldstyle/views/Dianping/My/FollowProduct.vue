<style scoped lang="less">
  .mui-content {
    background: #ffffff;
  }
  .listWrapper {
    top: 78upx !important;
  }

  .container-searchMenu {
    margin-top: 0;
  }

  .bot {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.96upx;
    transform: scaleY(0.5);
    background-color: #dcdcdc;
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
</style>