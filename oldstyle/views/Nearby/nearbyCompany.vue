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
/*.apply{*/
  /*width:100%;*/
  /*height:90upx;*/
  /*padding: 0 4%;*/
  /*line-height: 90upx;*/
  /*}*/
  /*.apply p:nth-of-type(1){*/
    /*float: left;*/
    /*font-size:27.98upx;*/
    /*color:#03aef9;*/
  /*}*/
  /*.apply p:nth-of-type(2){*/
    /*float: right;*/
    /*width:171.98upx;*/
    /*height:54upx;*/
    /*border-radius: 99.98upx;*/
    /*border:1.96upx solid #03aef9;*/
    /*font-size:27.98upx;*/
    /*color:#03aef9;*/
    /*text-align: center;*/
    /*line-height: 49.96upx;*/
    /*margin-top: 18upx;*/
  /*}*/
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
    top:198upx;
  }
 /*导航栏*/
  .menu{
    width: 100%;
    height: 90upx;
    background:#fefefe;
    position: relative;
    padding-left: 4%;
  }
  .menu  p{
    display: inline-block;
    line-height: 90upx;
    font-size:31.96upx;
    color: #444444;
    text-align: left;
  }
  .menu  p:nth-of-type(2){
    display: inline-block;
    margin-left: 60upx;
    color: #444444;
    font-weight: 500;
    position: relative;
  }
  .menu  p:nth-of-type(2):after {
    position: absolute;
    width:127.96upx;
    bottom: 0;
    left: 0;
    height: 3.98upx;
    z-index: 999;
    content: '';
    background-color: #009FE8;
  }
  .menu svg{
    position: absolute;
    right:3%;
    font-size: 49.96upx;
    color: #444444;
  }
</style>