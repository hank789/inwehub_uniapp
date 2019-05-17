<style lang="scss" module>
  .content {
    padding: 19.96upx 30upx;
    background: #fff;
    border-radius: 19.96upx;
    font-size: 27.98upx;

  }
  .success {
    color: #59b6d7;
    &:before {
      font-size: 36upx;
    }
  }
  .error {
    color: red;
    &:before {
      font-size: 36upx;
    }
  }
  .notice {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    z-index: 10;
    margin: 0;
    background: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
</style>