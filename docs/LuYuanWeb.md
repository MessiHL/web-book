

# luyuanweb

## 1 项目概述

title：路园全栈中心

slogan:  从模仿到超越

tip：记录全栈各个阶段的课程链接、笔记、心得体会等；展示生平所学，并说明之

前端技术栈： html5 / sass / ES6  / node.js / webpack4.x / vue2.x  / element-ui / git

后端技术栈：mysql / Java

版本：PC 、 小程序、APP

## 2 项目搭建

### 2.1 环境配置

 	详细步骤参考 [Webpack 4 教程：从零配置到生产发布（2018）](https://www.html.cn/archives/9436)， [webpack4.x最详细入门讲解](https://www.cnblogs.com/BetterMan-/p/9867642.html)

| 步骤             | 说明                                                   |
| ---------------- | ------------------------------------------------------ |
| 初始化项目       | npm init                                               |
| webpack环境安装  | webpack  webpack-cli  webpack-dev-server               |
| css安装预配置    | style-loader  css-loader ;      sass-loader  node-sass |
| babel 安装与配置 | babel-loader  babel-core  babel-preset                 |
| 文件/图片处理    | url-loader  file-loader                                |
| vue环境配置      | vue vue-loader  vue-template-complier                  |
|                  |                                                        |
|                  |                                                        |
|                  |                                                        |



#### 2.1.1 项目初始化

```
npm init
```

#### 2.1.2 安装webpack4

```javascript
npm install webpack --save-dev
npm install webpack-cli  --save-dev
// 本地服务
npm install webpack-dev-server -D
```

文件目录设置

--luyuanweb -- 根目录

​	-- src

​		-- index.js

​	-- dist

​		-- index.html

配置 webpack.config.js 

```json
const path = require('path');
module.exports = {
    entry: path.join(__dirname, "/src/index.js"), // 入口文件
    output: {
        path: path.join( __dirname, "/dist"), //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./dist",   // 本地服务器所加载文件的目录
        port: "1234",  // 设置端口号为8888
        inline: true,  // 文件修改后实时刷新
        historyApiFallback: true, //设置为true，所有的跳转将指向index.html
        hot: true     //热加载
    },
}
```

package.json 中添加启动命令

```javascript
"scripts": {
    "dev": "webpack-dev-server --mode development --open",  //  本地服务器启动开发模式
    "build": "webpack --mode production", // 生产模式
  },
```

运行服务器

```javascript
npm run dev
	or
npm run build
```



#### 2.1.3 Loaders

webpack.config.js  下配置

| 配置             | 说明                                                         |
| ---------------- | ------------------------------------------------------------ |
| test             | 一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）    |
| loader           | loader的名称（必须）                                         |
| includer/exclude | 手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选） |
| options          | 为loaders提供额外的设置选项                                  |

#### 2.1.4 样式

安装

```javascript
// 配置css
npm install style-loader  css-loader --save-dev
// 配置sass
npm install sass-loader node-sass --save-dev
```

webpack.config.js

```json
module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(scss|sass)$/,   // 正则匹配以.scss和.sass结尾的文件
                use: ['style-loader', 'css-loader', 'sass-loader']  // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
            }
        ]
    }
```



#### 2.1.5 Babel

babel7.x  安装与简单配置：

```javascript
npm install --save-dev  babel-loader@7 babel-core bebel-preset-es2015
// babel-preset-es2015: ES6转化到ES5
// 此安装无需在webpack.config.js 中配置，无需在.babelrc 中配置
// 但针对复杂的运用，还是需要单独配置
```

#### 2.1.6 图片/文件处理

```javascript
// 安装到开发环境
npm install --save-dev url-loader
// 处理文件（大图等）
npm install --save-dev file-loader
```

webpack.config.js中 rules下配置

```JSON
{
    test: /\.(png|jpg|jpeg|gif)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                // 8196 => 8KB
                // 使用的图片如果小于此配置，图片会被编译成base64
                // 图片大于此配置，则使用 file-loader
                limit: 8196,
                // 路径及名称配置：路径：dist(默认)/images; 名字：原文件名+hash值前八位+后缀名
                name:'images/[name][hash:8].[ext]'
            }
        }
    ]
}
```

#### 2.1.7 vue

参考[webpack4自己动手配置vue](https://www.jianshu.com/p/c24e27d896d0)。   安装(注意 安装方式  --save  和 --save-dev）：

```javascript
npm install vue --save
npm install vue-loader  --save-dev
npm install vue-template-compiler --save-dev
```

webpack.config.js配置：

```javascript
var htmlWebpackPlugin = require('html-webpack-plugin');//引入html模板模块
//webpack4配置需要包含VueLoaderPlugin,
//在输出里面配置plugins:{new VueLoaderPlugin()}
//否则会报错
 const VueLoaderPlugin = require('vue-loader/lib/plugin');
 module.exports = {
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader'],
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"首页",
            template:'./index.html'
        }),
        new VueLoaderPlugin()
    ]
 }
```

./index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        
    </div>
</body>
</html>
```

./src/App.vue 文件

```vue
<template>
  <div>
    <h1>hellow word</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'welcome Vue'
            }
        }
    }
