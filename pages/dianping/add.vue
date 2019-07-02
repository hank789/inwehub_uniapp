<template>
  <view>
    <view class="mui-content addDianPing">
      <view class="component-mark">
        <view class="span">{{ markTips ? markTips : '就您的感受而言，您会给他打多少分？' }}</view>
        <view class="stars">
          <starRating  :value="star" @change="changeStarRating" :size="32"/>
          <view v-if="star" class="ratingNumber">{{ star }}分</view>
        </view>
        <view class="line-river-after line-river-after-top" />
      </view>

      <textarea class="textarea" v-model="html" :placeholder="descPlaceholder" />

      <view class="container-images">
        <view v-for="(image, index) in images" class="container-image">
          <text class="iconfont icon-times1 " @tap.stop.prevent="delImg(index)"/>
          <image :id="'image_' + index" mode="aspectFill" class="image" :src="image.path" />
        </view><view v-if="images.length < maxImageCount" class="component-photograph" @tap.stop.prevent="uploadImage()"><text class="iconfont icon-xiangji1 " /></view>
      </view>

      <view class="line-river-big" />

      <view class="container-identity">
        <view class="identityTitle" @tap.stop.prevent="selectUserRole()">
          <view class="span">{{ !identity ? '请告诉我们您的身份' : identity }}</view>
          <text class="iconfont icon-jinru " />
        </view>
        <view class="line-river-after line-river-after-top" />
        <view class="assessDomain">您的评价属于哪个领域</view>
        <view class="domainList">
          <view v-for="(category, index) in detail.categories" :class="{active: !!category.selected}" class="span" @tap.stop.prevent="selectCategory($event, category)">{{ category.name }}</view>
        </view>
        <view class="fixedContainer">
          <view class="span" @tap.stop.prevent="switchHide()"><label class="nimingCheckbox" :class="{'active': hide}" />匿名</view>
        </view>
      </view>
    </view>

    <view class="container-bottom-menus">
      <view class="line-river-after line-river-after-top" />

      <view class="productName text-line-1">{{ detail.name }}</view>
    </view>

    <Options
      :id="'allOptions'"
      ref="allOptions"
      :options="allOption"
      @selectedItem="selectedItem"
    />

  </view>
</template>

<script>
import ui from '@/lib/ui'
import { getLocalUserInfo } from '@/lib/user'
import Options from '@/components/iw-popup-options/iw-popup-options'
import { add, getProductDetail, getTags } from '@/lib/dianping'
import Vue from 'vue'
import starRating from '@/components/iw-star/star-rating.vue'
import localEvent from '@/lib/localstorage'
import userAbilityCheck from '@/lib/userAbilityCheck'
import { imagesToBase64 } from '@/lib/image'

