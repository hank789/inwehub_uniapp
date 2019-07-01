<style scoped lang="less">
  .mui-content {
    background: #ffffff;
    bottom: 100upx;
  }
  .recommenBanners {
    height: 246upx;
    padding-top: 87.98upx;
    .swiper-slide {
      width: auto !important;
    }
  }
  .topMore {
    float: right;
    color: #3C3E44;
    margin-top: 19.96upx;
    font-size: 42upx;
  }
  .product-introduce {
    width: 685.96upx;
    margin: 0 auto;
    padding: 19.96upx 0 33.98upx;
    background: #ffffff;
    border-bottom-left-radius: 39.98upx;
    border-bottom-right-radius: 39.98upx;
    box-shadow: 0upx 13.96upx 39.98upx 0upx rgba(240, 242, 245, 1);
    .companyLogo {
      width: 120upx;
      height: 120upx;
      margin: 0 auto 19.96upx;
      img {
        width: 100%;
        height: 100%;
        border-radius: 7.96upx;
        object-fit: contain;
      }
    }
    .companyNmae {
      color: #444444;
      font-size: 36upx;
      text-align: center;
      line-height: 49.96upx;
    }
    .companyMark {
      color: #FCC816;
      font-size: 21.98upx;
      line-height: 30upx;
      text-align: center;
      margin-top: 15.98upx;
      .stars {
        display: inline-block;
      }
      .starViewWrapper {
        top:7.96upx;
      }
      .starsText {
        display: inline-block;
        position: relative;
        top: -1.96upx;
      }
      .comment {
        color: #B4B4B6;
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
    .companyDescribe {
      color: #808080;
      font-size: 24upx;
      padding: 0 31.96upx;
      margin-top: 18upx;
      line-height: 37.96upx;
      letter-spacing: 0.98upx
    }
    .supply {
      text-align: right;
      padding: 0 31.96upx;
      span {
        color: #444444;
        font-size: 24upx;
        line-height: 33.0upx;
        &:nth-of-type(1) {
          color: #B4B4B6;
          margin-right: 6upx;
        }
      }
    }
  }

  .optionlList {
    .list {
      color: #444444;
      font-size: 27.98upx;
      padding: 24upx 31.96upx;
      display: flex;
      position: relative;
      justify-content: space-between;
      .ranking {
        color: #B4B4B6;
        font-size: 19.96upx;
        right: 66upx;
        position: absolute;
      }
      .icon {
        color: #808080;
        margin-top: 6upx;
      }
    }
    .line-river-after {
      &:after {
        left: 31.96upx;
        right: 31.96upx;
      }
    }
  }

  .recommend {
    position: relative;
    /*padding-bottom: 49.96upx;*/
    .recommendTitle {
      position: absolute;
      padding: 21.98upx 31.96upx 0;
      span {
        &:nth-of-type(1) {
          color: #444444;
          font-size: 31.96upx;
          line-height: 45.0upx;
          margin-top: 21.98upx;
        }
      }
    }
  }

  .recommendList {
    width: 609.0upx;
    margin: 0 auto 49.96upx;
    padding: 19.96upx 30upx;
    background: #F7F8FA;
    border-radius: 15.98upx;
    overflow: hidden;
    .avatar {
      width: 87.98upx;
      height: 87.98upx;
      float: left;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .personalInfo {
      float: left;
      margin-top: 6upx;
      margin-left: 19.96upx;
      .name {
        color: #565656;
        line-height: 39.98upx;
        font-size: 27.98upx;
      }
      .good {
        width: 337.50upx;
        color: #B4B4B6;
        font-size: 24upx;
        line-height: 33.0upx;
      }
    }
    .speak {
      float: right;
      margin-top: 16.96upx;
      span {
        color: #03AEF9;
        font-size: 24upx;
        padding: 0 19.96upx;
        line-height: 54upx;
        display: inline-block;
      }
      .border-football {
        &:after {
          border-color: #03AEF9;
        }
      }
    }
  }

  .allDianPing {
    padding: 0 31.96upx;
    color: #444444;
    font-size: 31.96upx;
    line-height: 87.98upx;
  }

  .openAllDianPing {
    text-align: center;
    font-size: 27.98upx;
    color: #808080;
    line-height: 87.98upx;
  }

  .component-score {
    padding: 24.98upx 31.96upx 30upx;
    .text {
      color: #B4B4B6;
      font-size: 24upx;
      line-height: 33.0upx;
      margin-bottom: 15.98upx;
    }
    .stars {
      .icon {
        font-size: 45.98upx;
        color: #FCC816;
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
          object-fit: contain;
        }
      }
      .product-detail {
        float: left;
        margin-left: 19.96upx;
        width: 562.50upx;
        .productName {
          color: #444444;
          font-size: 31.96upx;
          line-height: 45.0upx;
        }
        .productMark {
          display: flex;
          .stars {
            margin-top: 1.96upx;
          }
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
  .feedBack {
    padding: 30upx 0 60upx;
    text-align: center;
    .text {
      color: #B4B4B6;
      font-size: 24upx;
      line-height: 33.0upx;
      span {
        color: #03AEF9;
        font-size: 24upx;
        font-family:PingFangSC-Medium;
      }
    }
  }
  .container-menuFooter .menu .iconWrapper {
    color: red;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 180upx;
    text-align: right;
    padding-right: 31.96upx;
  }
</style>
<style>
  .recommenBanners .swiper-pagination-bullet {
    width: 5px; /* px不转换 */
    height: 5px; /* px不转换 */
    margin: 0 2px !important; /* px不转换 */
    background: #D8D8D8;
    opacity: 1;
  }

  .recommenBanners .swiper-pagination-bullets .swiper-pagination-bullet-active {
    background: #03AEF9;
    width: 7.5px; /* px不转换 */
    border-radius: 100px !important; /* px不转换 */
  }

  .recommenBanners .container-menuFooter .menu .iconWrapper .icon {
    color: red;
  }
</style>