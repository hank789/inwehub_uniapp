<style lang="less" rel="stylesheet/less" scoped>
  /*导航栏的样式*/
  .menu{
    width:100%;
    height:78upx;
    font-size:27.98upx;
    color: #444444;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
  .menu span:nth-of-type(1){
    position:relative;
    color: #03aef9;
  }
  .menu span:nth-of-type(1) i{
    position:absolute;
    width:54upx;
    height:3.0upx;
    border-radius: 99.98upx;
    background:#03aef9;
    top: 55.96upx;
    left: 0;
    right: 0;
    margin: auto;
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

  .component-textAndButton{
    padding: 0 0 0 31.96upx;
  }

  .container-list-people .item{
    padding:19.96upx 0 0 31.96upx;
  }
</style>