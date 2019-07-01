<template>
	<view class="tagsBox">
		<uni-popup 
			:show="isShowTags" 
			:position="'tag'" 
			type="top" 
			:h5-top="true"
			@hidePopup="hidePopup"
			class="uniPopup"
		>
			<view class="popupBox">
				<view class="titleTab">
					<text class="back iconfont icon-guanbi" @tap.stop.prevent="close"></text>
					<text class="titleText" v-text="genderTagName"></text>
					<text @tap.stop.prevent="done" class="push">完成<text class='pushNum'>({{ iselected.length }})</text></text>
				</view>
				<view class="tagsList">
					<view class="dataList">
						<view class="noData" v-if="tags.length === 0">没有数据</view>
						<view class="listBox">
							<view v-for="(tag, index) in tags" class="tagList"
							 @tap.stop.prevent="checkThis(tag)" :value="tag.value" :key="index">
								<text class="iconfont checkeds" v-if="isCheckd(tag)"></text>
								<text class="iconfont checkedFalse" v-else></text>{{ tag.text }}
							</view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import { postRequest } from '@/lib/request'
	import { getTagsList } from "@/lib/industry"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				tags: '',
				counts: 0,
				loading: 1,
				iselected: [],
				isShowTags: this.showTags,
				showPopupBottomShare: true,
			}
		},
		props: ['tag_type', 'back_id', 'object_type', 'selected', 'showTags'],
		created() {
			getTagsList(this.tag_type, (res) => {
				this.tags = res
			})
			this.iselected = this.selected ? this.selected : []
		},
		components: {
			uniPopup
		},
		computed: {
			genderTagName() {
				var tagName = '行业领域'
				switch (this.tag_type) {
					case 3:
						tagName = '行业领域'
						break
					case 4:
						tagName = '产品类型'
						break
				}
				return tagName
			},
			getSelected() {
				return this.selected
			},

			getSelectedCodes() {
				var newValue = []
				for (var i in this.iselected) {
					newValue.push(this.iselected[i].value)
				}
				return newValue
			}
		},
		methods: {
			hidePopup() {
			  this.showPopupBottomShare = false
			  // uni.showTabBar()

			  if (this.isHaveNavigationBar) {
				setTimeout(() => {
				  uni.setNavigationBarColor({
					frontColor: '#000000',
					backgroundColor: '#ffffff'
				  })
				}, 100)
			  }
			},
			isCheckd(tag) {
				return typeof(this.getSelectedCodes) === 'object' && this.getSelectedCodes.indexOf(tag.value) > -1
			},
			close () {
				this.isShowTags = !this.isShowTags
			},
			done() {
				this.$emit('selectedIndustryTags', {
					iselected: this.iselected,
					object_type: this.object_type
				})
				this.isShowTags = !this.isShowTags
			},
			checkThis(tag) {

				var value = {
					text: tag.text,
					value: tag.value
				}
				var pos = this.getSelectedCodes.indexOf(value.value)
				if (pos < 0) {
					this.iselected.push(value)
				}
				if (pos >= 0) {
					this.iselected.splice(pos, 1)
				}
			}
		},

		watch: {
			selected: function(val) {
				if (typeof(val) === 'object') {
					this.iselected = val
				}
			}
		},
	}
</script>
<style lang="less">
	.tagsBox {
		height: 100%;
	}
	.popupBox {
		height: 100%;
		background: #FFFFFF;
		.titleTab {
			height: 86upx;
			line-height: 86upx;
			background: #FFFFFF;
			overflow: hidden;
			padding: 0 30upx;
			position: relative;
			z-index: 9;
			border-bottom: 2upx solid #f2f2f2;
			.back {
				color: #3c3e44;
				font-size: 32upx;
				float: left;
			}
			.titleText {
				color: #3c3e44;
				font-size: 36upx;
				font-weight: 600;
			}
			.push {
				color: #3c3e44;
				font-size: 32upx;
				float: right;
				.pushNum {
					
				}
			}
		}
	}
	
	.tagsList {
		width: 100%;
		padding: 30upx 30upx 0;
		text-align: left;
		position: absolute;
		top: 64upx;
		bottom: 0;
		overflow: scroll;
		.dataList {
			.noData {
				text-align: center;
				margin-top: 80upx;
			}
			.listBox {
				.tagList {
					color: #3f3f3f;
					font-size: 34upx;
					padding: 16upx 0;
					border-bottom: 2upx solid #f2f2f2;
					.iconfont {
						font-size: 38upx;
						margin-right: 15upx;
					}
					.checkeds:before {
						color: #007aff;
						content: "\e62a";
					}
					.checkedFalse:before {
						content: '\e62a';
						color: #aaa;
					}
				}
			}
		}
	}
</style>
<style>
	.uniPopup {
		height: 100% !important;
	}
</style>
