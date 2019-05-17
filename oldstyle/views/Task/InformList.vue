<style scoped="scoped" lang="less">
  .bot {
    position: absolute;
    right: 31.96upx;
    bottom: 0;
    left: 31.96upx;
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

  .mui-icon {
    .icon {
      font-size: 42upx;
    }
  }

  .noticeWrapper {
    padding: 19.96upx 31.96upx;
    height: 111.98upx;
    background: #F3F4F6;
    display: flex;
    .closeNotice {
      font-size: 36upx;
      display: flex;
      color: #C8C8C8;
      margin-right: 30upx;
      margin-top: 18upx;
      .icon {
        font-size: 36upx;
      }
    }
    .noticeText {
      width: 71%;
      color: #03AEF9;
      font-size: 27.98upx;
      line-height: 39.98upx;
      margin-top: -1.96upx;
    }
    .unlock {
      width: 132upx;
      height: 54upx;
      color: #03AEF9;
      font-size: 27.98upx;
      margin: 9.98upx 0 0 30upx;
      line-height: 54upx;
      text-align: center;
      border-radius: 199.96upx;
      /*border: 1.96upx solid #03AEF9;*/
    }
    .border-football {
      &:after {
        border-color: #03AEF9;
      }
    }
  }

  .mui-content {
    background: #FFFFFF;
  }
  /*内容区域*/
  .mui-content ul li {
    width: 100%;
    height: 120upx;
    padding: 0 31.96upx;
    position: relative;
  }

  .mui-content ul li img {
    width: 84upx;
    height: 84upx;
    margin-top: 19.96upx;
    float: left;
  }


  .mui-content ul li p {
    float: left;
    margin-top: 19.96upx;
    margin-left: 24upx;
  }

  .mui-content ul li a {
    position: absolute;
    top: 19.96upx;
    right: 31.96upx;
    font-size: 24upx;
    color: #c8c8c8;
  }

  .mui-content ul li p span:nth-of-type(1) {
    display: block;
    font-size: 31.96upx;
    color: #444444;
  }

  .mui-content ul li p {
    width: 81%;
  }

  .mui-content ul li p span:nth-of-type(2) {
    display: block;
    width: 100%;
    height: 36upx;
    font-size: 25.96upx;
    color: #808080;
  }
  .mui-content ul li:nth-last-of-type(1) i{
    display: none;
  }
  .message {
    position: absolute;
    font-size: 21.98upx;
    color: #ffffff;
    min-width: 36upx;
    height: 36upx;
    background: #f03c69;
    border-radius: 36upx;
    text-align: center;
    line-height: 36upx;
    left: 90upx;
    top: 9.98upx;
  }

  .menu_message {
    position: absolute;
    left: 79%;
    top: 15.98upx;
    background: #f03c69;
    font-size: 21.98upx;
    text-align: center;
    color: #fff;
    padding: 0upx 6upx;
    min-width: 30upx;
    min-height: 30upx;
    border-radius: 30upx;
    line-height: 30upx;
  }
  .radius {
    border-radius: 50%;
  }
  /*客服头像方形*/
  .mui-content ul li:nth-of-type(5) img{
    border-radius: 19.96upx;
  }

  .listWrapper{
    bottom: 99.98upx !important;
  }

  .w414-3 .listWrapper{
    bottom:50px !important;  /* px不转换 */
  }

  .immersed44 .listWrapper{
    bottom: 84px !important; /* px不转换 */
  }

  /*待完成任务*/
  .notice{
    width:100%;
    height:87.98upx;
    margin-top: 15.0upx;
    padding: 0 31.96upx;
  }
  .notice p:nth-of-type(1){
    width: 72%;
    height:100%;
    background:#dcdcdc;
    border-radius: 7.96upx 0 0upx 7.96upx;
    float: left;
    position: relative;
    z-index: 9;
  }
  .notice p:nth-of-type(1) .notice_l{
    float: left;
    height:100%;
  }
  .notice p:nth-of-type(1) .notice_r{
    height:30upx;
    float: right;

    margin-top: 28.96upx;

  }
  .notice p:nth-of-type(1) span{
    display: block;
    height: 100%;
    float: right;
    margin-right: 4%;
    margin-left: 1%;
    line-height: 85.96upx;
    font-size: 31.96upx;
    color: #235280;
  }
  .notice p:nth-of-type(1):after {
    content: "";
    display: block;
    width: 19.96upx;
    height: 19.96upx;
    border-radius: 3.98upx;
    background: #dcdcdc;
    position: absolute;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    right: -7.96upx;
    top: 0upx;
    bottom: 0;
    margin: auto;
  }

  .notice p:nth-of-type(2){
    float: right;
    width: 27%;
    height:100%;
    background:#f03c69;
    text-align: center;
    line-height: 87.98upx;
    font-size:31.96upx;
    color: #FFFFFF;
    font-weight:500;
    border-radius:  0 7.96upx 7.96upx 0;
    position: relative;
  }
  .notice p:nth-of-type(2):after {
    content: "";
    display: block;
    width: 19.96upx;
    height: 19.96upx;
    border-radius: 3.98upx;
    background: #FFFFFF;
    /*border: 1.96upx solid #000000;*/
    position: absolute;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    left: -9.98upx;
    top: 0upx;
    bottom: 0;
    margin: auto;
  }
  /*适配*/
  @media (min-width: 320px) {
    .notice p:nth-of-type(1) .notice_l{
      width:45%;
      margin-right: 0;
    }
  }

  @media (min-width: 375px) {
    .notice p:nth-of-type(1) .notice_l{
      margin-right: 5%;
    }
  }

  @media (min-width: 414px) {
    .notice p:nth-of-type(1) .notice_l{
      margin-right: 5%;
    }
    .noticeText {
      /*margin-top: 1.96upx;*/
    }
  }
  header svg{
    font-size: 33.98upx;
    color:#808080;
    position: relative;
    /*top:-7.96upx;*/
  }
  .type_2 img{
    border-radius: 19.96upx;
  }
  .settingBtn{
    padding-top:19.96upx;
    font-size:30upx;
    font-family:PingFangSC-Medium;
    color:#808080;
  }
</style>