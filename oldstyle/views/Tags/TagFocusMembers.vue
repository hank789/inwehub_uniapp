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
  .cions-list li .detail p:nth-of-type(1){
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cions-list li .detail p:nth-of-type(1) span{
    width: 75.98upx;
    height: 36upx;
    background: rgba(168, 223, 247, 1);
    border-radius: 12upx;
    font-size: 24upx;
    color: rgba(35,82,128,1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 12upx;
  }

  .cions-list li .detail p:nth-of-type(1) span i{
    display: inline-block;
    width: 6upx;
    height: 6upx;
    border-radius: 50%;
    background: #ffffff;
    margin: 0 6upx;
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
    background:#03aef9;
    border-radius: 99.98upx;
    text-align: center;
    line-height: 54upx;
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
    bottom: 87.98upx;
  }
  /*一键关注*/
  .focusAll{
    width:100%;
    height: 87.98upx;
    background: #03aef9;
    text-align: center;
    line-height: 87.98upx;
    font-size: 31.96upx;
    color: #ffffff;
    position: fixed;
    bottom: 0;
  }
</style>