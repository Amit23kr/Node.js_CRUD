//we can perform GET and POST method using node.js

var http=require('http');
var fs=require('fs');
var url=require('url');
var querystring=require('querystring');

var server =http.createServer(function(req,res){
    if(req.url==="/form")
    {
        res.writeHead(200,{'Content-type':"text/html"});
        fs.createReadStream("./public/form.html","UTF-8").pipe(res);

    } 
    if(req.method==="GET")
    {
        var q =url.parse(req.url,true).query;
       // console.log(q);
    }else if(req.method==="POST")
    {
        var data="";
        req.on("data",function(chunk){
            data += chunk;
        });
        req.on("end",function(chunk){
            var finaldata=querystring.parse(data);
            console.log(finaldata);
        });
    }
});
server.listen(3000);//Avi tak humlogo ne data go joki GET or POST use kar ke aa raha tha usako console pe display karwaya tha ab esake baad humlog us data ko database mai dalenge using mongodb
//inser data into mongodb using node.js

