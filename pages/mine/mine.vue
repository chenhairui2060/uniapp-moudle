<template>
	<view>
		<!-- 头部 -->
		<view class="position-relative d-flex a-center" style="height: 320upx;width: 750upx;">
			<view class="iconfont icon-xiaoxi1 text-white position-absolute" style=" top:20upx;right: 20upx;font-size: 50upx; z-index: 99;"></view>
			<image src="/static/images/bg.jpg" style="height: 320upx;width: 100%;z-index: 1;" class="position-absolute"></image>
			<view class="d-flex a-center position-absolute" style="z-index: 99;width: 100%;">
				<image src="/static/images/demo/demo6.jpg" class="rounded-circle border-light ml-4" style="height: 145upx;width: 145upx; border:5upx solid ;"></image>
				<navigator url="../login/login"><text class="ml-2 text-white font-md">测试昵称</text></navigator>
				<view
					class="d-flex a-center j-center"
					style="height: 70upx;
				position: absolute;
				bottom: 0;
				right: 0;
				width: 280upx;background: #ffd43f;color: #d25b0a;border-top-left-radius:40upx; border-bottom-left-radius: 40upx;"
				>
					会员积分1.99
				</view>
			</view>
		</view>
		<!-- 图标分类 -->
		<card>
			<view slot="title" class="d-flex j-sb a-center">
				<text>我的订单</text>
				<view class="text-secondary" @click="navigate('order',true)">
					全部订单
					<text class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-1 font-md"></text>
				</view>
			</view>
			<view class="d-flex a-center">
				<block v-for="(item, index) in orders" :key="index">
					<view hover-class="bg-light-secondary" class="flex-1 d-flex flex-column a-center j-center line-h py-3">
						<view class="iconfont font-lg" :class="item.icon" hover-class="active-color"></view>
						<text class="font-md text-secondary">{{ item.text }}</text>
					</view>
				</block>
			</view>
		</card>
		<divider></divider>
		<card :showhead="false"><image src="/static/images/demo/demo4.jpg" mode="widthFix"></image></card>
		<uni-list-item
			v-for="(item, index) in listNav"
			:key="index"
			@click="chooseItem(item)"
			:title="item.title"
			:showExtraIcon="true"
			:leftIcon="item.leftIcon"
			:leftIconStyle="item.leftIconStyle"
		></uni-list-item>
		<divider></divider>
		<uni-list-item title="更多设置" @click="navigate('setup')" :showExtraIcon="true" leftIcon="icon-shezhi1" leftIconStyle="color:#818c99;"></uni-list-item>
		<!-- #ifdef H5 -->
		<view style="height: 100upx;width: 100%;"></view>
		<!-- #endif -->
	</view>
</template>

<script>
import card from '@/components/common/card.vue';
import divider from '@/components/common/divider.vue';
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
export default {
	components: {
		card,
		divider,
		uniListItem
	},
	data() {
		return {
			orders: [
				{
					icon: 'icon-yinhangka',
					text: '待付款'
				},
				{
					icon: 'icon-huoche',
					text: '待收货'
				},
				{
					icon: 'icon-xiaoxi1',
					text: '待评价'
				},
				{
					icon: 'icon-editor2',
					text: '退换修'
				}
			],
			listNav: [
				{
					leftIcon: 'icon-huiyuan2',
					leftIconStyle: 'color:#fdc02e;',
					title: '小米会员',
					path: ''
				},
				{
					leftIcon: 'icon-huiyuanzhongxin',
					leftIconStyle: 'color:#fdc02e;',
					title: '会员中心'
				},
				{
					leftIcon: 'icon-aixin1',
					leftIconStyle: 'color:#fa6c5e;',
					title: '服务中心'
				},
				{
					leftIcon: 'icon-shouye1',
					leftIconStyle: 'color:#fd8b42;',
					title: '小米之家'
				},
				{
					leftIcon: 'icon-gengduo2',
					leftIconStyle: 'color:#9ed45a;',
					title: '更多功能'
				}
			]
		};
	},
	methods: {
		navigate(path, check = false) {
			if (!path) return;
			if (check) {
				return this.navigateTo({
					url: `/pages/${path}/${path}`
				});
			}
			uni.navigateTo({
				url: `/pages/${path}/${path}`
			});
		}
	}
};
</script>

<style scoped>
.active-color {
	color: #09bb07;
}
</style>
