var express=require("express");
var app=express();
// var path=require("path");
// var fs=require("fs");

app.get('/',function(req,res){
    res.send("welcome")
});
// app.use(express.static(path.join(__dirname,'public')));
// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname,"./company.html"))
app.listen(8081);
console.log("sever is running on port no 8081");
