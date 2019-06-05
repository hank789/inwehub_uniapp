<template>
	<view class="content">

		<view class="myLabel">
			<view class="title">
				<view>关注您感兴趣的标签</view>
				<view>我们会推荐您相关的内容</view>
				<button class="save" @tap.stop.prevent="keepTags()">确认保存</button>
			</view>
			<view class="tagBox" v-for="(item, index) in skill_tags" v-if="skill_tags.length" @tap.stop.prevent="toTagDetail(item.text)">
				{{item.text}}
				<text class="iconfont icon-times--" @tap.stop.prevent="delSkillTag(item.value)"></text>
			</view>
		</view>
		<view class="gray"></view>
		<!--  -->
		<view class="addLable">
			<view class="title">搜索标签</view>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input class="textInput" type="text" v-model="searchText" maxlength="15" />
			</view>

			<view class="hotTags" v-if="sort">
				<view class="title">热门标签</view>
				<view class="hotTagsList" v-for="(item, index) in list" @tap.stop.prevent="addSkillTag(item)">
					{{item.text}}
				</view>
			</view>

			<view class="tags" v-else>
				<!--搜素到的标签名 -->
				<view class="tagsList" v-if="isNewTag" @tap.stop.prevent="addSkillTag(list[0])">
					{{list[0].text}}<text> (新标签)</text>
					<text class="bot"></text>
				</view>

				<view class="tagsList" v-for="(item, index) in list" @tap.stop.prevent="addSkillTag(item)" v-if="!(isNewTag && index === 0)">
					{{item.text}}
					<text class="bot"></text>
				</view>
			</view>


		</view>
		<!--  -->
	</view>
</template>

