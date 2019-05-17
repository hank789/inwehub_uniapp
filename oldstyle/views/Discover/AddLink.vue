<style scoped lang="less">
  .mui-content {
    background: #FFF;
  }
  .submit {
    color: #03AEF9;
    font-size: 30upx;
    position: absolute;
    right: 31.96upx;
    top: 22.96upx;
  }
  .shareTitle {
    font-size: 39.98upx;
    color: #444444;
    text-align: center;
    margin: 69.98upx 0 109.96upx;
  }

  .inputWrapper {
    padding: 0 49.96upx;
    .input {
      border: none;
      margin-bottom: 0;
      padding-left: 0;
    }
  }

  .linkWrapper {
    display: flex;
    padding: 0 49.96upx;
    margin-top: 39.98upx;
    justify-content: space-between;
    .leftText {
      .text {
        color: #444444;
        font-size: 31.96upx;
        line-height: 45.98upx;
      }
      .icon {
        font-size: 15.98upx;
        color: #808080;
        margin-top: 21.98upx;
      }
    }
    .right {
      margin-left: 27.98upx;
      .articleImg {
        width: 193.96upx;
        height: 141.98upx;
        img {
          width: 100%;
          height: 100%;
          border-radius: 7.96upx;
          object-fit: cover;
        }
      }
    }
  }
  .tagsWapper {
    padding: 0 49.96upx;
    margin-top: 39.98upx;
    .title {
      color: #B4B4B6;
      font-size: 21.98upx;
    }
    .tagsList {
      margin-top: 15.98upx;
      font-size: 0;
      span {
        color: #444444;
        font-size: 24upx;
        padding: 9.98upx 19.96upx;
        border-radius: 199.96upx;
        display: inline-block;
        background: #F3F4F6;
        margin-right: 19.96upx;
        margin-bottom: 19.96upx;
        &.active {
          color: #FFF;
          background: #03AEF9;
        }
      }
    }
  }

  .footerWrapper {
    position: absolute;
    bottom: 60upx;
    left: 49.96upx;
    .text {
      color: #C8C8C8;
      font-size: 21.98upx;
      line-height: 37.96upx;
      span {
        margin-right: 15.98upx;
      }
    }
  }
</style>