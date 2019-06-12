<template>
  <view>
    <view class="mui-content">
      <RefreshList
        v-if="id"
        ref="RefreshList"
        v-model="list"
        :api="'tags/productReviewList'"
        :request-data="prevOtherData"
        class="listWrapper"
        @prevSuccessCallback="prevSuccessCallback"
      >
        <template v-for="(comment, index) in list">
          <feedDianping :item="comment" :index="index" @showPageMore="showItemMore" />
        </template>
      </RefreshList>

      <view class="container-addComment" @tap.stop.prevent="goAddComment">
        <view class="container-addComment-icon">
          <text class="iconfont icon-fabu logoIcon " />
        </view>
      </view>

    </view>

    <PageMore
      ref="share"
      :share-option="shareOption"
      :hide-share-btn="true"
      :icon-menu="iconMenus"
    />

  </view>
</template>

<script>
import ui from '@/lib/ui'
import feedDianping from '@/components/iw-feed-item/iw-feed-item'
import RefreshList from '@/components/iw-list/iw-list'
import PageMore from '@/components/iw-page-more/iw-page-more'
import userAbility from '@/lib/userAbility'

export default {
  components: {
    feedDianping,
    RefreshList,
    PageMore
  },
  data() {
    return {
      pageOption: {},
      id: '',
      list: [],
      orderBy: 1,
      shareOption: {},
      iconMenus: [],
      totalData: ''
    }
  },
  computed: {
    prevOtherData() {
      return { tag_name: this.id, orderBy: this.orderBy }
    },
    nextOtherData() {
      return { tag_name: this.id, orderBy: this.orderBy }
    }
  },
  mounted() {
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
    const id = this.pageOption.id

    if (!id) {
      ui.toast('请求异常')
      uni.navigateBack()
      return
    }
    this.id = id
  },
  methods: {
    prevSuccessCallback() {
      this.totalNumber = this.$refs.RefreshList.getResponse()
      this.totalData = this.totalNumber.data.total
    },
    goAddComment() {
      this.id = this.pageOption.id
      userAbility.jumpToDianpingAdd(this, this.id)
    },
    showItemMore(shareOption, item) {
      this.iconMenus = []
      this.shareOption = shareOption
      this.$refs.share.share()
    }
  }
}
</script>

<style scoped lang="less">
    .mui-content {
        background: #ffffff;
    }

    .mui-android .commentList .commentUser .userInfo .userName span:nth-of-type(2) {
        line-height: 36upx;
    }
</style>
