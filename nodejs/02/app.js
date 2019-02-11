var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

http.createServer(function RequestFunc(req,res){
	res.writeHead(200,{'Content-Type' : 'text/plain'});
	console.log(module2.namota(5));
	res.end();
}).listen(8000);

