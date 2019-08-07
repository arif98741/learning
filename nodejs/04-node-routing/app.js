var url = require('url');
var fs  = require('fs');

function renderHTML(path,res)
{
    fs.readFile(path,null,function(error,data){
        if(error)
        {
            res.writeHead(404);
            res.write('File Not Found');
        }else{
            res.write(data);
        }
        res.end();
    });

}

module.exports = {
    handleRequest : function (request,response) {
        response.writeHead(200,{'Content-Type' : 'text/html'});

        var path = url.parse(request.url).pathname;
        console.log(path);
        switch (path) {
            case '/blog':
                renderHTML('./blog.html',response);
                break;
            case '/login':
                renderHTML('./login.html',response);
                break;
            

            default:
                response.writeHead(404);
                response.write('Route not defined',response);
                response.end();

        }

    },
    url : url
}