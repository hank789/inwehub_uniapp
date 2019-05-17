<style scoped>
  /*.mui-wechat .menu[data-v-4f45c199] {*/
    /*width: 100%;*/
    /*height: 90upx;*/
    /*position: absolute;*/
    /*z-index: 10;*/
    /*background: #f3f4f6;*/
    /*top: 0;*/
  /*}*/

  /*导航栏的样式*/

  /*.menu {*/
    /*width: 100%;*/
    /*height: 90upx;*/
    /*position: absolute;*/
    /*z-index: 10;*/
    /*background: #f3f4f6;*/
  /*}*/

  /*.menu span {*/
    /*display: inline-block;*/
    /*width: 49%;*/
    /*height: 100%;*/
    /*font-size: 27.98upx;*/
    /*color: #444444;*/
    /*text-align: center;*/
    /*line-height: 90upx;*/
    /*font-weight: 600;*/
  /*}*/

  /*.menu span:nth-of-type(1) {*/
    /*color: #3c95f9;*/
  /*}*/

  /*.menu i {*/
    /*display: block;*/
    /*position: absolute;*/
    /*width: 60upx;*/
    /*height: 3.6upx;*/
    /*left: 20.55%;*/
    /*bottom: 0.98upx;*/
    /*background: #3c95f9;*/
  /*}*/

  .bot {
    position: absolute;
    right: 31.96upx;
    bottom: 0;
    left: 31.96upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  /*清掉自带样式*/

  div,
  p,
  span,
  i,
  img,
  ul,
  li,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
  }

  /*滚动区域*/

  .mui-content .menu ~ #pullrefresh {
    top:90upx;
    bottom: 81.98upx;
  }

  .mui-content {
    background: #FFFFFF;
  }

  /*主体部分样式*/

  ul li {
    position: relative;
    padding: 19.96upx 31.96upx 0upx 31.96upx;
    overflow: hidden;
  }

  ul li img {
    width: 11%;
    height: 11%;
    border-radius: 25%;
    float: left;
  }

  ul li svg {
    width: 11%;
    /*height: 11%;*/
    /*border-radius: 25%;*/
    /*background: #CCCCCC;*/
    float: left;
    color: #03aef9;
    font-size: 84upx;
  }

  ul li p {
    margin-left: 3%;
    width: 86%;
    float: left;
  }

  ul li p span {
    display: block;
    margin-bottom: 12upx;
    width: 100%;
  }

  ul li p span:nth-of-type(1) {
    /*background: #CCCCCC;*/
    overflow: hidden;
  }

  ul li p span:nth-of-type(1) a {
    display: block;
    float: left;
    font-size: 31.96upx;
    color: #444444;
  }

  ul li p span:nth-of-type(1) a:nth-of-type(1) {

    padding-right: 9.98upx;
  }

  ul li p span:nth-of-type(1) a.level {
    font-size: 24upx;
    padding: 7.96upx 9.98upx;
    color: #FFFFFF;
    margin-left: 15.98upx;
  }

  ul li p span:nth-of-type(2) {
    font-size: 27.98upx;
    color: #808080;
  }

  ul li p span:nth-of-type(3) {
    font-size: 24upx;
    color: #b4b4b6;
  }

  ul li p span:nth-of-type(3) div {
    display: inline-block;
  }

  .message {
    width: 13.96upx;
    height: 13.96upx;
    background: #f03c69;
    border-radius: 50%;
    position: absolute;
    left: 14.5%;
    top: 8%;
  }

  /*无数据的样式 */

  .container {
    position: absolute;
    top: 40%;
    left: 36%;
  }

  .container svg {
    font-size: 120upx;
    margin-left: 45.98upx;
    margin-bottom: 15.98upx;
  }

  .container p {
    font-size: 24upx;
    color: #c8c8c8;
  }

  .list-empty {
    top: 177.98upx !important;
  }

  .list-empty .list-ask-item {
    padding: 19.96upx 0;
  }

  .list-empty .list-ask-item:after{
    display: none;
  }

  .menu_message {
    position: absolute;
    left: 79%;
    top: 15.98upx;
    background: #f03c69;
    font-size: 21.98upx;
    text-align: center;
    color: #fff;
    padding: 0upx 6upx;
    min-width: 30upx;
    min-height: 30upx;
    border-radius: 30upx;
    line-height: 30upx;
  }
  .listWrapper{
  }
</style>