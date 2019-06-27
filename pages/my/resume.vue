<template>
	<view class="content">
		
		<view class="header" :class="iosSystem ? 'header-ios':''">
			
			<view class="before" :style="{ opacity: 1 - afterHeaderOpacity, zIndex: beforeHeaderzIndex }">
				<view class="back">
					<view class="iconfont icon-fanhui" @tap="back" v-if="showBack"></view>
				</view>
				<view class="middle">个人名片</view>
				<view class="icon-btn">
					<view class="iconfont icon-shoucang-xiao" @tap="toMsg"></view>
				</view>
			</view>
			
			<view class="after" :style="{ opacity: afterHeaderOpacity, zIndex: afterHeaderzIndex,}">
				<view class="back">
					<view class="iconfont icon-fanhui" @tap="back" v-if="showBack"></view>
				</view>
				<view class="middle">个人名片</view>
				<view class="icon-btn">
					<view class="iconfont icon-shoucang-xiao" @tap="toMsg"></view>
				</view>
			</view>
		</view>
		
		<!-- 正文 -->
		<iwList v-model="list" :api="'feed/list'" @scrollList="scrollList" ref="iwList" :cssTop="cssTop" :requestData="feedListParams">
		
			<view class="infoBg">
				<image :src="resume.info.avatar_url" class="avatar bigImg"></image>
				<view class="backMask"></view>
			</view>

			<view class="muiContent">

				<view class="header-wrapper">
					<view class="headers">

						<view class="headPhotowrapper">
							<view class="headImages">
								<image class="avatar avatarImg" :src="resume.info.avatar_url"></image>
							</view>
							<view class="personalInfo">
								<view class="nameAndLevel">
									<text class="name font-family-medium">{{ resume.info.name }}</text>
									<text class="level">L{{resume.info.user_level}}</text>
								</view>
								<view class="detailInfo">
									<text class="text">被赞</text><text class="number font-family-medium">{{resume.info.supports}}</text> <text
									 class="spot"></text>
									<text class="text">{{resume.info.total_score}}</text>
								</view>
								<view class="consultWrapper">
									<view class="leftButton">
										<view class="border-football font-family-medium" v-show="uuid == cuuid" @tap.stop.prevent="toRoute('/pages/my/detailInfo?id=' + resume.info.uuid)">详细资料</view>
										<!-- <view class="border-football font-family-medium letter" v-if="uuid !== cuuid" @tap.stop.prevent="goChat()">发私信</view> -->
										<!-- <view class="border-football font-family-medium" v-if="uuid !== cuuid" @tap.stop.prevent="goAsk('/ask/'+uuid)">提问题</view> -->
									</view>
									<view class="rightDetailInfo" v-if="uuid !== cuuid">
										<text class="font-family-medium" @tap.stop.prevent="toRoute('/pages/my/detailInfo?id=' + resume.info.uuid)">详细资料</text>
										<text class="iconfont icon-jinru"></text>
									</view>
								</view>
								<view class="operationWrapper">
									<view class="code iconAndText" @tap.stop.prevent="toRoute('/pages/my/qrcode?uuid=' + uuid)">
										<text class="iconfont icon-erweima"></text>
										<view class="word">个人码</view>
									</view>
									<view class="iconAndText isFollowed" v-show="uuid !== cuuid && !resume.is_followed" @tap.stop.prevent="collectProfessor">
										<text class="iconfont icon-shoucang"></text>
										<view class="word">关注</view>
									</view>
									<view class="active iconAndText isFollowed" @tap.stop.prevent="collectProfessor" v-show="uuid !== cuuid && resume.is_followed">
										<text class="iconfont icon-shoucanghover"></text>
										<view class="word">已关注</view>
									</view>
								</view>
							</view>

							<view class="counter">
								<view class="counterList" @tap.stop.prevent="toRoute('/pages/my/focus?uuid='+uuid)">
									<view class="font-family-medium">{{resume.info.followed_number}}</view>
									<view class="script">谁关注Ta</view>
								</view>

								<view class="counterList" @tap.stop.prevent="toRoute('/pages/my/followed?uuid='+uuid)">
									<view class="font-family-medium">{{resume.info.follow_user_number}}</view>
									<view class="script">Ta关注谁</view>
								</view>

								<view class="counterList" @tap.stop.prevent="toRoute('/pages/my/publishList?id='+uuid)">
									<view class="font-family-medium">{{resume.info.publishes}}</view>
									<view class="script">发布</view>
								</view>

								<!-- <view class="counterList" @tap.stop.prevent="$router.pushPlus('/group/my/'+uuid)">
									<view class="font-family-medium">{{resume.info.group_number}}</view>
									<view class="script">圈子</view>
								</view> -->
							</view>

						</view>

					</view>
				</view>

				<view class="domainWrapper" v-if="resume.info.skill_tags.length > 0 || uuid === cuuid">
					<view class="skilledTags">
						<text class="iconfont icon-shanchang"></text>
						<text class="tipTitle">擅长领域</text>
					</view>
					<template v-for="(industry, index) in resume.info.skill_tags">
						<view class="tags" @tap.stop.prevent="toTagDetail(industry.text)"><text class="text">{{industry.text}}</text></view>
					</template>
					<view class="addTags" v-show="uuid == cuuid" @tap.stop.prevent="toRoute('/pages/my/advantage')">
						<text class="iconfont icon-plus--"></text>{{ resume.info.skill_tags.length < 1 ? '添加专业形象，对接更多机遇':'添加' }}
					</view>
					<view class="bot" v-if="resume.info.article_count || uuid === cuuid"></view>
				</view>

				<view class="specialColumn" v-if="resume.info.article_count || uuid === cuuid" @tap.stop.prevent="toRoute('/pages/my/articleList?uuid=' + resume.info.uuid )">
					<view class="titleText">
						<text class="iconfont icon-zhuanlan"></text>
						<text class="tipTitle">文章专栏</text>
					</view>
					<view class="intoIcon">
						<text class="iconfont icon-jinru"></text>
					</view>
				</view>
				<view class="gray" v-if="resume.info.article_count || resume.info.skill_tags.length > 0 || uuid === cuuid"></view>

			</view>
			<view class="marginApp">
				<view v-for="(item, index) in list" :key="index" class="iwItem">
					<iw-feed-item :item="item" @showPageMore="showPageMore"></iw-feed-item>
				</view>
			</view>

		</iwList>
		
		<iw-page-more
		  ref="pageMore"
		  :share-option="shareOption"
		  :icon-menu="iconMenus"
		  @clickedItem="iconMenusClickedItem"
		/>
		
		<iwDialogReport ref="alertReport"></iwDialogReport>
		
	</view>
