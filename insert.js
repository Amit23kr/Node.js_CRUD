//insert data into mongodb(database) using node.js

var http=require('http');
var fs=require('fs');
var querystring=require('querystring');
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/college";

var server=http.createServer(function(req,res){
    if(req.url==="/form"){
    res.writeHead(200,{'Content-type':"text/html"});
    fs.createReadStream('./public/form.html',"UTF-8").pipe(res);
    }
    if(req.method==="POST")
    {
        var data="";
        req.on("data", function(chunk){
            data+=chunk;
        });
        req.on("end", function(chunk){
            

            MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, function(err,client){  //conctivity code mongodb 
                if(err)throw err;
                var db=client.db('college');
                var q=querystring.parse(data);
                db.collection('student1').insertOne(q, function(err,res){
                    if(err)throw err;
                    console.log("inserted");
                    client.close();
                });
            })

            
        });
    }
});
server.listen(3000);