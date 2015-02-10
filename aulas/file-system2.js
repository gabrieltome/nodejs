// WriteStream // create files

var http = require('http');
var file = require('fs');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello File System!</h1>");
	response.write("<br>");
	response.write("<h3>Node.js</h3>");
	var txt = file.createWriteStream('./files/logs.txt', {flags: 'a'});
	txt.write(request.url+'\n');
	response.end();
});

server.listen(3000, function(){
	console.log("Server is running...");
});