</script>
<style>
  body{
    background-color: #ccc;
  }
```

入口文件 ./index.js

```javascript
import Vue from "vue"; //引入vue文件
import App from "./src/App.vue" // 引入模板文件

//创建vue实例并且将其挂在到app节点上
new Vue({ 
    el:'#app',
    render:(h)=>h(App)
})
```

### 2.2 目录



## 3 项目开发



## 10 ES6

参考资料：  [阮一峰ES6 入门教程](https://es6.ruanyifeng.com/)

### 10.1 var 、 let、 const

| 特性           | 说明                                                         | 示例  |
| -------------- | ------------------------------------------------------------ | ----- |
| let作用域      | let所声明的变量，只在let命令所在的代码块内有效               | 示例1 |
| 变量提升       | let不存在变量提升。<br />var`命令会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined |       |
| 暂时性死区     | 只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，<br />只有等到声明变量的那一行代码出现，才可以获取和使用该变量 |       |
| 重复声明       | `let`不允许在相同作用域内，重复声明同一个变量                | 示例3 |
| const本质      | 变量值可以改，但变量指向的那个内存地址所保存的数据不得改动。<br />`const`只能保证这个指针是固定的（即总是指向另一个固定的地址）<br />数值、字符串、布尔值：值就保存在变量指向的那个内存地址<br />对象和数组：变量指向的内存地址，保存的只是一个指向实际数据的指针 |       |
| const/let 区别 | JavaScript 编译器会对`const`进行优化，所以多使用`const`，<br />有利于提高程序的运行效率，也就是说`let`和`const`的本质区别，<br />其实是编译器内部的处理不同。 |       |
|                |                                                              |       |
|                |                                                              |       |
|                |                                                              |       |

```javascript
/**
 * 示例1：let作用域
 */
{
    var a = 10;
    let b = 20;
}
// a = 10
console.log(a);
// b is not defined
console.log(b);
```

```javascript
/**
 * 示例3：重复声明
 */

// 报错
function func1() {
    let a = 10;
    var a = 1;
}

// 报错
function func2() {
    let a = 10;
    let a = 1;
}

// 不报错
function func3(){
    var a = 1;
    var a = 2
}
```



ES6 中，const 声明的常量类似于**指针**，它指向某个引用，也就是说这个「常量」并非一成不变的:

```javascript
{
    const ARR = [1,2];
    ARR.push(3);
    // [ 1, 2, 3 ]
    console.log(ARR);
}
```



### 10.2 解构赋值

按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。

**模式匹配写法**：只要等号两边的模式相同，左边的变量就会被赋予对应的值。

```javascript
// 模式匹配
let [a,b,c] = [1,2,3]; // a=1,b=2,c=3

let[foo,[[bar],baz]] = [10,[[20],30]]; // foo=10,bar=20,baz=30

let[,,t] = [,,4]; // t = 4

```

对象的解构赋值。

```javascript
let {name,age,sex} = {name:'tom',age:50,sex:'男'};
console.log(name,',',age,',',sex);
```

对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

```javascript
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
```

字符串解构赋值。字符串会被当做类似于数组的对象。

