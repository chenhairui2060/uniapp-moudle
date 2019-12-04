<template>
	<view class="homepage">
		<!-- #ifdef MP-WEIXIN -->
		<view v-if="canIUse">
			<view>
				<view class="header"><image src="/static/images/demo/list/2.jpg"></image></view>
				<view class="content">
					<view>申请获取以下权限</view>
					<text>获得你的公开信息(昵称，头像、地区等)</text>
				</view>

				<button class="bottom" type="primary" open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">授权登录</button>
			</view>
		</view>
		<view wx:else class="text-center">请升级微信版本</view>
		<!-- #endif -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			canIUse: wx.canIUse('button.open-type.getUserInfo')
		};
	},
	created() {
		uni.hideHomeButton();
	},
	methods: {
		wxGetUserInfo(e) {
			console.log('触发了');
			let that = this;
			if (e.detail.userInfo) {
			  uni.request({
			    url: that.$config.DoBaseUrl +'api/login/saveUserInfo',
			    data: {
			      data: e.detail.encryptedData,
			      iv: e.detail.iv,
			      sessionKey: uni.getStorageSync("session_key")
			    },
			    method: 'POST',
			    header: {
			      'content-type': 'application/x-www-form-urlencoded'
			    },
			    success: function (res) {
					console.log(res)
			      if (res.data.code==1){
			        uni.setStorageSync('memberId', res.data.data.id);
			        uni.setStorageSync('headimg', res.data.data.avatar_image);
			        uni.setStorageSync('nickName', res.data.data.nickname);
			        uni.setStorageSync('membersn', res.data.data.membersn);
			        //授权成功后，跳转进入小程序首页
			       if(!that.$store.state.user.loginStatus){
			       	console.log('未登陆')
						uni.reLaunch({
							url: "/pages/login/login"
						});
			       }
			      }
			      //从数据库获取用户信息
			    }
			  });
			} else {
			  //用户按了拒绝按钮
			  uni.showModal({
			    title: '警告',
			    content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
			    showCancel: false,
			    confirmText: '返回授权',
			    success: function (res) {
			      if (res.confirm) {
			        console.log('用户点击了“返回授权”')
			      }
			    }
			  })
			}
		}
	},
	onLoad() {}
};
</script>
<style scoped>
.homepage {
	height: 100%;
	width: 100%;
	overflow: hidden;
}
.header {
	margin: 90rpx 0 90rpx 50rpx;
	border-bottom: 1px solid #ccc;
	text-align: center;
	width: 650rpx;
	height: 300rpx;
	line-height: 450rpx;
}

.header image {
	width: 200rpx;
	height: 200rpx;
}

.content {
	margin-left: 50rpx;
	margin-bottom: 90rpx;
}

.content text {
	display: block;
	color: #9d9d9d;
	margin-top: 40rpx;
}

.bottom {
	border-radius: 80rpx;
	margin: 70rpx 50rpx;
	font-size: 35rpx;
}
</style>
