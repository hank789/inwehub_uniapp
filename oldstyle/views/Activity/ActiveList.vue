<style scoped>
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

  .bot {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  .mui-wechat .menu[data-v-4f45c199] {
    width: 100%;
    height: 90upx;
    position: absolute;
    z-index: 10;
    background: #f3f4f6;
    top: 0;
  }

  .mui-content.absolute .menu ~ #pullrefresh {
    top: 90upx;
  }

  .mui-content.absolute {
    background: #FEFFFE;
  }

  /*导航栏的样式*/

  .menu {
    width: 100%;
    height: 90upx;
    position: absolute;
    z-index: 10;
    background: #f3f4f6;
  }

  .menu span {
    display: inline-block;
    width: 49%;
    height: 100%;
    font-size: 27.98upx;
    color: #444444;
    text-align: center;
    line-height: 90upx;
    font-weight: 600;
  }

  .menu span:nth-of-type(1) {
    color: #3c95f9;
  }

  .menu i {
    display: block;
    position: absolute;
    width: 60upx;
    height: 3.6upx;
    left: 20.5%;
    bottom: 0.98upx;
    background: #03aef9;
  }

  /*滚动区域*/
  ul {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding-bottom: 39.98upx;

  }

  /*ul li{
        width: 92%;
        height: 453.98upx;
        position: relative;
        left: 0;
        right: 0;
        margin: auto;

    }
    ul li img{
        width: 100%;
        height: 285.98upx;
        margin-top: 30upx;
    }*/
  ul li p:nth-of-type(1) {
    font-size: 27.98upx;
    color: #444444;
    margin-top: 9.98upx;
  }

  ul li p:nth-of-type(2) {
    width: 100%;
    height: 37.96upx;
    margin-top: 7.96upx;
  }

  ul li p:nth-of-type(2) span:nth-child(1) {
    display: block;
    color: #b4b4b6;
    font-size: 24upx;
    line-height: 37.96upx;
    float: left;

  }

  ul li p:nth-of-type(2) span.blue {
    display: block;
    width: 150upx;
    height: 37.96upx;
    float: right;
    background: #03aef9;
    color: #FFFFFF;
    font-size: 27.98upx;
    text-align: center;
    line-height: 37.96upx;
    border-radius: 99.98upx;
    padding: 0 15.98upx;
  }

  ul li p:nth-of-type(2) span.yellow {
    display: block;
    width: 150upx;
    height: 37.96upx;
    float: right;
    background: #fcc816;
    color: #FFFFFF;
    font-size: 27.98upx;
    text-align: center;
    line-height: 37.96upx;
    border-radius: 99.98upx;
    padding: 0 15.98upx;
  }

  ul li p:nth-of-type(2) span.gray {
    display: block;
    width: 150upx;
    height: 37.96upx;
    float: right;
    background: #b4b4b6;
    color: #FFFFFF;
    font-size: 27.98upx;
    text-align: center;
    line-height: 37.96upx;
    border-radius: 99.98upx;
    padding: 0 15.98upx;
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

  /***媒体查询*****/

  @media screen and (min-width: 320px) {
    ul li {
      width: 92%;
      height: 433.96upx;
      position: relative;
      left: 0;
      right: 0;
      margin: auto;
    }

    ul li img {
      width: 100%;
      height: 265.96upx;
      margin-top: 30upx;
      border-radius: 7.96upx;
    }
  }

  @media screen and (min-width: 375px) {
    ul li {
      width: 92%;
      height: 453.98upx;
      /*background:#E4E5E7;*/
      position: relative;
      left: 0;
      right: 0;
      margin: auto;
    }

    ul li img {
      width: 100%;
      height: 289.96upx;
      margin-top: 30upx;
      border-radius: 7.96upx;
    }
  }

  @media screen and (min-width: 414px) {
    ul li {
      width: 92%;
      height: 511.96upx;
      /*background:#E4E5E7;*/
      position: relative;
      left: 0;
      right: 0;
      margin: auto;
    }

    ul li img {
      width: 100%;
      height: 343.96upx;
      margin-top: 30upx;
      border-radius: 7.96upx;
    }
  }
  /*需求合作样式*/
  .cooperation{
    width:207.98upx;
    height:102upx;
    border:1.96upx solid #03aef9;
    background: #FFFFFF;
    border-radius: 99.98upx;
    position: fixed;
    bottom: 40.96upx;
    right:30upx;
    z-index: 999;
  }
  .cooperation p:nth-of-type(1){
    width:55.96upx;
    height:60upx;
    font-size:27.98upx;
    color: #444444;
    line-height:30upx;
    margin-top: 21.0upx;
    margin-left: 37.96upx;
  }
  .cooperation p:nth-of-type(2){
    width:117.98upx;
    height:117.98upx;
    background:#03aef9;
    border-radius: 50%;
    position: absolute;
    right:-12upx;
    top:-9.98upx;
  }
  .cooperation p:nth-of-type(2) svg{
    font-size:60upx;
    position: absolute;
    top:0;
    bottom: 0;
    left:0;
    right:0;
    margin: auto;
  }
</style>