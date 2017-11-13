var express = require('express');
var mockData = require('./mockData.json');
var app = express();
var _ = require('lodash');

app.get('/GetAllProducts', function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(mockData);
});

app.get('/GetProductById', function(req, res) {
	var id = req.query.id;
	var product = _.find(mockData.products, productItem => +productItem.id === +id);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(product);
});

app.use(function(req, res) {
	res.sendStatus(404);
});

var server = app.listen(8000, function() {
	var port = server.address().port;
	console.log('Express server listening on port ' + port);
});