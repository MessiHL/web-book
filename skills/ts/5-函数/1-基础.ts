/**
 * 完整的函数类型
 * @param x 
 * @param y 
 * 函数类型包括两部分：参数类型和返回值类型
 * 本例中，参数类型和返回值类型之间使用 => 符号
 */
let myAdd:(x: number,y: number) => number = function(
  x: number,
  y: number,
): number {
  return x + y;
};


/**
 * 
 * @param firstName 
 * @param lastName 
 * 可选参数用?标志，可选参数必须放在必须参数后面
 */
function buildName(firstName: string, lastName?: string){
  if(lastName){
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}


function buildName2(firstName = 'Will',lastName:string){
  return firstName + " " + lastName;
}

// 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值
let r1 = buildName2(null,"bob") // error Argument of type 'null' is not assignable to parameter of type 'string | undefined'.
let r2 = buildName2(undefined,"bob")

