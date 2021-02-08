#                                        SVG

参考  [w3c-svg教程](https://www.w3school.com.cn/svg/index.asp)

## 1  SVG 是使用 XML 来描述二维图形和绘图程序的语言

- SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
- SVG 用来定义用于网络的基于矢量的图形
- SVG 使用 XML 格式定义图形
- SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失
- SVG 是万维网联盟的标准
- SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体

## 2 SVG 的历史和优势

在 2003 年一月，SVG 1.1 被确立为 W3C 标准。

参与定义 SVG 的组织有：太阳微系统、Adobe、苹果公司、IBM 以及柯达。

与其他图像格式相比，使用 SVG 的优势在于：

- SVG 可被非常多的工具读取和修改（比如记事本）
- SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
- SVG 是可伸缩的
- SVG 图像可在任何的分辨率下被高质量地打印
- SVG 可在图像质量不下降的情况下被放大
- SVG 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）
- SVG 可以与 Java 技术一起运行
- SVG 是开放的标准
- SVG 文件是纯粹的 XML

SVG 的主要竞争者是 Flash。与 Flash 相比，SVG 最大的优势是与其他标准（比如 XSL 和 DOM）相兼容。而 Flash 则是未开源的私有技术。



![](D:\doc\images\svg.png)

##  3 SVG 文件说明

- 文件后缀名必须是.svg
- **第一行**必须包含 XML 声明 （<?xml ?>），不能是空行，也不能是注释性语言 <!--  -->

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
    <polygon points="100,10 40,180 190,60 10,60 160,180"
    style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
</svg>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG</title>
    <style>
        body{
            background: url(img.svg) no-repeat;
        }
    </style>
</head>
<body>
    
</body>
</html>
```



##  4 命令

以下所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。 

| 命令 | 说明                                                         |
| ---- | ------------------------------------------------------------ |
| M    | moveto。移动到的点的x轴和y轴的坐标                           |
| L    | lineto。需要两个参数，分别是一个点的x轴和y轴坐标，L命令将会在当前位置和新位置<br />（L前面画笔所在的点）之间画一条线段 |
| H    | horizontal lineto。绘制平行线                                |
| V    | vertical lineto。绘制垂直线                                  |
| C    | curveto。三次贝塞尔曲线                                      |
| S    | smooth curveto。简写的三次贝塞尔曲线命令                     |
| Q    | quadratic Belzier curve。二次贝塞尔曲线                      |
| T    | smooth quadratic Belzier curveto。简写的二次贝塞尔曲线命令   |
| A    | elliptical Arc。弧形命令                                     |
| Z    | closepath。从当前点画一条直线到路径的起点                    |

