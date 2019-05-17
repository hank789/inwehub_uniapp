<style lang="less" rel="stylesheet/less" scoped>
  .bot {
    position: absolute;
    right: 27.98upx;
    bottom: 0;
    left: 27.98upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
    /*border: 1.96upx solid #dcdcdc;*/
  }

  /***************清除自带样式*****************/
  p,
  span,
  ul,
  li,
  i,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
  }

  .component-label {
    padding: 0upx 9.98upx;
  }

  .mui-bar {
    .icon {
      position: absolute;
      right: 31.96upx;
      top: 21.98upx;
      font-size: 43.96upx;
      color: #3C3E44;
    }
  }

  .professor {
    background-color: #ffffff;
    text-align: center;
    position: relative;
    height: 156upx;
  }

  .erweimaWrapper {
    position: absolute;
    left: 31.96upx;
    background: #444;
    margin-top: 15.98upx;
    width: 81%;
    border-radius: 7.96upx;
    z-index: 777;
    text-align: center;
    padding-bottom: 36upx;
    .header {
      position: relative;
      height: 183.98upx;
      .avatar {
        position: absolute;
        left: 50%;
        margin-top: 30upx;
        margin-left: -69.0upx;
        z-index: 9;
        color: #ffffff;
        display: inline-block;
        height: 138upx;
        width: 138upx;
        font-size: 39.98upx;
        text-align: center;
        border-radius: 50%;
        vertical-align: top;
      }
      .avatar .avatarInner {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 100%;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .avatar img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .realname {
      margin-top: 39.98upx;
      color: #fff;
      font-size: 27.98upx;
      /*font-weight: bold;*/
      span {
        position: relative;
        right: -6upx;
      }
      .icon {
        vertical-align: top;
        font-size: 39.98upx;
        color: #3c95f9;
      }
    }
    .erweimaSplite {
      margin-top: -60upx;
      span {
        display: inline-block;
        width: 123.98upx;
        margin: 0 6upx;
        border-bottom: 1.96upx solid #808080;
      }
      .icon {
        color: #252525;
        font-size: 99.98upx;
        position: relative;
        top: 33.98upx;
      }
    }
    .qRCode {
      margin-top: 19.96upx;
      position: relative;
      text-align: center;
      height: 379.96upx;
      div {
        position: absolute;
        left: 50%;
        margin-left: -189.98upx;
        width: 379.96upx;
        height: 379.96upx;
        border-radius: 7.96upx;
        background: #fff;
        padding: 19.96upx;
        img {
          width: 339.98upx;
          height: 339.98upx;
          margin-top: 19.96upx !important;
          border-radius: 7.96upx;
        }
      }
    }
    .qRhelp {
      margin-top: 15.98upx;
      text-align: center;
      color: #fff;
      font-size: 25.96upx;
    }
  }

  /*个人简历*/
  .specialColumn.dynamicWrapper {
    padding: 15.98upx 27.98upx;
  }

  .basic {
    background: #fff;
    .description {
      font-size: 27.98upx;
      color: #808080;
      /*padding: 21.98upx 27.98upx 25.96upx;*/
      line-height: 48upx;
      .noDynamic {
        text-align: center;
        font-size: 99.98upx;
        padding-top: 60upx;
        padding-bottom: 73.96upx;
        span {
          color: #C8C8C8;
          font-size: 24upx;
          display: block;
        }
        .empty-IconImg {
          width: 123.98upx;
          height: 177.98upx;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        &.goAddpage {
          span {
            margin-top: 19.96upx;
            line-height: 31.96upx;
          }
          .empty-IconImg {
            width: 199.96upx;
            height: 147.98upx;
            margin: 0 auto;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .releaseButton {
            margin-top: 33.98upx;
            button {
              width: 186upx;
              height: 72upx;
              border: none;
              color: #FFFFFF;
              font-size: 27.98upx;
              line-height: 27.98upx;
              background: #03AEF9;
              border-radius: 199.96upx;
            }
          }
        }
      }
    }
  }

  .separate {
    display: inline-block;
    height: 19.96upx;
    margin: 0 15.98upx;
    border-left: 1.96upx solid #c8c8c8;
  }

  .cardWrapper {
    margin-top: -138upx;
    padding: 0 31.96upx 30upx;
    width: 100%;
    .card {
      border-radius: 7.96upx;
      background: #ececee;
      width: 100%;
      position: relative;
      padding-bottom: 30upx;
      .erweima {
        width: 109.96upx;
        height: 102upx;
        img {
          width: 100%;
          height: 100%;
        }
      }
      /*关注*/
      .collect {
        position: absolute;
        font-size: 27.98upx;
        right: 30upx;
        top: 30upx;
        color: #ffffff;
        background: #03aef9;
        border-radius: 99.98upx;
        padding: 3.98upx 15.98upx;
        &.active {
          background: #dbdbdb;
          color: #b4b4b6;
        }
      }
      /*名片*/
      .Card {
        position: absolute;
        right: 109.96upx;
        top: 108upx;
        border: 1.96upx solid #b4b4b6;
        border-radius: 99.98upx;
        padding: 3.98upx 31.96upx;
        color: #444444;
        font-size: 27.98upx;

      }
      .share {
        position: absolute;
        font-size: 48upx;
        right: 37.96upx;
        top: 27.98upx;
        color: #808080;
      }
      .header {
        height: 183.98upx;
        margin-top: -39.98upx;
        position: relative;
        .expert {
          position: absolute;
          right: 12upx;
          bottom: 0upx;
          z-index: 10;
          .icon {
            font-size: 55.96upx;
            border: 3.98upx solid #FFF;
            border-radius: 50%;
            background: #FFF;
          }
        }
        .avatar {
          position: absolute;
          left: 50%;
          margin-left: -91.96upx;
          z-index: 9;
          color: #ffffff;
          display: inline-block;
          height: 181.96upx;
          width: 181.96upx;
          font-size: 39.98upx;
          text-align: center;
          border-radius: 50%;
          vertical-align: top;
        }
        .avatar .avatarInner {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          width: 100%;
          height: 100%;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .avatar img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .detail {
        margin-top: 19.96upx;
        text-align: center;
        .realname {
          font-weight: bold;
          span {
            &:nth-of-type(1) {
              position: relative;
              right: -6upx;
              color: #444444;
              font-size: 36upx;
            }
            &:nth-of-type(2) {
              padding: 1.96upx 9.98upx;
              position: relative;
              top: -6upx;
              font-style: normal;
              line-height: 30upx;
              font-size: 19.96upx;
              color: #FFFFFF;
              text-align: center;
              border-radius: 199.96upx;
              background: linear-gradient(180deg, #07D7FD 0%, #03AEF9 100%);
            }
          }
          .icon {
            vertical-align: bottom;
            font-size: 43.96upx;
            color: #3c95f9;
          }
        }
        .counter {
          width: 91%;
          margin-left: 4.5%;
          padding-top: 18upx;
          /*margin-top: 24upx;*/
          /*border-top: 1.96upx solid #dcdcdc;*/
          font-size: 25.96upx;
          color: #444444;
          overflow: hidden;
          .counterList {
            width: 25%;
            float: left;
            span {
              display: block;
              color: #808080;
              &:nth-of-type(1) {
                color: #444444;
                font-size: 37.96upx;
              }
            }
          }

        }
        .item {
          color: #808080;
          font-size: 25.96upx;
          margin: 13.96upx 13.96upx 3.98upx 13.96upx;
          .icon {
            color: #b4b4b6;
            font-size: 31.96upx;
          }
          &.industry span {
            border: 1.96upx solid #c8c8c8;
            display: inline-block;
            border-radius: 99.98upx;
            color: #808080;
            font-size: 24upx;
            padding: 0 13.96upx;
            margin: 0 3.98upx 15.98upx;
          }
          .my-detail {
            line-height: 31.96upx;
            margin-bottom: 18upx;
            span {
              font-size: 25.96upx;
              color: #B4B4B6;
              i {
                font-style: normal;
                color: #808080;
              }
            }
            .spot {
              display: inline-block;
              width: 3.98upx;
              height: 3.98upx;
              border-radius: 50%;
              background: #B4B4B6;
              margin: 0 0upx 6upx;
            }
          }
          .detailInfo {
            position: relative;
            padding-bottom: 24upx;
            .bot {
              right: 15.98upx;
              left: 15.98upx;
            }
            span {
              color: #808080;
              font-size: 27.98upx;
            }
            .icon {
              color: #808080;
              font-size: 24upx;
              vertical-align: -1.96upx;
              margin-left: -6upx;
            }
          }
        }
      }
    }
  }

  button {
    border-radius: 0;
    padding: 24upx 0;
    height: 96upx;
    margin: 0;
    font-size: 33.98upx;
  }

  .shareWrapper {
    .title {
      background: #ececee;
      text-align: center;
      font-size: 27.98upx;
      padding: 24upx 0;
    }
    .more {
      background: #fff;
      padding: 19.96upx;
      .single {
        width: 109.96upx;
        height: 109.96upx;
        margin: 0 19.96upx;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  #shareShowWrapper {
    position: absolute;
    right: 0;
    top: 0;
    .icon {
      color: #fff;
      position: absolute;
      right: 30upx;
      top: 19.96upx;
      font-size: 139.96upx;
    }
  }

  /*.vueWrapper {*/
  /*padding-bottom: 96upx;*/
  /*}*/

  .buttonWrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 99.98upx;
    overflow: hidden;
    background: #ffffff;
    &:before {
      position: absolute;
      top: 3.98upx;
      width: 100%;
      height: 2upx;
      content: '';
      transform: scaleY(0.5);
      background-color: #DCDCDC;
    }
    .edit {
      padding: 13.96upx 0;
      div {
        width: 685.96upx;
        height: 72upx;
        color: #ffffff;
        margin: 0 auto;
        font-size: 31.96upx;
        line-height: 72upx;
        text-align: center;
        border-radius: 15.98upx;
        background: #03AEF9;
      }
    }
    .consultWrapper {
      div {
        margin-top: 15.98upx;
      }
      .buttonLeft {
        float: left;
        width: 25%;
        color: #B4B4B6;
        font-size: 19.96upx;
        text-align: center;
        .icon {
          color: #808080;
          font-size: 39.98upx;
          text-align: center;
          display: block;
          margin-left: 73.96upx;
        }
      }
      .buttonRight {
        float: right;
        width: 529.96upx;
        height: 72upx;
        color: #ffffff;
        margin-right: 31.96upx;
        line-height: 72upx;
        text-align: center;
        border-radius: 15.98upx;
        background: #03AEF9;
      }
    }
  }

  .bottomButton {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 11;
  }

  .seeMoreWrapper {
    background: #fff;
    padding-bottom: 60upx;
    margin-top: -3.98upx;
    z-index: 5;
    position: relative;
    .seeMore {
      font-size: 27.98upx;
      color: #3c95f9;
      text-align: center;
      padding: 18upx 0 15.98upx;
      background: #fff;
      border: 1.96upx solid #dcdcdc;
      border-radius: 7.96upx;
      margin: 0 39.98upx;
    }
  }

  /***********评论和回复************/

  .news {
    padding: 24upx 27.98upx;
    overflow: hidden;
    position: relative;
  }

  .news div {
    font-size: 27.98upx;
    color: #808080;
    margin-bottom: 15.98upx;
  }

  .news a {
    display: inline-block;
    float: left;
    width: 1.96upx;
    height: 21.98upx;
    border-right: 1.96upx solid #c8c8c8;
    margin: 9.98upx 43.96upx 0 43.96upx;
  }

  .news p {
    float: left;
    font-size: 24upx;
    color: #808080;
    text-align: center;
  }

  .news p:nth-of-type(1) {
    text-align: left;
  }

  .news p span {
    font-size: 27.98upx;
    color: #444444;
    font-weight: 500;
  }

  /*.news p:nth-of-type(1) {
    text-align: right;
  }

  .news p:nth-of-type(2) {
    text-align: left;
  }*/

  .resumeWrapper {
    bottom: 96upx;
  }

  /*动态*/
  .dynamic {
    overflow: hidden;
    padding: 24upx 27.98upx;
    position: relative;
    p {
      float: left;
      font-size: 27.98upx;
      color: #808080;
      i {
        font-weight: 500;
        color: #444444;
      }
    }
    svg {
      float: right;
      font-size: 30upx;
      color: #808080;
    }
  }

  /*Ta的专栏*/
  .specialColumn {
    overflow: hidden;
    padding: 24upx 27.98upx;
    position: relative;
  }

  .specialColumn p {
    float: left;
    font-size: 24upx;
    color: #b4b4b6;

  }

  .specialColumn p span {
    color: rgb(128, 128, 128);
  }

  .specialColumn p i {
    display: inline-block;
    width: 1.96upx;
    height: 19.96upx;
    background: #c8c8c8;
    margin: 0  9.98upx -1.96upx 9.98upx;

  }

  .specialColumn svg {
    float: right;
    font-size: 30upx;
    color: #808080;
    margin-top: 7.96upx;
  }

  .specialColumn p:nth-of-type(1) {
    font-size: 27.98upx;
    color: #808080;
    margin-right: 9.98upx;
  }

  /*擅长*/
  .skilled {
    padding: 24upx 27.98upx 0upx 27.98upx;
    overflow: hidden;
    position: relative;
    .tags {
      float: left;
      margin-right: 15.98upx;
      margin-bottom: 21.98upx;
      span {
        float: left;
        background: #ececee;
        border-radius: 99.98upx;
        padding: 0upx 19.96upx;
        line-height: 48upx;
        font-size: 24upx;
        color: #444444;
      }
    }
    .skilledTags {
      .bot {
        left: 0;
        right: 0;
      }
      position: relative;
      color: #808080;
      font-size: 27.98upx;
      padding-bottom: 15.98upx;
      margin-bottom: 24upx;
    }
    .addTags {
      float: left;
      color: #03AEF9;
      padding: 0upx 19.96upx;
      line-height: 48upx;
      font-size: 24upx;
      vertical-align: sub;
      margin-bottom: 18upx;
      border-radius: 99.98upx;
      border: 1.96upx solid #DCDCDC;
      .icon {
        font-size: 24upx;
        color: #B4B4B6;
        margin-right: 6upx;
      }
    }
  }

  /*向他咨询*/
  .btn {
    border-top: 1.96upx solid #dcdcdc;
    width: 100%;
    height: 97.96upx;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .btn P {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .btn P:nth-of-type(1) {
    width: 32%;
    background: #f3f4f6;
    font-size: 27.98upx;
    color: #444444;

  }

  .btn P:nth-of-type(1) svg {
    font-size: 33.98upx;
    color: #808080;
    margin-right: 7.96upx;
    margin-top: -3.98upx;
  }

  .btn P:nth-of-type(2) {
    width: 68%;
    background: #03aef9;
    font-size: 33.98upx;
    color: #ffffff;
  }

  .grey {
    width: 100%;
    height: 19.96upx;
    background: #F3F4F5;
  }

  .newLink {
    margin-top: 18upx;
    // padding: 0 31.96upx;
    .newLinkBox {
      margin-top: 19.96upx;
      padding: 21.98upx 30upx 21.98upx;
      background: #F7F8FA;
      border-radius: 7.96upx;
      img {
        // width: 627.98upx;
        // height: 223.96upx;
        border-radius: 7.96upx;
      }
      .linkContent {
        font-size: 27.98upx;
        color: #808080;
        line-height: 39.98upx;
        margin-top: 7.96upx;
      }
      .link {
        font-size: 24upx;
        color: #B4B4B6;
      }
    }
  }
</style>