<style scoped="scoped">
  ul,li,div,p,span,i,a,button{
    margin:0;
    padding: 0;
  }
  .bot{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.96upx;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
  }
  .Withdrawals{
    display: none;
    width:100%;
    height:429.98upx;
    background: #FFFFFF;
    border: 1.96upx solid #cccccc;
    position: absolute;
    z-index:999;
    bottom:0;
  }
  .Withdrawals-title{
    width:100%;
    height:87.98upx;
    line-height: 87.98upx;
    position: relative;
  }
  .Withdrawals-title p:nth-of-type(1){
    position: absolute;
    font-size:31.96upx;
    color: #808080;
    padding: 0 21.98upx;
  }
  .Withdrawals-title p:nth-of-type(2){
    font-size:27.98upx;
    color: #808080;
    text-align: center;
  }

  button{
    width:91%;
    height:87.98upx;
    border:none;
    background:#dcdcdc;
    font-size:31.96upx;
    color: #b4b4b6;
    position: absolute;
    left: 4.5%;
    bottom: 39.98upx;
  }

  .forget-password{
    padding: 0 10%;
    text-align: right;
    font-size:24upx;
    color: #235280;
    padding-top: 25.96upx;
  }
  .forget-password .error{
    font-size:24upx;
    color: #fa4975;
    float: left;
  }



  .inputWrapper {
    margin: 0 66upx 43.96upx;
    position: relative;
    width: 80%;
    margin-left: 10%;
    top: 60upx;
    border-bottom:1.96upx solid #dcdcdc;
  }
  /*.inputWrapper:after {*/
    /*position: absolute;*/
    /*right: 0;*/
    /*bottom: 6upx;*/
    /*left: 0;*/
    /*height: 1.96upx;*/
    /*content: '';*/
    /*-webkit-transform: scaleY(0.5);*/
    /*transform: scaleY(0.5);*/
    /*background-color: #dcdcdc;*/
  /*}*/

  .inputWrapper .icon {
    position: absolute;
    top: 12upx;
    font-size: 39.98upx;
    color: #c8c8c8;
    left: 0;
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
    margin-bottom: -9.98upx;
  }

  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    font-size: 27.98upx;
    color: #b4b4b6;
  }

  input:-moz-placeholder, textarea:-moz-placeholder {
    font-size: 27.98upx;
    color: #b4b4b6;
  }

  input::-moz-placeholder, textarea::-moz-placeholder {
    font-size: 27.98upx;
    color: #b4b4b6;
  }

  input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    font-size: 27.98upx;
    color: #b4b4b6;
  }
  /*颜色class*/
  .inputWrapper .svg-gray{
    color: #808080;
  }
  .button-blue{
    background: #03aef9;
    color: #FFFFFF;
  }
  .inputWrapper.input-blue{
    border-color: #03aef9;;
  }

  #Withdrawals{
    background: #fff;
    position: absolute;
    z-index:999;
    display: none;
  }
</style>