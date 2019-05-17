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
    right: 0upx;
    bottom: 0;
    left: 0upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }

  .mui-content {
    background: #FFFFFF;
  }

  .myLabel {
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
    padding: 0 4% 30upx 2%;
    position: relative;
  }

  .myLabel div {
    font-size: 25.96upx;
    margin-top: 30upx;
    color: #808080;
    margin-left: 19.96upx;
  }
  .myLabel button{
    width:150upx;
    height:60upx;
    background: #03aef9;
    font-size: 27.98upx;
    color: #FFFFFF;
    border-color: #03aef9;
    position: absolute;
    right:4%;
    top:52.50upx;
    padding: 0;
  }

  .myLabel li {
    display: inline-block;
    background: #f3f4f6;
    border: 15.98upx;
    border-radius: 7.96upx;
    padding: 9.98upx 24upx 9.98upx 19.96upx;
    margin-top: 19.96upx;
    margin-left: 19.96upx;
    color:#4c4c4c;
  }

  .myLabel li svg {
    font-size: 19.96upx;
    color: #c8c8c8;
    margin-bottom: 3.98upx;
    margin-left: 9.98upx;
  }

  .gray {
    width: 100%;
    height: 19.96upx;
    background: #f3f4f6;
  }

  .addLable {
    width: 100%;
    background: #FFFFFF;
    padding: 30upx 4% 0 4%;
  }

  .addLable p {
    font-size: 25.96upx;
    color: #808080;
  }

  .search {
    width: 100%;
    height: 75.98upx;
    margin-top: 18upx;
    background: #F3F4F5;
    border-radius: 199.96upx;
  }

  .search svg {
    font-size: 33.98upx;
    color: #c8c8c8;
    margin-top: 18upx;
    margin-left: 31.96upx;
    /*margin-right: 9.98upx;*/
    float: left;
  }

  .search input {
    background: #F3F4F5;
    width: 80%;
    height: 69.98upx;
    margin-top: 3.98upx;
    float: left;
    border: none;
    font-size: 27.98upx;
    color: #444444;
  }

  .addLable .tags {
    width: 100%;
    overflow: hidden;
    margin-top: 43.96upx;
  }

  .addLable .tags li {
    width: 100%;
    height: 87.98upx;
    position: relative;
    text-align: left;
    line-height: 87.98upx;
    font-size: 27.98upx;
    color: #808080;
  }

  /*按钮的color*/

  .mui-popup-buttons span.mui-popup-buttons span.mui-popup-button {
    color: #808080;
  }

  /*热门标签的样式*/
  .hotTags{
    width: 100%;
    overflow: hidden;
    margin-top: 43.96upx;
  }
  .hotTags p{
    font-size: 25.96upx;
    color:rgba(128,128,128,1);
    margin-bottom: 19.96upx;
  }
  .hotTags li{
    font-size:27.98upx;
    color:rgba(68,68,68,1);
    padding: 9.98upx 19.96upx;
    border:1.96upx solid RGBA(220, 220, 220, 1);
    border-radius: 7.96upx;
    float: left;
    margin-bottom: 19.96upx;
    margin-right: 19.96upx;
  }
</style>