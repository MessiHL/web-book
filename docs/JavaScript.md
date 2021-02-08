

#                                                                      javaScript

## 1 赋值、浅拷贝、深拷贝

### 1.1 对比

| 方式   | 和原数据是否指向同一对象 | 第一层数据为基本数据类型 | 元数据中包含的子对象 |
| ------ | ------------------------ | ------------------------ | -------------------- |
| 赋值   | 是                       | 原始数据一同改变         | 原始数据一同改变     |
| 浅拷贝 | 否                       | 原始数据不会改变         | 原始数据一同改变     |
| 深拷贝 | 否                       | 原始数据不会改变         | 原始数据不会改变     |

### 1.2 引用类型赋值

```javascript
/**
 * 对象赋值，赋的其实是该对象在栈中的地址，而不是堆中的数据
 * 两个对象指向同一个存储空间，无论哪个对象改变，改变的都是存储空间的内容，
 * 因此改变是联动的：要变一起变
 */
const obj1 ={
    name:'a',
    age:2
}
// 对象赋值
const obj2 = obj1;

// obj2 改变了，obj1也变了
obj2.name = 'b';
obj2.age = 10;
console.log('obj1:',obj1); // obj1: { name: 'b', age: 10 }
console.log('obj2:',obj2); // obj2: { name: 'b', age: 10 }

// obj1 改变了，obj2也变了
obj2.name = 'c';
obj2.age = 30;
console.log('obj1:',obj1); // obj1: { name: 'c', age: 30 }
console.log('obj2:',obj2); // obj2: { name: 'c', age: 30 }
```



![](D:\doc\images\js-copy.png)

### 1.3 引用类型浅拷贝



### 1.4 引用类型深拷贝



## 2 类型转换

### 2.1 转换为数字

**NaN** - not a number  不是一个数字

**parseInt/parseFloat**: 

​	1- 遇到非数字就停止转换

​	2- 非string类型，会先转换为string，再处理

| 待转换        | Number() | parseInt() | parseFloat() | 说明                                                         |
| ------------- | -------- | ---------- | ------------ | ------------------------------------------------------------ |
| '123'         | 123      | 123        | 123          |                                                              |
| '123.456'     | 123.456  | 123        | 123.456      |                                                              |
| '123.456.789' | NaN      | 123        | 123.456      |                                                              |
| '123px'       | NaN      | 123        | 123          |                                                              |
| '12a34b'      | NaN      | 12         | 12           | parseInt、parseFloat 遇到非数字就停止转换                    |
| 'abc'         | NaN      | NaN        | NaN          |                                                              |
| [1,2,3]       | NaN      | 1          | 1            | 数组转换                                                     |
| {a:10}        | NaN      | NaN        | NaN          | 对象转换                                                     |
| true/false    | 1/0      | NaN        | NaN          | parseInt、parseFloat先转换为string，再处理                   |
| null          | 0        | NaN        | NaN          |                                                              |
| undefined     | NaN      | NaN        | NaN          |                                                              |
| ''            | 0        | NaN        | NaN          | 空字符串转换                                                 |
| '      '      | 0        | NaN        | NaN          | 都是空格的字符串转换                                         |
| '070'         | 70       | 70         | 70           | parseInt(a,10)  parseFloat(a,10)。显示调用以十进制转换，防止被当做8进制数字转换 |
| '0x10'        | 16       | 10         | 0            | 16进制。parseInt(a,16)  parseFloat(a,16)                     |

 代码示例：

```javascript
var a = '12px';

console.log(Number(a));
console.log(parseInt(a));
console.log(parseFloat(a));
```

**说明**：以上运行结果均来自 vscode，不同浏览器中执行可能会稍有不同。具体情况望君亲试



### 2.2 转换为Boolean

1 数字转换成Boolean时，除了 0 和 NuN，结果都是 true；

2 字符串转换为Boolean时，除了空字符串，结果都是true；

3 null ,undefined --> false；

3 对象转换为Boolean：结果都是true；