<template>
	<view :style="classObj.transition + 'background-color:' + swiperItems[current].bgColor + ';'">
		<swiper indicator-dots :duration="duration" class="swiperStyle" @change="swiperChange($event)">
			<swiper-item v-for="(items, indexs) in swiperItems" :key="indexs" class="swiperItem">
				<block v-for="(item, index) in items.itemArray" :key="index">
					<block v-if="item&&item.type=='image'">
						<image :src="item.value" :mode="item.mode||'widthFix'" class="position_absolute" :style="classObj.transition + (current==indexs&&onReady?item.changeAfter:item.changeBefore) + item.css "></image>
					</block>
					<block v-else-if="item&&item.type=='text'">
						<view class="position_absolute" :style="classObj.transition + (current==indexs&&onReady?item.changeAfter:item.changeBefore) + item.css">
							{{item.value}}
						</view>
					</block>
					<block v-else-if="item&&item.type=='button'">
						<button type="primary" :size="item.mode||'mini'" class="position_absolute" :style="classObj.transition + (current==indexs&&onReady?item.changeAfter:item.changeBefore) + item.css" @tap="activeFc()">{{item.value}}</button>
					</block>
				</block>
			</swiper-item>
		</swiper>
		<button type="primary" size="mini" class="position_absolute" :style="classObj.goonBtn" v-show="current!==(swiperItems.length-1)" @tap="activeFc(true)">跳过</button>
	</view>
</template>

