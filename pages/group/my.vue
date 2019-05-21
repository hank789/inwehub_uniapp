<template>
	<view class="content">
		<view class="component-group" v-for="(item, index) in list" :key="index" @tap.stop.prevent="selectItem(item)">
			<view class="groupLogo">
				<image class="groupPhoto" :src="item.logo" ></image>
			</view>
			<view class="groupContent">
				<view class="groupName">
					<view class="font-family-medium groupOwnerWrapper">
						<text class="text-line-1 groupTitle">{{item.name}}</text><text class="border-football" v-if="item.is_joined === 3">圈主</text>
					</view>
				</view>
				<text class="groupDescribe text-line-1">{{item.description}}</text>
				<text class="groupText">{{item.subscribers}}人气</text>
				<text class="groupText">{{item.articles}}分享</text>
				<text class="groupText" v-if="!item.public">
					<text class="iconfont icon-simi"></text>
					私密
				</text>
			</view>
			<text class="bot"></text>
		</view>
	</view>
</template>

<script>
  import { groupList } from '@/lib/group'
  export default {
	data() {
		return {
			list: []
		}
	},
	async onLoad() {
      this.getGroupList()
    },
	methods: {
		getGroupList() {
			groupList( '27707c887b4911e8b73500163e000d6b', (res) => {
				this.list = res.data
			})
		}
	}
	
  }

</script>

<style lang="less">
	.bot {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1.96upx;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: rgb(220, 220, 220);
	}
</style>
