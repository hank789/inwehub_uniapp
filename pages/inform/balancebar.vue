<template>
    <div class="page-content">
        
            <ul v-for="item in list" :key="item.id" @tap.stop.prevent="goUrl(item.data.url)">
              <!--<p>{{item.read_at}}</p>-->
              <li>
                <p>
									<span class="check">
			  				<i>交易成功</i>
			  				<i>{{item.created_at}}</i>
   	  			             </span>
                  <span style="text-align: center;"><i v-if="item.data.io == 1">+</i><i
                    v-if="item.data.io == -1">-</i><i>{{item.data.change_money}}</i></span>
                  <span style="text-align: center;">{{item.data.title}}</span>
                  <i class="bot"></i>
                </p>
                <p>
                  <span>用户名：<i>{{item.data.name}}</i></span>
                  <span>余&nbsp;&nbsp;&nbsp;额：<i>{{item.data.current_balance}}</i></span>
                  <span v-if="item.data.extra_body">{{item.data.extra_body}}</span>
                  <i class="bot"></i>
                </p>
                <p>
                  <span>查看详情</span>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-chakangengduojiantou"></use>
                  </svg>
                </p>
              </li>
            </ul>
						<uni-load-more :status="status" :content-text="contentText" />
  </div>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
  export default {
    data() {
			return {
				list: [],
				isMore: false,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
    },
		components: {
			uniLoadMore
		},
		onPullDownRefresh() {
			this.page = 1;
			this.isMore = true;
			this.getList(1);
			uni.stopPullDownRefresh();
		},
		onReachBottom() {
			this.status = 'more';
			this.getList(this.page);
		},
    methods: {
      goUrl (url) {
        
      },
      getList(page) {
				console.log(page)
				if (this.isMore) {
					//说明已有数据，目前处于上拉加载
					this.status = 'loading';
				}
				this.$request.post('notification/money_list', {page: page}).then(res_data => {
					if (res_data.code == 1000) {
						this.page = page + 1;
						if (page === 1) {
							this.list = res_data.data.data;
						} else {
							this.list = this.list.concat(res_data.data.data);
						}
						this.isMore = true
						if (!res_data.data.next_page_url) {
							this.isMore = false;
							this.status = '';
						}
					} else {
					    uni.showToast({
					        title: res_data.message,
					        icon: 'none'
					    });
					}
					this.refreshing = false
				})
			},
      // 请求标记
      sign () {
        this.$request.post(`notification/mark_as_read`, {
          notification_type: 2
        }).then(response => {
          
        })
      }
    },
    onLoad () {
      // 加载页面请求一次；
      this.getList(1)
      this.sign()
    }
  }
</script>

<style scoped>
	
	  .bot {
    position: absolute;
    right: 0upx;
    bottom: 0;
    left: 0upx;
    height: 1.96upx;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: rgb(220, 220, 220);
  }
	
  /*清掉自带样式*/

  div,
  p,
  span,
  i,
  img,
  ul,
  li,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: normal;
  }

  /*滚动区域*/

  .mui-bar-nav ~ .page-content {
    padding-top: 0upx;
  }

  .page-content {
    background: #FFFFFF;
  }

  /*主体部分样式*/

  ul {
    padding: 0upx 31.96upx 0 31.96upx;
    margin-top: 21.98upx;
  }

  ul p {
    text-align: left;
    position: relative;
  }

  ul li {
    background: #f3f4f6;
    margin-top: 39.98upx;
    border: 0.98upx solid #dcdcdc;
    border-radius: 9.98upx;
    padding: 24upx 30upx;
  }

  .check i:nth-of-type(1) {
    text-align: left;
    font-size: 27.98upx;
    color: #444444;
  }

  .check i:nth-of-type(2) {
    font-size: 24upx;
    color: #808080;
    float: right;
  }

  ul li p:nth-of-type(1) span:nth-of-type(2) {
    display: block;
    margin-top: 45.98upx;
    font-size: 45.98upx;
    color: #444444;
  }

  ul li p:nth-of-type(1) span:nth-of-type(3) {
    display: block;
    font-size: 27.98upx;
    color: #808080;
		padding-bottom: 16upx;
  }

  ul li p:nth-of-type(2) {
    overflow: hidden;
  }

  ul li p:nth-of-type(2) span {
    text-align: left;
    display: block;
    color: rgb(128, 128, 128);
    height: 55.96upx;
    line-height: 49.96upx;
  }

  ul li p:nth-of-type(3) {
    height: 49.96upx;
    color: #808080;
    font-size: 27.98upx;
  }

  ul li p:nth-of-type(3) span {
    float: left;
    line-height: 69.98upx;
  }

  ul li p:nth-of-type(3) svg {
    float: right;
    margin-top: 19.96upx;
  }

  /*无数据的样式 */

  .container {
    position: absolute;
    top: 40%;
    left: 36%;
  }

  .container svg {
    font-size: 120upx;
    margin-left: 45.98upx;
    margin-bottom: 15.98upx;
  }

  .container p {
    font-size: 24upx;
    color: #c8c8c8;
  }
</style>