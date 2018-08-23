

//creating web server using http module in node.js

/** 
  var http=require('http');

 var server= http.createServer(function(req, res){
     res.writeHead(200,{'content-type':'text/html'});
     res.write("Request server" + req.url + "<br/>");
     res.write("hello server");
     res.end();
  });
  server.listen(3000);*/
/*
  //ES6 new feature in node.js which is use to reduce lanthey code for example

 var http=require('http');

 var server= http.createServer((req, res) =>{
     res.writeHead(200,{'content-type':'text/html'});
     res.write("Request server" + req.url + "<br/>");
     res.write("hello server 1");
     res.end();
  });
  server.listen(3000);*/
  
  var http= require('http');
  var fs = require('fs');
  var path = require('path');

  var server= http.createServer(function(req, res){

       if(req.url==="/")
       {
        fs.readFile("./public/index.html","UTF-8", function(err , data){
                                    if(err) throw err
            res.writeHead(200,{'Content-type':"text/html"});
             res.end(data);
        });
       }else if(req.url.match("\.css$"))
       {
           var cssPath=path.join(__dirname,'public',req.url);
           var Filestream= fs.createReadStream(cssPath,"UTF-8");
           res.writeHead(200,{'Content-type':"text/css"});
           Filestream.pipe(res);
       }
       else if(req.url.match("\.png$"))
       {
           var pngPath=path.join(__dirname,"public",req.url);
           var Filestream=fs.createReadStream(pngPath);
           res.writeHead(200,{'Content-type':"image/PNG"});
           Filestream.pipe(res);
       }else
       {
        res.writeHead(404,{'Content-type':"text/html"});
        res.end("No page found");
       }
     
      
  })
  server.listen(3000);
  