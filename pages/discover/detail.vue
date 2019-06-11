<template>
  <view>

    <view v-show="!loading" class="mui-content" @tap.capture="onTap($event)">
      <view v-if="isShow">

        <view v-if="detail.type === 'article' && detail.data.img" class="topImg container-image">
          <image mode="aspectFill" :src="detail.data.img" />
        </view>

        <view class="mui-table-view detail-discover">
          <UserInfo
            :uuid="detail.owner.uuid"
            :avatar="detail.owner.avatar"
            :realname="detail.owner.name"
            :is-follow="isFollow"
            :is-followed="detail.is_followed_author?true:false"
            :is-show-position-and-company="false"
            :is-expert="detail.owner.is_expert?1:0"
            :time="detail.created_at"
            @setFollowStatus="setFollowStatus"
          />

          <view v-if="detail.type === 'article' && detail.title" class="detailTitle">{{ detail.title }}</view>

          <!--<view class="line-river lineMargin"></view>-->

          <view class="discoverContentWrapper">
            <view
              id="contentWrapper"
              class="contentWrapper quillDetailWrapper container-editor container-editor-app"
            >
              <view v-if="detail.type !== 'article'" v-html="textToLink(detail.title)" />

              <view v-show="detail.type === 'article'" class="richText container-editor container-editor-app">
                <view class="quill-editor">
                  <view class="ql-container ql-snow">
                    <view class="ql-editor discoverContent" />
                  </view>
                </view>
              </view>

            </view>

            <view
              v-if="detail.type === 'text' && detail.data.files && detail.data.files.length"
              class="container-pdf-list"
            >
              <view
                v-for="(pdf, index) in detail.data.files"
                :key="index"
                class="pdf"
                @tap.stop.prevent="seePdf(pdf)"
              ><view class="text-line-2">{{ pdf.name }}</view></view>
            </view>

            <view
              v-if="detail.type === 'text' && detail.data.img && detail.data.img.length"
              class="linkWrapper Column"
            >
              <template v-for="(image, index) in detail.data.img">
                <image
                  :id="'image_' + index"
                  :key="image"
                  :src="image"
                  class="discover_img lazyImg"
                  :data-preview-src="image"
                  :data-preview-group="1"
                />
              </template>
            </view>
          </view>

          <!--<view class="groups"  v-if="typeDesc(detail.group.is_joined)"-->
          <!--@tap.stop.prevent="$uni.navigateTo('/group/detail/' + detail.group.id)">加入圈子阅读全部内容-->
          <!--</view>-->

          <!-- 新增链接样式 -->
          <view v-if="detail.type === 'link' && detail.data.url" class="link">
            <view class="linkBox" @tap.stop.prevent="goArticle(detail)">
              <view v-if="!detail.data.img" class="linkIimg">
                <text class="iconfont icon-biaozhunlogoshangxiayise" />
              </view>
              <image v-else :key="detail.data.img" :src="detail.data.img" mode="aspectFill" />
              <view class="linkContent">
                <view v-if="detail.data.title" class="text-line-2">{{ detail.data.title }}</view>
                <view v-else class="seat" />
                <view class="text-line-1">{{ detail.data.domain }}</view>
              </view>
            </view>
          </view>

          <view class="timeContainer">
            <view class="makingCopy">著作权归作者所有</view>
            <view v-if="detail.group.name" class="fromGroup">
              <view @tap="toDetail(detail.group)"><view>来自圈子</view>{{ detail.group.name }}</view>
            </view>
          </view>

          <!-- 关联问答 -->
          <view
            v-if="detail.related_question"
            class="answer"
            @tap.stop.prevent="toAnswerDetail(detail.related_question)"
          >
            <view class="answerBox">
              <view class="answerContent">
                <view class="price">
                  <view />{{ detail.related_question.status_description }}
                </view>
                {{ detail.related_question.title }}

              </view>
              <view class="followAnswer">
                <view class="follow">{{ detail.related_question.follow_number }}人关注 </view>
                <view class="rightLine" />
                <view class="replay">
                  <image v-for="(answerUser, index) in detail.related_question.answer_users" mode="aspectFill" :src="answerUser.avatar" />
                  <view>等{{ detail.related_question.answer_number }}人回答</view>
                </view>
              </view>
            </view>
          </view>

          <view class="share">
            <view v-show="detail.data.current_address_name" class="location">
              <text class="iconfont icon-dingwei1" />
              <view>{{ detail.data.current_address_name }}</view>
            </view>
          </view>
        </view>

        <!--<view class="river" v-if="detail.supporter_list.length"></view>-->
        <view class="river" />

        <ArticleDiscuss
          v-if="detail.slug"
          id="commentTitle"
          ref="discuss"
          class="commentTitle"
          :list-api="'article/comments'"
          :list-params="discussListParams"
          :store-api="'article/comment-store'"
          :store-params="discussStoreParams"
          @comment="comment"
          @commentFinish="commentFinish"
          @goComment="goComment"
          @delCommentSuccess="delCommentSuccess"
        />
        <view
          v-if="detail.comments_number > 3"
          class="seeAll"
          @tap.stop.prevent="$uni.navigateTo('/comment/' + detail.category_id + '/' + detail.slug + '/' + detail.id)"
        >
          查看全部{{ detail.comments_number }}条评论
        </view>
      </view>

      <!--私密的样式-->
      <view v-if="isShow && detail.related_tags.length !== 0" class="container-recommentProduct">
        <view class="river" />
        <view class="title">
          <view class="text font-family-medium">相关产品</view>
          <view class="line-river line-river-full" />
        </view>

        <view class="productList">
          <view v-for="(item, index) in detail.related_tags" :key="index" class="comment-product">
            <view
              class="product-info"
              @tap.stop.prevent="$uni.navigateTo('/dianping/product/' + encodeURIComponent(item.name))"
            >
              <view class="product-img border-football">
                <image mode="aspectFill" :src="item.logo" width="44" height="44" />
                <!--<image mode="aspectFill" src="../../static/images/uicon.jpg" alt="">-->
              </view>
              <view class="product-detail">
                <view class="productName font-family-medium text-line-1">{{ item.name }}</view>
                <view class="productMark">
                  <view class="stars">
                    <StarView :rating="item.review_average_rate" />
                  </view>
                  <view class="starsText">
                    <view class="span">{{ item.review_average_rate }}分</view>
                    <view class="i" /><view>{{ item.review_count }}条评论</view>
                  </view>
                </view>
              </view>
            </view>
            <view
              v-if="index !== detail.related_tags.length - 1"
              class="line-river-after line-river-after-top"
            />
          </view>
        </view>

      </view>

      <view v-if="isShow" class="river" />
      <view v-if="isShow" class="guessLike">
        <view class="component-block-title">
          <view class="left">猜您喜欢</view>
        </view>
        <view class="line-river-after" />
        <template v-for="(item, index) in list">
          <view v-if="index === 5" class="line-river-big" />
          <view class="component-item-article" @tap.stop.prevent="goDetail(item)">
            <view class="itemArticleLeft">
              <view class="titleWrapper">
                <view class="title text-line-2 text-content">
                  <!--<view class="number" v-if="index < 5">{{index+1}}.</view>-->{{ item.data.title }}
                </view>
              </view>
              <view class="explain">
                <label v-if="item.tips">{{ item.tips }}</label><view
                  v-if="item.type_description"
                >{{ item.type_description }}</view>
                {{ timeago(item.created_at) }}
              </view>
            </view>
            <view class="itemArticleRight"><image mode="aspectFill" :src="item.data.img" /></view>
          </view>
          <view v-if="index !== 4 && index !== list.length-1" class="line-river-after line-river-after-short" />
        </template>
      </view>
      <view v-if="isShow" class="river" />

      <view v-if="isShow" class="openAppReadBox">
        <view class="openAppRead" @tap.stop.prevent="openApp()">
          <view class="font-family-medium">打开APP</view>
          <view>阅读更多推荐</view>
        </view>
        <view class="river openAppReadRiver" />
        <view class="followCode">
          <view class="CodeImg">
            <image mode="aspectFill" src="../../static/images/xiaohaWeChat@3x.png" alt="" />
          </view>
          <view class="codeText">
            <view>长按添加平台联络官“小哈”微信</view>
            <view>加行业群/互动交流/探索更多</view>
          </view>
        </view>
        <view class="river openAppReadRiver" />
      </view>
    </view>

    <PageMore
      ref="ShareBtn"
      :share-option="shareOption"
      :icon-menu="iconMenus"
      @success="shareSuccess"
      @fail="shareFail"
      @clickedItem="iconMenusClickedItem"
    />

    <commentTextarea ref="ctextarea" @sendMessage="sendMessage" />

    <view @tap.capture="onTap($event)">
      <DetailMenu
        :detail="this.detail"
        :is-detail-up-vote="isDetailUpVote"
        :is-num-up-vote="detail.is_upvoted"
        :icon-options="iconOptions"
        @detailMenuIcon="detailMenuIcon"
        @WriteComment="goComment"
        @clickUpVote="upVote"
      />
    </view>

    <AlertTextarea ref="AlertTextarea" />

    <iwDialogReport ref="alertReport"></iwDialogReport>
  </view>
