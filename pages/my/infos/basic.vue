<template>
	<view class="content">
		<view class="">
			<view class="secrecy">(真实姓名/性别/地址/联系方式/生日) 平台将做保密处理。</view>

			<view class="muiTableView mui-table-view-chevron">
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/infos/basicName')" class="mui-navigate-right iconfont">平台昵称<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.name ? user.info.name : '必填'
            }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/infos/realName')" class="mui-navigate-right iconfont">真实姓名<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.realname ? user.info.realname : '必填'
            }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<view class="mui-navigate-right iconfont pickerBox">用户性别
						<view class="uni-list-cell-db">
							<picker mode="selector" :value="user.info.gender" :range="selectSex" @change="bindSex">
								<view class="uni-input">{{ selectSex[user.info.gender] ? selectSex[user.info.gender] : '请选择' }}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/selectCompany?from=infobasic')" class="mui-navigate-right iconfont">当前公司<text
						 class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.company ? user.info.company : '必填'
            }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/infos/position')" class="mui-navigate-right iconfont">当前职位<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.title ? user.info.title : '必填'}}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text href="#page_industry_tags" @tap="changeIndustryTagsOwner('user')" class="mui-navigate-right iconfont">行业领域<text
						 class="mui-pull-right account-setting-field mui-ellipsis">{{ userIndustryTagsNames ? userIndustryTagsNames : '可多选'
            }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="selectWorkerCity" class="mui-navigate-right iconfont">工作地区<text class="mui-pull-right account-setting-field mui-ellipsis">{{ work_city !== ' ' ? work_city : '请选择' }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/infos/textddress')" class="mui-navigate-right iconfont">详细地址<text
						 class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.address_detail ? user.info.address_detail : '必填'}}</text></text>
				</view>
				<view class="mui-table-view-cell" @tap.stop.prevent="$router.pushPlus('/wechat/bindPhone')">
					<text class="mui-navigate-right iconfont">联系手机<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.mobile ? user.info.mobile : '必填'
            }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/infos/email')" class="mui-navigate-right iconfont">电子邮箱<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.email ? user.info.email : '必填'}}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<view class="mui-navigate-right iconfont pickerBox">出生日期
						<!--  @tap.stop.prevent="initBirthday" -->
						<view class="uni-list-cell-db">
							<picker mode="date" :value="user.info.birthday" start="1950" end="2019" @change="bindDateChange">
								<view class="uni-input">{{user.info.birthday ? user.info.birthday : '请选择'}}</view>
							</picker>
						</view>
						<!--@tap.stop.prevent="showPicker" <text class="mui-pull-right account-setting-field mui-ellipsis">{{user.info.birthday ? user.info.birthday : '请选择'}}</text> -->
					</view>
				</view>
				<view class="mui-table-view-cell" @tap.stop.prevent="showMulLinkageTwoPicker">
					<view class="mui-navigate-right iconfont">家乡地区
						<text class="mui-pull-right account-setting-field mui-ellipsis">{{ home_city !== ' ' ? home_city : '请选择' }}</text>
					</view>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/infos/description')" class="mui-navigate-right iconfont">个人签名<text
						 class="mui-pull-right account-setting-field mui-ellipsis">{{user.info.description ? user.info.description : '请填写'}}</text></text>
				</view>
			</view>

		</view>
		<view>
			<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
			 @onConfirm="onConfirm" :pickerValueArray="pickerValueArray"></mpvue-picker>
		</view>
		<view>
			<mpvue-picker :themeColor="themeColor" ref="workMpvuePicker" :mode="mode" :deepLength="deepLength"
			 :pickerValueDefault="pickerValueDefault" @onConfirm="onWorkConfirm"  :pickerValueArray="pickerValueArray"></mpvue-picker>
		</view>

		<view class="mui-modal mui-pageSub" v-if="showTagsList">
			<tags-list :tag_type="3" :showTags="showTagsList" :selected="newItem.industry_tags" :back_id="page_industry_tags_id"
			 :object_type="object_type" v-on:selectedIndustryTags="selectedIndustryTags"></tags-list>
		</view>
	</view>
</template>

