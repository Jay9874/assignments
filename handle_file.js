const http = require('node:http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 8080

// The fs object methods

// Writing into a file
// The file will be created with respect to this file location.
// by default inside this file folder.
fs.writeFile('hello.txt', 'Good morning, or afternoon or anything!!', err => {
  if (err) {
    throw new Error(err)
  }
  console.log('The file has been written.')
})

// Reading from a file.
fs.readFile('hello.txt', 'utf8', (err, res) => {
  if (err) {
    throw new Error(err)
  }
  console.log(`The content is:\n ${res}`)
})
// Creating a new server.
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello, folks. Welcome to file handling!\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
