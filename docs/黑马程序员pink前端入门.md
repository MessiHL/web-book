# 黑马程序员前端入门课程学习笔记

### 1 网站制作流程

​	与客户沟通 => 签订合同 => 预付定金 => 原型图、psd图(美工) => 初稿审核 => 前后端开发 => 测试验收 => 上线培训 => 后期维护

### 2 品优购项目规划

​	页面：首页、列表页、注册页

​    技术：模块化开发，

   

### 3 品优购首页

#### 3.1 favicon

制作png图片 => 转换成ico 文件 => 将ico图片放入项目根目录 => index页面引入图标

#### 3.2 简单的SEO 优化

| 标签        | 说明                                                         | 案例                                                         |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title       | 具有不可替代性，是搜索引擎了解网页的入口和对网页主题归属的最佳判断<br />建议：**网站名-网站介绍**（尽量不要超过30个汉字） | 1- 京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！<br />2- 小米商城 - 小米10 Pro、Redmi 10X、小米MIX Alpha，小米电视官方网站 |
| description | 简要说明我们的网站主要是做什么的。                           | <meta name="description" content="小米官网直营小米公司旗下所有产品，包括小米手机系列小米10 Pro 、小米9、小米MIX Alpha，Redmi 红米系列Redmi 10X、Redmi K30，小米电视、笔记本、米家智能家居等，同时提供小米客户服务及售后支持."/> |
| keywords    | 关键字                                                       | <meta name="description" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东."/> |

<img src="D:\doc\images\seo.png"/>

#### 3.3 常见的模块类名

| 名称       | 说明     | 名称     | 说明                  | 名称             | 说明           |
| ---------- | -------- | -------- | --------------------- | ---------------- | -------------- |
| 快捷导航栏 | shortcut | 热点词   | hotwords              | 页面底部         | footer         |
| 头部       | header   | 导航     | nav                   | 页面底部服务模块 | mode_service   |
| 标志       | logo     | 导航左侧 | dropdown 包含 .dd .tt | 页面底部帮助模块 | mode_help      |
| 购物车     | shopcar  | 导航右侧 | navtems               | 页面底部版权模块 | mode_copyright |
| 搜索       | search   |          |                       |                  |                |

#### 3.4 网页 制作

布局：

<img src="D:\doc\images\y-header.png"/>

1.  logo SEO 优化：

<img src="D:\doc\images\y-logo.png"/>

2. search 边框：

<img src="D:\doc\images\y-search.png"/>



3. 底部 制作：

<img src="D:\doc\images\y-footer.png"/>



4. main 

   <img src="D:\doc\images\y-main.png"/>

















