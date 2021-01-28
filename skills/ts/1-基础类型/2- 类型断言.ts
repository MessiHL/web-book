/**
 * 当你清楚地知道一个实体具有比它现有类型更确切的类型，
 * 就可以使用【类型断言】,进行类型转换（不进行特殊的数据检查和解构）
 * 相当于告诉编译器：“相信我，我知道自己在干什么”。
 */

 // 方式一：尖括号
 let str: any = 'tom';
 let len: number = (<string>str).length;
 console.log(len);
 

 // 方法二: as
  let val: any = "hello";
  let valLen: number = (val as string).length;
  console.log(valLen);
  
