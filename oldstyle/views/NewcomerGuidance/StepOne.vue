<style scoped>
  ul,
  li,
  p,
  span,
  a,
  i {
    margin: 0;
    padding: 0;
    list-style: none;
  }
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
  .mui-content{
    background: #FFFFFF;
  }
  /*邀请的头部*/
  .invitation-title{
    width:100%;
    height:264upx;
    background: #f3f4f6;
    padding: 0 33.98upx;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .invitation-title svg{
    color: #b4b4b6;
    font-size: 49.96upx;
    position: absolute;
    left:33.98upx;
    top:39.98upx;
  }
  .invitation-title .next-step{
    width:150upx;
    height:67.96upx;
    line-height: 63.98upx;
    border: 1.96upx solid #03aef9;
    border-radius: 99.98upx;
    font-size:27.98upx;
    color:#03aef9;
    position: absolute;
    right:33.98upx;
    top:31.96upx;
  }
  .invitation-title .invitation-text{
    position: absolute;
    top:117.98upx;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .invitation-text p:nth-of-type(1){
    font-size:27.98upx;
    color: #808080;
  }
  .invitation-text p:nth-of-type(2){
    font-size:39.98upx;
    color: #323232;
  }
  /*tag*/
.tag-title{
  font-size:25.96upx;
  color: #808080;
  margin:39.98upx 0 0 4%;

}
  ul{
    width:92%;
    margin-left: 1.5%;
  }
  ul li{
    float: left;
    border:1.96upx solid #dcdcdc;
    font-size: 27.98upx;
    color: #444444;
    border-radius: 7.96upx;
    padding: 9.98upx 19.96upx;
    margin: 18upx 0 0 19.96upx;
  }
  ul li.bg-blue{
    background: #03aef9;
    border:1.96upx solid #03aef9;
    color: #FFFFFF;
  }

</style>