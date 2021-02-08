#                                      ES6

参考资料：  [阮一峰ES6 入门教程](https://es6.ruanyifeng.com/)

## 1 var 、 let、 const

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



## 2 解构赋值

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

## 3 数值扩展

 JavaScript 采用 IEEE 754 标准，数值存储为64位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）。如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，这种情况下，`Number.isInteger`可能会误判。

```javascript
// `Number.isInteger`的参数明明不是整数，但是会返回`true`。
// 原因就是这个小数的精度达到了小数点后16个十进制位，转成二进制位超过了53个二进制位，
// 导致最后的那个`2`被丢弃了。
Number.isInteger(3.0000000000000002); // true
Number.isInteger(30000000000000.002); // true
Number.isInteger(30000000000000.02); // false。十进制数不到16位，不会被丢弃
```

## 4 函数

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

## 5 数组

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

## 6 对象

```javascript
// 属性名 => 变量名, 属性值 => 变量值
function f(name,age){
    return {name,age};
}

var info = f('tom',20);
console.log(info); //  { name:'tom',age:20 }
```



## 7 symbol

ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：`undefined`、`null`、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

## 8  Set

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



## 9 Map

​    Map类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“**字符串—值**”的对应，Map 结构提供了“**值—值**”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

## 10 编程风格

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

## 11 Promise

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

## 12 import 

**src/main.js:**

```javascript
// 相当于：import Vue from "../node_modules/vue/dist/vue.js";
// 因为main.js是在src文件中，所以../向前一级相对目录查找node_modules，再依次寻找后面的文件。
import Vue from 'vue';

// 相当于：import App from './App.vue';
// 引入我们写好的App.vue文件
import App from './App';

// 相当于：import router from './route.js';
// 引入和main.js同级目录下的route.js文件。
import router from './route';

// 相当于：import axios from '..\node_modules\axios\dist\axios.js';
// 和引入vue文件是一样的原理，都是从node_modules中加载相应名称的模块。
import axios from 'axios';

// 相当于：import './less/index.less';
import './less/index';
```

