<style scoped>
  .mui-content {
    background-color: #ffffff;
  }

  .mui-bar .myicon {
    width: 31.96upx;
    height: 31.96upx;
    right: 15.98upx;
    top: 15.98upx;
  }

  p,
  span {
    margin: 0;
    padding: 0;
  }

  .info-professor {
    width: 100%;
    padding: 39.98upx 30upx 0upx 31.96upx;
    background: #F3F4F6;
    text-align: center;
    position: relative;
  }

  .info-look {
    position: absolute;
    top: 39.98upx;
    right: 30upx;
  }

  .info-look svg {
    font-size: 48upx;
    color: rgb(3, 174, 249);
    margin-bottom: -3.98upx;
  }

  .info-look span {
    font-size: 27.98upx;
    color: #444444;
  }

  .info-professor p:nth-of-type(1) img {
    width: 138upx;
    height: 138upx;
    border-radius: 50%;
  }

  .info-professor p:nth-of-type(1) span {
    display: inline-block;
    width: 36upx;
    height: 36upx;
    border-radius: 50%;
    background: #FFFFFF;
    margin-left: -36upx;
    margin-bottom: 12upx;
    position: relative;
  }

  .info-professor p:nth-of-type(1) span svg {
    font-size: 49.96upx;
    color: #808080;
    position: absolute;
    left: -7.96upx;
    top: -6upx;
  }

  .info-professor p:nth-of-type(2) {
    margin-top: 12upx;
  }

  .info-professor p:nth-of-type(2) span {
    font-size: 31.96upx;
    font-weight: 600;
    color: #444444;
  }

  .info-professor p:nth-of-type(2) svg {
    font-size: 39.98upx;
    color: rgb(3, 174, 249);
    margin-bottom: -3.98upx;
  }

  .info-professor p:nth-of-type(3) {
    margin-top: 13.96upx;
  }

  .info-professor p:nth-of-type(3) span {
    font-size: 25.96upx;
    color: #444444;
  }

  .info-professor p:nth-of-type(3) i {
    display: inline-block;
    width: 1.96upx;
    height: 25.96upx;
    background: #c8c8c8;
    margin: 0 6upx -3.98upx 6upx;
  }

  .info-professor p:nth-of-type(4) {
    margin-top: 13.96upx;
  }

  .info-professor p:nth-of-type(5) {
    margin-top: 12upx;
  }

  .info-professor p:nth-of-type(4),
  .info-professor p:nth-of-type(5) {
    font-size: 27.98upx;
    color: #444444;
  }

  .info-progresbar {
    width: 100%;
    height: 99.98upx;
    padding: 19.96upx 33.98upx 0 31.96upx;
    background: #F3F4F6;
  }

  .info-progresbar svg {
    float: right;
    font-size: 30upx;
    color: #fcc816;
    margin-left: 0upx;
    margin-top: 7.96upx;
  }

  .info-progresbar .info-progress {
    display: inline-block;
    width: 80%;
    height: 24upx;
    border-radius: 99.98upx;
    overflow: hidden;
    border: 0.98upx solid rgb(3, 174, 249);
    margin-bottom: -3.98upx;
  }

  .info-progresbar .info-progress > i {
    display: inline-block;
    font-style: normal;
    margin-bottom: 15.98upx;
    margin-left: -27.98upx;
    height: 24upx;
    background: rgb(3, 174, 249);
  }

  .info-progresbar .info-text {
    font-size: 24upx;
    color: #808080;
  }

  .paizhao {
    width: 92%;
    height: 87.98upx;
    margin-left: 4%;
    border:1.96upx solid rgb(220, 220, 220);
    text-align:center;
    line-height:87.98upx;
    background: #FFFFFF;
    font-size: 24upx;
    color: rgb(128, 128, 128);
    word-break: break-all;
    border-radius: 7.96upx;
  }
  .paizhao svg{
    font-size: 39.98upx;
    color: rgb(128, 128, 128);
  }

  .part3 .desc {
    margin-left: 79.96upx;
    font-size: 24upx;
  }

  .part3 .important {
    color: #F6A623;
  }

  .info-choose {
    width: 100%;
    height: 189.98upx;
    background: #FFFFFF;
    position: absolute;
    bottom: 0;
    padding-top: 25.96upx;
    padding-left: 78upx;
    z-index: 999;
    display: none;
  }

  .info-choose p {
    width: 90upx;
    height: 141.98upx;
    float: left;
  }

  .info-choose p:nth-of-type(2) {
    margin-left: 72upx;
  }

  .info-choose p svg {
    font-size: 96upx;
    color: rgb(220, 220, 220);
  }

  .info-choose p span {
    display: block;
    margin-left: 19.96upx;
    margin-top: 3.98upx;
    color: #808080;
    font-size: 25.96upx;
  }

  #mui-popover-action {
    background: #FFFFFF;
  }

  .mui-table-view:after {
    position: absolute;
    right: 31.96upx;
    bottom: 0;
    left: 27.98upx;
    height: 1.96upx;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #F2F2F2;
  }

  .mui-table-view-cell:after {
    position: absolute;
    right: 31.96upx;
    bottom: 0;
    left: 30upx;
    height: 1.96upx;
    content: '';
  }

  .mui-table-view:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1.96upx;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #fff;
  }

  @media (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    .part2 .progressBar {
      width: 319.96upx !important;
    }
  }

  @media (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    .part2 .progressBar {
      width: 319.96upx !important;
    }
  }
</style>
<style lang="less" scoped>
  .setUpList {
    padding: 21.98upx 31.96upx;
    background: #ffffff;
    display: flex;
    color: #444444;
    font-size: 31.96upx;
    position: relative;
    justify-content: space-between;
    &.openChat {
      padding-bottom: 0;
    }
    .icon {
      color: #808080;
      font-size: 25.96upx;
      margin-top: 7.96upx;
    }
    .switchestop {
      margin-top: 13.96upx;
    }
  }
</style>