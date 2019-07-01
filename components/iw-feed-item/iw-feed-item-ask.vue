<template>
    <view class="content">
        <view class="component-userinfo">
            <view class="left"> <image :src="item.user.avatar"/></view>
            <view class="right">
                <view class="twoLevel">{{item.title}}</view>
                <view class="oneLevel">3天前</view>
            </view>
        </view>

        <view class="container-feed-questionAnswer feed-currency">
            <view class="currency-title question-titles">{{ item.feed.answer_id?item.feed.answer_content:item.feed.question_title }}</view>
            <view class="question-statistics">
                <text class="question-price active-yellow" v-if="item.feed.status_description && !item.feed.answer_id">{{item.feed.status_description}}</text>
                <text v-if="answerNumber >=0 ">{{answerNumber}}回答 <text class="i"></text> </text>
                <text v-if="followNumber >=0 ">{{followNumber}}关注</text>
                <text v-if="supportNumber >=0 ">{{supportNumber}}赞 <text class="i"></text> </text>
                <text v-if="commentNumber >=0 ">{{commentNumber}}回复</text>
                <text v-if="averageRate >=0 "> <text class="i"></text> {{averageRate}}分</text>
            </view>
            <view class="container-answer-box" v-if="item.feed.answer_id">
                <view class="question-answer-box">
                    <text class="answerPriceBJ" v-if="item.feed.status_description">{{item.feed.status_description}}</text>
                    <text class="tagsAndQuestionTitle"><i v-for="(tag, tagIndex) in item.feed.tags" :key="tagIndex" @tap.stop.prevent="toTagDetail(tag.name)">#{{tag.name}}#</i>{{item.feed.question_title}}</text>
                </view>
            </view>

            <view class="line-river-after line-river-after-top"></view>
        </view>
    </view>
</template>

<script>

  export default {
    components: {

    },
    data() {
      return {

      }
    },
    computed: {
      itemObj () {
        var item = JSON.parse(JSON.stringify(this.item))
        if (typeof item.feed.img === 'string') {
          if (item.feed.img) {
            item.feed.img = [item.feed.img]
          } else {
            item.feed.img = []
          }
        }

        if (typeof item.feed.files === 'string') {
          if (item.feed.files) {
            item.feed.files = [item.feed.files]
          } else {
            item.feed.files = []
          }
        }
        return item
      },
      commentNumber () {
        if (this.item.feed.answer_id) {
          return this.item.feed.comment_number
        }
        return -1
      },
      answerNumber () {
        if (!this.item.feed.answer_id) {
          return this.item.feed.answer_number
        }
        return -1
      },
      supportNumber () {
        if (this.item.feed.answer_id) {
          return this.item.feed.support_number
        }
        return -1
      },
      followNumber () {
        if (!this.item.feed.answer_id) {
          return this.item.feed.follow_number
        }
        return -1
      },
      averageRate () {
        if (this.item.feed.average_rate) {
          return this.item.feed.average_rate
        }
        return -1
      }
    },
    props: {
      item: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    created() {

    },
    methods: {
      showDownloadTip() {

      }
    }
  }
</script>

<style lang="less">
    .content{
        padding:20upx 32upx;
    }

    .container-feed-questionAnswer {
        position: relative;
        margin-top: 39.98upx;
        .line-river-after {
            margin-top: 30upx;
        }
        .question-titles {

        }
        .question-statistics {
            margin-top: 13.96upx;
            color: #B4B4B6;

            line-height: 30upx;
            .question-price {
                &.active-yellow {
                    color: #235280;
                    background: #FCC816;
                }
                color: #808080;
                font-size: 19.96upx;
                line-height: 27.98upx;
                padding: 1.96upx 9.98upx;
                background: #DCDCDC;
                display: inline-block;
                border-radius: 7.96upx;
            }
            text {
                font-size: 21.98upx;
                .i {
                    width: 3.98upx;
                    height: 3.98upx;
                    background: #B4B4B6;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
        }
        .container-answer-box {
            padding: 0 31.96upx;
            .question-answer-box {
                width: 685.96upx;
                padding: 13.96upx 19.96upx;
                border-radius: 7.96upx;
                background: #F7F8FA;
                margin-top: 25.96upx;
                .answerPriceBJ {
                    color: #235280;
                    font-size: 19.96upx;
                    padding: 1.96upx 9.98upx;
                    line-height: 27.98upx;
                    border-radius: 7.96upx;
                    background: #FCC816;
                    display: inline-block;
                    margin-right:6upx;
                }
                .tagsAndQuestionTitle {
                    color: #808080;
                    font-size: 25.96upx;
                    line-height: 39.98upx;
                    margin-left: -7.96upx;
                    .i {
                        color: #235280;
                        font-style: normal;
                    }
                }
            }
        }
    }
</style>
