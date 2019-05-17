<style scoped>
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

  .mui-wechat #pullrefresh {
    margin-top: 0upx;
  }

  .mui-content {
    background: #FFFFFF;
  }

  /*主体部分样式*/

  ul li {
    position: relative;
    padding: 19.96upx 31.96upx 19.96upx 31.96upx;
    overflow: hidden;
  }
  ul li:nth-last-of-type(1) i{
    display: none;
  }
  ul li img {
    display: block;
    width:84upx;
    height: 84upx;
    float: left;
    border-radius: 19.96upx;
  }

  ul li p {
    margin-left: 3%;
    width: 82%;
    float: left;
  }

  ul li p span {
    display: block;
    margin-bottom: 9.98upx;
    width: 100%;
  }

  ul li p span:nth-of-type(1) {
    font-size: 31.96upx;
    color: #444444;
  }

  ul li p span:nth-of-type(2) {
    font-size: 27.98upx;
    color: #444444;
  }

  ul li p span:nth-of-type(3) {
    font-size: 24upx;
    color: #808080;
  }
  .message {
    width: 13.96upx;
    height: 13.96upx;
    background: #f03c69;
    border-radius: 50%;
    position: absolute;
    left: 15.5%;
    top: 10%;
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

  .time{
    display: inline-block;
    position: absolute;
    top: 15.98upx;
    right: 31.96upx;
    font-size: 24upx;
    color: rgba(180,180,182,1);
  }
</style>