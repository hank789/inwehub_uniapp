<style lang="less" rel="stylesheet/less" scoped>

  .container-searchMenu {
    margin-top: 0;
  }
  /**/

  .bot {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  /*搜索区域*/

  .indexHeader {
    background-color: #FFFFFF;
    padding: 19.96upx 30upx;
    .searchWrapper {
      input {
        height: 67.96upx;
        font-size: 27.98upx;
        border-radius: 99.98upx;
        background: #fff;
        border: 1.96upx solid #dcdcdc;
        margin-bottom: 9.98upx;
        &::placeholder {
          color: #c8c8c8;
        }
      }
    }
    .notFound {
      font-size: 25.96upx;
      color: #808080;
      span {
        color: #03aef9;
      }
    }
  }

  .indexTitle {
    background: #ececee;
    font-size: 25.96upx;
    height: 49.96upx;
    line-height: 49.96upx;
    padding: 0 30upx;
    color: #808080;
  }

  .mui-content {
    background: #fff;
  }

  .textBody {
    width: 50%;
  }
</style>