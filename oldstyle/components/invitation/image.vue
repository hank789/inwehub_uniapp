<style scoped>

  #scaleWrapper {
    padding: 39.98upx;
  }

  #scaleDivWrapper {
    position: relative;
    top:-3999.98upx;
    transform-origin: left top;
    -webkit-transform: scale(.5);
    transform: scale(.5);
  }

  .onlyImage #scaleWrapper{
    padding:0;
    height:4275.98upx;
    overflow-y: hidden;
  }
  .onlyImage #scaleDivWrapper{
    top:0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .onlyImage .loadding{
    display: none;
  }
</style>