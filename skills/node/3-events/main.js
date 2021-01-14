const { EventEmitter } = require('events')
var events = require('events')
var emi = new EventEmitter()
emi.on('some_event',function(){
  console.log('some_event 事件触发')
})
setTimeout(function(){
  emi.emit('some_event')
},1000)