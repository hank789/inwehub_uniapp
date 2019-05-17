<style lang="less" scoped>
  .mui-slider {
    width: 685.88upx;
    height: 271.96upx;
    border-radius: 9.98upx;
    margin-left: 30upx;
    overflow: hidden;
    padding-bottom: 19.96upx;
  }

  .mui-content {
    background: #fff;
  }

  .tagLabel {
    width: auto !important;
  }

  .component-title-iconAndText {
    margin-top: 19.96upx;
    .hotSpotTop {
      /*width: 132upx;*/
      height: 31.96upx;
      color: #FFFFFF;
      font-size: 19.96upx;
      padding: 0 19.96upx 0 31.96upx;
      text-align: center;
      line-height: 31.96upx;
      border-top-right-radius: 199.96upx;
      border-bottom-right-radius: 199.96upx;
      background: linear-gradient(90deg, #03AEF9 0%, #10C6FF 100%);
    }
  }

  .mui-android .component-title-iconAndText .hotSpotTop {
    line-height: 36.98upx;
  }

  .refreshListWrapper {
    top: 87.98upx !important;
    bottom: 50px !important; /* px不转换 */
  }

  .component-title-iconAndText .iconAndTextLeft .icon {
    color: #FA4975 !important;
  }

  .homeMuiSlider{
    margin-bottom: 19.96upx;
  }

  .container-tags-home-margin {
    margin-top: 0
  }

  .container-tags-home-hide {
    position: absolute;
    background: #fff;
    z-index: 7;
    left: -1999.96upx;
    display: block;
  }

  .showTagsHome {
    position: absolute;
    background: #fff;
    z-index: 7;
    top: 87.98upx;
    left: 0;
    display: block;
  }

  .nav-sticky {
    z-index: 9999;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  .nav-fixed{
    z-index: 9999;
    position: fixed;
    top: 87.98upx;
    left: 0;
    width: 100%;
  }
</style>
<style>
  .home.mui-slider-indicator {
    text-align: right;
    padding-right: 4%;
  }

  .home.mui-slider-indicator .mui-indicator {
    width: 12upx;
    height: 12upx;
    margin: 1.96upx 9.98upx;
    background: rgba(216, 216, 216, 1);
    -webkit-box-shadow: 0 0 0 0 rgba(1216, 216, 216, .7);
    box-shadow: 0 0 0 0 rgba(216, 216, 216, .7);
  }

  .home.mui-slider-indicator .mui-active.mui-indicator {
    width: 24upx;
    height: 12upx;
    background: rgba(3, 174, 249, 1);
    border-radius: 99.98upx;
    -webkit-box-shadow: 0 0 1.96upx 1.96upx rgba(3, 174, 249, .7);
    box-shadow: 0 0 0 0 rgba(3, 174, 249, .7);
  }

  .mui-scrollbar-vertical {
    display: none !important;
  }

  .homeMuiSlider.mui-slider .mui-slider-group .mui-slider-item {
    margin: 0 1.96upx;
  }

  .homeMuiSlider.mui-slider .mui-slider-group .mui-slider-item img {
    height: 271.96upx !important;
    object-fit: cover;
  }
</style>