<style lang="less" rel="stylesheet/less" scoped>
  .bot {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  .heat-wrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 999;
    padding-top: 39.98upx;
    background: #ffffff;
    border-top-left-radius: 36upx;
    border-top-right-radius: 36upx;
  }

  .heat-wrapper .heatTop {
    overflow: hidden;
    padding: 0 30upx 39.98upx;
  }

  .heat-wrapper .left {
    display: flex;
    float: left;
    margin-top: 27.98upx;
    margin-left: 30upx;
  }

  .heat-wrapper .left .fire {
    width: 43.96upx;
    height: 49.96upx;
    position: relative;
    top: 10.96upx;
    margin-right: 15.98upx;
  }

  .heat-wrapper .left .fire img {
    width: 100%;
    height: 100%;
  }

  .heat-wrapper .left .heat {
    width: 67.96upx;
    height: 72upx;
  }

  .heat-wrapper .left .heat img {
    width: 100%;
    height: 100%;
  }

  .heat-wrapper .right {
    float: right;
    display: flex;
  }

  .heat-wrapper .right .oneLine {
    width: 1.96upx;
    height: 87.98upx;
    background: #DCDCDC;
    margin-right: 30upx;
    position: relative;
    top: 19.96upx;
  }

  .heat-wrapper .right .iconList {
    margin: 0 30upx;
    position: relative;
  }

  .heat-wrapper .right .iconList.active .iconCircular {
    color: #FFFFFF;
    background: #03AEF9;
  }

  .heat-wrapper .right .iconList .addNumber {
    height: 27.98upx;
    line-height: 27.98upx;
    position: absolute;
    top: 6upx;
    right: -19.96upx;
    display: inline-block;
    padding: 0 9.98upx;
    background: #E5E5E5;
    border-radius: 199.96upx;
  }

  .heat-wrapper .right .iconList .addNumber span {
    color: #808080;
    font-size: 19.96upx;
    position: relative;
    top: -3.98upx;
  }

  .heat-wrapper .right .iconList .iconCircular {
    width: 87.98upx;
    height: 87.98upx;
    color: #808080;
    font-size: 31.96upx;
    text-align: center;
    line-height: 87.98upx;
    border-radius: 50%;
    display: inline-block;
    background: #F7F8FA;
  }

  .heat-wrapper .right .iconList .text {
    color: #808080;
    font-size: 21.98upx;
    text-align: center;
    margin-top: 9.98upx;
  }

  .heat-wrapper .right .iconList .text.active {
    color: #444444;
  }

  .heat-wrapper .right .iconList .text i {
    color: #FA4975;
    font-style: normal;
  }

  .heat-wrapper .cancelW {
    position: relative;
    text-align: center;
  }

  .heat-wrapper .cancelW .bot {
    top: 0 !important;
  }

  .heat-wrapper .cancelW span {
    color: #444444;
    font-family: PingFangSC-Medium;
    font-size: 31.96upx;
    text-align: center;
    line-height: 103.96upx;
  }

  .heat-wrapper .submit {
    width: 630upx;
    height: 87.98upx;
    margin: 0 auto 30upx;
    line-height: 87.98upx;
    text-align: center;
    border-radius: 87.98upx;
    background: #03AEF9;
  }

  .heat-wrapper .submit span {
    color: #FFFFFF;
    font-size: 31.96upx;
  }

  .deleteWrapper {
    position: relative;
    padding: 30upx 0 24.98upx;
  }

  .deleteWrapper .bot {
    top: 0;
  }

  .deleteWrapper .single {
    height: 139.96upx;
    display: inline-block;
    margin-left: 60upx;
  }

  .deleteWrapper .single .iconW {
    width: 87.98upx;
    height: 87.98upx;
    /*margin: 0 24upx;*/
    /*margin-left: 60upx;*/
    line-height: 97.96upx;
    text-align: center;
    display: inline-block;
    border-radius: 15.98upx;
    border: 1.96upx solid #DCDCDC;
    color: #C8C8C8;
  }

  .deleteWrapper .single .iconW .icon {
    font-size: 43.96upx;
  }

  .deleteWrapper .single .text {
    display: block;
    font-size: 24upx;
    color: #808080;
    line-height: 31.96upx;
    text-align: center;
    margin-top: 15.98upx;
  }

  .choiceWrapper {
    position: relative;
    padding: 24upx 60upx 30upx;
  }

  .choiceWrapper .bot {
    top: 0;
  }

  .choiceWrapper .title {
    font-size: 21.98upx;
    color: #B4B4B6;
    line-height: 30upx;
    margin-bottom: 3.98upx;
  }

  .choiceWrapper .choiceList {
  }

  .choiceWrapper .choiceList span {
    height: 54upx;
    padding: 0 19.96upx;
    line-height: 54upx;
    color: #444444;
    font-size: 24upx;
    display: inline-block;
    background: #F3F4F6;
    border-radius: 199.96upx;
    margin: 19.96upx 19.96upx 0upx 0;
  }

  .choiceWrapper .choiceList span.active {
    background: #03AEF9;
    color: #FFFFFF;
  }
</style>