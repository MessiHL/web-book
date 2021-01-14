var http = require('http')
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'})
  res.end('hi,node')
}).listen(8888)
console.log('run in 8888')