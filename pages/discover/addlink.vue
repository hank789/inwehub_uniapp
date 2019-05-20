<template>
  <view>
    <cmd-nav-bar :fixed="false" right-color="#03AEF9" right-text="确认发布" back title="发布" @rightText="rightText" />

    <view v-if="!loading">

      <view class="shareTitle font-family-medium">分享到首页</view>

      <view class="inputWrapper">
        <input v-model="url" class="input" type="text" placeholder="输入文章链接">
        <view class="line-river-after line-river-after-top" />
      </view>

      <view v-show="urlTitle" class="linkWrapper">
        <view class="leftText">
          <view class="text font-family-medium text-line-2">{{ urlTitle }}</view>
          <text class="iconfont icon-times--" />
        </view>
        <view v-show="urlImage" class="right">
          <view class="articleImg">
            <image :src="urlImage" width="97" height="71" />
          </view>
        </view>
      </view>

      <view class="tagsWapper">
        <view class="title">所属领域</view>

        <view class="tagsList">
          <text v-for="(item, index) in regions" v-if="item.value>0" class="span" :class="{active: item.selected}" @tap.stop.prevent="choiceItem(index, item)">{{ item.text }}</text>
        </view>
      </view>

      <view class="footerWrapper">
        <view class="text"><text class="span">1.</text>分享的文章链接会出现在首页的全部中</view>
        <view class="text"><text class="span">2.</text>热门的文章链接会被推荐</view>
        <view class="text"><text class="span">3.</text>优质内容会得到更多的曝光和传播</view>
      </view>

    </view>
  </view>
</template>

<script>
import cmdNavBar from '@/components/cmd-nav-bar/cmd-nav-bar.vue'
import { addLink, getRegions } from '@/lib/article'
import { searchText } from '@/lib/search'
import { fetchArticle, isUrl } from '@/lib/url'
import Vue from 'vue'

export default {
  components: { cmdNavBar },
  data() {
    return {
      loading: 1,
      regions: [],
      originRegions: [],
      urlTitle: '',
      urlImage: '',
      url: ''
    }
  },
  onLoad() {
    getRegions((regions) => {
      this.regions = regions
      this.originRegions = regions
      this.loading = 0
    })
  },
  watch: {
    url: function(newValue) {
      searchText(newValue, (text) => {
        var rs = isUrl(text)
        if (rs) {
          this.fetchUrlInfo(newValue)
        } else {
          window.mui.toast('请正确输入文章链接')
        }
      })
    }
  },
  methods: {
    resetUrl() {
      this.url = ''
      this.urlTitle = ''
      this.urlImage = ''
    },
    resetData() {
      this.resetUrl()
      this.regions = JSON.parse(JSON.stringify(this.originRegions))
    },
    rightText() {
      if (!this.url) {
        this.$ui.toast('请输入文章链接')
        return
      }

      var selectedTags = []
      for (var i = 0; i < this.regions.length; i++) {
        if (this.regions[i].selected) {
          selectedTags.push(this.regions[i].value)
        }
      }

      addLink(this.urlTitle, this.url, selectedTags, () => {
        this.resetData()
        uni.navigateBack()
      }, (res) => {
        var code = res.code
        if (code === 6101) {
          // 已存在
          this.$ui.toast(res.message)
          uni.redirectTo({ url: res.data.exist_url })
          return
        }
      })
    },
    choiceItem(index, item) {
      item.selected = item.selected ? 0 : 1
      Vue.set(this.regions, index, item)
    },
    fetchUrlInfo(url) {
      fetchArticle(this, url, (data) => {
        this.urlTitle = data.title
        this.urlImage = data.img_url
      })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .mui-content {
        background: #FFF;
    }
    .submit {
        color: #03AEF9;
        font-size: 30upx;
        position: absolute;
        right: 31.96upx;
        top: 22.96upx;
    }
    .shareTitle {
        font-size: 39.98upx;
        color: #444444;
        text-align: center;
        margin: 69.98upx 0 109.96upx;
    }

    .inputWrapper {
        padding: 0 49.96upx;
        .input {
            border: none;
            margin-bottom: 0;
            padding-left: 0;
        }
    }

    .linkWrapper {
        display: flex;
        padding: 0 49.96upx;
        margin-top: 39.98upx;
        justify-content: space-between;
        .leftText {
            .text {
                color: #444444;
                font-size: 31.96upx;
                line-height: 45.98upx;
            }
            .icon {
                font-size: 15.98upx;
                color: #808080;
                margin-top: 21.98upx;
            }
        }
        .right {
            margin-left: 27.98upx;
            .articleImg {
                width: 193.96upx;
                height: 141.98upx;
                image {
                    width: 100%;
                    height: 100%;
                    border-radius: 7.96upx;
                    object-fit: cover;
                }
            }
        }
    }
    .tagsWapper {
        padding: 0 49.96upx;
        margin-top: 39.98upx;
        .title {
            color: #B4B4B6;
            font-size: 21.98upx;
        }
        .tagsList {
            margin-top: 15.98upx;
            font-size: 0;
            .span {
                color: #444444;
                font-size: 24upx;
                padding: 9.98upx 19.96upx;
                border-radius: 199.96upx;
                display: inline-block;
                background: #F3F4F6;
                margin-right: 19.96upx;
                margin-bottom: 19.96upx;
                &.active {
                    color: #FFF;
                    background: #03AEF9;
                }
            }
        }
    }

    .footerWrapper {
        position: absolute;
        bottom: 60upx;
        left: 49.96upx;
        .text {
            color: #C8C8C8;
            font-size: 21.98upx;
            line-height: 37.96upx;
            .span {
                margin-right: 15.98upx;
            }
        }
    }
</style>
