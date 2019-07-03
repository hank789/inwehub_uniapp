<template>
	<view class="content">
		<view class="searchContainer">
			<view class="inputBox">
				<text class="iconfont icon-sousuo"></text>
				<input class="textInput" maxlength="45" type="text" placeholder="输入公司名称" v-model.trim="searchText" />
				<text class="close" v-if="isShow" @tap.stop.prevent="empty()">
					<text class="iconfont icon-guanbi"></text>
				</text>
			</view>
			<view class="determine" @tap.stop.prevent="submitInfo()">确定</view>
		</view>

		<iw-list class="listWrapper" v-if="dataList != null" v-model="list" :api="'company/nearbySearch'" :css-top="cssTop" :request-data="dataList">
			<view class="boxUl">
				<view class="boxLi" v-for="(item, index) in list" @tap.stop.prevent="submit(item.name)">
					<view class="container-image">
						<image :src="item.logo" ></image>
					</view>
					<view class="container-info">
						<view class="companyName text-line-2">{{item.name}}</view>
						<view class="mui-ellipsis">
							<text class="tagsBox" v-for="(tags, index) in item.tags" @tap.stop.prevent="toTagDetail(tags)"> {{tags}} <text class="line"></text></text>
						</view>
						<view class="distance">
							<text>{{item.address_province}}</text> 
							<text> < {{item.distance_format}}</text>
						</view> 
					</view>
					<i class="bottom"></i>
				</view>
			</view>
		</iw-list>
	</view>
</template>

