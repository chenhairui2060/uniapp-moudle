<template>
	<view class="d-flex j-sb a-center">
		<image :src="threeAdv.big.src" @tap="event(threeAdv.big)" lazy-load style="height: 530upx;width: 373upx;border-right: 2upx solid #f8f9fb;"></image>
		<view class="d-flex flex-column">
			<image :src="threeAdv.smalltop.src" @tap="event(threeAdv.smalltop)" lazy-load style="height: 264upx;width: 375upx;border-bottom: 2upx solid #f8f9fb;"></image>
			<image @tap="event(threeAdv.smallbottom)" :src="threeAdv.smallbottom.src" lazy-load style="height: 264upx;width: 375upx;"></image>
		</view>
	</view>
</template>

<script>
export default {
	name: 'threeAdv',
	props: {
		threeAdv: Object
	},
	methods: {
		event(obj) {
			console.log(obj);
		}
	}
};
</script>

<style></style>
