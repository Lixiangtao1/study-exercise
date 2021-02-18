// var http = require('http') //http为node的内置模块
// http.createServer(function(request, response){
//   response.end('第一个node服务')
// }).listen('8888');
// console.log('Server running at http://localhost:8888')

const http = require('http')
const host = 'localhost'
const port = '8888'
const server = http.createServer( (req, res) => {
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.write(`<head><meta charset="utf-8"/></head>`)
  res.end('hello Node')
})
server.listen(port, host, () => {
  console.log(`Serve running at http://${host}:${port}`)
})

