var http = require ('http');

http.createServer(function (request, response) {
  response.writeHead (200, {'Content-Type': 'text/plain'});
  response.end ('Hola Mundo!\n');
}).listen(8081);