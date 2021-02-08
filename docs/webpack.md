#                                webpack

参考： [尚硅谷2020最新版Webpack5实战教程(从入门到精通)](https://www.bilibili.com/video/BV1e7411j7T5)  [官网](https://www.webpackjs.com/)

## 1 准备

环境参数：node.js: 10+     webpack4.26+

预备技能：基本node.js 和 npm 指令；熟悉ES6语法

## 2 webpack 基本概念

**一种资源构建工具**

**一个静态模块打包器**

## 3 webpack 核心概念

**Entry**：入口指示Webpack以哪个文件为入口起点开始打包，分析构建内部依赖图。

**Output**：输出指示Webpack打包后的资源bundles输出到哪里去，以及如何命名。

**Loader**：让Webpack能够去处理那些非JavaScript文件（webpack自身只理解JavaScript）。

**plugins**：用于执行范围更广的任务。插件的范围包括：从打包优化和压缩，一直到重新定义环境中的变量等。plugins处理那些loader处理不了的事情。

**Mode**: 定义模式。

| 模式                      | 描述                                                         | 说明              |
| ------------------------- | ------------------------------------------------------------ | ----------------- |
| development<br />开发模式 | 会将 `process.env.NODE_ENV` 的值设为 `development`。<br />启用 `NamedChunksPlugin` 和 `NamedModulesPlugin`。 | 本地调试环境-简单 |
| production<br />生产模式  | 会将 `process.env.NODE_ENV` 的值设为 `production`。<br />启用 `FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`, <br />`ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin`, <br />`OccurrenceOrderPlugin`, `SideEffectsFlagPlugin` 和 `UglifyJsPlugin`. | 优化上线环境-复杂 |

```javascript
module.exports = {
  mode: 'production'
};
```

## 4 初体验

**1.初始化项目** 

npm init -y

**2.全局安装**

npm install webpack webpack-cli -g

**3.安装开发依赖:**

npm install webpack webpack-cli -D

**4.目录创建**

​	src--文件夹

​		-- index.js -- 入口文件

​	huild --文件夹  -- 打包输出位置

​		-- huild.js -- 打包输出文件

**5.编辑代码index.js**

```javascript
 function add(x,y){
     return x + y;
 }

 console.log('add:',add(1,2));
```

**6.运行打包指令**

**开发模式打包** ：webpack ./src/index.js -o ./build/build.js --**mode**=development。

即在开发环境中以 ./src/index.js 文件为入口文件，开始打包，打包后文件输出到 ./build/build.js 。

```java
// build.js 代码片段
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n *  index.js: webpack 入口文件\r\n *  1. 运行指令 ： webpack ./src/index.js -o ./build/build.js --mode=development\r\n */\r\n\r\n function add(x,y){\r\n     return x + y;\r\n }\r\n\r\n console.log('add:',add(1,2));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
```

**生产模式打包：**webpack ./src/index.js -o ./build/build.js --**mode**=production。

即在生产环境中以 ./src/index.js 文件为入口文件，开始打包，打包后文件输出到 ./build/build.js 。

此时， build.js 的代码已经被压缩了。

**总结**：

	1. webpack 本身只能打包JavaScript、json，不能打包 css、图片资源。
 	2. 生产环境和开发环境能将ES6模块化



**7 node 环境下运行build.js**

​	node ./build/build.js

**8 index.html 中引用build.js**

​	在build文件夹下新建文件 index.html，并引入build.js:

![](D:\doc\images\wepack-init-01.png)

## 5 webpack.config.js基本格式

```javascript
/**
 * 配置webpack。指示webpack如何工作
 * 所有的构建工具都是基于node运行的，模块化默认采用common.js
 */

const { resolve } = require('path');  // resolve 用来拼接绝对路径
module.exports = {
   mode:'development', //共两种： development-开发坏境   production-生产环境
   entry:'./index.js', // 入口
   output:{ // 出口
      filename:'build.js', // 输出文件名
      path:resolve(__dirname,'/build') // 输出文件路径。__dirname 是node 的变量，指当前文件目录的绝对路径
   },
   // loader 配置
   module:{
      rules:[

      ]
   },
   plugins:[ // 插件

   ]
}
```



## 6 资源打包 loader

### 6.1 样式打包

参考： [官网](https://www.webpackjs.com/loaders/css-loader/)         [B站](https://www.bilibili.com/video/BV1e7411j7T5?p=5)

安装包 : 

npm i css-loader style-loader -D

npm install less-loader less -D

```javascript
//web.config.js 中的 loader 配置
module:{
    rules:[
        {
            test:/\.css$/, // 匹配文件
            use:[ // use 数组中的执行顺序：从右向左，从下而上
                // 创建style标签，将JS中的资源插入到head标签中
                'style-loader',
                // 将css文件变成commonjs模块并加入到js中，里面内容是样式字符串
                'css-loader'
            ]
        },
        {
            test:/\.less$/, // 匹配文件
            use:[ // use 数组中的执行顺序：从右向左，从下而上
                // 创建style标签，将JS中的资源插入到head标签中.creates style nodes from JS strings
                'style-loader',
                // 将css文件变成commonjs模块并加入到js中，里面内容是样式字符串.translates CSS into CommonJS
                'css-loader',
                // 将less文件 编译成 css文件.compiles Less to CSS
                'less-loader'
            ]
        },

    ]
}
```



### 6.2 html打包

**1 安装**

```
npm install html-webpack-plugin -D
```

**2 引用**

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')
```

**3 使用**

```javascript
new HtmlWebpackPlugin({
    template:'./src/index.html' // 复制文件并打包，注意，该文件中不需要手动引入js、css
})
```

**4 webpack.config.js 配置**

```javascript
/**
 * loader: 下载，配置
 * plugins: 下载，引用，使用
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'build.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[

        ]
    },
    plugins:[
        // 默认创建空的Html文件，引入打包输出的所有资源（js/css）
        // 如果需要有结构的html文件，加一个template
        new HtmlWebpackPlugin({
            template:'./src/index.html' // 复制文件并打包，注意，该文件中不需要手动引入js、css
        })
    ]  
}
```



### 6.3 图片资源

**1 安装**

```cmd
npm install url-loader file-loader -D
```

```
npm install html-loader -D
```

**2 webpack.config.js 配置**

```javascript

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'build.js',
        path:resolve(__dirname,'build')
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.less$/,
                loader:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(png|gif|jpg)$/,
                use:[
                        {
                            // 处理图片
                            // 下载 url-loader  file-loader
                            // 默认处理不了在html中直接引入image的情况，此时要借助 html-loader处理
                            loader:'url-loader',
                            options:{
                                // 处理小于10KB的图片，官方默认的是8KB。
                                // 使用base64处理
                                // 优点：减少服务器请求次数,减少服务器压力
                                // 缺点：图片会变大-文件请求速度更慢
                                limit:10240,
                                // 打包后的资源文件名称设置
                                // xx-:文件固定前缀名称
                                // [hash:10] 取hash值得前10位
                                // [ext]：取文件原来的扩展名
                                // 名称样例：xx-01e465c922.png
                                name:'xx-[hash:10].[ext]',
                                // url-loader默认使用es6模块化解析，而html-loader引入图片使用的语法是commonjs
                                // 解析是会出现 src=[object Module]
                                // 解决方案：关闭url-loader的es6解析，使用commonjs解析
                                esModule:false
                            }
                        }
                ]
            },
            {
                test:/\.html$/,
                // 处理html文件中的img图片：负责引入img,从而能被url-loader处理
                loader:'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}
```

![](D:\doc\images\wepack-05.png)

**3 总结**

1. 使用 url-loader和file-loader 处理图片。
2. url-loader是基于file-loader的。
3. url-loader用Base64来处理小图片（一般是12KB以内）。
4. html中直接引入的图片，要通过 html-loader来引入，file-loader才能处理。
5. html-loader使用的是commonjs解析，而file-loader使用的是ES6解析，故在使用html-loader时要关闭file-loader的默认解析方式（esModule:false）。

### 6.4 其他资源

除了 CSS(包括less、scss)、html、js 文件（此处暂时提及 vue,ts等格式），都可以看做其他资源，比如字体。使用file-loader 处理。

```javascript
// webpakc.config.js：
const {resolve}  = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'build.js',
        path:resolve(__dirname,'build')
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            // 打包其他资源(除了 html、css、js 之外的资源)
            {
                // 排除 html、css、js
                exclude:/\.(css|less|html|js)$/,
                loader:'file-loader',
                options:{
                    name:'font-[hash:6].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}
```

![](D:\doc\images\wepack-06.png)

## 7 dev server

下载：npm install webpack-dev-server -D

执行：npx webpack-dev-server

webpack.config.js配置【devServer】：

```javascript
plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    /**
     * 开发服务器 devServer,用来自动化（自动化编译、首次编译自动打开浏览器、自动刷新浏览器~~）
     * 特点：只会在内存中编译，不会输出（不会输出build文件夹以及里面的文件）
     * 下载 npm install webpack-dev-server
     * 启动devServer指令（webpack全局安装的前提下）: npx webpack-dev-server
     */
    devServer:{
        contentBase:resolve(__dirname,'build'),// 项目构建后目录
        compress:true, // 启用gzip压缩代码
        port:1234, // 端口
        open:true // 首次编译自动打开默认浏览器
    }
```

## 8 开发环境配置

```javascript
/**
 * webpack.config.js 
 * 开发环境配置,让代码能够运行起来
 * 运行项目指令：
 *      内存编译打包： npx webpack-dev-server
 *      编译打包结果输出: webpack
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:resolve(__dirname,'build'),
        filename:'js/build.js'// build 文件夹下会生成js文件夹，在生成build.js
    },
    // 使用 loader 处理文件
    module:{
        rules:[
            { // css 文件
                test:/\.css$/, // 匹配文件
                use:[ // use 数组中的执行顺序：从右向左，从下而上
                   // 创建style标签，将JS中的资源插入到head标签中
                   'style-loader',
                   // 将css文件变成commonjs模块并加入到js中，里面内容是样式字符串
                   'css-loader'
                ]
            },
            { //less文件
            test:/\.less$/, // 匹配文件
            use:[ // use 数组中的执行顺序：从右向左，从下而上
                // 创建style标签，将JS中的资源插入到head标签中.creates style nodes from JS strings
                'style-loader',
                // 将css文件变成commonjs模块并加入到js中，里面内容是样式字符串.translates CSS into CommonJS
                'css-loader',
                // 将less文件 编译成 css文件.compiles Less to CSS
                'less-loader'
            ]
            },
            {  // 处理图片
                test:/\.(png|gif|jpg)$/,
                use:[
                        {
                            // 下载 url-loader  file-loader
                            // 默认处理不了在html中直接引入image的情况，此时要借助 html-loader处理
                            loader:'url-loader',
                            options:{
                                // 处理小于10KB的图片，官方默认的是8KB。
                                // 使用base64处理
                                // 优点：减少服务器请求次数,减少服务器压力
                                // 缺点：图片会变大-文件请求速度更慢
                                limit:10240,
                                // 打包后的资源文件名称设置
                                // xx-:文件固定前缀名称
                                // [hash:10] 取hash值得前10位
                                // [ext]：取文件原来的扩展名
                                // 名称样例：xx-01e465c922.png
                                name:'xx-[hash:10].[ext]',
                                // url-loader默认使用es6模块化解析，而html-loader引入图片使用的语法是commonjs
                                // 解析是会出现 src=[object Module]
                                // 解决方案：关闭url-loader的es6解析，使用commonjs解析
                                esModule:false,
                                outputPath:'images' // 打包后会将文件放在images文件夹下
                            }
                        }
                ]
            },
            { // html 中的图片
                test:/\.html$/,
                // 处理html文件中的img图片：负责引入img,从而能被url-loader处理
                loader:'html-loader'
            },
            {
                // 打包其他资源(除了 html、css、js 之外的资源)
                exclude:/\.(css|less|html|js)$/,
                loader:'file-loader',
                options:{
                    name:'font-[hash:6].[ext]',
                    outputPath:'media' // 打包后会将文件放在media文件夹下
                }
            }
        ]
    },
    plugins:[
        // 默认创建空的Html文件，引入打包输出的所有资源（js/css）
        // 如果需要有结构的html文件，加一个template
        new HtmlWebpackPlugin({
            template:'./src/index.html' // 复制文件并打包，注意，该文件中不需要手动引入js、css
        })
    ],
    devServer:{
        /**
         * 开发服务器 devServer,用来自动化（自动化编译、首次编译自动打开浏览器、自动刷新浏览器~~）
         * 特点：只会在内存中编译，不会输出（不会输出build文件夹以及里面的文件）
         * 下载 npm install webpack-dev-server
         * 启动devServer指令（webpack全局安装的前提下）: npx webpack-dev-server
         */
        port:3000,// 端口
        open:true, // 首次编译自动打开默认浏览器
        compress:true, // 启用gzip压缩代码
        contentBase:resolve(__dirname,'build') // 项目构建后目录
        
    }
}
```

## 9 将css提取成单独文件

安装：

```
npm i mini-css-extract-plugin -D 
```

配置webpack.config.js

```javascript
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'js/bundle.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    // 创建style标签，将样式放入
                    // 'style-loader',
                    // MiniCssExtractPlugin.loader 取代 style-loader，提取css成单独文件
                    MiniCssExtractPlugin.loader,
                    // 将css整合到js中
                    'css-loader'
                ]
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            // 输出文件重命名
            filename:'css/main.css'
        })
    ],
    mode:'development'
};
```

项目说明：

![](D:\doc\images\wepack-09.png)

作用：

1. js和css分离，加快页面加载时间
2. 使用link方式引入，避免闪屏现象



## 10 CSS兼容性处理

参考：[GitHub postcss](https://github.com/postcss/postcss/blob/master/docs/README-cn.md)    [webpack4 - css/less等兼容处理遇到的坑](https://www.cnblogs.com/xihailong/p/13639160.html)

安装： npm install postcss-loader postcss-preset-env -D

**package.json配置**：

```json
"browserslist":{
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ]
  }
