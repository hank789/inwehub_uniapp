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
    background: #ffffff;
  }
  .bot {
    position: absolute;
    right:0;
    bottom: 0;
    left:0;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .groups-title{
    width:100%;
    height:90upx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .groups-title .tag{
    padding: 9.98upx 4% 9.98upx 9.98upx;
  }
  .groups-title svg{
    font-size: 33.98upx;
    color:rgba(128,128,128,1);


  }
  .groups-left{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 4%;
  }
  .groups-left img{
    width:39.98upx;
    height:39.98upx;
    border-radius: 50%;
    margin-right: 9.98upx;
  }
  .groups-left p:nth-of-type(1){
    font-size:27.98upx;
    color:rgba(86,86,86,1);
    margin-right: 13.96upx;
  }
  .groups-left p:nth-of-type(2) {
    width: 75.98upx;
    height: 36upx;
    background: rgba(168, 223, 247, 1);
    border-radius: 12upx;
    font-size: 24upx;
    color: rgba(35,82,128,1);
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .groups-left p:nth-of-type(2) i{
    display: inline-block;
    width:6upx;
    height:6upx;
    border-radius: 50%;
    background: #ffffff;
    margin: 0 6upx;
  }
  .tag-title{
    width:100%;
    height:246upx;
    background: #ffffff;
    padding: 19.96upx 30upx 36upx 43.96upx;
  }
  .tag-l{
    width:183.98upx;
    height:183.98upx;
    float: left;
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
    width: 475.96upx;
    height: 183.98upx;
    margin-left: 15.0upx;
    float: left;
  }
  .tag-r p:nth-of-type(1){
    font-size:36upx;
    color: rgba(68,68,68,1);
    margin-bottom: 15.98upx;
  }
  .tag-info{
    width:100%;
    font-size: 24upx;
    color:rgba(180,180,182,1);
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .tag-info span{
    margin-right: 25.96upx;
  }
  .tag-info span svg{
    font-size: 25.96upx;
    color:rgba(180,180,182,1);
  }
  .tag-info span i{
    font-size: 27.98upx;
    color: rgba(3,174,249,1);
  }
  .tag-avatar{
    width:100%;
    height:73.96upx;
    border:1.96upx solid rgba(220, 220, 220, 1);
    border-radius: 99.98upx;
    padding: 0 4%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 15.98upx;
  }
  .tag-avatar .avatar{
    width: 85%;
    height:100%;
    overflow: hidden;
    margin-top: 15.0upx;
  }
  .tag-avatar .avatar img{
    width:39.98upx;
    height:39.98upx;
    border-radius: 50%;
    margin-right: 2%;
    margin-bottom: -15.98upx;
  }
  .tag-avatar svg{
    margin-right:25.96upx;
    color: #808080;
  }
</style>