var fs = require('fs');

var readAsync = function(file){
	console.log("Async - Reading...");
	var start = new Date().getTime();
	fs.readFile(file);
	var end = new Date().getTime();
	console.log("Async block: " + (end - start) + "ms");
};
module.exports = readAsync;