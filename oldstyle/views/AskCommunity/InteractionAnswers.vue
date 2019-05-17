<style scoped>
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
  .mui-table-view-cell:after {
    display: none;
  }

  .mui-content {
    background: #f3f4f6;
  }

  .help {
    padding-bottom:30upx;
    font-size: 27.98upx;
    background: #fff;
  }

  .help .title {
    padding: 30upx 30upx 19.96upx;
    color: #444;
  }

  .help .body {
    padding: 0 30upx;
    color: #808080;
  }

  .help .body a {
    color: #03aef9;
  }

  .buttonWrapper {
    padding-top: 66upx;
    background: #fff;
  }

  .buttonWrapper button {
    border-radius: 0;
    margin-bottom: 0;
    padding: 25.96upx 0;
  }
  /*标签样式*/
  .question_tags{
    width:100%;
    overflow: hidden;
    padding: 0  31.96upx 15.98upx 13.96upx;
    background: #ffffff;
  }
  .question_tags p{
    float: left;
    background: #a8dff7;
    color:#FFFFFF;
    padding: 0upx 15.98upx;
    border-radius:99.98upx;
    margin-top: 18upx;
    margin-left: 18upx;
    font-size:24upx;
  }
  /*返回问答社区*/
  .back{
    width:100%;
    height:123.98upx;
    text-align: center;
    line-height: 123.98upx;
    background: url("../../statics/images/Community.png") no-repeat;
    background-size: cover;
    margin-top: 19.96upx;
  }
  .back span:nth-of-type(1){
    font-size:30upx;
    color:#444444;
    line-height: 123.98upx;
  }
  .back span:nth-of-type(2){
    font-size:24upx;
    color:#808080;
    line-height: 123.98upx;
  }
  .back svg:nth-of-type(1){
    font-size:24upx;
    color:#808080;
    line-height: 123.98upx;
  }
  .back svg:nth-of-type(2){
    font-size:24upx;
    color:#808080;
    line-height: 123.98upx;
    margin-left: -19.96upx;
  }
  .recommentList{
    margin-top:19.96upx;
  }
</style>