<style scoped="scoped">
  /*支付方式样式*/
  .pay-choice{
    margin:0;
    text-align: left;
    font-size: 31.96upx;
    color: #9b9b9b;
    padding-left: 9.98upx;
  }
  .pay-swallet{
    margin:0;
    text-align: left;
    font-size: 27.98upx;
    color: #808080;
    margin-top: 24upx;
    padding-left: 9.98upx;
  }
  .pay-swallet p{
    width:31.96upx;
    height:31.96upx;
    border-radius: 18upx;
    border:1.96upx solid #c8c8c8;
    float: left;
    margin-top: 2.56upx;
    margin-right: 12upx;
    position: relative;
  }
  .pay-swallet p i{
    width:12upx;
    height:12upx;
    border-radius: 18upx;
    background:#03aef9;
    display: block;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin:auto;
  }
  .pay-ios{
    margin:0;
    font-size: 27.98upx;
    margin-top: 37.96upx;
    width:333.98upx;
    height:87.98upx;
    border:1.96upx solid #c8c7cc;
    border-radius: 7.96upx;
    text-align: center;
    line-height: 87.98upx;
    margin-left: 9.98upx;
  }
  .pay-ios.active{
    color: #03aef9;
    border:1.96upx solid #03aef9;
  }
  .pay-ios svg{
    color: #808080;
    font-size: 33.98upx;
    margin-bottom: 1.96upx;
    margin-right: -6upx;
    padding-left: 9.98upx;
  }
  .pay-weChat{
    margin:0;
    font-size: 27.98upx;
    margin-top: 37.96upx;
    width:333.98upx;
    height:87.98upx;
    border:1.96upx solid #c8c7cc;
    border-radius: 7.96upx;
    text-align: center;
    line-height: 87.98upx;
    margin-left: 9.98upx;
  }
  .pay-weChat.active{
    color: #03aef9;
    border:1.96upx solid #03aef9;
  }

  .pay-weChat svg{
    color: #808080;
    font-size: 39.98upx;
    margin-bottom: -1.96upx;
    margin-right: -3.98upx;
  }

  .selectMoney .title {
    padding: 43.96upx 0;
    margin: 0 15.98upx;
    text-align: center;
    position: relative;
  }

  .selectMoney .title:after {
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

  .selectMoney .mui-table-view-cell {
    padding: 19.96upx 0;
  }

  .selectMoney .mui-pull-right {
    float: right !important;
    padding-right: 69.98upx;

    color: rgba(74, 144, 226, 100) !important;
    text-align: right;
  }

  .selectMoney .mui-icon {
    color: rgba(138, 138, 138, 100);
    opacity: 0.67;
    font-size: 48upx;
  }

  .selectMoney .apple-icon {
    padding: 15.98upx 69.98upx 0 0;
  }

  .selectMoney {
    background: #fff;
  }



  .selectMoney .category span.active, .form-ask .select span.active {
    border: 1.96upx solid #4990E2;
    color: #4990E2;
  }

  .selectMoney .category span {
    border: 1.96upx solid #b6b6b6;
    border-radius: 9.98upx;
    width: 30%;
    display: inline-block;
    height: 63.98upx;
    margin: 0 6upx 19.96upx;
    text-align: center;
    line-height: 63.98upx;
    position: relative;
  }

  .selectMoney .help {
    margin: 60upx 0;
  }

  .form-ask .select span {
    border: 1.96upx solid #b6b6b6;
    border-radius: 9.98upx;
    padding: 0 19.96upx;
    display: inline-block;
    height: 63.98upx;
    margin-right: 12upx;
    margin-bottom: 19.96upx;
    text-align: center;
    line-height: 63.98upx;
    position: relative;
  }

  .selectMoney .category span input {
    display: inline-block;
    position: relative;
    border: none;
    height: 90%;
    margin-top: -7.96upx;
    width: 90%;
    text-align: center;
  }

  .selectMoney {
    text-align: center;
    padding: 0 30upx 30upx 30upx;
  }

  .selectMoney .payDesc {
    position: relative;
    font-size: 27.98upx;
  }

  .selectMoney .payDesc {
    font-size: 27.98upx;
    height: 79.96upx;
    line-height: 79.96upx;
    color: #999;
  }

  .selectMoney .button-wrapper {
    margin: 39.98upx 0 19.96upx;
    padding: 0 60upx;
  }

  .selectMoney .payDesc .dash {
    position: relative;
    top: -7.96upx;
    margin: 0 9.98upx;
    display: inline-block;
    border-top: 1.96upx solid #999;
    width: 90upx;
  }

  .selectMoney .payDesc .mui-icon {
    margin-right: 9.98upx;
  }


  .mui-popover .mui-table-view {
    background: none !important;
    margin-top: 0 !important;
    border-radius: 0 !important;
    color: rgba(155, 155, 155, 100) !important;
  }

  #expert.mui-popover .mui-table-view {
    background: #fff !important;
    border-radius: 9.98upx !important;
    color: #4990E2 !important;
  }

  #expert.mui-popover .mui-table-view-cell {
    padding: 25.96upx 30upx;
  }


  .mui-popover .mui-table-view .mui-table-view-cell:last-child, .mui-popover .mui-table-view .mui-table-view-cell:last-child > a:not(.mui-btn) {
    border-radius: 0 !important;
  }

  .mui-table-view-cell:after {
    left: 0 !important;
  }

  .mui-input-row label {
    padding-left: 9.98upx;
    text-align: left;
  }

  .noRightArrow:after{
    display: none;
  }
</style>