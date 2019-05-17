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
    background:#f3f4f6;
    padding-top: 19.96upx;
    position: absolute;
    top:0;
    display: flex;
    flex-direction: row;
    justify-content:space-between
  }
  .searchContainer p:nth-of-type(1){
    width:71%;
    height:67.96upx;
    background: #FFFFFF;
    border-radius: 99.98upx;
    margin-left: 4%;
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
    margin-right: 4%;
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

  ul{
    width:100%;
    padding: 0 4%;
    overflow: hidden;
  }
  ul li{
    width:100%;
    height:177.98upx;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:space-between;
    align-items:center;
    position: relative;
  }
  ul li .container-image{
    width:84upx;
    height:84upx;
  }
  .container-info{
    width: 85%;
    height:100%;
    margin-left: 19.96upx;
  }
  .container-info p:nth-of-type(1){
    font-size:31.96upx;
    color:#444444;
    margin-top: 25.96upx;
  }
  .container-info p:nth-of-type(2){
    font-size:27.98upx;
    color: #808080;
    margin:1.96upx 0;
    display: flex;
    flex-direction: row;
    align-items:center;
  }
  .container-info p:nth-of-type(2) span{
    display: flex;
    flex-direction: row;
    align-items:center;
  }
  .container-info p:nth-of-type(2) span i{
    display: inline-block;
    width:1.96upx;
    height:25.96upx;
    background:#dcdcdc;
    margin: 0 9.98upx;
  }
  .container-info p:nth-of-type(2) span:nth-last-child(1) i{
    display: none;
  }
  .container-info p:nth-of-type(3){
    font-size:27.98upx;
    color: #808080;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
  }

  input::-webkit-input-placeholder { /*WebKit browsers*/
    color:#c8c8c8;
    font-size: 27.98upx;
  }
  .listWrapper{
    top:108upx !important;
  }

</style>