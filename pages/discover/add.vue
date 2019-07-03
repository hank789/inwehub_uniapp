<template>
  <view class="content">
    <textarea v-model="description" focus="true" maxlength="-1" :class="{hasFile: waitUploadImages.length, hasLink: links.length}" class="textarea" :placeholder="placeholder" />

    <view class="scrollViewImagesWrapper" v-if="waitUploadImages.length">
      <scroll-view :scroll-x="true" class="scrollViewImages">
        <view class="container-upload-images">
          <view class="imageItem" v-for="(image, index) in waitUploadImages" :key="index" >
            <image class="image" :mode="'aspectFill'" :src="image.path" />
            <text class="iconfont icon-times1" @tap.stop.prevent="delImg(index)" />
          </view>
        </view>
      </scroll-view>
    </view>


    <view v-for="(link, index) in links" v-if="links.length" :key="index" class="link">
      <view class="linkBox">
        <!-- 没有图片的样式 -->
        <view v-if="!link.img_url" class="linkIimg">
          <text class="iconfont icon-biaozhunlogoshangxiayise" />
        </view>
        <!-- 有图片的样式 -->
        <image v-else class="image" :mode="'aspectFill'" :src="link.img_url" alt="" />
        <view class="linkContent">
          <view v-if="link.title" class="text-line-2">{{ link.title }}</view>
          <view v-else class="seat" />
          <view class="div text-line-1">{{ link.url }}</view>
        </view>
      </view>
      <view class="linkClose" @tap.stop.prevent="linkClose">
        <text class="iconfont icon-times1" />
      </view>
    </view>

    <view class="container-bottom-menus">
      <view class="leftItems">
        <view class="leftItem" @tap.stop.prevent="toUser" hover-class="hoverClass" :hover-stop-propagation="true">
          <text class="iconfont icon-icon-test2" />
        </view>
        <view class="leftItem" @tap.stop.prevent="totags" hover-class="hoverClass" :hover-stop-propagation="true">
          <text class="iconfont icon-biaoqian2" />
        </view>
        <view class="leftItem" :class="{'disable': !isUploadImage}" @tap.stop.prevent="uploadImage" hover-class="hoverClass" :hover-stop-propagation="true">
          <text class="iconfont icon-tupian" />
        </view>
        <!--<view class="leftItem" :class="{'disable': !isUploadPdf}" @tap.stop.prevent="uploadPdf">-->
          <!--<text class="iconfont icon-wenjian" />-->
        <!--</view>-->
        <view class="leftItem" :class="{'disable': !isUploadLink}" @tap.stop.prevent="promptUrl" hover-class="hoverClass" :hover-stop-propagation="true">
          <text class="iconfont icon-lianjie2" />
        </view>
      </view>

      <view class="rightItems">
        <view
          v-if="address"
          class="component-labelWithIcon selectedAddress float-right text-line-1"
          @tap.stop.prevent="toAddress"
        >
          <text class="iconfont icon-dingwei1" />
          {{ selectedAddress }}
        </view>
      </view>

    </view>

    <prompt
      :visible.sync="promptVisible"
      title="插入链接卡片"
      placeholder="输入链接地址"
      main-color="#007aff"
      @confirm="addLink"
			@updateVisible="updatePromptVisible"
    />
  </view>

</template>

<script>
import ui from '@/lib/ui'
import localStorageKey from '@/lib/localstoragekey'
import { addDiscover, addLink } from '@/lib/discover'
import Prompt from '@/components/zz-prompt/index.vue'
import { fetchArticle } from '@/lib/url'
import { imagesToBase64, uploadImagesByBase64 } from '@/lib/image'

