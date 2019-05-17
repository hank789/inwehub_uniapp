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
  .mui-content{
    background: #FFFFFF;
  }
  /*邀请的头部*/
  .invitation-title{
    width:100%;
    height:264upx;
    background: #f3f4f6;
    padding: 0 33.98upx;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .invitation-title svg{
    color: #b4b4b6;
    font-size: 49.96upx;
    position: absolute;
    left:33.98upx;
    top:39.98upx;
  }
  .invitation-title .next-step{
    width:150upx;
    /*height:67.96upx;*/
    line-height: 39.98upx;
    padding: 13.96upx 0;
    border: 1.96upx solid #03aef9;
    border-radius: 99.98upx;
    font-size:27.98upx;
    color:#03aef9;
    position: absolute;
    right:33.98upx;
    top:31.96upx;
  }
  .invitation-title .invitation-text{
    position: absolute;
    top:117.98upx;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .invitation-text p:nth-of-type(1){
    font-size:27.98upx;
    color: #808080;
  }
  .invitation-text p:nth-of-type(2){
    font-size:39.98upx;
    color: #323232;
  }
  /*换一批&&一键邀请*/
  .invitation-recommend{
    width:100%;
    height:87.98upx;
    border-bottom: 1.96upx solid #dcdcdc;
    background: #FFFFFF;
    position: relative;
  }
  .invitation-recommend p{
    width:50%;
    height:87.98upx;
    text-align: center;
    font-size:27.98upx;
    color: #235280;
    line-height: 87.98upx;
    float: left;
  }
  .invitation-recommend p svg{
    font-size: 39.98upx;
    margin-bottom: -3.98upx;
  }
  .invitation-recommend i{
    width:1.96upx;
    height:37.96upx;
    background: #dcdcdc;
    position: absolute;
    top:0;
    bottom: 0;
    left:0;
    right: 0;
    margin: auto;
  }
  /*列表区域*/
  .my-focus {
    margin: 0;
    padding: 0;
    list-style: none;
    padding-left: 33.98upx;
    padding-right: 33.98upx;
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
    border-radius: 99.98upx;
    text-align: center;
    line-height: 54upx;
    right: 0;
    top: 36upx;
    font-size: 27.98upx;
    color: #b4b4b6;
    background: #dcdcdc;
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


  /*无数据的显示样式*/
  .container {
    position: absolute;
    top: 50%;
    left: 36%;
  }

  .container svg {
    font-size: 120upx;
    margin-left: 45.98upx;
    margin-bottom: 15.98upx;
  }

  .container p {
    font-family: "PingFangSC";
    font-size: 24upx;
    color: #c8c8c8;
  }

  .descriptionText {
    width:60%;
    font-size: 25.96upx;
    color: #b4b4b6;
  }
</style>