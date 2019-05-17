<style scoped>
  .index-bar-container {

  }

  .index-bar-container .index-bar-main {
    position: relative;
  }

  .index-bar-container .index-bar-main .index-bar-content .index-bar-group {
    padding: 0;
    margin: 0;
    color: #656565;
  }

  .index-bar-container .index-bar-main .index-bar-content .index-bar-group .index-bar-cell {
    padding-left: 30upx;
    color: #000000;
    position: relative;
    background-color: #ffffff;
  }

  .index-bar-container .index-bar-main .index-bar-content .index-bar-group .index-bar-cell.index-bar-cell-head {
    font-size: 25.96upx;
    height: 49.96upx;
    line-height: 49.96upx;
    padding-left: 30upx;
    background-color: #f5f5f5;
  }

  .index-bar {
    position: fixed;
    right: 0;
    bottom: 93.98upx;
    z-index: 12;
    width: 45.98upx;
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 19.96upx;
    color: #316ccb;
  }

  .index-bar .index-bar-list {

    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    -webkit-flex-direction: column;
    flex-direction: column;
    list-style: none;
    height: 100%;
    padding: 0;
    width: 100%;
  }

  .index-bar .index-bar-item {
    color: #444;
    line-height: 33.98upx;
    font-size: 24upx;
    text-align: center;
    display: inline-block;
  }

  @media screen and (max-width: 370px) {
    .index-bar .index-bar-item {
      line-height: 27.98upx;
    }
  }

  .groupWrapper {
    background: #fff;
    overflow-y: scroll;
  }

  .bottomBorder:after {
    right: 0;
  }

  .groupWrapper:last-child:after {
    display: none;
  }

  .avatar {
    z-index: 0;
    color: #ffffff;
    background-color: #bdbdbd;
    display: inline-block;
    height: 87.98upx;
    width: 87.98upx;
    font-size: 39.98upx;
    text-align: center;
    border-radius: 50%;
  }

  .avatar .avatarInner {
    position: relative;
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

  .avatarInner .icon {
    position: absolute;
    right: -12upx;
    bottom: -1.96upx;
    font-size: 48upx;
    color: #03aef9;
  }

  .tap-active {
    font-size: 27.98upx;
    padding: 19.96upx 0 7.96upx;
  }

  .textBody {
    position: absolute;
    top: 24upx;
    right: 135.98upx;
    left: 135.98upx;
    vertical-align: top;
    color: #565656;
  }

  .textBody .desc {
    color: #b4b4b6;
  }

  .ibutton {
    float: right;
    border-radius: 99.98upx;
    width: 123.0upx;
    height: 54upx;
    text-align: center;
    line-height: 54upx;
    position: relative;
    top: 19.96upx;
    margin-right: 9.98upx;
    background: #03aef9;
    color: #fff;
  }

  .ibutton.active {
    background: #dcdcdc;
    color: #b4b4b6;
  }
  .index-bar-content{
    padding-right:60upx;
  }

</style>