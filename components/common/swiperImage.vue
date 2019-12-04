<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
			<swiper-item v-for="(item, index) in swipers" :key="index" @tap="event(item)">
				<view class="swiper-item"><image :src="item.src" lazy-load style="height: 350upx;"></image></view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			swipers:Array
		},
		data(){
			return{
				
			}
		},
		methods:{
			event(item){
				console.log(item)
			}
		}
	}
</script>

<style scoped>
	swiper{
		height: 350upx;
	}
</style>
