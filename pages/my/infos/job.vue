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
					<text class="componyName textTips" v-if="infoIndustryTagsNames">{{infoIndustryTagsNames}}</text>
					<text class="emptyFields textTips" v-else>请选择</text>
					<text class="iconfont icon-jinru"></text>
				</view>

				<view class="inputRow" @tap.stop.prevent="initDate(1)">
					<view class="title">开始时间</view>
					<text class="componyName textTips" v-text="job.begin_time" v-if="job.begin_time">{{infoIndustryTagsNames}}</text>
					<text class="emptyFields textTips" v-else>请选择</text>
					<text class="iconfont icon-jinru"></text>
				</view>

				<view class="inputRow" @tap.stop.prevent="initDate(2)">
					<view class="title">结束时间</view>
					<text class="componyName textTips" v-if="job.end_time" v-text="job.end_time"></text>
					<text class="emptyFields textTips" v-else>请选择</text>
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
			<tags-list :tag_type="3" :selected="job.industry_tags" :back_id="page_industry_tags_id" :object_type="object_type"
			 v-on:selectedIndustryTags="selectedIndustryTags"></tags-list>
		</view>
	</view>
</template>

<script>
	import {
		getUserInfo,
		getLocalUserInfo
	} from '@/lib/user'
  import { onceSave, onceGet } from '@/lib/cache'
	import tagsList from '@/components/iw-tags-list/tags-list'
	const currentUser = getLocalUserInfo()
	export default {
		components: {
			tagsList
		},
		data() {
			return {
				showTagsList: false,
				user_id: currentUser.user_id,
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
				buttonSaveDisabled: false
			}
		},
		onLoad(option) {
			console.log(option)
			if (option.id) {
				this.type = option.id
			}
			// this.getCompany()
		},
		methods: {
			toselectcompany() {
				onceSave(this)
				uni.navigateTo({
					url: '/pages/my/selectCompany?from=job' + this.type
				})
			},
			getCompany() {
				//     选择公司
				// var placeholder = localEvent.getLocalItem('job' + this.type + '_company' + this.user_id)
				if (placeholder.length) {
					this.job.company = placeholder
				}
			},
			fixSelect() {
				this.showTagsList = !this.showTagsList
			},
			submit() {
				if (!this.job.company) {
					window.mui.toast('公司名称不能为空')
					return
				}

				if (!this.job.title) {
					window.mui.toast('公司职位不能为空')
					return
				}

				if (this.job.industry_tags.length === 0) {
					window.mui.toast('行业领域不能为空')
					return
				}

				this.job.product_tags = ['1']
				if (!this.job.begin_time) {
					window.mui.toast('开始时间不能为空')
					return
				}

				if (!this.job.end_time) {
					window.mui.toast('结束时间不能为空')
					return
				}

				if (this.job.end_time < this.job.begin_time) {
					window.mui.alert('开始时间需早于结束时间')
					return
				}

				var url = ''
				if (this.id) {
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

					var code = response.data.code

					if (code !== 1000) {
						window.mui.alert(response.data.message)
						return
					}

					window.mui.toast('操作成功')
					//   操作成删除保存的公司
					localEvent.clearLocalItem('job' + this.type + '_company' + this.user_id)
					this.bak = ''
					if (!this.id) this.clearData()
					window.mui.back()
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

			.iconfont {
				position: absolute;
				right: 32upx;
				color: #bbb;
				font-size: 26upx;
				top: 20upx;
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
