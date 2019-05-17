<style lang="less" scoped>
  .bot {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  @media (-webkit-device-pixel-ratio:2){
    .bot{
      transform: scaleY(1);
    }
  }
  .mui-content{
    background: #ffffff;
    bottom:99.98upx;
  }

  .w414-3 .mui-content{
    bottom:50px !important;  /* px不转换 */
  }

  .home-b{
    width: 100%;
    overflow: hidden;
    position: absolute;
    top:15.98upx;
  }

  #slider{
    height:271.96upx;
    background: #cccccc;
    position: relative;
  }
  #slider .mui-slider-item img{
    height:271.96upx;
    width:100%;
    object-fit: cover;
  }
  .categoryMenu{
    margin:0;
    width:100%;
    height:159.98upx;
    background: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 63.98upx;
  }
  .categoryMenu li{
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .categoryMenu li svg{
    font-size:60upx;
  }
  .categoryMenu li p{
    font-size:25.96upx;
    color:rgba(128,128,128,1);
    line-height:27.98upx;
    margin-top: 15.98upx;
    margin-bottom:0;
  }
  .component-title-home {
    .Interest {
      .icon {
        color: #B4B4B6;
        margin-right: 0;
      }
      i {
        display: inline-block;
        width: 1.96upx;
        height: 24upx;
        background: #dbdbdb;
        margin: 0 19.96upx;
        margin-bottom: -3.76upx;
      }
    }
  }
  /*精选推荐*/
  .recommend{
    margin:0;
    width:100%;
    padding: 0 31.96upx;
    overflow: hidden;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title{
    width:100%;
    line-height: 31.96upx;
    padding-left: 4%;
    margin-top: 21.98upx;
    text-align: left;
    font-size: 31.96upx;
    color: rgba(68,68,68,1);
  }
  .recommend li{
    width: 100%;
    padding: 30upx 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }
  .recommend li:nth-of-type(1){
    padding-top: 24upx;
  }
  .recommend li .logo{
    width: 241.96upx;
    height:162upx;
  }
  .recommend li img{
    width:100%;
    height:100%;
    border-radius:7.96upx;
    object-fit: cover;
  }
  .recommend li .text-content{
    width:423.98upx;
    height:162upx;
    margin-left: 30upx;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .text-content .content_t{
    font-size: 27.98upx;
    color: RGBA(68, 68, 68, 1);
    line-height: 39.98upx;
    max-height: 127.50upx;
  }
  .recommend li .text-content  .container{
    display: inline;
  }
  .text-content .content_t span.label{
    height:30upx;
    line-height: 31.96upx;
    display: inline-block;
    font-size: 19.96upx;
    color: RGBA(128, 128, 128, 1);
    background:rgba(236,236,238,1);
    padding: 0upx 9.98upx;
    border-radius:7.96upx;
    font-weight: normal;
    position: relative;
    top: -1.96upx;
  }
  .information{
    width:100%;
    line-height: 24upx;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    font-size: 24upx;
    color: RGBA(128, 128, 128, 1);
    position: absolute;
    bottom: 0;
  }
  .information i{
   display: inline-block;
    width:1.96upx;
    height:24upx;
    background:RGBA(219, 219, 219, 1);
    margin: 0 19.96upx;
    margin-bottom: -3.76upx;
  }
  .more{
    width:100%;
    text-align: center;
    font-size: 27.98upx;
    margin-top: 21.98upx;
    color:rgba(3,174,249,1);
    line-height:39.98upx;
  }
  .gray{
    width:100%;
    height:19.96upx;
    background: #F3F4F5;
  }
  .mui-slider-item{
    height:271.96upx !important;
    overflow: hidden;
  }

  @keyframes myMove1 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  .move1 {
    animation: myMove1 1s ease-in infinite;
    -webkit-animation: myMove1 1s ease-in infinite;
  }
  .component-noticeBar{
    overflow: hidden;
  }
  .swiper-container{
    height:78upx;
  }
  .component-noticeBar {
    padding-left: 79.96upx;
  }

  .component-noticeBar span{
    margin-left:0;
  }
</style>
<style>
  .home.mui-slider-indicator{
    text-align: right;
    padding-right: 4%;
  }
  .home.mui-slider-indicator .mui-indicator{
    width: 12upx;
    height: 12upx;
    margin: 1.96upx 9.98upx;
    background: rgba(216,216,216,1);
    -webkit-box-shadow: 0 0 0 0 rgba(1216,216,216, .7);
     box-shadow: 0 0 0 0 rgba(216,216,216, .7);
  }
  .home.mui-slider-indicator .mui-active.mui-indicator{
    width: 24upx;
    height:12upx;
    background:rgba(3,174,249,1);
    border-radius: 99.98upx;
    -webkit-box-shadow: 0 0 1.96upx 1.96upx rgba(3,174,249, .7);
    box-shadow: 0 0 0 0 rgba(3,174,249, .7);
  }
</style>