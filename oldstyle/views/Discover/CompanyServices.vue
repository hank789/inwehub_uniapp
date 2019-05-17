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

  .mui-content {
    background: #FFFFFF;
  }

  .bot {
    position: absolute;
    right: 0upx;
    bottom: 0;
    left: 0upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #dcdcdc;
  }

  .services_container {
    width: 100%;
    overflow: hidden;
    padding: 0 4%;
  }

  .services_container li:nth-last-child(1) .bot {
    position: absolute;
    right: 0upx;
    bottom: 0;
    left: 0upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #FFFFFF;
  }

  .container-image {
    padding: 30upx 0;
    height: 315.98upx;
    border-radius: 7.96upx;
    position: relative;
  }
  .container-image img{
    box-shadow: 0 0 12upx #f3f4f6;
  }

  /*申请企业服务*/
  .apply {
    width: 100%;
    height: 252upx;
    background: url("../../statics/images/company_services_list.png") no-repeat;
    background-size: 100% 100%;
    text-align: center;
    margin-top: 30upx;
    position: relative;
  }

  .apply p {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }

  .apply p:nth-of-type(1) {
    width: 319.96upx;
    height: 69.98upx;
    font-size: 31.96upx;
    color: #ffffff;
    text-align: center;
    line-height: 60upx;
    font-weight: 500;
    border: 3.0upx solid #c2cddc;
    top: 39.98upx;
  }

  .apply p:nth-of-type(2) {
    top: 135.98upx;
    line-height: 36upx;
    font-size: 25.96upx;
    color: #FFFFFF;

  }

  .apply p:nth-of-type(3) {
    top: 177.98upx;
    line-height: 36upx;
    font-size: 25.96upx;
    color: #FFFFFF;
  }

</style>