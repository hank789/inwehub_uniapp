<style scoped>
  .component-photograph{
    width:121.96upx !important;
    height:121.96upx !important;
  }

  /*导航栏*/
  .askWrapper .category {
    background: #fff;
    /*padding: 30upx 33.98upx;*/
    height:87.98upx;
    position: relative;
    padding-left: 4%;
  }
  .askWrapper .category  p{
    display: inline-block;
    line-height: 90upx;
    font-size:31.96upx;
    color: #444444;
    text-align: left;
  }
  .askWrapper .category  p:nth-of-type(2){
    display: inline-block;
    margin-left: 60upx;
    color: #444444;
    font-weight: 500;
    position: relative;
  }
  .askWrapper .category p:nth-of-type(2):after {
    position: absolute;
    width:127.96upx;
    bottom: 0;
    left: 0;
    height: 3.98upx;
    z-index: 999;
    content: '';
    background-color: #009FE8;
  }

  .askWrapper .category button {
    position: absolute;
    border: 1.96upx solid #03aef9;
    background-color: #03aef9;
    width: auto;
    font-size: 27.98upx;
    padding: 0upx 33.98upx;
    height: 67.96upx;
    right: 19.96upx;
    top: 6.76upx;
  }

  .mui-content > .mui-table-view:first-child {
    margin-top: 0;
  }

  .mui-content {
    background-color: #fff;
  }

  .mui-ios .mui-content{
    overflow: hidden !important;
  }


  .mui-bar-nav ~ .mui-content {
    padding-top: 0;
  }

  .form-ask {
    padding-top: 0;
    background: #fff;
    height: 403.96upx;
    width: 100%;
    z-index: 0;
  }

  .form-ask textarea {
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 19.96upx 33.98upx;
    color: #9b9b9b;
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

  .form-ask .button-wrapper {
    margin-top: 30upx;
    padding: 0 159.98upx
  }

  .textarea-wrapper {
    height: 100%;
    background: #f3f4f6;
  }

  .textarea-wrapper textarea {
    background: #f3f4f6;
  }

  .mui-bar .mui-btn-link {
    color: #fff;
  }

  .mui-bar .mui-btn-nav.mui-pull-left {
    margin-left: 9.98upx;
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

  .fixedContainer {
    position: relative;
    background: #f3f4f6;
    padding: 9.98upx 19.96upx;
  }

  .fixedContainer .counter {
    float: right;
    color: #c8c8c8;
  }

  .fixedContainer .niming {
    color: #808080;
    position: relative;
    font-size: 27.98upx;
    padding-left: 18upx;
  }

  .fixedContainer .niming input {
    position: absolute;
    top: 7.96upx;
    left: 0;
    vertical-align: bottom;
  }

  .fixedDiv .title {
    margin: 19.96upx 0;
    text-align: center;
    color: #8b8b8b;
    height: 63.98upx;
  }

  .fixedDiv {
    padding-bottom: 19.96upx;
    background-color: #fff;
    width: 100%;
  }

  .fixedDiv .select span {
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

  .fixedDiv .select span.active {
    border: 1.96upx solid #4a90e2;
  }

  .fixedDiv .button-wrapper {
    margin-top: 30upx;
    padding: 0 30upx;
  }

  .fixedDiv .button-wrapper button {
    background: #03aef9;
    color: #f2f2f2;
    border-radius: 9.98upx;
    border: 1.96upx solid #03aef9;
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

  .help {
    color: #03aef9;
    font-size: 27.98upx;
    padding: 0 30upx;

  }

  .help .item {
    padding: 19.96upx 0 0;
  }

  .help .button-wrapper {
    margin-top: 91.96upx;
    padding: 0 150upx;
  }

  .help .button-wrapper button {
    border-radius: 99.98upx;
    border: 1.96upx solid #dcdcdc;
    background: #fff;
    color: #444;
    padding: 9.98upx 0;
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
  }

  .nimingCheckbox.active:after {
    content: ' ';
    display: inline-block;
    width: 7.96upx;
    height: 7.96upx;
    position: absolute;
    border: 1.96upx solid #03aef9;
    background-color: #03aef9;
    border-radius: 50%;
    left: 50%;
    margin-left: -6upx;
    top: 50%;
    margin-top: -6upx;
  }

  @media screen and (max-width: 374px) {
    .form-ask {
      height: 439.96upx;
    }
  }
  .container-images{
    background: #F3F4F5;
  }
  /*标签样式*/
  .ask_tags{
    width:100%;
    background: #f3f4f6;
    overflow: hidden;
    padding: 0  31.96upx 0upx 13.96upx;
  }
  .ask_tags p{
    margin: 0;
    padding: 0;
    float: left;
    background: #a8dff7;
    color:#FFFFFF;
    padding: 0upx 15.98upx;
    border-radius:99.98upx;
    margin-top: 18upx;
    margin-left: 18upx;
    font-size:24upx;
  }
</style>