# HELLO VUE

- intro

```javascript
<script src="https://cdn.bootcss.com/vue/2.2.6/vue.min.js"></script>
<script src="https://cdn.bootcss.com/vue-resource/1.3.1/vue-resource.min.js"></script>
```

- 官方文档

  - vue
  - vue-router <https://router.vuejs.org/zh-cn/advanced/navigation-guards.html>
  - vuex

- 参考资源

  - Ajax数据交互等 <http://www.cnblogs.com/Leo_wl/p/5648899.html>
  - 开源项目 <http://www.cnblogs.com/8899man/p/6514212.html>
  - 豆瓣 <https://github.com/jeneser/douban>

# 模仿微信界面实现部分功能

- 项目说明

```js
// 技术栈
node.js + vue2 + vux + axios + vuex + vue-cli
一个简易的微信模仿界面webapp(spa)

在线预览 http://leaf.qmen.space/#/
github地址 https://github.com/alg-security/wechat-demo

vue学习 http://jspang.com/2017/05/22/vuedemo/
vue-cli http://blog.csdn.net/wisewrong/article/details/55212684

// UI框架
// 1. Airyland 的 Vux (主要服务于微信页面)
https://github.com/airyland/vux
vux文档 https://vux.li/#/?id=%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8webpack

使用微信 jssdk
XAddress // 省市的选择
WechatEmotion
Swipeout


// 2. mint-ui
https://github.com/ElemeFE/mint-ui
https://mint-ui.github.io/docs/#/zh-cn2

// 图片来源
http://www.iconfont.cn/
```

- 文件结构

```js
dev-server.js // 运行npm run dev 相当重要
webpack.base.confg.js   // webpack的基础配置文件
.babelrc // Babel解释器的配置文件
.editorconfig // 编码规范

main.js // 整个项目的入口
App.vue
router/index.js // 路由文件
```

- 安装命令

```js
vue init webpack Vue-Project
npm install // cnpm install可能会出错,配置好之后一直用npm就行
// npm install --registry=https://registry.npm.taobao.org

rmdir /s/q F:\frontend\wechat-demo\wechat-vue\node_modules // windows下移除node_modules的一种方法
```

- 功能需求
  - SPA
  - 实现布局、功能为主
  - 定死数据、简单图片示意即可(mock.js)
  - 四个 tab 菜单的路由切换功能
  - 微信首页的布局和右滑选择删除消息的功能
  - 纯前端环境，不要涉及 PHP\JAVA
  - 扩展功能：聊天功能 + 朋友圈功能

- 细节注意
  - 实现“我”页面的布局和“个人信息修改”的路由跳转功能, tab 标签隐藏了

- 遇到的问题

```js
// tabsize首选项设置为2个空格,但保存就自动缩为4个
自己安装了这个插件: VS Code JS, CSS, HTML Formatting
需要在这个插件中设置一下 tabsize // 暂时直接禁用了
```

- 可参考项目
  - 开源中国微信版 https://github.com/iuoon/oscwx_2.0
  - (weui 用Vue.js开发微信app)https://github.com/useryangtao/vue-wechat
  - (较完善，但是不是vux的)https://github.com/zhaohaodang/vue-WeChat
  - (object-c 后期可参考)https://github.com/gsdios/GSD_WeiXin
  - (java 后期可参考)https://github.com/motianhuo/wechat

- 学习资料

```js
// 前端练手项目
http://www.cnblogs.com/CyLee/p/5830186.html
https://i.cmgine.net/archives/17160.html
```

# restful API设计

- 说明

```javascript
// vuejs-and-nytimes-news-app
http://www.zcfy.cc/article/fetching-data-from-a-third-party-api-with-vue-js-and-axios-mdash-sitepoint-2706.html
https://github.com/sailengsi/sls-admin

// Element UI
npm i element-ui -S

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

// 较其他UI框架的区别/特点
可以修改主题和国际化
内置过渡动画

24 分栏布局
一套特定的调色板 // 主要品牌颜色是鲜艳、友好的蓝色
Typography 字体

输入框的搜索建议
基础多选 http://element.eleme.io/#/zh-CN/component/select
可以利用搜索功能快速查找选项
Cascader 级联选择器 http://element.eleme.io/#/zh-CN/component/cascader
自带时间日期选择器 http://element.eleme.io/#/zh-CN/component/datetime-picker
上传
穿梭框 http://element.eleme.io/#/zh-CN/component/transfer

表格可以 固定列 支持多级 http://element.eleme.io/#/zh-CN/component/table
树形控件
分页(略丑)
加载服务
消息提示(很好看)

自带各种导航 | 面包屑略朴素
步骤条
Carousel 走马灯
```

- <https://segmentfault.com/q/1010000005785680/a-1020000005786234>

- App实现难点列表汇总

# todo-list
 
- https://github.com/Konata9/EasyTodoList
    
# 博客

- https://juejin.im/post/5a8c120f6fb9a0635c0483a7
- https://github.com/tywei90/CMS-of-Blog_Production

