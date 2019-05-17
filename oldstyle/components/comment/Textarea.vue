<style scoped="scoped">
  .commentWrapper {
    background: #F3F4F5;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    min-height: 90upx;
    overflow: hidden;
    padding: 9.98upx 30upx;
    z-index: 10001;
  }

  .commentWrapper .textareaWrapper {
    position: relative;
    background: #fff;
    border-radius: 9.98upx;
    min-height: 69.98upx;
    width: 88%;
  }
  .commentWrapper .send {
    position: absolute;
    right: 31.96upx;
    bottom: 24upx;
    color: #B4B4B6;
    font-size: 30upx;
  }
  .commentWrapper .send.active {
    color: #03AEF9;
  }

  .commentWrapper textarea {
    border: none;
    display: inline-block;
    width: 100%;
    height: 39.98upx;
    margin: 12upx 0 0;
    padding: 0 61.96upx 0 9.98upx;
    font-size: 27.98upx;

  }

  .commentWrapper textarea::placeholder {
    color: #c8c8c8;
  }

  .commentWrapper .icon {
    position: absolute;
    right: 9.98upx;
    color: #03aef9;
    font-size: 51.98upx;
    bottom: 9.98upx;
  }

  .commentShadowWrapper{
    display: none;
    position: absolute;
    left:0;
    width:100%;
    bottom:0;
  }
</style>
<style>
  #commentJeditor .textarea-wrapper{
    border:none;
    background: none;
    padding-bottom:0;
  }

  #commentJeditor .counter{
    bottom:-189.98upx;
  }
  #commentJeditor .ql-editor.ql-blank::before{
    font-style:normal;
    margin-top:3.98upx;
    font-size: 27.98upx;
    color: #9b9b9b;
  }
  #commentJeditor .textarea-wrapper .quill-editor {
    min-height:69.98upx;
    height:auto;
  }
  #commentJeditor .quill-editor .ql-container {
    min-height: 69.98upx;
    height:auto;
    font-size: 27.98upx;
    color: #9b9b9b;
  }
  #commentJeditor .counter {
    display: none;
  }
  #commentJeditor .ql-editor .ql-size-small{
    font-size: 31.96upx;
  }

  #commentJeditor .ql-snow .ql-editor a{
    text-decoration: none;
  }
  #commentJeditor .ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 13.96upx 49.96upx 13.96upx 18upx;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  #commentJeditor .ql-editor p {
    position: relative;
    color: #444444;
  }
</style>