<script>
	import { getUserInfo, getLocalUserInfo, getAndUpdateUserInfo } from '@/lib/user'
	import { postRequest } from '@/lib/request'
	import mpvuePicker from 'mpvue-picker';
	import cityData from '@/lib/city.data.js';
	import tagsList from '@/components/iw-tags-list/tags-list'
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				user: {
					info: {
						name: '',
						gender: '',
						company: '',
						title: '',
						province: '',
						city: '',
						hometown_city: '',
						hometown_province: '',
						address_detail: '',
						email: '',
						birthday: '',
						description: '',
						realname: '',
						industry_tags: []
					},
					jobs: [],
					edus: [],
					projects: [],
					trains: []
				},

				newItem: {
					'begin_time': '',
					'end_time': '',
					'description': '',
					'degree': '',
					'certificate': '',
					'agency': '',
					'get_time': '',
					'project_name': '',
					'customer_name': '',
					'industry_tags': [],
					'product_tags': []
				},
				userInfoBmp: '',
				newItemChange: '',
				loading: false,
				cityPicker: null,
				muiView: {},
				descMaxLength: 2000,
				page_industry_tags_id: 'page_industry_tags',
				page_product_tags_id: 'page_product_tags',
				work_city: '',
				home_city: '',
				object_type: 'user',
				selectSex: ['男', '女'],
				date: currentDate,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '',
				mode: 'multiLinkageSelector',
				deepLength: 2,
				pickerValueDefault: [0, 0],
				pickerValueArray: cityData,
				showTagsList: false,
			}
		},
		components: {
			mpvuePicker,
			tagsList
		},
		computed: {
			userIndustryTagsNames() {
				if (this.user.info.industry_tags) {
					var newValue = []
					for (var i in this.user.info.industry_tags) {
						newValue.push(this.user.info.industry_tags[i].text)
					}
					return newValue.join()
				} else {
					return ''
				}
			},

			userIndustryTagsCodes() {
				var newValue = []
				for (var i in this.user.info.industry_tags) {
					if (typeof(this.user.info.industry_tags[i]) === 'object') {
						newValue.push(this.user.info.industry_tags[i].value)
					} else {
						newValue.push(this.user.info.industry_tags[i])
					}
				}
				return newValue
			},
			infoIndustryTagsNames() {
				if (this.newItem.industry_tags && this.newItem.industry_tags.length) {
					return this.newItem.industry_tags.join()
				} else {
					return ''
				}
			}
		},

		onShow() {
			this.getUserInfo()
			this.getDate()
		},
		methods: {
			selectedIndustryTags(object) {
				let tags = object.iselected
				let objectType = object.object_type
				switch (objectType) {
					case 'user':
						this.user.info.industry_tags = tags
						this.userInfoBmp = ''
						this.submitInfo()
						break
					default:
						this.newItem.industry_tags = tags
						break
				}
			},
			fixSelect() {
				this.showTagsList = !this.showTagsList
			},
			changeIndustryTagsOwner(owner) {
				this.fixSelect()
				this.object_type = owner
				if (owner === 'user') {
					this.newItem.industry_tags = this.user.info.industry_tags
				}
			},
			showMulLinkageTwoPicker() {
				this.$refs.mpvuePicker.show()
			},
			selectWorkerCity() {
				this.$refs.workMpvuePicker.show()
			},
			onWorkConfirm(e) {
				this.user.info.city = e.value[1]
				this.user.info.province = e.value[0]
				this.work_city = e.label
				this.submitInfo()
			},
			onConfirm(e) {
				this.user.info.hometown_province = e.value[0]
				this.user.info.hometown_city = e.value[1]
				this.home_city = e.label
				this.submitInfo()
			},
			bindDateChange(e) {
				this.user.info.birthday = e.target.value
				this.submitInfo()
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindSex(e) {
				let index = e.detail.value
				this.user.info.gender = index
				this.submitInfo()
			},
			toRoute(url) {
				uni.navigateTo({
					url: url
				})
			},
			getUserInfo() {
				getAndUpdateUserInfo((user) => {
					this.user = user
					this.work_city = user.info.province.name + ' ' + user.info.city.name
					this.home_city = user.info.hometown_province.name + ' ' + user.info.hometown_city.name
				})
			},
			submitInfo: function(type) {
				switch (type) {
					case 'name':
						if (!this.user.info.name) {
							uni.showToast({
								icon: 'none',
								title: '请填写平台昵称'
							})
							return false
						}
						break
					case 'realname':
						if (!this.user.info.realname) {
							uni.showToast({
								icon: 'none',
								title: '请填写真实姓名'
							})
							return false
						}
						break
					case 'company':
						if (!this.user.info.company) {
							uni.showToast({
								icon: 'none',
								title: '请填写公司名称'
							})
							return false
						}
						break
					case 'title':
						if (!this.user.info.title) {
							uni.showToast({
								icon: 'none',
								title: '请填写当前职位'
							})
							return false
						}
						break
					case 'address_detail':
						if (!this.user.info.address_detail) {
							uni.showToast({
								icon: 'none',
								title: '请填写详细地址'
							})
							return false
						}
						break
					case 'email':
						if (!this.user.info.email) {
							uni.showToast({
								icon: 'none',
								title: '请填写电子邮箱'
							})
							return false
						}
						var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
						if (!re.test(this.user.info.email)) {
							uni.showToast({
								icon: 'none',
								title: '电子邮箱格式错误'
							})
							return false
						}
						break
					case 'description':
						if (!this.user.info.description) {
							uni.showToast({
								icon: 'none',
								title: '请填写个人签名'
							})
							return false
						}
						break
				}

				var json = JSON.stringify(this.user.info)
				var data = JSON.parse(json)
				if (typeof(data.city) === 'object') {
					data.city = data.city.key
				}
				if (typeof(data.province) === 'object') {
					data.province = data.province.key
				}

				if (typeof(data.hometown_city) === 'object') {
					data.hometown_city = data.hometown_city.key
				}
				if (typeof(data.hometown_province) === 'object') {
					data.hometown_province = data.hometown_province.key
				}

				data.industry_tags = this.userIndustryTagsCodes

				postRequest(`profile/update`, data).then(res => {
					if (res !== false) {
						uni.showToast({
							title: '保存成功'
						})
						this.userInfoBmp = ''
						this.getUserInfo()
					}
				})
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
	.secrecy {
		height: 67.96upx;
		line-height: 67.96upx;
		color: #B4B4B6;
		font-size: 24upx;
		background: #F3F4F6;
		padding-left: 31.96upx;
	}

	.muiTableView {
		position: relative;
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
		list-style: none;
		background-color: #fff;
	}
	.mui-navigate-right {
		color: #999;
	}

	.mui-table-view-cell .mui-navigate-right iconfont,
	.mui-table-view-cell .mui-navigate {
		color: #999;
	}

	.pickerBox {
		position: relative;

		&.iconfont:after {
			right: 0upx;
		}

		.uni-list-cell-db {
			width: 50%;
			position: absolute;
			top: -10upx;
			right: 24upx;
			color: #3f3f3f;
			text-align: right;

			.uni-input {
				font-size: 32upx;
			}
		}
	}


	.mui-table-view-cell>.mui-navigate-right iconfont:not(.mui-btn) {
		position: relative;
		display: block;
		overflow: hidden;
		margin: -11upx -15upx;
		padding: 0 16upx;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 32upx;
	}

	.account-setting-field {
		position: absolute;
		text-align: right;
		width: 399.98upx;
		right: 79.96upx;
		height: 63.98upx;
		color: #3f3f3f;
		padding-right: 0;
	}

	.mui-pull-right {
		float: right;
	}

	.mui-ellipsis {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.mui-table-view-cell {
		position: relative;
		overflow: hidden;
		padding: 20.5upx 30upx;
		-webkit-touch-callout: none;
	}

	.mui-table-view-cell:after {
		-webkit-transform: scaleY(1);
		transform: scaleY(1);
		background-color: #f2f2f2;
	}

	.mui-table-view-cell:after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 2upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.mui-navigate-right:after,
	.mui-push-right:after {
		font-size: 28upx;
		right: 30upx;
		content: '\e6db';
	}

	.mui-navigate-right:after,
	.mui-push-left:after,
	.mui-push-right:after {
		line-height: 2;
		position: absolute;
		// top: 50%;
		display: inline-block;
		color: #bbb;
	}
</style>
