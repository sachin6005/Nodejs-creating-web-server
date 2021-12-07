const http = require('http')
const url = require('url')


const server = http.createServer((req,res)=>{
    const path = req.url
    if(path === '/login'){
        res.end("send him to login page")
    }
    else if (path === '/name' || '/profile'){
        res.end("Hello Sachin, welcome!")
    }
    else{
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-header' : 'my header'
        })
        res.end( "<h1> 404 Page not found</h1>")
    }
    
})

server.listen(8000, '127.0.0.1', () => {
    console.log("listening on port 8000")
})