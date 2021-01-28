
/**
 * ... 的限制:
 *  1- 展开一个对象实例时，会丢失其方法(因为方法不可枚举)
 *  2- TypeScript编译器不允许展开泛型函数上的类型参数（未来可能会实现）
 */


 
let defaults = {food: 'spicy', price: '$$'};
let search = {food:'rich',...defaults};