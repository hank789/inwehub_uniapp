<style scoped lang="less">
  .mui-content{
    background: #ffffff;
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
  .listWrapper{
    bottom: 87.98upx;
  }

  .relevantPepole {
    .pepoleList {
      position: relative;
      padding: 19.96upx 31.96upx;
      .pepoleWrapper {
        overflow: hidden;
        padding-bottom: 19.96upx;
      }
      .userLogo {
        width: 87.98upx;
        height: 87.98upx;
        position: relative;
        float: left;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }
        .icon {
          position: absolute;
          font-size: 33.98upx;
          bottom: 0;
          right: -3.98upx;
        }
      }
      .userInfo {
        width: 412.50upx;
        float: left;
        margin-top: 6upx;
        margin-left: 15.0upx;
        .name {
          display: flex;
          line-height: 39.98upx;
          span {
            &:nth-of-type(1) {
              color: #565656;
              font-size: 27.98upx;
            }
            &:nth-of-type(2) {
              width:31.96upx;
              height:30upx;
              background: url("../../statics/images/rank.png") no-repeat;
              background-size: 100% 100%;
              color:#FFFFFF;
              font-size:19.96upx;
              line-height: 25.96upx;
              padding-left: 9.0upx;
              margin: 6upx 9.98upx 0;
            }
            &:nth-of-type(3) {
              font-size: 27.98upx;
            }
          }
        }
        .describe {
          color: #B4B4B6;
          font-size: 21.98upx;
          line-height: 30upx;
          margin-top: 6upx;
        }
      }
      .follow {
        height: 54upx;
        float: right;
        color: #FEFEFE;
        font-size: 27.98upx;
        line-height: 54upx;
        padding: 0 19.96upx;
        background: #03AEF9;
        border-radius: 199.96upx;
        margin-top: 16.96upx;
        &.active {
          color: #B4B4B6;
          background: #DCDCDC;
        }
      }
    }
  }
  .meTo {
    width: 100%;
    height: 87.98upx;
    position: absolute;
    bottom: 0;
    .bot {
      top: 0;
    }
    .text {
      width: 685.96upx;
      height: 72upx;
      line-height: 72upx;
      text-align: center;
      color: #ffffff;
      font-size: 31.96upx;
      background: #03AEF9;
      margin: 7.96upx auto 0;
      border-radius: 15.98upx;
    }
  }

</style>