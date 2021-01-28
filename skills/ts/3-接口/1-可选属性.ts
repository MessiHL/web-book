/**
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查
 * 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 * 
 */

 interface SquareConfig {
   color?: string;
   width?: number;
 }

 function createSquare(config: SquareConfig):{color:string,area:number}{
   let newSquare = {color:'white',area:100};
   if(config.color){
     newSquare.color = config.color;
   }
   if(config.width){
    newSquare.area = config.width*config.width;
  }

  return newSquare;
 }

 let mySquare = createSquare({color:'blue'})
 console.log(mySquare);
 