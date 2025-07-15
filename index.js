var http = require("http");
var fs = require("fs");


function serve(request, response) {
    if (request.url == '/') {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(fs.readFileSync("./server/Arf.html"));
    } else {
        if (request.url.endsWith(".css")) {
            response.writeHead(200, { "Content-Type": "text/css" });
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
        }
        response.end(fs.readFileSync('./server/'+request.url));
    }
    
}


http.createServer(serve).listen(8080);