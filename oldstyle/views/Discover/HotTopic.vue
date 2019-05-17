<style scoped>
  .mui-wechat .menu {
    width: 100%;
    height: 90upx;
    position: absolute;
    z-index: 10;
    background: #ffffff;
    top: 0;
  }

  .mui-content {
    background: #F3F4F5;
  }

  /*导航栏的样式*/

  .menu {
    width: 100%;
    height: 90upx;
    position: absolute;
    z-index: 10;
    background: #ffffff;
    padding: 0 33.98upx;
    border-bottom: 1.96upx solid #dcdcdc;
  }

  .menu span {
    display: block;
    height: 100%;
    float: left;
    font-size: 27.98upx;
    color: #444444;
    text-align: center;
    line-height: 90upx;
    font-weight: 600;
  }

  .menu span:nth-of-type(1) {
    position: relative;
  }

  .menu span:nth-of-type(2) {
    margin-left: 67.96upx;
  }

  .menu svg {
    float: right;
    color: #03aef9;
    margin-top: 25.96upx;
  }

  .menu i {
    display: block;
    position: absolute;
    width: 54upx;
    height: 3.0upx;
    left: 0%;
    bottom: 0.98upx;
    background: #03aef9;
  }

  .bot {
    position: absolute;
    right: 0upx;
    bottom: 0;
    left: 0upx;
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
  ul {
    width: 100%;
    overflow: hidden;
    background: #F3F4F5;
  }

  ul .Container {
    width: 100%;
    /*overflow: hidden;*/
    background: #FFFFFF;
    padding: 24upx 31.96upx 0 31.96upx;
    margin-bottom: 19.96upx;

  }

  ul .Container p:nth-of-type(1) {
    font-size: 30upx;
    color: #444444;
    line-height: 39.98upx;
  }

  ul .Container p:nth-of-type(1) i {
    font-size: 24upx;
    color: rgb(180, 180, 182);
  }

  ul .Container .container-image {
    height: 247.96upx;
    margin-top: 25.96upx;
  }

  ul .Container p.timer {
    width: 100%;
    height: 87.98upx;
    font-size: 24upx;
    color: #b4b4b6;
    line-height: 87.98upx;
    position: relative;
  }

  ul .Container p.timer a {
    font-size: 24upx;
    color: rgb(128, 128, 128);
  }

  .information {
    width: 100%;
    height: 79.96upx;
    padding: 0 33.98upx;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  }

  ul .Container .information p {
    color: #808080;
    position: relative;
    height:79.96upx;
    display: flex;
    align-items: center;
    padding:0 9.98upx;
  }

  /*举报和删除*/
  .information p:nth-of-type(1) span {
    display: block;
    width: 99.98upx;
    background: #575857;
    position: absolute;
    top: 55.96upx;
    left: -25.96upx;
    border-radius: 7.96upx;
    z-index: 99;
  }

  .information p:nth-of-type(1) span:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 9.98upx solid transparent;
    border-top: 9.98upx solid #575857;
    border-left: 9.98upx solid #575857;
    transform: rotate(45deg);
    position: absolute;
    top: -3.98upx;
    left: 0;
    right: 0;
    margin: auto;

  }

  .information p:nth-of-type(1) span a {
    display: block;
    text-align: center;
    font-size: 25.96upx;
    color: #FFFFFF;
    padding: 6upx 0;
  }

  .information p svg {
    font-size: 33.98upx;
  }

  .information p:nth-of-type(2) svg {
    font-size: 36upx;
  }

  .information p:nth-of-type(3) svg {
    font-size: 33.98upx;
    margin-right: 6upx;

  }

  .information p:nth-of-type(4) svg {
    font-size: 33.98upx;
    margin-right: 6upx;
  }

  /*带定位和图片的样式*/
  .imgContainer {
    width: 100%;
    /*overflow: hidden;*/
    background: #FFFFFF;
    padding: 24upx 30upx 0 30upx;
    margin-bottom: 19.96upx;
  }

  .imgContainer:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    height: 19.96upx;
    background-color: #f3f4f6;
    width: 100%;
  }

  .imgContainer .avatar {
    width: 100%;
    height: 67.96upx;
  }

  .avatar p:nth-of-type(1) {
    width: 67.96upx;
    height: 67.96upx;
    border-radius: 50%;
    float: left;
    position: relative;
  }

  .avatar p:nth-of-type(1) svg {
    position: absolute;
    font-size: 33.98upx;
    bottom: 0;
    right: -12upx;
  }

  .avatar p:nth-of-type(1) img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .avatar p:nth-of-type(2) {
    font-size: 25.96upx;
    color: #808080;
    line-height: 67.96upx;
    margin-left: 15.98upx;
    float: left;
  }

  .textContainer {
    width: 100%;
    font-size: 30upx;
    color: #444444;
    line-height: 39.98upx;
    margin-top: 12upx;
  }

  .timeContainer {
    width: 100%;
    height: 84upx;
    font-size: 24upx;
    line-height: 84upx;

  }

  .timeContainer svg {
    font-size: 27.98upx;
    color: #b4b4b6;
  }

  .timeContainer span:nth-of-type(1) {
    color: #b4b4b6;
  }

  .timeContainer span:nth-of-type(2) {
    color: #808080;
  }

  /*图片*/
  .PublishContainer {
    width: 100%;
    overflow: hidden;
    margin-top: 25.96upx;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    /*border:1.96upx solid #000000;*/
  }

  .PublishContainer .container-image {
    width: 216upx;
    /*border:1.96upx solid #000000;*/

  }

  .PublishContainer .container-image img {
    width: 100%;
    height: 100%;
  }

  .PublishContainer p:nth-of-type(2), .PublishContainer p:nth-of-type(3) {
    margin-left: 2%;
  }

  #container-image {
    width: 300upx;
    height: 451.96upx;
  }

  /*适配*/
  @media (min-width: 320px) {
    .PublishContainer .container-image {
      height: 183.98upx;
    }

  }

  @media (min-width: 375px) {
    .PublishContainer .container-image {
      height: 216upx;
    }

  }

  @media (min-width: 414px) {
    .PublishContainer .container-image {
      height: 216upx;
    }

  }

  ul .Container .information p.blue {
    color: #03aef9;
  }

  .listWrapper {
    margin-top: 90upx;
  }

</style>