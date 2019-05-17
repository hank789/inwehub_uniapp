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
    height: 7.50upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .tag-title{
    width:100%;
    height:265.96upx;
    background: #f3f4f6;
    padding: 112.50upx 4% 105.0upx 4%;
    /*padding: 0 4%;*/
    display: flex;
    flex-direction: row;
    align-items: center;
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
  .tag-r p:nth-of-type(1) span:nth-of-type(2){
    float: right;
    width:123.98upx;
    height:54upx;
    background: #a8dff7;
    text-align: center;
    line-height: 51.98upx;
    border-radius: 7.96upx;
    font-size:27.98upx;
    color: #235280;
  }
  .tag-r p:nth-of-type(1) span:nth-of-type(2).grey{
    color: #808080;
    background: #dcdcdc;
  }
  .tag-r p:nth-of-type(2){
    margin-top: 21.98upx;
  }
  /*关注成员*/
  .tag-focus{
    width:100%;
    height: 127.96upx;
    background: #f3f4f6;
  }
  .tag-people{
    width:92%;
    height: 100%;
    margin-left: 4%;
    border-top:1.96upx solid #dcdcdc;
  }
  .tag-people .number{
    float: left;
    margin-top: 36upx;
    font-size: 21.98upx;
    color: #b4b4b6;
  }
  .tag-people .number span{
    font-size: 45.98upx;
    color: #444444;
    font-weight: bold;
    letter-spacing: 0;
  }
  .tag-avatar{
    width:70%;
    height: 63.98upx;
    margin-top: 30upx;
    /*background: #ffffff;*/
    float: right;
    border-left: 1.96upx solid #dcdcdc;
    padding:0 7.96upx 0 30upx;
    overflow: hidden;
    position: relative;
  }
  .tag-avatar  img{
    width:63.98upx;
    height:63.98upx;
    border-radius: 50%;
    margin-right: 9.98upx;

  }
  .tag-avatar  svg{
    position: absolute;
    right: 0;
    top:0;
    bottom: 0;
    margin: auto;
    color: #808080;
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
</style>