var fs = require('fs');

var readSync = function(file){
	console.log("Sync - Reading...");
	var start = new Date().getTime();
	fs.fs.readFileSync(file);
	var end = new Date().getTime();
	console.log("Sync block: "+ ( end - start ) +"ms");
};
module.exports = readSync;