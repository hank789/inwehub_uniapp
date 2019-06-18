<template>
	<view class="">
		<view class="mui-content">

			<view class="tableBox">
				<view class="inputRow">
					<view class="title">公司</view>
					<input class="inputBox" type="text" v-model.trim="job.company" placeholder="必填" @tap.stop.prevent="toselectcompany"
					 readonly>
				</view>
				<view class="inputRow">
					<view class="title">职位</view>
					<input class="inputBox" type="text" v-model.trim="job.title" placeholder="必填">
				</view>
				<view class="inputRow" @tap="fixSelect">
					<view class="title">行业领域</view>
					<text class="componyName textTips mui-ellipsis" v-if="infoIndustryTagsNames">{{infoIndustryTagsNames}}</text>
					<text class="emptyFields textTips" v-else>请选择</text>
					<text class="iconfont icon-jinru"></text>
				</view>

				<view class="inputRow">
					<view class="title">开始时间</view>
					<view class="uni-list-cell-db">
						<picker mode="multiSelector" :value="valueIndex" :range="array" @change="bindDateChange">
							<view class="uni-input">{{job.begin_time ? job.begin_time: '请选择' }}</view>
						</picker>
					</view>
					<text class="iconfont icon-jinru"></text>
				</view>

				<view class="inputRow">
					<view class="title">结束时间</view>
					<view class="uni-list-cell-db">
						<picker mode="multiSelector" :value="valueIndex" :range="endArray" @change="bindEndDateChange">
							<view class="uni-input">{{job.end_time ? job.end_time : '请选择'}}</view>
						</picker>
					</view>
					<!-- <text class="componyName textTips" v-if="job.end_time" v-text="job.end_time"></text>
					<text class="emptyFields textTips" v-else>请选择</text> -->
					<text class="iconfont icon-jinru"></text>
				</view>

			</view>
			<view class="accountTitle">
				<view class="title"> 工作经历详情描述 </view>
				<textarea class="description" v-model.trim="description" placeholder="请详细填写该工作经历的详细信息"></textarea>
			</view>
			<view class="options">
				<text class="close common" @tap.stop.prevent="muiViewBack">取消</text>
				<text class="submit common" @tap.stop.prevent="submit" :disabled="buttonSaveDisabled">保存</text>
			</view>

		</view>
		<view class="mui-modal mui-pageSub" v-if="showTagsList">
			<tags-list :tag_type="3" :showTags="showTagsList" :selected="job.industry_tags" :back_id="page_industry_tags_id"
			 :object_type="object_type" v-on:selectedIndustryTags="selectedIndustryTags"></tags-list>
		</view>
	</view>
</template>

