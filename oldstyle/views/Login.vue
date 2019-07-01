<style lang="less" rel="stylesheet/less" scoped>
  .weChat {
    position: absolute;
    bottom: 111.98upx;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    .weChatIcon {
      width: 79.96upx;
      height: 79.96upx;
      margin: 0 auto;
      color: #FFFFFF;
      font-size: 49.96upx;
      line-height: 79.96upx;
      border-radius: 50%;
      background: linear-gradient(155deg,#7ADF75 0%,#51C944 100%);
    }
    span {
      color: #B4B4B6;
      font-size: 21.98upx;
      margin-top: 12upx;
    }
  }
  .protocol {
    position: absolute;
    bottom: 39.98upx;
    left: 50%;
    transform: translateX(-50%);
    color: #808080;
    text-align: center;
    font-size: 24upx;
    span {
      color: #3C95F9;
    }
  }
  .login {
    position: absolute;
    width: 100%;
    min-height: 100%;
    background: #FFFFFF;
    background-size: cover;
    /*text-align: center;*/
  }

  /*图标*/
  .logo {
    font-size: 295.96upx;
    text-align: center;
    margin: 9.98upx 0;
    padding-top: 39.98upx;
    height: 295.96upx;
  }

  /*忘记密码和账号*/
  .apply {
    padding: 0 73.96upx;
    display: flex;
    line-height: 43.96upx;
    margin-top: 24upx;
    justify-content: space-between;
    span {
      &:nth-of-type(1) {
        color: #03AEF9;
        font-size: 24upx;
      }
      &:nth-of-type(2) {
        color: #444444;
        font-size: 30upx;
      }
    }
  }
  /*登录*/
  .button, .mui-btn {
    color: #FFFFFF;
    width: 80%;
    margin-left: 10%;
    margin-top: 9.98upx;
    background: #03AEF9;
    border-radius: 9.98upx;
  }
  .mui-btn-block {
    margin-bottom: 0;
  }

  /*输入框的内容*/
  .inputWrapper .icon {
    position: absolute;
    top: 9.98upx;
    font-size: 43.96upx;
    color: #c8c8c8;
    left: 0;

  }

  .inputWrapper {
    margin: 0 66upx 49.96upx;
    position: relative;
    width: 80%;
    margin-left: 10%;

  }

  .inputWrapper.focus {

    /*&:after {
      background-color: #3c95f9;
    }*/

    .icon {
      color: #808080;
    }
  }

  .inputWrapper .getYzm {
    display: inline-block;
    font-size: 27.98upx;
    color: #3c95f9;
    position: absolute;
    right: 3.98upx;
    top: 12upx;
    border: 1.96upx solid #3c95f9;
    border-radius: 9.98upx;
    padding: 6upx 27.98upx;
  }

  .inputWrapper .getYzm.disabled {
    border: 1.96upx solid #dcdcdc;
    color: #c8c8c8;
  }

  .inputWrapper:after {
    position: absolute;
    right: 0;
    bottom: 6upx;
    left: 0;
    height: 1.96upx;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  .inputWrapper input {
    color: #444;
    border: none;
    margin: 0;
    /*padding: 0 0 0 72upx;*/
    font-size: 27.98upx;
    background: none;
    display: inline-block;
    height: 72upx;
    margin-left: 30upx;
  }

  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #b4b4b6;
  }

  input:-moz-placeholder, textarea:-moz-placeholder {
    color: #b4b4b6;
  }

  input::-moz-placeholder, textarea::-moz-placeholder {
    color: #b4b4b6;
  }

  input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    color: #b4b4b6;
  }

  .inputWrapper:nth-of-type(2) .icon {
    position: absolute;
    top: 9.98upx;
    font-size: 39.98upx;
    /*color: #c8c8c8;*/
    left: 0;
  }

  .wechatWrapper {
    position: absolute;
    bottom: 63.98upx;
    left: 50%;
    margin-left: -114upx;
    font-size: 27.98upx;
    color: #808080;
  }

  .myicon {
    display: inline-block;
    width: 51.98upx;
    height: 42upx;
    position: relative;
    top: 13.96upx;
  }

  .mui-content {
    background-color: #FFFFFF;
    min-height: 1135.96upx;
  }
</style>