</template>

<script>
import { getCurrentRoute } from '@/lib/allPlatform'
import ui from '@/lib/ui'
import { postRequest } from '@/lib/request'
import UserInfo from '@/components/iw-discover/user-info.vue'
import ArticleDiscuss from '@/components/iw-discover/discuss.vue'
import PageMore from '@/components/iw-page-more/iw-page-more.vue'
import { getTextDiscoverDetail } from '@/lib/shareTemplate'
import localEvent from '@/lib/localstorage'
const currentUser = localEvent.get('UserInfo')
import commentTextarea from '@/components/iw-comment-textarea/iw-comment-textarea.vue'
import AlertTextarea from '@/components/iw-comment-alerttextarea/iw-comment-alerttextarea.vue'
import userAbility from '@/lib/userAbility'
import {
  upvote,
  downVote,
  deleteItem,
  setTop,
  addGood,
  cancelGood,
  cancelTop,
  collect,
  report
} from '@/lib/discover'
import DetailMenu from '@/components/iw-menu-detail/iw-menu-detail.vue'
import StarView from '@/components/iw-star/iw-star.vue'
import iwDialogReport from '@/components/iw-dialog/report.vue'
import { textToLinkHtml, transferTagToLink, addPreviewAttrForImg } from '@/lib/dom'
import { showComment } from '@/lib/comment'


