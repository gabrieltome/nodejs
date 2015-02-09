var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Context-Type": "text/html"});
	
	if(request.url == '/'){
		response.write("<h1>Pagina principal</h1>");
	}else if(request.url == '/contato'){
		response.write("<h1>Contato</h1>")
	}else if(request.url == '/clientes'){
		response.write("<h1>Clientes</h1>")
	}else{
		response.write("Pagina nao encontrada");
	}
	response.end();
});

server.listen(3000, function(){
	console.log("Server running...");
});

