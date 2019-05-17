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
    right: 0upx;
    bottom: 0;
    left: 0upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .mui-content{
    background: #FFFFFF;
  }
  .menu{
    width:100%;
    height:78upx;
    background: #f3f4f6;
    font-size:27.98upx;
    color: #444444;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .menu span:nth-of-type(1){
    position:relative;
    color: #03aef9;
  }
  .menu span:nth-of-type(1) i{
    position:absolute;
    width: 139.96upx;
    height:3.0upx;
    border-radius: 99.98upx;
    background:#03aef9;
    top: 55.96upx;
    left: 0;
    right: 0;
    margin: auto;
  }
  /*排名的展示样式*/
  .ranking{
    width:100%;
    height:528upx;
    background: #fcc816;
    position: relative;
  }
  .ranking-title{
    height:85.96upx;
    position: absolute;
    top:27.98upx;
    left:0;
    right: 0;
    margin: auto;
  }
  .See{
    position: absolute;
    right: 0;
    top:40.96upx;
    display: inline-block;
    font-size: 27.98upx;
    color: #ffffff;
    border-radius: 99.98upx 0 0 99.98upx;
    padding: 6.98upx 13.96upx 6.98upx 15.98upx;
    background: -webkit-linear-gradient( rgb(243, 130, 1), rgb(252, 153, 40)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient( rgb(243, 130, 1), rgb(252, 153, 40)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient( rgb(243, 130, 1), rgb(252, 153, 40)); /* Firefox 3.6 - 15 */
    background: linear-gradient( rgb(243, 130, 1), rgb(252, 153, 40)); /* 标准的语法（必须放在最后） */
  }
  .ranking-content{
    width:100%;
    height:351.0upx;
    position: absolute;
    top:136.96upx;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 4%;
  }
  .ranking-content li{
    height:312upx;
    border:1.96upx solid #ee8610;
    background: #ececee;
    margin-top: 9.98upx;
    border-radius:7.96upx;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0upx 3.98upx 7.96upx #ececee;
  }
  .ranking-content li:nth-of-type(2){
    height:351.0upx;
    margin: 0 2.5%;
    margin-top: 0;
  }
  .ranking-content li .avatar-container{
    margin:21.0upx 0 12upx 0;
    position: relative;
  }
  .ranking-content li:nth-of-type(2) .avatar-container{
    margin:30.98upx 0 12upx 0;
  }
  .ranking-content li .avatar-container .avatar{
    width:99.98upx;
    height:99.98upx;
    border-radius:50%;
  }
  .ranking-content li:nth-of-type(2) .avatar-container .avatar{
    width:120upx;
    height:120upx;
    border-radius:50%;
  }
  .ranking-content li .avatar-container .avatar img{
    width:100%;
    height:100%;
    border-radius:50%;
  }
  .ranking-content li .avatar-container .banner{
    width: 132upx;
    position: absolute;
    left: -15.98upx;
    bottom: -19.96upx;
    font-size: 21.98upx;
    color: #444444;
    text-align: center;
  }
  .ranking-content li:nth-of-type(2) .avatar-container .banner{
    width: 151.96upx;

  }
  .ranking-content li .avatar-container .banner span{
    position: absolute;
    top: 3.98upx;
    left: 0;
    right: 0;
    margin: auto;
    line-height: 49.96upx;
  }
  .ranking-content li:nth-of-type(2) .avatar-container .banner span{
    line-height: 60upx;
  }

  .ranking-content li p:nth-of-type(1){
    font-size: 27.98upx;
    color: #444444;
    font-weight:600;
  }
  .ranking-content li .cions{
    font-size: 24upx;
    color: rgb(68, 68, 68);
  }
  .ranking-content li .cions i{
    color: #235280;
  }
  .ranking-content li p:nth-of-type(3){
    width:163.96upx;
    height:48upx;
    border-radius:99.98upx;
    text-align: center;
    line-height: 43.96upx;
    font-size: 24upx;
    background: #03aef9;
    color: #ffffff;
    margin-top: 13.96upx;

  }
  .ranking-content li p:nth-of-type(3).grey{
    color: #b4b4b6;
    background: #dbdcdb;
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
  .cions-list li .cions-num{
    font-size:24upx;
    color: #c8c8c8;
    margin-top: 30upx;
  }
  .cions-list li .cions-num p:nth-of-type(2){
    font-size:36upx;
    font-weight:500;
    color: #235280;
    margin-top: -9.98upx;
  }
  .cions-list li .cions-avatar{
    position: relative;
    width:87.98upx;
    height:87.98upx;
    border-radius:50%;
    background: #cccccc;
    margin-top: 19.96upx;
    margin-left: 30upx;
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
    font-size:24upx;
    color: rgb(128, 128, 128);
    margin-top: -3.98upx;
  }
  .cions-list li .detail p:nth-of-type(2) i{
    color: #235280;
  }
  .cions-list li .fouce{
    width:121.96upx;
    height:54upx;
    background: #03aef9;;
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
    background:#dbdcdb;
  }

  /***媒体查询*****/

  @media screen and (min-width: 320px) {
    .ranking-content li{
      width:204upx;
    }
    .ranking-content li:nth-of-type(2){
      width:240upx;
    }
  }

  @media screen and (min-width: 375px) {
    .ranking-content li{
      width:204upx;
    }
    .ranking-content li:nth-of-type(2){
      width:240upx;
    }
  }

  @media screen and (min-width: 414px) {
    .ranking-content li{
      width:223.96upx;
    }
    .ranking-content li:nth-of-type(2){
      width:259.96upx;
    }
  }
</style>