<style scoped>
.supperLine{
  height:1.96upx;
  position: relative;
}
.supperLine:after{
  content:'';
  position: absolute;
  top:0;
  left:0;
  height:1.96upx;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
  background-color: #dcdcdc;
}

.line-horizontal{position:relative;min-height:2.02upx}
.line-horizontal:after{position:absolute;right:0;bottom:0;left:0;height:2.02upx;content:'';-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}
</style>