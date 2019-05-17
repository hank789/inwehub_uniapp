<style lang="less" rel="stylesheet/less" scoped>
  .mui-content{
    background: #FFFFFF;
  }
  .login {
    position: absolute;
    width: 100%;
    min-height: 100%;
    background: #FFFFFF;
    background-size: cover;
    /*text-align: center;*/
  }

  .logo {
    font-size: 295.96upx;
    text-align: center;
    margin: 9.98upx 0;
    padding-top: 39.98upx;
    height: 295.96upx;
  }

  /*小箭头*/
  .leftNav {

    position: absolute;
    left: 24upx;
    top: 30upx;
    font-size: 39.98upx;
    color: #808080;
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
    margin: 0 66upx 43.96upx;
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
    border: 1.96upx solid #3c95f9;
    color: #3c95f9;
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

  /*登录*/
  .button, .mui-btn {
    border-radius: 9.98upx;
    color: #f2f2f2;
    width: 80%;
    margin-left: 10%;
    margin-top: 60upx;
    background: #03AEF9;
  }

  /*2 3图标大小的微调*/
  .inputWrapper:nth-of-type(2) .icon {
    position: absolute;
    top: 9.98upx;
    font-size: 49.96upx;
    /*color: #c8c8c8;*/

    left: 0;
  }

  .inputWrapper:nth-of-type(3) .icon {
    position: absolute;
    top: 9.98upx;
    font-size: 42upx;
    /*color: #c8c8c8;*/
    left: 0;
  }

  /*手机号input输入框的调整*/
  .inputWrapper:nth-of-type(1) input {
    color: #444;
    border: none;
    margin: 0;
    font-size: 27.98upx;
    background: none;
    display: inline-block;
    height: 72upx;
    margin-left: 24upx;
    /*background: #ccc; */
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
</style>