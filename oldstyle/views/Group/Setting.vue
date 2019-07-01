<style scoped lang="less">
  .bot {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .mui-content{
    background: #ffffff;
  }
  .apply{
    width:92%;
    height:87.98upx;
    margin-left: 4%;
    line-height: 87.98upx;
    font-size: 31.96upx;
    color: #444444;
    font-weight: 500;
    position: relative;
  }
  /*列表区域*/
  .cions-list{
    overflow: hidden;
    padding: 0 31.96upx;
    .memberTitle {
      color: #808080;
      font-size: 25.96upx;
      line-height: 67.96upx;
    }
    .memberList {
      position: relative;
      height:127.96upx;
      div {
        float: left;
      }
      .cions-avatar {
        position: relative;
        width:87.98upx;
        height:87.98upx;
        border-radius:50%;
        background: #cccccc;
        margin-top: 19.96upx;
        img {
          width:87.98upx;
          height:87.98upx;
          border-radius:50%;
        }
        svg {
          position: absolute;
          font-size: 39.98upx;
          right: -9.98upx;
          bottom: -3.98upx;
        }
      }
      .detail{
        /*width: 30%;*/
        margin-top: 27.98upx;
        font-size:27.98upx;
        color: #565656;
        margin-left: 15.98upx;
        span {
          &:nth-of-type(1) {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          &:nth-of-type(2) {
            width:399.98upx;
            font-size:24upx;
            color: #b4b4b6;
            margin-top: -3.98upx;
          }
        }
      }
      .fouce {
        width:121.96upx;
        height:54upx;
        background:#03aef9;
        border-radius: 99.98upx;
        text-align: center;
        line-height: 54upx;
        font-size:27.98upx;
        color: #ffffff;
        margin-top: 36.98upx;
        float: right;
      }
      .grey {
        color: #b4b4b6;
        background: #dbdcdb;
      }
    }
  }
  .space{
    margin-right: 19.96upx;
  }
  .vue-switcher--bold div {
    width: 102upx;
    height: 61.96upx;
  }
  .setUpList {
    padding: 21.98upx 31.96upx;
    background: #ffffff;
    display: flex;
    color: #444444;
    font-size: 30upx;
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