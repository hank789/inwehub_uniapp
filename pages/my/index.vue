<template>
	<view>
		<view class="mui-content">
			<view class="my-top">
				<view class="account_info" @tap.stop.prevent="toRoute('/pages/my/resume')">
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="professor" @tap.stop.prevent="toRoute('/pages/my/resume')">
					<view class="my-img" @tap.stop.prevent="toRoute('/pages/my/resume')">
						<image :src="avatar" width="59" height="59" class="avatar"></image>
						<view class="expert">
							<text class="iconfont icon-zhuanjiabiaozhishixin"></text>
						</view>
					</view>

					<view class="my-personal">
						<view class="my-info" @tap.stop.prevent="toRoute('/pages/my/resume')">
							<text class="userName font-family-medium">{{name}}</text>
							<text class="userLevel">L{{ user_level }}</text>
						</view>
						<view class="my-detail" @tap.stop.prevent="toRoute('/pages/my/followedMeUser?id='+uuid)">
							<text class="followedMy">关注我的人{{followed_number}}</text>
						</view>
					</view>
				</view>
			</view>

			<view class="part2">
				<view class="liList" @tap.stop.prevent="toRoute('/pages/my/publishList')">
					<text class="font-family-medium">{{publishes}}</text>
					<text class="listText">发布</text>
				</view>
				<view class="liList" @tap.stop.prevent="toRoute('/pages/my/followList')">
					<text class="font-family-medium">{{attention}}</text>
					<text class="listText">关注</text>
				</view>
				<view class="liList" @tap.stop.prevent="toRoute('/pages/my/collectList')">
					<text class="font-family-medium">{{collections}}</text>
					<text class="listText">收藏</text>
				</view>
				<view class="liList" @tap.stop.prevent="toRoute('/pages/my/visitors')">
					<text class="font-family-medium">{{popularity}}</text>
					<text class="listText">人气</text>
				</view>
			</view>
			<view class="gray"></view>

			<!--列表内容-->
			<view class="component-option">
				<view class="optionList" @tap.stop.prevent="toRoute('/pages/inform/index')">
					<text class="optionText">我的消息</text>
					<text class="iconfont icon-jinru"></text>
					<i class="bot"></i>
				</view>
				<view class="optionList" @tap.stop.prevent="toRoute('/pages/help/help')">
					<text class="optionText">意见反馈</text>
					<text class="iconfont icon-jinru"></text>
					<i class="bot"></i>
				</view>
				<view class="optionList" @tap.stop.prevent="toRoute('/pages/my/contactUs')">
					<text class="optionText">联系我们</text>
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="gray"></view>
			</view>

			<view class="guessLike">
				<view class="component-block-title" style="font-size: 32upx;">猜您喜欢</view>
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in recommendList" :key="key"
					 @click="goDetail(value)">
						<view class="uni-media-list" v-if="value.read_type == 1">
							<image class="uni-media-list-logo" lazy-load :src="value.data.img"></image>
							<view class="uni-media-list-body">
								<view class="uni-media-list-text-top uni-article-title">{{ value.data.title }}</view>
								<view class="uni-media-list-text-bottom">
									<text style="color: #8f8f94;">{{ value.data.domain }}</text>
									<text></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<oauth ref="oauth" serviceId="weixin" :isShowBtn="false" @success="wechatLoginSuccess" @fail="wechatLoginFail"></oauth>
		<notify-wechat-bind ref="notifyWechatBindDialog" :showPopup="showPopup" @clickButton="clickDialogButton"></notify-wechat-bind>

	</view>
</template>

<script>
	import localEvent from '@/lib/localstorage'
	import {
		getLocalUserInfo,
		getAndUpdateUserInfo
	} from '@/lib/user.js'
	import notifyWechatBind from "@/components/iw-dialog/notify-wechat-bind.vue"
	import oauth from '@/components/oauth/oauth.vue'

	export default {
		data() {
			return {
				showPopup: false,
				attention: '',
				expert_apply_status: '',
				collections: '',
				publishes: '',
				groups: '',
				followed_number: '',
				popularity: '',
				name: '',
				avatar: '',
				title: '',
				user_level: '',
				user_id: '',
				uuid: '',
				answers: '',
				show_my_wallet: false,
				my: '',
				current_day_signed: '',
				recommendList: []
			}
		},
		components: {
			notifyWechatBind,
			oauth
		},
		onShow() {
			this.getUserData()
		},
		onNavigationBarButtonTap(e) {
			switch(e.index) {
				case 0:
					uni.navigateTo({
						url: '/pages/my/setting'
					});
					break;
				case 1:
					uni.navigateTo({
						url: '/pages/my/qrcode?uuid=' + this.uuid
					})
					break
			}
		},
		onLoad() {
			var userInfo = getLocalUserInfo()
			if (userInfo && userInfo.name && /^手机用户/.test(userInfo.name)) {
				this.showPopup = true
			}
			this.$request.post('getRelatedRecommend', {
				source_id: 0,
				source_type: 0
			}).then(res => {
				this.recommendList = res.data.data
			})
		},
		methods: {
			toRoute(url) {
				uni.navigateTo({
					url: url
				})
			},
			goDetail(item) {
				switch (item.read_type) {
					case 1:
						uni.navigateTo({
							url: '/pages/discover/detail?slug=' + item.data.slug
						})
						//this.$router.pushPlus('/c/' + item.data.category_id + '/' + item.data.slug)
						break
					case 2:
						//this.$router.pushPlus('/askCommunity/major/' + item.source_id)
						break
					case 3:
						//this.$router.pushPlus('/ask/offer/answers/' + item.source_id)
						break
					case 4:
						//this.$router.pushPlus('/EnrollmentStatus/' + item.source_id)
						break
					case 5:
						//this.$router.pushPlus('/EnrollmentStatus/' + item.source_id)
						break
					case 6:
						//this.$router.pushPlus('/ask/offer/' + item.source_id)
						break
					default:
				}
			},
			getUserData() {
				getAndUpdateUserInfo((user) => {
					this.user_level = user.info.user_level
					this.user_id = user.info.id
					this.uuid = user.info.uuid
					this.answers = user.info.answers
					this.show_my_wallet = user.info.show_my_wallet
					this.expert_apply_status = user.info.expert_apply_status
					this.avatar = user.info.avatar_url
					this.name = user.info.name
					this.title = user.info.title
					this.publishes = user.info.publishes
					this.collections = user.info.collections
					this.groups = user.info.groups
					this.followed_number = user.info.followed_number
					this.popularity = user.info.popularity
					this.current_day_signed = user.info.current_day_signed
					this.attention = user.info.followers
					//#ifdef APP-PLUS
					if (plus.os.name == 'Android') {
						this.show_my_wallet = true
					}
					//#endif
				})
			},
			clickDialogButton() {
				this.$refs.oauth.setBindType(3)
				this.$refs.oauth.login()
			},
			wechatLoginSuccess(token, openid, nickname = '', isNewUser = '') {
				console.log(token)
				console.log(openid)
				if (token) {
					this.$ls.set('token', token)
					this.getUserData()
				}
			},
			wechatLoginFail(errorMessage) {
				uni.showToast({
					title: errorMessage
				})
			},
		}
	}
