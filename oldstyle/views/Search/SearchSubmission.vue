<style lang="less" scoped>
  .mui-android .mui-content .menu .bot {
    height: 1.96upx;
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
    background: #ffffff;
    .listWrapper{
      top: 168upx;
    }
    .search{
      position: relative;
      width:100%;
      padding: 0 31.96upx;
      display: flex;
      height:87.98upx;
      margin-top: 9.98upx;
      flex-direction: row;
      align-items: center;
      background: #ffffff;
      justify-content: space-between;
      .border-football {
        &:after {
          height: 132.76upx;
        }
      }
      p{
        &:nth-of-type(1){
          width: 585.98upx;
          height:67.96upx;
          border-radius: 99.98upx;
          background: #f3f4f6;
          /*border:1.96upx solid #dcdcdc;*/
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0 19.96upx;
          svg{
            color: #c8c8c8;
            &:nth-of-type(1){
              font-size: 36upx;
              margin-top: 3.98upx;
            }
            &:nth-of-type(2){
              margin-left: 19.96upx;
              font-size: 39.98upx;
              position: relative;
              z-index: 100;
            }
          }
          input{
            width: 451.96upx !important;
            height:63.98upx;
            border: none;
            background: #f3f4f6;
            font-size: 27.98upx;
            color: #444444;
            position: absolute;
            left: 63.98upx;
            z-index: 100;
            padding: 0 19.96upx;
          }
        }
        &:nth-of-type(2){
          width: 79.96upx;
          font-size: 30upx;
          color: #03aef9;
          text-align: right;
          line-height: 42upx;
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
      margin-top: -7.96upx;
      span{
        display: flex;
        width: 13.5%;
        height:100%;
        justify-content: center;
        align-items: center;
        &:nth-of-type(2){
          font-size: 27.98upx;
          position:relative;
          color: #444444;
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
  }

  .newLink {
    margin-top: 18upx;
    .newLinkBox {
      margin-top: 19.96upx;
      padding: 30upx 30upx 21.98upx;
      background: #F7F8FA;
      border-radius: 7.96upx;
      .container-image {
        margin-top: 0;
        margin-bottom: 15.98upx;
      }
      img {
        border-radius: 7.96upx;
      }
      .linkContent {
        font-size: 27.98upx;
        color: #808080;
      }
      .link {
        font-size: 24upx;
        color: #B4B4B6;
      }
    }
  }
  .hotSearch {
    padding: 24upx 31.96upx;
    .history {
      margin-top: 12upx;
    }
    .hotSearchText {
      padding-bottom: 24upx;
      span {
        color: #444444;
        font-size: 31.96upx;
        line-height: 43.96upx;
      }
      .icon {
        color: #FA4975;
      }
    }
    .hotSearchList {
      span {
        height: 54upx;
        line-height: 54upx;
        color: #444444;
        font-size: 24upx;
        padding: 0upx 19.96upx;
        background: #F3F4F6;
        border-radius: 199.96upx;
        margin: 0 9.98upx 19.96upx 0;
        display: inline-block;
      }
    }
  }

  /*搜索建议*/
  .searchList {
    padding: 0 31.96upx;
    position: relative;
    z-index: 1000;
    div {
      color: #808080;
      font-size: 30upx;
      padding: 24upx 0;
      line-height: 43.96upx;
      position: relative;
    }
    .listOne {
      color: #03AEF9;
    }
  }

  .increase {
    position: relative;
    z-index: 1000;
    top: 447.98upx;
  }
</style>