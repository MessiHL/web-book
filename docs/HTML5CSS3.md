#                                 HTML5和CSS3

## 1 HTML5

### 1.1 盒子模型

在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框（border），元素的外边距（margin）四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域或区域。4个部分一起构成了css中元素的盒模型。

### 1.2 行内元素、块级元素、空元素

行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote
空元素：即没有内容的HTML元素，例如：br、meta、hr、link、input、img

### 1.3 src 与href的区别

href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。

src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

### 1.4 px 与 em

px和em都是长度单位，区别是，px的值是固定的，指定是多少就是多少，计算比较容易。em得值是相对的，em会继承父级元素的字体大小。假设浏览器的默认字体高都是16px，所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em；

### 1.5 各个浏览器内核

| 浏览器  | 内核                                                    |
| ------- | ------------------------------------------------------- |
| IE      | trident内核                                             |
| Firefox | gecko内核                                               |
| Safari  | webkit内核                                              |
| Opera   | 以前是presto内核，Opera现已改用Google Chrome的Blink内核 |
| Chrome  | Blink(基于webkit，Google与Opera Software共同开发)       |

### 1.6 HTML5新增标签

![](D:\doc\images\h5新标签1.png)



<img src="D:\doc\images\input.png"/>

<img src="D:\doc\images\attr.png"/>

### 1.7 meta