</script>

<style lang="less">
	.mui-content {
		background: #fff;
	}

	.gray {
		width: 100%;
		height: 19.96upx;
		background: #F3F4F5;
	}

	.bot {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0upx;
		height: 1.96upx;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: rgb(220, 220, 220);
	}

	.account_info {
		position: absolute;
		right: 0;
		top: 40upx;
		height: 57.98upx;
		border-radius: 199.96upx 0 0 199.96upx;
		line-height: 57.98upx;
		color: #FFFFFF;
		font-size: 25.96upx;
		padding-left: 25.96upx;
		padding-right: 30upx;
		z-index: 9;

		.iconfont {
			color: #808080;
			font-size: 25.96upx;
		}
	}


	.my-top {
		overflow: hidden;
		background-color: #ffffff;
		padding: 0 31.96upx;
	}

	.professor {
		display: flex;

		.my-img {
			width: 117.98upx;
			height: 117.98upx;
			position: relative;

			.expert {
				position: absolute;
				bottom: -1.96upx;
				right: -6upx;

				.iconfont {
					font-size: 43.96upx;
					color: #FCC816;
					border: 3.98upx solid #FFF;
					border-radius: 50%;
					background: #FFF;
				}
			}
		}

		.avatar {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}

	.my-personal {
		margin-left: 19.96upx;
		position: relative;
		z-index: 98;

		.my-info {
			position: relative;

			.userName {
				max-width: 219.0upx;
				font-size: 39.98upx;
				color: #444444;
				margin-right: 3.0upx;
				margin-bottom: -7.96upx;
			}

			.userLevel {
				position: relative;
				z-index: 1;
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

		.my-detail {
			margin-top: 7.96upx;

			.followedMy {
				font-size: 25.96upx;
				color: #444444;
			}

			.spots {
				display: inline-block;
				width: 3.98upx;
				height: 3.98upx;
				border-radius: 50%;
				background: #B4B4B6;
				margin: 0 10upx 6upx;
			}
		}
	}

	.part2 {
		list-style: none;
		width: 100%;
		height: 123.98upx;
		margin-top: 30upx;
		padding-left: 30upx;
		padding-right: 30upx;
		background: #ffffff;
		position: relative;

		.liList {
			float: left;
			width: 25%;
			height: 100%;
			text-align: center;
			position: relative;
			margin-top: 15.98upx;

			.iconfont {
				font-size: 48upx;
				margin-top: 19.96upx;
			}

			.font-family-medium {
				color: #444444;
				font-size: 37.96upx;
				line-height: 43.96upx;
			}

			.listText {
				font-size: 24upx;
				color: #808080;
				display: block;
				/*margin-top: 13.96upx;*/
			}
		}
	}

	.component-option {
		.invite {
			.rightText {
				position: absolute;
				right: 81.98upx;
				color: #B4B4B6;
				font-size: 24upx;
			}
		}

		.signIn {
			.redSpots {
				width: 15.98upx;
				height: 15.98upx;
				position: absolute;
				left: 157.50upx;
				top: 19.96upx;
				border-radius: 50%;
				background: #FA4975;
				display: inline-block;
			}
		}

		.optionList {
			/*width: 92%;*/
			margin: 0 auto;
			color: #444444;
			font-size: 30upx;
			padding: 21.98upx 30upx;
			position: relative;
			display: flex;
			justify-content: space-between;

			.optionText {
				display: flex;
			}

			.iconfont {
				font-size: 25.96upx;
				display: flex;
				margin-top: 6upx;
				color: #808080;
			}

			.bot {
				right: 36upx;
				left: 31.96upx;
			}
		}
	}
</style>
