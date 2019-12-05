<template>
	<view>
		<uni-status-bar></uni-status-bar>
		<view class="d-flex a-center j-sb p-2">
			<view class="iconfont icon-guanbi" @click="goBack"></view>
			<text style="color: #6c6c6c;" class="font-md">忘记密码</text>
		</view>
		<view class="p-5">
			<view class="font-big mb-5">密码登陆</view>
			<input
				type="text"
				@focus="focus('username')"
				@blur="blur('username')"
				:class="focusClass.username ? 'input-border-color' : ''"
				v-model="username"
				placeholder-class="text-light-muted"
				placeholder="请输入账号"
				class="border mb-3 uni-input"
			/>
			<input
				@focus="focus('password')"
				@blur="blur('password')"
				:class="focusClass.password ? 'input-border-color' : ''"
				type="text"
				v-model="password"
				placeholder-class="text-light-muted"
				placeholder="请输入密码"
				class="border mb-5 uni-input"
			/>
			<view @click="submit" hover-class="loginbtn" class="d-flex a-center j-center py-2 w-100 main-bg-color text-white rounded mb-4">登陆</view>
			<label class="checkbox d-flex a-center">
				<checkbox :checked="checked" @click="checked = !checked" style="transform:scale(0.7)" />
				<text class="text-light-muted font">已阅读并同意xxx协议</text>
			</label>
		</view>
	</view>
</template>

<script>
import uniStatusBar from '@/components/uni-ui/uni-status-bar/uni-status-bar.vue';
import { mapMutations } from 'vuex';
export default {
	name: 'login',
	components: {
		uniStatusBar
	},
	data() {
		return {
			username: '',
			password: '',
			checked: true,
			focusClass: {
				username: false,
				password: false
			},
			//验证规则
			rules: {
				username: [
					{
						rule: /^[a-zA-Z]\w{4,17}$/,
						msg: '以字母开头，长度在5~18之间，只能包含字母、数字和下划线'
					}
				],
				password: [
					{
						rule: /^.{2,20}$/,
						msg: '长度为3-20的所有字符'
					}
				]
			}
		};
	},
	created() {
		// #ifndef H5
		uni.hideHomeButton();
		// #endif
	},
	methods: {
		...mapMutations(['login']),
		async submit() {
			// this.rules['username'].forEach((v)=>{
			// 	if(!v.rule.test(this.username)){
			// 		console.log(v.msg)
			// 	}
			// })
			if (!this.validate('username')) return;
			if (!this.validate('password')) return;
			let [err, res] = await this.$axios.post('/api/login', {
				username: this.username,
				password: this.password
			});
			if (res.statusCode == 200) {
				this.login(res.data.data);
				uni.showToast({
					title: '登录成功',
					icon: 'none'
				});
				uni.navigateBack({
					delta: 1
				});
			} else {
				uni.showToast({
					title: res.msg,
					icon: 'none'
				});
			}
			console.log(err, res);
		},
		goBack() {
			uni.navigateBack();
		},
		//表单验证
		validate(key) {
			let check = true;
			this.rules[key].forEach(v => {
				//验证失败
				if (!v.rule.test(this[key])) {
					// console.log(v.msg)
					uni.showToast({
						title: v.msg,
						icon: 'none'
					});
					check = false;

					return false;
				}
			});
			return check;
		},
		focus(key) {
			// console.log(this.focusClass[key]);
			this.focusClass[key] = true;
		},
		blur(key) {
			// console.log('失去焦点', this.focusClass[key]);
			this.focusClass[key] = false;
		}
	}
};
</script>

<style scoped>
.loginbtn {
	opacity: 0.9;
}
</style>
