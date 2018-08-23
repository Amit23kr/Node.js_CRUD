//how to update file in database(mongodb) using node.js

var http=require('http');
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/college";

var server=http.createServer(function(req,res){
    MongoClient.connect('mongodb:localhost:27017',{useNewUrlParser: true},function(err,data){
                 if(err) throw err;
        var db=data.db('college');
        var olddata={ email: "hdad@gmail.com" };
        var newdata={$set : {email: "amit1234@gmail.com" , firstname:"Amit sah" , address:"bokaro"}};
        db.collection('student1').updateOne(olddata,newdata, function(err,result){
            if(err) throw err;
            console.log("1 row updated");
        data.close();
        });
    });
});
server.listen(3000);