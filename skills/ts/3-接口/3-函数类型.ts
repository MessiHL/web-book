/**
 * 
 */

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src:string, sub: string): boolean {
  let res = src.search(sub);
  return res > -1;
}

