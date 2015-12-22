var express = require('express');
var app = express();
var parserApp = require('./my-parser');
// app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send(parserApp());
})
app.listen(8081);
