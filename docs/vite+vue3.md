#                  vite+vue3



## 1 搭建工程

先搭建一个vue工程，这里有两种办法，一种是使用vue-cli ,另一种是使用vite(一种新的构建工具)。此处使用vite 演示创建项目 industry-cloud

```
// 创建项目
npm init vite-app industry-cloud
// 进入项目根目录
cd industry-cloud
// 包安装
npm install
```



## 2 sass 配置

执行命令:

```
npm install sass -D 
```

这个是sass 的库，这里为啥不需要安装`sass--loader` 或者 `style-loader` 或者 node-sass 呢？ 这个在设计的时候，vue3 的缔造者 在设计vue 的时候已经考虑过这件事情，vite 这个构建工具里面集成了scss, less ,stylus 等， 原话如下 `That said, Vite does provide built-in support for .scss, .sass, .less, .styl and .stylus files. There is no need to install Vite-specific plugins for them, but the corresponding pre-processor itself must be installed as a peer dependency:`

此时，项目的package.json内容如下：

![](F:\code\web-book\docs\images\vite1.png)

## 3 vue.config.js

常用配置如下：

```js
const path = require('path')
export default function () {
    return {
        // 代理，最重要，其他的都可以有默认配置
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            }
        },
        // 入口
        entry: 'index.html',
        // 出口
        outDir: './../public/html',
        // 打包后的跟路径
        base: '/',
        // 输出的静态资源的文件夹名称
        assetsDir: 'assets',
        // 是否开启ssr服务断渲染
        ssr: false,
        // 重命名路径  path.resolve(__dirname, './src')
        alias: {
            '/@/': path.resolve(__dirname, './src')
        },
        // 端口
        port: 3002,
        // 是否自动开启浏览器
        open: false,
        // 开启控制台输出日志
        silent: false,
        // 那个包不需要打包
         optimizeDeps: {
            exclude: ['element-plus']
        },
        // css预设的配置
        cssPreprocessOptions: {
            scss: {
                additionalData: '@import "style/index.scss";', // 添加公共样式
            },
        }
    }
}
```

[详细配置](https://blog.csdn.net/qq_41499782/article/details/111660366)

## 4 目录

此处删除了 index.css及其引用

![](F:\code\web-book\docs\images\vite2.png)



## 10 参考

[参考资料 ](https://blog.csdn.net/qq_41499782/article/details/112322139)

[vite + vue3 + element-plus + axios + vueRouter + vuex + scss 搭建项目](https://vitejs.dev/guide/features.html#css-modules)

