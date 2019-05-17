<style scoped lang="less">
  .mui-content {
    background: #FFFFFF;
  }

  .bot {
    position: absolute;
    right: 31.96upx;
    bottom: 0;
    left: 31.96upx;
    height: 1.96upx;
    transform: scaleY(0.5);
    background-color: #dcdcdc;
  }
  .container-addProduct {
    position: relative;
    .title {
      color: #808080;
      font-size: 27.98upx;
      padding: 0 31.96upx;
      line-height: 39.98upx;
    }
    .productName {
      input[type='text'] {
        margin-bottom: 0;
        border: none;
        color: #444444;
        font-size: 39.98upx;
        margin-top: 1.96upx;
        text-align: center;
        font-family: PingFangSC-Medium;
        &::-webkit-input-placeholder {
          color: #C8C8C8;
          font-size: 39.98upx;
          font-family: PingFangSC-Medium;
        }
        &:-ms-input-placeholder {
          color: #C8C8C8;
          font-size: 39.98upx;
          font-family: PingFangSC-Medium;
        }
        &::-ms-input-placeholder {
          color: #C8C8C8;
          font-size: 39.98upx;
          font-family: PingFangSC-Medium;
        }
        &::placeholder {
          color: #C8C8C8;
          font-size: 39.98upx;
          font-family: PingFangSC-Medium;
        }
      }
    }
    .productType {
      margin-top: 48upx;
      .typeListWrappre {
        padding: 13.96upx 21.98upx 0;
        .typeList {
          padding: 0 19.96upx;
          height: 54upx;
          line-height: 45.98upx;
          background: #F3F4F6;
          border-radius: 199.96upx;
          display: inline-block;
          margin: 9.98upx;
          span {
            color: #444444;
            font-size: 24upx;
          }
          .icon {
            font-size: 15.98upx;
            color: #B4B4B6;
          }
          &.add {
            background: none;
            line-height: 49.96upx;
            span {
              color: #03AEF9;
            }
          }
        }
      }
    }
    .companyWrapper {
      position: relative;
      padding: 19.96upx 0 24upx;
      .title {
        display: flex;
        justify-content: space-between;
        .company {
          span {
            color: #444444;
          }
        }
      }
    }
    .productSummary {
      padding-top: 21.98upx;
      .textareaPadding {
        padding: 25.96upx 31.96upx 0;
      }
      .border-football {
        &:after {
          border-radius: 19.96upx;
        }
      }
      .textareaWrapper {
        padding: 3.98upx;
        textarea {
          /*padding: 24upx 30upx;*/
          height: 327.98upx;
          color: #444444;
          font-size: 27.98upx;
          line-height: 39.98upx;
          border: none;
          position: relative;
          z-index: 99;
        }
      }
    }
    .sureButton {
      width: 685.96upx;
      height: 87.98upx;
      margin: 49.96upx auto 0;
      color: #FFFFFF;
      font-size: 31.96upx;
      line-height: 87.98upx;
      text-align: center;
      background: #03AEF9;
      border-radius: 199.96upx;
      font-family:PingFangSC-Medium;
    }
  }
  .headPhotowrapper {
    margin-top: 9.98upx;
    .headImages {
      width: 117.98upx;
      height: 117.98upx;
      margin: 0 auto;
      position: relative;
      background: #E3E3E3;
      border-radius: 7.96upx;
      img {
        width: 100%;
        height: 100%;
        border-radius: 7.96upx;
      }
      .logoImg {
        position: absolute;
        top: 30upx;
        left: 50%;
        font-size: 55.96upx;
        color: #8B8B8B;
        transform: translateX(-50%);
      }
      .headPhotograph {
        width: 117.98upx;
        height: 117.98upx;
        border-radius: 7.96upx;
        position: absolute;
        top: 0;
        left: 0;
        background:rgba(0,0,0,.3);
        .icon {
          color: #FFFFFF;
          font-size: 42upx;
          position: absolute;
          top: 37.96upx;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
  #dropDownMenuWrapper.dropdownMenuBottom {
    top: auto !important;
    bottom: 0 !important;
    border-top-right-radius: 36upx;
    border-top-left-radius: 36upx;
    overflow: hidden;
  }
</style>
<style>
  .dianPingProductAdd .mui-scroll-wrapper {
    top: 0 !important;
  }
  .dianPingProductAdd .mui-popover {
    border-radius: 0;
  }
  .dianPingProductAdd .mui-popover .mui-scroll-wrapper {
    margin: 0;
    border-radius: 36upx 36upx 0 0 !important;
  }

  .dianPingProductAdd .dropDownMenuRoot .shareWrapper {
    border-top-right-radius: 36upx !important;
    border-top-left-radius: 36upx !important;
  }
  .dianPingProductAdd .container-select .listWrapper > .list:first-child {
   border-top-right-radius: 36upx;
   border-top-left-radius: 36upx;
   overflow: hidden;
  }
  .dianPingProductAdd .listWrapper {
    background: #FFF;
  }
</style>