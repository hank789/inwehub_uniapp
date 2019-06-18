<template>

	<view class="">
		<view class="mui-content">

			<view class="tableBox">
				<view class="inputRow">
					<view class="title">培训/认证名称</view>
					<input class="inputBox" type="text" v-model.trim="train.certificate" placeholder="必填" readonly>
				</view>
				<view class="inputRow">
					<view class="title">培训/认证机构</view>
					<input class="inputBox" type="text" v-model.trim="train.agency" placeholder="必填">
				</view>

				<view class="inputRow">
					<view class="title">培训/认证时间</view>
					<view class="uni-list-cell-db">
						<picker mode="multiSelector" :value="valueIndex" :range="array" @change="bindDateChange">
							<view class="uni-input">{{train.get_time ? train.get_time: '请选择' }}</view>
						</picker>
					</view>
					<text class="iconfont icon-jinru"></text>
				</view>

			</view>
			<view class="accountTitle">
				<view class="title"> 培训和认证经历详情描述 </view>
				<textarea class="description" v-model.trim="description" placeholder="请详细填写该培训经历的详细信息"></textarea>
			</view>
			<view class="options">
				<text class="close common" @tap.stop.prevent="muiViewBack">取消</text>
				<text class="submit common" @tap.stop.prevent="submit" :disabled="buttonSaveDisabled">保存</text>
			</view>

		</view>
	</view>

</template>

<script>
	import { getUserInfo, getLocalUserInfo } from '@/lib/user'
	import { postRequest } from '@/lib/request'
	import { onceSave, onceGet } from '@/lib/cache'
	import localEvent from "@/lib/localstorage"
	import ACCOUNT_API from "@/lib/account"
	import ui from "@/lib/ui"
	const currentUser = getLocalUserInfo()
	export default {
		data() {
			return {
				id: null,
				bak: '',
				object_type: '',
				train: {
					certificate: '',
					agency: '',
					get_time: '',
					description: ''
				},
				initTrain: {
					certificate: '',
					agency: '',
					get_time: '',
					description: ''
				},
				description: '',
				descMaxLength: 2000,
				buttonSaveDisabled: false,
				valueIndex: [],
				array: [],
				month: ['请选择', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
			}
		},
		onShow() {},
		onLoad(option) {
			console.log(option)
			this.id = option.id
			this.getDetail()
			this.getDateList()
		},
		methods: {
			muiViewBack: function() {
				var newItemChange = JSON.stringify(this.job)
				if (this.bak !== '' && newItemChange !== this.bak) {
					var btnArray = ['取消', '确定']
					ui.confirm('您还未保存，确定退出么? ', '', btnArray, (e) => {
						if (e.index === 1) {
							this.clearData()
							uni.navigateBack({
								delta: 1
							});
						} else {
							return false
						}
					})

				} else {
					uni.navigateBack({
						delta: 1
					});
				}
			},
			submit() {
				if (!this.train.certificate) {
					uni.showToast({
						icon: 'none',
						title: '培训/认证名称不能为空'
					})
					return
				}

				if (!this.train.agency) {
					uni.showToast({
						icon: 'none',
						title: '培训/认证机构不能为空'
					})
					return
				}

				if (!this.train.get_time) {
					uni.showToast({
						icon: 'none',
						title: '培训/认证时间不能为空'
					})
					return
				}

				var url = ''
				if (this.id !== '0') {
					url = ACCOUNT_API.UPDATE_ACCOUNT_TRAIN
				} else {
					url = ACCOUNT_API.ADD_ACCOUNT_TRAIN
				}

				var data = this.train

				if (this.id) {
					data.id = this.id
				}

				if (this.buttonSaveDisabled) return
				this.buttonSaveDisabled = true

				data.description = this.description

				postRequest(url, data).then(response => {
					this.buttonSaveDisabled = false
					var code = response.code

					if (code !== 1000) {
						uni.showToast({
							icon: 'none',
							title: response.message
						})
						return
					}
					uni.showToast({
						icon: 'none',
						title: '操作成功'
					})
					this.bak = ''
					if (!this.id) this.clearData()
					uni.navigateBack({
						delta: 1
					})
				})
			},
			getDetail() {
				if (this.id !== '0') {
					var trains = localEvent.get('trains')

					this.train = trains[this.id]
					this.description = this.train.description
					this.bak = JSON.stringify(this.train)
				} else {
					this.clearData()
				}
			},
			clearData: function() {
				this.train = this.initTrain
				this.description = ''
				this.bak = ''
			},

			getDateList() {
				let currentDate = new Date()
				var yArray = [
					'请选择'
				];
				var yBegin = 1990;
				var yEnd = currentDate.getFullYear();
				for (var y = yBegin; y <= yEnd; y++) {
					yArray.push(y);
				}

				this.array = [yArray, this.month]
			},

			bindDateChange: function(e) {
				let index = e.detail.value
				this.valueIndex = index
				if (!index[0] || !index[1]) {
					uni.showToast({
						icon: 'none',
						title: '请选择',
						duration: 2000
					});
					return false
				}
				this.train.get_time = this.array[0][index[0]] + '-' + this.array[1][index[1]]
			},
		}
	}
</script>

<style scoped lang="less">
	.tableBox {
		.inputRow {
			padding: 18upx 0;
			overflow: hidden;
			position: relative;

			&:after {
				position: absolute;
				right: 30upx;
				bottom: 0;
				left: 30upx;
				height: 2upx;
				content: '';
				z-index: 11;
				transform: scaleY(.5);
				background-color: #dcdcdc;
			}

			.title {
				float: left;
				color: #999;
				font-size: 28upx;
				margin-left: 30upx;
			}

			.inputBox {
				width: 448upx;
				height: 62upx;
				line-height: 62upx;
				border: none;
				font-size: 28upx;
				color: #3f3f3f;
				position: absolute;
				right: 80upx;
				z-index: 9;
				text-align: right;
				padding: 0 0upx;
			}

			.textTips {
				position: absolute;
				text-align: right;
				width: 400upx;
				right: 80upx;
				height: 64upx;
				color: #3f3f3f;
				padding-right: 0;
			}

			.mui-ellipsis {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.iconfont {
				position: absolute;
				right: 32upx;
				color: #bbb;
				font-size: 26upx;
				top: 20upx;
			}

			.uni-list-cell-db {
				text-align: right;

				.uni-input {
					color: #3f3f3f;
					margin-top: -14upx;
					margin-right: 58upx;
				}
			}
		}
	}

	.accountTitle {
		padding: 18upx 30upx;

		.title {
			color: #999;
			font-size: 28upx;
		}

		.description {
			width: 100%;
			padding: 20upx;
			border: 2upx solid #bbb;
			border-radius: 8upx;
		}
	}

	.options {
		width: 100%;
		height: 81.98upx;
		margin-top: 39.98upx;
		padding: 0 30upx;

		.common {
			width: 229.96upx;
			height: 75.98upx;
			font-size: 31.96upx;
			text-align: center;
			line-height: 75.98upx;
			border-radius: 99.98upx;
		}

		.close {
			float: left;
			background: #ececee;
			color: #03aef9;
		}

		.submit {
			float: right;
			background: #03aef9;
			color: #FFFFFF;
		}
	}
</style>
