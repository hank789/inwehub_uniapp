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
    bottom:87.98upx;
  }
  .title{
    width:100%;
    height:78upx;
    padding-left:4% ;
    background: #f3f4f6;
  }
  .title p{
    float: left;
    line-height: 78upx;
  }
  .title p:nth-of-type(2){
    float: right;
    color: #FFFFFF;
    padding: 0upx 37.96upx 0upx 42upx;
    background: #03aef9;
  }


  ul{
    width:100%;
    overflow: hidden;
  }
  ul li{
    width:87%;
    margin-left: 9%;
    position: relative;
    padding:24upx 0 24upx 0;
  }
  ul li p:nth-of-type(1){
  position: absolute;
    left:-36upx;
    font-size:31.96upx;
    color: #03aef9;
    font-weight: 500;
  }
  ul li p:nth-of-type(2){
    font-size: 31.96upx;
    color: #444444;
    line-height: 42upx;
  }
  ul li p:nth-of-type(2) span:nth-of-type(1){
    display: block;
  }
  ul li p:nth-of-type(2) span:nth-of-type(1) i{
    display: inline-block;
    font-size: 24upx;
    color: #9e9e9e;
    margin-bottom: 7.96upx;
    margin-right: 18upx;
    background: #ececee;
    border-radius: 99.98upx;
    padding:0upx 19.96upx;
  }
  ul li p:nth-of-type(3){
    font-size: 24upx;
    color:#808080;
    margin-top: 6upx;
  }
  .tags{
    width:100%;
    height:87.98upx;
    background:#f3f4f6;
    text-align: center;
    line-height: 87.98upx;
    font-size:30upx;
    color: #03aef9;
    position: absolute;
    bottom: 0;
  }
</style>