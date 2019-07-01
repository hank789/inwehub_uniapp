<style scoped="scoped">

  ul,
  li,
  div,
  p,
  span {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #short_all {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: none;
  }

  #short_all .turn {
    position: absolute;
    bottom: 27.98upx;
    left: 44.2%;
    font-size: 33.98upx;
    color: #808080;
    animation: rote 0.5s infinite;
    animation-iteration-count: 1;
    padding: 0 24upx;
  }

  @keyframes rote {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  ul {
    width: 60%;
    height:180upx;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 259.96upx;
    animation: myfirst 0.2s infinite;
    animation-iteration-count: 1;
  }

  @keyframes myfirst {
    from {
      width:60%;
      padding: 0 8%;
      opacity: 0.6;
    }
    to {
      width:100%;
      padding: 0 8%;
      opacity: 1;
    }
  }

  /*结束动画*/

  .end {
    width:100%;
    height:180upx;
    position: absolute;
    bottom: -759.98upx;
    animation: myend 0.1s infinite;
    animation-iteration-count: 1;
  }

  @keyframes myend {
    from {
      bottom: 219.98upx;
      opacity: 0.7;
    }
    to {
      bottom: -279.98upx;
      opacity: 1;
    }
  }
 /*内容区域*/
  .down-title{
    width:90%;
    font-size: 27.98upx;
    color: #808080;
    position: absolute;
    left: 8%;
    bottom: 459.98upx;
  }
  .down-title i{
    display: block;
    width: 85%;
    height: 0.98upx;
    background: #dcdcdc;
    position: absolute;
    left: 73.96upx;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  ul{

    }
  ul li{
    display: flex;
    flex-direction:column;
    width: 120upx;
    height:180upx;
    align-items: center;
  }
  ul li p{
    width:120upx;
    height:120upx;
    background:#b4b4b6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul li p svg{
    font-size: 69.98upx;
  }
  ul li span{
   font-size: 27.98upx;
    color: #444444;
    margin-top: 18upx;
  }
  .down-title.find-title{
    bottom: 759.98upx;
  }
  ul.find{
    bottom: 559.96upx;
  }
  ul li p.-yellow{
    background: #fcc816;
  }
  /*分红*/
  ul li.bonus {
    position: relative;
  }
  ul li.bonus p i {
    position: absolute;
    font-style: normal;
    width: 60upx;
    height: 33.98upx;
    font-size: 24upx;
    color: #FFFFFF;
    border-radius: 7.96upx;
    background: #fa4975;
    text-align: center;
    line-height: 33.98upx;
    top: 6upx;
    right: -36upx;
  }

  ul li.bonus p i:after{
    content: "";
    display: block;
    width: 12upx;
    height: 12upx;
    background: #fa4975;
    /*border: 1.96upx solid #dcdcdc;*/
    position: absolute;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    left: -6upx;
    /*border-top-color: #FFFFFF;
    border-left-color: #FFFFFF;*/
    top: 0upx;
    bottom: 0;
    margin: auto;
  }


</style>