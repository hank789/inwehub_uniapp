<template>
	<view>

    <view class="mui-content" v-show="!loading">
      <view class="myMoney">

        <view class="title">钱包余额</view>
        <view class="money"><span>¥</span>{{ totalMoeny }}</view>

      </view>


      <view class="menus">
        <view class="mui-row ">
          <view class="menu-item trade" @tap.stop.prevent="$router.push('/my/finance/list')">
            <text class="myicon myicon-money-record"></text>
            <br/>
            <text class="title">交易记录</text>
          </view>
          <view class="menu-item balance" @tap.stop.prevent="$router.push('/my/finance/withdraw')">
            <text class="myicon myicon-withdraw"></text>
            <br/>
            <text class="title">余额提现</text>
          </view>
        </view>
        <view class="menu-splite"></view>
      </view>

    </view>

  </view>
</template>

<script>
</script>

<style lang="less">
	.myMoney {
    background: #3c3e44;
    height: 271.96upx;
    color: #fff;
    padding: 39.98upx 60upx;
  }

  .myMoney .title {
    font-size: 27.98upx;
  }

  .myMoney span {
    font-size: 48upx;
    margin-right: 19.96upx;
    font-weight: normal;
  }

  .myMoney .money {
    margin-top: 60upx;
    font-size: 87.98upx;
    font-weight: 200;
  }

  .menus {
    position: relative;
	.trade {
		float: left;
		width: 50%;
	}
	.balance {
		float: right;
		width: 50%;
	}
  }

  .menus .menu-item {
    text-align: center;
    height: 183.98upx;
    background: #fff;
    display: inline-block;
  }

  .menus .menu-item .myicon {
    margin-top: 39.98upx;
    display: inline-block;
    width: 60upx;
    height: 42upx;
  }

  .menus .menu-item .title {
    display: inline-block;
    font-size: 27.98upx;
    margin-top: 19.96upx;
  }

  .menus .menu-splite {
    position: absolute;
    width: 1.96upx;
    height: 132upx;
    background-color: #D9D9D9;
    top: 25.96upx;
    left: 50%;

    -webkit-transform: scaleX(.5);
    transform: scaleX(.5);
  }
  .myicon-withdraw{
	  background: url("~@/static/images/icon-withdraw.png");
	  background-size: 60upx 42upx;
	  background-repeat: no-repeat;
	  
	}

	.myicon-money-record{
	  background: url("~@/static/images/icon-money-record.png");
	  background-size: 60upx 42upx;
	  background-repeat: no-repeat;
	}
</style>
