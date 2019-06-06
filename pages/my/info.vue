<template>
	<view class="">

		<view class="mui-content">
			<view class="info-professor">
				<view class="info-look" @tap.stop.prevent="$router.pushPlus('/my/resume')">
					<text class="iconfont icon-gongkai"></text>
					<text class="lookText">预览</text>
				</view>
				<view class="avatarImg" @tap.stop.prevent="uploadAvatar()">
					<image class="avatar" :src="user.info.avatar_url"></image>
					<text class="icon">
						<text class="iconfont icon-xiangji"></text>
					</text>
				</view>
				<view class="userName">
					<span class="name">{{ user.info.name }}</span>
					<text class="iconfont icon-zhuanjiabiaoji" v-if="user.info.is_expert =='1'"></text>
				</view>
				<view class="userCompany">
					<text class="userTips">{{ user.info.company }}</text>
					<view class="spot"></view>
					<text class="userTips">{{ user.info.title }}</text>
				</view>
				<view class="userInfos userMobile">
					{{ user.info.mobile }}
				</view>
				<view class="userInfos userEmail">
					{{ user.info.email }}
				</view>
			</view>
			<view class="info-progresbar">
				<text class="info-progress"><text class="iWidth" :style="'width:'+ user.info.account_info_complete_percent +'%'"></text></text>
				<text class="info-text">{{ user.info.account_info_complete_percent }}%</text>
				<text class="iconfont icon-jinggao" id='confirmBtn' @tap.stop.prevent="warn()"></text>
			</view>
		</view>

	</view>
</template>

<script>
	import { getUserInfo, getLocalUserInfo } from '@/lib/user'
	export default {
		data() {
			return {
				user: {},
				work_city: '',
				home_city: ''
			}
		},
		onLoad () {
			this.getUserInfo()
		},
		methods: {
			getUserInfo() {
				let getUserInfo = getLocalUserInfo()
				this.user = getUserInfo
				this.work_city = getUserInfo.info.province.name + ' ' + getUserInfo.info.city.name
				this.home_city = getUserInfo.info.hometown_province.name + ' ' + getUserInfo.info.hometown_city.name
			}
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
    right: 30upx;
	.iconfont {
		font-size: 48upx;
		color: rgb(3, 174, 249);
		margin-bottom: -3.98upx;
	}
	.lookText {
		font-size: 27.98upx;
		color: #444444;
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
		margin-top: 7.96upx;
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
	  }
  }
</style>
