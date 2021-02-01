/**
 * 
 * @param firstName 
 * @param restOfName 剩余参数 
 */
function fullName(firstName: string, ...restOfName: string[]){
  return firstName + ":" + restOfName.join(",");
}
let str = fullName('hi','tom','kobe','james')
console.log(str);
