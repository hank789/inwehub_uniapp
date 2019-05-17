<style  scoped>
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
  /*swiper*/
  .swiper{
    margin-bottom: 0;
    background: #FFFFFF;
  }
  .container-item .title{
    width:100%;
    height:84.98upx;
    padding: 0 4%;
    line-height: 84.98upx;
  }
  .container-item .title p:nth-of-type(1){
    float: left;
    font-size:31.96upx;
    color:#444444;

  }
  .container-item .title p:nth-of-type(2){
    float: right;
    font-size:25.96upx;
    color:#03aef9;

  }

  .home-recommend {
    width: 100%;
    height: 343.96upx;
    padding-left:4%;
    background: #FFFFFF;
  }
  .home-recommend:after{
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    height: 19.96upx;
    background-color: #f3f4f6;
    width: 100%;
  }

  .home-recommend div:nth-of-type(1) {
    margin-left: 0upx;
  }
  .home-card {
    height: 294upx;
    background: #ececee;
    position: relative;
    border-radius: 7.96upx;
  }
  .home-card img{
    width:100%;
    height:100%;
    border-radius: 7.96upx;
  }

  .container-item:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    height: 0upx;
    background-color: #97d7fb;
    width: 100%;
  }
  /* 合作*/
  .service{
    background: #03aef9;
    height:294upx;
     border-radius:7.96upx;
  }
  .service p:nth-of-type(1){
    width:283.96upx;
    height:69.98upx;
    border: 3.0upx solid #c2cddc;
    font-size:27.98upx;
    color:#FFFFFF;
    text-align: center;
    line-height: 69.98upx;
    margin: auto;
    margin-top: 60upx;
    margin-bottom: 25.96upx;
  }
  .service p:nth-of-type(2){
    font-size:25.96upx;
    color:#FFFFFF;
    text-align: center;
    line-height:36upx;
    margin: 0 8%;
  }
</style>