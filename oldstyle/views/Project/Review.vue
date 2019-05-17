<style scoped>
  .projectPreviewCard {
    background: #b4b4b6;
    height: 393.0upx;
    text-align: center;
    color: #fff;
  }

  .projectPreviewCard a {
    position: absolute;
    z-index: 777;
    color: #fff;
    font-size: 60upx;
    top: 24upx;
    left: 12upx;
  }

  .projectPreviewCard .header {
    position: relative;
    height: 183.98upx;
  }

  .projectPreviewCard .header .avatar {
    position: absolute;
    left: 50%;
    margin-top: 25.96upx;
    margin-left: -72.98upx;
    z-index: 9;
    color: #ffffff;
    display: inline-block;
    height: 147.0upx;
    width: 147.0upx;
    font-size: 39.98upx;
    text-align: center;
    border-radius: 50%;
    vertical-align: top;
  }

  .projectPreviewCard .header .avatar .avatarInner {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .projectPreviewCard .header .avatar img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: block;
  }

  .projectPreviewCard .title {
    margin-top: 39.98upx;
    font-size: 33.98upx;
  }

  .projectPreviewCard .titleSub {
    font-size: 27.98upx;
    margin: 6upx 0;
  }

  .projectPreviewCard .state {
    font-size: 27.98upx;
  }

  .projectPreviewCard i.separate {
    display: inline-block;
    position: relative;
    top: 3.98upx;
    height: 27.98upx;
    margin: 0 15.98upx;
    border-left: 1.96upx solid #c8c8c8;
  }

  .section {
    background: #fff;
    margin-top: 19.96upx;
    padding: 0 31.96upx 18upx;
  }

  .section h5 {
    position: relative;
    font-size: 31.96upx;
    color: #444;
    padding: 37.96upx 0;
  }

  .section h5:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1.96upx;
    content: '';
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    background-color: #dcdcdc;
  }

  .section .contentWrapper {
    margin-top: 30upx;
  }

  .section .contentWrapper .toggle {
    position: relative;
    font-size: 25.96upx;
    height: 15.98upx;
  }

  .section .contentWrapper .toggle.show:after {
    border: none;
    border-left: 12upx solid transparent;
    border-right: 12upx solid transparent;
    border-top: 19.96upx solid #d8d8d8;
  }

  .section .contentWrapper .toggle:after {
    position: absolute;
    right: 0;
    top: -12upx;
    width: 0;
    height: 0;
    content: '';
    border: none;
    border-left: 12upx solid transparent;
    border-right: 12upx solid transparent;
    border-bottom: 19.96upx solid #d8d8d8;
  }

  .section .contentWrapper .nav {
    margin: 39.98upx 0 27.98upx;
    background: #f3f4f6;
    text-align: center;
  }

  .section .contentWrapper .nav .navWrapper {
    height: 180upx;
    position: relative;
    background: #f3f4f6;
    font-size: 27.98upx;
    color: #808080;
  }

  .section .contentWrapper .nav .navWrapper .line {
    position: absolute;
    left: 50%;
    top: 19.96upx;
    bottom: 19.96upx;
    width: 1.96upx;
    background: #dcdcdc;
  }

  .section .contentWrapper .nav .row1 {
    margin-top: 49.96upx;
    color: #444;
    font-size: 39.98upx;
  }

  .section .contentWrapper .nav .row2 {
    margin-top: 9.98upx;
    color: #808080;
    font-size: 27.98upx;
  }

  .section .contentWrapper .nav .row2 span {
    font-size: 24upx;
  }

  .section .contentWrapper table {
    width: 100%;
  }

  .section .contentWrapper table td {
    padding: 9.98upx 0;
    vertical-align: top;
  }

  .section .contentWrapper table .tdTitle {
    color: #808080;
    font-size: 27.98upx;
  }

  .section .contentWrapper table .tdContent {
    text-align: left;
    color: #444;
    font-size: 27.98upx;
  }

  .section .contentWrapper .selectedWrapper .selected {
    display: inline-block;
    color: #03aef9;
    border: 1.96upx solid #03aef9;
    border-radius: 9.98upx;
    padding: 7.96upx 19.96upx 6upx;
    font-size: 27.98upx;
    margin: 9.98upx 27.98upx 0 0;
  }

  .section .contentWrapper .description {
    color: #444;
    font-size: 27.98upx;
    line-height: 48upx;
    margin-top: 30upx;
  }

  .section .contentWrapper .requirement {
    margin-top: 39.98upx;
    font-size: 27.98upx;
    color: #444;
  }

  .section .contentWrapper .requirement .icon {
    color: #c8c8c8;
    margin-right: 0;
    vertical-align: middle;
  }

  .section .contentWrapper .requirement .icon.one {
    font-size: 49.96upx;
    position: relative;
    top: 0;
  }

  .section .contentWrapper .requirement .icon.two {
    font-size: 36upx;
    margin-left: 30upx;
  }

  .section .contentWrapper .item {
    position: relative;
    padding-left: 139.96upx;
    margin: 19.96upx 0;
  }

  .section .contentWrapper .item .title {
    color: #808080;
    font-size: 27.98upx;
    line-height: 48upx;
    position: absolute;
    left: 0;
  }

  .section .contentWrapper .item .content {
    font-size: 25.96upx;
    line-height: 48upx;
    color: #444;
  }

  .section .contentWrapper .item .content-5 {
    padding-left: 24upx;
  }

  .section .contentWrapper .item .li {
    position: relative;
    padding-left: 21.98upx;
    margin-bottom: 15.98upx;
  }

  .section .contentWrapper .item .li:before {
    position: absolute;
    left: -7.96upx;
    top: 19.96upx;
    background: #03aef9;
    content: "";
    width: 12upx;
    height: 12upx;
    border-radius: 6upx;
  }

  .section .contentWrapper .files {
    padding-top: 9.98upx;
  }

  .section .contentWrapper .files img {
    border: 1.96upx solid #e5e5e5;
    border-radius: 7.96upx;
    width: 115.96upx;
    height: 115.96upx;
    margin-right: 30upx;
  }

  .section .contentWrapper .requirement .icon:first-child {
    margin-left: 0 !important;
  }
</style>