<script>
	export default {
		data() {
			const duration = 1000; //动画时长控制
			return {
				current: 0, //swiper的index
				//注意所有元素都是绝对定位
				swiperItems: [{ //元素级 该数据有多少长度则swiper-item有多少项（就是有几页）
					bgColor: '#FFFFFF', //current等于项swiper-item的indexs时背景色过渡为此颜色
					itemArray: [{
						type: 'image', //image类型
						css: 'width:100%;height:100%;top:10%;left:50%;', //css代码 其中top|bottom ， left|right 一般是必填的
						value: '../../static/images/guide2_02.jpg', //该项的value， 图片类型为图片路径
						changeBefore: 'transform: translate(-50%, -200%);', //过渡之前	//过渡之前到过渡之后又过度动画
						changeAfter: 'transform: translate(-50%, 0);' //过渡之后
					}, {
						type: 'text', //文本类型
						css: 'font-size: 21px;top:66%;left:50%;color: #03AEF9;width: 234px;text-align: center;margin-top: 48px;', //css样式
						value: '行业情报信息一站式提供', //文本类型时 值为文本文字
						changeBefore: 'transform: translate(-50%, 200%);opacity:0;color:black;',
						changeAfter: 'transform: translate(-50%, 0);opacity:1;color:#03AEF9;'
					}, {
						type: 'text',
						css: 'font-size: 15px;top:66%;left:50%;color: #A0A0A0;width: 234px;text-align: center;margin-top: 90px;margin-left: -117px;',
						value: '精选行业资讯 追踪领域热点',
						changeBefore: 'transform: rotate(90deg);opacity:0;',
						changeAfter: 'transform: rotate(0);opacity:1;'
					}]
				},{
					bgColor: '#FFFFFF',
					itemArray: [{
						type: 'image',
						css: 'width:100%;height:100%;top:10%;left:50%;',
						value: '../../static/images/guide2_03.png',
						changeBefore: 'transform: translate(-50%, 0) scale(0,0);',
						changeAfter: 'transform: translate(-50%, 0) scale(1,1);'
					}, {
						type: 'text',
						css: 'font-size: 21px;top:66%;left:50%;color: #03AEF9;width: 234px;text-align: center;margin-top: 48px;',
						value: '打造有影响力的行业人脉',
						changeBefore: 'transform: translate(-50%, 200%);opacity:0;color: black;',
						changeAfter: 'transform: translate(-50%, 0);opacity:1;color: white;'
					}, {
						type: 'text',
						css: 'font-size: 15px;top:66%;left:50%;color: #A0A0A0;width: 234px;text-align: center;margin-top: 90px;margin-left: -117px;',
						value: '圈子动态分享 互助解疑答惑',
						changeBefore: 'transform: rotate(90deg);opacity:0;',
						changeAfter: 'transform: rotate(0);opacity:1;'
					},
					]
				},
				{
					bgColor: '#FFFFFF',
					itemArray: [{
						type: 'image',
						css: 'width:100%;height:100%;top:10%;left:50%;',
						value: '../../static/images/guide2_04.jpg',
						changeBefore: 'transform: translate(-50%, -500%) scale(0,0);',
						changeAfter: 'transform: translate(-50%, 0) scale(1,1);'
					}, {
						type: 'text',
						css: 'font-size: 21px;top:66%;left:50%;color: #03AEF9;width: 234px;text-align: center;margin-top: 48px;',
						value: '助力企业明智决策与购买',
						changeBefore: 'transform: translate(-50%, 500%);opacity:0;color: black;',
						changeAfter: 'transform: translate(-50%, 0);opacity:1;color: white;'
					}, {
						type: 'text',
						css: 'font-size: 15px;top:66%;left:50%;color: #A0A0A0;width: 234px;text-align: center;margin-top: 90px;margin-left: -117px;',
						value: '企业服务推荐 真实互动评价'
					},
					]
				},
				{
					bgColor: '#FFFFFF',
					itemArray: [{
						type: 'image',
						css: 'width:234px;top:100px;left:50%;height: 131px',
						value: '../../static/images/guide_05.png',
						changeBefore: 'transform: translate(-50%, -200%);',
						changeAfter: 'transform: translate(-50%, 0);'
					}, {
						type: 'text',
						css: 'font-size: 15px;top:210px;left:50%;color: #747576;text-align: center;width:100%;',
						value: '企业级应用&服务广场',
						changeBefore: 'transform: translate(-50%, 200%);opacity:0;',
						changeAfter: 'transform: translate(-50%, 0);opacity:1;'
					}, {
						type: 'button', //button类型 在最后一页有跳转首页与设置iflLaunch标识为true方法
						css: 'bottom:15%;left:50%;background-color:#ffffff;color: #03aef9;border-radius: 15px;font-size:16px;border: 1px solid #03aef9;',
						mode: 'default', //button时为button的size，  图片类型是为图片的mode
						value: '立即体验',
						changeBefore: 'transform: translate(-50%, 0) scale(0,0);opacity:0;',
						changeAfter: 'transform: translate(-50%, 0) scale(1,1);opacity:1;'
					}]
				}],
				onReady: false,
				duration,
				classObj: {
					transition: 'transition: all ' + (duration/1000) + 's;',
					goonBtn: 'top:5%;right:5%;background-color:rgba(255,255,255,.6);color: #666666;border-radius: 8px;' //跳过的按钮样式
				}
			};
		},
		methods:{
			swiperChange(e) {
				this.current = e.detail.current
			},
			activeFc(goOn) {
				if(this.current===(this.swiperItems.length-1)||goOn) {
					/**
					 * 向本地存储中设置launchFlag的值，即启动标识；
					 */
					this.$ls.set('lauchFlag', {showGuide: true})
					uni.switchTab({
						url: '/pages/index/index'
					});
				}
			},
			loadExecution: function(){
				/**
				 * 获取本地存储中launchFlag的值
				 * 若存在，说明不是首次启动，直接进入首页；
				 * 若不存在，说明是首次启动，进入引导页；
				 */
				var lauchFlag = this.$ls.get('lauchFlag')
				if (lauchFlag && lauchFlag.showGuide) {
					uni.switchTab({
						url: '/pages/index/index'
					});
				}
			}
		},
		onReady() {
			this.loadExecution()
			this.onReady = true;
		}
	}
</script>

<style scoped>
	button::after {
		border: none;
	}
	.swiperStyle{
		height: 100vh;
		width: 100vw;
	}
	.transition{
		transition: 1s;
	}
	.swiperItem{
		position: relative;
	}
	.position_absolute {
		position: absolute;
	}
	.img{
		width: 30%;
		position: absolute;
		top: 10%;
		left: 50%;
	}
	.text1{
		font-size: 5vh;
		font-weight: bold;
		position: absolute;
		top: 30%;
		left: 50%;
	}
	.text2{
		font-size: 3vh;
		position: absolute;
		top: 50%;
		left: 20%;
	}
</style>
