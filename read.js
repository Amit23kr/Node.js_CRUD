//read data from database 
var http=require('http');
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/college";

var server=http.createServer(function(req,res){
    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser : true},function(err,client){
        if(err)throw err;
        var db=client.db('college');
        db.collection('student1').find({},{_id: false}).toArray(function(err,result){//we can use findOne({}) to fetch one recod from database
        //if we want to read all record from database then we can use find({}) along with toArray() function.
                if(err)throw err;
                res.writeHead(200,{'Content-type':"text/html"});
                res.end(JSON.stringify(result));
        });
    });
});
server.listen(3000);