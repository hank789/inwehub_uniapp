<template>
	<view class="">

		<view class="mui-content absolute">
			<view v-show="!loading" id="container">
				<view class="container" v-show="edus.length === 0">
					<text class="iconfont icon-zanwushuju"></text>
					<view class="textTips">暂时还没有数据呀～</view>
				</view>

				<view class="mui-table-view mui-table-view-chevron" id="OA_task_1">
					<view v-for="(edu,index) in edus" class="intro  mui-table-view-cell">
						<view class="mui-slider-handle  slider">
							<view class="mui-ellipsis companyText"> {{ edu.school }}</view>
							<view class="titleTips">
								<text class="mui-ellipsis times">{{ edu.begin_time }} 至 {{ edu.end_time }}</text>
								<text class="mui-ellipsis tips times">{{ edu.major }}</text>
								<text class="mui-ellipsis tips">{{ edu.degree }}</text>
							</view>
						</view>
						<text class="iconfont icon-xiugai" @tap.stop.prevent="toRoute('/pages/my/infos/editEdu?id=' + edu.id)"></text>
					</view>
				</view>

				<view class="add box-shadow-3" @tap.stop.prevent="toRoute('/pages/my/infos/editEdu?id=0')">
					<text class="iconfont icon-shuru"></text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import { postRequest } from '@/lib/request'
	import localEvent from "@/lib/localstorage"
	export default {
		data() {
			return {
				edus: [],
				loading: true
			}
		},
		onShow() {
			this.initData()
		},
		methods: {
			toRoute (url) {
				uni.navigateTo({url: url})
			},
			initData() {
				postRequest(`account/edu/list`, {}).then(response => {
					var code = response.code
					if (code !== 1000) {
						uni.showToast({
							icon: 'none',
							title: response.message
						})
						return
					}

					this.edus = response.data
					this.loading = false

					var newEdus = []
					for (var i in this.edus) {
						var info = this.edus[i]
						var id = info.id
						newEdus[id] = info
					}
					localEvent.set('edus', newEdus)
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.mui-content {
		background: #FFFFFF;
	}

	#container {
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}

	.intro {
		width: 100%;
		height: 120upx;
		position: relative;
		padding: 22upx 30upx;

		.slider {
			width: 100%;
			height: 120upx;

			.companyText {
				font-family: "PingFangSC";
				font-size: 27.98upx;
				color: #444444;
				width: 100%;
			}

			.titleTips {
				width: 100%;
				height: 25.96upx;
				line-height: 25.96upx;
				margin-top: 9.98upx;

				.mui-ellipsis {
					display: block;
					float: left;
					max-width: 270upx;
					height: 25.96upx;
					font-size: 25.96upx;
					color: #808080;
				}

				.times {
					border-right: 2upx solid rgb(220, 220, 220);
					padding-right: 9.98upx;
					margin-right: 9.98upx;
				}
			}
		}

		.iconfont {
			position: absolute;
			font-size: 36upx;
			color: rgb(3, 174, 249);
			top: 25.96upx;
			right: 30upx;
		}
	}

	.add {
		width: 127.96upx;
		height: 127.96upx;
		border-radius: 50%;
		background: rgb(3, 174, 249);
		position: absolute;
		left: 41%;
		bottom: 42upx;
		text-align: center;
		line-height: 127.96upx;

		.iconfont {
			font-size: 43.96upx;
			color: #FFFFFF;
		}
	}

	.mui-table-view:after {
		position: absolute;
		right: 30upx;
		// bottom: 0;
		left: 30upx;
		height: 1.96upx;
		content: '';
		background: #f2f2f2;
	}

	.mui-table-view-cell:after {
		position: absolute;
		right: 30upx;
		bottom: 0;
		left: 30upx;
		height: 1.96upx;
		content: '';
		background: #f2f2f2;
	}

	.box-shadow-3 {
		-webkit-box-shadow: 0 0 9.98upx rgba(3, 174, 249, .8);
		-moz-box-shadow: 0 0 9.98upx rgba(3, 174, 249, .8);
		box-shadow: 0 0 9.98upx rgba(3, 174, 249, .8);
	}

	.container {
		position: absolute;
		top: 40%;
		left: 36%;

		.iconfont {
			font-size: 120upx;
			margin-left: 45.98upx;
			margin-bottom: 15.98upx;
		}

		.textTips {
			font-family: "PingFangSC";
			font-size: 24upx;
			color: #c8c8c8;
		}
	}
</style>