export default {
  components: { Prompt },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true
      },
      group_id: 0,
      maxImageCount: 9,
      description: '',
      address: '所在位置',
      placeholder: '在这里输入您的分享内容\n底部的按钮可以添加：标签、链接、附件',
      isUploadPdf: true,
      selectedGroup: {
        name: ''
      },
      waitUploadImages: [],
      selectedAddress: '所在位置',
      promptVisible: false,
      links: [],
      noticeUsers: [],
      tags: [],
      newTags: []
    }
  },
  onNavigationBarButtonTap(e) {
    this.addDiscover()
  },
  onShow: function() {
    this.readSelectUsers()
    this.readSelectTags()
    this.readSelectPosition()
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    if (option.group_id) {
      this.group_id = option.group_id
    }
    this.pageOption = option
  },
  computed: {
    isUploadImage () {
      if (this.waitUploadImages.length >= this.maxImageCount) {
        return false
      }
      if (this.links.length) {
        return false
      }
      return true
    },
    isUploadLink () {
      if (this.waitUploadImages.length) {
        return false
      }
      if (this.links.length) {
        return false
      }
      return true
    }
  },
  methods: {
    resetData () {
      this.tags = []
      this.newTags = []
      this.noticeUsers = []
      this.pdfs = []
      this.description = ''
      this.images = []
      this.links = []
      this.percentCompleted = 0
      this.selectedAddress = '所在位置'
      this.hide = 0
    },
    delNoticeUser (id) {
      var noticeIndex = this.noticeUsers.indexOf(id)
      if (noticeIndex > -1) {
        this.noticeUsers.splice(noticeIndex, 1)
      }
    },
    noticeUser (id) {
      this.delNoticeUser(id)
      this.noticeUsers.push(id)
    },
    async lastUploadImage(id, successCallback) {
      var photos = await imagesToBase64(this.waitUploadImages)

      if (photos.length < 1) {
        successCallback()
        return
      }

      uploadImagesByBase64(this, id, photos, () => {
        successCallback()
      }, (msg) => {
        ui.toast(msg)
      })
    },
    toAddress() {
      uni.navigateTo({ url: '/pages/position/select?from=discover' })
    },
    uploadPdf() {

    },
    linkClose() {
      this.links = []
    },
		updatePromptVisible(val) {
			this.promptVisible = val
		},
    addLink(url) {
      fetchArticle(url, (data) => {
        this.links = [{
          url: url,
          title: data.title,
          img_url: data.img_url
        }]

        this.promptVisible = false
      })
    },
    delNewTag (tag) {
      var index = this.newTags.indexOf(tag)
      if (index > -1) {
        this.newTags.splice(index, 1)
      }
    },
    uploadImage: function() {
      const that = this

      if (this.waitUploadImages.length >= this.maxImageCount) {
        return false
      }

      if (this.links.length) {
        return false
      }

      uni.chooseImage({
        count: 9 - this.waitUploadImages.length,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 从相册选择
        success: function(res) {
					that.waitUploadImages = that.waitUploadImages.concat(res.tempFiles)
        }
      })
    },
    promptUrl() {
      if (!this.isUploadLink) {
        return
      }

      this.promptVisible = true
    },
    readSelectUsers() {
      const selectUsers = this.$ls.get(localStorageKey.discover_select_user)
      if (selectUsers) {
        selectUsers.forEach((item) => {
          this.description += '@' + item.name + ' '
          this.noticeUser(item.id)
        })
        this.$ls.remove(localStorageKey.discover_select_user)
      }
    },
    readSelectPosition() {
      const address = this.$ls.get(localStorageKey.discover_select_position)
      if (address.toString()) {
        this.selectedAddress = address
      }
    },
    delImg(index) {
      this.waitUploadImages.splice(index, 1)
    },
    readSelectTags() {
      const values = this.$ls.get(localStorageKey.discover_select_tag)
      if (values) {
        values.forEach((item) => {
          this.description += '#' + item.text + ' '
          this.addTags(item.value)
        })
        this.$ls.remove(localStorageKey.discover_select_tag)
      }
    },
    addTags (tag) {
      // 判断是否是字符串
      if (typeof (tag) === 'string') {
        if (this.newTags.indexOf(tag) === -1) {
          this.newTags.push(tag)
        }
        return
      }
      this.delTag(tag)
      this.tags.push(tag)
    },
    delTag (tag) {
      var index = this.tags.indexOf(tag)
      if (index > -1) {
        this.tags.splice(index, 1)
      }
    },
    addDiscover() {
      if (this.links.length) {
				if (!this.description) {
					this.description = this.links[0].title
				}
        addLink(this.description, this.links[0].url, this.group_id, (res) => {
          uni.redirectTo({ url: '/pages/discover/detail?slug=' + res.data.slug })
        })
      } else {
				if (!this.description) {
					ui.toast('请填写分享内容')
					return
				}
        addDiscover(
          this.description,
          this.tags,
          this.newTags,
          this.noticeUsers,
          this.selectedAddress,
          (res) => {
					uni.showLoading({
							title: '图片上传中',
							mask: true
					})
          var id = res.data.id
          this.lastUploadImage(id, () => {
						uni.hideLoading()
            ui.toast('发布成功！')
            this.resetData()
            uni.redirectTo({ url: '/pages/discover/detail?slug=' + res.data.slug })
          })
        })
      }
    },
    toUser() {
      uni.navigateTo({ url: '/pages/user/select?from=discover' })
    },
    totags() {
      uni.navigateTo({ url: '/pages/tag/select?from=discover' })
    }
  }
}
</script>

