<style scoped="scoped">
  #close {
    position: absolute;
    width: 312upx;
    left: 50%;
    margin-left: -159.98upx;
    bottom: 15%;
    padding: 19.96upx;
    color: #03aef9;
    border-color: #03aef9;
  }

  .item-logo {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .item-logo a {
    width: 399.98upx;
    height: 399.98upx;
    display: block;
    border: 1.96upx solid #FFFFFF;
    border-color: rgba(255, 255, 255, 0.5);
    text-align: center;
    line-height: 399.98upx;
    border-radius: 50%;
    font-size: 79.96upx;
    color: #fff;
    position: absolute;
    top: 15%;
    left: 50%;
    margin-left: -199.96upx;
  }

  .animate {
    position: absolute;
    left: 0;
    top: 60%;
    width: 100%;
    color: #fff;
    display: -moz-box;
  }

  .animate h2 {
    text-align: center;
    margin-bottom: 39.98upx;
  }

  .animate li {
    width: 50%;
    height: 60upx;
    line-height: 60upx;
    list-style: none;
    font-size: 31.96upx;
    text-align: right;
  }

  .animate li:nth-child(3) {
    text-align: left;
    float: right;
  }

  .animated {
    -webkit-animation-duration: 1s;
    -webkit-animation-play-state: paused;
    -webkit-animation-fill-mode: both;
  }

  .guide-show .bounceInDown {
    -webkit-animation-name: bounceInDown;
    -webkit-animation-play-state: running;
    -webkit-animation-delay: 1s;
    display: block;
  }

  .guide-show .bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    display: block;
    -webkit-animation-play-state: running;
  }

  .guide-show .bounceInRight {
    -webkit-animation-name: bounceInRight;
    display: block;
    -webkit-animation-play-state: running;
    -webkit-animation-delay: 0.5s;
  }

  @-webkit-keyframes bounceInDown {
    0%, 60%, 75%, 90%, 100% {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -6000upx, 0);
      transform: translate3d(0, -6000upx, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 49.96upx, 0);
      transform: translate3d(0, 49.96upx, 0);
    }
    75% {
      -webkit-transform: translate3d(0, -9.98upx, 0);
      transform: translate3d(0, -9.98upx, 0);
    }
    90% {
      -webkit-transform: translate3d(0, 6upx, 0);
      transform: translate3d(0, 6upx, 0);
    }
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  @-webkit-keyframes bounceInLeft {
    0%, 60%, 75%, 90%, 100% {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-6000upx, 0, 0);
      transform: translate3d(-6000upx, 0, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(49.96upx, 0, 0);
      transform: translate3d(49.96upx, 0, 0);
    }
    75% {
      -webkit-transform: translate3d(-19.96upx, 0, 0);
      transform: translate3d(-19.96upx, 0, 0);
    }
    90% {
      -webkit-transform: translate3d(9.98upx, 0, 0);
      transform: translate3d(9.98upx, 0, 0);
    }
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  @-webkit-keyframes bounceInRight {
    0%, 60%, 75%, 90%, 100% {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    0% {
      opacity: 0;
      -webkit-transform: translate3d(6000upx, 0, 0);
      transform: translate3d(6000upx, 0, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(-49.96upx, 0, 0);
      transform: translate3d(-49.96upx, 0, 0);
    }
    75% {
      -webkit-transform: translate3d(19.96upx, 0, 0);
      transform: translate3d(19.96upx, 0, 0);
    }
    90% {
      -webkit-transform: translate3d(-9.98upx, 0, 0);
      transform: translate3d(-9.98upx, 0, 0);
    }
    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  .mui-slider-indicator .mui-indicator {
    background: #dcdcdc;
    box-shadow: none;
    width: 18upx;
    height: 18upx;
    margin: 1.96upx 1.96upx;
  }

  .mui-slider-indicator .mui-active.mui-indicator {
    background: #41cff9;
  }

  .mui-slider-indicator {
    bottom: 78upx;
  }

  .guide {
    background-repeat: no-repeat;
    background-position: center 24%;
    background-size: contain;
    background-color: #f2fbfe;
  }
  .guide .guide-text {
    margin-left: -234upx;
    position: absolute;
    left: 50%;
    top: 66%;
    width: 468upx;
    text-align: center;
    margin-top: 97.96upx;
  }
  .guide .guide-text div:nth-of-type(1) {
    color: #03AEF9;
    font-size: 42upx;
  }
  .guide .guide-text div:nth-of-type(2) {
    color: #A0A0A0;
    font-size: 30upx;
    margin-top: 25.96upx;
  }
  .guide .guide-text div:nth-of-type(2) i {
    display: inline-block;
    width: 3.98upx;
    height: 3.98upx;
    background: #A0A0A0;
    border-radius: 50%;
    /*margin-bottom: 6upx;*/
    margin: 0 6upx 7.96upx;
  }


  .guide-0 {
    background-image: url(../statics/images/guide2_02.jpg);
    background-color: #ffffff;
  }

  .guide-1 {
    background-image: url(../statics/images/guide2_03.png);
    background-color: #ffffff;
  }

  .guide-2 {
    background-image: url(../statics/images/guide2_04.jpg);
    background-color: #ffffff;
  }

  .guide-3 {
    background-image: url(../statics/images/guide_04.png);
    background-color: #ffffff;
  }
  .guide-4 {
    background-color: #ffffff;
  }
  .guide-4 .logo {
    margin-left: -234upx;
    position: absolute;
    left: 50%;
    top: 20%;
    width: 468upx;
    height: 265.96upx;
    background-image: url(../statics/images/guide_05.png);
    background-color: #ffffff;
    background-size: 92%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .guide-4 .logo .title {
    font-size: 30upx;
    color: #747576;
    text-align: center;
    position: absolute;
    bottom: 13.96upx;
    width: 100%;
  }
</style>