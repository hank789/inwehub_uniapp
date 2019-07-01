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
  .mui-table-view-cell:after {
    display: none;
  }
  .bot {
    position: absolute;
    right:30upx;
    top: 0upx;
    left:30upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  .mui-content {
    background: #f3f4f6;
    bottom:99.98upx;
  }

  .help {
    margin-top: 19.96upx;
    font-size: 27.98upx;
    background: #fff;
    padding-bottom: 75.98upx;
  }

  .help .title {
    padding: 30upx 30upx 19.96upx;
    color: #444;
  }

  .help .body {
    padding: 0 30upx;
    color: #808080;
  }

  .help .body a {
    color: #03aef9;
  }


  /*标签样式*/
  .question_tags{
    width:100%;
    overflow: hidden;
    padding: 0  31.96upx 15.98upx 13.96upx;
  }
  .question_tags p{
    float: left;
    background: #a8dff7;
    color:#FFFFFF;
    padding: 0upx 15.98upx;
    border-radius:99.98upx;
    margin-top: 18upx;
    margin-left: 18upx;
    font-size:24upx;
  }
  /*查看回答*/
  .see{
    width:100%;
    height:79.96upx;
    padding: 0 30upx;
    font-size:27.98upx;
    color:#03aef9;
    text-align: center;
    line-height: 79.96upx;
    background: #FFFFFF;
    margin-bottom: 19.96upx;
  }
</style>