export default {
  components: {
    Options,
    starRating
  },
  data() {
    return {
      pageOption: {},
      loading: 1,
      detail: {},
      id: 0,
      identity: '',
      description: {},
      images: [],
      maxImageCount: 9,
      percentCompleted: 0,
      hide: 0,
      descMaxLength: 5000,
      position: {
        longt: 0,
        lat: 0
      },
      editorObj: null,
      text: '',
      html: '',
      identityId: '',
      star: 0,
      descPlaceholder: '说说您喜欢/不喜欢的点，他帮助您或公司解决了哪些业务上的问题？',
      type: 1,
      allOption: []
    }
  },
  computed: {
    isUploadImage() {
      if (this.images.length >= this.maxImageCount) {
        return false
      }
      return true
    },
    category_ids() {
      var ids = []
      for (var i in this.detail.categories) {
        var item = this.detail.categories[i]
        if (item.selected) {
          ids.push(item.id)
        }
      }
      return ids
    },
    markTips() {
      switch (this.star) {
        case 1:
          return '很烂，不得不吐糟说一说'
        case 2:
          return '凑活，马马虎虎令人不满'
        case 3:
          return '一般，达到行业平均水平'
        case 4:
          return '不错，给人留下深刻印象'
        case 5:
          return '超赞，各方面都比较杰出'
      }
    }
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
    const currentUser = getLocalUserInfo()
    this.id = currentUser.user_id

    getTags(this, (tags) => {
      this.allOption = tags
    })
    this.refreshPageData()
  },
  onNavigationBarButtonTap(e) {
    this.submit()
  },
  methods: {
    changeStarRating (val) {
      this.star = val.value
    },
    selectCategory(event, item) {
      if (this.detail && this.detail.categories.length === 1) {
        return false
      }
      Vue.set(item, 'selected', !item.selected)
    },
    refreshPageData() {
      var isValid = userAbilityCheck.checkPhoneCertification(this)
      if (!isValid) {
        return
      }

      if (this.pageOption.rating) {
        this.star = this.pageOption.rating
      }
      this.initData()
      const id = this.pageOption.id

      if (!id) {
        ui.toast('请求异常')
        return
      }
      this.id = id

      getProductDetail(this, id, (data) => {
        if (data.categories.length === 1) {
          data.categories[0].selected = true
        }
        this.detail = data
        this.loading = 0
      })
    },
    switchHide() {
      this.hide = !this.hide
    },
    selectUserRole() {
      this.$refs.allOptions.toggle()
    },
    selectedItem(item) {
      this.identityId = item.value
      this.identity = item.text
      this.$refs.allOptions.toggle()
    },
    uploadImageSuccess(images) {
      for (var i = 0; i < images.length; i++) {
        this.images.push(images[i])
      }
    },
    initData() {
      console.log('initData() fired')
    },
    onEditorChange(editor) {
      this.html = editor.html
      this.text = editor.text
    },
    onEditorBlur(editor) {
    },
    onEditorFocus(editor) {
    },
    onEditorReady(editor) {
      this.editorObj = editor
    },
    empty() {
      this.resetData()
      uni.navigateBack()
    },
    uploadImage: function() {
      if (!this.isUploadImage) {
        return false
      }

      const that = this
      uni.chooseImage({
        count: 9,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 从相册选择
        success: function(res) {
          res.tempFiles.forEach((item, index) => {
            if (that.images.length < 9) {
              that.images.push(item)
            }
          })
        }
      })

      // this.$refs.uploadImage.uploadImage()
    },
    toggleHide() {
      this.hide = !this.hide
    },
    delImg(index) {
      this.images.splice(index, 1)
    },
    resetData() {
      this.html = ''
      this.star = 0
      this.images = []
      this.percentCompleted = 0
      this.identity = ''
      this.hide = 0
    },
    async submit() {
      var html = this.html
      if (!html) {
        ui.toast('请填写内容')
        return
      }

      if (!this.identity) {
        ui.toast('请选择您的身份')
        return
      }

      if (this.star < 1) {
        ui.toast('您还没为星级打分')
        return
      }

      var data = {
        content: html,
        category_ids: this.category_ids,
        photos: [],
        product_id: this.detail.id,
        rate_star: this.star,
        isHide: this.hide,
        identity: this.identityId
      }

      data.photos = await imagesToBase64(this.images)
      var options = {
        onUploadProgress: function(progressEvent) {
          this.percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          // window.mui.uploadWaitingValue(this.percentCompleted)
        }
      }

      // window.mui.showUploadWaiting()

      add(this, data, options, (res) => {
        ui.toast('发布成功！')
        this.resetData()
        uni.redirectTo({url: '/pages/dianping/comment?slug=' + res.slug})
      })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .mui-content{
        background:#fff;
        bottom:88upx;
    }

    .container-bottom-menus{
        position: absolute;
        /*padding-left: 15.0upx;*/
        background: #fff;
        left:0;
    }
    .container-bottom-menus .span {
        display: block;
        float: left;
        /*padding: 0 15.0upx;*/
        font-size: 37.96upx;
        color: grey;
    }
    .container-bottom-menus .productName {
        max-width: 180upx;
        float: right;
        padding-right: 31.96upx;
        font-size: 25.96upx;
        color: #3C3E44;
        line-height: inherit;
        font-family:PingFangSC-Medium;
    }

    .component-photograph{
        width:121.96upx !important;
        height:121.96upx !important;
    }
    .disable{
        .iconfont{
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
    .component-mark {
        padding: 15.98upx 31.96upx 19.96upx;
        .span {
            color: #B4B4B6;
            font-size: 24upx;
            line-height: 33.0upx;
        }
        .stars {
            position: relative;
            color: #FCC816;
            font-size: 45.98upx;
            /*margin-top: 15.98upx;*/
            margin-bottom: 30upx;
            .ratingNumber {
                position: absolute;
                right: 0;
                bottom: 3.98upx;
                font-size: 36upx;
            }
        }
    }
    .component-box {
        margin: 0 0 0 31.96upx;
    }

    .container-camera {
        padding-top: 9.98upx;
        display: inline-block;
    }
    .camera {
        width: 121.96upx;
        height: 121.96upx;
        position: relative;
        top: -9.98upx;
        background: #DCDCDC;
        border-radius: 7.96upx;
        margin-top: 19.96upx;
        .iconfont{
            font-size: 55.96upx;
            color: #FFFFFF;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
    .container-identity {
        padding-bottom:19.96upx;
        .line-river-after {
            &:after {
                left: 31.96upx;
                right: 31.96upx;
            }
        }
        .identityTitle {
            padding: 24upx 31.96upx 21.98upx;
            line-height: 42upx;
            display: flex;
            justify-content: space-between;
            .span {
                color: #444444;
                font-size: 30upx;
            }
            .iconfont{
                color: #808080;
                margin-top: 6upx;
            }
        }
        .assessDomain {
            color: #B4B4B6;
            font-size: 24upx;
            padding: 24.98upx 31.96upx 12upx;
            line-height: 33.0upx;
        }
        .domainList {
            padding: 0 31.96upx;
            .border-football {
                &:after {
                    border-color: #DCDCDC;
                }
            }
            .span {
                color: #B4B4B6;
                font-size: 24upx;
                line-height: 33.0upx;
                padding: 9.98upx 21.98upx;
                margin-right: 19.96upx;
                margin-top: 12.98upx;
                display: inline-block;
                border-radius: 199.96upx;
                &.active {
                    color: #444444;
                    background: #F3F4F6;
                    &.border-football {
                        &:after {
                            border-color: #F3F4F6 !important;
                        }
                    }
                }
            }
        }
    }
    .fixedContainer {
        position: relative;
        background: #ffff;
        padding: 1.96upx 24upx;
        margin-top: 33.0upx;
        .niming {
            color: #444444;
            position: relative;
            font-size: 27.98upx;
            padding-left: 18upx;
            margin-right: 45.0upx;
            &:nth-of-type(2) {
                margin-right: 0;
            }
            .i {
                color: #808080;
                font-size: 27.98upx;
                font-style: normal;
            }
            .input {
                position: absolute;
                top: 7.96upx;
                left: 0;
                vertical-align: bottom;
            }
        }
        .nimingCheckbox {
            display: inline-block;
            width: 31.96upx;
            height: 31.96upx;
            position: relative;
            border: 1.96upx solid #c8c8c8;
            border-radius: 50%;
            top: 6upx;
            right: 9.98upx;
            &.active {
                &:after {
                    content: ' ';
                    display: inline-block;
                    width: 7.96upx;
                    height: 7.96upx;
                    position: absolute;
                    border: 1.96upx solid #03aef9;
                    background-color: #03aef9;
                    border-radius: 50%;
                    left: 50%;
                    margin-left: -5.26upx;
                    top: 50%;
                    margin-top: -6upx;
                }
            }
        }
    }

    .textarea{
        width:100%;
        padding:0 32upx;
        color:#444;
        line-height:51.98upx;
        font-size: 31.96upx;
        margin-bottom:10px;
    }

    .container-image .iconfont {
        position: absolute;
        right: -10upx;
        top: -26upx;
        z-index:9;
    }
</style>
<style>
    .addDianPing .container-editor.container-editor-add .textarea-wrapper {
        border: none;
        margin: 0;
        padding-bottom:0 !important;
    }
    .addDianPing .ql-editor {
        padding-top: 0 !important;
    }
    .addDianPing .quill-editor {
        min-height: 150upx !important;
        height:auto !important;
    }
    .addDianPing .ql-container {
        min-height: 150upx !important;
        height:auto !important;
    }

    .addDianPing .component-photograph {
        float: left;
        margin-bottom: 19.96upx;
    }
    .addDianPing .container-images .container-image:nth-of-type(3n) {
        margin-right: 20upx;
    }

    .addDianPing .star-rating {
        height: 55.96upx;
        padding-top: 19.96upx;
    }
    .addDianPing .star-rating .rating-text {
        margin-top: -33.98upx !important;
    }
</style>
