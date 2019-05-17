<style scoped lang="less">
  .secrecy {
    height: 67.96upx;
    line-height: 67.96upx;
    color: #B4B4B6;
    font-size: 24upx;
    background: #F3F4F6;
    padding-left: 31.96upx;
  }
  .muiTableView {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
  }
  .account_item_title {
    padding: 9.98upx;
    color: #a6a6a6;
    font-size: 24upx;
  }

  .mui-navbar {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 10;
    height: 87.98upx;
    background-color: #f7f7f8;
  }

  .mui-navbar .mui-bar {
    position: absolute;
    text-align: center;
  }

  .mui-android .mui-navbar-inner.mui-navbar-left {
    opacity: 0;
  }

  .mui-ios .mui-navbar-left .mui-left,
  .mui-ios .mui-navbar-left .mui-center,
  .mui-ios .mui-navbar-left .mui-right {
    opacity: 0;
  }

  .mui-navbar .mui-btn-nav {
    -webkit-transition: none;
    transition: none;
    -webkit-transition-duration: .0s;
    transition-duration: .0s;
  }

  .mui-navbar .mui-bar .mui-title {
    display: inline-block;
    width: auto;
  }

  .mui-page-shadow {
    position: absolute;
    right: 100%;
    top: 0;
    width: 31.96upx;
    height: 100%;
    z-index: -1;
    content: '';
  }

  .mui-page-shadow {
    background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, .01) 50%, rgba(0, 0, 0, .2) 100%);
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, .01) 50%, rgba(0, 0, 0, .2) 100%);
  }

  .mui-navbar-inner.mui-transitioning,
  .mui-navbar-inner .mui-transitioning {
    -webkit-transition: opacity 300ms ease, -webkit-transform 300ms ease;
    transition: opacity 300ms ease, transform 300ms ease;
  }

  .mui-page {
    display: none;
  }

  .mui-pages .mui-page {
    display: block;
  }

  .mui-page .mui-table-view:first-child {
    margin-top: 0;
  }

  .mui-page .mui-table-view:last-child {
    margin-bottom: 60upx;
  }

  .mui-table-view-cell .mui-navigate-right,
  .mui-table-view-cell .mui-navigate {
    color: #999;
  }

  .mui-table-view-divider {
    background-color: #efeff4;
    font-size: 27.98upx;
  }

  .mui-table-view-divider:before,
  .mui-table-view-divider:after {
    height: 0;
  }

  .head {
    height: 79.96upx;
  }

  .mui-ios .mui-navbar .mui-bar .mui-title {
    position: static;
  }

  .account-setting-field {
    position: absolute;
    text-align: right;
    width: 399.98upx;
    right: 79.96upx;
    height: 63.98upx;
    color: #3f3f3f;
    padding-right: 0;
  }

  .mui-input-row label {
    padding-right: 0;
  }

  .mui-input-row textarea {
    border: none !important;
  }

  .mui-input-row input {
    text-align: right;
    padding-right: 79.96upx;
  }

  .mui-input-row a {
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    line-height: 1.1;
    float: left;
    width: 35%;
    padding: 21.98upx 30upx;
  }

  .avatar {
    z-index: 9;
    color: #ffffff;
    position: absolute;
    height: 219.98upx;
    width: 219.98upx;
    right: 60upx;
    top: 39.98upx;
    font-size: 39.98upx;
    text-align: center;
    border-radius: 50%;
  }

  .avatar .avatarInner {
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

  .avatar img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: block;
  }

  .personCard {
    margin-top: 30upx;
    position: relative;
    width: 100%;
    padding-right: 0upx;
    height: 307.96upx;
    background: #fff;
    font-size: 27.98upx;
    color: #555;
    font-weight: bold;
  }

  .personCard .avatar {
    position: absolute;
  }

  .personCard .mui-icon {
    font-size: 48upx;
    position: absolute;
    left: 319.96upx;
    top: 60upx;
  }

  .personCard .title {
    margin-top: 49.96upx;
  }

  .personCard .titleSub {
    margin-top: 49.96upx;
  }

  .personCard .titleSub span {
    color: #3f51b5;
    font-size: 43.96upx;
    margin-left: 30upx;
  }

  .mui-pageSub .mui-table-view-cell {
    padding: 0;
  }

  .textarea-wrapper {
    margin: 0 9.98upx;
    height: 100%;
    position: relative;
    border-radius: 9.98upx;
    border: 1.96upx solid #bbbbbb;
    background: #fff;
    padding-bottom: 39.98upx;
  }

  .textarea-wrapper .counter {
    position: absolute;
    right: 7.96upx;
    font-size: 24upx;
    bottom: 3.98upx;
    color: #b0b0b0;
  }

  .textarea-wrapper textarea {
    border: none;
    margin: 0;
    padding-bottom: 0;
  }

  .deleteWrapper {
    text-align: right;
    padding: 19.96upx;
  }

  .mui-bar .save {
    font-size: 27.98upx;
  }

  .no-empty {
    color: #999;
  }

  .iplus {
    color: #007aff;;
    font-size: 31.96upx;
    vertical-align: text-top;
    margin-right: 19.96upx;
  }

  .emptyFields {
    color: #999;
  }

  .titleSubSub {
    font-size: 24upx;
    color: #999;
  }

  .mui-content > .mui-table-view:first-child {
    margin-top: 0;
  }
</style>