<template>
	<view class="content">
		 <scroll-view scroll-x="true" class="border-bottom scroll-row" >
		 	<view class="scroll-row-item px-3 font-md " 
			style="height:80upx;line-height: 80upx;"
			:class="tabBarIndex==index?'main-text-color':''"
			@click="changeTab(index)"
			v-for="(item,index) in tabBars" :key="index">
				<text>{{item.name}}</text>
			</view>
		 </scroll-view>
		 <swiper :duration="150" :current="tabBarIndex" :style="'height:'+ scollH+'px'" @change="OnchangeTab">
		 	<swiper-item v-for="(item,index) in tabBars" :key="index">
		 		<scroll-view scroll-y="true" :style="'height:'+ scollH+'px'">
		 			<view v-for="i in 100" :key="i">{{i}}</view>
		 		</scroll-view>
		 	</swiper-item>
		 </swiper>
		<!-- 轮播图组件 -->
		<!-- <swiper-image :swipers="swipers"></swiper-image> -->
		<!-- 分类导航 -->
		<!-- <menus-nav :navLists="navLists"></menus-nav> -->
		<!-- 全局分割线 -->
		<!-- <divider></divider> -->
		<!-- 三图广告 -->
		<!-- <three-adv :threeAdv="threeAdv"></three-adv> -->
		<!-- 基础卡片组件 -->
		<!-- <card :showhead="false"><image src="/static/images/bg.jpg" mode="widthFix"></image></card> -->
		<!-- <view class="row j-sb">
			<view style="width: 372.5upx;">
				<image src="/static/images/demo/list/1.jpg" lazy-load mode="widthFix"></image>
				<view class="p-2">
					<view class="font-md">米家空调</view>
					<text class="d-block font mt-1">1.5匹变频</text>
					<view class="d-flex mt-1">
						<view class="d-flex main-text-color a-self-start line-h">
							<text>￥1366</text>	
						</view>
						<view class="font-sm text-light-muted line-through  a-self-start line-h">￥2669</view>
					</view>
				</view>
			</view>
		</view> -->
		<!-- #ifdef H5 -->
		<view style="height: 104upx;width: 100%;"></view>
		<!-- #endif -->
	</view>
</template>

<script>
import swiperImage from '@/components/common/swiperImage.vue';
import menusNav from '@/components/common/menusNav.vue';
import divider from '@/components/common/divider.vue';
import threeAdv from '@/components/index/threeAdv.vue';
import card from '@/components/common/card.vue';
export default {
	components: {
		swiperImage,
		menusNav,
		divider,
		threeAdv,
		card
	},
	data() {
		return {
			tabBarIndex:0,
			scollH:520,
			tabBars:[
				{
					name:'推荐'
				},
				{
					name:'体育'
				},
				{
					name:'热点'
				},
				{
					name:'财经'
				},
				{
					name:'娱乐'
				},
				{
					name:'军事'
				}
			],
			swipers: [
				{
					src: '/static/images/demo/demo4.jpg'
				},
				{
					src: '/static/images/demo/demo5.jpg'
				},
				{
					src: '/static/images/demo/demo6.jpg'
				}
			],
			navLists: [
				{
					src: '/static/images/indexnav/1.png',
					text: '新品发布'
				},
				{
					src: '/static/images/indexnav/2.png',
					text: '小米众筹'
				},
				{
					src: '/static/images/indexnav/3.png',
					text: '以旧换新'
				},
				{
					src: '/static/images/indexnav/4.png',
					text: '1分拼团'
				},
				{
					src: '/static/images/indexnav/5.png',
					text: '超值特卖'
				},
				{
					src: '/static/images/indexnav/6.png',
					text: '小米秒杀'
				},
				{
					src: '/static/images/indexnav/7.png',
					text: '真心想要'
				},
				{
					src: '/static/images/indexnav/8.png',
					text: '电视热卖'
				},
				{
					src: '/static/images/indexnav/9.png',
					text: '家电热卖'
				},
				{
					src: '/static/images/indexnav/10.png',
					text: '米粉卡'
				}
			],
			threeAdv: {
				big: {
					src: '/static/images/demo/demo1.jpg'
				},
				smalltop: {
					src: '/static/images/demo/demo2.jpg'
				},
				smallbottom: {
					src: '/static/images/demo/demo2.jpg'
				}
			}
		};
	},
	created() {
		this.init();
		// console.log(this.$store.state)
	},
	onLoad() {
		//获取可视区域高度
		uni.getSystemInfo({
			success: (res) => {
				this.scollH=res.windowHeight-uni.upx2px(80)
			}
		})
	},
	methods: {
		changeTab(index){
			if(this.tabBarIndex==index) return;
			this.tabBarIndex=index
		},
		OnchangeTab(e){
			console.log(e)
		},
		init() {
			// #ifdef H5
			// 第一种请求
			// uni.request({
			// 	url:"/api/api/index_category/data",
			// 	method: 'GET',
			// 	success: res => {
			// 		console.log(res);
			// 	},
			// 	fail: () => {
			// 		console.log('请求失败');
			// 	},
			// 	complete: () => {
			// 		console.log('请求完成');
			// 	}
			// })
			uni.request({
				url: '/api/api/index_category/data',
				method: 'GET'
			})
				.then(data => {
					let [err, res] = data;
					console.log(err, res);
					if (err) {
						return uni.showToast({
							title: err //错误信息
						});
					}
					//错误
					if (res.statusCode !== 200) {
						return uni.showToast({
							title: res.data.msg //错误信息
						});
					}
				})
				.catch(e => {
					console.log(e);
				});
			// #endif
			// #ifndef H5
			uni.request({
				url: 'http://ceshi3.dishait.cn/api/index_category/data',
				method: 'GET',
				success: res => {
					console.log(res);
				},
				fail: () => {
					console.log('请求失败');
				},
				complete: () => {
					console.log('请求完成');
				}
			});
			// #endif
		}
	}
};
</script>

<style scoped>
	.scroll-row{
		height: 80upx;
	}
</style>
