var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
  var data = fs.readFileSync('./hx.json')
  res.writeHead(200, {
    'Content-Type': 'applicatinon/json'
  })
  res.end(data)
}).listen(8088)

