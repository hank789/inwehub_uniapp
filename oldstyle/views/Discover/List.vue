<style scoped="scoped">
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
  .mui-content{
    background: #f3f4f6;
  }
  .bot {
    position: absolute;
    right:5%;
    bottom: 0;
    left:5%;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .discover-container{
    background: #FFFFFF;
  }

/*菜单栏*/
  .categoryMenu{
    width:100%;
    height:199.96upx;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
  }

  .categoryMenu li{
    display: flex;
    flex-direction:column ;
    justify-content:center;
    align-items:center;
    flex:1;
  }
  .categoryMenu li:nth-of-type(1){
    position: relative;
  }
  .categoryMenu li:nth-of-type(1) i{
    position: absolute;
    font-style: normal;
    width: 60upx;
    height: 33.98upx;
    font-size: 24upx;
    color: #FFFFFF;
    border-radius: 7.96upx;
    background: #fa4975;
    text-align: center;
    line-height:33.98upx;
    top: 43.96upx;
    right: 0upx;
  }
  .categoryMenu li:nth-of-type(1) i:after {
    content: "";
    display: block;
    width: 12upx;
    height: 12upx;
    background: #fa4975;
    /* border: 1.96upx solid #dcdcdc; */
    position: absolute;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    left: -6upx;
    top: 0upx;
    bottom: 0;
    margin: auto;
  }
  .categoryMenu li .discover-round{
    width:105.98upx;
    height:105.98upx;
    /*background: #03aef9;*/
    border-radius: 50%;
    display: flex;
    flex-direction:column ;
    justify-content:center;
    align-items:center;
    background: -webkit-linear-gradient(rgb(89, 195, 253), rgb(113, 210, 253)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(rgb(89, 195, 253), rgb(113, 210, 253)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(rgb(89, 195, 253), rgb(113, 210, 253)); /* Firefox 3.6 - 15 */
    background: linear-gradient(rgb(89, 195, 253), rgb(113, 210, 253)); /* 标准的语法 */
  }
  .categoryMenu li svg{
    font-size:60upx;
  }
  .categoryMenu li p{
    font-size:25.96upx;
    color: #808080;
    margin-top: 9.98upx;
  }
/*列表*/
  .recommend{
    width:100%;
    background: #FFFFFF;
    overflow: hidden;
  }
  .recommend_title{
    width:100%;
    padding: 0 4%;
    height:87.98upx;
    font-size:31.96upx;
    color: #444444;
    line-height: 87.98upx;
    background: #FFFFFF;
  }
  .recommend li{
    width:92%;
    padding:0upx 0 25.96upx 0;
    overflow: hidden;
    background: #FFFFFF;
    margin-bottom: 19.96upx;
    margin-left: 4%;
    border-radius: 7.96upx;
    box-shadow: 0upx 0upx 13.96upx 3.98upx #ececee;
  }
  .recommend li:nth-of-type(1){
    padding-top: 0;
  }
  .recommend li  .container-image{
     position: relative;
  }
  .recommend li .container_type{
    width: 127.96upx;
    height:39.98upx;
    float: left;
    border-radius:0 36upx 36upx 0;
    text-align: center;
    line-height: 39.98upx;
    color: #FFFFFF;
    font-size: 24upx;
  }
  /*颜色*/
  .recommend li .blue{
    background: #03aef9;
  }
  .recommend li .yellow{
    background: #fcc816;
  }
  .recommend li .pink{
    background:#fa4975;
  }

  /**/
  .recommend_content{
    margin-top: 24upx;
    color:#444444;
    font-size:30upx;
    line-height: 39.98upx;
    padding: 0 30upx;

  }
/*swiper*/
  .container-item{
    background: #FFFFFF;
    margin-bottom: 19.96upx;
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

  #home-recommend {
    width: 100%;
    height: 324upx;
    padding-left:4%;
    background: #FFFFFF;
  }

  #home-recommend div:nth-of-type(1) {
    margin-left: 0upx;
  }
   #home-card {
    height: 294upx;
    background: #ececee;
    position: relative;
    border-radius: 7.96upx;
  }
  #home-card img{
    width:100%;
    height:100%;
    border-radius: 7.96upx;
  }
.listWrapper{
  margin-top: 0upx;
  bottom: 102upx;
}

.w414-3 .listWrapper{
  bottom:50px !important; /* px不转换 */
}

.immersed44 .listWrapper{
  bottom: 84px !important; /* px不转换 */
}

/*顾问社区*/
  .community{
    width:100%;
    padding:0 5%;
    height:66upx;
    line-height: 85.96upx;
    font-size:31.96upx;
    color: #444444;
    background: #FFFFFF;
  }

  /*底部的详情*/
  .recommend_datail{
    width:100%;
    height:39.98upx;
    margin-top: 18upx;
  }
/*回答 关注*/
.answer-fouce{
  float: right;
  font-size:24upx;
  color: #235280;
  padding-right: 30upx;
}
  .answer-fouce i{
    margin: 0;
    display: inline-block;
    width:1.96upx;
    height:24upx;
    background: #dbdbdb;
    margin: 0 18upx -6upx 18upx;


  }

  /*榜单*/
  .mostInvitations{
    width:92%;
    height:120upx;
    background: #fdc707;
    margin: 13.96upx 4%;
    border-radius: 24upx;
    padding-left: 30upx;
    padding-top: 15.98upx;
    position: relative;
  }
  .mostInvitations .Medal{
    width: 63.98upx;
    position: absolute;
    right:36upx;
    top:0;
  }
  .invitation{
    font-size:24upx;
    color: #8e4c02;
  }
  .invitation span{
    font-size:31.96upx;
    font-weight:500;
    color: #8e4c02;
    margin-right: 3.98upx;
  }
  .invitation i{
    font-size:24upx;
    color:#235280;
  }
  .credits-cions{
    font-size:24upx;
    color: #8e4c02;
  }
  .credits-cions i{
    color: #235280;
  }
  .InvitationList{
    position: absolute;
    width:183.98upx;
    height:67.96upx;
    border:1.96upx solid #fde07d;
    border-radius: 25.96upx;
    font-size: 27.98upx;
    color: #b56102;
    line-height: 67.96upx;
    text-align: center;
    right: 111.98upx;
    top: 25.96upx;
    box-shadow:0upx 0upx 3.98upx rgba(81, 55, 7, 0.5) inset;
    text-shadow: 0 0 1.96upx rgb(238,134,16);
  }
  .InvitationList img{
    height:39.98upx;
    margin-top: 12upx;
  }
  .grey{
    width:100%;
    height:19.96upx;
  }
</style>