<style lang="less">
  .feed-currency {
    .line-river-after {
      margin-top: 19.96upx;
      &:after {
        left: 31.96upx;
        right: 31.96upx;
      }
    }
    .currency-title {
      color: #444444;
      font-size: 27.98upx;
      line-height: 43.96upx;
      margin-top: 1.96upx;
      letter-spacing: 0.98upx;
    }
    .userInfoWrapper {
      padding: 0 31.96upx !important;
      .mui-media-body {
        margin-left: 75.98upx;
        color: #444444;
        font-size: 25.96upx;
        font-family: PingFangSC-Medium;
        .detail {
          color: #B4B4B6;
          font-size: 21.98upx;
          font-family: PingFangSC-Regular;
        }
      }
    }
  }

  .container-feed-item {
    position: relative;
    margin-top: 39.98upx;
    .feed-address {
      color: #B4B4B6;
      font-size: 21.98upx;
      position: absolute;
      top: 31.96upx;
      left: 223.96upx;
    }
    .feed-title {
      padding: 0 31.96upx;
    }
    .feed-open-all {
      color: #03AEF9;
      font-size: 25.96upx;
      margin-top: 15.98upx;
      display: none;
      padding: 0 31.96upx;
      line-height: 36upx;
      &.showOpenAll {
        display: block;
      }
    }

    .container-images {
      padding: 19.96upx 30upx 0;

    }
    .container-feed-link-box {
      padding: 0 31.96upx;
      .feed-link-box {
        background: #F7F8FA;
        border-radius: 7.96upx;
        padding: 19.96upx;
        display: flex;
        margin-top: 24upx;
        margin-bottom: 19.96upx;
        .linkImg {
          width: 87.98upx;
          height: 87.98upx;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 7.96upx;
          }
        }
        .linkText {
          width: 537.98upx;
          margin-left: 19.96upx;
          span {
            &:nth-of-type(1) {
              width: inherit;
              color: #444444;
              font-size: 25.96upx;
              line-height: 39.98upx;
              letter-spacing: 0.98upx;
            }
            &:nth-of-type(2) {
              color: #B4B4B6;
              font-size: 21.98upx;
            }
          }
        }
      }
    }
    .container-pdf-box {
      padding: 0 31.96upx;
      .feed-pdf-box {
        background: #F7F8FA;
        border-radius: 7.96upx;
        padding: 19.96upx 19.96upx;
        display: flex;
        margin-top: 19.96upx;
        .pdfIcon {
          width: 87.98upx;
          height: 87.98upx;
          text-align: center;
          border-radius: 7.96upx;
          background: #DF6F5A;
          .icon {
            color: #ffffff;
            font-size: 67.96upx;
            margin-top: 9.98upx;
          }
        }
        .pdfText {
          width: 537.98upx;
          margin-left: 19.96upx;
          span {
            width: inherit;
            color: #444444;
            font-size: 25.96upx;
            line-height: 39.98upx;
            letter-spacing: 0.98upx;
          }
        }
      }
    }
    .feed-group {
      width: fit-content;
      height: 42upx;
      color: #444444;
      padding: 0 19.96upx;
      font-size: 21.98upx;
      line-height: 42upx;
      background: #F7F8FA;
      border-radius: 199.96upx;
      display: flex;
      margin-top: 19.96upx;
      margin-left: 31.96upx;
      &.moveUp {
        margin-top: 9.98upx;
      }
      img {
        width: 21.98upx;
        height: 21.98upx;
        margin-top: 9.98upx;
        margin-right: 6upx;
      }
    }
    .feed-moreOperation {
      margin-top: 19.96upx;
      color: #808080;
      display: flex;
      padding: 0 25.96upx;
      justify-content: space-between;
      .feed-mord {

        padding: 9.98upx;
        color: #808080;
      }
      .feed-operation {
        position: relative;
        padding-top: 9.98upx;
        span {
          padding: 9.98upx 19.96upx;
          font-size: 21.98upx;
          color: #444444;
          /*margin-left: 39.98upx;*/
          .icon {
            margin-right: 9.98upx;
            color: #808080;
            font-size: 30upx;
          }
          i {
            font-style: normal;
          }
        }
        .first {
          margin-right: 90upx;
        }
        .posiZan {
          position: absolute;
          top: 6upx;
          right: -13.96upx;
          .upvoted {
            width: 61.96upx;
            height: 61.96upx;
            display: inline-block;
            position: absolute;
            top: -7.50upx;
            right: 30upx;
            svg {
              position: absolute;
              top: 0;
              right: 0;
            }
          }
        }
        .activeSpan {
          color: #B4B4B6;
          .icon {
            color: #03AEF9;
          }
          .numberColor {
            color: #03AEF9;
          }
        }
      }
    }
  }

  .container-feed-questionAnswer {
    position: relative;
    margin-top: 39.98upx;
    .line-river-after {
      margin-top: 30upx;
    }
    .question-titles {
      padding: 0 31.96upx;
    }
    .question-statistics {
      margin-top: 13.96upx;
      color: #B4B4B6;
      padding: 0 31.96upx;
      line-height: 30upx;
      .question-price {
        &.active-yellow {
          color: #235280;
          background: #FCC816;
        }
        color: #808080;
        font-size: 19.96upx;
        line-height: 27.98upx;
        padding: 1.96upx 9.98upx;
        background: #DCDCDC;
        display: inline-block;
        border-radius: 7.96upx;
      }
      span {
        font-size: 21.98upx;
        i {
          width: 3.98upx;
          height: 3.98upx;
          background: #B4B4B6;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .container-answer-box {
      padding: 0 31.96upx;
      .question-answer-box {
        width: 685.96upx;
        padding: 13.96upx 19.96upx;
        border-radius: 7.96upx;
        background: #F7F8FA;
        margin-top: 25.96upx;
        .answerPriceBJ {
          color: #235280;
          font-size: 19.96upx;
          padding: 1.96upx 9.98upx;
          line-height: 27.98upx;
          border-radius: 7.96upx;
          background: #FCC816;
          display: inline-block;
        }
        .tagsAndQuestionTitle {
          color: #808080;
          font-size: 25.96upx;
          line-height: 39.98upx;
          margin-left: -7.96upx;
          i {
            color: #235280;
            font-style: normal;
          }
        }
      }
    }
  }

  /*点评样式*/

  .commentList {
    margin-top: 39.98upx;
    .line-river-after {
      margin-top: 19.96upx;
      &:after {
        left: 31.96upx;
        right: 31.96upx;
      }
    }
    .container-images {
      margin-top: 19.96upx;
    }
    .commentUser {
      display: flex;
      padding: 0 31.96upx;
      justify-content: space-between;
      .userInfo {
        display: flex;
        .avatar {
          width: 67.96upx;
          height: 67.96upx;
          margin-right: 15.98upx;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
        }
        .userName {
          /*margin-top: -3.98upx;*/
          .border-football {
            &:after {
              border-radius: 15.98upx;
              border-color: #FA4975;
            }
          }
          .userNameTop {
            display: flex;
            div {
              height: 30upx;
              color: #FA4975;
              font-size: 19.96upx;
              padding: 0 9.98upx;
              line-height: 30upx;
              margin-left: 6upx;
              /*display: inline-block;*/
            }
          }
          span {
            &:nth-of-type(1) {
              color: #444444;
              font-size: 25.96upx;
              line-height: 36.98upx;
            }
            &:nth-of-type(2) {

            }
          }
          .time {
            color: #B4B4B6;
            font-size: 21.98upx;
            line-height: 30upx;
            margin-top: 3.98upx;
          }
        }
      }
      .mark {
        color: #FCC816;
        font-size: 25.96upx;
        line-height: 36.98upx;
      }
    }
    .commentFeedTitle {
      padding: 0 31.96upx;
      color: #444444;
      font-size: 27.98upx;
      line-height: 43.96upx;
      margin-top: 12upx;
      letter-spacing: 0.98upx;
    }
    .feed-open-all {
      color: #03AEF9;
      font-size: 25.96upx;
      margin-top: 15.98upx;
      display: none;
      padding: 0 31.96upx;
      line-height: 36upx;
      &.showOpenAll {
        display: block;
      }
    }
    .feed-moreOperation {
      margin-top: 19.96upx;
      color: #808080;
      display: flex;
      padding: 0 25.96upx;
      margin-bottom: 19.96upx;
      justify-content: space-between;
      .feed-mord {

        padding: 9.98upx;
        color: #808080;
      }
      .feed-operation {
        padding-top: 9.98upx;
        position: relative;
        span {
          padding: 9.98upx 19.96upx;
          font-size: 21.98upx;
          color: #444444;
          /*margin-left: 39.98upx;*/
          .icon {
            margin-right: 9.98upx;
            color: #808080;
            font-size: 30upx;
          }
          i {
            font-style: normal;
          }
        }
        .activeSpan {
          color: #B4B4B6;
          .icon {
            color: #03AEF9;
          }
          .yizan {
            font-size: 30upx;
            margin-right: 13.50upx;
          }
          .numberColor {
            color: #03AEF9;
          }
        }
        .first {
          margin-right: 90upx;
        }
        .posiZan {
          position: absolute;
          top: 6upx;
          right: -13.96upx;
          .upvoted {
            width: 61.96upx;
            height: 61.96upx;
            display: inline-block;
            position: absolute;
            top: -7.50upx;
            right: 30upx;
            /*padding: 0 0 0 39.98upx;*/
            svg {
              position: absolute;
              top: 0;
              right: 0;
            }
          }
        }
      }
    }
  }
  .link {
    padding: 19.96upx 31.96upx 0;
    /*margin-bottom: 34.96upx;*/
    .linkBox {
      padding: 19.96upx;
      border-radius: 7.96upx;
      background: #F7F8FA;
      .linkIimg {
        width: 87.98upx;
        height: 87.98upx;
        float: left;
        text-align: center;
        line-height: 99.98upx;
        margin-right: 19.96upx;
        border-radius: 7.96upx;
        background: #ECECEE;
        .icon {
          color: #C8C8C8;
          font-size: 55.96upx;
        }
      }
      .productLogo {
        width: 87.98upx;
        height: 87.98upx;
        float: left;
        margin-right: 19.96upx;
        img {
          width: 100%;
          height: 100%;
          border-radius: 7.96upx;
          object-fit: cover;
        }
        &.border-football {
          &:after {
            border-radius: 15.98upx;
            border-color: #DCDCDC;
          }
        }
      }
      .linkContent {
        font-size: 27.98upx;
        color: #808080;
        .seat {
          width: 19.96upx;
          height: 30upx;
          display: inline-block;
        }
        div {
          word-break: break-all;
        }
        .text-line-2 {
          color: #808080;
        }
        .mark {
          padding: 0;
          margin-top: 0;
          .text {
            color: #FCC816;
            margin-top: 0 !important;
          }
          i {
            width: 3.98upx;
            height: 3.98upx;
            background: #B4B4B6;
            border-radius: 50%;
            margin: 19.50upx 9.98upx 0;
          }
          .comment {
            color: #B4B4B6;
            font-size: 21.98upx;
          }
        }
      }
    }
    .mark {
      display: flex;
      padding: 0 31.96upx;
      margin-top: -15.98upx;
      margin-bottom: 13.96upx;
      .stars {
        color: #FCC816;
      }
      .text {
        color: #FCC816;
        font-size: 21.98upx;
        margin-top: 3.98upx;
        margin-left: 6upx;
      }
    }
  }
</style>