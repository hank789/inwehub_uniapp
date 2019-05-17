<style scoped="scoped">
  .recommentListWrapper{
    background:#fff;
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
</style>