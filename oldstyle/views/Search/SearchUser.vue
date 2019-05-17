<style lang="less" scoped>
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
    .listWrapper{
      top:337.50upx;
    }
    background: #ffffff;
    .search{
      width:100%;
      height:87.98upx;
      background: #ffffff;
      padding: 0 4%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      p{
        &:nth-of-type(1){
          width:75%;
          height:67.96upx;
          border-radius: 99.98upx;
          background: #f3f4f6;
          border:1.96upx solid #dcdcdc;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0 19.96upx;
          svg{
            color: #c8c8c8;
            &:nth-of-type(1){
              font-size: 36upx;
            }
            &:nth-of-type(2){
              margin-left: 19.96upx;
              font-size: 39.98upx;
            }
          }
          input{
            margin-top: 30upx;
            height:63.98upx;
            border: none;
            background: #f3f4f6;
            font-size: 27.98upx;
            color: #444444;
          }
        }
        &:nth-of-type(2){
          width:132upx;
          height:67.96upx;
          background: #03aef9;
          border-radius: 99.98upx;
          font-size: 27.98upx;
          color: #ffffff;
          text-align: center;
          line-height: 67.96upx;
        }
      }
    }
    /*导航栏的样式*/
    .menu{
      width:100%;
      height:78upx;
      background: #ffffff;
      font-size:27.98upx;
      color: #444444;
      display: flex;
      flex-direction: row;
      position: relative;
      span{
        display: flex;
        width:25%;
        height:100%;
        justify-content: center;
        align-items: center;
        &:nth-of-type(4){
          font-size: 27.98upx;
          position:relative;
          color: #444444;
          font-weight: 500;
          i{
            position:absolute;
            width:54upx;
            height:3.98upx;
            border-radius: 99.98upx;
            background:#03aef9;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
          }
        }
      }
    }
    /*引导*/
    .pilot{
      width: 100%;
      overflow: hidden;
      padding: 0 4%;
      li{
        width:100%;
        height:87.98upx;
        position: relative;
        line-height: 87.98upx;
        span{
          font-size:30upx;
          color: #235280;
          &:nth-of-type(2){
            font-size:25.96upx;
            color: #808080;
          }
        }
        i.space{
          display: inline-block;
          width:1.96upx;
          height:21.0upx;
          background: #DCDCDC;
          margin:0 12upx;
        }
        svg{
          float: right;
          margin-top: 27.98upx;
        }
      }
    }
    /**/
  }



  /*列表区域*/
  .cions-list{
    width:100%;
    overflow: hidden;
    padding: 0 4%;
  }
  .cions-list li{
    position: relative;
    height:127.96upx;
  }
  .cions-list li div{
    float: left;
  }
  .cions-list li .cions-avatar{
    position: relative;
    width:87.98upx;
    height:87.98upx;
    border-radius:50%;
    background: #cccccc;
    margin-top: 19.96upx;
  }
  .cions-list li .cions-avatar img{
    width:87.98upx;
    height:87.98upx;
    border-radius:50%;
  }
  .cions-list li .cions-avatar svg{
    position: absolute;
    font-size: 39.98upx;
    right: -9.98upx;
    bottom: -3.98upx;
  }
  .cions-list li .detail{
    width: 60%;
    margin-top: 27.98upx;
    font-size:27.98upx;
    color: #444444;
    margin-left: 15.98upx;
  }
  .cions-list li .detail p:nth-of-type(2){
    font-size:24upx;
    color: rgb(128, 128, 128);
    margin-top: -3.98upx;
  }
  .cions-list li .detail p:nth-of-type(2) i{
    color: #235280;
  }
  .cions-list li .fouce{
    width:121.96upx;
    height:54upx;
    background: #03aef9;
    border-radius: 99.98upx;
    text-align: center;
    line-height:54upx;
    font-size:27.98upx;
    color: #ffffff;
    margin-top: 36.98upx;
    float: right;

  }
  .cions-list li .grey{
    color: #b4b4b6;
    background: #dbdbdb;
  }
</style>