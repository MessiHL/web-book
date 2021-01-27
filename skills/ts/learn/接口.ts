/**
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查
 * 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 * 
 */

 interface LabelledValue{
   label:string;
 }

 function printLabel(labelledObj: LabelledValue){
   console.log(labelledObj.label);
 }

 let obj = {size:20,label:"size is 10"};
 printLabel(obj)