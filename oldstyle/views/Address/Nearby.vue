<style scoped="scoped">
  ul,
  li,
  p,
  span,
  a,
  i,
  input{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .bot {
    position: absolute;
    right: 4%;
    bottom: 0;
    left: 4%;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .bottom {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  .mui-content {
    background:#fefefe;
  }
  /*搜索框*/
  .searchContainer{
    width:100%;
    height:108upx;
    background:#ffffff;
    padding-top: 19.96upx;
    position: absolute;
    top:0;
  }
  .searchContainer p{
    width:92%;
    height:67.96upx;
    background: #f3f4f6;
    border-radius: 99.98upx;
    margin-left: 4%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    /*justify-content:space-between;*/
    align-items:center;
    padding:0 24upx;
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
    background: #f3f4f6;
  }
  .searchContainer input::placeholder{
    color: #c8c8c8;
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
  /*申请添加*/
  .apply{
    width:100%;
    height:87.98upx;
    padding: 0 4%;
    line-height: 87.98upx;
    position: absolute;
    top:108upx;
  }
  .apply p:nth-of-type(1){
    float: left;
    font-size:27.98upx;
    color:#235280;
  }
  ul{
    width:100%;
    padding: 0 4%;
    overflow: hidden;
  }
  ul li{
    width:100%;
    height:117.98upx;
    padding: 18upx 0 24upx;
    position: relative;
  }
  ul li p:nth-of-type(1){
    font-size:27.98upx;
    color: #444444;
  }
  ul li p:nth-of-type(2){
    font-size:24upx;
    color: #808080;
  }
  /*选中的颜色*/
  ul li p.blue{
    color: #03aef9;
  }
  .listWrapper{
    top:198upx !important;
  }

</style>