<template>
  <view class="listChildren">
    <view class="list">
      <view class="text ListTitle" @tap.stop.prevent="selectItem('all')">
        <view class="span">全部</view>
        <text class="iconfont icon-xiangshangjiantou " />
      </view>
    </view>
    <view v-for="(child, childIndex) in localTree" :key="childIndex">
      <view class="list">
        <view :class="{textActive: child.isShow}" class="text ListTitle" @tap.stop.prevent="selectItem(child)">
          <view class="span">{{ child.name }} {{ parseInt(child.children_count) > 0 ? '(' + child.children_count + ')' : '' }}</view>
          <text class="iconfont icon-xiangshangjiantou " />
        </view>
        <view v-if="isHasChild(child)">
          <DropDownMenuChild
            :class="{listChildrenActive: child.isShow, listChildrenHide: !child.isShow}"
            :tree="child"
            :depth="depth+1"
            @selectChange="selectChange"
          ></DropDownMenuChild>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const DropDownMenuChildObj = {
  name: 'DropDownMenuChild',
  data: () => ({
  }),
  props: {
    tree: {
      type: Object,
      default: () => {
        return {}
      }
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  mounted() {
  },
  computed: {
    localTree() {
      return this.tree.children
    }
  },
  components: {
  },
  methods: {
    count (child) {
      return parseInt(child.children_count) > 0 ? '(' + child.children_count + ')' : ''
    },
    isHasChild (child) {
      return !!this.depth < 3 && child.children && child.children.length
    },
    selectItem(item) {
      if (item === 'all') {
        this.$emit('selectChange', { id: this.tree.id, name: this.tree.name })
      } else if (item.children_count) {
        item.isShow = !item.isShow
        this.$forceUpdate()
      } else {
        this.$emit('selectChange', { id: item.id, name: item.name })
      }
    },
    selectChange(data) {
      this.$emit('selectChange', data)
    }
  }
}
export default DropDownMenuChildObj
</script>

<style scoped="scoped" lang="less">
  .listChildrenHide{
    display: none;
  }
  .listChildrenActive{
    display: block;
  }



   .list .listChildrenActive{
    display: block;
  }

   .list .listChildrenHide{
    display: none;
  }

   .list .textActive {
    color: #03AEF9;
    background: #F9F9FB;
  }

    .list {
    background: #FFF;
  }

    .list .list {
    background: #F9F9FB;
  }

   .list .list .list {
    background: #F3F4F6;
  }

   .list .list .list .list {
    background: #ECECEE;
  }

   .list .list .list .listChildrenActive {
    background: #ECECEE;
  }

   .list .list .listChildrenActive {
    color: #03AEF9;
    background: #F3F4F6;
  }

   .list .text {
    color: #444444;
    font-size: 27.98upx;
    line-height: 67.96upx;
    display: flex;
    justify-content: space-between;
  }

   .list .text .span {
    padding: 0 31.96upx;
    line-height:66upx;
  }


   .list .text .iconfont{
    font-size: 13.96upx;
    margin: 0 31.96upx;
    display: none;
  }

  .list .textActive .iconfont{
    display: block;
    color: #03AEF9;
  }
</style>
