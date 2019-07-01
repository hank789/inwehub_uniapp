<style lang="less" rel="stylesheet/less" scoped>
  .category {
    background: #fff;
    /*padding: 30upx 33.98upx;*/
    height:87.98upx;
    position: relative;
    padding-left: 4%;

    p{
      display: inline-block;
      line-height: 90upx;
      font-size:31.96upx;
      color: #444444;
      text-align: left;

      &:nth-of-type(1){
        display: inline-block;
        margin-right: 60upx;
        color: #444444;
        font-weight: 500;
        position: relative;

        &:after {
          position: absolute;
          width:63.98upx;
          bottom: 0;
          left: 0;
          height: 3.98upx;
          z-index: 999;
          content: '';
          background-color: #009FE8;
        }
      }
    }

    button {
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
  }
</style>
<style scoped="scoped">
  .groupName{
    font-size: 27.98upx;
    color: #444;
  }
  .mui-content {
    background: #FFFFFF;
  }

  /*清掉自带样式*/

  div,
  p,
  span,
  i,
  img,
  ul,
  li,
  a,
  input,
  button {
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
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

  /*分享文章*/
  .ShareArticles {
    width: 100%;
    height: 300upx;
    background: #ececee;
    /*border:1.96upx solid #000000;*/
    position: relative;
  }

  .ShareArticles p {
    width: 100%;
    height: 99.98upx;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .ShareArticles p span:nth-of-type(1) {
    display: block;
    font-size: 39.98upx;
    color: #444444;
    line-height: 39.98upx;
  }

  .ShareArticles p span:nth-of-type(2) {
    display: block;
    font-size: 27.98upx;
    color: #808080;
    margin-top: 15.98upx;
  }

  /*内容*/
  .concreteContent {
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
    padding-top: 34.96upx;
  }

  .concreteContent li {
    width: 92%;
    height: 85.96upx;
    margin-left: 4%;
    position: relative;
    line-height: 85.96upx;
  }

  .address p, .title p {
    float: left;
    color: #808080;
    font-size: 27.98upx;
  }

  .address input {
    width: 80%;
    height: 84upx;
    float: left;
    margin-bottom: 0;
    padding-right: 0;
    padding-left:30upx;
    border: none;
    font-size: 27.98upx;
    color: #444444;
    text-align: right;
  }

  .title .longContainer {
    width: 80%;
    height: 84upx;
    float: left;
    margin-bottom: 0;
    padding-right: 0;
    border: none;
    font-size: 27.98upx;
    color: #444444;
    text-align: right;
  }

  .title .shortContainer {
    width: 80%;
    height: 84upx;
    float: left;
    margin-bottom: 0;
    padding-right: 0;
    border: none;
    font-size: 27.98upx;
    color: #444444;
  }

  .title .shortContainer input {
    width: 74%;
    height: 84upx;
    float: left;
    margin-bottom: 0;
    padding-right: 0;
    padding-left: 30upx;
    border: none;
    font-size: 27.98upx;
    color: #444444;
    text-align: right;
  }

  .title .shortContainer span {
    float: right;
    height: 37.96upx;
    color: #FFFFFF;
    font-size: 24upx;
    background: #03aef9;
    text-align: center;
    line-height: 36upx;
    border-radius: 99.98upx;
    padding: 0 9.98upx;
    margin-top: 24upx;

  }

  input::-webkit-input-placeholder { /*WebKit browsers*/
    color: #c8c8c8;
    font-size: 27.98upx;
    text-align: right;
  }

  /*频道*/
  .channel p:nth-of-type(1) {
    float: left;
    color: #808080;
    font-size: 27.98upx;
  }

  .channel input {
    width: 50%;
    float: right;
    font-size: 27.98upx;
    border: none;
    text-align: right;
    color: #444444;
  }

  .channel span{
    color:#444;
    float:right;
    margin-right: 9.98upx;
  }

  .channel svg {
    color: #c8c8c8;
    font-size: 33.98upx;
    margin-top: 25.96upx;
    float: right;
    position: relative;
    z-index: 9999;
  }

  /*封面*/
  .concreteContent .coverMap {
    height: 348upx;
  }

  .container-image {
    width: 100%;
    height: 246upx;
  }

  .coverMap p {
    float: left;
    color: #808080;
    font-size: 27.98upx;
  }

  .coverMap svg {
    color: #c8c8c8;
    font-size: 33.98upx;
    margin-top: 25.96upx;
    float: right;
    position: relative;
    z-index: 9999;
  }

  /* 发布按钮*/
  .submit {
    width: 92%;
    margin-left: 4%;
    height: 87.98upx;
    border-radius: 9.98upx;
    background: #dcdcdc;
    font-size: 31.96upx;
    color: #b4b4b6;
    border: none;
    margin-top: 30upx;
    margin-bottom: 60upx;
  }

  .blue {
    background: #03aef9;
    color: #FFFFFF;
  }

  .articleTags{
    height:auto !important;
  }
  .articleTags .tags{
    padding-top:93.98upx;
    position: relative;
    top: -25.96upx;
  }
  .articleTags .tags label{
    border-radius: 99.98upx;
    border: 1.96upx solid #DBDBDB;
    background: #F7F8FA;
    color:#235280;
    margin-right:9.98upx;
    font-size:24upx;
    padding:6upx 9.98upx;
  }
  .noImg{
    height:85.96upx !important;
  }
</style>