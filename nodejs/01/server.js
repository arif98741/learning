var http = require('http');
function RequestFunc(req,res)
{
	res.writeHead(200,{'Content-Type' : 'text/plain'});
	res.write('Hello, I am starting to learn nodeJS');
	res.end();
}
http.createServer(RequestFunc).listen(8000);