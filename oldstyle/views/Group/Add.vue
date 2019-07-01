<style lang="less" scoped>
  .mui-content {
    background: #ffffff;
    padding-bottom: 30upx;
  }
  .foundGroupWrapper {
    position: relative;
    .foundGroupImages {
      height: 297.98upx;
      position: relative;
      border-bottom-left-radius: 39.98upx;
      border-bottom-right-radius: 39.98upx;
      background:linear-gradient(180deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.1) 100%);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-bottom-left-radius: 39.98upx;
        border-bottom-right-radius: 39.98upx;
      }
      .foundGroupIcon {
        font-size: 60upx;
        color: #ffffff;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 100;
        .icon {
        }
      }
    }
    .headPhotowrapper {
      position: absolute;
      bottom: -48upx;
      left: 33.98upx;
      z-index: 100;
      .headImages {
        width: 111.98upx;
        height: 111.98upx;
        text-align: center;
        background: #E3E3E3;
        border-radius: 7.96upx;
        border: 1.96upx solid #ffffff;
        img {
          width: 100%;
          height: 100%;
          border-radius: 6upx;
          object-fit: cover;
        }
        .logoImg {
          color: #8B8B8B;
          font-size: 60upx;
          margin-top: 21.98upx;
        }
        .headPhotograph {
          width: 108upx;
          height: 108upx;
          position: absolute;
          top: 1.96upx;
          left: 1.96upx;
          text-align: center;
          border-radius: 7.96upx;
          background:rgba(0,0,0,0.3);
          .icon {
            font-size: 36upx;
            color: #ffffff;
            margin-top: 37.96upx;
          }
        }
      }
    }
  }
  .groupNAme {
    margin-top: 79.96upx;
    /*background: #DCDCDC;*/
    .editName {
      padding: 0 31.96upx 21.98upx;
      color: #444444;
      font-size: 39.98upx;
    }
    input[type='text'] {
      margin-bottom: 0;
      border: none;
      color: #444444;
      font-size: 39.98upx;
      margin-top: -19.96upx;
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

  .groupDescribe {
    position: relative;
    padding: 21.98upx 31.96upx;
    .groupDescribeText {
      color: #808080;
      font-size: 27.98upx;
    }
    .form-ask {
      .textarea-wrapper {
        height: 327.98upx;
        background: #ffffff;
        margin-top: 25.96upx;
        border: 1.96upx solid #DCDCDC;
        border-radius: 9.98upx;
        textarea {
          background: #ffffff;
          font-size: 27.98upx;
          color: #444444;
          height: 261.98upx;
          border: none;
        }
      }
    }
    .counter {
      font-size: 27.98upx;
      color: #C8C8C8;
      line-height: 39.98upx;
      position: absolute;
      bottom: 33.98upx;
      right: 55.96upx;
    }
  }

  .fixedContainer {
    position: relative;
    background: #ffff;
    padding: 1.96upx 24upx;
    /*margin-top: 9.98upx;*/
    .edit {

    }
    .niming {
      color: #444444;
      position: relative;
      font-size: 27.98upx;
      padding-left: 18upx;
      margin-right: 45.0upx;
      &:nth-of-type(2) {
        margin-right: 0;
      }
      i {
        color: #808080;
        font-size: 27.98upx;
        font-style: normal;
      }
      input {
        position: absolute;
        top: 7.96upx;
        left: 0;
        vertical-align: bottom;
      }
    }
    .nimingCheckbox {
      display: inline-block;
      width: 31.96upx;
      height: 31.96upx;
      position: relative;
      border: 1.96upx solid #c8c8c8;
      border-radius: 50%;
      top: 6upx;
      right: 9.98upx;
      &.active {
        &:after {
          content: ' ';
          display: inline-block;
          width: 7.96upx;
          height: 7.96upx;
          position: absolute;
          border: 1.96upx solid #03aef9;
          background-color: #03aef9;
          border-radius: 50%;
          left: 50%;
          margin-left: -5.26upx;
          top: 50%;
          margin-top: -6upx;
        }
      }
    }
  }

  .goFoundGroup {
    width: 685.96upx;
    height: 87.98upx;
    border:none;
    color: #FFFFFF;
    font-size: 31.96upx;
    text-align: center;
    background: #03AEF9;
    line-height: 87.98upx;
    border-radius: 99.98upx;
    margin: 99.98upx auto 0;
  }
</style>