<style lang="less" rel="stylesheet/less" scoped>
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

  .bott {
    position: absolute;
    right: 30upx;
    bottom: 0;
    left: 30upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  .mui-bar {
    padding-top: 22.96upx;
    display: flex;
    justify-content: space-between;
    .icon {
      font-size: 42upx;
      color: #444444;
    }
    .setUp {
      display: flex;
      padding-left: 7.96upx;
    }
    .code {
      display: flex;
      padding-right: 7.96upx;
    }
  }

  .my-top {
    overflow: hidden;
    background-color: #ffffff;
    padding: 0 31.96upx;
  }

  .professor {
    margin-top: 30upx;
    display: flex;
    .my-img{
      width: 117.98upx;
      height: 117.98upx;
      position: relative;
      .expert {
        position: absolute;
        bottom: -1.96upx;
        right: -6upx;
        .icon {
          font-size: 43.96upx;
          color: #FCC816;
          border: 3.98upx solid #FFF;
          border-radius: 50%;
          background: #FFF;
        }
      }
    }
    .avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .my-personal {
    margin-top: 7.96upx;
    margin-left: 19.96upx;
    position: relative;
    z-index: 98;
    .my-info {
      position: relative;
      span {
        display: inline-block;
        &:nth-of-type(1) {
          max-width: 219.0upx;
          font-size: 39.98upx;
          color: #444444;
          margin-right: 3.0upx;
          margin-bottom: -7.96upx;
        }
        &:nth-of-type(2) {
          position: relative;
          z-index: 1;
          padding: 1.96upx 9.98upx;
          position: relative;
          top: -6upx;
          font-style: normal;
          line-height: 30upx;
          font-size: 19.96upx;
          color: #FFFFFF;
          text-align: center;
          border-radius: 199.96upx;
          background:linear-gradient(180deg,#07D7FD 0%,#03AEF9 100%);
        }
      }
      p {
        &:nth-of-type(1) {

        }
      }
      svg {
        :nth-of-type(1) {
          font-size: 51.98upx;
          margin-bottom: -7.96upx;
          margin-left: -6upx;
          color: rgb(3, 174, 249);
          position: relative;
        }
      }
    }
    .my-detail {
      margin-top: 7.96upx;
      span {
        font-size: 25.96upx;
        color: #444444;
      }
      i {
        display: inline-block;
        width: 3.98upx;
        height: 3.98upx;
        border-radius: 50%;
        background: #B4B4B6;
        margin: 0 0upx 6upx;
      }
    }
  }
  /**********名片***************/

  .account_info {
    position: absolute;
    right: 0;
    top: 43.96upx;
    height: 57.98upx;
    border-radius: 199.96upx 0 0 199.96upx;
    line-height: 57.98upx;
    color: #FFFFFF;
    font-size: 25.96upx;
    padding-left: 25.96upx;
    padding-right: 30upx;
    z-index: 9;
    .icon {
      color: #808080;
    }
  }
  /**********邀请我的好友***************/
   .my-activity{
     width:100%;
     overflow: hidden;
   }
  .my-news {
    width: 82%;
    height: 81.98upx;
    border-radius: 15.98upx;
    background:url(../../statics/images/mask@3x.png) no-repeat;
    background-size:100% 100%;
    -webkit-box-shadow: 0 0 19.96upx rgb(243, 244, 246);
    -moz-box-shadow: 0 0 19.96upx rgb(243, 244, 246);
    box-shadow: 0 0 19.96upx rgb(243, 244, 246);
    position: relative;
    margin-bottom: 39.98upx;
    float: left;
    i {
      font-style: normal;
      display: inline-block;
      width: 60upx;
      height: 33.98upx;
      background: #E95D8C;
      font-size: 24upx;
      color: #FFFFFF;
      text-align: center;
      line-height: 33.98upx;
      border-radius: 7.96upx;
      margin-left: 22.50upx;
      margin-right: 19.96upx;
      position: relative;
      /*渐变*/
      background: -webkit-gradient(linear, 0 0, 100% 0, from(rgb(250, 73, 117)), to(rgb(253, 128, 173)));
      &:after {
        content: "";
        display: block;
        width: 12upx;
        height: 12upx;
        background: rgb(253, 128, 173);
        position: absolute;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
        right: -3.98upx;
        top: 0upx;
        bottom: 0;
        margin: auto;
      }
    }
    span {
      font-size: 27.98upx;
      color: #444444;
      line-height: 81.98upx;
    }
    p{
      font-size: 24upx;
      color: #444444;
      position: absolute;
      top: 0;
      bottom: 0;
      right:69.98upx;
      line-height:81.98upx;
      a{
        color:rgb(250,73,117);
        letter-spacing:3.98upx;
      }
    }
    svg {
      font-size: 27.98upx;
      color: #808080;
      position: absolute;
      right: 30upx;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
  .my-signIn{
    margin-left: 2%;
    float: right;
    width:16%;
    height: 81.98upx;
    text-align: center;
    line-height: 81.98upx;
    font-size: 27.98upx;
    border-radius: 15.98upx;
    color: #03AEF9;
    border:3.0upx solid #65D2F2;
    position: relative;
    overflow: hidden;
    i{
      position: absolute;
      width: 0;
      height: 0;
      border-top: 30upx solid #65D2F2;
      border-right: 30upx solid transparent;
      left:0;
      top:0;
    }
  }
  .gray {
    width: 100%;
    height: 19.96upx;
    background: #F3F4F5;
  }
  /*中间的发布认证*/

  .part2 {
    list-style: none;
    width: 100%;
    height: 123.98upx;
    margin-top: 30upx;
    padding-left: 30upx;
    padding-right: 30upx;
    background: #ffffff;
    position: relative;
    li {
      float: left;
      width: 25%;
      height: 100%;
      text-align: center;
      position: relative;
      margin-top: 15.98upx;
      svg {
        font-size: 48upx;
        margin-top: 19.96upx;
      }
      span {
        &:nth-of-type(1) {
          color: #444444;
          font-size: 37.96upx;
          line-height: 43.96upx;
        }
        &:nth-of-type(2) {
          font-size: 24upx;
          color: #808080;
          display: block;
          /*margin-top: 13.96upx;*/
        }
      }
    }
  }

  .enjoy {
    width: 685.96upx;
    margin: 33.98upx auto 0;
    padding-bottom: 18.76upx;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .component-option{
    .invite {
      span {
        &:nth-of-type(2) {
          position: absolute;
          right: 81.98upx;
          color: #B4B4B6;
          font-size: 24upx;
        }
      }
    }
    .signIn {
      span {
        &:nth-of-type(2) {
          width: 15.98upx;
          height: 15.98upx;
          position: absolute;
          left: 157.50upx;
          top: 19.96upx;
          border-radius: 50%;
          background: #FA4975;
          display: inline-block;
        }
      }
    }
    .optionList {
      /*width: 92%;*/
      margin: 0 auto;
      color: #444444;
      font-size: 30upx;
      padding: 21.98upx 30upx;
      position: relative;
      display: flex;
      justify-content: space-between;
      span {
        display: flex;
      }
      .icon {
        font-size: 25.96upx;
        display: flex;
        margin-top: 6upx;
        color: #808080;
      }
      .bot {
        right: 36upx;
        left: 31.96upx;
      }
    }
  }

  .my-option {
    width: 100%;
    background: #FFFFFF;
    margin: 0;
    list-style: none;
    padding: 0 31.96upx;
    margin-bottom: 157.96upx;
    li {
      width: 100%;
      height: 87.98upx;
      padding-top: 24upx;
      padding-bottom: 24upx;
      position: relative;
      span {
        font-size: 27.98upx;
        color: #444444;
      }
      svg {
        float: right;
      }
    }
  }
  .mui-popup-inner {
    padding: 45.98upx 30upx 1.96upx 30upx;
  }

  .mui-content {
    background: #fff;
    bottom: 50px; /* px不转换 */
  }

  .immersed44 .mui-content{
    bottom: 84px !important; /* px不转换 */
  }

</style>