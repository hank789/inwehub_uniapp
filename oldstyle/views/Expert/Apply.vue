<style scoped>
  .professorCard {
    background: #f3f4f6;
    height: 261.98upx;
  }

  .professorCard .header {
    position: relative;
    height: 183.98upx;
  }

  .professorCard .header .avatar {
    position: absolute;
    left: 50%;
    top: 21.98upx;
    margin-left: -69.0upx;
    z-index: 9;
    color: #ffffff;
    display: inline-block;
    height: 138upx;
    width: 138upx;
    font-size: 39.98upx;
    text-align: center;
    border-radius: 50%;
    vertical-align: top;
  }

  .professorCard .header .avatar .avatarInner {
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

  .professorCard .header .avatar img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: block;
  }

  .professorCard .header .icon {
    position: absolute;
    left: 50%;
    margin-left: 21.98upx;
    font-size: 54upx;
    color: #808080;
    top: 117.98upx;
    z-index: 9;
  }

  .professorCard .title {
    padding: 6upx 0;
    color: #808080;
    font-size: 27.98upx;
    text-align: center;
  }

  .companyForm {
    font-size: 27.98upx;
    margin-top: 0;
  }

  .companyForm:before {
    display: none;
  }

  .companyForm:after {
    left: 31.96upx;
    background-color: #dcdcdc;
    right: 31.96upx;
  }

  .companyForm label {
    padding-left: 0;
    color: #808080;
    width: auto !important;
    max-width: 39%;
    padding-right: 0;
    line-height: normal;
  }

  .companyForm label .optional {
    color: #c8c8c8;
  }

  .companyForm input {
    width: 61% !important;
    text-align: right;
    font-size: 27.98upx;
    padding-right: 0;
  }

  .companyForm input::placeholder {
    color: #c8c8c8;
  }

  .companyForm .mui-table-view-cell {
    padding: 1.96upx 30upx;
  }

  .companyForm .mui-table-view-cell.noBorder:after {
    display: none;
  }

  .companyForm .mui-table-view-cell:after {
    left: 31.96upx;
    right: 31.96upx;
    background-color: #dcdcdc;
    transform: scaleY(0.5);
  }

  .companyForm .mui-table-view-cell .modify {
    position: absolute;
    right: 0;
    top: 19.96upx;
    color: #c8c8c8;
    font-size: 36upx;
  }

  .companyForm .unit {
    padding: 19.96upx 0;
    float: right;
  }

  .companyForm .inputUnit {
    padding: 19.96upx;
    margin-right: 33.98upx;
  }

  .companyForm .textRight {
    float: right;
    display: inline-block;
  }

  .companyForm .inputOnlyText {
    width: 61% !important;
    text-align: right;
    font-size: 27.98upx;
    float: right;
    border: 0;
    padding: 19.96upx 0;
    height: 79.96upx;
    line-height: 42upx;
    color: #c8c8c8;
  }

  .textarea-wrapper {
    margin: 91.96upx 0 0;
    height: 327.98upx;
    position: relative;
    border-radius: 9.98upx;
    border: 1.96upx solid #dcdcdc;
    background: #fff;
    padding-bottom: 39.98upx;
  }

  .textarea-wrapper .counter {
    position: absolute;
    right: 13.96upx;
    font-size: 27.98upx;
    bottom: 9.98upx;
    color: #c8c8c8;
  }

  .textarea-wrapper textarea {
    border: none;
    margin: 0;
    height: 100%;
    padding-bottom: 0;
  }

  .radioWrapper {
    display: inline-block;
    padding: 21.98upx 0 21.98upx 49.96upx;
    margin-left: 36upx;
  }

  .radioWrapper:first-child {
    margin-left: 0;
  }

  .radioWrapper input[type='radio'] {
    left: 0;
    top: 21.98upx;
  }

  .radioWrapper input[type='radio']:before {
    position: absolute;
    left: 0upx;
    color: #c8c8c8;
    font-size: 39.98upx;
  }

  .radioWrapper input[type='radio']:checked:before {
    color: #03aef9;
  }

  .river {
    height: 19.96upx;
    background: #f3f4f6;
  }

  .formTitle {
    padding: 21.98upx 31.96upx;
    color: #444;
    background: #fff;
  }

  .titleBottomForm {
    margin-top: 0;
  }

  .titleBottomForm:before {
    display: block;
    background-color: #dcdcdc;
    left: 30upx;
    right: 30upx;
  }

  .buttonWrapper {
    padding: 12upx 31.96upx 60upx;
    background: #fff;
  }

  .buttonWrapper button {
    margin-top: 19.96upx;
    border-radius: 9.98upx;
    background: #03aef9;
    border: 1.96upx solid #03aef9;
    padding: 19.96upx 0;
  }

  .noBottomBorder:after {
    display: none;
  }

  .mui-toast-message {
    z-index: 999;
    display: block;
  }


</style>