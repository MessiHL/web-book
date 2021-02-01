/**
 * 泛型：变量类型和返回值类型都是 T
 * @param arg 
 */
function identity<T>(arg: T): T{
  return arg;
}

// 使用方式一： 传入所有参数，包含类型参数
let output = identity<string>("myString");
console.log(output, "type is",typeof output);


// 使用方式二：类型推理,编译器会根据传入的参数自动地帮我们确定T的类型
let output2 = identity(100)
console.log(output2, "type is",typeof output2);

let output3 = identity({name:"tom",age:20})
console.log(output3, "type is",typeof output3);