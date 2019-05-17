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
  .menu  p:nth-of-type(2){
    display: inline-block;
    margin-left: 60upx;
    color: #444444;
    font-weight: 500;
    position: relative;
  }
  .menu  p:nth-of-type(2):after {
    position: absolute;
    width:127.96upx;
    bottom: 0;
    left: 0;
    height: 3.98upx;
    z-index: 999;
    content: '';
    background-color: #009FE8;
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
    background: #ffffff;
    height: 60%;
  }
  ul li{
    width:100%;
    height:177.98upx;
    padding: 0 4%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:space-between;
    align-items:center;
    position: relative;
  }
  ul li .container-image{
    width:84upx;
    height:84upx;
  }
  .container-info{
    width: 85%;
    height:100%;
    margin-left: 19.96upx;
  }
  .container-info p:nth-of-type(1){
    font-size:31.96upx;
    color:#444444;
    margin-top: 25.96upx;
  }
  .container-info p:nth-of-type(2){
    font-size:27.98upx;
    color: #808080;
    margin:1.96upx 0;
    display: flex;
    flex-direction: row;
    align-items:center;
  }
  .container-info p:nth-of-type(2) span{
    display: flex;
    flex-direction: row;
    align-items:center;
  }
  .container-info p:nth-of-type(2) span i{
    display: inline-block;
    width:1.96upx;
    height:25.96upx;
    background:#dcdcdc;
    margin: 0 9.98upx;
  }
  .container-info p:nth-of-type(2) span:nth-last-child(1) i{
    display: none;
  }
  .container-info p:nth-of-type(3){
    font-size:27.98upx;
    color: #808080;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
  }

  input::-webkit-input-placeholder { /*WebKit browsers*/
    color:#c8c8c8;
    font-size: 27.98upx;
  }


</style>