// load html pages

var http = require('http'),
	file = require('fs');

var server = http.createServer(function(request, response){
	file.readFile('./files/index.html', function(err, html){
		response.writeHead(200, {"Content-Type": "text/html"});
		if(err) response.write('File index.html don\'t exists!');
		response.write(html);
		response.end();
	});
});

server.listen(3000, function(){
	console.log('Server is running...');
});