const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World');
        res.end()`1`;
    }
});
server.listen(3000);