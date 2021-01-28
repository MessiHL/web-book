interface Point{
  readonly x:number;
  readonly y:number;
}
let pnt: Point = {x:10,y:20};
// 无法分配到 "x" ，因为它是只读属性
// pnt.x = 10 ;
// pnt.y = 50;


// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，
// 只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
let a:number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 10;
// ro.push(10);
// ro.length = 5;

// 可以用类型断言重写
a = ro as number[];
console.log(a);
