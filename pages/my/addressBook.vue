<template>
	<view class="phone-main" :style="{height: winHeight + 'px'}">
		
		<view class="phoneDirectory">
			<phone-list 
			:phones="phones"
			:appUsers = "appUsers"
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
	import phoneList from '@/components/user-directory/list-invite.vue'
	import phoneAlphabet from '@/components/user-directory/alphabet.vue'
	import uniTag from '@/components/uni-tag/uni-tag.vue'
	import html5plus from '@/lib/html5plus.js'
	
	export default {
		components:{
			phoneList,
			phoneAlphabet,
			uniTag
		},
		data () {
			return {
				winHeight:0,
				letter : 'A',
				scrollAnimationOFF:true,
				phoneListIndex:'A',
				phones: {},
				appUsers: [],
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
			
			this.$request.post('profile/addressBookList?directory=1').then(res=>{
				this.appUsers = res.data.appUsers
				this.phones = res.data.notAppUsers
			})
			
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
</style>