<style lang="less">
    page, .content{
      background-color: #f3f4f6;
      height: 100%;
      overflow: hidden;
      position: relative;
    }

    .scrollViewImagesWrapper{
      height:182upx;
      width:750upx;
      padding:0 10upx;
    }

    .scrollViewImages{
      height:182upx;
      width:100%;
      white-space: nowrap;
    }

    .textarea {
        width: 100%;
        height:calc(100% - 88upx - 24upx - 182upx);
        padding:24upx 30upx;
    }

    .hasFile{
      height:calc(100% - 88upx - 24upx - 182upx);
    }

    .hasLink{
      height:calc(100% - 88upx - 24upx - 176upx);
    }

    .container-bottom-menus {
        position: fixed;
        display: flex;
        align-items:center;
        width: 100%;
        bottom: 0;
        height: 88upx;
        background: #fff;
        justify-content: space-between;
        line-height: 88upx; }

    .container-bottom-menus .leftItems{
        flex-grow: 2;
    }
    .container-bottom-menus .leftItem{
        display: block;
        float: left;
        padding: 0 30upx;
        font-size: 40upx;
        color: grey;
    }

    .container-bottom-menus .leftItem .iconfont{
        font-size: 50upx;
    }

    .container-bottom-menus .component-labelWithIcon{
        align-self: flex-end;
    }

    .container-bottom-menus .selectGroup{
        background: #03AEF9;
    }

    .component-labelWithIcon {
        margin: 25.96upx 9.98upx;
    }

    .container-upload-images{
      height:182upx;
      padding:20upx 0;
    }
    .container-upload-images .imageItem{
      margin: 9.98upx;
      display: inline-block;
      width: 122upx;
      height: 122upx;
      border-radius: 8upx;
      position: relative;

      .image{
        width:100%;
        height:100%;
        border-radius: 9.98upx;
        -o-object-fit: cover;
        object-fit: cover;
      }

      .iconfont{
        position: absolute;
        right: -9.98upx;
        top: -24upx;
      }
    }

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
          .iconfont{
            color: #C8C8C8;
            font-size: 55.96upx;
          }
        }
        .image {
          width: 87.98upx;
          height: 87.98upx;
          float: left;
          margin-right: 19.96upx;
          border-radius: 7.96upx;
          -o-object-fit: cover;
          object-fit: cover;
        }
        .linkContent {
          font-size: 27.98upx;
          color: #808080;
          .seat {
            width: 19.96upx;
            height: 30upx;
            display: inline-block;
          }
          .div {
            color: #B4B4B6;
            word-wrap: break-word;
          }
        }
      }
      .linkClose {
        position: absolute;
        top: -15.98upx;
        right: 24upx;
        .iconfont{
          width: 31.96upx;
          height: 31.96upx;
          color: #808080;
        }
      }
    }

    .disable{
      .iconfont{
        color:#DCDCDC;
      }
    }
</style>
