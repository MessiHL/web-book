/**
 *  读取
 */
// var fs = require('fs')
// var data = '';
// var readStream = fs.createReadStream('input3.txt');
// readStream.setEncoding('UTF8');
// readStream.on('data',function(chunk){
//   data += chunk;
// })
// readStream.on('end',function(){
//   console.log(data);
// })
// readStream.on('error',function(err){
//   console.log(err.stack);
// })

// console.log('执行完毕');


 /**
  * 写入
  */

  // var fs = require('fs')
  // var data = 'hi,jim';
  // var ws = fs.createWriteStream('input2.txt');
  // ws.write(data,'utf8');
  // ws.end();
  // ws.on('finish',function(){
  //   console.log('写入完成');
  // })
  // ws.on('error',function(err){
  //   console.log(err);
  // })
  // console.log('执行完毕');

  /**
   * 管道流
   */
  // var fs = require('fs');
  // var rs = fs.createReadStream('input.txt');
  // var ws = fs.createWriteStream('ouput.txt');
  // rs.pipe(ws);
  // console.log('执行完毕');

  /**
   * 链式流
   */
  var fs = require('fs');
  var zlib = require('zlib');
  
  // 压缩
  // fs.createReadStream('input.txt')
  // .pipe(zlib.createGzip())
  // .pipe(fs.createWriteStream('output.txt.gz'))

  // 解压
  fs.createReadStream('output.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('inputA.txt'))
  console.log('OK');