<script>
	import { postRequest, getRequest } from '@/lib/request'
	import { search } from '@/lib/search'
	import { getIndexByIdArray } from "@/lib/array"
	import { searchText as searchTextFilter } from '@/lib/search'
	export default {
		data() {
			return {
				type: 0,
				skill_tags: [],
				TagValue: [],
				sort: 1,
				list: [],
				searchText: '',
				tagName: [],
				isupload: 1
			}
		},
		onLoad() {
			if (this.$route.query.form) {
				this.type = 1
			} else {
				this.type = 0
			}
			
			this.skillTags()
			this.search()
		},
		onReady() {
		},
		computed: {
		  isNewTag () {
			if (this.list[0] && typeof (this.list[0].value) === 'string') {
			  return true
			}
			return false
		  }
		},
		methods: {
		  // 保存擅长标签；
		  keepTags () {
			if (this.type) {
			  // 关注标签
			  var url = 'follow/batchTags'
			  var data = {
				'ids': this.TagValue
			  }
			} else {
			  // 我的擅长
			  url = 'profile/addSkillTag'
			  data = {
				'tags': this.TagValue,
				'new_tags': this.newTagName
			  }
			}
			postRequest(url, data).then(response => {
			  var code = response.code
			  if (code !== 1000) {
				console.log(response.message)
				return
			  }
				uni.showToast({
					title: '保存成功'
				})
			})
		  },
				
		  // 添加擅长标签；
		  addSkillTag (item) {
			this.isupload = 0
			var index = getIndexByIdArray(this.skill_tags, item.value, 'value')
			if (index >= 0) {
				uni.showToast({
					title: '重复添加'
				})
			} else {
			  var list = {
				id: item.value,
				value: item.value,
				text: item.text
			  }
	//          选中的标签添加到数组中
			  if (this.skill_tags.length < 20) {
				this.skill_tags.push(list)
				 // 筛选新标签
				if (typeof (list.value) === 'string') {
				  this.newTagName.push(list.value)
				} else {
				  this.TagValue.push(list.value)
				}
				uni.showToast({
					title: '添加成功',
				})
				this.searchText = ''
			  } else {
				uni.showToast({
					title: '最多添加20个标签'
				})
			  }
			}
		  },
			search(text, sort) {
				// 判断是否为空；
				postRequest('tags/load', {
					tag_type: 5,
					word: text,
					sort: this.sort
				}).then(response => {
					var code = response.code
					if (code !== 1000) {
						return
					}
					if (response.data.tags.length > 0) {
						this.list = response.data.tags
						for (var i = 0; i < this.list.length; i++) {
							this.tagName.push(this.list[i].text)
						}
					}
					if (!text) return

					var searchText = text.trim()
					if (searchText) {
						if (this.tagName.indexOf(searchText) === -1 && !this.type) {
							var obj = {
								text: searchText,
								value: searchText
							}
							if (typeof(this.list[0].value) !== 'string') {
								this.list.unshift(obj)
							} else {
								this.list[0].text = searchText
								this.list[0].value = searchText
							}
						}
					}
					this.loading = 0
				})
			},
			skillTags() {
				if (this.type) {
					var url = 'followed/tags'
					var data = {
						'perPage': 100
					}
				} else {
					url = 'profile/info'
					data = {}
				}
				getRequest(url, data).then(response => {
					var code = response.code
					if (code !== 1000) {
						return
					}
					if (this.type && response.data.data.length >= 0) {
						this.skill_tags = response.data.data.data
					}
					if (!this.type && response.data.info.skill_tags.length >= 0) {
						this.skill_tags = response.data.info.skill_tags
					}
					for (var i = 0; i < this.skill_tags.length; i++) {
						this.TagValue.push(this.skill_tags[i].value)
					}
					this.loading = 0
				})
			},
			delSkillTag(val) {
				var num = getIndexByIdArray(this.skill_tags, val, 'value')
				console.log(num)
				this.skill_tags.splice(num, 1)
				if (typeof(val) === 'number') {
					var m = this.TagValue.indexOf(val)
					this.TagValue.splice(m, 1)
				} else {
					var index = this.newTagName.indexOf(val)
					this.newTagName.splice(index, 1)
				}
			}
		},

		watch: {
			searchText: function(newValue,oldValue) {
				searchTextFilter(newValue, (text)=>{
					if (!newValue) {
						this.sort = 1
						setTimeout(() => {
							this.search(newValue)
						}, 1100)
						return
					}
					this.sort = 0
					this.search(newValue)
				})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	
  .bot {
    position: absolute;
    right: 0upx;
    bottom: 0;
    left: 0upx;
    height: 2upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
	.myLabel {
		width: 100%;
		overflow: hidden;
		background: #FFFFFF;
		padding: 0 4% 30upx 2%;
		position: relative;

		.title {
			font-size: 25.96upx;
			margin-top: 30upx;
			color: #808080;
			margin-left: 19.96upx;
		}

		.save {
			width: 150upx;
			height: 60upx;
			background: #03aef9;
			font-size: 27.98upx;
			color: #FFFFFF;
			border-color: #03aef9;
			position: absolute;
			right: 4%;
			top: 52.50upx;
			padding: 0;
		}

		.tagBox {
			display: inline-block;
			background: #f3f4f6;
			border: 15.98upx;
			border-radius: 7.96upx;
			padding: 9.98upx 24upx 9.98upx 19.96upx;
			margin-top: 19.96upx;
			margin-left: 19.96upx;
			color: #4c4c4c;

			.iconfont {
				font-size: 19.96upx;
				color: #c8c8c8;
				margin-bottom: 3.98upx;
				margin-left: 9.98upx;
			}
		}
	}

	.content .addLable {
		width: 100%;
		background: #FFFFFF;
		padding: 30upx 4% 0 4%;

		.title {
			font-size: 26upx;
			color: #808080;
		}

		.search {
			width: 100%;
			height: 76upx;
			margin-top: 18upx;
			background: #F3F4F5;
			border-radius: 200upx;

			.iconfont {
				font-size: 34upx;
				color: #c8c8c8;
				margin-top: 9upx;
				margin-left: 32upx;
				float: left;
			}

			input {
				background: #F3F4F5;
				width: 80%;
				height: 70upx;
				margin-top: 4upx;
				float: left;
				border: none;
				font-size: 28upx !important;
				color: #444444;
			}
		}

		.tags {
			width: 100%;
			overflow: hidden;
			margin-top: 44upx;

			.tagsList {
				width: 100%;
				height: 88upx;
				position: relative;
				text-align: left;
				line-height: 88upx;
				font-size: 28upx;
				color: #808080;
			}
		}

		.hotTags {
			width: 100%;
			overflow: hidden;
			margin-top: 43.96upx;

			.title {
				font-size: 26upx;
				color: rgba(128, 128, 128, 1);
				margin-bottom: 20upx;
			}

			.hotTagsList {
				font-size: 27.98upx;
				color: rgba(68, 68, 68, 1);
				padding: 9.98upx 19.96upx;
				border: 1.96upx solid RGBA(220, 220, 220, 1);
				border-radius: 7.96upx;
				float: left;
				margin-bottom: 19.96upx;
				margin-right: 19.96upx;
			}
		}
	}
</style>
