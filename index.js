var http = require('http')
var fs = require('fs')

const PORT = process.env.PORT || 8080

const app = http.createServer((req, res) => {
  try{
    const homeFile = fs.readFileSync('home.html')
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(homeFile)
    res.end()
  }
  catch(e){
    res.writeHead(500, {'Content-Type': 'application/json'})
    res.write(JSON.stringify(e))
    res.end()
  }
})

app.listen(PORT)

console.log(`App started at port ${PORT} .`)