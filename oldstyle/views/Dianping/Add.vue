<style lang="less" rel="stylesheet/less" scoped>
  .mui-content{
    background:#fff;
    bottom:88upx;
  }

  .container-bottom-menus{
    position: absolute;
    /*padding-left: 15.0upx;*/
    background: #fff;
    left:0;
  }
  .container-bottom-menus span{
    display: block;
    float: left;
    /*padding: 0 15.0upx;*/
    font-size: 37.96upx;
    color: grey;
  }
  .container-bottom-menus .productName {
    max-width: 180upx;
    float: right;
    padding-right: 31.96upx;
    font-size: 25.96upx;
    color: #3C3E44;
    font-family:PingFangSC-Medium;
  }

  .component-photograph{
    width:121.96upx !important;
    height:121.96upx !important;
  }
  .disable{
    .icon{
      color:#DCDCDC;
    }
  }

  .component-textareaWithImage{
    position: absolute;
    left:0;
    right:0;
    bottom: 105.98upx !important;
    margin-bottom:0 !important;
  }
  .component-mark {
    padding: 15.98upx 31.96upx 19.96upx;
    span {
      color: #B4B4B6;
      font-size: 24upx;
      line-height: 33.0upx;
    }
    .stars {
      position: relative;
      color: #FCC816;
      font-size: 45.98upx;
      /*margin-top: 15.98upx;*/
      margin-bottom: 30upx;
      .ratingNumber {
        position: absolute;
        right: 0;
        bottom: 3.98upx;
        font-size: 36upx;
      }
    }
  }
  .component-box {
    margin: 0 0 0 31.96upx;
  }

  .container-camera {
    padding-top: 9.98upx;
    display: inline-block;
  }
  .camera {
    width: 121.96upx;
    height: 121.96upx;
    position: relative;
    top: -9.98upx;
    background: #DCDCDC;
    border-radius: 7.96upx;
    margin-top: 19.96upx;
    .icon {
      font-size: 55.96upx;
      color: #FFFFFF;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .container-identity {
    padding-bottom:19.96upx;
    .line-river-after {
      &:after {
        left: 31.96upx;
        right: 31.96upx;
      }
    }
    .identityTitle {
      padding: 24upx 31.96upx 21.98upx;
      line-height: 42upx;
      display: flex;
      justify-content: space-between;
      span {
        color: #444444;
        font-size: 30upx;
      }
      .icon {
        color: #808080;
        margin-top: 6upx;
      }
    }
    .assessDomain {
      color: #B4B4B6;
      font-size: 24upx;
      padding: 24.98upx 31.96upx 12upx;
      line-height: 33.0upx;
    }
    .domainList {
      padding: 0 31.96upx;
      .border-football {
        &:after {
          border-color: #DCDCDC;
        }
      }
      span {
        color: #B4B4B6;
        font-size: 24upx;
        line-height: 33.0upx;
        padding: 9.98upx 21.98upx;
        margin-right: 19.96upx;
        margin-top: 12.98upx;
        display: inline-block;
        border-radius: 199.96upx;
        &.active {
          color: #444444;
          background: #F3F4F6;
          &.border-football {
            &:after {
              border-color: #F3F4F6 !important;
            }
          }
        }
      }
    }
  }
  .fixedContainer {
    position: relative;
    background: #ffff;
    padding: 1.96upx 24upx;
    margin-top: 33.0upx;
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
</style>
<style>
  .addDianPing .container-editor.container-editor-add .textarea-wrapper {
    border: none;
    margin: 0;
    padding-bottom:0 !important;
  }
  .addDianPing .ql-editor {
    padding-top: 0 !important;
  }
  .addDianPing .quill-editor {
    min-height: 150upx !important;
    height:auto !important;
  }
  .addDianPing .ql-container {
    min-height: 150upx !important;
    height:auto !important;
  }

  .addDianPing .component-photograph {
    float: left;
    margin-bottom: 19.96upx;
  }
  .addDianPing .container-images .container-image:nth-of-type(3n) {
    margin-right: 20upx;
  }

  .addDianPing .star-rating {
    height: 55.96upx;
    padding-top: 19.96upx;
  }
  .addDianPing .star-rating .rating-text {
    margin-top: -33.98upx !important;
  }
</style>