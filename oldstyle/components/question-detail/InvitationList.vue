<style scoped>
    ul,
    li,
    p,
    span,
    a,
    i {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .bot {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0upx;
      height: 1.96upx;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
      background-color: rgb(220, 220, 220);
    }
   /*列表的头部*/
    .invitation-title{
      width:100%;
      height: 87.98upx;
      background: #FFFFFF;
      position: relative;
      line-height: 87.98upx;
    }
    .invitation-title span:nth-of-type(1){
      font-size: 31.96upx;
      float: left;
      color: #444444;
    }
    .invitation-title span:nth-of-type(2){
      font-size: 27.98upx;
      float: right;
      color: #03aef9;
    }
   /*列表部分*/
  .my-focus {
    margin: 0;
    padding: 0;
    list-style: none;
    padding-left: 33.98upx;
    padding-right: 33.98upx;
    background: #FFFFFF;
    margin-top: 19.96upx;
  }

  .my-focus-item {
    width: 100%;
    height: 126upx;
    list-style: none;
    padding-top: 19.96upx;
    padding-bottom: 19.96upx;
    position: relative;
  }
  .my-focus-item div.avatar {
    width: 87.98upx;
    height: 87.98upx;
    float: left;
    margin-right: 15.98upx;
    position: relative;
  }
  .my-focus-item img {
    width: 87.98upx;
    height: 87.98upx;
    border-radius: 50%;

  }
  .my-focus-item svg {
    color: #fcc816;
    font-size:30upx;
    position: absolute;
    right:0;
    bottom: 0;
  }

  .my-focus-item div {
    float: left;
    width: 60%;
  }

  /*关注和取消*/

  .my-focus-item .follows {
    position: absolute;
    width: 123.98upx;
    height: 54upx;
    border: 1.96upx solid #03aef9;
    border-radius: 99.98upx;
    text-align: center;
    line-height: 54upx;
    right: 0;
    top: 36upx;
    font-size: 27.98upx;
    color: #03aef9;
  }

  .my-focus-item .bgblue {
    background: #03aef9;
    color: #FFFFFF;
  }

  .my-focus-item div p:nth-of-type(1) span {
    display: inline-block;
    max-width: 252upx;
    height: 39.98upx;
    overflow: hidden;
    font-family: "PingFangSC";
    font-size: 27.98upx;
    color: #565656;
  }

  .my-focus-item div p:nth-of-type(1) svg {
    font-size: 39.98upx;
    margin-bottom: 3.98upx;
    color: #3c95f9;
  }

  .my-focus-item div p:nth-of-type(2){
    width: 100%;
    height: 27.98upx;
    font-size: 25.96upx;
    color: #b4b4b6;
    line-height: 25.96upx;
  }
</style>