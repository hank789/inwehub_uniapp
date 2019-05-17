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
    background: #ffffff;
    .listWrapper{
      top: 165.0upx;
    }
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
        &:nth-of-type(3){
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
    /**/
    ul {
      width: 100%;
      overflow: hidden;
      li {
        width: 92%;
        margin-left: 4%;
        height: 87.98upx;
        position: relative;
        text-align: left;
        line-height: 87.98upx;
        font-size: 27.98upx;
        color: #808080;
      }
    }
  }

</style>