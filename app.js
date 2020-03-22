var express = require('express');
var path = require('path');

var app = express();

console.log('odpalone');

app.set('views', path.join(__dirname, 'views'));
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended : false}));

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

module.exports = app;