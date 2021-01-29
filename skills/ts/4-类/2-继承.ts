
class Animal {
  name: string;
  constructor(theName: string) {this.name = theName};
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}`);
  } 
}

class Snake extends Animal {
  // super 关键字，调用父类同名方法
  // 派生类构造函数，必须调用super(),他会执行基类(此处是Animal)的构造函数。
  // 在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。
  constructor(name: string){super(name);}
  move(distanceInMeters = 5){
    console.log("Slithering...");
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string){super(name);}
  move(distanceInMeters = 40){
    console.log('Galloping...');
    super.move(distanceInMeters)
  }
}

let sam = new Snake("sammy the python");
let tom: Animal= new Horse("Tommy the Palomino");

sam.move()
tom.move()