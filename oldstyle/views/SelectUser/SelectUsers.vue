<style lang="less" rel="stylesheet/less" scoped>

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
    background-color: #f3f4f6;
    padding: 19.96upx 30upx;
    .searchWrapper {
      svg{
        position: absolute;
        left: 49.96upx;
        top: 39.98upx;
        color: #c8c8c8;
      }
      input {
        height: 69.98upx;
        font-size: 27.98upx;
        border-radius: 99.98upx;
        background: #fff;
        border: 1.96upx solid #dcdcdc;
        margin-bottom: 9.98upx;
        padding-left: 60upx;
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
  .selectUser{
    float: right;
    position: relative;
    right: 9.98upx;
    width: 45.98upx;
    height: 99.98upx;
  }
  .select{
    width:45.98upx;
    height:45.98upx;
    border-radius: 50%;
    background: #FFFFFF;
    color: #03aef9;
    border: 1.96upx solid #dcdcdc;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin: auto;
  }
  .select.active{
    background:#FFFFFF;
    border: 1.96upx solid #FFFFFF;


  }
  .select.active svg{
    font-size:45.98upx;
    position: absolute;
    color:#03aef9;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin: auto;
  }
  /*搜索有确定按钮的*/
  .searchContainer{
    width:100%;
    height:69.98upx;
    background:#f3f4f6;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin-bottom: 9.98upx;
  }
  .searchContainer p:nth-of-type(1){
    width: 80%;
    height:67.96upx;
    background: #FFFFFF;
    border-radius: 99.98upx;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    /*justify-content:space-between;*/
    align-items:center;
    padding:0 24upx;
  }
  .searchContainer p:nth-of-type(2){
    width:17%;
    height:67.96upx;
    background:#03aef9;
    border-radius:99.98upx;
    text-align: center;
    line-height: 67.96upx;
    font-size:27.98upx;
    color: #FFFFFF;
  }
  .searchContainer input{
    width:85%;
    height:100%;
    margin: 0;
    border:none;
    padding: 0;
    padding-left: 0;
    font-size:27.98upx;
    color:#444444;
    float: left;
    margin-left: 19.96upx;
  }
  .searchContainer p svg{
    color:#c8c8c8;
    font-size: 33.98upx;
  }
  .searchContainer span{
    width:36upx;
    height:36upx;
    background: #c8c8c8;
    border-radius: 50%;
    position: relative;
    float:right;
  }
  .searchContainer span svg{
    color: #FFFFFF;
    position: absolute;
    right:0;
    left:0;
    top:0;
    bottom:0;
    margin:auto;
  }
  input::-webkit-input-placeholder { /*WebKit browsers*/
    color:#c8c8c8;
    font-size: 27.98upx;
  }
</style>