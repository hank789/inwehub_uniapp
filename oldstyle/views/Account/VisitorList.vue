<style scoped>
  @media (-webkit-device-pixel-ratio: 2) {
    .line-river {
      height: 1px !important; /* px不转换 */} }

  .line-river {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 0.5px; /* px不转换 */
    position: relative;
    width: 100%;
    background-color: #dcdcdc;
    overflow: hidden; }
  .line-river:after{
    display: none;
  }
  .mui-content{
    background:#fff;
  }
  .component-card {
    position: relative;
    height: 288upx;
    background: linear-gradient(-135.1deg, #07d6fc, #03aef9);
    width: 100%;
    text-align: center; }
  .component-card:before {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    content: '';
    height: 100%;
    background-image: url("../../statics/images/baisebolang@3x.png");
    background-size: contain;
    background-position: left 144upx;
    background-repeat: no-repeat;
    opacity: 0.16; }
  .component-card .number {
    font-size: 55.96upx;
    line-height: 81.98upx;
    padding-top: 37.96upx;
    color: #fff; }
  .component-card .number .icon {
    margin: 0 -6upx; }
  .component-card .label {
    display: inline-block;
    width: 135.98upx;
    height: 37.96upx;
    font-size: 24upx;
    line-height: 37.96upx;
    background: #235280;
    border-radius: 7.96upx;
    color: #A8DFF7;
    margin-top: 3.98upx; }
  .component-card .desc {
    margin-top: 13.96upx;
    font-size: 24upx;
    color: #fff;
    line-height: 33.98upx; }

  .component-imageAndText {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 9.98upx;
    position: relative;}
  .component-imageAndText .imageWrapper img {
    width: 87.98upx;
    height: 87.98upx;
    border-radius: 50%; }
  .component-imageAndText .textWrapper {
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    padding: 9.98upx 0 0 15.98upx;
    line-height: 36upx; }
  .component-imageAndText .textWrapper .line-1 {
    max-width: 445.96upx;
    color: #444444;
    font-size: 27.98upx; }
  .component-imageAndText .textWrapper .line-2 {
    color: #B4B4B6;
    font-size: 25.96upx; }
  .component-imageAndText .time {
    font-size: 24upx;
    color: #235280;
    position: absolute;
    right: 0;
    top: 6upx; }

  .container-list-people .item {
    padding: 19.96upx 31.96upx 0; }

  .component-button-empty{
    margin-top:60upx;
  }
</style>