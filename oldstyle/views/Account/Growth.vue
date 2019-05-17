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

  .bot {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  .mui-content.absolute {
    background: #FEFFFE;
    padding: 0upx 31.96upx 0 31.96upx;
  }

  /*页面内容*/
  .integral {
    width: 100%;
    height: 480upx;
    /*background: #CCCCCC;*/
  }

  /*积分*/
  .GetPoints {
    width: 100%;
    height: 87.98upx;
    line-height: 87.98upx;
    position: relative;
  }

  .GetPoints span:nth-child(1) {
    float: left;
    font-size: 31.96upx;
    color: #444444;
    font-weight: 500;
  }

  .GetPoints span:nth-child(2) {
    float: right;
    font-size: 25.96upx;
    color: #03aef9;
  }

  /* 成长值*/
  .growth {
    width: 50%;
    height: 391.96upx;
    float: left;
    position: relative;
    /*background: #CCCCCC;*/
  }

  .growth p:nth-child(1) {
    width: 187.96upx;
    height: 187.96upx;
    border: 3.0upx solid #03aef9;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 39.98upx;
    margin: auto;
  }

  .growth p:nth-child(1) span:nth-child(1) {
    display: block;
    color: #03aef9;
    font-size: 49.96upx;
    margin-top: 42upx;
    text-align: center;
  }

  .growth p:nth-child(1) span:nth-child(2) {
    display: block;
    color: #444444;
    font-size: 31.96upx;
    margin-top: 6upx;
    text-align: center;
    font-weight: 500;
  }

  .growth p:nth-child(2) {
    margin-top: 270upx;
    text-align: center;
    position: relative;
  }

  .growth p:nth-child(2) i {
    display: inline-block;
    width: 12upx;
    height: 12upx;
    background-color: #03aef9;
    border-radius: 50%;
    position: absolute;
    top: 9.98upx;

  }

  .growth p:nth-child(2) span {
    display: inline-block;
    width: 279.98upx;
    text-align: left;
    margin-left: 19.96upx;
    color: #808080;
    font-size: 25.96upx;
  }

  /*贡献值*/
  .contribution {
    width: 50%;
    height: 391.96upx;
    float: right;
    position: relative;

  }

  .contribution p:nth-child(1) {
    width: 187.96upx;
    height: 187.96upx;
    border: 3.0upx solid #fa4975;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 39.98upx;
    margin: auto;
  }

  .contribution p:nth-child(1) span:nth-child(1) {
    display: block;
    color: #fa4975;
    font-size: 49.96upx;
    margin-top: 42upx;
    text-align: center;
  }

  .contribution p:nth-child(1) span:nth-child(2) {
    display: block;
    color: #444444;
    font-size: 31.96upx;
    margin-top: 6upx;
    text-align: center;
    font-weight: 500;
  }

  .contribution p:nth-child(2) {
    margin-top: 270upx;
    text-align: center;
    position: relative;
  }

  .contribution p:nth-child(2) i {
    display: inline-block;
    width: 12upx;
    height: 12upx;
    background-color: #fa4975;
    border-radius: 50%;
    position: absolute;
    top: 9.98upx;

  }

  .contribution p:nth-child(2) span {
    display: inline-block;
    width: 279.98upx;
    text-align: left;
    margin-left: 19.96upx;
    color: #808080;
    font-size: 25.96upx;
  }

  /*等级*/
  .Grade {
    width: 100%;
    height: 579.98upx;
    /*background: #CCCCCC;*/
  }

  .myGrades {
    width: 100%;
    height: 87.98upx;
    line-height: 87.98upx;
    position: relative;
  }

  .myGrades span {
    float: left;
    font-size: 31.96upx;
    color: #444444;
    font-weight: 500;
  }

  .Member {
    width: 100%;
    height: 369.98upx;
    background: url(../../statics/images/Grade.png) no-repeat;
    background-size: cover;
    margin-top: 39.98upx;
    border-radius: 7.96upx;
  }

  .Member > p:nth-of-type(1) {
    width: 100%;
    text-align: center;
    font-size: 39.98upx;
    color: #dcdcdc;
    font-weight: 500;
    height: 99.98upx;
    line-height: 150upx;
  }

  .Member > p:nth-of-type(2) {
    width: 100%;
    text-align: center;
    color: #DCDCDC;
    font-size: 24upx;
    margin-top: 6upx;
  }

  .Prompt {
    width: 86%;
    height: 79.96upx;
    top: 39.98upx;
    margin-left: 7%;
    /*background: #CCCCCC;*/
    position: relative;
  }

  /*进度条*/

  .ProgressBar {
    width: 100%;
    height: 79.96upx;
    margin-top: 12upx;
    position: relative;
    /*background: #CCCCCC;*/

  }

  .ProgressBar > div {
    width: 86%;
    height: 3.98upx;
    background: #7F807F;
    margin-left: 7%;
    margin-top: 30upx;
  }

  .ProgressBar > div i {
    display: block;
    width: 25%;
    height: 3.98upx;
    background: #03aef9;
  }

  .fouce {
    width: 86%;
    height: 3.98upx;
    left: 7%;
    /*background: #007AFF;*/
    top: -1.96upx;
    position: absolute;
  }

  .fouce span {
    display: block;
    float: left;
    width: 7.96upx;
    height: 7.96upx;
    background: #FFFFFF;
    border-radius: 50%;
    position: absolute;
  }

  .fouce span:nth-of-type(1) {
    left: 0;
  }

  .fouce span:nth-of-type(2) {
    left: 25%;
  }

  .fouce span:nth-of-type(3) {
    left: 50%;
  }

  .fouce span:nth-of-type(4) {
    left: 75%;
  }

  .fouce span:nth-of-type(5) {
    left: 100%;
  }

  .number {
    width: 86%;
    height: 39.98upx;
    left: 7%;
    /*background: #007AFF;*/
    top: 12upx;
    position: absolute;
  }

  .number span {
    display: block;
    float: left;
    color: #dcdcdc;
    font-size: 24upx;
    position: absolute;
  }

  .number span:nth-of-type(1) {
    left: 0;
  }

  .number span:nth-of-type(2) {
    left: 24%;
  }

  .number span:nth-of-type(3) {
    left: 49%;
  }

  .number span:nth-of-type(4) {
    left: 74%;
  }

  .number span:nth-of-type(5) {
    left: 99%;
  }

  /*特权*/
  .privilege {
    width: 100%;
    min-height: 1200upx;
    /*background: #CCCCCC;*/
  }

  .myprivilege {
    width: 100%;
    height: 87.98upx;
    line-height: 87.98upx;
    position: relative;
  }

  .myprivilege span {
    float: left;
    font-size: 31.96upx;
    color: #444444;
    font-weight: 500;
  }

  /*等级*/
  .power {
    width: 100%;
    /*min-height:300upx;*/
    /*background: #C8C7CC;*/
    margin-top: 36upx
  }

  .power p {
    width: 100%;
    overflow: hidden;
    margin-bottom: 9.98upx;
  }

  .power p span:nth-of-type(1) {
    display: block;
    float: left;
    width: 5.5%;
    height: 42upx;
    line-height: 31.96upx;
    background: url(../../statics/images/grading.png) no-repeat;
    background-size: 100%;
    text-align: center;
    font-size: 24upx;
    color: #FFFFFF;
  }

  .power p span:nth-of-type(2) {
    display: block;
    float: left;
    width: 80%;
    font-size: 25.96upx;
    font-weight: 500;
    color: #444444;
    margin-left: 2%;
    margin-top: -1.96upx;
  }

  .powerdetail {
    width: 97%;
    border-left: 1.96upx solid #03aef9;
    margin-left: 2.5%;
    overflow: hidden;
  }

  .powerdetail li {
    width: 32%;
    height: 240upx;
    float: left;
    text-align: center;
  }

  .powerdetail li svg {
    font-size: 79.96upx;
    color: #DCDCDC;
    margin-top: 19.96upx;
  }

  .powerdetail li p:nth-of-type(1) {
    font-size: 25.96upx;
    color: #808080;
    margin-top: 13.96upx;
  }

  .powerdetail li p:nth-of-type(2) {
    width: 70%;
    height: 60upx;
    line-height: 60upx;
    margin-left: 15%;
    border-radius: 7.96upx;
    border: 1.96upx solid #DCDCDC;
    font-size: 27.98upx;
    color: #444444;
    margin-top: 13.96upx;
    position: relative;
  }

  .powerdetail li:nth-child(1), .powerdetail li:nth-child(4) {
    margin-left: 3%;

  }


  /****积分说明*****/
  .instruction {
    width: 100%;
    height: 270upx;
    border-top: 1.96upx solid #DCDCDC;
  }

  .instruction p {
    font-size: 25.96upx;
    color: #808080;

  }

  .instruction p:nth-of-type(1) {
    margin-top: 33.98upx;
  }

  /*动态添加的样式*/
  .powerdetail li .blue {
    color: #03aef9;
  }

  .powerdetail li p.text_blue {
    width: 70%;
    height: 60upx;
    line-height: 60upx;
    margin-left: 15%;
    border-radius: 7.96upx;
    border: 1.96upx solid #03aef9;
    font-size: 27.98upx;
    color: #03aef9;
    margin-top: 13.96upx;

  }

  .powerdetail li .yellow {
    color: #fcc816;
    border-color: #fcc816;
  }

  .powerdetail li p.text_yellow {
    width: 70%;
    height: 60upx;
    line-height: 60upx;
    margin-left: 15%;
    border-radius: 7.96upx;
    border: 1.96upx solid #fcc816;
    font-size: 27.98upx;
    color: #fcc816;
    margin-top: 13.96upx;

  }

  .power p span.bg:nth-of-type(1) {
    background: url(../../statics/images/rank.png) no-repeat;
    background-size: 100%;

  }

  b {
    display: block;
    width: 90upx;
    padding: 0 3.98upx;
    height: 49.96upx;
    background: #03aef9;
    text-align: center;
    font-size: 24upx;
    color: #FFFFFF;
    line-height: 49.96upx;
    border-radius: 15.98upx;
    position: absolute;

  }

  b::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 12upx solid transparent;
    border-right: 12upx solid #03aef9;
    border-bottom: 12upx solid #03aef9;
    position: absolute;
    transform: rotate(45deg);
    bottom: -3.98upx;
    left: 31.96upx;
  }
  /*商品的通用样式*/
  .commodity{
    width:32%;
    height:240upx;
    /*background:#e3e3e3;*/
  }
  .commodity img{
    width: 73.96upx;
    height: 79.96upx;
    margin-top:9.98upx;
}
  .commodity .case{
    width: 51.98upx;

  }
  .commodity .iphone{
    width: 99.98upx;

  }
  .commodity p:nth-of-type(2) i:nth-of-type(1) {
  display: block;
  font-size: 24upx;
  color: #444444;
  text-align: center;
  position: absolute;
  bottom: 9.98upx;
  left: 0;
  right: 0;
  margin: auto;
  }


  .commodity p:nth-of-type(2) i:nth-of-type(2) {
  display: block;
  font-size: 24upx;
  color: #444444;
  text-align: center;
  position: absolute;
  top: 9.98upx;
  left: 0;
  right: 0;
  margin: auto;
  }

  .commodity  p:nth-of-type(2) i.num_yellow {
    color: #fcc916;
  }


</style>