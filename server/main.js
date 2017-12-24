var express = require('express');
var app = express();
var fs = require("fs");
var path = require("path");
var serveStatic = require('static-server');
app.use(express.static(__dirname + '/public'));
//app.get('/login', require('./login.html'));




var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});


