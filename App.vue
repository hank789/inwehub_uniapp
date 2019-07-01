<script>
  import notice from './lib/notice.js'
  import html5plus from './lib/html5plus.js'
  import {appShowNotify} from './lib/allPlatform.js'
  export default {
    onLaunch: function () {
      console.log('App Launch');
			try {
        this.$ls.set('appDeviceInfo', uni.getSystemInfoSync())
      } catch (e) {
        console.log(e)
      }
      //#ifdef APP-PLUS
      plus.screen.lockOrientation('portrait-primary');
      html5plus.checkUpdate(this)
      html5plus.saveDeviceInfo(this)
      notice.addPushEventListener()
      //#endif
    },
    onShow: function () {
      console.log('App Show')
      this.$store.commit('setAppHide', false)
      appShowNotify()
    },
    onHide: function () {
      console.log('App Hide')
      this.$store.commit('setAppHide', true)
    }
  }
</script>
<style>
    /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import "./common/uni.css";
    @import "./common/iconfont.css";
    @import "./common/common.css";
    @import "./common/style.css";
</style>