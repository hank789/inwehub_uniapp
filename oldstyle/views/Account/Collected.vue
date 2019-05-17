<style scoped>
.container-searchMenu {
  margin-top: 0;
}
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

  .mui-content{
    background: #FFFFFF;
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
    /*height: 399.98upx;*/
    overflow: hidden;
  }

  .hotAnswer_b li {
    width: 100%;
    padding:30upx 30upx;
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
  }

  .hotAnswer_d p {
    float: left;
  }

  .hotAnswer_d p:nth-child(1) {
    width: 63.98upx;
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
    margin-left:19.96upx;
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

  .title{
    font-size:31.96upx;
    color:#444;
  }
  .titleSub{
    font-size:27.98upx;
    color:#808080;
    padding:9.98upx 0 0;
  }

  .listWrapper{
    top: 90upx !important;
  }
</style>