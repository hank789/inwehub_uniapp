<style lang="less" rel="stylesheet/less" scoped>
  .logo {
    margin: 84upx 0 75.98upx;
    text-align: center;
  }

  .logo .icon {
    font-size: 249.98upx;
  }

  .inputWrapper .icon {
    position: absolute;
    top: 7.96upx;
    font-size: 48upx;
    color: #c8c8c8;
  }

  .inputWrapper {
    margin: 0 66upx 43.96upx;
    position: relative;
    top: 289.96upx;

  }

  .inputWrapper.focus {

    &:after {
      background-color: #3c95f9;
    }

    .icon {
      color: #3c95f9;
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
    padding: 0 0 0 72upx;
    font-size: 27.98upx;
    background: none;
    display: inline-block;
  }

  .register {
    background: #ffffff;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .buttonWrapper {
    margin: 79.96upx 72upx 31.96upx;
  }

  ::-webkit-input-placeholder {
    color: #b4b4b6;
  }

  .buttonWrapper button {
    border-radius: 9.98upx;
    top:270upx;

    &:disabled {
      background: #dcdcdc;
      border: 1.96upx solid #dcdcdc;
      color: #b4b4b6;

    }
  }

  .help {
    font-size: 27.98upx;
    color: #3c95f9;
    text-align: center;
  }
/*register_logo*/
  .register_logo{
    width:100%;
    height:240upx;
    background: #f3f4f6;
    position: absolute;
    top:0;
    padding-left: 75.98upx;
  }
  .register_logo svg{
    font-size: 279.98upx;
    position: absolute;
    top: -67.96upx;
  }
  .register_logo p{
    margin:0;
    padding:0;
    font-size: 27.98upx;
    color: #444444;
  }
  .register_logo p:nth-of-type(1){
     font-weight: 600;
     margin-top: 117.98upx;
  }

</style>