参考： [meta-w3c](https://www.w3school.com.cn/tags/tag_meta.asp)  [meta-博客园](https://www.cnblogs.com/wanghuilt/archive/2012/12/23/2830073.html)

```html
<!-- keywords用来告诉搜索引擎你网页的关键字是什么 -->
    <meta name ="keywords" content="science, education,culture,politics,ecnomics，relationships, entertaiment, human">
    <!-- 网站内容描述。用来告诉搜索引擎你的网站主要内容 -->
    <meta name="description" content="This page is about the meaning of science, education,culture.">
    <!-- 
        robots用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。
        content的参数有all,none,index,noindex,follow,nofollow。默认是all。
     -->
    <meta name="robots" content="none">


    <!-- 
        http-equiv顾名思义，类似于HTTP的头部协议，它回应给浏览器一些有用的信息，
		以帮助正确和精确地显示网页内容。
        与之对应的属性值为content，content中的内容其实就是各个参数的变量值 
    -->

    <!-- 强制页面在当前窗口以独立页面显示,用来防止别人在框架里调用自己的页面 -->
    <meta http-equiv="Window-target" content="_top">
    <!-- 设定页面使用的字符集 -->
    <meta http-equiv="content-Type" content="text/html; charset=utf-8">
```

百度首页的meta:

```html
    <!-- 百度首页的meta -->
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- 
        浏览器向web服务器发送请求的时候，一般会带上Referer，
        告诉服务器我是从哪个页面链接过来的，服务器藉此可以获得一些信息用于处理。
        比如从我主页上链接到一个朋友那里，
        他的服务器就能够从HTTP Referer中统计出每天有多少用户点击我主页上的链接访问他的网站；
    -->
    <meta content="always" name="referrer">
    <meta name="theme-color" content="#2932e1">
    <meta name="description" content="全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。">

```

天猫tmall.com的meta:

```html
<meta charset="utf-8"/>
<meta name="renderer" content="webkit"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>

<meta name="spm-id" content="875.7931836/B"/>

<meta name="format-detection" content="telephone=no">
<meta name="format-detection" content="date=no">
<meta name="format-detection" content="address=no">
<meta name="keywords" content="商城,网上购物,网购,进口食品,美容护理,母婴玩具,家用电器,手机数码,家居生活,服饰内衣,营养保健,钟表珠宝,饰品箱包,汽车生活,图书音像,礼品卡"/>
<meta name="description" content="天猫，中国线上购物的地标网站，亚洲超大的综合性购物平台，拥有10万多品牌商家。每日发布大量国内外商品！正品网购，上天猫！天猫千万大牌正品,品类全，一站购，支付安全，退换无忧！理想生活上天猫!"/>

<meta property="og:title" content="天猫">
<meta property="og:type" content="website">
<meta property="og:url" content=" https://www.tmall.com/">
<meta property="og:image" content=" https://img.alicdn.com/tfs/TB1MaLKRXXXXXaWXFXXXXXXXXXX-480-260.png">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
```

jd的meta

```html
    <meta charset="utf8" version='1'/>
    <title>京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"/>
    <meta name="description"  content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!"/>
    <meta name="Keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="renderer" content="webkit"/>
```

腾讯网qq.com的meta:

```html
<meta charset="gb2312">
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<!-- 这个代码是百度站长平bai台验证网站归属权的验du证代码 -->
<meta name="baidu-site-verification" content="cNitg6enc2" />
<meta name="baidu_union_verify" content="4508fc7dced37cf569c36f88135276d2">

<meta name="theme-color" content="#FFF" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="format-detection" content="telephone=no">
<meta content="资讯,新闻,财经,房产,视频,NBA,科技,腾讯网,腾讯,QQ,Tencent" name="Keywords">
<meta name="description" content="腾讯网从2003年创立至今，已经成为集新闻信息，区域垂直生活服务、社会化媒体资讯和产品为一体的互联网媒体平台。腾讯网下设新闻、科技、财经、娱乐、体育、汽车、时尚等多个频道，充分满足用户对不同类型资讯的需求。同时专注不同领域内容，打造精品栏目，并顺应技术发展趋势，推出网络直播等创新形式，改变了用户获取资讯的方式和习惯。" />
```

### 1.8 web存储

参考： [w3c-web存储](https://www.w3school.com.cn/html5/html_5_webstorage.asp)

HTML5 提供了两种在客户端存储数据的新方法：

- localStorage - 没有时间限制的数据存储
- sessionStorage - 针对一个 session 的数据存储。当用户关闭浏览器窗口后，数据会被删除。 

之前，这些都是由 cookie 完成的。但是 cookie 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高。

在 HTML5 中，数据不是由每个服务器请求传递的，而是只有在请求时使用数据。它使在不影响网站性能的情况下存储大量数据成为可能。

对于不同的网站，数据存储于不同的区域，并且一个网站只能访问其自身的数据。

HTML5 使用 JavaScript 来存储和访问数据。

## 2 CSS3

### 2.1 CSS书写顺序

​    --位置属性(position, top, right, z-index, display, float等)
​    --大小(width, height, padding, margin)
​    --文字系列(font, line-height, letter-spacing, color- text-align等)
​    --背景(background, border等)
​    --其他(animation, transition等)

font:font-style font-weight font-size/line-height  font-family

### 2.2 选择器

​    --后代选择器 (父级元素和子级元素使用空格隔开): div span    ul li
​    --子元素选择器 div>span
​    --属性选择器 

​			 [attribute^=value] 开头是 

​			[attribute$=value] 结尾是 

​			[attribute*=value] 包含

​    --伪类选择器 a:link  a:hover  input:focus

### 2.3 元素显示模式

​    -- 块元素(block)
​    -- 行内元素(inline)
​    -- 行内块元素(inline-block)

| block                                      | inline                       | inline-block       |
| ------------------------------------------ | ---------------------------- | ------------------ |
| 独占一行                                   | 一行显示多个元素             | 一行显示多个元素   |
| 高宽、内外边距可控                         | 高宽、内外边距不可控         | 高宽、内外边距可控 |
| 宽度默认为父元素的100%                     | 宽度为内容宽度               | 宽度为内容宽度     |
| 是一个容器及盒子，内部可以放行内和块级元素 | 只能容纳文本或是其他行内元素 |                    |
| div  p                                     | span a                       | img    input   td  |

注意事项

   --文字类标签内不能放置块级元素。如 <p><div></div></p>
   --链接里面不能再放链接 <a><a></a></a>

截图小工具 snipaste

文字垂直居中原理：
    -- 行高 =上方空隙+文字高度+下方空隙
    -- 行高 > 盒子高度：文字偏下
    -- 行高 = 盒子高度：文字居中  
    -- 行高 < 文字高度：文字偏上


background  颜色 图片路径 重复设置 固定设置  位置


CSS 三大特性
    -- 层叠性
    -- 继承性
    -- 优先级

### 2.4 盒子模型 

​    --外边距 margin 。 
​        -- 水平居中: 指定宽度 左右外边距设置为 auto
​        -- **外边距塌陷**（合并）问题的三种解决方案：
​            -- 1. 给父元素定义边框(border)
​            -- 2. 给父元素定义内边框(padding)
​            -- 2. 给父元素添加 overflow:hidden
​    --边距 border
​    --内边距 padding
​    --内容 content

### 2.5 网页布局的三种方式

​    -- 1.标准流（文档流，普通流）
​    -- 2.浮动
​    -- 2.定位

浮动内容 

     -- 1.能够说出为什么需要浮动
            -- 标准流没有办法做到的效果(如div左右各一个显示)，使用浮动可以实现
            -- 浮动最常用的场景就是让多个块级元素一行内显示
            -- 网页布局第一准则：多个块级纵向排列用标注流，多个块级元素横向排列找浮动
            -- 浮动的盒子只会影响后面的标准流，不会影响前面的标准流
    -- 2.能够说出浮动的排列特性
        -- 1. 浮动元素会脱离标准流，不再保留原来的位置
        -- 2. 浮动元素会一行内显示并且元素顶部对齐。如果父元素宽度不够浮动元素显示，浮动元素会另起一行
        -- 2. 浮动的元素会具有行内块元素的特性
    
    -- 2.能够说出3种最常见的布局方式
    -- 4.能够说出为什么需要清除浮动
        -- 父元素没有高度，子元素浮动了。这种情况会影响下方的布局
        -- 清除浮动，就是清除浮动元素脱离标准流造成的影响
    
    -- 5.能够写出至少2中清除浮动的方法
        -- 额外标签法。新添加的标签必须是块级元素，clear:both
        -- 父级添加overflow:hidden 属性。缺点：无法显示溢出的部分
        -- 父级after 伪元素； 
        -- 父级before、after 双伪元素
    
    -- 6.能够利用ps实现基本切图
    -- 7.能够利用ps插件实现切图
    -- 8.能够完成《学成在线》的页面布局



### 2.7 图片格式

| 格式 | 特点                                                         |
| ---- | ------------------------------------------------------------ |
| jpg  | 高清，色彩多，常用于产品类图片                               |
| png  | 结合了GIF和JPG的优点，如果制作背景透明图片，选择这种格式     |
| gif  | 最多存储256种颜色，但可以保存透明效果和动画效果，常用于小图片动画效果 |
| PSD  | PS专有格式，可直接复制上面的文字、图片、大小、间距等信息     |

### 2.8学成在线 案例

-- 1 目录
    -- LuyuanWeb
        -- images
        -- index.html
        -- style.css

-- 2 CSS属性书写顺序
    -- 1 布局定位属性 display position float clear visibility overflow
    -- 2 自身属性 width height margin border padding background
    -- 3 文本属性 color font text-decoration text-align vertical-align white-space break-word
    -- 4 其他属性（CSS3） content cursor border-radius box-shadow text-shadow background:linear-gradient

-- 3 知识点
    -- 1. 导航栏中的链接最好用li标签包裹，如果直接使用a，搜索引擎容易辨别为堆砌关键字，可能会影响网站排名
    -- 2. header中的 区域都要加浮动 float
    -- 2. 导航栏中的浮动应该加在 li 中，而不是 a 中
    -- 4. button 有默认边框
    -- 5. 行内块元素之间默认会有缝隙，可以使用float 清除
    -- 6. 图片 文字 垂直居中
    -- 7. subnav 中的右边箭头写法
    -- 8. “精品推荐” 一栏 竖线的写法
    -- 9. “精品推荐” 内容布局。宽度不够时怎么办？ ul 加宽
    -- 10. “精品推荐” 内容中 hot ，new 图片如何布局--使用定位知识

学成在线 案例 end





### 2.9 定位Position=定位模式+偏移量

| 定位模式 | 语义     | 说明                                                         |
| -------- | -------- | ------------------------------------------------------------ |
| static   | 静态定位 | 默认模式。按照标准流，没有偏移，很少使用                     |
| relative | 相对定位 | 1- 参照点：自身原来的位置<br />2- 原来的位置保留（带薪停职，占着茅坑不拉屎，霸道得很）<br />3- 主要用于限制绝对定位 |
| absolute | 绝对定位 | 1- 如果没有父元素或是父元素没有定位，则以浏览器为参照点<br />2-父元素有定位（相对、绝对、固定），则以最近一级带定位的元素为参考点<br />3-原来的位置不保留 |
| fixed    | 固定定位 | 1- 参照点：浏览器可视窗口<br />2- 固定在版心右侧 left: 50%; margin-left: 600px |
| sticky   | 粘性定位 | 包含相对定位和固定定位的特性（不通用）                       |

| 定位模式 | 是否脱标    | 偏移定位点     | 是否常用   |
| -------- | ----------- | -------------- | ---------- |
| static   | 否-占位置   | 不能使用偏移   | 否         |
| relative | 否-占位置   | 自身           | 是         |
| absolute | 是-不占位置 | 带有定位的父级 | 是         |
| fixed    | 是-不占位置 | 浏览器可视区   | 是         |
| sticky   | 否-不占位置 | 浏览器可视区   | 暂时不常用 |



偏移量

| 偏移量属性 | 示例         | 描述                               |
| ---------- | ------------ | ---------------------------------- |
| top        | top: 80px    | 顶端偏移量，相对父元素上边线距离   |
| bottom     | bottom: 80px | 底部偏移量，相对父元素下边线距离   |
| left       | left: 80px   | 左边偏移量，相对父元素左边线距离   |
| right      | right: 80px  | 右边端偏移量，相对父元素右边线距离 |



定位要点：
-- 子绝父相：
    -- 子元素不需要占有位置，使用绝对定位（轮播图中的左右切换按钮）；
    -- 父元素需要占有位置，需要相对定位（轮播图中的图片容器）。
-- 叠放顺序。 使用 z-index 控制。标准流和浮动没有这个属性
-- 绝对定位盒子居中
  -- 绝对定位的盒子不能通过 margin: auto 来实现水平居中，可以使用如下代码：

```css
{
    position:absolute;
    left: 50%;
    /* 盒子宽度的一半 */
    margin-left: -200px; 
    top: 50%;
    /* 盒子高度的一半 */
    margin-top: -100px;
    width: 400px;
    height: 200px;
    background-color:skyblue;
}
```

-- 特殊性。加了position：block，inline => inline-block
    -- 加了定位之后，行内元素可以直接设置宽和高    inline => inline-block
    -- 加了定位之后，块级元素的宽度会变成内容的宽度，不再独占一行  block => inline-block
    -- 绝对定位、固定定位会压住下面标准流的所有内容。浮动（float）则只会压住标准流，而不会压住其中的文字、图片。因为浮动最开始出现目的就是要实现文字围绕图片的效果

### 2.10 元素的显示/隐藏

-- display: none | block。 隐藏后，原来的位置不再占有

-- visibility:hidden | visible。隐藏后，原来的位置会保留

-- overflow:  hidden | visible | scroll | auto。 溢出的时候就隐藏，慎用

### 2.11 高级技巧

#### 2.11.1 精灵图

  将常用的，比较小的图片合在一张图片上。减少服务器请求次数

#### 2.11.2 CSS 三角

```css
{
    top: -20px;
    right: 10px;
    height: 0;
    width: 0;
    line-height: 0;
    font-size: 0;
    border: 10px solid transparent;
    border-bottom-color: blue;
}
```



#### 2.11.3 字体图标

    icomoon、iconfont
    体积小、本质是文字，方便修改，兼容性好
    复杂的图不适合用字体图标

#### 2.11.4 CSS 用户界面样式

1. 鼠标样式。cursor：pointer |  move | text | not-allowed 
2. 表单。取消轮廓线 outline : none；文本域禁止拖动 resize:none

#### 2.11.5 vertical-align 属性应用

  文本和行内块元素（表单、图片）对齐方式设置，在行内块元素中设置 vertical-align 属性值：

| 值       | 描述                                   |
| -------- | -------------------------------------- |
| baseline | 默认，元素放置在父元素的基线上         |
| top      | 把元素顶端与行中最高元素的顶端对齐     |
| middle   | 把元素放在父元素的中部                 |
| bottom   | 把元素的顶端与行中最低的元素的顶端对齐 |

运用：

1. 设置图片和文字垂直居中

2. 图片底部会有一个空白缝隙。原因是行内块元素会和文字的基线(baseline)对齐，有两种解决方案：

   2.1 给图片添加 vertical-align: middle | top | bottom 即可去除空隙 (推荐)

   2.2 把行内块元素改为块级元素。 inline-block=> block （不推荐，元素会独占一行，影响页面布局）

#### 2.11.6 溢出的文字省略号显示

```css
/* 单行文字溢出用省略号显示 */
{
    /* 强制文字不换行 */
    white-space: nowrap;
    /* 设置溢出部分隐藏 */
    overflow: hidden;
    /* 设置溢出部分显示方式为省略号 */
    text-overflow: ellipsis;
}

/* 
	多行文字溢出用省略号显示
	这种方式有较大的兼容性问题，适合于webkit浏览器或是移动端（大部分移动端是webkit内核）
*/
{
    overflow:hidden;
    text-overflow: ellipsis;
    /* 弹性伸缩盒子模型显示 */
    display:-webkit-box;
    /* 限制一个块级元素显示的文本行数 */
    -webkit-line-clamp:2;
    /* 设置或检索伸缩盒子对象的子元素的排列方式 */
    -webkit-box-orient:vertical;
}

```

#### 2.11.7 常见布局技巧

1. margin 负值的运用

         	2. 文字围绕浮动元素
                   	2. 行内块
                	4. css三角强化

```css
{
    width: 0;
    height: 0;
    /* 调大上边框 */
    border-top: 100px solid transparent;
    border-right: 50px solid skyblue;
    /* 左边和下面宽度设置为0 */
    border-bottom: 0 solid #243;
    border-left: 0 solid #573;
}

/*简写*/
{
    width: 0;
    height: 0;
    border-color: transparent skyblue transparent transparent;
    border-style: solid;
    border-width:100px 50px 0 0;
}
```

### 2.12 选择器

#### <img src="D:\doc\images\nth.png"/>

<img src="D:\doc\images\nth2.png"/>

<img src="D:\doc\images\nth3.png"/>

### 2.13 伪元素

<img src="D:\doc\images\nth4.png"/>

### 2.14 盒子模型border-box

| 模型                         | 大小                 |
| ---------------------------- | -------------------- |
| box-sizing: **content-box**; | width+padding+border |
| box-sizing: **border-box**;  | width                |

### 2.15 过渡

<img src="D:\doc\images\transition.png"/>

<img src="D:\doc\images\transition2.png"/>

```css
.box{
    width: 200px;
    height: 200px;
    background-color: skyblue;
    transition:  all 0.5s;
}

.box:hover{
    width: 400px;
    height: 400px;
    background-color: #572;
}
```

### 2.16  style中的属性

1.scoped属性，是用来专门用于标签元素内部的，它是通过CSS的属性选择器实现的。

2.lang属性，普通的style标签支持普通的样式，如果想要启用scss或less ,需要为style元素设置lang属性



## 3 常用样式集

### 2.1 时间线-横向

![](D:\doc\images\timeline-h.png)

```html
<div class="container">
    <ul class="time-horizontal">
        <li><b></b>成立</li>
        <li><b></b>合作</li>
        <li><b></b>发展</li>
        <li><b></b>共赢</li>
    </ul>
</div>
```

```css
/*横向时间轴*/
.time-horizontal {
    list-style-type: none;
    padding: 0px;
    margin: 100px auto;
}

.time-horizontal li {
    float: left;
    position: relative;
    text-align: center;
    width: 100px;
    padding-top: 20px;
    border-top: 2px solid #ccc;
}

.time-horizontal li b:before {
    content: '';
    position: absolute;
    top: -20px;
    width: 30px;
    height: 30px;
    border: 2px solid #ccc;
    border-radius: 17px;
    background: #ccc;
}

.time-horizontal .active{
    border-top: 2px solid #409eff;
}

.time-horizontal .active b:before {
    content: '';
    border: 2px solid #409eff;
    background: #409eff;
}
```

### 2.2 水平垂直居中

```html
<div class="wrapper">         
    <div class="content"></div>     
</div>    
```

```css
// css:
.wrapper {
    position: relative;
    width: 500px;
    height: 500px;
    background-color: #ddd;
}
.content{
    background-color:#6699FF;
    width:200px;
    height:200px;
    position: absolute;        //父元素需要相对定位
    top: 50%;
    left: 50%;
    margin-top:-100px ;   //二分之一的height，width
    margin-left: -100px;
} 
```
