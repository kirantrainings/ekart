var port,express,app;

var details = require("./app/config/environment/development");
express= require('express');
var app= express();

app.use("/",function(req,res){
    res.send("<h1>Hello Guys<h1>");
});

app.listen(details.port);
console.log("Server Running at port http://locahost:"+details.port);