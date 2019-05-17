<style scoped="scoped">
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

  .mui-content.absolute {
    background: #F3F4F5;
    /*border-color: #FFFFFF;*/

  }

  .enroll {
    width: 100%;
    /*height: 100%;*/
    padding: 30upx 31.96upx 31.96upx 31.96upx;
    background: #FEFFFE;
  }

  /*.enroll img{
  	width: 100%;
  	height: 285.98upx;
  }*/
  .enroll-text {
    width: 100%;
    height: 114upx;
    /*background: #CCCCCC;*/
    margin-top: 15.98upx;
    border-bottom: 0.98upx solid #DCDCDC;
  }

  .enroll-text p:nth-of-type(1) {
    font-size: 27.98upx;
    color: #444444;
    font-weight: 500;

  }

  .enroll-text p:nth-of-type(2) {
    font-size: 24upx;
    color: #b4b4b6;
    margin-top: 6upx;

  }

  .btn {
    width: 100%;
    padding: 30upx 31.96upx 1.96upx 31.96upx;
    background: #FEFFFE;
    margin-top: 19.96upx;
  }

  .blue {
    width: 100%;
    height: 87.98upx;
    background: #03aef9;
    color: #FFFFFF;
    font-size: 31.96upx;
    border-radius: 9.98upx;
    margin-bottom: 30upx;
    text-align: center;
    border: none;
  }

  .yellow {
    width: 100%;
    height: 87.98upx;
    background: #fcc816;
    color: #FFFFFF;
    font-size: 31.96upx;
    border-radius: 9.98upx;
    margin-bottom: 30upx;
    text-align: center;
    border: none;
  }

  .gray {
    width: 100%;
    height: 87.98upx;
    background: #b4b4b6;
    color: #FFFFFF;
    font-size: 31.96upx;
    border-radius: 9.98upx;
    margin-bottom: 30upx;
    text-align: center;
    border: none;
  }

  .feedback {
    width: 100%;
    min-height: 159.98upx;
    padding: 30upx 31.96upx 30upx 31.96upx;
    background: #FEFFFE;
    margin-top: 19.96upx;
    border: none;

  }

  .send {
    width: 100%;
    height: 84upx;
    border-radius: 9.98upx;
    border: 0.98upx solid #DCDCDC;
  }

  .feedback input {
    width: 80%;
    height: 79.96upx;
    float: left;
    font-size: 27.98upx;
    border: none;
  }

  .feedback svg {
    font-size: 60upx;
    float: right;
    margin-right: 19.96upx;
    margin-top: 9.98upx;
    color: #03aef9;
  }

  .text {
    width: 100%;
    border: 1.96upx solid #DCDCDC;
    margin-top: 31.96upx;
    padding: 9.98upx 15.98upx;
    word-wrap: break-word;
    overflow-x: hidden;
  }

  .back {
    width: 100%;
    background: #FFFFFF;
    font-size: 27.98upx;
    color: #808080;
    text-align: center;
    padding: 39.98upx 19.96upx;
    margin-top: 19.96upx;
    margin-bottom: 19.96upx;

  }

  /*评论 样式*/
  .message {
    width: 100%;
    overflow: hidden;
    margin-top: 19.96upx;
    /*background: #CCCCCC;*/
  }

  .message li {
    margin-top: 19.96upx;
    overflow: hidden;
    border-bottom: 0.98upx solid #DCDCDC;
  }

  .message p:nth-of-type(1) {
    width: 100%;
    overflow: hidden;

  }

  .message p:nth-of-type(1) span:nth-child(1) {
    width: 50%;
    float: left;
    text-align: left;
    font-size: 25.96upx;
    color: #03aef9;
  }

  .message p:nth-of-type(1) span:nth-child(2) {
    width: 50%;
    float: left;
    text-align: right;
    font-size: 24upx;
    color: #c8c8c8;
  }

  .message p:nth-of-type(2) {
    width: 100%;
    font-size: 25.96upx;
    margin-bottom: 9.98upx;
    margin-top: 6upx;
    color: #444444;

  }

  /***媒体查询*****/

  @media screen and (min-width: 320px) {
    .enroll img {
      width: 100%;
      height: 265.96upx;
      border-radius: 7.96upx;
    }
  }

  @media screen and (min-width: 375px) {
    .enroll img {
      width: 100%;
      height: 289.96upx;
      border-radius: 7.96upx;
    }
  }

  @media screen and (min-width: 414px) {
    .enroll img {
      width: 100%;
      height: 343.96upx;
      border-radius: 7.96upx;
    }
  }
</style>