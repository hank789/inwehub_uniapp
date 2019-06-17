<template>
	<view class="mui-modal mui-pageSub mui-active">
		<view class="mui-bar mui-bar-nav mustshow">
			<text class="mui-icon iconfont icon-guanbi"></text>
			<h1 class="mui-title" v-text="genderTagName"></h1>
			<a class="mui-btn mui-btn-link mui-pull-right mui-btn-blue mui-disabled" v-if="iselected.length === 0">完成</a>
			<a v-bind:id="'done_' + back_id" @tap.stop.prevent="done" class="mui-btn mui-btn-link mui-pull-right mui-btn-blue"
			 v-else>完成<span>({{ iselected.length }})</span></a>
		</view>
		<view class="mui-content mui-scroll-wrapper">


			<view class="mui-scroll">

				<view class="mui-indexed-list">
					<view class="mui-indexed-list-alert"></view>
					<view class="mui-indexed-list-inner">
						<view class="mui-indexed-list-empty-alert">没有数据</view>
						<view class="mui-table-view">
							<view v-for="(tag, index) in tags" class="mui-input-row mui-table-view-cell mui-indexed-list-item mui-checkbox-2  mui-left"
							 @tap.stop.prevent="checkThis" :value="tag.value">

								<span class="tagSelect checked" v-if="typeof(getSelectedCodes) === 'object' && getSelectedCodes.indexOf(tag.value) > -1" /><span
								 class="tagSelect" v-else />{{ tag.text }}

							</view>
						</view>

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		postRequest
	} from '@/lib/request'
	export default {
		data() {
			return {
				tags: '',
				counts: 0,
				loading: 1,
				iselected: []
			}
		},
		props: ['tag_type', 'back_id', 'object_type', 'selected'],
		created() {
			postRequest(`tags/load`, {
				tag_type: this.tag_type
			}).then(res => {
				console.log(res, '数据')
				if (res.data !== false) {
					this.tags = res.data.tags
					this.counts = this.tags.length
				}
			})

			this.iselected = this.selected ? this.selected : []
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
			done() {
				this.$emit('selectedIndustryTags', this.iselected, this.object_type)
				document.getElementById(this.back_id).classList.remove('mui-active')
			},
			checkThis(e) {
				var li = null
				if (e.target.tagName === 'SPAN') {
					li = e.target.parentNode
				} else {
					li = e.target
				}
				var span = li.childNodes[0]
				var value = {
					text: li.innerText,
					value: parseInt(li.getAttribute('value'))
				}

				var pos = this.getSelectedCodes.indexOf(value.value)
				if (!span.classList.contains('checked')) {
					span.classList.add('checked')
					if (pos < 0) {
						this.iselected.push(value)
					}
				} else {
					span.classList.remove('checked')
					if (pos >= 0) {
						this.iselected.splice(pos, 1)
					}
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

<style>
	.mui-modal.mui-active {
		background-color: #3c3e44;
	}
	.mui-modal.mui-active {
		height: 100%;
		-webkit-transition: -webkit-transform .25s;
		transition: transform .25s;
		-webkit-transition-timing-function: cubic-bezier(.1, .5, .1, 1);
		transition-timing-function: cubic-bezier(.1, .5, .1, 1);
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
	.mui-modal {
		position: fixed;
		z-index: 999;
		top: 0;
		overflow: hidden;
		width: 100%;
		min-height: 100%;
		-webkit-transition: -webkit-transform .25s, opacity 1ms .25s;
		transition: transform .25s, opacity 1ms .25s;
		-webkit-transition-timing-function: cubic-bezier(.1, .5, .1, 1);
		transition-timing-function: cubic-bezier(.1, .5, .1, 1);
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0);
		opacity: 0;
		background-color: #fff;
	}
	.mui-title {
		right: 1.066rem;
		left: 1.066rem;
		display: inline-block;
		overflow: hidden;
		width: auto;
		margin: 0;
		text-overflow: ellipsis;
		color: #3c3e44;
		font-size: 0.48rem;
		font-weight: 500;
		line-height: 1.173rem;
		position: absolute;
		z-index: 99;
		padding: 0;
		text-align: center;
		white-space: nowrap;
	}
	.mui-bar .mui-btn-link {
		font-size: 0.426rem;
		line-height: 1.173rem;
		top: 0;
		padding: 0;
		color: #3c3e44;
		border: 0;
		    margin-left: 0.266rem;
	}
	.mui-bar-nav.mui-bar .mui-icon {
    margin-right: -0.266rem;
    margin-left: -0.266rem;
    padding-right: 0.266rem;
    padding-left: 0.266rem;
	position: relative;
	z-index: 99;
}
.mui-bar-dark, .mui-bar-nav {
    background-color: #ffffff;
    box-shadow: none;
}
.mui-bar[data-v-6a2616b0] {
    position: fixed;
}
.openAppH5 .mui-bar-nav {
    top: 1.306rem;
}
.mui-bar .mui-btn {
    font-weight: 400;
    position: relative;
    z-index: 20;
    top: 0.186rem;
    margin-top: 0;
    padding: 0.16rem 0.32rem 0.186rem;
}

.mui-checkbox-2 .tagSelect:before {
  font-family: Muiicons;
  font-size: 0.746rem;
  font-weight: normal;
  line-height: 1;
  text-decoration: none;
  color: #aaa;
  border-radius: 0;
  background: none;
  -webkit-font-smoothing: antialiased;
}

.mui-checkbox-2.mui-left .tagSelect {
  left: 0.533rem;
}

.mui-checkbox-2 .tagSelect:before {
  content: '\E411';
}

.mui-table-view-cell.mui-checkbox-2 .tagSelect {
  top: 0.213rem;
}

.mui-checkbox-2.mui-left .tagSelect {
  left: 0.533rem;
}

.mui-checkbox-2 .tagSelect {
  position: absolute;
  top: 0.106rem;
  right: 0.533rem;
  display: inline-block;
  width: 0.746rem;
  height: 0.693rem;
  border: 0;
  outline: 0 !important;
  background-color: transparent;
  -webkit-appearance: none;
  z-index:0;
}
.mui-table-view-cell.mui-checkbox-2.mui-left {
  padding-left: 1.546rem;
}
.mui-checkbox-2 {
  position: relative;
  z-index:777;
}
.mui-checkbox-2 .tagSelect.checked:before {
  color: #007aff;
}
.mui-checkbox-2 .tagSelect.checked:before {
  content: '\E442';
}

.mui-table-view .mui-media-object.mui-pull-right
{
    margin-left: 0.266rem;
}

.mui-pull-right
{
    float: right;
}

.mui-bar .mui-btn-nav.mui-pull-right
{
    margin-right: -0.133rem;
}
.mui-bar .mui-btn-nav.mui-pull-right .mui-icon-right-nav
{
    margin-left: -0.08rem;
}
.mui-indexed-list {
    position: relative;
    border-top: solid 0.026rem #e3e3e3;
    border-bottom: solid 0.026rem #e3e3e3;
    overflow: hidden;
    background-color: #fafafa;
    cursor: default;
}
.mui-table-view-cell {
    position: relative;
    overflow: hidden;
    padding: 0.293rem 0.4rem;
    -webkit-touch-callout: none;
}
.mui-indexed-list-empty-alert {
    padding: 0.8rem 0.4rem;
    text-align: center;
    color: #ccc;
    padding-right: 1.2rem;
}
.mui-indexed-list-empty-alert {
    padding-right: 1.466rem;
}
.mui-indexed-list-empty-alert{
    display: none;
}
.mui-content {
    position: absolute;
    top: 56upx;
    width: 750upx;
    left: 50%;
    bottom: 0;
    padding-top: 0;
    overflow: scroll;
}
.mui-scroll {
    position: absolute;
    z-index: 1;
    width: 100%;
}
</style>
