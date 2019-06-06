<template>
	<view class="">

		<view class="mui-content">
			<view class="info-professor">
				<view class="info-look" @tap.stop.prevent="$router.pushPlus('/my/resume')">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-gongkai"></use>
					</svg>
					<span>预览</span>
				</view>
				<p @tap.stop.prevent="uploadAvatar()">
					<img :src="user.info.avatar_url" class="avatar" />
					<span>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-xiangji"></use>
						</svg>
					</span>
				</p>
				<p>
					<span>{{ user.info.name }}</span>
					<svg class="icon" aria-hidden="true" v-if="user.info.is_expert =='1'">
						<use xlink:href="#icon-zhuanjiabiaoji"></use>
					</svg>
				</p>
				<p>
					<span>{{ user.info.company }}</span>
					<i></i>
					<span>{{ user.info.title }}</span>
				</p>
				<p>
					{{ user.info.mobile }}
				</p>
				<p>
					{{ user.info.email }}
				</p>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data () {
			return {
				user: {
					info: {}
				},
			}
		}
	}
</script>

<style lang="less">
</style>
