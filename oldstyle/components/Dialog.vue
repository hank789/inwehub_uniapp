<style scoped="scoped">
  .triangle {
    display: block;
    width: 0;
    height: 0;
    border-width: 36upx 33.98upx 0;
    border-style: solid;
    border-color: #ffffff transparent transparent;
    position: absolute;
    bottom: 13.96upx;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .component-noPublish {
    height: 349.96upx;
    margin-top: 147%;
  }
  .component-noPublish .noPublishBag {
    width: 420upx;
    height: 307.96upx;
    background: #ffffff;
    position: relative;
    z-index: 9;
    margin: 0 auto;
    border-radius: 36upx;
    padding-top: 69.98upx;
  }
  .component-noPublish .noPublishImg {
    width: 199.96upx;
    height: 147.98upx;
    margin: 0 auto;
  }
  .component-noPublish .noPublishImg img {
    width: 100%;
    height: 100%;
  }
  .component-noPublish .closePopup {
    position: absolute;
    right: 0;
    padding: 19.96upx;
    top: -6upx;
    z-index: 3;
    color: #808080;
  }
  .component-noPublish .noPublishText {
    color: #C8C8C8;
    font-size: 24upx;
    line-height: 31.96upx;
    margin-top: 19.96upx;
  }

  .groups{
    width: 105%;
    margin-left: -2%;
    text-align: center;
  }
  .groups .groupTitle {
    color: #444444;
    font-size: 36upx;
  }
  .groups .smallTitle {
    color: #808080;
    font-size: 27.98upx;
    padding-top: 9.98upx;
  }
  .groups .groupInfo {
    background: #F3F4F6;
    border-radius: 7.96upx;
    display: flex;
    text-align: left;
    padding: 30upx;
    margin-top: 39.98upx;
  }
  .groupInfo .groupLogo {
    width: 87.98upx;
    height: 87.98upx;
  }
  .groupInfo .groupLogo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 7.96upx;
  }
  .groupInfo .detailInfo {
    width: 361.96upx;
    padding-left: 19.96upx;
  }
  .groupInfo .detailInfo .groupName {
    font-size: 31.96upx;
    color: #444444;
    line-height: 45.0upx;
  }
  .groupInfo .detailInfo .groupDescribe {
    color: #808080;
    font-size: 25.96upx;
    line-height: 33.0upx;
    margin-top: 6.98upx;
    margin-bottom: 10.96upx;
  }
  .groupInfo .detailInfo .sharPeople {
    color: #B4B4B6;
    font-size: 21.98upx;
    line-height: 30upx;
  }

  .headAndNickname {
    text-align: center;
    background: #ffffff;
  }
  .headAndNickname {
    width: 600upx !important;
  }
  .headAndNickname .iconImg .icon {
    margin-top: 60upx;
    font-size: 219.98upx;
  }
  .headAndNickname .titleText {
    margin-top: 21.98upx;
  }
  .headAndNickname .titleText p {
    color: #444444;
    font-size: 31.96upx;
    line-height: 45.0upx;
  }
  .headAndNickname .buttonText {
    line-height: 103.96upx;
  }
  .headAndNickname .buttonText span {
    font-size: 31.96upx;
  }
  .headAndNickname .weChat {
    margin-top: 73.96upx;
    color: #03AEF9;
  }
  .headAndNickname .close {
    color: #444444;
  }


  #test {
    width: 480upx;
    height: 219.98upx;
    border: 1.96upx solid #007AFF;
  }

  ul,
  li,
  p,
  span,
  a,
  i {
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
  }

  /*显示等级弹窗样式*/

  .p-level {
    width: 480upx;
    height: 219.98upx;
    /*background: #CCCCCC;*/
    text-align: center;
  }

  .p-level > svg {
    font-size: 99.98upx;
  }

  .p-level > p:nth-of-type(1) {
    font-size: 31.96upx;
    color: #444444;
    margin-top: 19.96upx;
    width: 100%;
    height: 39.98upx;
    text-align: center;
    line-height: 39.98upx;
  }

  .p-level > p:nth-of-type(2) {
    width: 36%;
    margin-left: 32%;
    height: 39.98upx;
    margin-top: 6upx;
    /*background: #CCCCCC;*/
  }

  .p-level > p:nth-of-type(2) span:nth-of-type(1) {
    display: block;
    width: 80%;
    height: 100%;
    float: left;
    font-size: 27.98upx;
    color: #b4b4b6;
  }

  .p-level > p:nth-of-type(2) span:nth-of-type(2) {
    display: block;
    float: left;
    width: 20%;
    height: 100%;
    background: url(../statics/images/rank.png) no-repeat;
    background-size: 100%;
    margin-top: 3.98upx;
    text-align: center;
    line-height: 24upx;
    color: #FFFFFF;
  }

  /*升级的弹窗*/

  #p-upgrade {
    width: 480upx;
    /*height: 319.96upx;*/
    border: 1.96upx solid #009689;
  }

  .p-upgrade {
    width: 480upx;
    /*height: 319.96upx;*/
  }

  .upgrade_t {
    width: 100%;
    height: 129.98upx;
    border-bottom: 0.98upx dashed #DCDCDC;
  }

  .upgrade_t p:nth-of-type(1) {
    width: 60%;
    margin-left: 20%;
    height: 42upx;
  }

  .upgrade_t p:nth-of-type(1) span:nth-of-type(1) {
    color: #03aef9;
    font-size: 37.96upx;
    float: left;
    width: 85%;
    /*background: #007AFF;*/
  }

  .upgrade_t p:nth-of-type(1) span:nth-of-type(2) {
    width: 15%;
    height: 100%;
    background: url(../statics/images/rank.png) no-repeat;
    background-size: 100%;
    float: left;
    text-align: center;
    line-height: 36upx;
    color: #FFFFFF;
  }

  .upgrade_t p:nth-of-type(2) {
    width: 50%;
    margin-left: 20%;
    text-align: center;
    line-height: 36upx;
    margin-top: 6upx;
    font-size: 27.98upx;
    color: #808080;
  }

  .upgrade_b {
    width: 100%;
    /*height: 189.98upx;*/
    overflow: hidden;
    text-align: center;
    border-bottom: 0.98upx solid #DCDCDC;
  }

  .upgrade_b > p {
    width: 27%;
    height: 199.96upx;
    float: left;
    margin-left: 4.75%;
  }

  .upgrade_b > p svg {
    font-size: 79.96upx;
    color: #fcc916;
    margin-top: 36upx;
  }

  .upgrade_b > p span {
    display: block;
    font-size: 25.96upx;
    color: #444444;
  }

  .upgrade_btn {
    width: 100%;
    height: 99.98upx;
    /*background: #CCCCCC;*/
    text-align: center;
    line-height: 99.98upx;
    color: #03aef9;
    font-size: 31.96upx;
  }

  /*领取新手任务*/

  #p-task {
    width: 489.98upx;
    height: 639.98upx;
  }

  .p-task {
    width: 489.98upx;
    height: 639.98upx;
    border: 1.96upx solid #ffffff;
  }

  .task_t {
    width: 100%;
    height: 97.96upx;
  }

  .task_t p:nth-of-type(1) {
    color: #03aef9;
    font-size: 31.96upx;
    font-weight: 500;
    text-align: center;
  }

  .task_t p:nth-of-type(2) {
    color: #808080;
    font-size: 24upx;
    text-align: center;
  }

  .task_b {
    width: 100%;
    height: 462upx;
    margin: 0;
  }

  .task_b li {
    width: 100%;
    height: 153.98upx;
    text-align: center;
    border-bottom: 0.98upx solid #DCDCDC;
    padding-top: 33.98upx;
  }

  .task_b li p:nth-of-type(1) {
    width: 100%;
    text-align: center;
    font-size: 31.96upx;
    color: #444444;
  }

  .task_b li p:nth-of-type(2) {
    font-size: 27.98upx;
    color: #808080;
  }

  .task_btn {
    width: 100%;
    height: 99.98upx;
    /*background: #CCCCCC;*/
    text-align: center;
    line-height: 99.98upx;
    color: #03aef9;
    font-size: 31.96upx;
  }

  /*完善名片提示*/

  #perfectCard-t {
    width: 480upx;
    height: 234upx;
  }

  .perfectCard-t {
    width: 499.96upx;
    height: 199.96upx;
    /*border: 1.96upx solid #DCDCDC;*/
  }

  .perfectCard-t p:nth-child(1) {
    font-size: 37.96upx;
    color: #444444;
    text-align: center;
    margin-top: 61.96upx;
  }

  .perfectCard-t p:nth-child(2) {
    font-size: 27.98upx;
    color: #808080;
    text-align: center;
    margin-top: 15.0upx;
  }

  .perfectCard-t p:nth-child(2) i {
    color: #03aef9;
    font-style: normal;
  }

  #perfectCard-b {
    width: 480upx;
    height: 108upx;
    /*background: #CCCCCC;*/
  }

  .perfectCard-b {
    width: 480upx;
    height: 108upx;
    font-size: 31.96upx;
    color: #03aef9;
    text-align: center;
    line-height: 108upx;
  }

  .fenhongxize .title {
    text-align: center;
    font-size: 31.96upx;
    color: #444;
  }

  .fenhongxize .desc {
    margin-top: 39.98upx;
    font-size: 27.98upx;
    line-height: 42upx;
    color: #808080;
  }

  .fenhongxize ul {
    padding: 0 0 0 39.98upx;
    margin: 15.98upx 0 0;
  }

  .fenhongxize ul li.item {
    position: relative;
    list-style: none;
    font-size: 27.98upx;
    padding: 15.98upx 0;
    color: #808080;
  }

  .fenhongxize ul li.item:before {
    content: '';
    background: #03aef9;
    border: 1.96upx solid #03aef9;
    position: absolute;
    border-radius: 50%;
    width: 6upx;
    height: 6upx;
    left: -27.98upx;
    top: 31.96upx;
  }

  .helpWrapper {
    background: #fff;
    position: relative;
  }

  .helpWrapper .title {
    font-size: 31.96upx;
    text-align: center;
    color: #444;
    margin-bottom: 30upx;
  }

  .helpWrapper .desc {
    font-size: 27.98upx;
    color: #444;
  }

  .helpWrapper .desc-1 {
    margin-top: 39.98upx;
  }

  .boxWrapper {
    border: 1.96upx solid blue;
  }

  .askCommunityDetailShare_title {
    text-align: center;
    margin-top: 33.98upx;
  }

  .askCommunityDetailShare_title .title {
    font-size: 37.96upx;
    color: #444;
  }

  .askCommunityDetailShare_title .titleSub {
    margin-top: 19.96upx;
    font-size: 27.98upx;
    color: #808080;
  }

  .askCommunityDetailShare_title .titleSub span {
    color: #03aef9;
  }

  .askCommunityDetailShare_body .title {
    font-size: 27.98upx;
    color: #808080;
  }

  /*认证专家*/
  /*完善名片提示*/

  #expertapplication-t {
    width: 480upx;
    height: 234upx;
    border: 1.96upx solid #DCDCDC;
  }

  .expertapplication-t {
    width: 499.96upx;
    height: 199.96upx;
  }

  .expertapplication-t p:nth-child(1) {
    font-size: 37.96upx;
    color: #444444;
    text-align: center;
    margin-top: 61.96upx;
  }

  .expertapplication-t p:nth-child(2) {
    font-size: 27.98upx;
    color: #808080;
    text-align: center;
    margin-top: 15.0upx;
  }

  .expertapplication-t p:nth-child(2) i {
    color: #03aef9;
    font-style: normal;
  }

  #expertapplication-b {
    width: 480upx;
    height: 108upx;
    /*background: #CCCCCC;*/
  }

  .expertapplication-b {
    width: 480upx;
    height: 108upx;
    font-size: 31.96upx;
    color: #03aef9;
    text-align: center;
    line-height: 108upx;
  }

  /*文章*/

  .article_t {
    /*width: 480upx;*/
    /*height: 199.96upx;*/
    /* border: 1.96upx solid #CCCCCC;*/
    margin-top: 39.98upx;
  }

  .article_t p:nth-child(1) {
    font-size: 37.96upx;
    color: #444444;
    text-align: center;
    margin-top: 30upx;
  }

  .article_t p:nth-child(2) {
    font-size: 27.98upx;
    color: #808080;
    margin-top: 15.98upx;
    text-align: center;
  }

  .article_t p:nth-child(2) i {
    font-size: 27.98upx;
    color: #03aef9;
    font-style: normal;
  }

  .article_b li {
    font-size: 27.98upx;
    color: #444444;
    margin-bottom: 24upx;
    position: relative;
    margin-left: 25.96upx;
  }

  .article_b span {
    font-size: 27.98upx;
    color: #808080;
    margin-top: 30upx;
    margin-bottom: 24upx;
    display: block;
  }

  .article_b li:before {
    content: '';
    background: #03aef9;
    border: 1.96upx solid #03aef9;
    position: absolute;
    border-radius: 50%;
    width: 6upx;
    height: 6upx;
    top: 15.98upx;
    left: -19.96upx;
  }

  .article_b p {
    color: #03aef9;
    font-size: 31.96upx;
    border-top: 1.96upx solid #dcdcdc;
    text-align: center;
    padding-top: 30upx;
    padding-bottom: 0upx;
  }

  /*互动问答答案提交成功*/

  .hotAnswer_b {
    width: 100%;
    overflow: hidden;
  }

  .hotAnswer_b li {
    width: 100%;
    overflow: hidden;
    padding: 24upx 0;
    position: relative;
  }

  .hotAnswer_b li > p {
    font-size: 27.98upx;
    color: #444444;
  }

  .hotAnswer_d {
    width: 100%;
    height: 63.98upx;
    margin-top: 9.0upx;
  }

  .hotAnswer_d p {
    float: left;
  }

  .hotAnswer_d p:nth-child(1) {
    width: 63.98upx;
    height: 63.98upx;
    /*background: #CCCCCC;*/
    position: relative;
  }

  .hotAnswer_d p:nth-child(1) > svg {
    position: absolute;
    font-size: 27.98upx;
    bottom: 0;
    right: -7.96upx;
  }

  .hotAnswer_d p:nth-child(1) > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .hotAnswer_d p:nth-child(2) {
    /*width: 679.96upx;*/
    height: 36upx;
    margin-top: 18upx;
    line-height: 36upx;
    font-size: 25.96upx;
    color: #808080;
    /*background: #CCCCCC;*/
    margin-left: 15.98upx;
  }

  .hotAnswer_recommend {
    font-size: 27.98upx;
    color: #808080;
    /*margin-top: 30upx;*/
  }

  .hotAnswer_b .share {
    display: block;
    width: 100%;
    height: 79.96upx;
    background: #03aef9;
    border-radius: 7.96upx;
    font-size: 31.96upx;
    color: #FFFFFF;
    text-align: center;
    line-height: 79.96upx;
    margin-top: 9.98upx;
  }

  /*提问成功*/

  .hotAnswer_b .ask_share {
    display: block;
    width: 100%;
    height: 79.96upx;
    font-size: 31.96upx;
    color: #03aef9;
    text-align: center;
    line-height: 79.96upx;
    margin-top: 9.98upx;
  }

  .hotAnswer_b .ask_divided {
    display: block;
    width: 100%;
    height: 60upx;
    font-size: 25.96upx;
    color: #808080;
    text-align: center;
    margin-top: 19.96upx;
  }

  /*
   * 专业问答被抢答之后的弹窗；
   */
  .AnswerRepeat {
    width: 100%;

  }

  .AnswerRepeat p:nth-of-type(1) {
    font-size: 31.96upx;
    color: #444444;
    text-align: center;
  }

  .AnswerRepeat p:nth-of-type(2) {
    font-size: 27.98upx;
    color: #444444;
    text-align: center;
    margin-top: 30upx;
  }
