<template>
	<view class="row j-center m-2">
		<block v-for="(item, index) in navLists" :key="index">
			<view class="span-4 d-flex flex-column a-center py-1" @tap="event(item)">
				<image :src="item.src" mode="widthFix" style="height: 60upx;width: 60upx;"></image>
				<text class="font">{{ item.text }}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		name:"menusNav",
		props:{
			navLists:Array
		},
		data(){
			return{
				
			}
		},
		methods:{
			event(item){
				console.log('点击了图标')
			}
		}
	}
</script>

<style scoped></style>
