var express = require("express");
var app     = express();
var path    = require("path");

config = require('./config');

app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(config.app_config.port);
console.log("Running at Port "+config.app_config.port);