/* 是企业用户判读*/

  .CompanyUser {
    width: 100%;
  }
  .CompanyUser p:nth-of-type(1) {
    font-size: 31.96upx;
    color:#444444;
    text-align: center;
    margin-top: 39.98upx;
  }

  .CompanyUser p:nth-of-type(2) {
    font-size: 27.98upx;
    color: #808080;
    text-align: center;
    margin-top: 6upx;
  }
  /* 不是企业用户判读*/

  .Company {
    width: 100%;
  }
  .Company p:nth-of-type(1) {
    font-size: 31.96upx;
    color:#444444;
    text-align: center;
    margin-top: 39.98upx;
  }

  .Company p:nth-of-type(2) {
    font-size: 27.98upx;
    color: #808080;
    text-align: center;
    margin-top: 6upx;
  }
  /*聊天条件弹窗样式*/
  .chat {
    width: 100%;
  }
  .chat p:nth-of-type(1) {
    font-size: 31.96upx;
    color:#444444;
    text-align: center;
    margin-top: 39.98upx;
  }

  .chat p:nth-of-type(2) {
    font-size: 27.98upx;
    color: #808080;
    text-align: center;
    margin-top: 6upx;
  }
  /* 签到的弹窗 */
  .signIn {
    width:100%;
  }
  .signIn_t{
    width:100%;
    margin: 0 auto;
    text-align: center;
  }
  .signIn_t img{
    height:49.96upx;
  }
  .signIn_t p{
    font-size:27.98upx;
    color: #444444;
    margin-bottom: 31.96upx;
  }
  .signIn_m{
    width:104%;
    margin: 0 auto;
    overflow: hidden;
    padding: 33.98upx 0;
    border-bottom:1.96upx dashed #dcdcdc;
    border-top:1.96upx dashed #dcdcdc;
  }
  .signIn_m li{
    width:25%;
    height:150.76upx;
    text-align: center;
    float: left;
    text-align: center;
  }
  .signIn_m li:nth-of-type(1){
    margin-left: 12.5%;
  }
  .signIn_m li:nth-of-type(3){
    margin-right: 12.5%;
  }
  .signIn_m li p:nth-of-type(1){
    width:102upx;
    height:102upx;
    background:#c8c8c8;
    border-radius: 50%;
    border:3.0upx solid #d8d8d8;
    text-align: center;
    line-height: 102upx;
    font-size:27.98upx;
    color: #808080;
    margin: 0 auto;
    position: relative;
  }
  .signIn_m li p:nth-of-type(1) img{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin: auto;
  }
  .signIn_m li p:nth-of-type(2){
    font-size:24upx;
    color: #808080;
    margin-top: 3.98upx;
  }
  .signIn_m li p.click-signIn{
    background:rgb(252,200,22);
    border:3.0upx solid #444444;
  }
  .signIn_m li p.click-signIn span{
    display: inline-block;
    width: 60upx;
    line-height: 33.98upx;
    margin-top: 15.98upx;
    font-size: 25.96upx;
    color: #FFFFFF;
  }

  .signIn_b{
     width:100%;
     margin: 0 auto;
     height:115.96upx;
     text-align:left;
     font-size:27.98upx;
     color: #444444;
   }
  .signIn_b p i{
    font-size: 24upx;
    color: #b4b4b6;
  }
  .signIn_b p:nth-of-type(1){
    margin-top: 30upx;
  }
 /*签到获取的成长值弹窗*/
