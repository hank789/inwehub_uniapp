<template>
	<view class="content">
		<iwList v-model="list" :api="'follow_my/users'" @scrollList="scrollList" ref="iwList" :cssTop="cssTop" :requestData="feedListParams">

			<view class="myFocus">
				<view class="focusItem" v-for="(item, index) in list" :key="index">
					<image class="avatar" :src="item.user_avatar_url" @tap.stop.prevent="toRoute('/pages/my/resume?id=' + item.uuid + '&goback=1', 'list-detail-page')"></image>
					<view @tap.stop.prevent="toRoute('/pages/my/resume?id=' + item.uuid + '&goback=1', 'list-detail-page')">
						<view class="userName">
							<text class="name">{{item.user_name}}</text>
							<text class="iconfont icon-zhuanjiabiaoji" v-if="item.is_expert =='1'"></text>
						</view>
						<view class="descText">{{item.description}}</view>
					</view>
					<view class="follows" @tap.stop.prevent="collectProfessor(item.uuid,index)" v-if="!item.is_following">关注Ta</view>
					<view class="follows bgblue" @tap.stop.prevent="collectProfessor(item.uuid,index)" v-else>已关注</view>
					<text class="bot"></text>
				</view>
			</view>
		</iwList>
	</view>
</template>

<script>
	import { postRequest } from '@/lib/request'
	import iwList from '@/components/iw-list/iw-list'
	import { getLocalUuid } from "@/lib/user"
	export default {
		data() {
			return {
				list: [],
				uuid: '',
				cssTop: 88,
				newTitle: '关注我的',
				userUuid: getLocalUuid()
			}
		},
		components: {
			iwList
		},
		onLoad(option) {
			this.uuid = option.uuid
			if (this.userUuid !== option.uuid) {
				this.newTitle = '关注Ta的'
			}
			uni.setNavigationBarTitle({
				title: this.newTitle
			})
		},
		computed: {
			feedListParams() {
				return {
					uuid: this.uuid
				}
			}
		},
		methods: {
			toRoute(url) {
				uni.navigateTo({url: url})
			},
			collectProfessor(id, index) {
				postRequest(`follow/user`, {
					id: id
				}).then(response => {
					var code = response.code
					if (code !== 1000) {
						uni.showToast({
							icon: 'none',
							title: response.message
						})
						return
					}
					console.log(this.list[index].is_following)
					this.list[index].is_following = !this.list[index].is_following
					uni.showToast({
						icon: 'none',
						title: response.data.tip
					})
				})
			}
		}
	}
</script>

<style lang="less">
	.content {
		height: 100%;
		background: #FFF;
		overflow: hidden;
	}

	.bot {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0upx;
		height: 2upx;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: rgb(220, 220, 220);
	}

	.myFocus {
		padding: 0 34upx;

		.focusItem {
			width: 100%;
			height: 126upx;
			list-style: none;
			padding-top: 20upx;
			padding-bottom: 20upx;
			position: relative;

			.avatar {
				width: 88upx;
				height: 88upx;
				border-radius: 50%;
				margin-right: 16upx;
				float: left;
			}

			.follows {
				position: absolute;
				width: 123.98upx;
				height: 54upx;
				background: #03aef9;
				border-radius: 99.98upx;
				text-align: center;
				line-height: 54upx;
				right: 0;
				top: 36upx;
				font-size: 27.98upx;
				color: #ffffff;
			}
			.bgblue {
				background: #dbdbdb;
				color: #b4b4b6;
			}

			.userName {
				margin-top: -14upx;

				.name {
					max-width: 252upx;
					height: 39.98upx;
					overflow: hidden;
					font-family: "PingFangSC";
					font-size: 27.98upx;
					color: #565656;
				}

				.iconfont {
					font-size: 39.98upx;
					margin-bottom: 3.98upx;
					color: #3c95f9;
				}
			}

			.descText {
				width: 100%;
				height: 27.98upx;
				font-size: 25.96upx;
				color: #b4b4b6;
				line-height: 25.96upx;
			}
		}
	}
</style>
