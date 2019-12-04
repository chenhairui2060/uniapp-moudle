import Vue from 'vue'
import App from './App'
import store from "./store/index.js"

Vue.prototype.$store = store

Vue.config.productionTip = false
//挂载全局方法
import config from "./common/lib/config.js"
Vue.prototype.$config = config
App.mpType = 'app'
console.log(store.state.user.loginStatus)
// 权限跳转
Vue.prototype.navigateTo = (options)=>{
	// 判断用户是否登录
	if (!store.state.user.loginStatus) {
		uni.showToast({
			title: '请先登录',
			icon: 'none'
		});
		return uni.navigateTo({
			url: '/pages/login/login'
		});
	}
	uni.navigateTo(options);
}


const app = new Vue({
	...App,
	config,
	store
})
app.$mount()
