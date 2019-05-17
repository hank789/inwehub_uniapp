<style scoped>
  .child-view {
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    width:100%;
    transition: all .2s cubic-bezier(.55,0,.1,1);
  }
  .my-slide-left-enter, .my-slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(0, 99.98upx);
    transform: translate(0, 99.98upx);
  }
  .my-slide-left-leave-active, .my-slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(0, -99.98upx);
    transform: translate(0, -99.98upx);
  }
</style>