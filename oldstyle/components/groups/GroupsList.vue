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
    right:0;
    bottom: 0;
    left:0;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .top {
    position: absolute;
    right:0;
    top: 0;
    left:0;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .detail i.top{
    display: none;
  }
  /*圈子*/
  .big.-group{
    padding: 30upx 0;
    position: relative;
  }
  .small.-group{
    padding-top:19.96upx;
    padding-bottom:19.96upx;
    position: relative;
  }
  .-group{
    width:100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #ffffff;
  }
  .big .logo{
    width:183.98upx;
    height:183.98upx;
    margin-right: 19.96upx;
  }
  .small .logo{
    width:87.98upx;
    height:87.98upx;
    margin-right: 19.96upx;
  }
  .-group .logo img{
    width:100%;
    height:100%;
    border-radius: 7.96upx;
    object-fit: cover;
  }
  .group-right{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  /*/*/
  .big .-group-name{
    font-size: 36upx;
  }
  .small .-group-name{
    font-size: 27.98upx;
  }
  .groupsList .-group-name{
    width:70%;
  }
  .-group-name{
    width:90%;
    display: block;
    color: #444444;
  }
  .group-right .text{
    font-size: 24upx;
    color: #808080;
    margin-top: 21.98upx;
    line-height: 31.96upx;
  }
  .big .-group-info{
    margin-top: 15.98upx;
  }
  .small .-group-info{
    margin-top: 1.96upx;
  }
  .-group-info{
    font-size: 24upx;
    color: #B4B4B6;
    position: absolute;
    bottom: 0;
    line-height: 24upx;
  }
  .-group-info span{
    margin-right: 18upx;
  }
  .-group-info span i{
    font-size: 27.98upx;
    color:#808080;
  }
  .-group-info span svg{
    margin-bottom: 1.96upx;
  }
  .join{
    border:1.96upx solid #03AEF9;
    font-size: 27.98upx;
    color: #03AEF9;
    width: 127.96upx;
    text-align: center;
    border-radius: 7.96upx;
    position: absolute;
    top: 30upx;
    right: 0;
  }
  .join.grey{
    border:1.96upx solid #C8C8C8;
    color: #B4B4B6;

  }
  .unread{
    width:15.98upx;
    height:15.98upx;
    background: #FA4975;
    border-radius: 50%;
    position: absolute;
    top: 30upx;
    right: 0;
  }
  .big .arrow{
    display: none;
  }
  .arrow{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .label{
    width: 60upx;
    height: 30upx;
    text-align: center;
    line-height: 30upx;
    display: inline-block;
    font-size: 19.96upx;
    color: RGBA(128, 128, 128, 1);
    background:rgba(236,236,238,1);
    border-radius:7.96upx;
    font-weight: normal;
    position: relative;
    top: -3.98upx;
    margin-right: 9.98upx;
  }
  /* 适配*/
  @media (min-width: 320px) {
    .big .group-right {
      width: 65%;
    }
    .small .group-right {
      width: 80%;
    }
  }

  @media (min-width: 375px) {
    .big .group-right {
      width: 70%;
    }
    .small .group-right {
      width: 83%;
    }
  }

  @media (min-width: 414px) {
    .big .group-right{
      width: 73%;
    }
    .small .group-right{
      width: 85%;
    }

  }
</style>