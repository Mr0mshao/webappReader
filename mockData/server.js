var fs = require('fs')
var express = require('express')
const app = express()
const port = 8088
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    next()
})
app.get('/', (req, res, next) => {
  const data = fs.readFileSync('./hx.json', 'utf-8')
  res.send(data)
})


app.listen(port, () => {
  console.log('server start at port: ' + port)
})


