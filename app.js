// Http module to handle requests
var http = require('http');

// Create a server that always respons with hi
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hi.");
});

//Use environment var port if defined (like on heroku) or default to localhost port 8000, IP defaults to 127.0.0.1
server.listen(process.env.PORT || 8000);
console.log('Server started on: ' + process.env.PORT || 8000);