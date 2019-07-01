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
    background: #ffffff;
  }
   ul {
     width: 100%;
     overflow: hidden;
     padding: 0 4%;
     background: #ffffff;
   }
  ul li{
    width:100%;
    height: 87.98upx;
    position: relative;
    line-height: 87.98upx;
    /*display: flex;*/
    /*flex-direction: row;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
  }
  ul li p{
    float: left;
  }
  ul li svg{
    float: right;
    margin-top: 27.98upx;
  }
  ul li .name{
    float: right;
    font-size:27.98upx;
    color: #444444;
  }
  button{
    margin-top: 39.98upx;
    width:92%;
    height:87.98upx;
    margin-left: 4%;
    border-radius: 9.98upx;
  }
  .foot{
    width:100%;
    overflow: hidden;
    /*position: absolute;*/
    /*bottom: 57.98upx;*/

  }
  .logo{
    width:100%;
    overflow: hidden;
    text-align: center;
    padding-bottom: 85.96upx;
  }
  .logo svg{
    font-size: 300upx;
    margin-top: -84upx;
  }
  .logo span {
    display: block;
    color: #444444;
    line-height: 39.98upx;
    margin-top: -115.96upx;
    font-size:27.98upx;
  }
  .text{
    width:100%;
    overflow: hidden;
    text-align: center;
    padding-bottom: 57.98upx;
  }
  .text p{
    font-size: 27.98upx;
    color: #b4b4b6;
  }
  .bindedPhone{
    position: absolute;
    right:37.96upx;
    top:19.96upx;
    color:#444;
    font-size:27.98upx;
    line-height: 49.96upx;
  }
</style>