<script>
	import iwList from '@/components/iw-list/iw-list'
	import { postRequest } from '@/lib/request'
	import userAbility from'@/lib/userAbility'
	import localEvent from "@/lib/localstorage"
	import { getLocalUserInfo } from "@/lib/user"
	import { getGeoPosition, getPlatform } from "@/lib/allPlatform"
	import { toSettingSystem } from "@/lib/html5plus"
	export default {
		data() {
			return {
				searchText: '',
				isShow: false,
				list: [],
				cssTop: 0,
				value: '',
				optionFrom: '',
				loading: 1,
				id: '',
				page: 1,
				searchRule: 1,
				lat: '',
				longt: '',
				dataList: null
			}
		},
		onLoad: function(option) {
			this.searchRule = option.from === 'infobasic' ? 2 : 1
			let userInfo = getLocalUserInfo()
			this.id = userInfo.id
			this.optionFrom = option.from
			this.getSysetmPlatform()
		},
		components: {
			iwList
		},
		watch: {
			searchText: function (newValue) {
				if (newValue) {
					this.value = newValue
					this.dataList = {
						name: newValue
					}
					this.isShow = true
				} else {
					this.isShow = false
				}
			}
		},
		methods: {
			getSysetmPlatform() {
					let plus = getPlatform()
					console.log(plus, ':平台信息')
				getGeoPosition((position) => {
					this.dataList = {
						longitude: position.longt,
						latitude: position.lat
					}
					this.longt = position.longt
					this.lat = position.lat
				}, () => {
					// 获取权限失败的回调
					if (plus === 'ios' || plus === 'android') {
						uni.showModal({
							title: '提示',
							content: '请在设置中打开定位服务',
							success: function (res) {
								if (res.confirm) {
									toSettingSystem('LOCATION')
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						})
					} else if (plus === null) {
						uni.showToast({
							icon: 'none',
							title: '请开启定位服务。'
						})
					}
				})
			},
			toTagDetail (name) {
				userAbility.jumpToTagDetail(name)
			},
			empty () {
				this.searchText = ''
			},
			submit (name) {
				if (this.optionFrom === 'infobasic') {
					postRequest('profile/update', {
					company: name
				}).then(response => {
						var code = response.code
						if (code !== 1000) {
							uni.showToast({
								title: response.message
							})
							uni.navigateBack({
								delta: 1
							});
							return
						}
						uni.showToast({
							title: '保存成功'
						})
						uni.navigateTo({
							url: '/pages/my/infos/basic'
						})
						this.loading = 0
					})
				} else {
					localEvent.set(this.optionFrom + '_company' + this.id, name)
					uni.navigateBack({
						delta: 1
					});
				}
			},
			submitInfo () {
				if (!this.value) {
					uni.showToast({
						title: '请填写公司名称'
					})
					return
				}
				if (this.value.length < 2) {
					uni.showToast({
						title: '公司名称至少两个字符'
					})
					return
				}
				if (!this.optionFrom) {
					uni.navigateBack({
						delta: 1
					});
					return false
				} else if (this.optionFrom === 'infobasic') {
					postRequest('profile/update', {
						company: this.value
					}).then(response => {
						console.log(response)
						var code = response.code
						if (code !== 1000) {
							uni.showToast({
								title: response.message
							})
							uni.navigateBack({
								delta: 1
							});
							return
						}
						uni.showToast({
							title: '保存成功'
						})
						uni.navigateBack({
							delta: 1
						});
						this.loading = 0
					})
				} else {
					localEvent.set(this.optionFrom + '_company' + this.id, this.value)
					uni.navigateBack({
						delta: 1
					});
				}
			},
		}
	}
</script>

<style lang="less">
	.content {
		background-color: #fff;
		height: 100%;
		overflow: hidden;
	}
	.listWrapper {
		margin-top: 106upx;
	}
	.bottom {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1.96upx;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: rgb(220, 220, 220);
	  }
	  .mui-ellipsis {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	.searchContainer {
		width: 100%;
		height: 108upx;
		background: #f3f4f6;
		padding-top: 19.96upx;
		position: absolute;
		top: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		z-index: 9;
		.inputBox {
			width: 71%;
			height: 67.96upx;
			background: #FFFFFF;
			border-radius: 99.98upx;
			margin-left: 4%;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			padding: 0 24upx;

			.textInput {
				width: 85%;
				height: 100%;
				margin: 0;
				border: none;
				padding: 0;
				padding-left: 0;
				font-size: 27.98upx;
				color: #444444;
				float: left;
				margin-left: 19.96upx;
			}

			.close {
				width: 36upx;
				height: 36upx;
				background: #c8c8c8;
				border-radius: 50%;
				position: relative;
				float: right;

				.iconfont {
					color: #FFFFFF;
					position: absolute;
					right: 0;
					left: 0;
					top: -10upx;
					bottom: 0;
					margin: auto;
				}
			}
		}

		.determine {
			width: 17%;
			height: 67.96upx;
			background: #03aef9;
			border-radius: 99.98upx;
			text-align: center;
			line-height: 67.96upx;
			font-size: 27.98upx;
			color: #FFFFFF;
			margin-right: 4%;
		}

		.iconfont {
			color: #c8c8c8;
			font-size: 34upx;
		}
	}
	
	

  .boxUl {
    width:100%;
    padding: 0 4%;
    overflow: hidden;
	/* #ifdef APP-PLUS */
	margin-top: 100upx;
	/* #endif */
	.boxLi {
		width:100%;
		height:192upx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content:space-between;
		align-items:center;
		position: relative;
		.container-image {
			width:84upx;
			height:84upx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.container-info {
		width: 85%;
		height:100%;
		margin-left: 19.96upx;
		.companyName {
			font-size:31.96upx;
			color:#444444;
			margin-top: 25.96upx;
		}
		.mui-ellipsis {
			font-size:27.98upx;
			color: #808080;
			margin:2upx 0;
			display: flex;
			flex-direction: row;
			align-items:center;
			.tagsBox {
				display: flex;
				flex-direction: row;
				align-items:center;
				.line {
					display: inline-block;
					width:1.96upx;
					height:25.96upx;
					background:#dcdcdc;
					margin: 0 9.98upx;
				}
			}
		}
		.distance {
			font-size:27.98upx;
			color: #808080;
			display: flex;
			flex-direction: row;
			justify-content:space-between;
		}
	}
  }
  .container-info p:nth-of-type(2) span:nth-last-child(1) i{
    display: none;
  }
</style>
