<template>
	<view>
		<scroll-view class="scroll-list"
		:scroll-top="1"
		scroll-y="true"
		:scroll-with-animation="scrollAnimationOFF" 
		:scroll-into-view="scrollViewId" 
		:style="{height:winHeight + 'px', width: winWidth + 'px'}" 
		@scroll="handleScroll">
		
		<view class="phone-main-search">
			<text class="span">已注册好友</text>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in appUsers" :key="key">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" style="border-radius: 50%;" :src="item.app_user_avatar" @tap.stop.prevent="toResume(item.app_user_uuid)"></image>
					<view class="uni-media-list-body" @tap.stop.prevent="toResume(item.app_user_uuid)">
						<view class="uni-media-list-text-top">{{item.app_user_name}}</view>
						<view class="uni-media-list-text-bottom">
							<view><text>{{item.display_name}}</text></view>
						</view>
					</view>
					<view class="tag-view">
						<uni-tag :circle="true" :inverted="item.app_user_is_followed?true:false" :text="item.app_user_is_followed?'已关注':'关注Ta'" :type="item.app_user_is_followed?'default':'primary'" @click="followUser(item.app_user_uuid, item)" />
					</view>
				</view>
			</view>
		</view>
		<view class="phone-main-search">
			<text class="span">已关注的成员</text>
		</view>
		
			<view class="phone-list">
				<view class="list-item" 
				v-for="(item, key) of phones" 
				:key="key" 
				:id="key">
					<view class="list-item-title">{{key}}</view>
					<view class="list-item-phone" 
					hover-class="commonly-hover" 
					:hover-start-time="20" 
					:hover-stay-time="70" 
					v-for="innerItem in item"
					:key="innerItem.id"
					>
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">{{ innerItem.display_name }}</view>
						<view class="uni-list-item__extra">
								<uni-tag :circle="true" :inverted="true" :text="innerItem.is_app_user?'已邀请':'邀请注册'" :type="'primary'" @click="inviteUser(innerItem.id, innerItem)" />
						</view>
					</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniTag from '@/components/uni-tag/uni-tag.vue'
	export default {
		name:"phone-list",
		props:{
			phones:Object,
			letter:String,
			appUsers: Array,
			scrollAnimationOFF:Boolean
		},
		data () {
			return {
				winHeight:0,
				winWidth: 0,
				scrollTop:0,
				letterDetails:[],
				timer:null
			}
		},
		components: {
			uniTag
		},
		computed:{
			scrollViewId () {
				return this.letter
			}
		},
		mounted(){
			let windowWidth = uni.getSystemInfoSync().windowWidth
			this.winWidth = windowWidth - 30
			// #ifndef APP-PLUS
			this.winHeight = uni.getSystemInfoSync().windowHeight - 49.50
			//#endif
			
			//#ifdef APP-PLUS
			this.winHeight = uni.getSystemInfoSync().windowHeight - 100
			//#endif

		},
		methods:{
			handleClick (e) {
				this.$emit('handleClick',e)
			},
			toResume (uuid) {
				uni.navigateTo({
						url: '/pages/my/resume?id=' + uuid
				})
      },
			followUser(id, target) {
				this.$request.post('follow/user',{id: id}).then(res => {
					var code = res.code
					if (code !== 1000) {
						uni.showToast({
							title:res.message
						})
						return
					}
					target.app_user_is_followed = !target.app_user_is_followed
					uni.showToast({
						title: res.data.tip
					})
				})
			},
			inviteUser(id, target) {
				this.$request.post('profile/inviteAddressBookUser',{id: id}).then(res => {
					var code = res.code
					if (code !== 1000) {
						uni.showToast({
							title:res.message
						})
						return
					}
					target.is_app_user = 1
					uni.showToast({
						title: res.message
					})
				})
			},
			handleScroll (e){
				if(this.letterDetails.length === 0){
					let view = uni.createSelectorQuery().selectAll('.list-item')
					view.boundingClientRect(data=>{
						let top = data[0].top
						data.forEach((item,index)=>{
							item.top = item.top - top
							item.bottom  = item.bottom - top
							this.letterDetails.push({
								id:item.id,
								top:item.top,
								bottom:item.bottom
							})
						})
					}).exec()	
				}
				
				const scrollTop = e.detail.scrollTop
				this.letterDetails.some((item,index)=>{
					if(scrollTop>=item.top && scrollTop <= item.bottom - 5){
						this.$emit('change',item.id)
						this.$emit('reset',true)
						return true
					}
				})
			}
		}
			
	}
</script>

<style>
	
	.commonly-hover{
		background-color: #eee;
	}
.phone-main-search{
	background-color: #fff;
	padding: 10upx 20upx;
	border-bottom: 1px solid #e5e5e5;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	position: relative;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}
.phone-main-search .span {
    margin-left: 9.0upx;
    font-size: 27.98upx;
    color: #444444; 
}
	.uni-list-item__container {
		padding: 24upx 30upx;
		width: 100%;
		box-sizing: border-box;
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center
	}
	.uni-list-item__content {
		flex: 1;
		overflow: hidden;
		display: flex;
		flex-direction: column
	}
	.uni-list-item__extra {
		width: 35%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center
	}
	.scroll-list{
		flex: 1;
		height: 100vh;
		overflow-y: hidden;
	}

	.phone-list{
		display: flex;
		background-color: #fff;
		flex-direction:column;
		position:relative;
		width: 100%;
	}
	
	.list-item {
		width: 100%;
		display: flex;
		align-items: center;
		flex-wrap:wrap;
		height: 92upx;
		background-color: #fff;
		height: 100%;
		
	}
	
	.list-item >.list-item-phone{
		font-weight: normal;
	}
	
	.list-item-title{
		background-color: #eee;
	}
	
	.list-item-title,.list-item-phone{
		width: 100%;
		line-height: 92upx;
		font-size: 32upx;
		font-weight: bold;
		padding: 0 20upx;
		border-bottom: 1px solid #e5e5e5;
	}
	
	

</style>
