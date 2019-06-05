<template>
  <view class="listChildren">
    <view class="list">
      <view class="text ListTitle" @tap.capture="selectItem($event, tree)">
        <view class="span">全部</view>
        <text class="iconfont icon-xiangshangjiantou " />
      </view>
    </view>
    <template v-for="(child, childIndex) in tree.children">
      <view class="list">
        <view class="text ListTitle" @tap.capture="selectItem($event, child)">
          <view class="span">{{ child.name }} {{ parseInt(child.children_count) > 0 ? '(' + child.children_count + ')' : '' }}</view>
          <text class="iconfont icon-xiangshangjiantou " />
        </view>

        <DropDownMenuChild
          v-if="child.children && child.children.length"
          :tree="child"
          @selectItem="selectItem"
        />
      </view>
    </template>
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
    }
  },
  mounted() {
  },
  components: {

  },
  methods: {
    selectItem(event, item) {
      this.$emit('selectItem', event, item)
    }
  }
}
export default DropDownMenuChildObj
</script>