```

**webpack.config.js** 配置:

```
loader: 'postcss-loader'
```

**postcss.config.js 配置**:

```javascript
module.exports = {
    plugins: [
        require('postcss-preset-env')
    ]
}
```

## 11 JS 语法检查

参考： [尚硅谷](https://www.bilibili.com/video/BV1e7411j7T5?p=15)    [github-[airbnb]](https://github.com/airbnb/javascript)    [npm:eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)

**安装：** 

```js
npm install eslint eslint-loader eslint-config-airbnb-base  eslint-plugin-import -D
```

**package.json配置**：

```json
  "eslintConfig":{
    "extends":"airbnb-base"
  }
```

**webpack.config.js** 配置:

```javascript
 module:{
        rules:[
            /**
             * 语法检查：eslint-loader，依赖 eslint.
             *  只检查自己写的代码，第三方库不需要检查;
             *  在package.json 中设置规则，建议依据airbnb。
             * "eslintConfig":{
                    "extends":"airbnb-base"
                }
                airbnb依赖于： eslint eslint-plugin-import  eslint-config-airbnb-base
             */
            {
                test:/\.js$/,
                exclude:'/node_modules/',
                loader:'eslint-loader',
                options:{
                    // 自动修复
                    fix:true
                }
            },
        ],
    },
