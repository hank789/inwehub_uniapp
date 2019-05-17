<style scoped>
  ul,
  li,
  p,
  span,
  a,
  i {
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
    background: #FFFFFF;
  }
  /*邀请的头部*/
  .invitation-title{
    width:100%;
    height:264upx;
    padding: 0 33.98upx;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .invitation-title svg{
    color: #b4b4b6;
    font-size: 49.96upx;
    position: absolute;
    left:33.98upx;
    top:39.98upx;
  }
  .invitation-title .next-step{
    width:150upx;
    height:67.96upx;
    line-height: 63.98upx;
    border: 1.96upx solid #03aef9;
    border-radius: 99.98upx;
    font-size:27.98upx;
    color:#03aef9;
    position: absolute;
    right:33.98upx;
    top:31.96upx;
  }
  .invitation-title .invitation-text{
    position: absolute;
    top:117.98upx;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .invitation-text p:nth-of-type(1){
    font-size:27.98upx;
    color: #808080;
  }
  .invitation-text p:nth-of-type(2){
    font-size:39.98upx;
    color: #323232;
  }

  .invitation-recommend p{
    width:50%;
    height:87.98upx;
    text-align: center;
    font-size:27.98upx;
    color: #235280;
    line-height: 87.98upx;
    float: left;
  }
  .invitation-recommend p svg{
    font-size: 39.98upx;
    margin-bottom: -3.98upx;
  }
  .invitation-recommend i{
    width:1.96upx;
    height:37.96upx;
    background: #dcdcdc;
    position: absolute;
    top:0;
    bottom: 0;
    left:0;
    right: 0;
    margin: auto;
  }

  .component-contact-find {
    text-align: center; }
  .component-contact-find .line1 {
    font-size: 39.98upx;
    color: #323232;
    line-height: 55.96upx; }
  .component-contact-find .line2 {
    margin-top: 3.98upx;
    font-size: 27.98upx;
    line-height: 39.98upx;
    color: #808080; }
  .component-contact-find .circleWrapper {
    margin-top: 67.96upx;
    display: inline-block;
    position: relative;
    width: 459.98upx;
    height: 459.98upx; }
  .component-contact-find .circleWrapper:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -229.96upx;
    margin-left: -229.96upx;
    width: 459.98upx;
    height: 459.98upx;
    border-radius: 50%;
    border: 1.96upx solid #F3F4F6; }
  .component-contact-find .circleWrapper:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -169.96upx;
    margin-left: -169.96upx;
    width: 339.98upx;
    height: 339.98upx;
    border-radius: 50%;
    border: 1.96upx solid #F3F4F6; }
  .component-contact-find .circleWrapper .iconWrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -129.98upx;
    margin-left: -129.98upx;
    display: inline-block;
    text-align: center;
    width: 267.98upx;
    height: 267.98upx;
    border-radius: 50%;
    background: #F3F4F6; }
  .component-contact-find .circleWrapper .iconWrapper .icon {
    color: #64A0E6;
    margin-top: 49.96upx;
    font-size: 108upx; }
  .component-contact-find .circleWrapper span {
    display: block;
    color: #808080;
    font-size: 27.98upx;
    line-height: 39.98upx;
    margin-top: 12upx; }
</style>