```javascript
const [a,b,c,d,e] = "hello";
console.log(a,b,c,d,e);

let {length:len} = "vue";
console.log(len);
```

函数参数的结构解析

```javascript
//函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。
//对于函数内部的代码来说，它们能感受到的参数就是x和y
function add ([x,y]){
    return x+y;
}
console.log(add([10,20])); // 30

function info({name,age}){
    console.log(name,age);
}

info({name:'tom',age:30}); // tom 30
```

提起JSON格式数据，如果函数返回的数据格式是JSON，会很方便：

```
let data = {
    name:'jim',
    age:20
}

let {name,age} = data;
console.log(name,age); // jim 20
```

### 10.3 数值扩展

 JavaScript 采用 IEEE 754 标准，数值存储为64位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）。如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，这种情况下，`Number.isInteger`可能会误判。

```javascript
// `Number.isInteger`的参数明明不是整数，但是会返回`true`。
// 原因就是这个小数的精度达到了小数点后16个十进制位，转成二进制位超过了53个二进制位，
// 导致最后的那个`2`被丢弃了。
Number.isInteger(3.0000000000000002); // true
Number.isInteger(30000000000000.002); // true
Number.isInteger(30000000000000.02); // false。十进制数不到16位，不会被丢弃
```

### 10.4 函数

箭头函数。ES6 允许使用“箭头”（`=>`）定义函数。

```javascript
// 无参数或是有多个参数。使用（）代表参数部分
var f = () => 5;
// 等同于:
var  f = function(){
    return 5;
}

var sum = (sum1,sum2) => sum1 + sum2;
// 等同于
var sum = function(sum1,sum2){
    return sum1 + sum2;
}

// 只有一个参数时还可以简写：
var f = v => v;
//等价于：
var f = function(v){
    return v;
}


```

箭头函数可以简化回调函数

```javascript
// 正常函数写法
[1,2,3].map(function (x) {
  return x * x;
});

// 箭头函数
[1,2,3].map=(x=>x * x);


/***********************************************************************************/

// 正常函数写法
var result = values.sort(function (a, b) {
  return a - b;
});

// 箭头函数
var result = values.sort((a,b)=>a-b);

```

箭头函数有几个使用注意点。

（1）函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。

（3）不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数。

上面四点中，第一点尤其值得注意。`this`对象的指向是可变的，但是在箭头函数中，它是固定的。

```javascript
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42
```

上面代码中，`setTimeout`的参数是一个箭头函数，这个箭头函数的定义生效是在`foo`函数生成时，而它的真正执行要等到 100 毫秒后。如果是普通函数，执行时`this`应该指向全局对象`window`，这时应该输出`21`。但是，**箭头函数导致`this`总是指向函数定义生效时所在的对象**（本例是`{id: 42}`），所以输出的是`42`。



尾递归。

尾调用（Tail Call）是函数式编程的一个重要概念，就是指某个函数的最后一步是调用另一个函数。函数调用自身，称为递归。如果尾调用自身，就称为尾递归。递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。

```javascript
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5) // 120
```

上面代码是一个阶乘函数，计算`n`的阶乘，最多需要保存`n`个调用记录，复杂度 O(n) 。

如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。

```javascript
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) // 120
```



非尾递归的 Fibonacci 数列实现如下。

```javascript
function Fibonacci (n) {
  if ( n <= 1 ) {return 1};

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

Fibonacci(10) // 89
Fibonacci(100) // 超时
Fibonacci(500) // 超时
```

尾递归优化过的 Fibonacci 数列实现如下。

```javascript
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}

Fibonacci2(100) // 573147844013817200000
Fibonacci2(1000) // 7.0330367711422765e+208
Fibonacci2(10000) // Infinity
```

由此可见，“尾调用优化”对递归操作意义重大，所以一些函数式编程语言将其写入了语言规格。ES6 亦是如此，第一次明确规定，所有 ECMAScript 的实现，都必须部署“尾调用优化”。这就是说，ES6 中只要使用尾递归，就不会发生栈溢出（或者层层递归造成的超时），相对节省内存。

### 10.5 数组

扩展运算符（spread）是三个点（`...`）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

