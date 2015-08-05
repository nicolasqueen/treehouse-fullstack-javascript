var router = require("./router.js");
var http = require('http');
// Problem: We need a simple way to look at a users badge count and JavaScript points from a web browser
// Solution: Use node.js to perform the profile lookups and serve our templates via http

// Create a web server


http.createServer(function (request, response) {
    router.home(request, response);
    router.user(request, response);
    //response.end('Hello World\n');
}).listen(process.env.PORT, process.env.IP);
console.log('Server running at Cloud9');




