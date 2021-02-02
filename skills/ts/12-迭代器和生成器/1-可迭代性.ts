/**
 * 当生成目标为ES5或ES3，迭代器只允许在Array类型上使用。 
 * 在非数组值上使用 for..of语句会得到一个错误，就算这些非数组值已经实现了Symbol.iterator属性
 */

let arr = [1,"str",false];
let str = {name:'tom'};

// in: 迭代对象的键
for(let y in arr){
  console.log(y);
}

//  of: 迭代对象键对应的值
for(let x of arr){
  console.log(x);
}

// for in 可以操作任何对象
for(let y in str){
  console.log('str:',y);
}
