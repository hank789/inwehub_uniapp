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
  .w414-3 .listWrapper{
    top:87.98upx !important;
    bottom: 99.98upx !important;
  }

  .activityWrapper.unIsGetted ~ .listWrapper {
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
<style>
  .feedWrapper .container-avatarAndText{
    margin-bottom:19.96upx;
  }
  .component-iconNumber{
    margin-left: 15.0upx;
  }

  .feedWrapper .iconPenglunWrapper {
    margin: 0 15.0upx;
  }
  .labelWrapper{
    text-align: right;
  }
  /*回答者列表*/
  .answer-list{
    width:100%;
    height:85.96upx;
    background:#f3f4f6;
    border-radius: 7.96upx;
    line-height: 85.96upx;
    padding: 0 30upx;
    font-size:25.96upx;
    color: rgb(128,128,128);
    margin-top: 9.98upx;
  }
  .answer-list span{
    color:#03aef9;
  }
  .answer-list span i{
    color: rgb(146,146,146);
    margin-right: 9.98upx;
  }
  .answer-list span:nth-last-of-type(1) i{
    display: none;
  }
  /*标签*/
  .tags{
    font-size:31.96upx;
    color:rgb(35,82,128);
    margin-right: 9.98upx;
  }
  /*关注数 点赞的间距*/
  .options{
    margin-top: 18upx;
  }
  /*好评率*/
  .feedWrapper .component-followed-question{
    float: left;
    font-size:25.96upx;
    color:#b4b4b6;
  }
  /*关注数*/
  .feedWrapper .blue{
    float: left;
    font-size:24upx;
    color:#03aef9;
  }
  /*评论了互动问答内容超出两行的样式*/
  .ellipsis p {
    display: -webkit-box;
    overflow: hidden;
    white-space: normal !important;
    text-overflow: ellipsis;
    /* word-wrap: break-word; */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 31.96upx;
  }
</style>