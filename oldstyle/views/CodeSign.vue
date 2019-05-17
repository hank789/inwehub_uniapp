<style lang="less" rel="stylesheet/less" scoped>
  .registerPassword {
    padding: 0 73.96upx;
    display: flex;
    justify-content: space-between;
    span {
      &:nth-of-type(1) {
        color: #B4B4B6;
        font-size: 24upx;
        text-align: left;
      }
      &:nth-of-type(2) {
        color: #444444;
        font-size: 30upx;
      }
    }
  }
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
  .mui-content{
    background: #FFFFFF;
    min-height: 1135.96upx;
  }
  .login {
    position: absolute;
    width: 100%;
    min-height: 100%;
    background: #FFFFFF;
    background-size: cover;
  }
  /*协议*/
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

  /*登录*/
  .button, .mui-btn {
    border-radius: 9.98upx;
    width: 80%;
    margin-left: 10%;
    margin-top: 30upx;
    margin-bottom: 24upx;
  }

  button {
    border-radius: 9.98upx;
    &:disabled {
      background: #DCDCDC;
      border: 1.96upx solid #dcdcdc;
      color: #b4b4b6;
    }
  }

  /*邀请码*/
  .help {
    font-size: 27.98upx;
    color: #3c95f9;
    text-align: center;

  }

  /*小箭头*/

  .leftNav {

    position: absolute;
    left: 24upx;
    top: 30upx;
    font-size: 39.98upx;
    color: #808080;
  }

  /*图标*/
  .logo {
    font-size: 295.96upx;
    text-align: center;
    margin: 9.98upx 0;
    padding-top: 39.98upx;
    height: 295.96upx;
  }

  /*输入框的内容*/
  .inputWrapper {
    margin: 0 66upx 49.96upx;
    position: relative;
    width: 80%;
    margin-left: 10%;
    .icon {
      position: absolute;
      top: 9.98upx;
      font-size: 43.96upx;
      color: #c8c8c8;
      left: 0;
    }
  }

  .inputWrapper.focus {
    &:after {
      background-color: #3c95f9;
    }
    .icon {
      color: #3c95f9;
    }
  }

  /*验证码*/
  .inputWrapper .getYzm {
    display: inline-block;
    font-size: 27.98upx;
    color: #444444;
    position: absolute;
    right: 3.98upx;
    top: 9.0upx;
    height: 60upx;
    padding: 0 30upx;
    line-height: 60upx;
    border-radius: 9.98upx;
    border: 1.96upx solid #dcdcdc;
  }

  .inputWrapper .getYzm.disabled {
    border: 1.96upx solid #DCDCDC;
    color: #C8C8C8;
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

  /*手机号input输入框的调整*/
  .inputWrapper:nth-of-type(2) input {
    color: #444;
    border: none;
    margin: 0;
    font-size: 27.98upx;
    background: none;
    display: inline-block;
    height: 72upx;
    margin-left: 24upx;
    /*background: #ccc;*/
    width: 60%;
    margin-right: 40%;
  }

  .half:after {
    position: absolute;
    right: 36%;
    bottom: 6upx;
    left: 0;
    height: 1.96upx;
    content: '';
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    background-color: #dcdcdc;
  }

  /*2 3图标大小的微调*/
  .inputWrapper:nth-of-type(3) .icon {
    position: absolute;
    top: 6upx;
    font-size: 49.96upx;
    /*color: #c8c8c8;*/
    left: 0;
  }

  .inputWrapper:nth-of-type(4) .icon {
    position: absolute;
    top: 6upx;
    font-size: 49.96upx;
    /*color: #c8c8c8;*/
    left: 0;
  }

  .inputWrapper:nth-of-type(5) .icon {
    position: absolute;
    top: 9.98upx;
    font-size: 39.98upx;
    /*color: #c8c8c8;*/
    left: 0;
  }

</style>