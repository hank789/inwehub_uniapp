<template>
	<view class="phone-main" :style="{height: winHeight + 'px'}">
		<view class="phone-main-search" @click="getContacts">
			<text class="iconfont icon-tongxunlu"></text><text class="span">寻找通讯录好友</text><text class="arrow iconfont icon-chakangengduojiantou"></text>
		</view>
		<view class="phoneDirectory">
			<phone-list 
			:phones="phones" 
			:letter="letter"
			:scrollAnimationOFF="scrollAnimationOFF" 
			@change="handlePhoneListIndex"
			@reset="handleReset"
			@handleClick="handleClick"
			>
			</phone-list>
			<phone-alphabet 
			:phones="phones"
			:phoneListIndex="phoneListIndex"
			@change="handleDatasetKey" 
			@scrollAnimationOFF="handleScrollAnimationOFF"
			@reset="handleReset"
			>
			</phone-alphabet>
		</view>
	</view>
</template>

<script>
	import phoneList from './list.vue'
	import phoneAlphabet from './alphabet.vue'
	import html5plus from '@/lib/html5plus.js'
	
	export default {
		name:"phone-directory",
		components:{
			phoneList,
			phoneAlphabet
		},
		props:{
			phones:Object,
			default:false
		},
		data () {
			return {
				winHeight:0,
				letter : 'A',
				scrollAnimationOFF:true,
				phoneListIndex:'A',
				reset:true
			}
		},
		computed:{
			phonesEscape () {
				return escape(JSON.stringify(this.phones))
			}
		},
		mounted () {
			let windowHeight = uni.getSystemInfoSync().windowHeight
			// #ifndef APP-PLUS
			this.winHeight = windowHeight
			//#endif
			
			//#ifdef APP-PLUS
			this.winHeight = windowHeight - 56
			//#endif
			
 			if(!this.phones){
				uni.showToast({
					title: '没有数据',
					icon:"none",
					mask: false,
					duration: 1500
				})
			}
		},
		methods:{
			handleClick (e) {
				this.$emit('paramClick',e)
			},
			handleDatasetKey (val) {
				this.letter = val
			},
			handleScrollAnimationOFF (val) {
				this.scrollAnimationOFF = val
			},
			handlePhoneListIndex(val){
				if(this.reset){
					this.phoneListIndex = val
				}
			},
			handleReset (val){
				if(val){
					this.letter = ''
				}
				this.reset = val
			},
			getContacts() {
				this.$request.post('profile/needAddressBookRefresh').then(response=> {
					if (response.data.refresh) {
						html5plus.getContacts((list)=>{
							this.$request.post('profile/saveAddressBook',{contacts: list}).then(res => {
								uni.navigateTo({
									url: '/pages/my/addressBook'
								})
							})
						}, () => {
							uni.showModal({
								title: '提示',
								content: '获取联系人失败, 前往设置权限？',
								success: function(res) {
									if (res.confirm) {
										html5plus.toSettingSystem('Contact')
									}
								}
							})
						})
					} else {
						uni.navigateTo({
							url: '/pages/my/addressBook'
						})
					}
				})
			}
		}
	}
</script>

<style>
.phone-main{
	display: flex;
	flex-direction: column;
	overflow: hidden;
}
.phoneDirectory{
	display: flex;
	flex-direction: row;
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

.phone-main-input{
	font-size:28upx;
	border: 1px solid #e5e5e5;
	border-radius: 3px;
	padding: 10upx 20upx 10upx 20upx;
}
.phone-main-search .iconfont {
    font-size: 54upx;
    color: #64A0E6; 
}
.phone-main-search .span {
    margin-left: 9.0upx;
    font-size: 27.98upx;
    color: #444444; 
}
.phone-main-search .arrow {
    position: absolute;
    color: #808080;
    right: 20upx;
    font-size: 31.96upx; 
}
</style>
