<template>
    <view>
        <view class="mui-content absolute">
            <view class="myLabel" >
                <view class="myLabelContent">
                    <!--{{selectNum}}-->
                    <view>标签（{{skill_tags.length}}／20） </view>
                    <view>让机遇更精准匹配，让内容更容易检索 </view>
                    <button class="button" @tap.stop.prevent="keepTags()" v-if="skill_tags.length">确认保存</button>
                </view>
                <view class="li" v-for="(item, index) in skill_tags" v-if="skill_tags.length">
                    {{item.text}}
                    <text class="iconfont icon-times--"></text>
                </view>
            </view>
            <view class="gray"></view>

            <view class="addLable">
                <view class="title">添加标签</view>
                <view class="search">
                    <text class="iconfont icon-sousuo"></text>
                    <input class="input" type="text" v-model="searchText" maxlength="15"/>
                </view>

                <view class="hotTags"  v-if="sort">
                    <view class="title">热门标签</view>
                    <view class="hotTagsItem" v-for="(item, index) in list" @tap.stop.prevent="addSkillTag(item)">
                        {{item.text}}
          </view>
                </view>

                <view class="tags"  v-else>
                    <!--搜素到的标签名 -->
                    <view class="li" v-if="isNewTag" @tap.stop.prevent="addSkillTag(list[0])">
                        {{list[0].text}}<span>  (新标签)</span>
                        <view class="bot"></view>
                    </view>
                    <view class="li" v-for="(item, index) in list" @tap.stop.prevent="addSkillTag(item)" v-if="!(isNewTag && index === 0)">
                        {{item.text}}
              <view class="bot"></view>
                    </view>
                </view>


            </view>

        </view>
    </view>
</template>

