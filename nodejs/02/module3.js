var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type" : 'text/plain'});
	res.write("hello world now working");
	res.end();
}).listen(9000);