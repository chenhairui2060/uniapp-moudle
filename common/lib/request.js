import config from "./config.js";
export default {
	//全局配置
	common: {
		baseUrl: 'http://ceshi3.dishait.cn',
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: {},
		method: 'GET',
		dataType: 'json'
	},
	//请求  返回promise
	request(options = {}) {
		// #ifdef H5
		//h5端
		options.url = "/api" + options.url
		// #endif
		// #ifndef H5
		//非h5端
		options.url = this.common.baseUrl + options.url
		// #endif
		options.header = options.header || this.common.header;
		options.method = options.method || this.common.method;
		options.dataType = options.dataType || this.common.dataType;
		options.data = options.data || this.common.data;
		return uni.request(options)
	},
	get(url, data, options = {}) {
		options.url = url;
		options.data = data;
		options.method = "GET";
		return this.request(options);
	},
	post(url, data, options = {}) {
		options.url = url;
		options.data = data;
		options.method = "POST";
		return this.request(options);
	}
}
