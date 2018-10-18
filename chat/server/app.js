var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(function(req, res, next){
	console.log('middleware');
	req.testing = 'testing';
	return next();
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
	res.send('hello world')
});

app.ws('/', function(ws, req){
	ws.on('message', function(msg){
		console.log(msg);
	});
	console.log('socket', req.testing);
});

app.listen(3000, function(){
	console.log('app run on port 3000.')
});