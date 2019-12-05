<template>
	<view>
		<card headTitle="账号管理" bodyStyle="background:#ffffff;">
			<uni-list-item title="个人资料"></uni-list-item>
			<uni-list-item title="收货地址"></uni-list-item>
		</card>
		<card headTitle="关于" bodyStyle="background:#ffffff;">
			<uni-list-item title="关于商城"></uni-list-item>
			<uni-list-item title="意见反馈"></uni-list-item>
			<uni-list-item title="协议规则"></uni-list-item>
			<uni-list-item title="资质证件"></uni-list-item>
			<uni-list-item title="用户协议"></uni-list-item>
			<uni-list-item title="隐私政策"></uni-list-item>
		</card>
		<view class="p-2">
			<button class="bg-white font-md" style="height: 90upx;line-height: 90upx;">退出登陆</button>
		</view>
	<!-- 	<button type="primary" @click="showMulLinkageThreePicker">选择城市</button> -->
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue";
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue";
	import mpvueCityPicker from "@/components/common/mpvue-citypicker/mpvueCityPicker.vue"
	export default {
		components:{
			card,
			uniListItem,
			mpvueCityPicker
		},
		name:"setup",
		data() {
			return {
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
			}
		},
		//监听返回键
		onBackPress() {
		  if (this.$refs.mpvueCityPicker.showPicker) {
		  	this.$refs.mpvueCityPicker.pickerCancel();
		    return true;
		  }
		},
		methods: {
			// 三级联动选择
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.pickerText = JSON.stringify(e)
				console.log(JSON.stringify(e))
			}
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		}
	}
</script>

<style scoped>
  page{
	  background: #eeeeee;
  }
</style>
