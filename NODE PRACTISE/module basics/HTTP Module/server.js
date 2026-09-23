const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/")
    {   res.setHeader("Content-Type", "text/plain");
        res.write("this is the server that you created last night so now i want something from you if you dont give it to me then i will fight for that and gain from the team , so whats the new thing in this ");
        res.end();
    }
    if(req.url === "/source")
    {
       res.setHeader("Content-Type", "text/plain");
       res.write("this  is the page for the content of source ");
       res.end();
    }
});


const port = 3000;
server.listen(port,()=>{
    console.log(`server is running on port ${port} `);
})

