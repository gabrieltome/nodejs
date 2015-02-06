var http = require('http'); //chamando o módulo http do Node.js 

http.createServer(function (req, res) {  // executando a função createServer
										// recebe como parâmetro uma função anónima 
										// com dois parâmetros: req e res
										
  res.writeHead(200, {'Content-Type': 'text/html; chaset=utf-8'});
  res.write("hello, world!");
  res.end();
}).listen(3000);
console.log('Server running at http://localhost:3000/');