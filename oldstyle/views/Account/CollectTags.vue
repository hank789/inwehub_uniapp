<style scoped="scoped">
  .mui-wechat .menu {
    width: 100%;
    height: 90upx;
    position: absolute;
    z-index: 10;
    background: #f3f4f6;
    top: 0;
  }

  .mui-content {
    background: #FFFFFF;
  }

  /*导航栏的样式*/
  .menu{
    width:100%;
    height:78upx;
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

  .bot {
    position: absolute;
    right: 0upx;
    bottom: 0;
    left: 0upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .bott {
     position: absolute;
     right: 4%;
     bottom: 0;
     left: 4%;
     height: 1.96upx;
     -webkit-transform: scaleY(.5);
     transform: scaleY(.5);
     background-color: rgb(220, 220, 220);
   }

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

  /*滚动区域*/
  .tag-title{
    width:100%;
    height:265.96upx;
    padding: 0 4%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }
  .tag-l{
    width:183.98upx;
    height:183.98upx;
  }
  .tag-l img{
    width: 100%;
    height:100%;
    border-radius: 7.96upx;
  }
  .tag-l.bg-grey{
    background: #ececee;
    border-radius: 7.96upx;
    position: relative;
  }
  .tag-l.bg-grey svg{
    color: #c8c8c8;
    font-size: 99.98upx;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    margin:auto;
  }

  .tag-r{
    height:183.98upx;
    margin-left: 19.96upx;
  }
  .tag-r p:nth-of-type(1){
    font-size:36upx;
    color: #444444;
    font-weight:500;
  }

  .tag-r p:nth-of-type(2){
    margin-top: 21.98upx;
    font-size: 24upx;
    color: #808080;
    line-height: 36upx;
  }
  /***媒体查询*****/

  @media screen and (min-width: 320px) {
    .tag-r {
      width: 70%;
    }
  }

  @media screen and (min-width: 375px) {
    .tag-r {
      width: 70%;
    }
  }

  @media screen and (min-width: 414px) {
    .tag-r {
      width: 73%;
    }
  }
  .listWrapper{
    top:354upx !important;
  }

  /*listWrapper*/
  .listWrapper {
    top:354upx !important;
  }
  .superinduce{
    width:228upx;
    height:87.98upx;
    background:rgba(3,174,249,1);
    color: #ffffff;
    font-size: 31.96upx;
    border-radius: 99.98upx;
    text-align: center;
    line-height:87.98upx;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 30upx;
    margin: auto;
    z-index: 3;
  }
</style>