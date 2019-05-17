<style scoped="scoped">
  .container-searchMenu {
     margin-top: 0;
   }

  .mui-content {
    background: #FFFFFF;
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
  /*清掉自带样式*/

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

  .answer {
    width: 92%;
    margin-left: 4%;
    overflow: hidden;
  }

  .answer li {
    width: 100%;
    overflow: hidden;
    padding: 30upx 0 25.96upx 0;
    position: relative;
  }
   .answer li div{
     margin-bottom: 24upx;
     margin-top: 0;
   }
  .answer li p:nth-of-type(1){
    font-size:30upx;
    color:#444444;


  }
  .answer li p:nth-of-type(1) a{
    font-size:24upx;
    color:rgb(180,180,182);

  }
   .answer li p:nth-of-type(2){
      font-size:24upx;
      color:#b4b4b6;
  }
  .answer li p:nth-of-type(2) a{
    font-size:24upx;
    color:rgb(128,128,182);
  }


  /*状态的颜色*/
 .label_1,.label_2,.label_4{
    background: #fcc816;
 }

 .label_3,.label_5,.label_6,.label_7{
   background: #c8c8c8;
 }

  .listWrapper{
    top: 90upx !important;
  }
  /*container-image margin-10-0-0*/
</style>