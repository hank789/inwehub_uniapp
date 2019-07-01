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

  .mui-bar-nav ~ .mui-content.absolute {
    top: 87.98upx;
    background: #fff;
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

  .hotAnswer_b {
    width: 90%;
    margin-left: 5%;
    /*height: 399.98upx;*/
    overflow: hidden;
  }

  .hotAnswer_b li {
    width: 100%;
    height: 147.98upx;
    position: relative;
  }

  .hotAnswer_b li > p {
    margin-top: 24upx;
    font-size: 31.96upx;
    color: #444444;
  }

  .hotAnswer_d {
    width: 100%;
    height: 63.98upx;
    margin-top: 15.98upx;
  }

  .hotAnswer_d p {
    float: left;
  }

  .hotAnswer_d p:nth-child(1) {
    width: 9.5%;
    height: 63.98upx;
    /*background: #CCCCCC;*/
    position: relative;
  }

  .hotAnswer_d p:nth-child(1) > svg {
    position: absolute;
    font-size: 27.98upx;
    bottom: 0;
    right: -7.96upx;
  }

  .hotAnswer_d p:nth-child(1) > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .hotAnswer_d p:nth-child(2) {
    width: 32%;
    height: 30upx;
    margin-top: 16.96upx;
    font-size: 25.96upx;
    color: #808080;
    text-align: center;
    line-height: 30upx;
  }

  .hotAnswer_d p:nth-child(3) {
    width: 21%;
    height: 30upx;
    margin-top: 16.96upx;
    font-size: 25.96upx;
    color: #808080;
    border-right: 1.96upx solid #c8c8c8;
    text-align: center;
    line-height: 30upx;
  }

  .hotAnswer_d p:nth-child(4) {
    width: 37.5%;
    height: 30upx;
    margin-top: 16.96upx;
    font-size: 25.96upx;
    color: #808080;
    text-align: center;
    line-height: 30upx;
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
</style>