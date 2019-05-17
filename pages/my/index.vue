<template>
	<view>

		<view class="mui-bar">
			<view class="setUp" @tap.stop.prevent="$router.pushPlus('/setting')">
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
							<text class="mui-ellipsis font-family-medium">{{name}}</text>
							<text @tap.stop.prevent="$router.pushPlus('/my/Growth')">L{{ user_level }}</text>
						</view>
						<view class="my-detail">
							<text class="followedMy" @tap.stop.prevent="$router.pushPlus('/my/focus/'+uuid)">关注我的人{{followed_number}}</text>
							<text class="popul" @tap.stop.prevent="$router.pushPlus('/my/visitors')">访客人气{{popularity}}</text>
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
				<view v-if="show_my_wallet" class="optionList" @tap.stop.prevent="$router.pushPlus('/my/Finance')">
					<text>我的钱包</text>
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="gray"></view>
				<view v-if="show_my_wallet" class="optionList invite" @tap.stop.prevent="$router.pushPlus('/invitation/index')">
					<text>邀请好友</text>
					<text>5%返现</text>
					<text class="iconfont icon-jinru"></text>
					<i class="bot"></i>
				</view>
				<view v-if="show_my_wallet" class="optionList signIn" @tap.stop.prevent="toSignIGift()">
					<text>每日签到</text>
					<text v-if="!current_day_signed"></text>
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="gray"></view>
				<view class="optionList" @tap.stop.prevent="$router.pushPlus('/feedback/advise')">
					<text>意见反馈</text>
					<text class="iconfont icon-jinru"></text>
					<i class="bot"></i>
				</view>
				<view class="optionList" @tap.stop.prevent="$router.pushPlus('/contactUs')">
					<text>联系我们</text>
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="gray"></view>
			</view>

		</view>

	</view>
</template>
<script>

</script>
<style lang="less">
	.mui-bar {
		padding: 0.306rem 32upx 0;
		display: flex;
		justify-content: space-between;

		.icon {
			font-size: 0.56rem;
			color: #444444;
		}

		.setUp {
			display: flex;
			padding-left: 0.106rem;
		}

		.code {
			display: flex;
			padding-right: 0.106rem;
		}
	}


	.my-top {
		overflow: hidden;
		background-color: #ffffff;
		padding: 0 0.426rem;
	}

	.professor {
		margin-top: 0.4rem;
		display: flex;

		.my-img {
			width: 1.573rem;
			height: 1.573rem;
			position: relative;

			.expert {
				position: absolute;
				bottom: -0.026rem;
				right: -0.08rem;

				.icon {
					font-size: 0.586rem;
					color: #FCC816;
					border: 0.053rem solid #FFF;
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
		margin-top: 0.106rem;
		margin-left: 0.266rem;
		position: relative;
		z-index: 98;

		.my-info {
			position: relative;

			span {
				display: inline-block;

				&:nth-of-type(1) {
					max-width: 2.92rem;
					font-size: 0.533rem;
					color: #444444;
					margin-right: 0.04rem;
					margin-bottom: -0.106rem;
				}

				&:nth-of-type(2) {
					position: relative;
					z-index: 1;
					padding: 0.026rem 0.133rem;
					position: relative;
					top: -0.08rem;
					font-style: normal;
					line-height: 0.4rem;
					font-size: 0.266rem;
					color: #FFFFFF;
					text-align: center;
					border-radius: 2.666rem;
					background: linear-gradient(180deg, #07D7FD 0%, #03AEF9 100%);
				}
			}

			p {
				&:nth-of-type(1) {}
			}

			svg {
				:nth-of-type(1) {
					font-size: 0.693rem;
					margin-bottom: -0.106rem;
					margin-left: -0.08rem;
					color: rgb(3, 174, 249);
					position: relative;
				}
			}
		}

		.my-detail {
			margin-top: 0.106rem;

			span {
				font-size: 0.346rem;
				color: #444444;
			}

			i {
				display: inline-block;
				width: 0.053rem;
				height: 0.053rem;
				border-radius: 50%;
				background: #B4B4B6;
				margin: 0 0rem 0.08rem;
			}
		}
	}


	.part2 {
		list-style: none;
		width: 100%;
		height: 1.653rem;
		margin-top: 0.4rem;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		background: #ffffff;
		position: relative;

		.liList {
			float: left;
			width: 25%;
			height: 100%;
			text-align: center;
			position: relative;
			margin-top: 0.213rem;

			.iconfont {
				font-size: 0.64rem;
				margin-top: 0.266rem;
			}

			.font-family-medium {
				color: #444444;
				font-size: 0.506rem;
				line-height: 0.586rem;
			}

			.listText {
				font-size: 0.32rem;
				color: #808080;
				display: block;
			}
		}
	}
	
	.component-option{
    .invite {
      span {
        &:nth-of-type(2) {
          position: absolute;
          right: 1.093rem;
          color: #B4B4B6;
          font-size: 0.32rem;
        }
      }
    }
    .signIn {
      span {
        &:nth-of-type(2) {
          width: 0.213rem;
          height: 0.213rem;
          position: absolute;
          left: 2.1rem;
          top: 0.266rem;
          border-radius: 50%;
          background: #FA4975;
          display: inline-block;
        }
      }
    }
    .optionList {
      /*width: 92%;*/
      margin: 0 auto;
      color: #444444;
      font-size: 0.4rem;
      padding: 0.293rem 0.4rem;
      position: relative;
      display: flex;
      justify-content: space-between;
      span {
        display: flex;
      }
      .icon {
        font-size: 0.346rem;
        display: flex;
        margin-top: 0.08rem;
        color: #808080;
      }
      .bot {
        right: 0.48rem;
        left: 0.426rem;
      }
    }
  }
</style>
