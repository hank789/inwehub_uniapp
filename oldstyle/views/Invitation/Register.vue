<style scoped lang="less">

  .mui-content {
    background: #ececee;
  }

  /*领取特权部分*/
  .privilege_T {
    width: 100%;
    height: 975.0upx;
    position: relative;
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(#44474B), to(rgba(113, 117, 120, 1)));
    svg {
      font-size: 211.96upx;
      margin-left: 31.96upx;
      margin-top: -43.96upx;
    }
  }

  .privilege_avatar {
    width: 100%;
    height: 186upx;
    position: relative;
    top: -49.96upx;
    img {
      width: 145.96upx;
      height: 145.96upx;
      border: 3.98upx solid #A0A7AC;
      border-radius: 50%;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
      z-index: 12;
    }
  }

  .outermost {
    width: 180upx;
    height: 180upx;
    border-radius: 50%;
    border:9.0upx solid #767a80;
    opacity: 0.2;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    opacity: 0;
    z-index: 9;
    animation: myapper 2s  0.1s infinite;
    -moz-animation: myapper 2s 0.1s infinite; /* Firefox */
    -webkit-animation: myapper 2s 0.1s infinite; /* Safari and Chrome */
    -o-animation: myapper  2s 0.1s infinite; /* Opera */
    animation-direction: alternate;
    -webkit-animation-direction: alternate;
  }
  @keyframes myapper {
    0% {
      opacity:0.2;
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes myapper /* Firefox */
  {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes myapper /* Safari and Chrome */
  {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes myapper /* Opera */
  {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }


  .innermost {
    width: 159.98upx;
    height: 159.98upx;
    border: 7.96upx solid #757A7F;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 11;
    opacity: 0;
    animation: myopactity 2s infinite;
    -moz-animation: myopactity 2s  infinite; /* Firefox */
    -webkit-animation: myopactity 2s  infinite; /* Safari and Chrome */
    -o-animation: myopactity 2s  infinite; /* Opera */
    animation-direction: alternate;
    -webkit-animation-direction: alternate;
  }
  @keyframes myopactity {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes myopactity /* Firefox */
  {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes myopactity /* Safari and Chrome */
  {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes myopactity/* Opera */
  {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .privilege_share {
    width: 685.96upx;
    height: 123.98upx;
    margin: -19.96upx auto 0;
    background: #DCDCDC;
    text-align: center;
    padding-top: 15.98upx;
    position: relative;
    border-radius: 27.98upx;
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-left: 19.96upx solid transparent;
      border-right: 19.96upx solid transparent;
      border-bottom: 19.96upx solid #DCDCDC;
      position: absolute;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      left: 0upx;
      right: 0;
      top: -18upx;
      margin: auto;
    }
    span {
      &:nth-of-type(1) {
        display: block;
        font-size: 36upx;
        color: #444444;
        font-weight: 600;
        line-height: 49.96upx;
      }
      &:nth-of-type(2) {
        display: block;
        font-size: 27.98upx;
        color: #444444;
        line-height: 39.98upx;
      }
    }
  }

  .verification_b {
    text-align: center;
    font-size: 24upx;
    color: #b4b4b6;
    position: absolute;
    bottom: 25.96upx;
    left: 0;
    right: 0;
    margin: auto;
    span {
      color: #FFFFFF;
    }
  }
  .privilege_verification {
    height: 225.98upx;
    margin-top: 60upx;
    position: relative;
    .receivePrivilege {
      width: 300upx;
      height: 105.98upx;
      background: #03aef9;
      border-radius: 199.96upx;
      border-color: #03aef9;
      font-size: 36upx;
      color: #FFFFFF;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 99;
    }
    .receivePrivilege-img {
      width: 81.98upx;
      height: 57.98upx;
      position: absolute;
      left: 481.96upx;
      top: 43.96upx;
    }
  }
  /*信息部分*/
  .privilege_B {
    width: 100%;
    padding-bottom: 49.96upx;
    position: relative;
    margin-top: 75.98upx;
    text-align: center;
      span {
        &:nth-of-type(1) {
          display: block;
          color: #444444;
          line-height: 49.96upx;
          font-size: 36upx;
        }
        &:nth-of-type(2) {
          color: #444444;
          line-height: 39.98upx;
          font-size: 27.98upx;
          margin-top: 13.96upx;
        }
        &:nth-of-type(3) {
          color: #808080;
          line-height: 39.98upx;
          font-size: 27.98upx;
          margin-top: 31.96upx;
        }
      }
    div {
      margin-top: 42upx;
      img {
        width: 505.96upx;
        height: 693.98upx;
        margin: 0 auto;
      }
    }
  }
  .verification_bg {
    width: 100%;
    height: 241.96upx;
    position: absolute;
    bottom: 0;
    background: url("../../statics/images/graywave@3x.png") no-repeat;
    background-size: 100% 100%;
  }
</style>