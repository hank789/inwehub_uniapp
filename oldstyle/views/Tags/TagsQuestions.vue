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
  .menu span:nth-of-type(1){
    position:relative;
    color: #03aef9;
  }
  .menu span:nth-of-type(1) i{
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

  /*问答列表*/
  .recommend_b {
    width: 100%;
    /*height: 399.98upx;*/
    overflow: hidden;
    background: #f3f4f6;
  }

  .recommend_b li {
    width: 100%;
    overflow: hidden;
    position: relative;
    background: #FFFFFF;
    margin-bottom: 19.96upx;
    padding: 24upx 0 30upx 0;
  }
  .recommend_b li div{
    width:92%;
    margin-left: 4%;
  }
  .recommend_b li .description{
    font-size:31.96upx;
    color:#444444;
  }
  /*点赞样式*/
  .component-dianzanList{
    width:100%;
    margin-top: 24upx;
    background:#f3f4f6;
    padding: 25.96upx 30upx 30upx;
    border-radius: 7.96upx;
  }
  /*.component-dianzanList*/
  .component-dianzanList span{
    font-size:25.96upx;
    color:#03aef9;
  }
  .component-dianzanList svg{
    font-size:33.98upx;
    color: #808080;
  }
  .avatar{
    height:87.98upx;
    margin-top: 30upx;
  }
  .avatar p:nth-of-type(1){
    height:87.98upx;
    float: left;
    position: relative;
  }
  .avatar p:nth-of-type(1) img{
    width:66upx;
    height:66upx;
    border-radius: 50%;
    margin-top: 10.96upx;
    float: left;
  }
  .avatar p:nth-of-type(1) svg{
    position: absolute;
    font-size: 27.98upx;
    bottom: 9.98upx;
    right: -9.98upx;
  }
  .avatar p:nth-of-type(2){
    width:88%;
    height:87.98upx;
    float: right;
    background:#03aef9;
    border-radius: 99.98upx;
    text-align: center;
    line-height: 87.98upx;
    font-size:31.96upx;
    color: #f2f2f2;
  }
  .question_info{
    height:37.96upx;
    /*background: #cccccc;*/
    margin-top: 24upx;
    line-height:37.96upx;
  }
  .question_info p:nth-of-type(1){
    float: left;
    font-size:25.96upx;
    color: #747474;
  }
  .question_info p:nth-of-type(1) i{
    display: inline-block;
    width:1.96upx;
    height:24upx;
    background: #dbdbdb;
    margin:0 18upx -1.96upx 18upx;
  }
  .question_info p:nth-of-type(1) span:nth-of-type(1){
    color: #b4b4b6;
  }
  .question_info p:nth-of-type(2){
    float: right;
    font-size: 25.96upx;
    color: #808080;
  }
  .question_info p:nth-of-type(2) span{
    float: right;
  }
  .question_info p:nth-of-type(2) span:nth-of-type(1){
    margin-left: 43.96upx;
  }
  .question_info p:nth-of-type(2) span:nth-of-type(1) svg{
    font-size: 36upx;
    color: #808080;
  }
  .question_info p:nth-of-type(2) span:nth-of-type(2) svg{
    font-size: 36upx;
    margin-bottom: -3.98upx;
  }



  .hudongWrapper .three {
    font-size: 24upx;
    color: #b4b4b6;
    padding-top: 9.98upx;
    text-align: right;
  }

  .hudongWrapper .split {
    position: relative;
    top: 6upx;
    margin: 0 19.96upx;
    display: inline-block;
    width: 1.96upx;
    height: 25.96upx;
    background: #c8c8c8;
    transform: scaleX(.5);
  }

  .hudongWrapper .isFollowed{
    color:#03aef9;
  }

  /*回答者的样式*/
  .hudongWrapper .respondent{
    width:100%;
    padding: 24upx 30upx;
    background: #f3f4f6;
    font-size:25.96upx;
    color:rgb(128,128,128);
    border-radius: 7.96upx;
    margin-top: 24upx;
  }
  .hudongWrapper .respondent span{
    color: #03aef9;
  }
  .hudongWrapper .respondent i{
    color:rgb(146,146,146);
    margin-right: 9.98upx;
  }
  .hudongWrapper .respondent span:nth-last-of-type(1) i{
    display: none;
  }
  .hudongWrapper .respondent i{
    font-size:25.96upx;
    color:rgb(128,128,128);
    font-style: normal;
  }

  .listWrapper{
    top:343.8upx !important;
  }

  /*.hasFollowers .listWrapper{
    top:343.8upx !important;
  }*/
  .mui-table-view-cell:after{
    display: none;
  }
</style>