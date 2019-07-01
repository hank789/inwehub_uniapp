<style scoped>
  /*清掉自带样式*/

  div,
  p,
  span,
  i,
  img,
  ul,
  li,
  a,
  input,
  button {
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
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
    background: #fff;
  }
  .groupImageWrapper{
    position: relative;
    margin-top: 9.98upx;
  }
  .groupImageWrapper svg{
    position: absolute;
    top:-9.98upx;
    right:-9.98upx;
  }
  .groupImageWrapper img {
    width: 121.96upx;
    height: 121.96upx;
    border-radius: 7.96upx;
  }

  .component-photograph {
    width: 121.96upx !important;
    height: 121.96upx !important;
  }

  .imagesContainer {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 19.96upx;
  }

  .address {
    width: 92%;
    height: 85.96upx;
    margin-left: 4%;
    position: relative;
    line-height: 85.96upx;
    margin-top: 55.96upx;
  }

  .address p {
    float: left;
    color: #808080;
    font-size: 27.98upx;
  }

  .address input {
    width: 80%;
    height: 84upx;
    float: left;
    margin-bottom: 0;
    padding-right: 0;
    padding-left: 30upx;
    border: none;
    font-size: 27.98upx;
    color: #444444;
    text-align: right;
  }

  .groups-content {
    width: 92%;
    overflow: hidden;
    margin-left: 4%;
    margin-top: 19.96upx;
    position: relative;
  }

  .groups-content p {
    font-size: 27.98upx;
    color: #808080;
  }

  .form-ask .button-wrapper {
    margin-top: 30upx;
    padding: 0 159.98upx
  }

  .textarea-wrapper {
    height: 399.98upx;
    background: #ffffff;
    margin-top: 25.96upx;
    border: 1.96upx solid #DCDCDC;
    border-radius: 9.98upx;
  }

  .textarea-wrapper textarea {
    background: #ffffff;
    font-size: 27.98upx;
    color: #444444;
    height: 327.98upx;
    border: none;
  }

  .counter {
    font-size: 27.98upx;
    color: #C8C8C8;
    position: absolute;
    bottom: 12upx;
    right: 19.96upx;
  }

  .fixedContainer {
    position: relative;
    background: #ffff;
    padding: 9.98upx 22.50upx;
    margin-top: 9.98upx;
  }

  .fixedContainer .counter {
    float: right;
    color: #c8c8c8;
  }

  .fixedContainer .niming {
    color: #444444;
    position: relative;
    font-size: 27.98upx;
    padding-left: 18upx;
    margin-right: 60upx;
  }

  .fixedContainer .niming i {
    color: #808080;
    font-size: 27.98upx;
  }

  .fixedContainer .niming input {
    position: absolute;
    top: 7.96upx;
    left: 0;
    vertical-align: bottom;
  }

  .nimingCheckbox {
    display: inline-block;
    width: 31.96upx;
    height: 31.96upx;
    position: relative;
    border: 1.96upx solid #c8c8c8;
    border-radius: 50%;
    top: 6upx;
    right: 9.98upx;
  }

  .nimingCheckbox.active:after {
    content: ' ';
    display: inline-block;
    width: 7.96upx;
    height: 7.96upx;
    position: absolute;
    border: 1.96upx solid #03aef9;
    background-color: #03aef9;
    border-radius: 50%;
    left: 50%;
    margin-left: -6upx;
    top: 50%;
    margin-top: -6upx;
  }

  button {
    width: 92%;
    height: 87.98upx;
    border-radius: 99.98upx;
    background: #03AEF9;
    font-size: 31.96upx;
    color: #FFFFFF;
    line-height: 87.98upx;
    margin-left: 4%;
    margin-top: 39.98upx;
    border:none;
  }

  button.grey {
    background: rgba(220, 220, 220, 1);
    color: #B4B4B6;
  }
</style>