```
console.log(1,...[2,3],4); // 1,2,3,4
```

复制数组

```
// 原数组
const a1 = [1,2,3];
// 复制方法1
const a2 = [...a1];
// 复制方法2
const [...a3] = a1;
```

### 10.6 对象

```javascript
// 属性名 => 变量名, 属性值 => 变量值
function f(name,age){
    return {name,age};
}

var info = f('tom',20);
console.log(info); //  { name:'tom',age:20 }
```



### 10.7 symbol

ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：`undefined`、`null`、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

### 10.8  Set

它类似于数组，但是成员的值都是唯一的，没有重复的值。`Set`本身是一个构造函数，用来生成 Set 数据结构。

```javascript
// Set结构不会添加重复的值。
const s = new Set();
[1,2,3,4,4,5,5,6,6,7].forEach(x=>s.add(x));
console.log(s); // Set { 1, 2, 3, 4, 5, 6, 7 }
for(let i of s){
    console.log(i);
}

// 数组去重  [...new Set(array)]
console.log([...new Set([1,1,2,2,3,3])]) // [1,2,3]
// 字符串去重
console.log([...new Set('abbcddd')].join(''));
```



### 10.9 Map

​    Map类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“**字符串—值**”的对应，Map 结构提供了“**值—值**”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

### 10.10 编程风格

1. let 取代 var
2. 全局变量 const 优先于let 使用。
3. 静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。
4. 使用数组成员对变量赋值时，优先使用解构赋值。
5. 函数的参数如果是对象的成员，优先使用解构赋值。
6. 如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。
7. 单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。
8. 使用扩展运算符（...）拷贝数组。
9. 使用 Array.from 方法，将类似数组的对象转为数组。
10. 立即执行函数可以写成箭头函数的形式。
11. 那些使用匿名函数当作参数的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。
12. 注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要`key: value`的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。
13. `import`取代`require`；使用`export`取代`module.exports`。
14. 如果模块默认输出一个函数，函数名的首字母应该小写；如果模块默认输出一个对象，对象名的首字母应该大写。

### 10.11 Promise

```javascript
// 异步编程
// Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
// 它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    // resolve: 将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
    // 在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
    resolve(value);
  } else {
    // reject: 将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），
    // 在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
    reject(error);
  }
});
```















































## 11 Scss



## 12 wabpack4

