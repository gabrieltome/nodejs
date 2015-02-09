// read files

var file = require('fs');

file.readFile('./files/books.txt', function(err, data){
	if(err) throw err;
	console.log(data.toString());
});
