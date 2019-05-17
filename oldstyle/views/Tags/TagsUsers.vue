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
  .mui-content{
    background: #FFFFFF;
  }
  /*菜单*/
  .menu{
    width:100%;
    height:78upx;
    background: #FFFFFF;
    font-size:27.98upx;
    color: #444444;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
  .menu span:nth-of-type(3){
    position:relative;
    color: #03aef9;
  }
  .menu span:nth-of-type(3) i{
    position:absolute;
    width:54upx;
    height:3.0upx;
    border-radius: 99.98upx;
    background:#03aef9;
    top: 55.96upx;
    left: 0;
    right: 0;
    margin: auto;
  }

  /*list*/


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
  /*列表区域*/
  .cions-list{
    width:100%;
    overflow: hidden;
    padding: 0 4%;
  }
  .cions-list li{
    position: relative;
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
    margin-top: 27.98upx;
    font-size:27.98upx;
    color: #444444;
    margin-left: 15.98upx;
  }
  .cions-list li .detail p:nth-of-type(2){
    width:399.98upx;
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
    line-height: 49.96upx;
    font-size:27.98upx;
    color: #ffffff;
    margin-top: 36.98upx;
    float: right;

  }
  .cions-list li .grey{
    color: #b4b4b6;
    background: #dbdcdb;
  }

  .listWrapper{
    top:343.8upx !important;
  }

  /*.hasFollowers .listWrapper{
    top:343.8upx !important;
  }*/
</style>