<style lang="less" scoped>
  /*清掉自带样式*/

  div,
  p,
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
    right: 4%;
    bottom: 0;
    left: 4%;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }


  /*滚动区域*/
    ul{
      width:100%;
      height: 100%;
      background: #f3f4f6;
      li{
        width:100%;
        overflow: hidden;
        background: #ffffff;
        margin-bottom: 19.96upx;
        padding: 24upx 31.96upx 25.96upx;
        .ask-tags{
          width:100%;
          overflow: hidden;
          p{
            float: left;
            font-size:24upx;
            background: #ececee;
            color: #9e9e9e;
            margin-right: 15.98upx;
            border-radius:99.98upx;
            padding: 0upx 15.98upx;
            margin-bottom: 12upx;
          }
        }
        .ask-container{
          word-break: break-all;
          font-size: 31.96upx;
          color: #444444;
          line-height: 43.96upx;
        }
        .tag-detail{
          .ask-comment{
            width:205.96upx;
            height:37.96upx;
            border-radius:7.96upx;
            background: #a8dff7;
            font-size:24upx;
            color: #235280;
            float: left;
            text-align: center;
            line-height:37.96upx;
            margin-top: 3.98upx;
            margin-right: 19.96upx;
            position: relative;
            a{
              position: absolute;
              display: block;
              width:7.96upx;
              height:7.96upx;
              background: #ffffff;
              border-radius: 50%;
              top: 15.98upx;
              left: 6upx;
            }
          }
          width:100%;
          height:39.98upx;
          margin-top: 9.98upx;
          p{
            float: left;
            font-size: 24upx;
            color: #808080;
            margin-right: 18upx;
            i{
              display: block;
              float: right;
              width:1.96upx;
              height:19.96upx;
              background: #dbdbdb;
              margin: 12upx 0upx 1.96upx 18upx;
            }
          }

        }
      }
    }



</style>