<script> 
export default {
	onLaunch: function() {
		let that=this;
		// #ifdef H5
		// if(!that.$store.state.user.loginStatus){
		// 	console.log('未登陆')
		// 	uni.reLaunch({
		// 	    url: "/pages/login/login"
		// 	});
		// }
		// #endif
		
		// #ifdef MP-WEIXIN
		console.log('微信小程序');
		
		var memberId = uni.getStorageSync('memberId');
		// if(!that.$store.state.user.loginStatus){
		// 	console.log('未登陆')
		// 	uni.redirectTo({
		// 	    url: "/pages/login/login"
		// 	});
		// }
		if (memberId == '') {
			// 登录
			uni.login({
				provider: 'weixin',
				success(loginRes) {
					console.log(loginRes);
					// 发送 res.code 到后台换取 openId, sessionKey, unionId
					if (loginRes.code) {
						uni.request({
							url: 'https://cosimo.qswh.net.cn/api/login/login',
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							data: { code: loginRes.code },
							method: 'POST',
							success: function(data) {
								console.log(data);
								if (data.data.code == 1) {
									uni.setStorageSync('openid', data.data.data.openid);
									uni.setStorageSync('session_key', data.data.data.session_key);
									uni.reLaunch({
										url: '/pages/homePage/homePage'
									});
									
									console.log(that.$store.state.user.loginStatus)
								}
							},
							fail: function() {}
						});
					} else {
						console.log('登录失败！' + loginRes.errMsg);
					}
				}
			});
		}
		// #endif
	},
	onShow: function() {
		console.log('App Show');
		
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
/* 引入官方css */
@import url('./common/uni.css');
/* 	引入自定义图标库 */
@import url('./common/icon.css');
/* 引入animate动画库 */
@import url('./common/animate.css');
/* 引入ui基础库 */
@import url('./common/zcm-main.css');
/* 引入公共样式 */
@import url('./common/common.css');
</style>
