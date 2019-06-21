<template>
	<view class="">

		<view class="mui-content">
			<view class="info-professor">
				<view class="info-look" @tap.stop.prevent="toRoute('/pages/my/resume')">
					<text class="iconfont icon-gongkai"></text>
					<text class="lookText">预览</text>
				</view>
				<view class="avatarImg" @tap.stop.prevent="uploadAvatar()">
					<image class="avatar" :src="user.avatar_url"></image>
					<text class="icon">
						<text class="iconfont icon-xiangji"></text>
					</text>
				</view>
				<view class="userName">
					<span class="name">{{ user.name }}</span>
					<text class="iconfont icon-zhuanjiabiaoji" v-if="user.is_expert =='1'"></text>
				</view>
				<view class="userCompany">
					<text class="userTips">{{ user.company }}</text>
					<view class="spot"></view>
					<text class="userTips">{{ user.title }}</text>
				</view>
				<view class="userInfos userMobile">
					{{ user.mobile }}
				</view>
				<view class="userInfos userEmail">
					{{ user.email }}
				</view>
			</view>
			<view class="info-progresbar">
				<text class="info-progress"><text class="iWidth" :style="'width:'+ user.account_info_complete_percent +'%'"></text></text>
				<text class="info-text">{{ user.account_info_complete_percent }}%</text>
				<text class="iconfont icon-jinggao" id='confirmBtn' @tap.stop.prevent="warn"></text>
			</view>


			<view class="part3">
				<view class="setUpList" @tap.stop.prevent="goEditData('info')">
					<text>基本资料</text>
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="line-river-after line-river-after-short"></view>
				<view class="setUpList" @tap.stop.prevent="goEditData('job')">
					<text>工作经历</text>
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="line-river-after line-river-after-short"></view>
				<view class="setUpList" @tap.stop.prevent="goEditData('project')">
					<text>项目经历</text>
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="line-river-after line-river-after-short"></view>
				<view class="setUpList" @tap.stop.prevent="goEditData('tranis')">
					<text>培训认证</text>
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="line-river-after line-river-after-short"></view>
				<view class="setUpList" @tap.stop.prevent="goEditData('edu')">
					<text>隐私设置</text>
					<text class="iconfont icon-jinru"></text>
				</view>
				<view class="line-river-after line-river-after-short"></view>
			</view>

			<view class="paizhao">
				<text class="iconfont icon-diannao"></text>
				访问 www.inwehub.com，电脑填写更便捷！
			</view>
		</view>

	</view>
</template>

<script>
	import { getUserInfo, getLocalUserInfo } from '@/lib/user'
	import ui from "@/lib/ui"
	export default {
		data() {
			return {
				user: {},
				work_city: '',
				home_city: '',
				getUserInfos: getLocalUserInfo()
			}
		},
		onLoad() {
			this.getUserInfo()
		},
		created () {
			this.getUserInfo()
		},
		methods: {
			goEditData(type) {
				// #ifdef APP-PLUS || MP-WEIXIN
				switch (type) {
					case 'info':
						uni.redirectTo({url: '/pages/my/infos/basic'})
						break
					case 'job': 
						uni.redirectTo({ url: '/pages/my/infos/jobs'})
						break
					case 'project':
						uni.redirectTo({url: '/pages/my/infos/edus'})
					case 'tranis':
						uni.redirectTo({url: '/pages/my/infos/trains'})
						break
					case 'edu':
						uni.redirectTo({url: '/pages/my/infos/privacy'})
						break
					default:
				}
				// #endif
				
				// #ifdef H5
				switch (type) {
					case 'info':
						uni.navigateTo({url: '/pages/my/infos/basic'})
						break
					case 'job': 
						uni.navigateTo({ url: '/pages/my/infos/jobs'})
						break
					case 'tranis':
						uni.navigateTo({url: '/pages/my/infos/trains'})
						break
					case 'edu':
						uni.navigateTo({url: '/pages/my/infos/privacy'})
						break
				}
				// #endif
			},
			warn() {
				var btnArray = ['取消', '确定']
				ui.confirm('⚠️警告说明 ', '为保证每位用户信息都真实有效，请务必如实填写。如发现不实，首次将给予警告，第二次将永久封号。平台对所有个人信息绝对保密，不会提供给任何第三方。', btnArray, (e) => {
					if (e.index === 1) {
						return false
					} else {
						return false
					}
				})
			},
			toRoute (url) {
				uni.navigateTo({url: url})
			},
			getUserInfo() {
				let getUserInfo = getLocalUserInfo()
				this.user = getUserInfo
				this.work_city = getUserInfo.province.name + '-' + getUserInfo.city.name
				this.home_city = getUserInfo.hometown_province.name + '-' + getUserInfo.hometown_city.name
			},
		}
	}
