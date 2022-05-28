const http = require('http')
const fs = require('fs')
const { resolveSrv } = require('dns/promises')
//for first response! 👇🏻
// const server = http.createServer((req,res) => {
//     console.log('Response received!')
// })

//* create server for creating a new server on localhost.

//* server.listen is for listening 3000'th port of our localhost.

// TODO: If we want to see our /GET things. 👇🏻
const server = http.createServer((req,res) => {
    //console.log(req.url, req.method)
    res.setHeader('Content-Type', 'text/html')
    let path = './views/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
            
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break

        case '/about-us':
            path += 'about.html'
            res.statusCode = 301
            res.setHeader('Location', '/about')
            break

        default: 
            path += '404.html'
            res.statusCode = 404
            break
    }
//! in below this code, you can read your files with fs(filesystem) 

//* we choosed our path and we can show this codes with conditions
    fs.readFile(path, (err, data)=> {
        if(err){
            console.log(err)
            res.end()
        }else{
            res.end(data)
        }
    })
    
    // res.write('<head><title>Node Js Lessons</title></head>')
    //TODO : for writing hello on the screen below this code. 👇🏻
    // res.write('<h1>Merhaba</h1>')
    // res.end()
})

server.listen(3000,'localhost',()=>{
    console.log('Listening to 3000 port...')
})

//TODO: on above there, we can create our server 👆🏻


