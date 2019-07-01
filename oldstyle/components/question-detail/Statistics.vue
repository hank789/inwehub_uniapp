<style scoped="scoped">
  /*清掉自带样式*/

  div,
  p,
  span,
  i,
  img,
  ul,
  li,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
  }


  .item {
    line-height: 39.98upx;
    color: #b4b4b6;
  }

  .item span {
    font-size: 27.98upx;
    position: relative;
    top: -6upx;
  }

  .item .iconWrapper {
    display: inline-block;
    border: 1.96upx solid #dcdcdc;
    width: 84upx;
    height: 84upx;
    border-radius: 50%;
    text-align: center;
    line-height: 84upx;
    font-size: 48upx;

  }

  .item.active .iconWrapper {
    border: 1.96upx solid #03aef9;
  }

  .item:nth-child(1) .iconWrapper {
    font-size: 39.98upx;
  }

  .item:nth-child(2) .iconWrapper {
    font-size: 48upx;
  }

  .item:nth-child(2) .iconWrapper.showcangWrapper {
    font-size: 36upx;
  }

  .item:nth-child(2) .iconWrapper.showcangWrapper .icon {
    position: relative;
    top: -1.96upx;
  }

  .item:nth-child(3) .iconWrapper {
    font-size: 36upx;
  }

  .modifyWrapper {
    font-size: 31.96upx !important;
  }

  .modifyWrapper .icon {
    position: relative;
    top: 0upx;
  }

  .statistics {
    padding: 39.98upx 0 19.96upx 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .dianzanWrapper .icon {
    position: relative;
    top: -1.96upx;
  }

  .active {
    color: #03aef9;
  }
  /*点赞样式*/
  .component-dianzanList{
    width:100%;
    background: #FFFFFF;
    margin-top: 15.98upx;
    position: relative;
  }
  .component-dianzanList span:nth-of-type(1){
    font-size:25.96upx;
    color:#03aef9;
  }

  .mui-table-view.detail-answer{
    margin-bottom: 0;
  }

</style>