<script>
  import ui from '@/lib/ui'
  import { searchText } from '@/lib/search'
  import { postRequest } from '@/lib/request'
  import {getIndexByIdArray} from '@/lib/array'
  import localEvent from '@/lib/localstorage'
  import localStorageKey from '@/lib/localstoragekey'
  const currentUser = localEvent.get('UserInfo')

  export default {
    data () {
      return {
        pageOption: {},
        searchText: '',
        loading: 1,
        list: [],
        skill_tags: [],
        tags: [],
        id: currentUser.user_id,
        sort: 1,
        selectNum: 0,
        tagName: []
      }
    },
    computed: {
      isNewTag () {
        if (this.list[0] && typeof (this.list[0].value) === 'string') {
          return true
        }
        return false
      }
    },
    onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
        this.pageOption = option
    },
    methods: {
      // 删除擅长标签；
      delSkillTag (text) {
        for (var i in this.skill_tags) {
          if (this.skill_tags[i].text === text) {
            this.skill_tags.splice(i, 1)
          }
        }
      },
      keepTags () {
        if (this.pageOption.from === 'ask' || this.pageOption.from === 'interaction' || this.pageOption.from === 'article') {
          localEvent.set('selected_' + this.pageOption.from + '_skill_tags' + this.id, this.skill_tags)
          uni.navigateBack()
          return
        } else if (this.pageOption.from === 'discover') {
          localEvent.set(localStorageKey.discover_select_tag, this.skill_tags)
          uni.navigateBack()
          return
        } else {
          return false
        }
      },
      // 添加擅长标签；
      addSkillTag (item) {
        var index = getIndexByIdArray(this.skill_tags, item.value)
        if (index >= 0) {
          ui.toast('重复添加')
        } else {
          var list = {
            id: item.value,
            value: item.value,
            text: item.text
          }
//          选中的标签添加到数组中
          if (this.skill_tags.length < 20) {
            this.skill_tags.push(list)
            ui.toast('添加成功')
            this.searchText = ''
          } else {
            ui.toast('最多添加20个标签')
          }
        }
      },
      // 搜索标签列表；
      search (text, sort) {
        // 判断是否为空；
        postRequest('tags/load', {
          tag_type: 5,
          word: text,
          sort: this.sort
        }).then(response => {
          var code = response.code
          if (code !== 1000) {
            ui.toast(response.message)
            return
          }
          if (response.data.tags.length > 0) {
            this.list = response.data.tags
            for (var i = 0; i < this.list.length; i++) {
              this.tagName.push(this.list[i].text)
            }
          }
          if (!text) return

          var searchText = text.trim()
          if (searchText) {
            if (this.tagName.indexOf(searchText) === -1) {
              var obj = {
                text: searchText,
                value: searchText
              }
              if (typeof (this.list[0].value) !== 'string') {
                this.list.unshift(obj)
              } else {
                this.list[0].text = searchText
                this.list[0].value = searchText
              }
            }
          }
          this.loading = 0
        })
      }
    },
    watch: {
      searchText: function (newValue) {
        if (!newValue) {
          // 当无搜索内容时候
//          this.list = []
          this.sort = 1
          setTimeout(() => {
            this.search()
          }, 1100)
          return
        }
        this.sort = 0
        searchText(newValue, (text) => {
          this.search(newValue)
        })
      }
    },
    mounted () {
      // 默认加载热门标签
      this.sort = 1
      this.search()
      if (this.pageOption.from === 'ask' || this.pageOption.from === 'interaction' || this.pageOption.from === 'article') {
        const skill_tags = localEvent.get('selected_' + this.pageOption.from + '_skill_tags' + this.id)
        if (skill_tags) {
          this.skill_tags = skill_tags
        }
        const selectNum = localEvent.get('selected_' + this.pageOption.from + '_skill_tags' + this.id)
        if (selectNum) {
          this.selectNum = selectNum.length
        }
      } else if (this.pageOption.from === 'discover') {
        const skill_tags = localEvent.get(localStorageKey.discover_select_tag)
        if (skill_tags) {
          this.skill_tags = skill_tags
        }
        const selectNum = localEvent.get(localStorageKey.discover_select_tag)
        if (selectNum) {
          this.selectNum = selectNum.length
        }
      } else {
        return false
      }
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

    .mui-content {
        background: #FFFFFF;
    }

    .myLabel {
        width: 100%;
        overflow: hidden;
        background: #FFFFFF;
        padding: 0 4% 30upx 2%;
        position: relative;
    }

    .myLabel .myLabelContent {
        font-size: 25.96upx;
        margin-top: 30upx;
        color: #808080;
        margin-left: 19.96upx;
    }
    .myLabel .button{
        width:150upx;
        height:60upx;
        background: #03aef9;
        font-size: 27.98upx;
        color: #FFFFFF;
        border-color: #03aef9;
        position: absolute;
        right:4%;
        top:52.50upx;
        padding: 0;
    }

    .myLabel .li {
        display: inline-block;
        background: #f3f4f6;
        border: 15.98upx;
        border-radius: 7.96upx;
        padding: 9.98upx 24upx 9.98upx 19.96upx;
        margin-top: 19.96upx;
        margin-left: 19.96upx;
        color:#4c4c4c;
    }

    .myLabel .li .iconfont{
        font-size: 19.96upx;
        color: #c8c8c8;
        margin-bottom: 3.98upx;
        margin-left: 9.98upx;
    }

    .gray {
        width: 100%;
        height: 19.96upx;
        background: #f3f4f6;
    }

    .addLable {
        width: 100%;
        background: #FFFFFF;
        padding: 30upx 4% 0 4%;
    }

    .addLable .title {
        font-size: 25.96upx;
        color: #808080;
    }

    .search {
        width: 100%;
        height: 75.98upx;
        margin-top: 18upx;
        background: #F3F4F5;
        border-radius: 199.96upx;
    }

    .search .iconfont{
        font-size: 33.98upx;
        color: #c8c8c8;
        margin-top: 10upx;
        margin-left: 31.96upx;
        /*margin-right: 9.98upx;*/
        float: left;
    }

    .search .input {
        background: #F3F4F5;
        width: 80%;
        height: 69.98upx;
        margin-top: 3.98upx;
        float: left;
        border: none;
        font-size: 27.98upx;
        color: #444444;
    }

    .addLable .tags {
        width: 100%;
        overflow: hidden;
        margin-top: 43.96upx;
    }

    .addLable .tags .li {
        width: 100%;
        height: 87.98upx;
        position: relative;
        text-align: left;
        line-height: 87.98upx;
        font-size: 27.98upx;
        color: #808080;
    }

    /*按钮的color*/

    .mui-popup-buttons span.mui-popup-buttons span.mui-popup-button {
        color: #808080;
    }

    /*热门标签的样式*/
    .hotTags{
        width: 100%;
        overflow: hidden;
        margin-top: 43.96upx;
    }
    .hotTags .title{
        font-size: 25.96upx;
        color:rgba(128,128,128,1);
        margin-bottom: 19.96upx;
    }
    .hotTags .hotTagsItem{
        font-size:27.98upx;
        color:rgba(68,68,68,1);
        padding: 9.98upx 19.96upx;
        border:1.96upx solid rgba(220, 220, 220, 1);
        border-radius: 7.96upx;
        float: left;
        margin-bottom: 19.96upx;
        margin-right: 19.96upx;
    }
</style>