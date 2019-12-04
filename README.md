# uniapp项目创建文档
```
  App.vue 引入全局公共样式
  1.引入样式库
  uni.css //官方ui库
  animate.css //css动画库
  icon.css //图标库
  common.css //公共样式
  
  引入步骤
  在uniapp-moudle目录底下新建common目录
  1.1 创建 uni.css
  在common目录下面把官方 common目录底下的 uni.css粘贴到目录底下
  1.2 创建 animate.css
  在common目录下面新建 animate.css 把css粘贴到该文件下
  百度搜索 animate.css然后下载 animate.css
   https://raw.githubusercontent.com/daneden/animate.css/master/animate.css
  1.3 创建 icon.css //图标库
  1.4 创建 common.css //公共样式
  1.5 引入公共样式
  在App.vue 里面 引入
  @import url('./common/uni.css');
  /* 	引入自定义图标库 */
  @import url('./common/icon.css');
  /* 引入animate动画库 */
  @import url('./common/animate.css');
  /* 引入公共样式 */
  @import url('./common/common.css');
  1.6解决uni.css引入./static/uni.ttf 文件错误
  到官方文档里面找到uni.ttf 文件粘贴到本项目static文件夹下
  1.7引入icon.css步骤
     1.7.1复制下载的iconfont.css里面所有的css
	删除 @font-face {里面的
	url('iconfont.eot?t=1574817710201'); /* IE9 */
	src: url('iconfont.eot?t=1574817710201#iefix') format('embedded-opentype'), /* IE6-IE8 */
	,
	url('iconfont.woff?t=1574817710201') format('woff'),
	url('iconfont.ttf?t=1574817710201') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	url('iconfont.svg?t=1574817710201#iconfont') format('svg')
	}
  1.8编写公共样式common.css
  
  2.1配置底部导航
  3.1项目中引入vuex
     3.1.1在项目根路径下新建store文件夹、
	 3.1.2在store文件夹下新建index.js
```