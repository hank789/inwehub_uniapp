<template>
	<view>

		<view class="mui-bar">
			<view class="setUp" @tap.stop.prevent="toRoute('/pages/my/setting')">
				<text class="iconfont icon-shezhi"></text>
			</view>
			<view class="code" @tap.stop.prevent="$router.pushPlus('/my/qrcode')">
				<text class="iconfont icon-erweima"></text>
			</view>
		</view>

		<view class="mui-content">
			<view class="my-top" @tap.stop.prevent="$router.pushPlus('/my/resume')">
				<view class="account_info">
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="professor">
					<view class="my-img" @tap.stop.prevent="$router.pushPlus('/my/resume')">
						<ImageView :src="avatar" width="59" height="59" class="avatar"></ImageView>
						<view class="expert" v-if="expert_apply_status =='2'">
							<text class="iconfont icon-zhuanjiabiaozhishixin"></text>
						</view>
					</view>

					<view class="my-personal">
						<view class="my-info">
							<text class="userName font-family-medium">{{name}}</text>
							<text class="userLevel" @tap.stop.prevent="$router.pushPlus('/my/Growth')">L{{ user_level }}</text>
						</view>
						<view class="my-detail">
							<text class="followedMy" @tap.stop.prevent="$router.pushPlus('/my/focus/'+uuid)">关注我的人{{followed_number}}</text>
							<view class="spots"></view>
							<text class="followedMy" @tap.stop.prevent="$router.pushPlus('/my/visitors')">访客人气{{popularity}}</text>
						</view>
					</view>
				</view>
			</view>

			<view class="part2">
				<view class="liList" @tap.stop.prevent="$router.pushPlus('/my/publishAnswers/' + uuid)">
					<text class="font-family-medium">{{publishes}}</text>
					<text class="listText">发布</text>
				</view>
				<view class="liList" @tap.stop.prevent="$router.pushPlus('/collectUser')">
					<text class="font-family-medium">{{attention}}</text>
					<text class="listText">关注</text>
				</view>
				<view class="liList" @tap.stop.prevent="$router.pushPlus('/my/collectedAnswers')">
					<text class="font-family-medium">{{collections}}</text>
					<text class="listText">收藏</text>
				</view>
				<view class="liList" @tap.stop.prevent="$router.pushPlus('/group/my/'+uuid)">
					<text class="font-family-medium">{{groups}}</text>
					<text class="listText">圈子</text>
				</view>
			</view>
			<view class="gray"></view>

			<!--列表内容-->
			<view class="component-option">
				<view class="optionList" @tap.stop.prevent="toRoute('/pages/my/finance')">
					<text class="optionText">我的钱包</text>
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="gray"></view>
				<view class="optionList invite" @tap.stop.prevent="toRoute('/pages/invitation/index')">
					<text class="optionText">邀请好友</text>
					<text class="rightText">5%返现</text>
					<text class="iconfont icon-jinru"></text>
					<i class="bot"></i>
				</view>
				<view class="optionList signIn" @tap.stop.prevent="toSignIGift()">
					<text class="optionText">每日签到</text>
					<text class="redSpots" v-if="!current_day_signed"></text>
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="gray"></view>
				<view class="optionList" @tap.stop.prevent="$router.pushPlus('/feedback/advise')">
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

		</view>

	</view>
</template>

<script>
	export default {
		onLoad() {

		},
		methods: {
		  toRoute (url) {
			uni.navigateTo({url: url})
		  }
		}
	}
</script>

<style lang="less">
	.mui-content {
		background: #fff;
		top: 100upx;
		bottom: 50px;
		/* px不转换 */
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

	.mui-bar {
		padding: 22.96upx 32upx 0;
		display: flex;
		justify-content: space-between;

		.icon {
			font-size: 42upx;
			color: #444444;
		}

		.setUp {
			display: flex;
			padding-left: 7.96upx;
		}

		.code {
			display: flex;
			padding-right: 7.96upx;
		}
	}

	.account_info {
		position: absolute;
		right: 0;
		top: 43.96upx;
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
		}
	}


	.my-top {
		overflow: hidden;
		background-color: #ffffff;
		padding: 0 31.96upx;
	}

	.professor {
		margin-top: 30upx;
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
		margin-top: 7.96upx;
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
