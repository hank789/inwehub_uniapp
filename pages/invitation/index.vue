<template>

	<view class="mui-content">
		<view class="Invitation_t">
			<image src="../../static/images/invitation-register.png" class="Invitation_img"></image>
		</view>

		<view class="invitation-information">
			<view class="firstLi publicLi" @tap.stop.prevent="$router.pushPlus('/invitation/friends')">
				<view class="firstP">{{invited_users}}位</view>
				<view class="secondP">已成功邀请</view>
				<text class="thirdSpan">查看</text>
			</view>
			<view class="secondLi publicLi">
				<view class="firstP">{{rewardMoney}}元</view>
				<view class="secondP">已获得奖励</view>
			</view>
		</view>
		<!--呼朋唤友-->
		<view class="contactFriends border-football">
			<view class="contactBtn">
				<text class="invitationText" @tap.stop.prevent="share()">呼朋唤友</text>
				<image class="moneyImg" src="../../static/images/money@3x.png"></image>
			</view>
			<text class="publicText bonusText">即可获得好友平台支付或收益5%分红</text>
			<text class="publicText profitText" @tap.stop.prevent="warn()">了解平台上可获取的收益 ></text>
		</view>
		<!--邀请说明-->
		<view class="invitationNote">
			<view class="inviteTitle">被邀请好友可享注册大礼包</view>
			<view class="inviteText">（现金奖励-可用于付费围观等）</view>
			<view class="shareTitle">点击呼朋唤友并分享链接，既是同意 <u class="rule" @tap.stop.prevent="$router.pushPlus('/protocol/invitation')">邀请活动规则</u></view>
		</view>
	</view>

</template>

<script>
</script>

<style lang="less">
	.mui-content {
		width: 750upx;
		background: #FFFFFF;
	}

	.Invitation_t {
		width: 100%;
		height: 640upx;
		background-color: #FFFFFF;
		background-image: url("~@/static/images/invitation-bg@2x.png");
		background-repeat: no-repeat;
		background-size: 100% 90%;
		position: relative;
	}

	.Invitation_img {
		width: 95%;
		/*height:540upx;*/
		position: absolute;
		bottom: 0upx;
		left: 0;
		right: 0;
		margin: auto;
	}

	/*　邀请成功的信息部分*/
	.invitation-information {
		width: 87%;
		height: 177.0upx;
		background: #FFFFFF;
		margin: 19.96upx 0;
		padding: 0upx 49.96upx;

		.firstLi {
			height: 100%;
			width: 42%;
			float: left;
			background: url("~@/static/images/invitationNumber@3x.png") no-repeat;
			background-size: 100% 100%;
			position: relative;
		}

		.secondLi {
			width: 36%;
			height: 100%;
			float: right;
			background: url("~@/static/images/rewardNumber@3x.png") no-repeat;
			background-size: 100% 100%;
		}

		.publicLi {
			.firstP {
				font-size: 30upx;
				color: #444444;
				margin-top: 43.96upx;
				text-align: center;
			}

			.secondP {
				font-size: 27.98upx;
				color: #808080;
				text-align: center;
			}

			.thirdSpan {
				font-size: 25.96upx;
				color: #FFFFFF;
				position: absolute;
				right: 0;
				right: 5%;
				top: 23%;
			}
		}
	}

	/*呼朋唤友*/

	.contactFriends {
		width: 95%;
		height: 169.96upx;
		margin-left: 2.5%;
		margin-top: 79.96upx;
		position: relative;

		&::after {
			border-radius: 169.96upx;
		}

		.publicText {
			display: block;
			text-align: center;
			font-size: 27.98upx;
		}

		.bonusText {
			color: #444444;
			padding-top: 57.0upx;
		}

		.profitText {
			color: #03aef9;
			margin-top: 7.96upx;
		}

		.luckDraw {
			width: 123.98upx;
			height: 54upx;
			background: #dcdcdc;
			border-radius: 99.98upx;
			text-align: center;
			line-height: 54upx;
			margin: 0 auto;
			font-size: 27.98upx;
			color: #b4b4b6;

			&.red {
				background: #fa4975;
				color: #ffffff;
			}
		}
	}

	.contactBtn {
		position: absolute;
		width: 300upx;
		height: 105.98upx;
		top: -60upx;
		left: 0;
		right: 0;
		margin: auto;

		.moneyImg {
			width: 81.98upx;
			height: 57.98upx;
			position: absolute;
			left: -30upx;
			top: 45.98upx;
		}

		.invitationText {
			width: 100%;
			height: 100%;
			background: #03aef9;
			border-radius: 99.98upx;
			text-align: center;
			line-height: 105.98upx;
			color: #FFFFFF;
			font-size: 36upx;
			font-weight: 500;
			z-index: 999;
			position: absolute;
		}
	}

	.invitationNote {
		margin-top: 40.96upx;
		margin-bottom: 57.98upx;
		text-align: center;
		overflow: hidden;

		.inviteTitle {
			font-size: 31.96upx;
			color: #444444;
		}

		.inviteText {
			font-size: 27.98upx;
			color: #808080;
		}

		.shareTitle {
			font-size: 24upx;
			color: #808080;
			margin-top: 45.98upx;

			.rule {
				font-size: 24upx;
				color: rgb(68, 68, 68);
			}
		}
	}
</style>
