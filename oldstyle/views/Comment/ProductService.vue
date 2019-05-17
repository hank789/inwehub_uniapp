<style scoped lang="less">
.mui-content {
  background: #ffffff;
}

  .product-introduce {
    width: 685.96upx;
    margin: 0 auto;
    padding: 19.96upx 0 33.98upx;
    background: #ffffff;
    border-bottom-left-radius: 39.98upx;
    border-bottom-right-radius: 39.98upx;
    box-shadow:0upx 13.96upx 25.96upx 0upx rgba(240,242,245,1);
    .companyLogo {
      width: 120upx;
      height: 120upx;
      margin: 0 auto 19.96upx;
      img {
        width: 100%;
        height: 100%;
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
    padding-bottom: 49.96upx;
    .recommendTitle {
      padding: 0 31.96upx 21.0upx;
      display: flex;
      justify-content: space-between;
      span {
        &:nth-of-type(1) {
          color: #444444;
          font-size: 31.96upx;
          line-height: 45.0upx;
          margin-top: 21.98upx;
        }
        &:nth-of-type(2) {
          color: #808080;
          font-size: 25.96upx;
          line-height: 36.98upx;
          margin-top: 25.96upx;
          .icon {
            font-size: 19.96upx;
            margin-left: 6.98upx;
          }
        }
      }
    }
    .recommendList {
      width: 609.0upx;
      margin: 0 auto;
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
  }
</style>