参考资料：[webpack中文网](https://www.webpackjs.com/)

### 12.1 webpack.config.js

```javascript
/**
 * entry: 
 *  入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。
 *  进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
 *  每个依赖项随即被处理，最后输出到称之为 bundles 的文件中。
 * 
 * output：
 *   该属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。
 *   基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。
 * 
 * loader:
 *   让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。
 *   loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，
 *   对它们进行处理。本质上，webpack loader 将所有类型的文件，
 *   转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。
 *   在 webpack 的配置中 loader 有两个目标
 *     1- test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
 *     2- use 属性，表示进行转换时，应该使用哪个 loader。
 * plugins:
 *   插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。
 *   插件接口功能极其强大，可以用来处理各种各样的任务。 
 * 
 *   想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。
 *   多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，
 *   这时需要通过使用 new 操作符来创建它的一个实例。
 *
 *  mode:
 *   通过选择 development 或 production 之中的一个，来设置 mode 参数，
 *   你可以启用相应模式下的 webpack 内置的优化
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
module.exports = {
    mode: 'production',
    entry:'./src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};
```

### 12.2 mode

```javascript
module.exports = {
  mode: 'production'
};
```



| 模式        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| development | 会将 `process.env.NODE_ENV` 的值设为 `development`。<br />启用 `NamedChunksPlugin` 和 `NamedModulesPlugin`。 |
| production  | 会将 `process.env.NODE_ENV` 的值设为 `production`。启用 `FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`, `ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin`, `OccurrenceOrderPlugin`, `SideEffectsFlagPlugin` 和 `UglifyJsPlugin`. |

```diff
// webpack.development.config.js
module.exports = {
+ mode: 'development'
- plugins: [
-   new webpack.NamedModulesPlugin(),
-   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
- ]
}
```

```diff
// webpack.production.config.js
module.exports = {
+  mode: 'production',
-  plugins: [
-    new UglifyJsPlugin(/* ... */),
-    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
-    new webpack.optimize.ModuleConcatenationPlugin(),
-    new webpack.NoEmitOnErrorsPlugin()
-  ]
}
```

### 12.3 loader

​        loader 用于对模块的源代码进行转换。loader 可以使你在 `import` 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 `import` CSS文件！

特性：

- loader 支持链式传递。能够对资源使用流水线(pipeline)。一组链式的 loader 将按照相反的顺序执行。loader 链中的第一个 loader 返回值给下一个 loader。在最后一个 loader，返回 webpack 所预期的 JavaScript。
- loader 可以是同步的，也可以是异步的。
- loader 运行在 Node.js 中，并且能够执行任何可能的操作。
- loader 接收查询参数。用于对 loader 传递配置。
- loader 也能够使用 `options` 对象进行配置。
- 除了使用 `package.json` 常见的 `main` 属性，还可以将普通的 npm 模块导出为 loader，做法是在 `package.json` 里定义一个 `loader` 字段。
- 插件(plugin)可以为 loader 带来更多特性。
- loader 能够产生额外的任意文件。

### 12.4 插件Plugins

插件目的在于解决 [loader](https://www.webpackjs.com/concepts/loaders)无法实现的**其他事**。由于插件可以携带参数/选项，你必须在 webpack 配置中，向 `plugins` 属性传入 `new` 实例。



作者：_littleTank_
链接：https://www.jianshu.com/p/19d199f93045
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



## 13 package.json

参考资料：  [npm-package.json](https://docs.npmjs.com/configuring-npm/package-json.html)   [package.json](https://npmjs.org/doc/files/package.json.html)

```javascript
{
    "name": "asset_manage",  //项目名称
    "version": "0.1.0",  //项目版本
    "author":"作者"
    "description"："项目描述",
    "scripts": {   //npm快捷执行命令脚本配置
        
    },
    "dependencies": {  //生产环境依赖
        
    },
    "devDependencies":{ //开发环境依赖
 
    },
    "eslintConfig": {  //eslint配置
        
    },
    "browserslist": [  //项目浏览器兼容配置
        "> 1%",
        "last 2 versions",
        "not ie <= 8"
    ]
}
```

## 14 前端路由

### 14.1对比

​		前端路由，顾名思义就是一个**前端不同页面的状态管理器**,可以不向后台发送请求而直接通过前端技术实现多个页面的效果

| 对比        | Hash                                   | History API                                    |
| ----------- | -------------------------------------- | ---------------------------------------------- |
| url字符串   | 丑，有#                                | 正常                                           |
| 命名限制    | 通常只能在同一个document下改变         | url地址可以自定义，只要同一个域名下就可以      |
| url地址变更 | 会改变                                 | 可以变也可以不变                               |
| 状态保存    | 无内置方法，需要另行保存页面的状态信息 | 将页面信息压如历史栈，可以随时附带自定义的信息 |
| 参数长度    | 收到url总长度的限制                    | 将页面压如历史栈，可以附带自定义信息           |
| 实用性      | 可以直接使用                           | 通常服务端需要修改代码来配合使用               |
| 兼容性      | IE8 以上                               | IE10以上                                       |

### 14.2 hash 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>路由原理</title>
</head>
<body>
    <h1>路由原理</h1>
    <div class="main">
        <p>前端三驾马车</p>
        <ul>
            <li><a href="#angular">angular</a></li>
            <li><a href="#react">react</a></li>
            <li><a href="#vue">vue</a></li>
        </ul>
    </div>
</body>
<script>
    window.onload = function(){
        window.onhashchange = function(opt){
            console.log('hash has changed to :',location.hash);
            console.log(opt);
            console.log(location);
        }
    }
</script>
</html>
```

### 14.3 history API 示例

- **history.forward()**; //在历史记录中前进一步

- **history.back()**; //在历史记录中后退一步

- **history.go(n)**: //在历史记录中跳转n步骤，n=0为刷新本页,n=-1为后退一页。

  H5 新增：

- **history.pushState(data[,title][,url])**;//向历史记录中追加一条记录

- **history.replaceState(data[,title][,url])**;//替换当前页在历史记录中的信息。

- **history.state**;//是一个属性，可以得到当前页的state信息。

- **window.onpopstate**;//是一个事件，在点击浏览器后退按钮或js调用forward()、back()、go()时触发。监听函数中可传入一个event对象，event.state即为通过pushState()或replaceState()方法传入的data参数。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>路由原理</title>
</head>

<body>
    <h1>路由原理</h1>
    <div class="main">
        <p>前端三驾马车</p>
        <ul id="list">
            <li>angular</li>
            <li>react</li>
            <li>vue</li>
        </ul>
        <div id="panel"></div>
    </div>
</body>
<script>
    window.onpopstate = function (event) {
        console.log(event);
    }

    window.onhashchange = function (event) {
        console.log('catch hashChanged event');
    }

    document.querySelector('#list').addEventListener('click', function (event) {
        console.log(location);
        if (event.target.nodeName == 'LI') {
            var content = event.target.innerHTML;
            var _newState = {
                url: location.origin + '/' + content,
                title: document.title,
                state: content
            };
            // chrome 浏览器会报错
            window.history.pushState(_newState, '', '/' + content);
            console.log('you has change the router to:', content);
        }

    })
</script>

</html>
```



## 15 node.js

### 15.1 process 进程

process 对象是一个 global （全局变量），提供有关信息，控制当前 Node.js 进程。作为一个对象，它对于Node.js 应用程序始终是可用的，故无需使用 require()。process（进程）其实就是存在nodejs中的一个全局变量，所有模块都可以调用。

`process.env` 属性会返回包含用户环境的对象。

## 16 HTTP

### 16.1 请求方法

| 方法    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| GET     | 获取。请求获取Request-URI所标识的资源                        |
| POST    | 提交。在Request-URI所标识的资源后附加新的数据                |
| HEAD    | 获取。请求获取由Request-URI所标识的资源的响应消息报头。类似于GET, 但是不返回body信息，用于检查对象是否存在，以及得到对象的元数据 |
| PUT     | 更新。请求服务器存储一个资源，并用Request-URI作为其标识      |
| DELETE  | 删除。请求服务器删除Request-URI所标识的资源                  |
| TRACE   | 回送。请求服务器回送收到的请求信息，主要用于测试或诊断       |
| CONNECT | 用于代理进行传输，如使用SSL                                  |
| OPTIONS | 选项。请求查询服务器的性能，或者查询与资源相关的选项和需求，询问可以执行哪些**方法** |



## 17 axios

[axios 中文网](http://www.axios-js.com/)



## 18 项目中引用SVG

### 1 安装依赖

```
npm install svg-sprite-loader --save-dev
```

### 2 配置

在相关配置文件下配置svg，以下是在vue.config.js中：

```js
	// set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
```

![](E:\workspace\doc\images\luyuanweb\svg.png)

### 3.编码

在src/components下新建文件夹及文件SvgIcon/index.vue，index.vue中内容如下：

```vue
<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { isExternal } from '@/utils/validate'

export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    isExternal() {
      console.log(isExternal(this.iconClass),this.iconClass);
      return isExternal(this.iconClass)
    },
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
</style>

```

### 4.导入

在 ./src/assets 下新建icons文件夹，及icons文件夹下svg文件夹、index.js文件。svg图标统一放在 svg文件夹下， index.js文件内容如下：

![](E:\workspace\doc\images\luyuanweb\svg2.png)

**特别注意**：此处icon的文件夹位置一定要和vue.config.js配置文件中svg相关配置的路径一致：

![](E:\workspace\doc\images\luyuanweb\svg3.png)

### 5.在main.js中引入svg

![](E:\workspace\doc\images\luyuanweb\svg4.jpg)

### 6.在页面中使用

```
<svg-icon icon-class="test"></svg-icon>
```

### 7 参考资料

[博客园  -  Vue项目中使用svg图标](https://www.cnblogs.com/shenyf/p/10370949.html)

[掘金  -  手摸手，带你优雅的使用 icon](https://juejin.cn/post/6844903517564436493)