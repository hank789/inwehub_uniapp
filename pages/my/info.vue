<template>
	<view class="">

		<view class="mui-content">
			<view class="info-professor">
				<view class="info-look" @tap.stop.prevent="$router.pushPlus('/my/resume')">
					<text class="iconfont icon-gongkai"></text>
					<span>预览</span>
				</view>
				<view class="avatarImg" @tap.stop.prevent="uploadAvatar()">
					<image class="avatar" :src="user.info.avatar_url" ></image>
					<text class="icon">
						<text class="iconfont icon-xiangji"></text>
					</text>
				</view>
				<view>
					<span>{{ user.info.name }}</span>
					<text class="iconfont icon-zhuanjiabiaoji"></text>
				</view>
				<view>
					<text>{{ user.info.company }}</text>
					<view></view>
					<text>{{ user.info.title }}</text>
				</view>
				<view>
					{{ user.info.mobile }}
				</view>
				<view>
					{{ user.info.email }}
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data () {
			return {
				user: {
					info: {}
				},
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
				font-size: 49.96upx;
				color: #808080;
				position: absolute;
				left: -7.96upx;
				top: -6upx;
			}
		}
	}
  }
</style>
