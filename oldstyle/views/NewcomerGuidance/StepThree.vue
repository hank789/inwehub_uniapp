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
 /*内容*/
  ul{
    width:100%;
    overflow: hidden;
    position: relative;
  }
  ul li{
    width:92%;
    margin-left: 4%;
    position: relative;
    padding:24upx 0 30upx 0;
  }
  ul li p:nth-of-type(1){
    font-size: 31.96upx;
    color: #444444;
    line-height: 42upx;
  }
  ul li p:nth-of-type(1) span{
    color: rgb(35,82,128);
    margin-right: 12upx;
  }
  ul li p:nth-of-type(2){
    font-size: 24upx;
    color:#b4b4b6;
    margin-top: 6upx;
  }
  ul li .focus{
    width:123.98upx;
    height:27x;
    background: #03aef9;
    font-size: 27.98upx;
    color: #ffffff;
    text-align: center;
    line-height: 49.96upx;
    border-radius: 99.98upx;
    position: absolute;
    bottom: 18.98upx;
    right: 4%;
  }
  ul li .grey{
    background: #dcdcdc;
    color: #b4b4b6;
  }
</style>