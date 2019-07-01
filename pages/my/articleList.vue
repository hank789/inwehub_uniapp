<template>
	<view class="content">
		
		<iwList v-model="list" :api="'article/user'" ref="iwList" :cssTop="cssTop" :requestData="feedListParams">
			
			<view class="recommend" v-if="list.length !== 0">
				<view class="recommendList" v-for="(recommend, index) in list" @tap.stop.prevent="goDetial(recommend)">
					<view class="container-image">
						<image class="modeImg" mode="aspectFill" :src="recommend.data ? recommend.data.img:''" />
					</view>
					<view class="recommend_content mui-ellipsis-2">{{recommend.title}}</view>
					<view class="recommend_datail">
						<view class="answer-fouce">{{ recommend.comments_number }}评论<text class="line"></text>{{ recommend.upvotes }}赞</view>
					</view>
				</view>
			</view>
			
			<div class="noData" v-else>
				<image class="iconImg" src="../../static/images/commentwait@3x.png" mode=""></image>
				<text class="tipsText">暂时没有数据呀～</text>
			</div>
		</iwList>
		
		
	</view>
</template>

<script>
	import iwList from '@/components/iw-list/iw-list'
	export default {
		data () {
			return {
				list: [],
				cssTop: 0,
				uuid: ''
			}
		},
		components: {
			iwList
		},
		onLoad(option) {
			this.uuid = option.uuid
		},
		computed: {
			feedListParams() {
				return {
					uuid: this.uuid
				}
			}
		},
		methods: {
			goDetial (hot) {
				uni.navigateTo({
					url: "/c/" + hot.category_id + '/' + hot.slug
				})
			}
		}
	}
</script>

<style lang="less">
	.recommend {
		.recommendList {
			width: 92%;
			margin-left: 4%;
			margin-bottom: 30upx;
			border-radius: 8upx;
			box-shadow: 0px 0px 7px 2px #ececee;
			background-color: antiquewhite;
			.container-image {
				width: 100%;
				height: 246upx;
				.modeImg {
					width: 100%;
					height: 100%;
				}
			}
			.recommend_content {
				padding: 0 30upx;
				color: #444444;
				font-size: 30upx;
			}
			.recommend_datail {
				padding: 0 30upx;
				overflow: hidden;
				.answer-fouce {
					float: right;
					color: #235280;
					font-size: 24upx;
					.line {
						width: 2upx;
						height: 24upx;
						margin: 0 20upx;
						position: relative;
						top: 4upx;
						display: inline-block;
						background: #dbdbdb;
					}
				}
			}
		}
	}
	.noData {
		margin-top: 100upx;
		.iconImg {
			width: 140upx;
			height: 178upx;
			margin: 0 auto;
			display: block;
		}
		.tipsText {
			color: #c8c8c8;
			font-size: 24upx;
			margin-top: 10upx;
			display: block;
			text-align: center;
		}
	}
</style>
