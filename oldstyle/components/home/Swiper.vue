<style scoped="scoped">
  /*人物推荐*/
  #home-recommend {
    width: 100%;
    height: 313.96upx;
    background: #FFFFFF;
    padding-left: 4%;
  }

  #home-recommend div:nth-of-type(1) {
    margin-left: 0upx;
  }
/*box-shadow: 0 0 19.96upx #f3f4f6;*/
  #home-card {
    width: 228upx;
    height: 295.96upx;
    background:#FFFFFF;
    padding-top: 19.96upx;
    position: relative;
    border-radius: 7.96upx;
    border:0.38upx solid #dcdcdc;
    box-shadow: 0 0 9.98upx #ececee;
  }

  #home-card img {
    width: 99.98upx;
    height: 99.98upx;
    display: block;
    border-radius: 50%;
    margin: 0 auto;
  }

  #home-card span {
    display: block;
    text-align: center;
    font-size: 24upx;
    padding: 0 7.96upx;
  }

  #home-card span:nth-of-type(1) i {
    display: inline-block;
    max-width: 139.96upx;
    height: 39.98upx;
    font-style: normal;
  }

  #home-card span:nth-of-type(1) {
    width: 100%;
    text-align: center;
    font-size: 27.98upx;
    font-weight: 600;
    color: #444444;
    margin-top: 3.98upx;
  }

  #home-card span:nth-of-type(1) svg {
    font-size: 39.98upx;
    color: #03aef9;
    margin-bottom: 4.96upx;
    margin-left: -6upx;
  }

  .home-card span:nth-of-type(2) {
    display: inline-block;
    width: 100%;
    color: #444444;
  }

  #home-card span:nth-of-type(3) {
    width: 70%;
    height: 48upx;
    line-height: 43.96upx;
    border-radius: 99.98upx;
    border: 0.98upx solid #03aef9;
    margin-left: 15%;
    margin-top: 12upx;
    font-size: 27.98upx;
    text-align: center;
    color: #03aef9;
  }

  #home-card p {
    position: absolute;
    top: 0upx;
    /*right: 0upx;*/
    width: 55.96upx;
    text-align: center;
    background: url("../../statics/images/fill_1@2x.png") no-repeat;
    background-size: 100% 100%;
    font-size: 24upx;
    color: #ffffff;
  }

  /*查看更多专家样式*/

  .moreExperts {
    width: 236.62upx;
    margin-right: 19.96upx;
    height: 295.96upx;
    background:#FFFFFF;
    border-radius: 7.96upx;
    position: relative;
    border: 0.38upx solid #dcdcdc;
    box-shadow: 0 0 9.98upx #ececee;
  }

  .moreExperts > div {
    width: 80%;
    height: 60%;
    position: absolute;
    top: 20%;
    left: 10%;
    /*background: #CCCCCC;*/
  }

  .moreExperts > div > span {
    display: inline-block;
    border: 1.96upx solid #b4b4b6;
    width: 99.98upx;
    height: 99.98upx;
    border-radius: 50%;
    margin-left: 25%;
    position: relative;
  }

  .moreExperts > div svg {
    font-size: 60upx;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    color: #b4b4b6;
  }

  .moreExperts > div p {
    text-align: center;
    color: #444444;
    font-size: 24upx;
    margin-top: 3.98upx;
    margin-bottom: 0;
  }
  .moreExperts > div p:nth-of-type(2){
    margin-top:-9.98upx;
  }

  .container-item {
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 19.96upx;
    padding-top: 9.98upx;
  }

  .title {
    font-size: 25.96upx;
    color: #444;
    padding-left: 30upx;
    padding-bottom: 9.98upx;
  }

  .title .more {
    float: right;
    margin-right: 30upx;
    font-size: 25.96upx;
    color: #03aef9;
  }

  .followed {
    color: #b4b4b6 !important;
    border-color: #b4b4b6 !important;
  }
  /*头像*/
  .home_avatar{
    position: relative;
  }
  .home_avatar svg{
    font-size:39.98upx;
    position: absolute;
    bottom: 0;
    right: 25%;
  }
  /* 适配*/
  @media (min-width: 320px) {
    #home-card p {
      right: 0;
    }
  }
  @media (min-width: 375px) {
    #home-card p {
      right: 4%;
    }
  }
  @media (min-width: 414px) {
    #home-card p {
      right: 4%;
    }
  }

</style>