</template>

<script>
	import { postRequest } from '@/lib/request'
	import iwList from '@/components/iw-list/iw-list'
	import iwFeedItem from '@/components/iw-feed-item/iw-feed-item'
	import { getLocalUuid } from '@/lib/user.js'
	
	import iwPageMore from '@/components/iw-page-more/iw-page-more'
	import { getIconMenus, iconMenusClickedItem } from '@/lib/feed'
	import iwDialogReport from '@/components/iw-dialog/report.vue'
	
	import { getResumeDetail } from '@/lib/shareTemplate'
	import { getPlatform } from "@/lib/allPlatform.js"
	export default {
		data() {
			return {
				topValue: 0,
				//控制渐变标题栏的参数
				beforeHeaderzIndex: 11, //层级
				afterHeaderzIndex: 10, //层级
				beforeHeaderOpacity: 1, //不透明度
				afterHeaderOpacity: 0, //不透明度
				//是否显示返回按钮
				// #ifndef MP
				showBack: true,
				// #endif
				uuid: '',
				cuuid: '',
				search_type: 5, // 1:关注,2:全部,3:问答,4:分享,5:他的动态,6:推荐,默认2
				cssTop: 0,
				list: [],
				resume: {
					groups: [],
					info: {
						uuid: '',
						name: '',
						avatar_url: '',
						feed_count: '',
						article_count: '',
						article_comment_count: '',
						article_upvote_count: '',
						industry_tags: [],
						skill_tags: [],
						province: {
							key: '',
							name: ''
						},
						city: {
							key: '',
							name: ''
						}
					},
					edus: [],
					projects: [],
					jobs: []

				},
				apper: '',
				userInfo: {},
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
				iconMenus: [],
				itemOptionsObj: {},
				iosSystem: false
			};
		},
		components: {
			iwList,
			iwFeedItem,
			iwPageMore,
			iwDialogReport
		},
		computed: {
			feedListParams() {
				return {
					search_type: this.search_type,
					uuid: this.uuid
				}
			}
		},
		onLoad(option) {
			// #ifdef MP
			//小程序隐藏返回按钮
			this.showBack = false;
			// #endif
			this.uuid = getLocalUuid()
			this.cuuid = getLocalUuid()
			if (option.id) {
				this.uuid = option.id
			}
			this.getData()
			var system = getPlatform()
			if (system === 'ios') {
				this.iosSystem = true
			}
			console.log(getPlatform(), '平台信息')
		},
		onReady() {},
		onPageScroll(e) {
			this.scrollList()
		},
		mounted() {
		},

		methods: {
			toMsg () {
				this.iconMenus = []
				this.shareOption = getResumeDetail(
					this.uuid,
					this.resume.info.name,
					this.resume.info.company,
					this.resume.info.avatar_url
				)
				this.$refs.pageMore.show()
			},
			iconMenusClickedItem (item) {
				iconMenusClickedItem(this, this.itemOptionsObj, item, () => {
					this.iconMenus = getIconMenus(this.itemOptionsObj)
				})
			},
			showPageMore(data) {
				this.itemOptionsObj = data.item
				this.iconMenus = getIconMenus(data.item)
				this.shareOption = data.shareOption
				console.log(data.shareOption, '分享数据')
				this.$refs.pageMore.show()
			},
			scrollList(scrollTop) {
				let tmpY = 375;
				scrollTop = scrollTop > tmpY ? 375 : scrollTop;
				this.afterHeaderOpacity = scrollTop * (1 / tmpY);
				this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
			},
			toRoute(url) {
				uni.navigateTo({
					url: url
				})
			},
			back() {
				uni.navigateBack();
			},
			back() {
				uni.navigateBack();
			},
			collectProfessor () {
				if (!this.cuuid) {
					window.location.href = store.state.webRoot + 'wechat/oauth?redirect=/home'
					return
				}
				postRequest(`follow/user`, {
					id: this.uuid
				}).then(response => {
					var code = response.code
					if (code !== 1000) {
						uni.showToast({
							icon: 'none',
							title: response.message
						})
						return
					}
					this.resume.is_followed = !this.resume.is_followed
					uni.showToast({
						icon: 'none',
						title: response.data.tip
					})
				})
			},
			getData() {
				postRequest(`profile/resumeInfo`, {
					uuid: this.uuid
				}).then(response => {
					var code = response.code
					if (code !== 1000) {
						return
					}
					this.resume = response.data
					this.apper = this.resume.groups.length
				})
			}
		}
	}
