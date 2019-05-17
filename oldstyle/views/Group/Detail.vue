<style lang="less" scoped>
  .mui-content {
    background: #ffffff;
  }
  .showHeader {
    display: block !important;
  }
  .content-header-hide {
     display: none;
   }
  .mui-bar-nav {
    transition: all ease-out .3s;
    top: 0 !important;
    .openNotice {
      float: right;
      position: relative;
      z-index: 9;
      font-size: 48upx;
      padding-top: 21.0upx;
    }
    .share {
      float: right;
      padding-right: 15.0upx;
      padding-left: 34.66upx;
    }
  }
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
  .gray {
    width: 100%;
    height: 19.96upx;
    background: #f3f4f6;
  }
  .menu {
    width: 100%;
    height: 78upx;
    background: #FFFFFF;
    font-size: 27.98upx;
    color: #444444;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    line-height: 78upx;
    position: relative;
    span {
      position: relative;
      margin-bottom: -21.98upx;
      &.bold {
        font-weight: 500;
      }
      i {
        position: absolute;
        width: 55.96upx;
        height: 3.0upx;
        border-radius: 99.98upx;
        background: #03aef9;
        top: 73.96upx;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
  .groups-list {
    /*margin-top: 97.96upx;*/
  }
  .listWrapper{
  }
  .Nothing {
    width: 421.96upx;
    position: absolute;
    font-size: 24upx;
    color: rgba(200,200,200,1);
    left: 0;
    right: 0;
    top: 675.0upx;
    text-align: center;
    margin: 75.0upx auto 0;
    svg {
      font-size: 120upx;
      margin-bottom: 9.98upx;
    }
  }
  .join {
    width: 685.96upx;
    height: 87.98upx;
    position: absolute;
    right:0;
    left:0;
    z-index: 99;
    bottom: 30upx;
    margin: auto;
    color: #FFFFFF;
    line-height: 87.98upx;
    text-align: center;
    font-size: 31.96upx;
    background: #03AEF9;
    border-radius: 99.98upx ;
    font-family:PingFangSC-Medium;
    box-shadow: 0upx 1.96upx 19.96upx 0upx #CDD7DC;
    &.addGroup {
      width: 187.96upx;
    }
    &.wait{
      color: #b4b4b6;
      background: #dcdcdc;
      box-shadow: 0upx 1.96upx 19.96upx 0upx #CDD7DC;
    }
  }
  .headerShare {
    position: absolute;
    right: 31.96upx;
    top: 19.96upx;
    .icon {
      color: #3C3E44;
      font-size: 48upx;
    }
  }
  .headerNotice {
    right: 120upx;
  }
  .header {
    background: #1C3F6D;
    position: relative;
    height: 297.98upx;
    border-bottom-left-radius: 39.98upx;
    border-bottom-right-radius: 39.98upx;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-bottom-left-radius: 39.98upx;
      border-bottom-right-radius: 39.98upx;
    }
    .backMask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      border-bottom-left-radius: 39.98upx;
      border-bottom-right-radius: 39.98upx;
      background:linear-gradient(180deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.1) 100%);
    }
    .headerBack {
      /*width: 100%;*/
      display: flex;
      height: 87.98upx;
      position: absolute;
      top: 0;
      z-index: 10;
      padding-left: 24upx;
      .icon {
        margin-top: 19.96upx;
        font-size: 45.98upx;
        color: #FFFFFF;
      }
    }
    .openNotice {
      position: absolute;
      top: 21.98upx;
      right: 120upx;
      .icon {
        font-size: 48upx;
        color: #ffffff;
      }
      &.share {
        right: 31.96upx;
      }
    }
    .headPhotowrapper {
      position: absolute;
      bottom: -48upx;
      left: 33.98upx;
      z-index: 100;
      .headImages {
        width: 111.98upx;
        height: 111.98upx;
        text-align: center;
        background: #E3E3E3;
        border-radius: 7.96upx;
        border: 1.96upx solid #ffffff;
        img {
          width: 100%;
          height: 100%;
          border-radius: 6upx;
          object-fit: cover;
        }
      }
    }
  }

  .groupWrapper {
    margin-top: 79.96upx;
    padding: 0 31.96upx 25.96upx;
    position: relative;
    .groupNAmeWrapper {
      color: #444444;
      font-size: 39.98upx;
      .font-family-medium {
        line-height: 55.96upx;
      }
    }
    .groupDescribeWrapper {
      margin-top: 6upx;
      color: #B4B4B6;
      font-size: 24upx;
      line-height: 31.96upx;
    }
    .goMoreoPerations {
      position: absolute;
      top: 24upx;
      right: 31.96upx;
      .icon {
        font-size: 25.96upx;
      }
    }
    .groupDescription {
      color: #808080;
      font-size: 27.98upx;
      line-height: 43.96upx;
      margin-top: 25.96upx;
    }
  }

  .group-text {
    position: relative;
    padding: 21.98upx 31.96upx;
    span {
      color: #444444;
      font-size: 31.96upx;
    }
  }
  .groupIntroduce {
    padding: 19.96upx 31.96upx;
    span {
      color: #808080;
      font-size: 27.98upx;
      line-height: 43.96upx;
    }
  }
  .goHairShareWrapper {
    position: absolute;
    bottom: 39.98upx;
    right: 31.96upx;
    z-index: 9;
    .goHairShareBack {
      width: 87.98upx;
      height: 87.98upx;
      text-align: center;
      /*line-height: 96upx;*/
      background: #03AEF9;
      border-radius: 50%;
      position: relative;
      box-shadow:0upx 1.96upx 19.96upx 0upx rgba(205,215,220,1);
      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 43.96upx;
        color: #ffffff;
      }
    }
  }

</style>
<style>
  .group-detail-feed .feed-group{
    display: none;
  }
</style>