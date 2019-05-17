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

  .mui-content {
    background: #f3f4f6;
  }
  /*input 输入框*/

  .message {
    width: 100%;
    height: 93.98upx;
    background: #ececee;
    position: absolute;
    bottom: 0;
    padding: 0 19.96upx;
    z-index: 5;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }

  .message input {
    height: 69.98upx;
    border-radius: 9.98upx;
    background: #ffffff;
    border: none;
    margin-bottom: 0;
    box-shadow: 0 0 19.96upx rgba(220, 220, 220, 1);

  }

  .message svg {
    font-size: 73.96upx;
    margin-left: 19.96upx;
    color: #03aef9;

  }
  /*内容区域*/

  .user {
    width: 96%;
    margin-left: 2%;
    overflow: hidden;
    /*background: #CCCCCC;*/
  }

  .user li {
    width: 100%;
    overflow: hidden;
    margin-top: 19.96upx;
    /*border: 1.96upx solid #CCCCCC;*/
  }
   /*客服*/
  .consumer p:nth-of-type(1) {
    text-align: center;
    font-size: 25.96upx;
    color: #b4b4b6;
    line-height: 91.96upx;
  }

  .consumer p:nth-of-type(2) {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .consumer p:nth-of-type(2) img {
    width: 84upx;
    height: 84upx;
    float: left;
    border-radius: 15.98upx;
  }

  .consumer p:nth-of-type(2) span {
    position: relative;
    float: left;
    display: block;
    max-width: 80%;
    min-height: 69.98upx;
    margin-left: 3%;
    border-radius: 19.96upx;
    border: 1.96upx solid #dcdcdc;
    text-align: left;
    background: #FFFFFF;
    padding: 13.96upx;
    word-wrap:break-word;
    margin-top: 31.96upx;
  }

  .consumer p:nth-of-type(2) i{
   position: absolute;
    top: -7.96upx;
    left: 108upx;
    color:#808080;
    font-size:21.98upx;
  }

  .consumer p:nth-of-type(2) span:after {
    content: "";
    display: block;
    width: 12upx;
    height: 12upx;
    background: #FFFFFF;
    border: 1.96upx solid #dcdcdc;
    /*border: 12upx solid transparent;
    border-right: 12upx solid #FFFFFF;
    border-bottom: 12upx solid #FFFFFF;*/
    position: absolute;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    left: -7.96upx;
    border-top-color: #FFFFFF;
    border-left-color: #FFFFFF;
    top: 30upx;
    margin: auto;
  }
  .consumer p:nth-of-type(2) .chatImg{
    width:169.96upx;
    height:210upx;
    padding: 0;
  }
  .consumer p:nth-of-type(2) .chatImg:after {
    z-index: -1;
    content: "";
    display: block;
    width: 12upx;
    height: 12upx;
    background: #FFFFFF;
    border: 1.96upx solid #dcdcdc;
    /*border: 12upx solid transparent;
    border-right: 12upx solid #FFFFFF;
    border-bottom: 12upx solid #FFFFFF;*/
    position: absolute;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    left: -7.96upx;
    border-top-color: #FFFFFF;
    border-left-color: #FFFFFF;
    top: 30upx;
    margin: auto;
  }
  .consumer p:nth-of-type(2) .chatImg img{
    width:100%;
    height:100%;
  }
  /*自己*/

  .Customerservice {
    width: 100%;
    overflow: hidden;
  }

  .Customerservice p:nth-of-type(1) {
    width: 100%;
    text-align: center;
    font-size: 25.96upx;
    color: #b4b4b6;
    line-height: 91.96upx;
  }

  .Customerservice p:nth-of-type(2) {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .Customerservice p:nth-of-type(2) img {
    width: 84upx;
    height: 84upx;
    float: right;
    border-radius: 15.98upx;
  }

  .Customerservice p:nth-of-type(2) span {
    position: relative;
    float: right;
    display: block;
    max-width: 80%;
    min-height: 69.98upx;
    margin-right: 3%;
    border-radius: 19.96upx;
    border: 1.96upx solid #dcdcdc;
    text-align: left;
    background: #FFFFFF;
    padding: 13.96upx;
    word-wrap: break-word;
  }

  .Customerservice p:nth-of-type(2) span:after {
    content: "";
    display: block;
    width: 12upx;
    height: 12upx;
    background: #FFFFFF;
    border: 1.96upx solid #dcdcdc;
    position: absolute;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    right: -7.96upx;
    border-bottom-color: #FFFFFF;
    border-right-color: #FFFFFF;
    top: 30upx;
    margin: auto;
  }
  .Customerservice p:nth-of-type(2) .chatImg{
    width:169.96upx;
    height:210upx;
    padding: 0;
  }
  .Customerservice p:nth-of-type(2) .chatImg:after {
    z-index: -1;
    content: "";
    display: block;
    width: 12upx;
    height: 12upx;
    background: #FFFFFF;
    border: 1.96upx solid #dcdcdc;
    position: absolute;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    right: -7.96upx;
    border-bottom-color: #FFFFFF;
    border-right-color: #FFFFFF;
    top: 30upx;
    margin: auto;
  }
  .Customerservice p:nth-of-type(2) .chatImg img{
    width:100%;
    height:100%;
  }
  .chatListWrapper {
    bottom: 93.98upx !important;
    padding-bottom:19.96upx;
  }
  /*权限提示样式*/
  .hint{
    width: 96%;
    margin-left: 2%;
    overflow: hidden;
  }
  .hint p:nth-of-type(1){
    width: 100%;
    text-align: center;
    font-size: 25.96upx;
    color: #b4b4b6;
    line-height: 91.96upx;
  }
  .hint p:nth-of-type(2){
    background: #ECECEE;
    border-radius:7.96upx;
    color: #808080;
    font-size: 24upx;
    line-height: 33.98upx;
    padding: 15.98upx 30upx;
  }
  .typingWrapper{
    position: absolute;
    bottom:99.98upx;
    text-align: center;
    width: 100%;
  }
  .singleChat .Customerservice p:nth-of-type(2) i{
    display: none;
  }
  .singleChat .consumer p:nth-of-type(2) i{
    display: none;
  }
  .singleChat .Customerservice p:nth-of-type(2) span{
    margin-top:0;
  }
  .singleChat .consumer p:nth-of-type(2) span{
    margin-top:0;
  }
</style>
<style>
  .chatImg .container-image{
    height:210upx;
  }
</style>