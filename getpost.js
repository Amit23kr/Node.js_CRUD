//performing GET and POST method based on user requirement
//handaling server Using GET and POST Method

var http = require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    if(req.method==="GET")
    {
        res.writeHead(200,{'Content-type':"text/html"});
       fs.createReadStream("./public/form.html","UTF-8").pipe(res);  
    }else if(req.method==="POST")
    {
        var data="";
        req.on("data",function(chunk){//chunks is nothing but small small data which is coming using on();
            data += chunk;  
        });
        req.on("end",function(){
            res.writeHead(200,{'Content-type':"text/html"});
            res.end(`
            ${data}
            `);
        });
       
    }
});
server.listen(3000);