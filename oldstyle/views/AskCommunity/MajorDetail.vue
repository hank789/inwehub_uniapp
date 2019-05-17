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
  .bot {
    position: absolute;
    right:30upx;
    top: 0upx;
    left:30upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
  .mui-table-view-cell:after {
    display: none;
  }

  .mui-content {
    background: #f3f4f6;
    bottom:99.98upx;
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
    padding: 9.98upx 30upx 30upx 30upx;
    background: #fff;
  }

  .buttonWrapper button {
    border-radius: 99.98upx;
    margin-bottom: 0;
    padding: 25.96upx 0;
  }
  .iNeedAskWrapper{
    width:100%;
    padding:9.98upx 0;
  }
  .iNeedAskWrapper button{
    border-radius:0;
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
  margin-bottom: 19.96upx;
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
  /*暂无回答*/
  .detail-answer {
    margin-bottom: 0upx;
    width:100%;
    position: relative;
  }
  .major_answer{
    height:249.0upx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 48upx;
    color: #c8c8c8;
  }
  .major_answer svg{
    font-size: 99.76upx
  }
  .mui-table-view:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.96upx;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
  }
  /*查看回答*/
  .see{
    width:100%;
    height:79.96upx;
    padding: 0 30upx;
    font-size:27.98upx;
    color:#03aef9;
    text-align: center;
    line-height: 79.96upx;
    background: #FFFFFF;
    margin-bottom: 19.96upx;
    position: relative;
  }
  .btn{
    margin-top: -30upx;
  }
  .star{
    margin-top: -30upx;
  }

</style>