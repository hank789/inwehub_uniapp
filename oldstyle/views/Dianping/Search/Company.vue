<style scoped lang="less">
  .mui-android .mui-content .menu .bot {
    height: 1.96upx;
  }
  .bot {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .mui-content {
    background: #FFFFFF;
    .listWrapper{
      top: 168upx;
    }
  }

  .container-searchCompony {
    .container-searchComponyList {
      padding: 0 31.96upx;
      .container-componyList {
        position: relative;
        padding: 30upx 0 24.98upx;
        display: flex;
        .componyImg {
          width: 84upx;
          height: 84upx;
          border-radius: 7.96upx;
          img {
            width: 100%;
            height: 100%;
            border-radius: 7.96upx;
          }
          &.border-football {
            &:after {
              border-radius: 15.98upx;
            }
          }
        }
        .componyInfo {
          margin-left: 25.96upx;
          .componyName {
            width: 565.96upx;
            color: #444444;
            font-size: 31.96upx;
            line-height: 45.0upx;
          }
          .componyTags {
            color: #808080;
            font-size: 25.96upx;
            line-height: 36.98upx;
            margin-top: 7.96upx;
            margin-bottom: 9.98upx;
            span {
              i {
                width: 3.98upx;
                height: 3.98upx;
                background: #B4B4B6;
                border-radius: 199.96upx;
                display: inline-block;
                vertical-align: middle;
                margin: -6upx 9.98upx 0;
              }
            }
          }
          .componyAddress {
            width: 573.0upx;
            display: flex;
            justify-content: space-between;
            .address {
              color: #B4B4B6;
              .icon {
                font-size: 27.98upx;
              }
              span {
                font-size: 21.98upx;
                line-height: 30upx;
                margin-left: -7.96upx;
              }
            }
          }
        }
      }
    }
  }
</style>