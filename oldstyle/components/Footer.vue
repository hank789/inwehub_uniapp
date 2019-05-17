<style scoped>
  .container-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 50px; /* px不转换 */
    background: #FFFFFF;
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 9;
    padding: 0 12px; /* px不转换 */}
  .container-footer:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background-color: #dcdcdc;
    width: 100%;
    height: 1px; /* px不转换 */
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5); }
  .container-footer .menu {
    height: 100%;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    width: 100%; }

  .container-footer .menu .desc {
    font-size: 11px; /* px不转换 */
    color: #B4B4B6;
    position: relative;
    top: 14px; /* px不转换 */
    line-height: 18px; /* px不转换 */}
  .container-footer .menu .iconWrapper {
    position: absolute;
    top: 7px; /* px不转换 */
    left: 50%;
    color: #B4B4B6;
    margin-left: -10.5px; /* px不转换 */
    font-size: 21px; /* px不转换 */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
  .container-footer .menu:nth-child(3) .iconWrapper {
    font-size: 21px; /* px不转换 */
    top: 6px; /* px不转换 */
    left: 50%;
    margin-left: -10.5px; /* px不转换 */}
  .container-footer .menu:nth-child(4) .iconWrapper {
    font-size: 22px; /* px不转换 */
    top: 7px; /* px不转换 */
    left: 50%;
    margin-left: -11px; /* px不转换 */}
  .container-footer .menu .imgWrapper {
    width: 40.5px; /* px不转换 */
    height: 40.5px; /* px不转换 */
    background: url("../statics/images/home_ask_btn@3x.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-shadow: 0upx 3.98upx 24upx 0upx rgba(168,223,247,1);
    border-radius: 50%;}
  .container-footer .menu.active .desc,.container-footer .menu.active .iconWrapper {
    color: #444; }

  .mui-badge {
    position: absolute;
    display: inline-block;
    background: #fa4975;
    color: #fff;
    padding: 0upx 6upx;
    min-width: 30upx;
    min-height: 30upx;
    border-radius: 30upx;
    line-height: 30upx;
    left: 50%;
    top: 7px; /* px不转换 */
    margin-left: 12px; /* px不转换 */
  }

  .immersed44 .container-footer{
    height: 84px; /* px不转换 */
    padding-bottom:34px; /* px不转换 */
  }
</style>