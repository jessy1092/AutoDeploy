var express = require('express');

var app = express();

app.get('/', function (req, res){
    res.send('Hello, world! Auto-deploy from travis.');
});

var port = Number(process.env.PORT || 5000);
app.listen(port);
