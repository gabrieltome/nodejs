var http =  require('http');
var fs = require('fs');
var readAsync = require('./read-async.js');
var readSync = require('./read-sync.js');
var file = "./node.exe";
var stream = fs.createWriteStream(file);
var download = "http://nodejs.org/dist/latest/node.exe";

http.get(download, function(res){
	console.log("Downloading Node.js...");
	res.on('data', function(data){
		stream.write(data);
	});
	res.on('end', function(){
		stream.end();
		console.log("Download finished!");
		readAsync(file);
		readSync(file);
	});
});