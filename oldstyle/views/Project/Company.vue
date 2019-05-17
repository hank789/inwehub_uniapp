<style lang="less" rel="stylesheet/less" scoped>
  .schedule {
    width: 25%;
    height: 6upx;
    background: #03aef9;
  }

  .schedule-3 {
    margin-left: 50%;
  }

  .basic {
    height: 300upx;
    position: relative;
    text-align: center;
  }

  .basic .title {
    position: relative;
    top: 99.98upx;
    font-size: 39.98upx;
    color: #444;
  }

  .basic .titleSub {
    position: relative;
    top: 109.96upx;
    font-size: 27.98upx;
    color: #808080;
  }

  .companyForm {
    font-size: 27.98upx;
  }

  .companyForm:before {
    left: 31.96upx;
    background-color: #dcdcdc;
    right: 31.96upx;
  }

  .companyForm:after {
    left: 31.96upx;
    background-color: #dcdcdc;
    right: 31.96upx;
  }

  .companyForm label {
    padding-left: 0;
    color: #808080;

  }

  .companyForm input {
    width: 61% !important;
    text-align: right;
    font-size: 27.98upx;
    padding-right: 0;

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
  }

  .companyForm .mui-table-view-cell {
    padding: 12upx 30upx;
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

  .companyForm label {
    width: auto !important;
    max-width: 49%;
    padding-right: 0;
    line-height: normal;
  }

  .companyForm label .optional {
    color: #c8c8c8;
  }

  .companyForm input::placeholder {
    color: #c8c8c8;
  }

  .companyForm .inputUnit {
    padding: 19.96upx;
    margin-right: 30upx;
  }

  .companyForm .textRight {
    float: right;
    display: inline-block;
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

  .noBottomBorder:after {
    display: none;
  }

  .buttonWrapper {
    padding: 33.98upx 31.96upx 60upx;
    background: #fff;
    text-align: center;
  }

  .buttonWrapper button {
    display: inline-block;
    width: 229.96upx;
    margin-top: 19.96upx;
    background: #03aef9;
    border: 1.96upx solid #03aef9;
  }

  .buttonWrapper button:disabled {
    background: #dcdcdc;
    border: 1.96upx solid #dcdcdc;
    color: #b4b4b6;
    opacity: 1;
  }

  .selected {
    display: inline-block;
    color: #03aef9;
    border: 1.96upx solid #03aef9;
    border-radius: 9.98upx;
    padding: 7.96upx 19.96upx 6upx;
    font-size: 27.98upx;
    margin: 13.96upx 13.96upx 0 0;
  }

  .selected .icon {
    color: #c8c8c8;
    font-size: 21.98upx;
    margin-left: 13.96upx;
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
    font-size: 27.98upx;
    height: 100%;
    padding-bottom: 0;
  }


</style>