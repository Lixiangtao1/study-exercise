var http = require('http')  //使用require载入http模块,并将实例化的HTTP赋值给变量http

http.createServer(function (request, response){
  
  // 发送http头部
  //HTTP状态值： 200: ok
  // 内容类型
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // 发送响应数据“helloworld"
  response.end("Hello world\n");
}).listen(8899);

// 终端打印如下信息
console.log("Serve running at http://127.0.0.1:8899/");


// 常用 web框架模块express