</script>

<style lang="less">
	page, .content{
	  background-color: #fff;
	  height: 100%;
	  overflow: hidden;
	}
	.showHeader {
		background: #03AEF9;
	}
	.bot {
		position: absolute;
		right: 27.98upx;
		bottom: 0;
		left: 27.98upx;
		height: 2upx;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: rgb(220, 220, 220);
	}
	
	.header-wrapper {
		height: 642.98upx;
		position: relative;
		margin-bottom: 73.96upx;
	}

	.header {
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		/*  #ifdef  APP-PLUS  */
		padding-top: var(--status-bar-height);

		/*  #endif  */
		&.header-ios{
			position: sticky;
		}
		.before,
		.after {
			width: 100%;
			padding: 0 4%;
			height: 100upx;
			display: flex;
			align-items: center;
			position: fixed;
			top: 0;
			/*  #ifdef  APP-PLUS  */
			padding-top: var(--status-bar-height);
			/*  #endif  */

			.back {
				width: 66upx;
				height: 60upx;
				flex-shrink: 0;

				.iconfont {
					margin-left: -10%;
					width: 60upx;
					height: 60upx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 46upx;
				}
			}

			.middle {
				width: 100%;
				font-size: 39upx;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.icon-btn {
				width: 66upx;
				height: 60upx;
				flex-shrink: 0;
				display: flex;

				.iconfont {
					&:first-child {
						margin-right: 5upx;
					}

					width: 60upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 46upx;
				}
			}
		}

		.before {
			.middle {
				color: #FFF;
			}

			.back {
				.iconfont {
					font-size: 46upx;
					color: #fff;
				}
			}

			.icon-btn {
				.iconfont {
					font-size: 46upx;
					color: #fff;
				}
			}
		}

		.after {
			background-color: #FFF;

			.back {
				.iconfont {
					color: #444;
				}
			}

			.icon-btn {
				.iconfont {
					color: #444;
				}
			}

			.middle {
				color: #3c3e44;
			}
		}
	}

	.swiper-box {
		position: relative;
		width: 100%;
		height: 100vw;

		swiper {
			width: 100%;
			height: 100vw;

			swiper-item {
				image {
					width: 100%;
					height: 100vw;
				}
			}
		}

		.indicator {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25upx;
			height: 40upx;
			border-radius: 40upx;
			font-size: 22upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}

	.info-box {
		width: 92%;
		padding: 20upx 4%;
		background-color: #fff;
		margin-bottom: 20upx;
	}

	.infoBg {
		width: 100%;
		background: #1C3F6D;
		position: absolute;
		height: 642.98upx;
		border-bottom-left-radius: 39.98upx;
		border-bottom-right-radius: 39.98upx;

		.bigImg {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-bottom-left-radius: 39.98upx;
			border-bottom-right-radius: 39.98upx;
		}

		.backMask {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			border-bottom-left-radius: 39.98upx;
			border-bottom-right-radius: 39.98upx;
			background: linear-gradient(360deg, rgba(27, 68, 194, 1) 0%, rgba(81, 167, 254, 0.8) 100%);
		}
	}

	.headers {
		position: relative;

		.title {
			position: absolute;
			top: 19.96upx;
			left: 50%;
			font-size: 36upx;
			color: #FFFFFF;
			transform: translateX(-50%);
		}

		.headPhotowrapper {
			width: 90%;
			position: absolute;
			top: 117.98upx;
			left: 51.98upx;

			.headImages {
				width: 183.98upx;
				height: 183.98upx;
				text-align: center;
				background: #E3E3E3;
				border-radius: 50%;
				border: 1.96upx solid #ffffff;

				.avatarImg {
					width: 100%;
					height: 100%;
					border-radius: 50%;
					object-fit: cover;
				}
			}

			.personalInfo {
				.nameAndLevel {
					margin-top: 19.96upx;

					.name {
						color: #FFFFFF;
						font-size: 39.98upx;
						line-height: 55.96upx;
					}

					.level {
						padding: 1.96upx 9.98upx;
						position: relative;
						top: -6upx;
						font-style: normal;
						line-height: 30upx;
						font-size: 19.96upx;
						color: #FFFFFF;
						text-align: center;
						border-radius: 199.96upx;
						background: linear-gradient(180deg, #07D7FD 0%, #03AEF9 100%);
					}
				}

				.detailInfo {
					margin-top: 12upx;
					font-size: 24upx;
					line-height: 33.0upx;

					.text {
						color: #ffffff;
						opacity: 0.7;
					}

					.number {
						color: #ffffff;
					}

					.spot {
						display: inline-block;
						width: 3.98upx;
						height: 3.98upx;
						border-radius: 50%;
						background: #ffffff;
						opacity: 0.7;
						margin: 0 9.98upx 6upx;
					}
				}

				.consultWrapper {
					margin-top: 36upx;
					display: flex;
					justify-content: space-between;

					.leftButton {
						display: flex;

						.letter {
							margin-right: 16.96upx;
						}

						.border-football {
							color: #ffffff;
							font-size: 25.96upx;
							padding: 7.96upx 33.0upx;

							&:after {
								border-radius: 15.98upx;
								border-color: #85A3E4;
							}
						}
					}

					.rightDetailInfo {
						margin-right: 1.96upx;
						margin-top: 12.98upx;

						text {
							color: #FFFFFF;
							font-size: 24upx;
						}

						.iconfont {
							color: #FFFFFF;
							font-size: 24upx;
						}
					}
				}

				.operationWrapper {
					position: absolute;
					top: 30.98upx;
					right: 0;
					display: flex;

					.iconAndText {
						width: 87.98upx;
						text-align: center;

						&.isFollowed {
							position: relative;
							top: -12upx;
							margin-left: 12upx;
							.word {
								margin-top: -16upx;
							}
							.iconfont {
								font-size: 60upx;
							}
						}

						.word {
							color: #FFFFFF;
							font-size: 21.98upx;
							opacity: 0.7;
						}

						&.code {
							.iconfont {
								font-size: 45.98upx;
							}
						}

						&.active {
							.iconfont {
								color: #FA4975;
							}
						}

						.iconfont {
							color: #ffffff;
							font-size: 43.96upx;
						}
					}
				}
			}
		}
	}

	.counter {
		width: 685.96upx;
		/*height: 129.98upx;*/
		padding: 18upx 0 27.0upx;
		position: relative;
		top: 51.98upx;
		left: -19.96upx;
		overflow: hidden;
		text-align: center;
		border-radius: 15.98upx;
		background: #ffffff;
		box-shadow: 0upx 9.98upx 19.96upx 0upx rgba(247, 248, 250, 1);

		.counterList {
			width: 25%;
			float: left;

			.font-family-medium {
				font-size: 37.96upx;
				color: #444444;
				line-height: 52.96upx;
			}

			.script {
				font-size: 21.98upx;
				line-height: 30upx;
				color: #808080;
				margin-top: 1.96upx;
			}
		}
	}

	.domainWrapper {
		padding: 0 31.96upx;
		overflow: hidden;
		position: relative;

		/*margin-top: 73.96upx;*/
		.skilledTags {
			height: 87.98upx;
			line-height: 87.98upx;
			margin-bottom: 9.98upx;

			.iconfont {
				font-size: 30upx;
				margin-right: 3.98upx;
			}

			.tipTitle {
				color: #444444;
				font-size: 32upx;
			}
		}

		.tags {
			float: left;
			margin-right: 15.98upx;
			margin-bottom: 30upx;

			.text {
				float: left;
				background: #ececee;
				border-radius: 99.98upx;
				padding: 0upx 19.96upx;
				line-height: 48upx;
				font-size: 24upx;
				color: #444444;
			}
		}

		.addTags {
			float: left;
			color: #03AEF9;
			padding: 0upx 19.96upx;
			line-height: 48upx;
			font-size: 24upx;
			vertical-align: sub;
			margin-bottom: 30upx;
			border-radius: 99.98upx;
			border: 1.96upx solid #DCDCDC;

			.icon {
				font-size: 24upx;
				color: #B4B4B6;
				margin-right: 6upx;
			}
		}
	}



	.muiContent .specialColumn {
		padding: 0 31.96upx;
		display: flex;
		height: 88upx;
		line-height: 88upx !important;
		justify-content: space-between;

		.titleText {
			line-height: 88upx;

			.iconfont {
				font-size: 30upx;
				margin-right: 3.98upx;
			}

			.tipTitle {
				color: #444444;
				font-size: 32upx;
			}
		}

		.intoIcon {
			color: #3f3f3f;
			line-height: 88upx;
		}
	}
	
</style>
