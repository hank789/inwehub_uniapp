# inwehub_uniapp
使用uniapp重构：https://uniapp.dcloud.io/README


[代码限制]
+ 请求数据：
	+ this.$request.post
	+ this.$request.get
	+ this.$request.upload

+ 缓存数据(永久)
	+ this.$ls.get
	+ this.$ls.set
+ 缓存数据（应用运行期间）
	+ this.$store.commit('setAppHide', true)
	+ this.$store.state.isAppHide

+ css
   + 不要写内联样式
   + 不能使用css3选择器
      + 以下不能用
        + :nth-of-type
        + ~
        + >
        + 等

   + 单位只能使用px, upx, vh
   + 图标使用
        <text class="iconfont icon-tianjia"></text>
   + 原来的彩色图标不能用
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

