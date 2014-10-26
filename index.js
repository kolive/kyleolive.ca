var express = require('express')
var app = express();
var jade = require('jade');

var app_path = '/home/kolive/staging.kyleolive.ca';

var homepage = jade.compileFile(app_path + '/templates/home.jade');

app.use('/stylesheets', express.static(app_path + '/static/stylesheets/'));
app.use('/images', express.static(app_path + '/static/images/'));


app.get('/', function(req, res) {
  res.send(homepage({
    pageTitle : 'Two Bit Repo', 
    latestPostTitle : "Sorry! My site is currently being overhauled.",
    highlightBackground: 'background-image: url(/images/highlight.png)'}));
});

app.get('*', function(req, res, next) {
    var err = new Error();
      err.status = 404;
        next(err);
});

app.use(function(err, req, res, next){
  if(err.status !== 404){
    return next();
  }

  res.redirect('/');
});


exports.app = app;
