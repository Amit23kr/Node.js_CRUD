//reading JSON file using routing 
 var http= require('http');

 var staff= require('./public/data/staff.json');


 var server = http.createServer(function(req,res){
   
     if(req.url==="/"){
        res.writeHead(200,{'Content-type':"text/json"});
        res.end(JSON.stringify(staff));
     }else if(req.url==="/React.js")
     {
        var data=staff.filter(function(item){
            return item.language==="React.js";
        })
        res.writeHead(200,{'Content-type':"text/json"});
        res.end(JSON.stringify(data));
     }else if(req.url==="/Mongodb")
     {
         var data=staff.filter(function(item){
            return item.language==="Mongodb";
         })
         res.writeHead(200,{'Content-type':"text/json"});
         res.end(JSON.stringify(data));
     }else if(req.url==="/Angular.js")
     {
         var data=staff.filter(function(item){
             return item.language==="Angular.js";
         })
         res.writeHead(200,{'Content-type':"text/json"});
         res.end(JSON.stringify(data));
     }else
     {
         res.writeHead(404,{'Content-type':"text/html"});
         res.end("error data not found");
     }
 })
 server.listen(3000, function(){
     console.log('listening at port 3000');
 })