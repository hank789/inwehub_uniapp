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
  .container-item .title p{
    float: left;
    font-size:31.96upx;
    color:rgba(68,68,68,1);
  }
  .container-item .title p:nth-of-type(2){
    float: right;
    font-size:27.98upx;
    color:#03AEF9;
  }
  .resume p.resumeTitle{
    font-size: 27.98upx;
    color:rgba(128,128,128,1);
  }
  .home-recommend {
    width: 100%;
    height: 246upx;
    padding-left:4%;
    background: #FFFFFF;
  }
  .home-recommend i{
    position: absolute;
    top:9.98upx;
    right:9.98upx;
    display: block;
    width:15.98upx;
    height:15.98upx;
    background: #FA4975;
    border-radius: 50%;
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
    height: 156upx;
    background: #ececee;
    position: relative;
    border-radius: 7.96upx;
  }
  .home-card img{
    width:100%;
    height:100%;
    border-radius: 7.96upx;
    object-fit: cover;
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
  .home-card p{
    font-size: 24upx;
    color:rgba(128,128,128,1);
    margin-top: -7.96upx;
  }
  /* 合作*/
  .service{
    background: #ffffff;
    height:156upx;
    border-radius:7.96upx;
    border: 1.96upx solid RGBA(220, 220, 220, 1);
    position: relative;
  }
  .addtitle{
    font-size: 24upx;
    color:rgba(128,128,128,1);
  }
  .service svg{
    position: absolute;
    left: 0;
    top:0;
    bottom: 0;
    right: 0;
    margin: auto;
    font-size: 49.96upx;
    color:rgba(3,174,249,1);
  }
</style>