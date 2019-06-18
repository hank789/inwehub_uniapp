<template>
  <view>
    <view class="mui-content">
      <view class="listSelect">
        <view @tap.stop.prevent="showDropdownMenu()" class="listSelectItem">
          <view class="span font-family-medium">{{ !category.name ? '选择类型' : category.name }}</view>
          <text class="iconfont icon-xiangxiajiantou " />
        </view>
        <view @tap.stop.prevent="selectSort()" class="listSelectItem">
          <view class="span font-family-medium">{{ orderByName }}</view>
          <text class="iconfont icon-paixu " />
        </view>
      </view>

      <RefreshList
        ref="RefreshList"
        v-model="list"
        :api="'tags/productList'"
        :requestData="prevOtherData"
        class="listWrapper"
      >
        <view class="list">
          <view v-for="(item, index) in list" :key="index" class="comment-product">
            <view class="product-info" @tap.stop.prevent="toRoute('/pages/dianping/product?name=' + encodeURIComponent(item.name))">
              <view class="product-img border-football">
                <image mode="aspectFill" :src="item.logo" alt="" class="image lazyImg" /></view>
              <view class="product-detail">
                <view class="productName font-family-medium text-line-1">{{ item.name }}</view>
                <view class="productMark">
                  <view class="stars">
                    <StarView :rating="item.review_average_rate" />
                  </view>
                  <view class="starsText">
                    <view class="span spanFirst">{{ item.review_average_rate }}分</view>
                    <view class="i"></view><view class="span">{{ item.review_count }}条评论</view>
                  </view>
                </view>
                <view class="line-river-after line-river-after-top" />
              </view>
            </view>
            <view v-if="!list.length" class="noData">
              <view class="DataImg">
                <image mode="aspectFill" class="image" src="../../static/images/empty@3x.png" alt="" /></view>
              <view class="noDataText">暂时没有数据～</view>
            </view>
          </view></view></RefreshList>
    </view>

    <DropDownMenu
      ref="dropdownMenu"
      v-model="category"
      v-if="localCategories.length"
      :tree="localCategories"
    >
    </DropDownMenu>

    <Options
      :id="'itemOptions'"
      ref="itemOptions"
      :options="['评分', '热度']"
      @selectedItem="selectedItem"
    />

  </view>
</template>

<script>
import DropDownMenu from '@/components/iw-category-select/iw-category-select'
import { getCategories } from '@/lib/dianping'
import RefreshList from '@/components/iw-list/iw-list'
import Options from '@/components/iw-popup-options/iw-popup-options'
import StarView from '@/components/iw-star/iw-star'

export default {
  components: {
    DropDownMenu,
    RefreshList,
    Options,
    StarView
  },
  data() {
    return {
      pageOption: {},
      category: {
        id: '',
        name: ''
      },
      categories: [],
      list: [],
      orderBy: 1
    }
  },
  computed: {
    localCategories () {
      function addIsShow (arr) {
        return arr.map(function(currentValue, index){
          currentValue.isShow = false
          if (currentValue.name === '产品' || currentValue.name === '服务') {
            currentValue.isShow = true
          }

          if (currentValue.children.length) {
            currentValue.children = addIsShow(currentValue.children)
          }
          return currentValue
        })
      }
      return addIsShow(this.categories)
    },
    prevOtherData() {
      return { category_id: this.category.id, orderBy: this.orderBy }
    },
    nextOtherData() {
      return { category_id: this.category.id, orderBy: this.orderBy }
    },
    orderByName() {
      switch (this.orderBy) {
        case 0:
          return '排序'
        case 1:
          return '评分'
        case 2:
          return '热度'
      }
    }
  },
  onLoad: function(option) { // option为object类型，会序列化上个页面传递的参数
    this.pageOption = option
  },
  watch: {
    '$route'(to, from) {
      if (to.name === from.name) {
        this.refreshPageData()
      }
    }
  },
  mounted() {
  },
  created() {
    this.refreshPageData()
  },
  methods: {
    toRoute(url) {
      uni.navigateTo({ url: url })
    },
    goBack() {
      window.mui('#dropDownMenuWrapper').popover('toggle')
      uni.navigateBack()
    },
    selectSort() {
      this.$refs.itemOptions.toggle()
    },
    selectedItem(text) {
      this.$refs.itemOptions.toggle()
      switch (text) {
        case '评分':
          this.orderBy = 1
          break
        case '热度':
          this.orderBy = 2
          break
      }
    },
    showDropdownMenu() {
      this.$refs.dropdownMenu.show()
    },
    refreshPageData() {
      const categoryId = this.pageOption.categoryId

      if (categoryId) {
        this.category.id = categoryId
      }

      const categoryName = this.pageOption.categoryName

      if (categoryName) {
        this.category.name = categoryName
      }

      getCategories(this, (categories) => {
        this.categories = categories
      })
    }
  }
}
</script>

<style scoped lang="less">
  .mui-content {
    background: #ffffff;
  }
  .listWrapper {
  }
  .listSelect {
    height: 67.96upx;
    padding: 0 31.96upx;
    line-height: 67.96upx;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index:7;
    background: #fff;
    box-shadow:0upx 9.98upx 19.96upx 0upx rgba(249,249,251,1);
    .listSelectItem {
      color: #444444;
      font-size: 25.96upx;
      &:nth-of-type(1) {
        .iconfont{
          font-size: 13.96upx;
          margin-bottom: 1.96upx;
        }
      }
      &:nth-of-type(2) {
        .iconfont{
          font-size: 19.96upx;
        }
      }
    }
  }

  .list {
    margin-top: 3.0upx;
  }
  .comment-product {
    padding: 27.98upx 30upx 0;
    .product-info {
      overflow: hidden;
      padding-bottom: 31.96upx;
      .product-img {
        width: 87.98upx;
        height: 87.98upx;
        float: left;
        .image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 7.96upx;
        }
      }
      .product-detail {
        float: left;
        margin-left: 19.96upx;
        .productName {
          width: 567.98upx;
          color: #444444;
          font-size: 31.96upx;
          line-height: 45.0upx;
        }
        .productMark {
          display: flex;
          .iconfont{
            color: #FCC816;
            font-size: 24upx;
          }
          .span {
            color: #B4B4B6;
            font-size: 21.98upx;
            line-height: 30upx;
            .spanFirst {
              color: #FCC816;
              margin-left: 6upx;
            }
          }
          .i {
            width: 3.98upx;
            height: 3.98upx;
            margin-right: 9.98upx;
            vertical-align: middle;
            border-radius: 50%;
            background: #B4B4B6;
            display: inline-block;
          }
        }
      }
    }
  }
  .noData {
    margin-top: 99.98upx;
    margin-bottom: 99.98upx;
    .DataImg {
      width: 121.96upx;
      height: 177.98upx;
      margin: 0 auto;
      .image {
        width: 100%;
        height: 100%;
      }
    }
    .noDataText {
      color: #C8C8C8;
      font-size: 24upx;
      line-height: 31.96upx;
      margin-top: 19.96upx;
      text-align: center;
    }
  }
  .dianPingListHeader {
    position: relative;
    height: 87.98upx;
    line-height: 87.98upx;
    background-color: #FFF;
    /*display: flex;*/
    .headerBack {
      font-size: 49.96upx;
      color: #3C3E44;
      margin-left: 19.96upx;
    }
    .headerTitle {
      color: #3C3E44;
      font-size: 36upx;
      text-align: center;
      font-family:PingFangSC-Medium;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
