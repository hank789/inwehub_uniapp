<style>
  /*旋转进度条*/
  .mescroll-downwarp .downwarp-progress,
  .mescroll-upwarp .upwarp-progress {
    width: 48upx;
    height: 48upx;
    border: none !important;
    margin: auto;
    background-image: url(../../statics/images/mescroll-progress.jpg);
    background-size: contain;
  }

  /*放大旋转动画*/
  .mescroll-rotate {
    -webkit-animation: animScale 0.6s linear, mescrollRotate 0.6s linear infinite;
    animation: animScale 0.6s linear, mescrollRotate 0.6s linear infinite;
  }

  @-webkit-keyframes animScale {
    0% {
      -webkit-transform: scale(1, 1) rotate(0deg)
    }
    50% {
      -webkit-transform: scale(1.2, 1.2) rotate(180deg)
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(360deg)
    }
  }

  @keyframes animScale {
    0% {
      transform: scale(1, 1) rotate(0deg)
    }
    50% {
      transform: scale(1.2, 1.2) rotate(180deg)
    }
    100% {
      transform: scale(1, 1) rotate(360deg)
    }
  }

  /*下拉刷新回调的提示*/
  .download-tip {
    z-index: 9900;
    position: absolute;
    top: -61.96upx;
    left: 0;
    width: 100%;
    height: 61.96upx;
    line-height: 61.96upx;
    font-size: 27.98upx;
    text-align: center;
    background-color: #03AEF9;
    color: #FFFFFF;
    -webkit-transition: top 300ms;
    transition: top 300ms;
  }
</style>
<style scoped="scoped">
  .mescrollListWrapper{
    position: absolute;
    width:100%;
    overflow: hidden;
    top: 0;
    left:0;
    bottom:0;
  }
</style>