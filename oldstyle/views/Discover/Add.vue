<style lang="less" rel="stylesheet/less" scoped>
// 新增链接样式
  .link {
    margin-top: 19.96upx;
    padding: 0 37.96upx 0 25.96upx;
    position: relative;
    .linkBox {
      padding: 19.96upx;
      border-radius: 7.96upx;
      background: #fff;
      .linkIimg {
        width: 87.98upx;
        height: 87.98upx;
        float: left;
        text-align: center;
        line-height: 99.98upx;
        margin-right: 19.96upx;
        border-radius: 7.96upx;
        background: #ECECEE;
        .icon {
          color: #C8C8C8;
          font-size: 55.96upx;
        }
      }
      img {
        width: 87.98upx;
        height: 87.98upx;
        float: left;
        margin-right: 19.96upx;
        border-radius: 7.96upx;
      }
      .linkContent {
        font-size: 27.98upx;
        color: #808080;
        .seat {
          width: 19.96upx;
          height: 30upx;
          display: inline-block;
        }
        div {
          color: #B4B4B6;
          word-wrap: break-word;
        }
      }
    }
    .linkClose {
      position: absolute;
      top: -15.98upx;
      right: 24upx;
      .icon {
        width: 31.96upx;
        height: 31.96upx;
        color: #808080;
      }
    }
  }
  .container-pdfs{
    padding:19.96upx;
    height:168upx;

    .pdf{
      .icon{
        position: absolute;
        right:-9.98upx;
        top:-9.98upx;
      }

      color:#808080;
      font-size:27.98upx;
      position: relative;
      background:#fff;
      border-radius: 7.96upx;
      width:451.96upx;
      height:127.96upx;
      padding:19.96upx 19.96upx 19.96upx 127.96upx;

      &:before{
        content: 'PDF';
        color:#fff;
        position: absolute;
        left:19.96upx;
        top:19.96upx;
        background:#DF6F5A;
        border-radius: 7.96upx;
        width:87.98upx;
        height:87.98upx;
        line-height:87.98upx;
        text-align: center;
      }
    }
  }

  .category {
    background: #fff;
    /*padding: 30upx 33.98upx;*/
    height:87.98upx;
    position: relative;
    padding-left: 4%;

    p{
      display: inline-block;
      line-height: 90upx;
      font-size:31.96upx;
      color: #444444;
      text-align: left;

      &:nth-of-type(2){
        display: inline-block;
        margin-left: 60upx;
        color: #444444;
        font-weight: 500;
        position: relative;


        &:after {
          position: absolute;
          width: 63.98upx;

          bottom: 0;
          left: 0;
          height: 3.98upx;
          z-index: 999;
          content: '';
          background-color: #009FE8;
        }
      }
    }

    button {
      position: absolute;
      border: 1.96upx solid #03aef9;
      background-color: #03aef9;
      width: auto;
      font-size: 27.98upx;
      padding: 0upx 33.98upx;
      height: 67.96upx;
      right: 19.96upx;
      top: 6.76upx;
    }
  }

  .mui-content{
    background:#f3f4f6;
  }

  .mui-ios .mui-content{
    overflow: hidden !important;
  }

  .container-bottom-menus{
    position: absolute;
    padding-left: 15.0upx;
    background: #fff;
    left:0;
  }
  .container-bottom-menus span{
    display: block;
    float: left;
    padding: 0 15.0upx;
    font-size: 37.96upx;
    color: grey;
  }

  .component-photograph{
    width:121.96upx !important;
    height:121.96upx !important;
  }
  .selectGroup{
    background:#03AEF9;
    width:174upx;
  }

  .selectedAddress{
    width:174upx;
  }

  .disable{
    .icon{
      color:#DCDCDC;
    }
  }

  .component-textareaWithImage{
    position: absolute;
    left:0;
    right:0;
    bottom: 105.98upx !important;
    margin-bottom:0 !important;
  }
</style>
<style>
  #discoverAddJeditor{
    position: absolute;
    left:0;
    right:0;
    bottom: 252upx;
    top: 0;
  }
  #discoverAddJeditor.hasImages{
    bottom: 252upx;
  }
  #discoverAddJeditor.hasLinks{
    bottom: 300upx;
  }
  #discoverAddJeditor.hasPdfs{
    bottom: 252upx;
  }
  #discoverAddJeditor .textarea-wrapper{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top: 0;
    border:none;
    background: #f3f4f6;
    padding:0;
    margin:0;
  }

  #discoverAddJeditor .counter{
    bottom:-189.98upx;
  }

  #discoverAddJeditor .ql-editor.ql-blank::before{
    font-style:normal;
    font-size: 27.98upx;
    color: #9B9B9B;
  }

  #discoverAddJeditor .textarea-wrapper .ql-container {
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top: 0;
  }

  #discoverAddJeditor .textarea-wrapper .quill-editor {
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top: 0;
    height:auto;
  }

  #discoverAddJeditor .textarea-wrapper .quill-editor .ql-editor{
    position: absolute;
    left:0;
    right:0;
    top: 0;
    bottom:0;
    height:auto;
    padding-bottom:0;
  }

  #discoverAddJeditor.noBottomFile{
    bottom:87.98upx;
  }


  #discoverAddJeditor .quill-editor .ql-container {
    height: inherit;
    font-size: 27.98upx;
    color: #9b9b9b;
  }
  #discoverAddJeditor .counter {
    bottom: 0;
    font-size: 27.98upx;
    color: #c8c8c8;
  }
  #discoverAddJeditor .ql-editor .ql-size-small{
    font-size: 31.96upx;
  }

  #discoverAddJeditor .ql-snow .ql-editor a{
    text-decoration: none;
  }

  #button-wrapper{
    padding-bottom:127.96upx !important;
  }

  .component-labelWithIcon{
    margin: 25.96upx 9.98upx;
  }
</style>