```

**项目截图：**

![](D:\doc\images\wepack-12.png)

## 12 JS兼容性处理

参考：[尚硅谷教程](https://www.bilibili.com/video/BV1e7411j7T5?p=16)

安装：

```javascript
// 1 简单兼容处理
npm i babel-loader  -D
npm i @babel/preset-env  -D
npm i @babel/core  -D
// 2 完全处理
npm i  @babel/polyfill  -D
// 3 按需处理
npm i  corejs  -D

```

webpack.config.js:

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {resolve}  = require('path');

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'js/build.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            /**
             * JS 兼容性处理方式
             *  1- 基本处理 
             *      依赖：babel-loader @babel/preset-env  @babel/core 
             *      缺陷：不能处理高级语法如promise等
             *  2- 解决全部的兼容性问题
             *      依赖：@babel/polyfill
             *      使用：在js文件中引入即可: import '@babel/polyfill'，不需要配置
             *      缺陷：默认处理所有兼容新问题，js文件体积太大
             *          （本例中js/build.js使用polyfill前是3.85KB,使用后是441KB）
             *  3- 按需处理JS兼容性问题 corejs
             */
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                options:{
                    presets: [
                        [
                            "@babel/preset-env",  // 预设：处理基本的JS兼容性问题
                            {
                            useBuiltIns: "usage", // 按需加载
                            corejs: 2, // 版本设置成3时会报错：Can't resolve 'core-js/modules/es.promise'
                            targets:{ // 指定兼容的浏览器版本
                                    chrome:'60',
                                    firefox:'60',
                                    ie:'9',
                                    safari:'10',
                                    edge:'17'
                                }
                            }
                        ]
                      ]
                }
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}
```

## 13 文件压缩

压缩 JS：mode 改为 production 时，会自动压缩js

压缩 HTML：配置 HtmlWebpackPlugin

压缩 CSS：使用插件optimize-css-assets-webpack-plugin （安装：npm i  optimize-css-assets-webpack-plugin -D） 

webpack.config.js:

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {resolve}  = require('path');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports={
    mode:'development', // 设置成 production时，会自动压缩js文件
    entry:'./src/index.js',
    output:{
        filename:'js/build.js',
        path:resolve(__dirname,'build')
    },
    module:{

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{ // html 文件压缩
                // 移除空格
                collapseWhitespace:true,
                // 移除注释
                removeComments:true,
            }
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ]
}
```

## 14 生产环境基本配置