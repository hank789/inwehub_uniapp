<style scoped>
  .messageWrapper {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }

  .message {
    position: fixed;
    top: 0;
    width: 100%;
    background: #444;
    color: #fff;
    padding: 39.98upx;
    z-index: 999;
    font-size: 25.96upx;
  }

  .message:after {
    bottom: 19.96upx;
    border-radius: 1.96upx;
    left: 50%;
    margin-left: -33.98upx;
    position: absolute;
    content: ' ';
    width: 67.96upx;
    height: 3.98upx;
    background: #d8d8d8;
  }

  @-webkit-keyframes slideUp {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    100% {
      visibility: hidden;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }

  @keyframes slideUp {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    100% {
      visibility: hidden;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }

  .slideUp {
    -webkit-animation-name: slideUp;
    animation-name: slideUp;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes slideDown {
    0% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideDown {
    0% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .slideDown {
    -webkit-animation-name: slideDown;
    animation-name: slideDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
</style>