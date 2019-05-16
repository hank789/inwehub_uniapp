# inwehub_uniapp
使用uniapp重构：https://uniapp.dcloud.io/README


[代码限制]
+ css
   + 不要写内联样式
   + 不能使用css3选择器
   + 单位只能使用px, upx, vh
+ vue
   + created 改为 onLoad
   + mounted 改为 onReady
   + 不能写slot
+ vue模版
    + {{}}  内不能使用复杂表达式
+ vue组件
    + 组件内不支持 onLoad、onShow
    + 自定义组件已iw-开头
+ js
    + 不能使用import as
    + 不能出现window,document,localstorage,cookie
    + 不能使用dom操作
+ html
    + 不能出现div, span, i, img等html标签

