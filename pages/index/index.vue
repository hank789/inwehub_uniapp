<template>
	<view>
		<div class="container-control-logoAndTabsAndSearch">
        <div class="topSearchWrapper" @tap.stop.prevent="$router.pushPlus('/searchAll','list-detail-page-three')">
          <div class="searchFrame">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sousuo"></use>
            </svg>
            <span>搜产品、问答、圈子、内容</span>
          </div>
        </div>
        <div class="addIcon" @tap.stop.prevent="jumpToDiscoverAdd">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianjia"></use>
          </svg>
        </div>
      </div>

      <div class="container-tags-home container-tags-home-margin" id="container-tags-home-content">
        <div>
          <div class="container-allTags " :class="type === 0 ? 'active' : ''" @tap.stop.prevent="getAllRecommend()">
            全部<i class="allTagsLine" :class="type === 0 ? 'activeLine':''"></i>
          </div>
          <div class="container-tabLabels">
            <customSwiper ref="inTags" :options="swiperOption" class="container-upload-images">
              <customSwiperSlide v-for="(tag, index) in regions" :key="index" class="tagLabel">
                    <span class="tab" :class="type === index+1 ? 'active' : ''"
                          @tap.stop.prevent="selectTag(index + 1)">{{ tag.text }}</span>
                <i class="" :class="type === index+1 ? 'activeLine' : ''" ></i>
              </customSwiperSlide>
            </customSwiper>
          </div>
        </div>
      </div>

      
    
	</view>
</template>

<script>
	import { swiper as customSwiper, swiperSlide as customSwiperSlide } from 'vue-awesome-swiper'

    import { parseDateStr } from '../../lib/util'

    import {
        getHomeData
    } from '@/lib/home.js';

	export default {
		data() {
			return {
				title: 'Hello',
				regions: [],
			    swiperOption: {
		          slidesPerView: 'auto',
		          spaceBetween: 0,
		          freeMode: true
		        },
		        type: 1
			}
		},
        components: {
          customSwiper,
          customSwiperSlide
        },
		onLoad: function (option) {
			getHomeData((data) => {
                console.log(data)
	            this.regions = data.regions
	        })
		},
		methods: {
            selectTag (index) {
                console.log('indexTAG:' + index)
                this.$refs.inTags.swiper.slideTo(index - 1, 1000)
                this.type = index
            }
		}
	}
</script>

<style>
.tagLabel {
    width: auto !important;}
</style>