.scoreDetail{
  width:685.96upx;
  height:480upx;
  border-radius: 36upx;
  background:#f93277;
  text-align: center;
  margin: auto;
  position: relative;
  padding-top: 49.96upx;
}
.scoreDetail svg{
  font-size:39.98upx;
  color: #ffc2d7;
  position: absolute;
  right:27.98upx;
  top:25.96upx;
}
.scoreDetail p:nth-of-type(1){
  font-size:45.98upx;
  color: #ffffff;
  font-weight:500;
}
.scoreDetail p:nth-of-type(2){
  font-size:31.96upx;
  color: #ffffff;
  margin-top: 21.98upx;
  margin-bottom: 42upx;
}
.scoreDetail p:nth-of-type(2) i{
  font-size:54upx;
  color: #fcc816;
}
.scoreDetail p:nth-of-type(3){
  width:91%;
  height:67.96upx;
  text-align: center;
  line-height: 67.96upx;
  margin:0 auto;
  bottom: 49.96upx;
  font-size:27.98upx;
  color: #ffffff;
  border:1.96upx solid #fc98bb;
  border-radius: 99.98upx;
  margin-top: 30upx;
}
  .scoreDetail-m{
    width:91%;
    height:135.98upx;
    margin: 0 auto;
    border-top:1.96upx dashed #fc98bb;
    position: relative;
  }
  .Prompt {
    width: 86%;
    height: 79.96upx;
    margin-left: 7%;
    position: relative;
    top:19.96upx;
  }
  .Prompt b {
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

  .Prompt b::after {
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

  /*进度条*/

  .ProgressBar {
    width: 100%;
    height: 79.96upx;
    position: absolute;
    top:90upx;

  }

  .ProgressBar > div {
    width: 86%;
    height: 3.98upx;
    background: #fc98bb;
    margin-left: 7%;
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
    position: absolute;
  }

  .number span {
    display: block;
    float: left;
    color: #ffc2d7;
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
  /*红包的金额详情*/
  #animationContainer {
    position:absolute;
    margin:auto;
    left:0;right:0;
    top:0;bottom:0;
    z-index: 999;
  }

  .animationContainerWrapper{
    position:absolute;
    left:0;right:0;
    top:0;bottom:0;
    z-index: 10000;
  }
  /*关闭按钮*/
  .cash-button{
    width:57.98upx;
    height:57.98upx;
    border-radius:50%;
    background: #808080;
    position: absolute;
    left:0;
    right:0;
    bottom:50%;
    margin:auto;
    z-index: 999;
    -webkit-transform: translate(0upx,420upx);
    -moz-transform:translate(0upx,420upx);
    transform: translate(0upx,420upx);
  }
  .cash-button svg{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    color: #FFFFFF;
    font-size:39.98upx;
    margin:auto;
  }
  /*跳转按钮*/
  .my-wallet{
    width:88%;
    height:67.96upx;
    background: #fcc816;
    border-radius: 99.98upx;
    text-align: center;
    line-height: 67.96upx;
    font-size:27.98upx;
    color: #444444;
    position: absolute;
    left:0;
    right:0;
    bottom: 109.96upx;
    margin:auto;
    opacity: 0;
  }
  /*红包详情*/
  .my-cash{
    width:58%;
    height:249.98upx;
    position: absolute;
    left:0;
    right:0;
    top: 120upx;
    margin:auto;
    opacity: 0;
  }
  .my-cash i{
    position: absolute;
    width: 100%;
    height:3.0upx;
    background: #808080;
    left:0;
    right:0;
    top:0upx;
    bottom: 0;
    margin:auto;
  }
  .my-cash p{
    width:100%;
    height:103.96upx;
    text-align: center;
    line-height:103.96upx;
    color: #444444;
  }
  .my-cash p:nth-of-type(1){
    font-size:127.96upx;
    font-weight: 500;
  }
  .my-cash p:nth-of-type(1) span{
    font-size: 48upx;
    font-weight: 500;
    position: relative;
    top: -60upx;
  }
  .my-cash p:nth-of-type(2){
    font-size: 31.96upx;
    font-weight: 500;
    margin-top: 19.96upx;
  }

  .home_invitation p:nth-of-type(1){
    font-size:31.96upx;
    color: #444444;
    font-weight: 500;
  }
  .home_invitation p:nth-of-type(2){
    font-size: 24upx;
    color: #444444;
    font-weight: normal;
    margin-top: -12upx;
    line-height: 0;
  }
  /*开启通知*/
  .openNotice{
    width:100%;
    height:540upx;
    background: #FFFFFF;
    border-radius:36upx;
    padding-top: 61.96upx;
  }
  .openNotice p:nth-of-type(1){
    font-size: 31.96upx;
    line-height: 48upx;
    color: #444444;
    padding: 0 36upx 0 36upx;
    margin-bottom: 13.96upx;
  }
  .openNotice p:nth-of-type(2){
    font-size: 25.96upx;
    color: #808080;
    padding: 0 36upx 0 36upx;
    margin-bottom: 63.98upx;
  }
  .openNotice ul li{
    width:100%;
    height:85.96upx;
    text-align: center;
    line-height: 85.96upx;
    font-size: 31.96upx;
    color: #03aef9;
    border-top:0.98upx solid #dcdcdc;
  }
  /*抽奖弹窗*/
  .luckDraw{
    width:100%;
    height:840upx;
    border-radius:36upx;
    background: #ffffff;
    padding-top: 61.96upx;
  }
  .luckDraw .qualification{
    text-align: center;
    font-size:37.96upx;
    color: #03aef9;
    font-weight: 500;
  }

  .luckDraw .title_invitation{
    width:100%;
    height:87.98upx;
    margin-top: 30upx;
    position: relative;
    padding: 0 30upx;
  }
  .luckDraw  .title_invitation .cions-avatar{
    float: left;
    position: relative;
    width: 87.98upx;
    height: 87.98upx;
    border-radius: 50%;
    background: #cccccc;
  }
  .luckDraw  .title_invitation .cions-avatar img{
    width: 87.98upx;
    height: 87.98upx;
    border-radius: 50%;
  }
  .luckDraw  .title_invitation .cions-avatar svg{
    position: absolute;
    font-size: 39.98upx;
    right: -9.98upx;
    bottom: -3.98upx;
  }
  .luckDraw  .text{
    margin-left: 19.96upx;
    float: left;
  }
  .luckDraw  .text p:nth-of-type(1){
    font-size: 27.98upx;
    color: #444444;
    font-weight: 500;
  }
  .luckDraw  .text p:nth-of-type(1) i{
    display: inline-block;
    width:1.96upx;
    height:24upx;
    background: #b4b4b6;
    margin:0 9.98upx -1.96upx 9.98upx;
  }
  .luckDraw  .text p:nth-of-type(2){
    font-size: 24upx;
    color: #444444;
    margin-left: -7.96upx;
  }
 /**/
  .luckDraw .search{
    margin-top: 27.98upx;
    font-size: 27.98upx;
    color: #808080;
    padding: 0 30upx;
  }
  .luckDraw .wechat{
    width:223.96upx;
    height:243.98upx;
    border-radius: 7.96upx;
    border: 1.96upx solid #979797;
    margin: 0 auto;
    margin-top: 45.98upx;
  }
  .luckDraw .wechat img{
    width: 100%;
    height:100%;
  }

  .luckDraw  .waiting{
    margin-top: 24upx;
    font-size: 27.98upx;
    color: #808080;
    text-align: center;
  }
  .luckDraw  .btn{
    width:100%;
    margin-top: 39.98upx;
    height:105.98upx;
    line-height: 105.98upx;
    text-align: center;
    font-size: 31.96upx;
    color: #03aef9;
    border-top:1.96upx solid #dcdcdc;
  }


  .component-phoneBindWarning {
    text-align: center; }
  .component-phoneBindWarning .pbwTitle {
    font-size: 37.96upx;
    font-family: PingFangSC-Medium;
    color: #03aef9;
    line-height: 52.96upx; }
  .component-phoneBindWarning .pbwIphone {
    font-size: 27.98upx;
    font-weight: 400;
    color: gray;
    line-height: 48upx; }
  .component-phoneBindWarning .pwbAvatar {
    margin-top: 48upx;
    position: relative;
    display: inline-block;
    width: 87.98upx;
    height: 87.98upx;
    border-radius: 50%; }
  .component-phoneBindWarning .pwbAvatar img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%; }
  .component-phoneBindWarning .pwbAvatar svg {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: 9.98upx; }
  .component-phoneBindWarning .pwbName {
    font-size: 27.98upx;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #444444;
    line-height: 30upx; }

  .component-addWeChat {
    width: 600upx;
    background: #FFFFFF;
    padding-bottom: 61.96upx;
  }
  .component-addWeChat .close {
    color: #808080;
    text-align: right;
    padding-top: 30upx;
    padding-right: 30upx;
  }
  .component-addWeChat .close .icon {
    font-size: 37.96upx;
  }
  .component-addWeChat .weChatText {
    color: #808080;
    font-size: 25.96upx;
    line-height: 36upx;
    text-align: center;
  }
  .component-addWeChat .weChatImg {
    width: 300upx;
    height: 300upx;
    margin: 25.96upx auto 0;
  }
  .component-addWeChat .weChatImg img {
    width: 100%;
    height: 100%;
  }

  .component-report {
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 999;
    background: #ffffff;
    border-top-left-radius: 36upx;
    border-top-right-radius: 36upx;
  }
  .component-report .report-list {
  }
  .component-report .report-list .title {
    position: relative;
    color: #444444;
    font-size: 31.96upx;
    padding: 30upx 31.96upx;
    overflow: hidden;
  }
  .reportxxx .active_0 .icon, .reportxxx .active_1 .icon, .reportxxx .active_2 .icon, .reportxxx .active_3 .icon, .reportxxx .active_4 .icon, .reportxxx .active_5 .icon {
    display: none;
  }
  .reportxxx .addActive span {
    color: #C8C8C8 !important;
  }
  .reportxxx .addActive .icon {
    display: block !important;
  }
  .component-report .report-list .title span {
    float: left;
  }
  .component-report .report-list .title .icon {
    float: right;
    font-size: 33.98upx;
    color: #03AEF9;
  }
  .component-report .inputWrapper {
    margin-top: 30upx;
    padding: 0 31.96upx;
    position: relative;
  }
  .component-report .inputWrapper .input {
    border: none;
    background: #F3F4F6;
    margin-bottom: 30upx;
  }
  .component-report .buttonWrapper {
    position: relative;
    text-align: center;
  }
  .component-report .buttonWrapper span {
    color: #444444;
    font-size: 31.96upx;
    line-height: 103.96upx;
  }
  .component-report .buttonWrapper.sure span {
    color: #03AEF9;
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

  .contentWrapper {
    width: 600upx;
    background: #FFFFFF;
  }
  .contentWrapper .close, .subscribeWrapper .close, .hotRecommendWrapper .close, .EmailSubscribe .close {
    text-align: right;
    padding: 30upx;
    color: #808080;
    font-size: 25.96upx;
  }
  .contentWrapper .text {
    color: #444444;
    font-size: 31.96upx;
    line-height: 48upx;
    text-align: left;
    padding: 0 30upx;
    font-family:PingFangSC-Medium;
  }
  .contentWrapper .setingStep {
    color: #808080;
    font-size: 25.96upx;
    line-height: 36upx;
    margin-top: 19.96upx;
    text-align: left;
    padding: 0 30upx 60upx;
  }
  .contentWrapper .buttonWrapper, .hotRecommendWrapper .buttonWrapper, .EmailSubscribe .buttonWrapper {
    position: relative;
    text-align: center;
    color: #03AEF9;
    line-height: 97.96upx;
  }
  .contentWrapper .buttonWrapper .bot, .hotRecommendWrapper .buttonWrapper .bot, .EmailSubscribe .buttonWrapper .bot {
    top: 0;
  }

  .hotRecommendWrapper {
    width: 600upx;
    background: #ffffff;
  }
  .hotRecommendWrapper .text {
    margin-bottom: 60upx;
  }

  .subscribeWrapper {
    width: 600upx;
    background: #ffffff;
    padding-bottom: 60upx;
  }
  .subscribeWrapper .title, .hotRecommendWrapper .title, .EmailSubscribe .title {
    color: #444444;
    font-size: 36upx;
    line-height: 48upx;
    margin-bottom: 19.96upx;
  }
  .subscribeWrapper .text, .hotRecommendWrapper .text, .EmailSubscribe .text {
    color: #808080;
    font-size: 25.96upx;
    line-height: 42upx;
  }
  .subscribeWrapper .GZHimg {
    width: 295.96upx;
    height: 300upx;
    margin: 19.96upx auto 0;
  }
  .subscribeWrapper .GZHimg img {
    width: 100%;
    height: 100%;
  }

  .EmailSubscribe {
    width: 600upx;
    background: #ffffff;
  }
  .EmailSubscribe .inputWrapper {
    width: 540upx;
    margin: 30upx auto 0;
  }
  .EmailSubscribe .inputWrapper input {
    border-color: #DCDCDC;
  }
  .EmailSubscribe .tipsInfo {
    color: #FA4975;
    font-size: 21.98upx;
    text-align: left;
    padding-left: 49.96upx;
    margin-top: -21.98upx;
    margin-bottom: 60upx;
  }
  .EmailSubscribe .tipsInfo.showEditEmailErrorTips, .EmailSubscribe .tipsInfo.showEmailErrorTips {
    display: none;
  }
  input::-webkit-input-placeholder {
    color: #C8C8C8;
    font-size: 27.98upx;
  }


  .codeWrapper {
    width: 600upx;
    /*height: 319.96upx;*/
    padding: 60upx 0upx 0;
    background:#FFFFFF;
    border-radius: 36upx;
    text-align: center;
    margin: 0 auto;
    position: relative;
  }
  .codeWrapper .title {
    color: #444;
    font-size:36upx;
    font-family:PingFangSC-Medium;
  }
  .codeWrapper input {
    width: 499.96upx;
    margin: 30upx auto 58.96upx;
    height: 78upx;
    line-height: 78upx;
    text-align: left;
    border-radius: 9.98upx;
    padding: 0 19.96upx;
    color: #444;
    border: 0.98upx solid #DCDCDC;
  }
  .codeWrapper .submit {
    color: #03AEF9;
    font-size: 31.96upx;
    line-height:99.0upx;
    font-family:PingFangSC-Medium;
    border-top: 0.98upx solid #DCDCDC;
  }

  .codeWrapper label {
    padding: 0 79.96upx;
  }

</style>