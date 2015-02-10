// load html pages

var http = require('http'),
	file = require('fs');

var server = http.createServer(function(request, response){

	response.writeHead(200, {"Content-Type": "text/html"});
		
	if(request.url == '/'){
		file.readFile(__dirname+'/files/index.html', function(err, html){
		if(err) response.write('File index.html don\'t exists.');
		response.write(html);
		response.end();		
	});
	}else if(request.url == '/dogs'){
		file.readFile(__dirname+'/files/dogs.html', function(err, html){
		if(err) response.write('File dogs.html don\'t exists.');
		response.write(html);
		response.end();	
		});
	}else{	
		response.write("Page not exists!");
		response.end();
	}
});

server.listen(3000, function(){
	console.log('Server is running...');
});