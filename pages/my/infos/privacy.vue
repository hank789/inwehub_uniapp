<template>
	<view class="content">
		<view class="mui-content" v-show="!loading">
			<view class="mui-table-view mui-table-view-chevron">
				<view class="mui-table-view-cell">
					工作经历
					<text class="iconfont icon-gongkai active" v-if="jobSee" @tap.stop.prevent="toggle('job')"></text>
					<text class="iconfont icon-bugongkai" v-else @tap.stop.prevent="toggle('job')"></text>
				</view>
				<view class="mui-table-view-cell">
					项目经历
					<text class="iconfont icon-gongkai active" v-if="projectSee" @tap.stop.prevent="toggle('project')"></text>
					<text class="iconfont icon-bugongkai" v-else @tap.stop.prevent="toggle('project')"></text>
				</view>
				<view class="mui-table-view-cell">
					教育经历
					<text class="iconfont icon-gongkai active" v-if="eduSee" @tap.stop.prevent="toggle('edu')"></text>
					<text class="iconfont icon-bugongkai" v-else @tap.stop.prevent="toggle('edu')"></text>
				</view>
				<view class="mui-table-view-cell">
					通过手机号查找我
					<text class="iconfont icon-gongkai active" v-if="phoneSee" @tap.stop.prevent="toggle('phone')"></text>
					<text class="iconfont icon-bugongkai" v-else @tap.stop.prevent="toggle('phone')"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { postRequest } from '@/lib/request'
export default {
	data() {
		return {
			jobSee: 0,
			projectSee: 0,
			eduSee: 0,
			phoneSee: 0,
			loading: 1
		};
	},
	onLoad () {
		postRequest(`profile/privacy/info`, {}).then(response => {
			var code = response.code
			if (code !== 1000) {
				uni.showToast({
					icon: 'none',
					title: response.message
				})
			  return
			}

			this.jobSee = response.data.is_job_info_public
			this.projectSee = response.data.is_project_info_public
			this.eduSee = response.data.is_edu_info_public
			this.loading = 0
      })
	},
	methods: {
      submit (data) {
        postRequest(`profile/privacy/update`, data).then(response => {
			var code = response.data.code
			if (code !== 1000) {
				uni.showToast({
					icon: 'none',
					title: response.message
				})
				return
			}
			uni.showToast({
					icon: 'none',
				title: response.message
			})
        })
      },
		toggle (type) {
        var data = {}
        switch (type) {
          case 'job':
            this.jobSee = !this.jobSee
//                if (!this.jobSee) {
//                    mui.toast('工作经历仅自己可见');
//                }
            data = {
              is_job_info_public: this.jobSee ? 1 : 0
            }
            this.submit(data)

            break
          case 'project':
            this.projectSee = !this.projectSee

            data = {
              is_project_info_public: this.projectSee ? 1 : 0
            }
            this.submit(data)
//              if (!this.projectSee) {
//                mui.toast('项目经历仅自己可见');
//              }
            break
          case 'edu':
            this.eduSee = !this.eduSee
            data = {
              is_edu_info_public: this.eduSee ? 1 : 0
            }
            this.submit(data)
//              if (!this.eduSee) {
//                mui.toast('教育经历仅自己可见');
//              }
            break
          case 'phone':
            this.phoneSee = !this.phoneSee
            data = {
              is_phone_public: this.eduSee ? 1 : 0
            }
            this.submit(data)
            break
        }
      }
	}
};
</script>

<style lang="less">
	.content {
		height: 100%;
		background: #efeff4;
	}
	.mui-content > .mui-table-view:first-child {
    margin-top: 0;
  }
  .mui-table-view {
	  background: #FFF;
  }

  .mui-table-view-cell {
    .iconfont {
      position: absolute;
      top: 0;
      right: 30upx;
      font-size: 57.98upx;

      &.active {
        color: #3c95f9;
      }
    }
  }
  .mui-table-view-cell {
    position: relative;
    overflow: hidden;
    padding: 22upx 30upx;
    -webkit-touch-callout: none;
}
.mui-table-view-chevron .mui-table-view-cell {
    padding-right: 130upx;
}
.mui-table-view-cell:after {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    background-color: #f2f2f2;
}
.mui-table-view-cell:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 30upx;
    height: 2upx;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
</style>
