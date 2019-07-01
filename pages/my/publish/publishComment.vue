<template>
	<view class="content">

		<view class="mui-content">
			<view class="container-searchMenu">
				<!-- <text class="tabText" @tap.stop.prevent="toRoute('/pages/my/publish/publishAnswers')">回答</text>
				<text class="tabText" @tap.stop.prevent="toRoute('/pages/my/publish/publishQuestions')">提问</text> -->
				<text class="tabText" @tap.stop.prevent="toRoute('/pages/my/publish/publishArticle')">分享</text>
				<text class="tabText font-family-medium">评论<text class="underline"></text></text>
				<text class="tabText" @tap.stop.prevent="toRoute('/pages/my/publish/publishComments')">点评</text>
				<text class="bot"></text>
			</view>

			<iwList v-model="list" :api="'comment/myList'" :cssTop="88" :requestData="{uuid: '27707c887b4911e8b73500163e000d6b', return_type: 1}">

				<view class="container-publishComment">
					<view class="container-commentWrapper" v-for="(ask, index) in list" :key="index" @tap.stop.prevent="goToCommentPage(ask.type, ask.comment_url)">
						<view class="container-commentList">
							<view class="title text-line-1" v-html="ask.content"></view>
							<view class="content text-line-1" v-html="ask.origin_title"></view>
							<view class="time">
								<text>{{ask.created_at}}</text>
							</view>
							<text class="bot"></text>
						</view>
					</view>
				</view>

			</iwList>
		</view>

	</view>
</template>

<script>
	import iwList from '@/components/iw-list/iw-list.vue'
	export default {
		data() {
			return {
				list: []
			}
		},
		components: {
			iwList
		},
		methods: {
			toRoute(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>


<style lang="less">
	.content {
		height: 100%;
	}

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
		position: fixed;
		z-index: 10;
	}
	.container-publishComment {
		margin: 44px 0 0;
		.container-commentWrapper {
		  padding: 0 31.96upx;
		  .container-commentList {
			position: relative;
			padding: 21.0upx 0 22.96upx;
			.text {
			  color: #444444;
			  font-size: 31.96upx;
			  line-height: 48upx;
			}
			.content {
			  color: #808080;
			  font-size: 25.96upx;
			  line-height: 48upx;
			  margin-top: 7.96upx;
			}
			.time {
			  color: #B4B4B6;
			  font-size: 24upx;
			  line-height: 33.0upx;
			  margin-top: 12upx;
			}
		  }
		}
  }
</style>
