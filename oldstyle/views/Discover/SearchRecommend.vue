<style scoped="scoped">
  span,
  p,
  ul,
  li,
  i,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
  }

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
  .mui-content{
    background: #ffffff;
  }

  /*菜单*/
  /*菜单*/
  .menu{
    width:100%;
    height: 87.98upx;
    background: #FFFFFF;
    font-size:27.98upx;
    color:rgba(68,68,68,1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: absolute;
  }
  .menu span{
    position:relative;
    margin-bottom: -21.98upx;
  }
  .menu span.bold{
    font-weight: 500;
  }
  .menu span  i{
    position:absolute;
    width: 52.50upx;
    height:3.0upx;
    border-radius: 99.98upx;
    background:#03aef9;
    top: 50.26upx;
    left: 0upx;
  }
  .listWrapper{
    top:87.98upx !important;
    bottom: 99.98upx !important;
  }
  .followGroups{
    width: 100%;
    background: #ffffff;
    margin-top: -19.96upx;
    position: relative;
    height: 147.98upx;
  }
  .followGroups:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    height: 20.02upx;
    background-color: #f3f4f6;
    width: 100%;
  }
  .followGroups .follow-content{
    padding-left: 30upx;
    padding-right: 30upx;
  }
</style>