</script>

<style lang="less">
	.info-professor {
		width: 100%;
		padding: 39.98upx 30upx 0upx 31.96upx;
		background: #F3F4F6;
		text-align: center;
		position: relative;

		.avatarImg {
			.avatar {
				width: 138upx;
				height: 138upx;
				border-radius: 50%;
			}

			.icon {
				display: inline-block;
				width: 36upx;
				height: 36upx;
				border-radius: 50%;
				background: #FFFFFF;
				margin-left: -36upx;
				margin-bottom: 12upx;
				position: relative;

				.iconfont {
					font-size: 42upx;
					color: #808080;
					position: absolute;
					left: -2upx;
					top: -20upx;
				}
			}
		}

		.userName {
			margin-top: 12upx;

			.name {
				font-size: 32upx;
				font-weight: 600;
				color: #444444;
			}

			.iconfont {
				font-size: 39.98upx;
				color: rgb(3, 174, 249);
				margin-bottom: -3.98upx;
			}
		}

		.userCompany {
			margin-top: 14upx;

			.userTips {
				font-size: 26upx;
				color: #444444;
			}

			.spot {
				display: inline-block;
				width: 2upx;
				height: 25.96upx;
				background: #c8c8c8;
				margin: 0 6upx -3.98upx 6upx;
			}
		}

		.userInfos {
			font-size: 27.98upx;
			color: #444444;

			&.userMobile {
				margin-top: 14upx;
			}

			&.userEmail {
				margin-top: 12upx;
			}
		}
	}

	.info-look {
		position: absolute;
		top: 39.98upx;
		right: 46upx;

		.iconfont {
			font-size: 48upx;
			color: rgb(3, 174, 249);
			margin-bottom: -3.98upx;
		}

		.lookText {
			font-size: 27.98upx;
			color: #444444;
			position: relative;
			top: -8upx;
			left: 6upx;
		}
	}



	.info-progresbar {
		width: 100%;
		height: 99.98upx;
		padding: 19.96upx 33.98upx 0 31.96upx;
		background: #F3F4F6;

		.iconfont {
			float: right;
			font-size: 30upx;
			color: #fcc816;
			margin-left: 0upx;
			margin-top: -6upx;
		}

		.info-progress {
			display: inline-block;
			width: 80%;
			height: 24upx;
			border-radius: 99.98upx;
			overflow: hidden;
			border: 0.98upx solid rgb(3, 174, 249);
			margin-bottom: -3.98upx;

			.iWidth {
				display: inline-block;
				font-style: normal;
				margin-bottom: 15.98upx;
				margin-left: -27.98upx;
				height: 24upx;
				background: rgb(3, 174, 249);
			}
		}

		.info-text {
			font-size: 24upx;
			color: #808080;
			position: relative;
			left: 12upx;
			top: -2upx;
		}
	}

	.setUpList {
		padding: 21.98upx 31.96upx;
		background: #ffffff;
		display: flex;
		color: #444444;
		font-size: 31.96upx;
		position: relative;
		justify-content: space-between;

		&.openChat {
			padding-bottom: 0;
		}

		.iconfont {
			color: #808080;
			font-size: 25.96upx;
			margin-top: 7.96upx;
		}

		.switchestop {
			margin-top: 13.96upx;
		}
	}


	.paizhao {
		width: 92%;
		height: 87.98upx;
		margin-left: 4%;
		border: 1.96upx solid rgb(220, 220, 220);
		text-align: center;
		line-height: 87.98upx;
		background: #FFFFFF;
		font-size: 24upx;
		color: rgb(128, 128, 128);
		word-break: break-all;
		border-radius: 7.96upx;

		.iconfont {
			font-size: 39.98upx;
			color: rgb(128, 128, 128);
		}
	}
</style>
