<style scoped>
  ul,
  li,
  p,
  span,
  a,
  i,
  input{
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
  }
  .mui-scroll-wrapper {
    position: absolute;
    z-index: 2;
    top: 111.98upx;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
  }

  .bot {
    position: absolute;
    right: 4%;
    bottom: 0;
    left: 4%;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .mui-content{
    background: #ffffff;
    overflow: hidden;
  }
  /*导航栏*/
  .menu{
    width: 100%;
    height: 90upx;
    background:#fefefe;
    position: relative;
    padding-left: 4%;
  }
  .menu  p{
    display: inline-block;
    line-height: 90upx;
    font-size:31.96upx;
    color: #444444;
    text-align: left;
  }
  .menu  p:nth-of-type(1){
    display: inline-block;
    color: #444444;
    font-weight: 500;
    position: relative;
  }
  .menu  p:nth-of-type(1):after {
    position: absolute;
    width:127.96upx;
    bottom: 0;
    left: 0;
    height: 3.98upx;
    z-index: 999;
    content: '';
    background-color: #009FE8;
  }
  .menu  p:nth-of-type(2){
    margin-left: 60upx;
  }
  .menu svg{
    position: absolute;
    right:3%;
    font-size: 49.96upx;
    color: #444444;
  }
  /*地图*/
  .map{
    width:100%;
    height:100%;
    overflow: hidden;
  }
  #allmap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
  }

  /*列表区域*/
  .userArea{
    width:100%;
    height:111.98upx;
    font-size: 30upx;
    color: #3c3e44;
    text-align: center;
    line-height: 111.98upx;
    position: relative;
  }
  .userArea:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.96upx;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
  }
  .userArea i{
    display: block;
    width:67.96upx;
    height:3.98upx;
    background: #808080;
    position: absolute;
    top:19.96upx;
    left:0;
    right:0;
    margin: auto;
  }


  ul{
    width: 100%;
    overflow: hidden;
    z-index: 10;
    position: absolute;
    background:#ffffff;
    height: 60%;
  }
  .cions-list li{
    position: relative;
    padding: 0 4%;
    height:127.96upx;
  }
  .cions-list li div{
    float: left;
  }
  .cions-list li .cions-avatar{
    position: relative;
    width:87.98upx;
    height:87.98upx;
    border-radius:50%;
    background: #cccccc;
    margin-top: 19.96upx;
  }
  .cions-list li .cions-avatar img{
    width:87.98upx;
    height:87.98upx;
    border-radius:50%;
  }
  .cions-list li .cions-avatar svg{
    position: absolute;
    font-size: 39.98upx;
    right: -9.98upx;
    bottom: -3.98upx;
  }
  .cions-list li .detail{
    width:60%;
    overflow: hidden;
    margin-top: 27.98upx;
    font-size:27.98upx;
    color: #444444;
    margin-left: 15.98upx;
  }
  .cions-list li .detail p:nth-of-type(1) i{
    font-size:24upx;
    color: #808080;
  }
  .cions-list li .detail p:nth-of-type(2){
    font-size:24upx;
    color: #b4b4b6;
    margin-top: -3.98upx;
  }
  .cions-list li .fouce{
    width:121.96upx;
    height:54upx;
    background: #03aef9;
    border-radius: 99.98upx;
    text-align: center;
    line-height: 54upx;
    font-size:27.98upx;
    color: #ffffff;
    margin-top: 36.98upx;
    float: right;

  }
  .cions-list li .blue{
    color: #b4b4b6;
    background: #dcdcdc;
  }
</style>