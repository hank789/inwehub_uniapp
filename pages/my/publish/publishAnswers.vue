<template>
	<view class="mui-content">
		<cmd-nav-bar :fixed="false" right-color="#03AEF9" back title="我的发布" @rightText="rightText" />
		<view class="container-searchMenu">
			<text class="tabText font-family-medium" @tap.stop.prevent="toRoute('/pages/my/publish/publishAnswers')">回答<text
				 class="underline"></text></text>
			<text class="tabText" @tap.stop.prevent="toRoute('/pages/my/publish/publishQuestions')">提问</text>
			<text class="tabText">分享</text>
			<text class="tabText" @tap.stop.prevent="toRoute('/pages/my/publish/publishComment')">评论</text>
			<text class="tabText" @tap.stop.prevent="toRoute('/pages/my/publish/publishComments')">点评</text>
			<text class="bot"></text>
		</view>
		
		<view class="answer">
          <view class="listBox" v-for="(ask, index) in list" @tap.stop.prevent="toDetail(ask)">
            <view class="mui-ellipsis-2 text-line-2">{{ask.description}}</view>
            <view class="bottmBox">
              <text class="label" :class="'label_' + ask.status">{{ask.status_description}}</text>
              <text class="date">{{ask.created_at.split(' ')[0].replace(/-/g, '/') }}</text>
            </view>
            <text class="bot"></text>
          </view>
        </view>

	</view>
</template>

<script>
	import { getAnswerList } from "@/lib/answer.js"
	import cmdNavBar from '@/components/cmd-nav-bar/cmd-nav-bar.vue'
	export default {
		data() {
			return {
				list: []
			}
		},
		components: {
			cmdNavBar
		},
		async onLoad() {
		  this.getMyAnswerList()
		},
		methods: {
			toRoute (url) {
				uni.navigateTo({url: url})
			  },
			getMyAnswerList () {
				getAnswerList('27707c887b4911e8b73500163e000d6b', (res) => {
					this.list = res
				})
			}
		}
	}
</script>

<style lang="less">
	.bot {
		position: absolute;
		right: 0upx;
		bottom: 0;
		left: 0upx;
		height: 2upx;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: rgb(220, 220, 220);
	}
	.container-searchMenu {
		margin-top: 0;
	}
	.answer {
		width: 92%;
		margin-left: 4%;
		overflow: hidden;
		.listBox {
			width: 100%;
			overflow: hidden;
			padding: 27.98upx 0 25.96upx 0;
			position: relative;
			.mui-ellipsis-2 {
				color: #444444;
				font-size: 31.96upx;
			}
			.bottmBox {
				overflow: hidden;
				margin-top: 12upx;
				.label {
					float: left;
					width: 99.98upx;
					height: 33.98upx;
					line-height: 33.98upx;
					border-radius: 99.98upx;
					background: #fcc816;
					color: #ffffff;
					font-size: 24upx;
					text-align: center;
				}
				.date {
					float: right;
					font-size: 24upx;
					color: #b4b4b6;
				}
			}
		}
	}
</style>
