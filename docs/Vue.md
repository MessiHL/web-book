#                                           VUE

## 1 基础

### 1.1 事件处理

[参考]( https://www.cnblogs.com/yangai/p/9724657.html )

  **@keyup.enter.native** ：

一般监听组件：

```vue
 <input v-on:keyup.enter="submit">
 <input @keyup.enter="submit"> 
```

再封装的组件中绑定事件（如element）：

```vue
<el-input v-model="account" placeholder="请输入账号" @keyup.enter.native="search()">
</el-input>
```

**@click.native.prevent**

1.在封装好的组件上使用，所以要加上.native才能click

2.prevent就相当于**event.preventDefault()**

preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）

### 1.2 keep-alive

作用：保持组件状态。

参考： [官网](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%9C%A8%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-keep-alive)  [博客园](https://www.cnblogs.com/yf-html/p/9353627.html)

## 5 vue-cli

[官网](https://cli.vuejs.org/zh/guide/)  

### 5.1 环境搭建

#### 1 全局安装 vue-cli

```bash
npm install -g @vue/cli
```

### 2 进入目录，创建项目

参考：[vue cli4.0 快速搭建项目详解](https://www.cnblogs.com/sese/p/11712275.html)

```
vue create demo
```

![](D:\doc\images\vue-create-2.png)
>( ) Babel //转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。 
>( ) TypeScript// TypeScript是一个JavaScript（后缀.js）的超集（后缀.ts）包含并扩展了 JavaScript 的语法，需要被编译输出为 JavaScript在浏览器运行
>( ) Progressive Web App (PWA) Support// 渐进式Web应用程序
>( ) Router // vue-router（vue路由）
>( ) Vuex // vuex（vue的状态管理模式）
>( ) CSS Pre-processors // CSS 预处理器（如：less、sass）
>( ) Linter / Formatter // 代码风格检查和格式化（如：ESlint）
>( ) Unit Testing // 单元测试（unit tests）
>( ) E2E Testing // e2e（end to end） 测试

## 6 vuex

参考： [官网](https://vuex.vuejs.org/zh/)

[vuex 参考](https://blog.csdn.net/x550392236/article/details/80668263?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161266393016780266267161%252522%25252C%252522scm%252522%25253A%25252220140713.130102334..%252522%25257D&request_id=161266393016780266267161&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-3-80668263.pc_search_result_before_js&utm_term=vuex)

[vueX 参考2](https://blog.csdn.net/qq_43363884/article/details/95948884?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)



| 核心概念 | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| State    | 存储状态（变量）                                             |
| Getter   | 对数据获取之前的再次编译，可以理解为state的计算属性。<br />我们在组件中使用 $sotre.getters.fun() |
| Mutation | 修改状态，并且是同步的。在组件中使用$store.commit('',params)。<br />这个和我们组件中的自定义事件类似。 |
| Action   | 提交“状态修改”，异步操作。在组件中使用是$store.dispath('')   |
| Modile   | store的子模块，为了开发大型项目，方便状态管理而使用的。<br />这里我们就不解释了，用起来和上面的一样。 |



## 7 vue-router

参考资料： [源码](https://github.com/vuejs/vue-router) 、 [官网文档]( https://router.vuejs.org/zh/ )  、[知乎：【源码拾遗】从vue-router看前端路由的两种实现](https://zhuanlan.zhihu.com/p/27588422) 、 [CSDN:vue之router-view组件的使用](https://blog.csdn.net/luoyu6/article/details/80098145?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param)

**“更新视图但不重新请求页面”**是前端路由原理的核心之一，目前在浏览器环境中这一功能的实现主要有两种方式：

1 利用URL中的hash（“#”）

2 利用History interface在 HTML5中新增的方法

### 7.1 源码目录

![](D:\doc\images\vue-router-src目录.png)

### 7.2 router-link传递参数并获取

跳转链接：

```html
<router-link :to="{path:'libraryDetail/', query:{library_id:data.library_id}}">
```

获取参数：

```javascript
library_id = this.$route.query.library_id;
```

 

## 10 vue -V 命令不可用

全局安装vue cli 后提示vue : 无法加载文件 C:\Users\xxx\AppData\Roaming\npm\vue.ps1。

**解决方案：**

1.以管理员身份运行PowerShell
2.执行：get-ExecutionPolicy，回复Restricted，表示状态是禁止的
3.执行：set-ExecutionPolicy RemoteSigned
4.选择Y