var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/client'));

app.listen('3000');