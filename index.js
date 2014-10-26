var express = require('express')
var app = express();
var jade = require('jade');

var homepage = jade.compileFile('./templates/home.jade');

app.use('/stylesheets', express.static(__dirname + '/static/stylesheets/'));

app.get('/', function(req, res) {
  res.send(homepage({pageTitle : 'Hello World', latestPostTitle : 'Welcome to the world!' }));
});


exports.app = app;
