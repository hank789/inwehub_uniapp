<style scoped="scoped">

  .backHome {
    width: 99.98upx;
    margin-top: 15.98upx;
    padding-left: 31.96upx;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .backHome .icon {
    color: #FFFFFF;
    font-size: 33.98upx;
    margin-left: 6upx;
  }
  .backHome .homeText {
    color: #FFFFFF;
    font-size: 19.96upx;
    line-height: 27.98upx;
    /*margin-top: 3.0upx;*/
  }
  .backHome .fenLine {
    width: 1.96upx;
    height: 57.98upx;
    background: #68CEFB;
    position: absolute;
    top: 7.96upx;
    right: 0;
  }

  /*手机端*/
  .suspend {
    width: 100%;
    height: 108upx;
    /* border-radius:7.96upx;*/
    background: #252525;
    position: fixed;
    /*opacity: 0.9;*/
    top: 0;
    z-index: 999;
  }

  .suspend p:nth-of-type(1) {
    float: left;
    margin-left: 45.98upx;
    width: 60upx;
    height: 93.98upx;
    margin-top: 13.96upx;

  }

  .suspend p:nth-of-type(1) svg {
    font-size: 36upx;
    color: #FFFFFF;
    margin-top: 24upx;
  }

  .suspend p:nth-of-type(2) {
    float: left;
    width: 79.96upx;
    height: 79.96upx;
    border-radius: 24upx;
    background: #F3F4F6;
    margin-top: 13.96upx;

    text-align: center;
  }

  .suspend p:nth-of-type(2) > svg {
    font-size: 67.96upx;
    margin-top: 12upx;
    color: #009fe8;
  }

  .suspend p:nth-of-type(3) {
    width: 192upx;
    height: 93.98upx;
    margin-top: 13.96upx;
    margin-left: 19.96upx;
    /* padding-top: 9.98upx;*/
    float: left;
  }

  .suspend p:nth-of-type(3) > span {
    display: block;
    color: #FFFFFF;
    font-size: 24upx;
  }

  .suspend p:nth-of-type(3) > span:nth-of-type(1) {
    font-size: 31.96upx
  }

  .suspend p:nth-of-type(3) > span:nth-of-type(2) {
    margin-top: 0.98upx;
  }

  .suspend a {
    float: right;
    width: 151.96upx;
    height: 60upx;
    border-radius: 7.96upx;
    background: #3c95f9;
    text-align: center;
    line-height: 60upx;
    color: #FFFFFF;
    margin-top: 24upx;
    margin-right: 21.0upx;
  }

  /*微信端*/
  /*.mui-wechat .suspension.backgroundGrey {*/
  /*background: #F3F4F6;*/
  /*box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
  /*}*/
  /*.openAppH5 .suspension.backgroundGrey {*/
  /*background: #F3F4F6;*/
  /*box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
  /*}*/
  /*.suspension.backgroundGrey {*/
  /*background: #F3F4F6;*/
  /*box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
  /*}*/
  .mui-wechat .suspension {
    width: 100%;
    height: 97.96upx;
    position: fixed;
    /*opacity: 0.9;*/
    top: 0upx;
    z-index: 997;
    /*box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
    /*-webkit-box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
    /*-moz-box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
  }

  .openAppH5 .suspension {
    width: 100%;
    height: 97.96upx;
    position: fixed;
    /*opacity: 0.9;*/
    top: 0upx;
    background: #03AEF9;
    z-index: 997;
    /*box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
    /*-webkit-box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
    /*-moz-box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
  }

  .suspension {
    width: 100%;
    height: 97.96upx;
    position: absolute;
    top: 87.98upx;
    background: #03AEF9;
    z-index: 997;
    /*box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
    /*-webkit-box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
    /*-moz-box-shadow:0upx 3.98upx 51.98upx 0upx #F0F2F5;*/
  }

  .component-wechat-top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 97.96upx;
  }

  .component-wechat-top .left {
    width: 544.96upx;
    position: relative;
    /*left: 117.98upx;*/
  }

  .component-wechat-top .left .userImg {
    position: absolute;
    left: 7.50upx;
    top: 15.98upx;
    width: 66upx;
    height: 66upx;
  }

  .component-wechat-top .left .userImg img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .component-wechat-top .left .userName {
    width: 100%;
    position: absolute;
    top: 15.98upx;
    left: 97.50upx;
    color: #FFFFFF;
    font-size: 25.96upx;
  }

  .component-wechat-top .left .iconBorder {
    width: 67.96upx;
    height: 67.96upx;
    position: absolute;
    top: 15.0upx;
    /*left: 117.98upx;*/
    background: #ffffff;
    border-radius: 15.0upx;
  }

  .component-wechat-top .left .iconBorder .icon {
    position: relative;
    left: 1.96upx;
    top: 1.96upx;
    font-size: 64.96upx;
  }

  .component-wechat-top .left .textLogo {
    position: absolute;
    left: 84.76upx;
    top: -48.76upx;
    font-size: 163.96upx;
    color: #FFFFFF;
  }

  .component-wechat-top .left .desc {
    color: #FFFFFF;
    font-size: 19.96upx;
    position: absolute;
    top: 49.96upx;
    left: 84.76upx;
  }

  .component-wechat-top .left .desc.userSlogen {
    left: 97.50upx;
  }

  .openAppTop {
    background: #03AEF9;
  }

  #OpenAppSlider.homeMuiSlider {
    width: 66%;
    left: 120upx;
  }

  .openAppTop .right {
    height: 97.96upx;
    width: 21%;
    line-height: 97.96upx;
    padding-right: 31.96upx;
    color: #03AEF9;
    font-size: 27.98upx;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
  }

  .openAppTop .right .downloadApp {
    width: 100%;
    height: 57.98upx;
    text-align: center;
    line-height: 57.98upx;
    color: #03AEF9;
    font-size: 25.96upx;
    background: #FFFFFF;
    border-radius: 7.96upx;
    display: inline-block;
    font-family: PingFangSC-Medium;
  }

  .openAppTop .right a {
    color: #03AEF9;
  }

  .openAppTop .right .line-wall {
    margin: 0 19.96upx;
    position: relative;
    width: 1.96upx;
    top: 1.96upx;
    height: 25.96upx;
  }

  .line-wall {
    display: inline-block;
    position: relative;
    width: 1.96upx;
    height: 19.96upx;
    background-color: #dcdcdc;
  }

  .mui-slider .mui-slider-group .mui-slider-item {
    height: 97.96upx !important;
  }

  .mui-slider {
    background: #03AEF9;
  }
</style>