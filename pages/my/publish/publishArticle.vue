<template>
	<view class="content">

		<view class="mui-content">
			<view class="container-searchMenu">
				<!-- <text class="tabText" @tap.stop.prevent="toRoute('/pages/my/publish/publishAnswers')">回答</text>
				<text class="tabText" @tap.stop.prevent="toRoute('/pages/my/publish/publishQuestions')">提问</text> -->
				<text class="tabText font-family-medium">分享<text class="underline"></text></text>
				<text class="tabText" @tap.stop.prevent="toRoute('/pages/my/publish/publishComment')">评论</text>
				<text class="tabText" @tap.stop.prevent="toRoute('/pages/my/publish/publishComments')">点评</text>
				<text class="bot"></text>
			</view>

			<iwList v-model="list" :api="'readhub/mySubmission'" :cssTop="88" :requestData="{uuid: '27707c887b4911e8b73500163e000d6b', return_type: 1}">

				<view class="answer">
					<view class="listBox" v-for="(ask, index) in list" @tap.stop.prevent="toDetail(ask)">
						<div class="margin-10-0-0 text-line-2" v-if="ask.img.length && ask.type === 'text'" v-for="(askimg, index) in ask.img">
							<image class="newestList" :src="askimg"></image>
						</div>
						<div class="container-image margin-10-0-0" v-if="ask.img && ask.type !== 'text'">
							<image :src="ask.img" ></image>
						</div>
						<view class="mui-ellipsis-2"><text>{{ ask.title }}</text><text v-if="ask.domain">{{ask.domain}}</text> </view>
						<view class="bottmBox">
							<text class="label">{{ ask.created_at }}</text>
							<text class="date" v-if="ask.category_name">#{{ask.category_name}}</text>
						</view>
						<text class="bot"></text>
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

	.answer {
		width: 92%;
		margin-left: 4%;
		overflow: hidden;
		margin-top: 44px;

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
					font-size: 0.32rem;
					color: #b4b4b6;
				}
				.date {
					font-size: 0.32rem;
					color: rgb(128,128,182);
				}
			}
		}
	}
</style>