export default {
  components: {
    UserInfo,
    ArticleDiscuss,
    PageMore,
    commentTextarea,
    DetailMenu,
    StarView,
    AlertTextarea,
    iwDialogReport
  },
  data() {
    return {
      pageOption: {},
      editorOptionRead: {
        placeholder: ' ',
        modules: {
          toolbar: []
        },
        readOnly: true
      },
      editorReadObj: null,
      editorReadContentObj: null,
      userId: currentUser.user_id,
      name: currentUser.name,
      uuid: currentUser.uuid,
      slug: '',
      noback: false,
      title: '分享',
      isUpvote: String,
      list: [],
      link: '分享',
      detail: {
        group: {
          is_joined: '',
          id: '',
          public: '',
          name: ''
        },
        owner: {
          id: '',
          uuid: '',
          avatar: '',
          username: ''
        },
        id: 0,
        supporter_list: [],
        title: '',
        data: {
          img: [],
          description: ''
        },
        created_at: ''
      },
      shareOption: {
        title: '',
        link: '',
        content: '',
        imageUrl: '',
        thumbUrl: '',
        shareName: '',
        targetType: 'submission',
        targetId: ''
      },
      isFollow: true,
      loading: true,
      isDetailUpVote: false,
      animObjects: []
    }
  },
  computed: {
    isShow() {
      var ispublic = this.detail.group.public
      var type = this.detail.group.is_joined
      //  公开的都展示
      if (ispublic) {
        return true
      } else {
        if (type === 1 || type === 3) {
          return true
        } else {
          return false
        }
      }
    },
    discussStoreParams() {
      return { 'submission_id': this.detail.id }
    },
    discussListParams() {
      return { 'submission_slug': this.detail.slug, order_by: 2, perPage: 3 }
    },
    descLength() {
      if (this.description === this.descPlaceholder) {
        return 0
      }
      return this.description.length
    },
    iconMenus() {
      var iconMenus = []

      if (!this.detail.id) {
        return iconMenus
      }

      if (this.userId === this.detail.owner.id) {
        iconMenus.push({
          icon: 'icon-shanchu1',
          text: '删除'
        })
      }
      if (this.detail.is_bookmark) {
        iconMenus.push({
          icon: 'icon-shoucangdilantongyi',
          text: '已收藏',
          isBookMark: 1
        })
      } else {
        iconMenus.push({
          icon: 'icon-shoucangdilantongyi',
          text: '收藏',
          isBookMark: 0
        })
      }

      if (this.detail.group && this.detail.group.is_joined === 3) {
        if (this.detail.is_recommend) {
          iconMenus.push({
            icon: 'icon-sheweijingxuan',
            text: '取消加精'
          })
        } else {
          iconMenus.push({
            icon: 'icon-sheweijingxuan',
            text: '设为精选'
          })
        }

        if (this.detail.top) {
          iconMenus.push({
            icon: 'icon-zhiding',
            text: '取消置顶'
          })
        } else {
          iconMenus.push({
            icon: 'icon-zhiding',
            text: '置顶'
          })
        }
      }

      iconMenus.push({
        icon: 'icon-jubao',
        text: '举报'
      })
      return iconMenus
    },
    iconOptions() {
      return [
        {
          icon: 'icon-pinglun',
          text: '评论',
          number: this.detail.comments_number,
          showNumer: false,
          ShowIsUpVote: false
        },
        {
          icon: 'icon-cai',
          text: '踩',
          number: this.detail.downvotes,
          showClass: this.detail.is_downvoted,
          showNumer: false,
          ShowIsUpVote: false
        },
        {
          icon: 'icon-zan',
          text: '赞',
          number: this.detail.upvotes,
          showClass: this.isDetailUpVote,
          showNumber: this.isDetailUpVote,
          ShowIsUpVote: this.detail.is_upvoted
        },
        {
          icon: 'icon-shoucang-xiao',
          text: '分享',
          number: 0,
          showNumer: false,
          ShowIsUpVote: false
        }
      ]
    }
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
    this.getDetail()
  },
  watch: {

  },
  updated() {
    this.$nextTick(function() {
    })
  },
  methods: {
    detailMenuIcon(item) {
      switch (item.text) {
        case '评论':
          uni.navigateTo({ url: '/pages/comment/index?slug=' + this.detail.slug + '&id=' + this.detail.id + '&category_id=' + this.detail.category_id })
          break
        case '踩':
          this.detailDownVote()
          break
        case '赞':
          this.upVote()
          break
        case '分享':
          this.$refs.ShareBtn.share()
          break
      }
    },
    openApp() {

    },
    onTap(event) {
      var target = event.target
      if (target.attributes.title) {
        if (target.attributes.title.value === '赞' || target.attributes.title.value === '踩') {
          return
        }
      }

      if (this.typeDesc(this.detail.group.is_joined)) {
        event.stopPropagation()
        event.preventDefault()

        userAbility.inviteJoinInGroup(this, this.detail.group.id, () => {
          this.refreshPageData(false)
        }, this.detail.group)
      }
    },
    iconMenusClickedItem(item, callback) {
      switch (item.text) {
        case '删除':
          this.$refs.ShareBtn.toggle()
          deleteItem(this.detail.id, () => {
            uni.navigateBack()
          })
          break
        case '举报':
          this.$refs.ShareBtn.toggle()
          report(this, this.link)
          break
        case '收藏':
          collect(this, this.detail.id, () => {
            this.detail.bookmarks++
            this.detail.is_bookmark = 1
          }, () => {
            this.detail.bookmarks--
            this.detail.is_bookmark = 0
          })
          break
        case '已收藏':
          collect(this, this.detail.id, () => {
            this.detail.bookmarks++
            this.detail.is_bookmark = 1
          }, () => {
            this.detail.bookmarks--
            this.detail.is_bookmark = 0
          })
          break
        case '设为精选':
          addGood(this.detail.id, () => {
            this.detail.is_recommend = true
          })
          break
        case '取消加精':
          cancelGood(this.detail.id, () => {
            this.detail.is_recommend = false
          })
          break
        case '置顶':
          setTop(this.detail.id, () => {
            this.detail.top = true
          })
          break
        case '取消置顶':
          cancelTop(this.detail.id, () => {
            this.detail.top = false
          })
          break
      }
    },
    reportOld() {
      this.$refs.ShareBtn.toggle()
      window.mui.prompt('举报', '输入举报原因', ' ', ['取消', '提交'], (e) => {
        if (e.index === 1) {
          if (e.value) {
            postRequest(`system/feedback`, {
              title: '举报内容',
              content: e.value
            }).then(response => {
              var code = response.code
              if (code !== 1000) {
                ui.alert(response.message)
                uni.navigateBack()
                return
              }
              if (response.data) {
                uni.navigateBack()
                ui.toast('举报成功')
              }
            })
          } else {
            ui.toast('请填写举报内容')
          }
        }
      }, 'div')
    },
    goComment() {
      const view = uni.createSelectorQuery().select('#commentTitle')
      view.boundingClientRect(data => {
        uni.pageScrollTo({
          scrollTop: data.top,
          duration: 300
        })
      }).exec()

      this.$refs.discuss.rootComment()
    },
    goDetail(item) {

      // #ifndef APP-PLUS
        this.openApp()
        return
      // #endif

      switch (item.read_type) {
        case 1:
          uni.navigateTo({ url: '/pages/discover/detail?slug=' + item.data.slug })
          break
        case 2:

          uni.navigateTo({ url: '/askCommunity/major/' + item.source_id })
          break
        case 3:

          uni.navigateTo({ url: '/ask/offer/answers/' + item.source_id })
          break
        case 4:
          uni.navigateTo({ url: '/EnrollmentStatus/' + item.source_id })
          break
        case 5:
          uni.navigateTo({ url: '/EnrollmentStatus/' + item.source_id })
          break
        case 6:

          uni.navigateTo({ url: '/ask/offer/' + item.source_id })
          break
        default:
      }
    },
    recommendRead() {
      postRequest(`getRelatedRecommend`, { source_id: this.detail.id, perPage: 4, source_type: 1 }).then(response => {
        this.list = response.data.data
      })
    },
    toAnswerDetail(item) {
      uni.navigateTo({ url: '/ask/offer/answers/' + item.id })
    },
    change(editor) {
      var html = editor.html
      html = textToLinkHtml(html)

      html = html.replace(/<a href="/g, "<view class='vendorUrl text-content' href=\"")
      html = html.replace(/<\/a>/g, '</view>')

      var answerContentWrapper = this.$el.querySelector('.discoverContent')
      html = addPreviewAttrForImg(html)
      html = html.replace(/(<view><br><\/view>)*$/, '')

      answerContentWrapper.innerHTML = html

      var syntaxCodes = answerContentWrapper.querySelectorAll('.discoverContent .ql-syntax')
      if (syntaxCodes.length) {
        for (var i = 0; i < syntaxCodes.length; i++) {
          syntaxCodes[i].innerHTML = hljs.highlightAuto(syntaxCodes[i].innerHTML).value
        }
      }
    },
    onEditorReadyRead(editor) {
      this.editorReadObj = editor
      if (this.editorReadContentObj) {
        this.editorReadObj.setContents(this.editorReadContentObj)
      }
    },
    toDetail(item) {
      uni.navigateTo({ url: '/group/detail/' + item.id })
    },
    seePdf(pdf) {
      openFileUrl(pdf.url, pdf.name)
    },
    typeDesc(type) {
      switch (type) {
        case -1:
          return true
        case 0:
          return true
        case 1:
          return false
        case 2:
          return true
        case 3:
          return false
      }
    },
    showAllContentWrapper() {
      var contentWrapper = document.querySelector('.discoverContentWrapper')
      if (contentWrapper) {
        contentWrapper.classList0upxove('shortContentWrapper')
      }
    },
    goJoin(id) {
      uni.navigateTo({ url: '/group/detail/' + id })
    },
    // 删除
    deleterow() {

    },
    textToLink(text) {
      return transferTagToLink(textToLinkHtml(' ' + text))
    },
    toAvatar(uuid) {
      if (!uuid) {
        return false
      }
      uni.navigateTo({ url: '/share/resume?id=' + uuid + '&goback=1' + '&time=' + (new Date().getTime()) })
    },
    sendMessage(message) {
      this.$refs.discuss.sendMessage(message)
    },
    comment(commentTargetName) {
      showComment(
        this,
        commentTargetName,
        this.$refs.ctextarea,
        this.$refs.AlertTextarea,
        this.$refs.discuss
      )
    },
    commentFinish() {
      this.commentNumAdd()
      this.$refs.ctextarea.finish()
    },
    goArticle: function(detail) {
      if (detail.type !== 'link') {
        return
      }

      if (detail.data.url.indexOf(process.env.H5_ROOT) === 0) {
        openAppUrlByUrl(detail.data.url)
      } else {
        goThirdPartyArticle(
          detail.data.url,
          detail.id,
          detail.data.title,
          '/c/' + detail.category_id + '/' + detail.slug,
          detail.data.img
        )
      }
    },
    refreshPageDataNoLoading() {
      this.refreshPageData(false)
    },
    refreshPageData(loading = true) {
      this.detail.data.img = []
      this.getDetail(loading)
      this.$refs.ctextarea.refreshPageData()
    },
    shareSuccess() {
    },
    shareFail() {
    },
    timeago(time) {
      const newDate = new Date()
      newDate.setTime(Date.parse(time.replace(/-/g, '/')))
      return newDate
    },
    getDetail: function(loading = true) {
      this.loading = loading
      this.slug = this.pageOption.slug
      this.shareOption.targetId = this.slug
      this.noback = !!this.pageOption.noback
      this.link = getCurrentRoute()

      if (!this.slug) {
        this.$router.back()
        return
      }

      if (this.$refs.mescrollDetail) {
        this.$refs.mescrollDetail.scrollToTop(100)
      }

      postRequest(`article/detail-by-slug`, { slug: this.slug }).then(response => {
        var code = response.code
        if (code !== 1000) {
          ui.toast(response.message)
          uni.navigateBack()
          return
        }

        this.detail = response.data

        if (!this.detail.group) {
          this.detail.group = {
            is_joined: 1,
            id: null,
            public: 1,
            name: ''
          }
        }

        var shareOption = getTextDiscoverDetail('/pages/discover/detail?slug=' + this.detail.slug, this.detail.title, this.detail.owner.avatar, this.detail.owner.name, this.detail.group.name)
        this.shareOption = Object.assign(this.shareOption, shareOption)
        if (this.detail.type === 'article') {
          this.title = this.detail.title
          var objs = JSON.parse(this.detail.data.description)
          this.editorReadContentObj = objs
          if (this.editorReadObj) {
            this.editorReadObj.setContents(objs)
          }
        } else {
          this.title = '分享'
        }

        this.loading = false
        this.recommendRead()

        if (this.$refs.mescrollDetail) {
          this.$refs.mescrollDetail.finish()
        }
      })
    },
    setFollowStatus(status) {
      this.detail.is_followed_author = status
    },
    commentNumAdd() {
      this.detail.comments_number++
    },
    commentNumDesc() {
      this.detail.comments_number--
    },
    shotContentHeight() {
      if (this.detail.group.is_joined !== -1) {
        this.showAllContentWrapper()
        return
      }

      var contentWrapper = document.querySelector('.discoverContentWrapper')
      if (contentWrapper && contentWrapper.offsetHeight > 300) {
        contentWrapper.classList.add('shortContentWrapper')
      }
    },
    getAnimObject(item) {
      if (!this.animObjects[item]) {
        var animObject = window.bodymovin.loadAnimation({
          container: document.querySelector('.detailFollwers'),
          renderer: 'svg',
          loop: false,
          autoplay: false,
          animationData: upvoteAnim
        })
        animObject.addEventListener('complete', () => {
          console.log('onComplete')
        })
        this.animObjects[item] = animObject
      }

      return this.animObjects[item]
    },
    upVote() {
      upvote(this, this.detail.id, (response) => {
        this.detail.upvotes++
        // this.detail.is_upvoted = 1
        this.detail.support_description = response.data.support_description
        this.detail.support_percent = response.data.support_percent
        this.isUpvote = response.data.type
        var support = {
          name: this.name,
          uuid: this.uuid
        }
        this.detail.supporter_list = this.detail.supporter_list.concat(support)

        this.isDetailUpVote = true

        if (process.env.NODE_ENV === 'production' && window.mixpanel) {
          // mixpanel
          window.mixpanel.track(
            'inwehub:support:success',
            {
              'app': 'inwehub',
              'user_device': window.getUserAppDevice(),
              'page': this.id,
              'page_name': 'submission',
              'page_title': 'support',
              'referrer_page': ''
            }
          )
        }
      }, (response) => {
        this.isDetailUpVote = false
        this.detail.upvotes--
        this.detail.is_upvoted = 0
        this.detail.support_description = response.data.support_description
        this.detail.support_percent = response.data.support_percent
        this.isUpvote = response.data.type
        for (var i in this.detail.supporter_list) {
          if (this.detail.supporter_list[i].uuid === this.uuid) {
            this.detail.supporter_list.splice(i, 1)
          }
        }

        if (process.env.NODE_ENV === 'production' && window.mixpanel) {
          // mixpanel
          window.mixpanel.track(
            'inwehub:support:success',
            {
              'app': 'inwehub',
              'user_device': window.getUserAppDevice(),
              'page': this.id,
              'page_name': 'submission',
              'page_title': 'cancelSupport',
              'referrer_page': ''
            }
          )
        }
      })
    },
    detailDownVote() {
      downVote(this, this.detail.id, (response) => {
        this.detail.downvotes++
        this.detail.is_downvoted = 1
        this.detail.support_description = response.data.support_description
        this.detail.support_percent = response.data.support_percent
        this.isUpvote = response.data.type
        if (process.env.NODE_ENV === 'production' && window.mixpanel) {
          // mixpanel
          window.mixpanel.track(
            'inwehub:downvote:success',
            {
              'app': 'inwehub',
              'user_device': window.getUserAppDevice(),
              'page': this.id,
              'page_name': 'submission',
              'page_title': 'downvote',
              'referrer_page': ''
            }
          )
        }
      }, (response) => {
        this.detail.downvotes--
        this.detail.support_description = response.data.support_description
        this.detail.support_percent = response.data.support_percent
        this.detail.is_downvoted = 0
        this.isUpvote = response.data.type

        if (process.env.NODE_ENV === 'production' && window.mixpanel) {
          // mixpanel
          window.mixpanel.track(
            'inwehub:downvote:success',
            {
              'app': 'inwehub',
              'user_device': window.getUserAppDevice(),
              'page': this.id,
              'page_name': 'submission',
              'page_title': 'cancelDownvote',
              'referrer_page': ''
            }
          )
        }
      })
    },
    delCommentSuccess() {
      this.detail.comments_number--
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .active {
        color: #d4d4d4;
    }

    .seeAll {
        padding: 24upx 0;
        font-size: 27.98upx;
        color: #808080;
        line-height: 39.98upx;
        text-align: center;
    }

    .container-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 99.98upx;
        overflow: hidden;
        /*padding: 27.0upx 31.96upx;*/
        background: #FFFFFF;
        &:before {
            position: absolute;
            top: 0;
            width: 100%;
            height: 2upx;
            content: '';
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
            background-color: #dcdcdc;
        }
        .footerLeft {
            display: flex;
            font-size: 27.98upx;
            float: left;
            padding: 13.96upx 0 13.96upx 31.96upx;
            .footerMenuTwo {
                display: flex;
                .containerBtn {
                    display: flex;
                    width: 222upx;
                    height: 72upx;
                    color: #ffffff;
                    margin-right: 9.98upx;
                    line-height: 72upx;
                    text-align: center;
                    border-radius: 15.98upx;
                    justify-content: center;
                }
                .noBullish {
                    background: #FA4975;
                }
                .bullish {
                    background: #03AEF9;
                }
            }
            .footerMenuOne {
                width: 444.98upx;
                height: 72upx;
                display: flex;
                color: #03AEF9;
                line-height: 72upx;
                border-radius: 15.98upx;
                background: #F3F4F6;
                text-align: center;
                justify-content: center;
                &.activeRed {
                    color: #FA4975;
                }
                &.activeBlue {
                    color: #03AEF9;
                }
            }
        }
        .footerRight {
            color: #B4B4B6;
            font-size: 19.96upx;
            text-align: center;
            display: flex;
            float: right;
            margin-top: 13.96upx;
            margin-right: 31.96upx;
            .collectionComment {
                width: 99.98upx;
                height: 97.96upx;
                flex-grow: 1;
                color: #808080;
                .span {
                    color: #B4B4B6;
                    display: block;
                    margin-top: -7.96upx;
                    .i {
                        font-style: normal;
                    }
                }
            }
            .iconfont{
                font-size: 43.96upx;
                /*margin-top: -7.96upx;*/
            }
        }
    }

    .lineMargin {
        margin-top: -31.96upx;
        margin-bottom: 27.98upx;
    }

    .container-image {
        height: 399.98upx;
        border-radius: 0;
        image {
            border-radius: 0;
        }
    }

    .topImg {
        margin-bottom: 24upx;
        image {
            width: 750upx;
            height: 399.98upx;
        }
    }

    .detailTitle {
        font-size: 37.96upx;
        line-height: 60upx;
        margin-top: -21.98upx;
        padding: 0upx 31.96upx 43.96upx;
        font-family: PingFangSC-Medium;
    }

    .detail-discover {
        padding-bottom: 9.98upx;
        margin-top: 0 !important;
    }

    .mui-table-view-cell {
        padding-top: 9.98upx;
        padding-bottom: 27.98upx;
    }

    .detail-discover:before {
        display: none;
    }

    .detail-discover:after {
        display: none;
    }

    .contentWrapper {
        padding: 0 30upx;
        white-space: pre-line !important;
        word-wrap: break-word;
        font-size: 31.96upx;
        color: #444;
        line-height: 51.98upx;
        margin-bottom: 51.98upx;
    }

    .contentWrapper .tags {
        color: rgb(33, 77, 120);
        margin-right: 12upx;
    }

    .newestList {
        padding: 19.96upx 30upx 0;
        background: #fff;
    }

    .linkWrapper {
        padding: 0 31.96upx;
    }

    .timeContainer {
        display: flex;
        color: #B4B4B6;
        padding: 0 31.96upx;
        justify-content: space-between;
        .makingCopy {
            font-size: 24upx;
        }
        .fromGroup {
            /*width: 237.98upx;*/
            height: 42upx;
            padding: 0 15.98upx;
            font-size: 24upx;
            line-height: 42upx;
            text-align: center;
            background: #F7F8FA;
            border-radius: 199.96upx;
            .span {
                color: #808080;
                font-family: PingFangSC-Medium;
            }
            .i {
                color: #B4B4B6;
                font-style: normal;
                margin-right: 6upx;
            }
        }
    }

    .address {
        width: 100%;
        padding: 9.98upx 30upx 0;
        background: #fff;
        font-size: 24upx;
        color: #808080;
    }

    .statistics {
        background: #fff;
    }

    .mui-content {
        bottom: 99.98upx;
        background: #fff;
    }

    .statisticsWrapper {
        padding: 0 30upx 30upx;
    }

    /*点赞样式*/
    .component-dianzanList {
        width: 100%;
        padding: 25.96upx 30upx;
    }

    .component-dianzanList .span {
        font-size: 25.96upx;
        color: #03aef9;
    }

    .contentWrapper .span {
        font-size: 30upx;
    }

    .Column {
        width: 100%;
        height: max-content;
    }

    .Column .discover_img {
        width: 100%;
        border-radius: 7.96upx;
        margin-bottom: 51.98upx;
        vertical-align: top;
    }

    /*删除按钮*/
    .discover_datail_dalete {
        width: 114upx;
        height: 54upx;
        border: 1.96upx solid #444444;
        text-align: center;
        line-height: 54upx;
        font-size: 25.96upx;
        color: #444444;
        border-radius: 99.98upx;
        position: absolute;
        right: 31.96upx;
        top: 31.96upx;
    }

    .timeData {
        position: absolute;
        top: 54upx;
        left: 111.98upx;
        font-size: 24upx;
        color: #C8C8C8;
        margin-top: -7.96upx;
    }

    .share {
        padding: 0 33.98upx;
        margin: 9.98upx 0 54upx 0;
        .location {
            margin-left: -6upx;
            .iconfont{
                color: #C8C8C8;
                vertical-align: middle;
            }
        }
        .span {
            margin-left: -7.96upx;
            font-size: 24upx;
            color: #B4B4B6;
        }
        .shareGo {
            margin: 51.98upx auto 0;
            text-align: center;
            .p {
                font-size: 27.98upx;
                color: #808080;
            }
            .shareList {
                margin-top: -30upx;
                text-align: center;
                .ul {
                    width: 100%;
                    padding: 0;
                    display: inline-block;
                    .li {
                        margin: 0 25.96upx;
                        display: inline-block;
                        &:nth-of-type(1) {
                            image {
                                width: 73.96upx;
                                height: 60upx;
                            }
                        }
                        &:nth-of-type(2) {
                            image {
                                width: 60upx;
                                height: 60upx;
                            }
                        }
                    }
                    .p {
                        font-size: 24upx;
                        color: #B4B4B6;
                    }
                }
            }
        }
    }

    // 新增链接样式
    .link {
        padding: 0 31.96upx;
        margin-bottom: 51.98upx;
        .linkBox {
            padding: 19.96upx;
            border-radius: 7.96upx;
            background: #F7F8FA;
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
            image {
                width: 87.98upx;
                height: 87.98upx;
                float: left;
                margin-right: 19.96upx;
                border-radius: 7.96upx;
                object-fit: contain;
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
                    word-break: break-all;
                }
                .text-line-2 {
                    color: #808080;
                }
                .text-line-1 {
                    color: #B4B4B6;
                    font-size: 24upx;
                }
            }
        }
    }

    // 关联问答
    .answer {
        padding: 0 31.96upx;
        margin-top: 43.96upx;
        .answerBox {
            padding: 30upx 30upx 31.96upx;
            border-radius: 7.96upx;
            border: 1.96upx solid #DCDCDC;
            .answerContent {
                font-size: 27.98upx;
                color: #444;
                .price {
                    // width: 78upx;
                    height: 33.98upx;
                    padding: 0 7.96upx;
                    font-size: 21.98upx;
                    color: #235280;
                    text-align: right;
                    line-height: 33.98upx;
                    border-radius: 7.96upx;
                    background: #A8DFF7;
                    display: inline-block;
                    .span {
                        width: 6upx;
                        height: 6upx;
                        margin-top: -6upx;
                        margin-right: 6upx;
                        border-radius: 50%;
                        background: #fff;
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
            }
        }
        .followAnswer {
            margin-top: 13.96upx;
            .follow {
                font-size: 24upx;
                color: #808080;
                line-height: 39.98upx;
                vertical-align: top;
                display: inline-block;
            }
            .rightLine {
                width: 1.96upx;
                height: 21.98upx;
                margin: -19.96upx 31.96upx 0 7.96upx;
                vertical-align: middle;
                display: inline-block;
                background: #DCDCDC;
            }
            .replay {
                display: inline-block;
                image {
                    width: 39.98upx;
                    height: 39.98upx;
                    margin-left: -24upx;
                    border: 3.98upx solid #fff;
                    border-radius: 50%;
                }
                .span {
                    font-size: 24upx;
                    color: #808080;
                    line-height: 39.98upx;
                    vertical-align: top;
                }
            }
        }
    }

    .groups {
        width: 92%;
        margin-left: 4%;
        text-align: center;
        height: 67.96upx;
        line-height: 67.96upx;
        border-radius: 7.96upx;
        border: 1.96upx solid #DCDCDC;
        margin-bottom: 25.96upx;
        font-size: 27.98upx;
        color: #03AEF9;
    }

    .groupsList {
        width: 92%;
        margin-left: 4%;
        padding-bottom: 19.96upx;
    }

    .groupsBot {
        width: 92%;
        margin-left: 4%;
        padding-bottom: 19.96upx;
        position: absolute;
        bottom: 0;
    }

    .riverBot {
        width: 100%;
        height: 19.96upx;
        position: absolute;
        bottom: 133.50upx;
        background: #f3f4f6;
    }

    .groupsCenter {
        width: 399.98upx;
        height: 319.96upx;
        position: absolute;
        top: 0;
        bottom: 147.98upx;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
    }

    .groupsCenter .iconfont{
        font-size: 139.96upx;
    }

    .groupsCenter p:nth-of-type(1) {
        font-size: 24upx;
        color: #C8C8C8;
        text-align: center;
        margin-top: 13.96upx;
        margin-bottom: 42upx;
    }

    .groupsCenter p:nth-of-type(2) {
        width: 229.96upx;
        height: 81.98upx;
        line-height: 81.98upx;
        background: #03AEF9;
        border-radius: 99.98upx;
        font-size: 31.96upx;
        color: #FFFFFF;
        text-align: center;
        margin: auto;
    }

    .shortContentWrapper {
        max-height: 600upx;
        overflow: hidden;
        position: relative;
        margin-bottom: 19.96upx;

        &:after {
            position: absolute;
            bottom: 0;
            content: '';
            height: 124.96upx;
            width: 100%;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
        }
    }

    .container-recommentProduct {
        .title {
            height: 87.98upx;
            line-height: 87.98upx;
            .text {
                line-height: inherit;
                color: #444444;
                font-size: 31.96upx;
                padding: 0 31.96upx;
            }
        }

        .comment-product {
            padding: 25.96upx 30upx 0;
            .product-info {
                overflow: hidden;
                border-radius: 7.96upx;
                padding: 0 0 30upx;
                background: none;
                .product-img {
                    width: 87.98upx;
                    height: 87.98upx;
                    float: left;
                    image {
                        width: 100%;
                        height: 100%;
                        border-radius: 7.96upx;
                        object-fit: contain;
                    }
                }
                .product-detail {
                    float: left;
                    margin-left: 19.96upx;
                    .productName {
                        width: 567.98upx;
                        color: #444444;
                        font-size: 31.96upx;
                        line-height: 45.0upx;
                    }
                    .productMark {
                        display: flex;
                        .iconfont{
                            color: #FCC816;
                            font-size: 24upx;
                        }
                        .span {
                            font-size: 21.98upx;
                            line-height: 48upx;
                            color: #FCC816;
                            margin-left: 6upx;
                        }
                        .i {
                            width: 3.98upx;
                            height: 3.98upx;
                            margin:0 9.98upx;
                            vertical-align: middle;
                            line-height: 48upx;
                            border-radius: 50%;
                            background: #B4B4B6;
                            position: relative;
                            top:24upx;
                        }
                        .stars {
                            display: flex;
                            view {
                                margin-right: 6upx;
                            }
                        }
                        .starsText {
                            display: flex;
                        }
                    }
                }
            }
        }
    }

    .container-pdf-list {
        padding: 0upx 30upx;
        .pdf {
            margin-bottom: 51.98upx;
        }
    }

    .hiddenWrapper {
        display: none;
    }

    .discoverContent {
        padding: 0;
    }

    .component-upAndDown {
        margin-top: 36upx;
        margin-bottom: 36upx;
    }

    .commentTitle {
        padding-bottom: 19.96upx;
    }
</style>

<style type="text/css">
    .detail-discover .followWrapper {
        margin-top: 15.98upx;
    }

    .detail-discover .followWrapper .followButton {
        min-width: 87.98upx;
        height: 42upx;
        line-height: 42upx;
        font-size: 24upx;
        width: auto;
        padding: 0 19.96upx;
    }

</style>

