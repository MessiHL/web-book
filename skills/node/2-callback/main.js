/**
 * 阻塞代码
 */
var fs = require("fs")
console.log('1');
var data = fs.readFileSync('input.txt')
console.log(data.toString());
console.log('2');

/**
 * 非阻塞代码
 */
console.log('3');
fs.readFile('input.txt',function(err,data){
  if(err) return console.error(err);
  console.log(data.toString());
})
console.log('4');