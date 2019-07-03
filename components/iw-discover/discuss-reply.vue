<template>
    <view>
        <template v-for="(child, childIndex) in children">
            <view class="list-item-discuss list-item-discuss-children" v-if="childIndex < 2 || isShow" :key="child.id" @tap.stop.prevent="clickComment(child, children)">
                <view class="lidL" @tap.stop.prevent="toResume(child.owner.uuid)">
                    <image :src="child.owner.avatar"/>
                </view>
                <view class="lidR">
                    <view class="lidR1">{{ child.owner.name }}<view>回复</view>{{ parentOwnerName }}</view>
                    <view class="lidR2 textToLink" v-html="textToLink(child.content)"></view>
                    <view class="lidR3">
                        <view class="lidRtime">{{ child.created_at | timeago }}</view>
                        <view class="lidROption" @tap.stop.prevent="vote(child)" :class="{active:child.is_supported}"  hover-class="hoverClass" :hover-stop-propagation="true">
                            <text class="iconfont icon-zan"></text><text class="span" v-if="child.supports">{{ child.supports }}</text>
                        </view>
                    </view>
                </view>
            </view>

            <DiscussReplay
                    v-if="child.children.length"
                    :children="child.children"
                    :parentOwnerName="child.owner.name"
                    :isShow="isShow"
                    @comment="clickCommentChild"
                    @vote="vote"
            ></DiscussReplay>

        </template>
    </view>
</template>

<script>
  import { textToLinkHtml } from '@/lib/dom'
  import { getPlatform } from '@/lib/allPlatform'

  const Discuss = {
    name: 'DiscussReplay',
    data: () => ({
      loading: true,
      busy: false,
      showList: true,
      commentTarget: null,
      page: 1,
      list: []
    }),
    props: {
      children: {
        type: Array,
        default: () => {
          return []
        }
      },
      parentOwnerName: {
        type: String,
        default: ''
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
    },
    components: {

    },
    methods: {
      toResume (uuid) {
        if (!uuid) {
          return false
        }
        uni.navigateTo({ url:'/share/resume?id=' + uuid + '&goback=1' + '&time=' + (new Date().getTime())})
      },
      timeago (time) {
        let newDate = new Date()
        newDate.setTime(Date.parse(time.replace(/-/g, '/')))
        return newDate
      },
      textToLink (text) {
        return textToLinkHtml(text)
      },
      vote (item) {
        this.$emit('vote', item)
      },
      clickCommentChild (event) {
        let platform = getPlatform()
        let data = {}
        if (platform === 'web') {
          data = event
        } else {
          data = event.detail.__args__[0]
        }

        const comment = data.comment
        const list = data.list
        this.clickComment(comment, list)
      },
      clickComment (comment, children) {
        this.$emit('comment', {comment: comment, list:children})
      }
    }
  }
  export default Discuss
</script>

<style scoped="scoped" lang="less">
    .lidROption{
        display: inline-block;
        padding:10upx;
    }
</style>