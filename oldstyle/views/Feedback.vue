<style scoped="scoped">
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

  .mui-content {
    background: #ffffff;
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

  .gray {
    width: 100%;
    height: 19.96upx;
    background: #f3f4f6;
  }

  /*菜单*/
  .menu {
    width: 100%;
    height: 78upx;
    background: #FFFFFF;
    font-size: 27.98upx;
    color: #444444;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    line-height: 78upx;
    position: absolute;
  }
  .menu span {
    position: relative;
    margin-bottom: -21.98upx;
  }
  .menu span.bold {
    font-weight: 500;
  }
  .menu span i {
    position: absolute;
    width: 55.96upx;
    height: 3.0upx;
    border-radius: 99.98upx;
    background: #03aef9;
    top: 73.96upx;
    left: 0;
    right: 0;
    margin: auto;
  }
  .groups-list {
    margin-top: 97.96upx;
  }

  .invitation {
    width: 100%;
    height: 99.98upx;
    background: #ffffff;
    position: absolute;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    border-top: 1.96upx solid #DCDCDC;
  }

  .invitation p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 25.96upx;
    color: rgba(128, 128, 128, 1);
  }

  .invitation p:nth-of-type(1) {
    width: 65%;
    height: 100%;
  }

  .invitation p:nth-of-type(1) svg {
    font-size: 48upx;
    margin-right: 18upx;
  }

  .invitation p:nth-of-type(2) {
    width: 35%;
    height: 100%;
    font-size: 31.96upx;
    color: rgba(255, 255, 255, 1);
    background: rgba(3, 174, 249, 1);
  }

  .group-text{
    width:92%;
    margin-left: 4%;
    overflow: hidden;
  }
  .group-text p:nth-of-type(1){
    width:100%;
    height:85.96upx;
    position: relative;
    font-size: 31.96upx;
    color:rgba(68,68,68,1);
    line-height: 85.96upx;
  }
  .group-text p:nth-of-type(2){
    width:100%;
    margin-top: 27.98upx;
    position: relative;
    font-size: 31.96upx;
    color:rgba(68,68,68,1);
    line-height: 39.98upx;
  }
  .join{
    width:92%;
    height:87.98upx;
    position: fixed;
    right:0;
    left:0;
    bottom: 30upx;
    margin: auto;
    background:rgba(3,174,249,1);
    box-shadow: 0upx 1.96upx 19.96upx 0upx rgba(205,215,220,1);
    border-radius: 99.98upx ;
    text-align: center;
    line-height: 87.98upx;
    font-size: 31.96upx;
    color:rgba(255,255,255,1);
    font-weight: 500;
  }
  .join.wait{
    background:rgba(220,220,220,1);
    box-shadow: 0upx 1.96upx 19.96upx 0upx rgba(205,215,220,1);
    color:rgba(180,180,182,1);
  }
  .Nothing{
    width: 421.96upx;
    height: 399.98upx;
    position: absolute;
    font-size: 24upx;
    color: rgba(200,200,200,1);
    left: 0;
    right: 0;
    top: 600upx;
    text-align: center;
    margin: auto;
  }
  .Nothing svg{
    font-size: 120upx;
    margin-bottom: 9.98upx;
  }
  .listWrapper{
    bottom: 99.98upx !important;
  }
</style>