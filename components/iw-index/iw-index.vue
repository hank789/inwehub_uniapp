<template>
    <view class="index-bar-container">
        <slot name="header"></slot>
        <view class="index-bar-main">
            <view class="index-bar-content">
                <slot></slot>
            </view>
            <view class="index-bar" @tap="chooseIndex">
                <view class="index-bar-list">
                    <view v-for="(char, charIndex) in chars" :key="charIndex" class="index-bar-item">{{char}}</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script type="text/babel">
  let pinyin = require('./pinyin')
  let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#']
  export default{
    props: {
      list: {
        type: Array,
        required: true
      },
      search: String
    },
    data () {
      return {
        // map: {},
        chars: chars
      }
    },
    computed: {
      data () {
        if (!this.search) {
          return this.map
        }
        // 搜索,支持汉字,拼音,拼音首字母
        // let search = pinyin.getFullCamelChars(this.search)
        let search = this.search
        let map = {}
        let tmp = []

        for (let key in this.map) {
          tmp = this.map[key].filter(function (item) {
            return item.pinyin.raw.indexOf(search) > -1 || item.pinyin.camel.indexOf(search.toUpperCase()) > -1 || item.pinyin.full.toUpperCase().indexOf(search.toUpperCase()) > -1
          })
          if (!tmp) {
            console.log('key not found:' + key)
          }
          if (tmp.length) {
            map[key] = tmp
          }
        }
        return map
      },
      map () {
        // 数据映射
        let map = {}
        chars.forEach((c) => {
          map[c] = []
        })

        let arr = this.list.map(function (item) {
          if (!item.name) {
            console.log('name is empty:' + JSON.stringify(item))
          }
          item.pinyin = pinyin.getFullCamelChars(item.name)
          return item
        })

        arr.forEach((item) => {
          this.sort(map, item)
        })

        for (var key in map) {
          if (!map[key]) {
            console.log('key not found2:' + key)
          }
          if (map[key].length === 0) {
            delete map[key]
          }
        }

        return map
      }
    },
    methods: {
      sort (map, item) {
        var initial = item.pinyin.camel[0]

        var arr = map[initial]
        if (!arr) {
          console.log('key not found3:' + JSON.stringify(item))
        }
        var len = arr.length
        var i = len - 1
        if (len === 0) {
          return arr.push(item)
        }
        if (item.pinyin.full < arr[0].pinyin.full) {
          return arr.unshift(item)
        }
        for (; i >= 0; i--) {
          if (arr[i].pinyin.full <= item.pinyin.full) {
            arr.splice(i + 1, 0, item)
            break
          }
        }
      },
      chooseIndex (e) {
        var innerHTML = e.target.innerHTML
        var target = document.getElementById(innerHTML)
        if (target) {
          var oPos = target.offsetTop
          console.log(oPos)
          var obj = document.querySelector('.mui-content')
          if (obj.scrollTo) {
            obj.scrollTo(0, oPos - 40)
          } else {
            obj.scrollTop = oPos - 40
          }
        }
      }
    },
    watch: {
      data: function (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
</script>
<style scoped>
    .index-bar-container {

    }

    .index-bar-container .index-bar-main {
        position: relative;
    }

    .index-bar-container .index-bar-main .index-bar-content .index-bar-group {
        padding: 0;
        margin: 0;
        color: #656565;
    }

    .index-bar-container .index-bar-main .index-bar-content .index-bar-group .index-bar-cell {
        padding-left: 30upx;
        color: #000000;
        position: relative;
        background-color: #ffffff;
    }

    .index-bar-container .index-bar-main .index-bar-content .index-bar-group .index-bar-cell.index-bar-cell-head {
        font-size: 25.96upx;
        height: 49.96upx;
        line-height: 49.96upx;
        padding-left: 30upx;
        background-color: #f5f5f5;
    }

    .index-bar {
        position: fixed;
        right: 0;
        bottom: 93.98upx;
        z-index: 12;
        width: 45.98upx;
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
        font-size: 19.96upx;
        color: #316ccb;
    }

    .index-bar .index-bar-list {

        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        box-orient: vertical;
        -webkit-flex-direction: column;
        flex-direction: column;
        list-style: none;
        height: 100%;
        padding: 0;
        width: 100%;
    }

    .index-bar .index-bar-item {
        color: #444;
        line-height: 33.98upx;
        font-size: 24upx;
        text-align: center;
        display: inline-block;
    }

    @media screen and (max-width: 370px) {
        .index-bar .index-bar-item {
            line-height: 27.98upx;
        }
    }

    .groupWrapper {
        background: #fff;
        overflow-y: scroll;
    }

    .bottomBorder:after {
        right: 0;
    }

    .groupWrapper:last-child:after {
        display: none;
    }

    .avatar {
        z-index: 0;
        color: #ffffff;
        background-color: #bdbdbd;
        display: inline-block;
        height: 87.98upx;
        width: 87.98upx;
        font-size: 39.98upx;
        text-align: center;
        border-radius: 50%;
    }



    .tap-active {
        font-size: 27.98upx;
        padding: 19.96upx 0 7.96upx;
    }

    .textBody {
        position: absolute;
        top: 24upx;
        right: 135.98upx;
        left: 135.98upx;
        vertical-align: top;
        color: #565656;
    }

    .textBody .desc {
        color: #b4b4b6;
    }

    .ibutton {
        float: right;
        border-radius: 99.98upx;
        width: 123.0upx;
        height: 54upx;
        text-align: center;
        line-height: 54upx;
        position: relative;
        top: 19.96upx;
        margin-right: 9.98upx;
        background: #03aef9;
        color: #fff;
    }

    .ibutton.active {
        background: #dcdcdc;
        color: #b4b4b6;
    }
    .index-bar-content{
        padding-right:60upx;
    }

</style>