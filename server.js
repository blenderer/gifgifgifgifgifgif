// get our config
var config = require('./config.js');

// http so we can access giphy
var http = require('http');

// scaffold the express app
var express = require('express');
var app = express();

// our gif search endpoint
app.get('/', function(req, res) {
    res.send(req.query.q);
});

// our user creation endpoint
app.post('/user', function(req, res) {
    res.send(req.query.user + " " + req.query.password);
});

app.listen(3000);