<style lang="less" scoped>
  /*滚动区域*/
  .mui-content {
    background: #ffffff;
    .ask{
      width:100%;
      height:67.96upx;
      padding: 0 4%;
      .ask_img{
        width:100%;
        height:100%;
        background: #cccccc;
        position: relative;
        background: url("../../statics/images/askCommunity_bg@3x.png") no-repeat;
        background-size: cover;
        span{
          position: absolute;
          font-size: 27.98upx;
          color: #444444;
          left: 120upx;
          line-height: 72upx;
        }
        i{
          display: inline-block;
          font-style: normal;
          width: 60upx;
          height: 33.98upx;
          font-size: 24upx;
          color: #FFFFFF;
          border-radius: 7.96upx;
          background: #fa4975;
          text-align: center;
          line-height: 33.98upx;
          position: absolute;
          top: 18upx;
          left: 39.76upx;
          &::after {
            content: "";
            display: block;
            width: 12upx;
            height: 12upx;
            background: #fa4975;
            position: absolute;
            -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
            right: -6upx;
            top: 0upx;
            bottom: 0;
            margin: auto;
          }
        }
      }
    }
    .listWrapper{
      top:67.96upx !important;
    }
    .switch{
      position: fixed;
      width:147.98upx;
      height:67.96upx;
      background: #444444;
      box-shadow: 0upx 1.96upx 19.96upx 0upx rgba(205,215,220,0.5);
      opacity:0.85;
      border-radius:99.98upx;
      font-size:30upx;
      color: #FFFFFF;
      bottom: 39.98upx;
      right:31.96upx;
      z-index: 9;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      svg{
        font-size: 33.98upx;
        margin-right: 6upx;
      }
    }
  }


</style>