<script>
	import {
		getUserInfo,
		getLocalUserInfo
	} from '@/lib/user'
	import {
		postRequest
	} from '@/lib/request'
	import {
		onceSave,
		onceGet
	} from '@/lib/cache'
	import tagsList from '@/components/iw-tags-list/tags-list'

	import localEvent from "@/lib/localstorage"
	import ACCOUNT_API from "@/lib/account"
	import ui from "@/lib/ui"
	const currentUser = getLocalUserInfo()
	export default {
		components: {
			tagsList
		},
		data() {
			return {
				array:[],
				index:0,
				showTagsList: false,
				user_id: currentUser.info.id,
				type: '',
				id: null,
				bak: '',
				object_type: '',
				job: {
					company: '',
					title: '',
					begin_time: '',
					end_time: '',
					description: '',
					industry_tags: '',
					product_tags: ''
				},
				initJob: {
					company: '',
					title: '',
					begin_time: '',
					end_time: '',
					description: '',
					industry_tags: '',
					product_tags: ''
				},
				description: '',
				page_industry_tags_id: 'page_industry_tags',
				page_product_tags_id: 'page_product_tags',
				descMaxLength: 2000,
				buttonSaveDisabled: false,
				month: ['请选择', '01','02','03','04','05','06','07','08','09','10','11','12'],
				endMonth: [],
				timeVaule: '',
				valueIndex: [],
				endArray: []
			}
		},
		onShow() {
			this.getCompany()
		},
		onLoad(option) {
			this.type = option.id
			this.id = option.id
			this.getDetail()
			this.getCompany()
			this.getDateList()
			this.getDate()
		},
		methods: {
			getDate() {
				this.endMonth = ['请选择', '01','02','03','04','05','06','07','08','09','10','11','12','至今']
				let currentDate = new Date()
				var yArray = [
					'请选择'
				];
				var yBegin = 1990;
				var yEnd = currentDate.getFullYear();
				for (var y = yBegin; y <= yEnd; y++) {
					yArray.push(y);
				}
				yArray.push('至今')
				
				this.endArray = [yArray, this.endMonth]
			},

			bindEndDateChange: function(e) {
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
				this.job.end_time = this.endArray[0][index[0]] + '-' + this.endArray[1][index[1]]
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
				this.job.begin_time = this.array[0][index[0]] + '-' + this.array[1][index[1]]
			},
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
			getDetail() {
				if (this.type !== '0') {
					var jobs = localEvent.get('jobs')
					this.job = jobs[this.type]
					this.description = this.job.description
					this.bak = JSON.stringify(this.job)
				} else {
					this.clearData()
				}
			},
			clearData() {
				this.job = this.initJob
				this.description = ''
				this.bak = ''
			},
			toselectcompany() {
				onceSave(this)
				uni.navigateTo({
					url: '/pages/my/selectCompany?from=job' + this.type
				})
			},
			
			selectedIndustryTags (tags, objectType) {
				this.job.industry_tags = tags
			},
			selectedProductTags (tags, objectType) {
				this.job.product_tags = tags
			},
			getCompany() {
				//     选择公司
				var placeholder = localEvent.get('job' + this.type + '_company' + this.user_id)
				if (placeholder.length) {
					this.job.company = placeholder
				}
			},
			fixSelect() {
				this.showTagsList = !this.showTagsList
			},
			submit() {
				if (!this.job.company) {
					uni.showToast({
						icon: 'none',
						title: '公司名称不能为空'
					})
					return
				}

				if (!this.job.title) {
					uni.showToast({
						icon: 'none',
						title: '公司职位不能为空'
					})
					return
				}

				if (this.job.industry_tags.length === 0) {
					uni.showToast({
						icon: 'none',
						title: '行业领域不能为空'
					})
					return
				}

				this.job.product_tags = ['1']
				if (!this.job.begin_time) {
					uni.showToast({
						icon: 'none',
						title: '开始时间不能为空'
					})
					return
				}

				if (!this.job.end_time) {
					uni.showToast({
						icon: 'none',
						title: '结束时间不能为空'
					})
					return
				}

				if (this.job.end_time < this.job.begin_time) {
					uni.showToast({
						icon: 'none',
						title: '开始时间需早于结束时间'
					})
					return
				}

				var url = ''
				console.log(this.id)
				if (this.id !== '0') {
					url = ACCOUNT_API.UPDATE_ACCOUNT_JOB
				} else {
					url = ACCOUNT_API.ADD_ACCOUNT_JOB
				}

				var json = JSON.stringify(this.job)
				var data = JSON.parse(json)

				if (this.id) {
					data.id = this.id
				}

				if (this.buttonSaveDisabled) return
				this.buttonSaveDisabled = true

				data.industry_tags = this.userIndustryTagsCodes

				data.description = this.description

				postRequest(url, data).then(response => {
					this.buttonSaveDisabled = false

					var code = response.code

					if (code !== 1000) {
						uni.showToast({
							title: response.message
						})
						// window.mui.alert(response.data.message)
						return
					}
					uni.showToast({
						title: '操作成功'
					})

					// window.mui.toast('操作成功')
					//   操作成删除保存的公司
					localEvent.remove('job' + this.type + '_company' + this.user_id)
					this.bak = ''
					if (!this.id) this.clearData()
					// window.mui.back()
					uni.navigateBack({
						delta: 1
					});
				})
			}
		},

		computed: {
			infoIndustryTagsNames() {
				if (this.job.industry_tags) {
					var newValue = []
					for (var i in this.job.industry_tags) {
						newValue.push(this.job.industry_tags[i].text)
					}
					return newValue.join()
				} else {
					return ''
				}
			},
			userIndustryTagsCodes() {
				var newValue = []
				for (var i in this.job.industry_tags) {
					if (typeof(this.job.industry_tags[i]) === 'object') {
						newValue.push(this.job.industry_tags[i].value)
					} else {
						newValue.push(this.job.industry_tags[i])
					}
				}
				return newValue
			},
			infoProductTagsNames() {
				if (this.job.product_tags && this.job.product_tags.length) {
					return this.job.product_tags.join()
				} else {
					return ''
				}
			}
		},
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
				right: 32upx;
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
