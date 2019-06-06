<template>
	<view class="">

		<view class="mui-content" v-show="!loading">
			<view class="cardWrapper">
				<view class="card">
					<view class="header">
						<view class="avatar">
							<view class="avatarInner">
								<image class="avatarImg" :src="resume.info.avatar_url"></image>
								<view class="expert" v-if="resume.info.expert_apply_status =='2'">
									<text class="iconfont icon-zhuanjiabiaozhishixin"></text>
								</view>
							</view>
						</view>
					</view>
					<view class="detail">
						<view class="realname">
							<text>{{ resume.info.name }}</text>
						</view>
						<view class="item" v-if="resume.info.province.name !== '请选择省份'">
							<view class="my-detail">
								<text>
									<text class="iconfont icon-dingwei"></text>{{ resume.info.province.name }} {{ resume.info.city.name }}
								</text>
							</view>
							<view class="my-detail" v-if="resume.info.work_years">
								<text>{{resume.info.work_years}}年工作经验</text>
							</view>
							<view class="my-detail" v-if="resume.info.company && resume.info.title">
								<text>{{resume.info.company}}</text><text class="line-wall"></text><text>{{resume.info.title}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="gray" v-if="resume.info.description"></view>

			<view class="skilled" v-if="resume.info.description">
				<view class="skilledBrief">个人简介 <view class="bot"></view>
				</view>
				<view class="synopsisContent">{{resume.info.description}}</view>
			</view>

			<template v-if="!isLogined">
				<view class="seeMoreWrapper">
					<view class="seeMore" @tap.stop.prevent="$router.pushPlus('/login')">查看所有工作经历</view>
				</view>
				<view class="seeMoreWrapper">
					<view class="seeMore" @tap.stop.prevent="$router.pushPlus('/login')">查看所有项目经历</view>
				</view>
				<view class="seeMoreWrapper">
					<view class="seeMore" @tap.stop.prevent="$router.pushPlus('/login')">查看所有教育经历</view>
				</view>
			</template>
			<template v-else>
				<template v-if="percent < 90 && !isSelf">
					<view class="hTitle">工作经历</view>
					<view class="component-warning">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-zanwushuju"></use>
						</svg>
						<view class="title">您的信息不完整还不能查看哦</view>
						<view class="desc">查看对方经历会留下您的访问记录，完善您的头像、<br>个人资料(90%以上)会让对方更好的认识您！</view>
						<view class="component-button-empty" @tap.stop.prevent="$router.pushPlus('/my/info')"><span>去完善我的简历</span></view>
					</view>
				</template>
				<template v-else>
					<!--工作经历-->
					<view class="hTitle" v-show="(resume.jobs.length) || (resume.info.is_job_info_public)">工作经历</view>
					<view class="list" v-show="(resume.jobs.length) || (resume.info.is_job_info_public)">
						<view class="item" v-for="(job, jobIndex) in resume.jobs" v-show="!(jobIndex >= 3 && !isShowItemJobMore)"
						 :jobIndex="jobIndex">
							<view class="time">{{ job.begin_time }} ~ {{ job.end_time }}</view>
							<view class="company">{{ job.company }}<i class="separate"></i>{{ job.title }}</view>
							<view class="description  hide mui-ellipsis-3" v-show="job.description">{{ job.description }}


							</view>
							<view class="toggle show" @tap.stop.prevent="toggleDeatil" v-show="job.description">查看</view>
						</view>
					</view>
					<view class="seeMoreWrapper" v-show="(!resume.info.is_job_info_public && !this.cuuid) || (resume.jobs.length > 3)">
						<view class="seeMore" @tap.click.prevent="showJobMore($event)">查看所有工作经历</view>
					</view>

					<!--项目经历-->
					<view class="hTitle" v-show="(resume.projects.length) || (resume.info.is_project_info_public)">项目经历</view>
					<view class="list" v-show="(resume.projects.length) || (resume.info.is_project_info_public)">
						<view v-for="(project, projectIndex) in resume.projects" class="item" :projectIndex="projectIndex" v-show="!(projectIndex >= 3 && !isShowProjectMore)">
							<view class="time">{{ project.begin_time }} ~ {{ project.end_time }}</view>
							<view class="company">{{ project.project_name }}<i class="separate"></i>{{ project.title }}</view>
							<view class="others">
								<view class="other">
									<view class="title">【行业领域】</view>
									<view class="content">
										<template v-for="(industry, index) in project.industry_tags">
											{{ industry.text }} ;
										</template>
									</view>
								</view>
								<view class="other">
									<view class="title">【产品类型】</view>
									<view class="content">
										<template v-for="(productTag, index) in project.product_tags">
											{{ productTag.text }} ;
										</template>
									</view>
								</view>
								<view class="other">
									<view class="title">【客户名称】</view>
									<view class="content">{{ project.customer_name }}</view>
								</view>
							</view>
							<view class="description  hide mui-ellipsis-3" v-show="project.description">{{ project.description }}</view>
							<view class="toggle show" @tap.stop.prevent="toggleDeatil" v-show="project.description">查看</view>
						</view>
					</view>
					<view class="seeMoreWrapper" v-show="(!resume.info.is_project_info_public && !this.cuuid) || (resume.projects.length > 3)">
						<view class="seeMore" @tap.click.prevent="showProjectMore($event)">查看所有项目经历</view>
					</view>

					<!--教育经历-->
					<view class="hTitle" v-show="(resume.edus.length) || (resume.info.is_edu_info_public)">教育经历</view>
					<view class="list" v-show="(resume.edus.length) || (resume.info.is_edu_info_public)">
						<view class="item" v-for="(edu, eduIndex) in resume.edus" v-show="!(eduIndex >= 3 && !isShowitemEduMore)"
						 :eduIndex="eduIndex">
							<view class="time">{{ edu.begin_time }} ~ {{ edu.end_time }}</view>
							<view class="company">{{ edu.school }}<i class="separate"></i>{{ edu.degree }}<i class="separate"></i>{{ edu.major }}

							</view>
							<view class="description  hide mui-ellipsis-3" v-show="edu.description">{{ edu.description }}

							</view>
							<view class="toggle show" @tap.stop.prevent="toggleDeatil" v-show="edu.description">查看</view>
						</view>
					</view>
					<view class="seeMoreWrapper" v-show="(!resume.info.is_edu_info_public && !this.cuuid) || (resume.edus.length > 3)">
						<view class="seeMore" @tap.click.prevent="showEduMore($event)">查看所有教育经历</view>
					</view>

					<view class="noPublic" v-show="!loading && (!resume.info.is_edu_info_public || !resume.info.is_job_info_public ||  !resume.info.is_project_info_public) && !isSelf">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-bugongkai"></use>
						</svg>
						<view class="desc">部分信息暂未公开</view>
					</view>
				</template>
			</template>

		</view>

	</view>
</template>

<script>
	import { postRequest } from '@/lib/request'
	import {getLocalUuid} from '@/lib/user.js'
	import { isLogined } from '@/lib/auth'
	export default {
		data() {
			return {
				loading: 1,
				uuid: '',
				cuuid: '',
				resume: {
					groups: [],
					info: {
						uuid: '',
						name: '',
						avatar_url: '',
						feed_count: '',
						article_count: '',
						article_comment_count: '',
						article_upvote_count: '',
						industry_tags: [],
						province: {
							key: '',
							name: ''
						},
						city: {
							key: '',
							name: ''
						}
					},
					edus: [],
					projects: [],
					jobs: []
				},
				isLogined: isLogined(),
				percent: 0
			}
		},
		onLoad() {
			this.getData()
		},
		computed: {
			isSelf() {
				if (getLocalUuid() === this.uuid) {
					return true
				}
				return false
			}
		},
		methods: {
			getData() {
				this.uuid = getLocalUuid()
				// this.cuuid = currentUser.uuid
				// this.percent = currentUser.account_info_complete_percent

				if (!this.uuid) return

				postRequest(`profile/resumeInfo`, {
					uuid: this.uuid
				}).then(response => {
					var code = response.code
					if (code !== 1000) {
						uni.showToast({
							title: response.message
						})
						return
					}
					this.resume = response.data
					this.loading = 0
				})
			},
			
			toggleDeatil (event) {
				var Desc = event.target.previousSibling.previousSibling
				if (/hide/.test(Desc.className)) {
				  Desc.className = Desc.className.replace(' hide', '')
				  Desc.className = Desc.className.replace(' mui-ellipsis-3', '')
				  Desc.className += ' show'

				  event.target.className = 'toggle hide'
				  event.target.innerText = '收起'
				} else {
				  Desc.className = Desc.className.replace(' show', '')
				  Desc.className += ' hide mui-ellipsis-3'

				  event.target.className = 'toggle show'
				  event.target.innerText = '查看'
				}
			},
		  showJobMore (event) {
			if (!this.cuuid) {
			  window.location.href = process.env.API_ROOT + 'wechat/oauth?redirect=/home'
			  return
			}

			this.isShowItemJobMore = true
			event.target.style.display = 'none'
		  },
		}
	}
</script>

<style lang="less">
	.mui-ellipsis-3 {
		display: -webkit-box;
		overflow: hidden;
		white-space: normal !important;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.hTitle {
		margin: 0;
		padding: 21.98upx 0;
		background: #f3f4f6;
		width: 100%;
		font-size: 27.98upx;
		color: #313131;
		text-align: center;
	}
	.bot {
		position: absolute;
		right: 27.98upx;
		bottom: 0;
		left: 27.98upx;
		height: 2upx;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: rgb(220, 220, 220);
	}

	.cardWrapper {
		padding: 0 31.96upx;
		width: 100%;
		background-color: #FFFFFF;

		.card {
			border-radius: 7.96upx;
			width: 100%;
			position: relative;
			padding-bottom: 30upx;
			padding-top: 30upx;

			.header {
				height: 126upx;

				.expert {
					position: absolute;
					right: 0;
					bottom: 0;
					z-index: 10;

					.icon {
						font-size: 48upx;
						color: #FCC816;
						border: 3.98upx solid #FFF;
						border-radius: 50%;
						background: #FFF;
					}
				}

				.avatar {
					position: absolute;
					left: 50%;
					margin-left: -60upx;
					z-index: 9;
					color: #ffffff;
					display: inline-block;
					height: 117.98upx;
					width: 117.98upx;
					font-size: 39.98upx;
					text-align: center;
					border-radius: 50%;
					vertical-align: top;
				}

				.avatar .avatarInner {
					display: -webkit-box;
					display: -webkit-flex;
					display: -ms-flexbox;
					display: flex;
					width: 100%;
					height: 100%;
					position: relative;
					-webkit-box-align: center;
					-webkit-align-items: center;
					-ms-flex-align: center;
					align-items: center;
					-webkit-box-pack: center;
					-webkit-justify-content: center;
					-ms-flex-pack: center;
					justify-content: center;
				}

				.avatar .avatarImg {
					border-radius: 50%;
					width: 100%;
					height: 100%;
					display: block;
				}
			}

			.detail {
				margin-top: 12.98upx;
				text-align: center;

				.realname {
					font-weight: bold;

					span {
						&:nth-of-type(1) {
							position: relative;
							right: -6upx;
							color: #444444;
							font-size: 36upx;
						}
					}

					.icon {
						vertical-align: bottom;
						font-size: 43.96upx;
						color: #3c95f9;
					}
				}

				.item {
					color: #808080;
					font-size: 25.96upx;
					margin: 25.96upx 13.96upx 0upx 13.96upx;

					.icon {
						color: #b4b4b6;
						font-size: 31.96upx;
					}

					.my-detail {
						width: 100%;
						height: 60upx;

						span {
							font-size: 25.96upx;
							color: #444444;

							.icon {
								color: #B4B4B6;
							}
						}

						.line-wall {
							margin: 0 19.96upx;
							background-color: #C8C8C8;
						}
					}
				}
			}
		}
	}

	.skilled {
		padding: 24upx 27.98upx 19.96upx 27.98upx;
		overflow: hidden;
		position: relative;
		background-color: #FFFFFF;

		.skilledBrief {
			.bot {
				left: 0;
				right: 0;
			}

			position: relative;
			color: #808080;
			font-size: 27.98upx;
			padding-bottom: 15.98upx;
			margin-bottom: 24upx;
		}

		.synopsisContent {
			color: #444444;
			font-size: 25.96upx;
			line-height: 49.96upx;
		}
	}

	.seeMoreWrapper {
		background: #fff;
		padding-bottom: 60upx;
		margin-top: -3.98upx;
		z-index: 5;
		position: relative;

		.seeMore {
			font-size: 27.98upx;
			color: #03AEF9;
			text-align: center;
			padding: 18upx 0 15.98upx;
			background: #fff;
			border: 1.96upx solid #dcdcdc;
			border-radius: 7.96upx;
			margin: 0 39.98upx;
		}
	}

	.list {
		background: #fff;
		padding: 0 19.96upx 0 60upx;
		position: relative;

		&:before {
			position: absolute;
			top: 39.98upx;
			left: 39.98upx;
			content: '';
			width: 1.96upx;
			bottom: 24upx;
			background-color: #ececee;
		}

		.itemJobMore,
		.itemProjectMore,
		.itemEduMore {
			display: none;
		}

		.item {
			position: relative;
			padding: 19.96upx 0 19.96upx 9.98upx;

			&:after {
				position: absolute;
				right: 0;
				bottom: 0;
				left: 0;
				height: 1.96upx;
				content: '';
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
				background-color: #dcdcdc;
			}

			&:last-child:after {
				display: none;
			}

			.others {
				color: #b4b4b6;
				font-size: 25.96upx;

				.other {
					display: -webkit-box;
					overflow: hidden;

					.title {
						margin-left: -16upx;
						width: 178upx;
					}

					.content {
						padding-right: 139.96upx;
					}
				}
			}

			.time {
				position: relative;
				font-size: 27.98upx;
				margin-top: 3.98upx;
				color: #03AEF9;
			}

			.time:before {
				position: absolute;
				left: -36upx;
				top: 9.98upx;
				content: '';
				width: 15.98upx;
				height: 15.98upx;
				background: #03AEF9;
				border-radius: 7.96upx;
			}

			.company {
				font-size: 27.98upx;
				color: #444;
				margin: 9.98upx 0;
			}

			.description {
				color: #808080;
				font-size: 25.96upx;
				margin-top: 12upx;
				line-height: 48upx;
				-webkit-transition: all 3s;
				margin-bottom: 60upx;
				height: auto;
				white-space: pre-wrap;

				&.hide {
					height: 138upx;
				}
			}

			.toggle {
				position: absolute;
				right: 0;
				bottom: 19.96upx;
				font-size: 25.96upx;
				margin-right: 9.98upx;
				color: #03AEF9;

				&.show:before {
					border: none;
					border-left: 12upx solid transparent;
					border-right: 12upx solid transparent;
					border-top: 19.96upx solid #d8d8d8;
				}

				&:before {
					position: absolute;
					left: -37.96upx;
					top: 9.98upx;
					width: 0;
					height: 0;
					content: '';
					border: none;
					border-left: 12upx solid transparent;
					border-right: 12upx solid transparent;
					border-bottom: 19.96upx solid #d8d8d8;
				}
			}
		}
	}
</style>
