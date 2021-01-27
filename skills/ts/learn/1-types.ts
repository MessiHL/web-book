// let isDone:boolean = false;
// let title: string = 'tom';

// let list:number[] = [1,2,3];
// let list2: Array<number> = [1,2,3]


// // tuple
// let x:[string,number];
// x = ['kobe',41];
// console.log(x[0].substring(1));
// console.log(x[1] + 3);

// // enum
// enum Color {Red = 1,Green = 4,Blue = 8}
// let c = Color.Green
// console.log(c,Color[8]);


// // any
// let notSure: any = 4
// notSure = 'tom'

// 类型断言 尖括号 <>
let str: any = 'hello';
let len:number= (<string>str).length;
console.log(len);

// 类型断言 as  推荐
let len2:number = (str as string).length;
console.log(len2);

