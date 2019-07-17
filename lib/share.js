import { postRequest } from './request'
import { stripTags } from './dom'
import ui from './ui'
import store from '@/store'

// #ifdef H5
var wx = require('jweixin-module')
// #endif

var Share = function() {
  var currentUrl = null
  var context = null
  var data = {}
  var successCallback = () => {

  }
  var failCallback = () => {

  }
  var bindShareByPlus = () => {
    var self = this
    self.context.sendHaoyou = () => {
      const data = {
        provider: 'weixin',
        scene: 'WXSceneSession',
        type: self.data.link ? 0 : 1,
        imageUrl: self.data.imageUrl,
        summary: self.data.content ? stripTags(self.data.content).substr(0, 150) : self.data.content,
        href: self.data.link,
        title: self.data.title ? stripTags(self.data.title).substr(0, 150) : self.data.title,
        success: function(res) {
					self.successCallback()
          console.log('success:' + JSON.stringify(res))
        },
        fail: function(err) {
          console.log('fail:' + JSON.stringify(err))
        }
      }
      uni.share(data)
      console.log('sendHaoyou-data:' + JSON.stringify(data))
    }

    var pengYouQuanTitle = self.data.pyqTitle ? self.data.pyqTitle : self.data.title
    var pengYouQuanContent = self.data.pyqContent ? self.data.pyqContent : self.data.content

    self.context.sendPengYouQuan = () => {
      const data = {
				provider: 'weixin',
				scene: 'WXSenceTimeline',
        type: self.data.link ? 0 : 1,
        summary: stripTags(pengYouQuanContent).substr(0, 150),
        href: self.data.link,
        title: stripTags(pengYouQuanTitle).substr(0, 150),
        imageUrl: self.data.imageUrl,
        extra: { scene: 'WXSenceTimeline' },
				success: function(res) {
					self.successCallback()
          console.log('success:' + JSON.stringify(res))
        },
        fail: function(err) {
          console.log('fail:' + JSON.stringify(err))
        }
      }
      uni.share(data)
      console.log('sendPengYouQuan-data:' + JSON.stringify(data))
    }
  }

  // #ifdef H5 || MP-WEIXIN
  var bindShareByWechat = () => {
    var self = this

    this.currentUrl = store.state.baseApiUrl
    // 微信分享
    postRequest(`share/wechat/jssdk`, { current_url: this.currentUrl }).then(response => {
      var code = response.code
      if (code !== 1000) {
        ui.toast(response.message)
        return
      }

      var wechatConfig = response.data.config
      wx.config(wechatConfig)

      wx.error(function(res) {
        console.error('wx:error:' + JSON.stringify(res))
      })

      wx.ready(() => {
        wx.onMenuShareAppMessage({
          title: stripTags(self.data.title).substr(0, 150), // 分享标题
          desc: stripTags(self.data.content).substr(0, 150), // 分享描述
          link: self.data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: self.data.imageUrl, // 分享图标
          type: self.data.type ? self.data.type : 'link', // 分享类型,music、video或link，不填默认为link
          dataUrl: self.data.dataUrl ? self.data.dataUrl : '', // 如果type是music或video，则要提供数据链接，默认为空
          success: () => {
            // 用户确认分享后执行的回调函数
            self.successCallback()
          },
          cancel: () => {
            // 用户取消分享后执行的回调函数
            self.failCallback()
          }
        })

        var pengYouQuanTitle = self.data.pyqTitle ? self.data.pyqTitle : self.data.title

        wx.onMenuShareTimeline({
          title: stripTags(pengYouQuanTitle).substr(0, 150), // 分享标题
          link: self.data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: self.data.imageUrl, // 分享图标
          success: () => {
            self.successCallback()
          },
          cancel: () => {
            self.failCallback()
          }
        })

        self.context.sendHaoyou = () => {
        }

        self.context.sendPengYouQuan = () => {
        }
      })
    })
  }
  // #endif

  var setData = (data) => {
    this.data = data
  }

  var bindShare = (context, data, successCallback, failCallback) => {
    console.log('init share')

    this.context = context
    // var fullUrl = window.location.href
    // this.currentUrl = fullUrl.split('#')[0]
    this.data = data
    if (successCallback) {
      this.successCallback = successCallback
    }

    if (failCallback) {
      this.failCallback = failCallback
    }

    // #ifdef APP-PLUS
    bindShareByPlus()
    // #endif

    // #ifdef MP-WEIXIN
    bindShareByWechat()
    // #endif

    // #ifdef H5
    context.sendHaoyou = () => {
      console.log(this.data)
    }
    context.sendPengYouQuan = () => {
    }
    // #endif
  }
  return {
    bindShare: bindShare,
    setData: setData,
    currentUrl: currentUrl,
    context: context,
    data: data,
    successCallback: successCallback,
    failCallback: failCallback
  }
}

export default new Share()
