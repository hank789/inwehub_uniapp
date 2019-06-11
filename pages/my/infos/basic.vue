<template>
	<view class="">
		<view class="mui-content">
			<view class="secrecy">(真实姓名/性别/地址/联系方式/生日) 平台将做保密处理。</view>

			<view class="muiTableView mui-table-view-chevron">
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/infos/basicName')" class="mui-navigate-right">平台昵称<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.name ? user.info.name : '必填'
            }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/infos/realName')" class="mui-navigate-right">真实姓名<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.realname ? user.info.realname : '必填'
            }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="selectSex" class="mui-navigate-right">用户性别<text class="mui-pull-right account-setting-field mui-ellipsis">{{ genderName ? genderName : '请选择'}}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="$router.push('/selectCompany?from=infobasic')" class="mui-navigate-right">当前公司<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.company ? user.info.company : '必填'
            }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/infos/position')" class="mui-navigate-right">当前职位<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.title ? user.info.title : '必填'}}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text href="#page_industry_tags" @tap="changeIndustryTagsOwner('user')" class="mui-navigate-right">行业领域<text class="mui-pull-right account-setting-field mui-ellipsis">{{ userIndustryTagsNames ? userIndustryTagsNames : '可多选'
            }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="selectWorkerCity(true)" class="mui-navigate-right">工作地区<text class="mui-pull-right account-setting-field mui-ellipsis">{{ work_city !== ' ' ? work_city : '请选择' }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="$router.push('/my/info/basic/textddress')" class="mui-navigate-right">详细地址<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.address_detail ? user.info.address_detail : '必填'}}</text></text>
				</view>
				<view class="mui-table-view-cell" @tap.stop.prevent="$router.pushPlus('/wechat/bindPhone')">
					<text class="mui-navigate-right mui-navigate">联系手机<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.mobile ? user.info.mobile : '必填'
            }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/infos/email')" class="mui-navigate-right">电子邮箱<text class="mui-pull-right account-setting-field mui-ellipsis">{{ user.info.email ? user.info.email : '必填'}}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="initBirthday" class="mui-navigate-right">出生日期<text class="mui-pull-right account-setting-field mui-ellipsis">{{user.info.birthday ? user.info.birthday : '请选择'}}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text class="mui-navigate-right" @tap.stop.prevent="selectHomeCity">家乡地区<text class="mui-pull-right account-setting-field mui-ellipsis">{{ home_city !== ' ' ? home_city : '请选择' }}</text></text>
				</view>
				<view class="mui-table-view-cell">
					<text @tap.stop.prevent="toRoute('/pages/my/infos/description')" class="mui-navigate-right">个人签名<text class="mui-pull-right account-setting-field mui-ellipsis">{{user.info.description ? user.info.description : '请填写'}}</text></text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import { getUserInfo, getLocalUserInfo } from '@/lib/user'
	export default {
		data() {
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
				gender_object: [
					'保密',
					'男',
					'女'
				],
				loading: false,
				cityPicker: null,
				muiView: {},
				descMaxLength: 2000,
				page_industry_tags_id: 'page_industry_tags',
				page_product_tags_id: 'page_product_tags',
				work_city: '',
				home_city: '',
				object_type: 'user'
			}
		},
		computed: {
			genderName: function () {
				return this.gender_object[this.user.info.gender]
			},
			
			userIndustryTagsNames () {
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
		},
		
		onLoad() {
			this.getUserInfo()
		},
		methods: {
			toRoute (url) {
				uni.navigateTo({url: url})
			},
			getUserInfo() {
				let getUserInfo = getLocalUserInfo()
				this.user = getUserInfo
				// this.work_city = getUserInfo.info.province.name + ' ' + getUserInfo.info.city.name
				// this.home_city = getUserInfo.info.hometown_province.name + ' ' + getUserInfo.info.hometown_city.name
			}
		}
	}
</script>

<style lang="less">
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

	.mui-table-view-cell .mui-navigate-right,
	.mui-table-view-cell .mui-navigate {
		color: #999;
	}

	.mui-table-view-cell>.mui-navigate-right:not(.mui-btn) {
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
	.mui-navigate-right:after, .mui-push-right:after {
		right: 30upx;
		content: '\E6DB';
	}
.mui-navigate-right:after, .mui-push-left:after, .mui-push-right:after {
    font-family: Muiicons;
    font-size: inherit;
    line-height: 2;
    position: absolute;
    top: 50%;
    display: inline-block;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    text-decoration: none;
    color: #bbb;
    -webkit-font-smoothing: antialiased;
}
</style>
