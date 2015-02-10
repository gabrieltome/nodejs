// exists

var file = require('fs');
var path = '.files/new.txt';

file.readFile('./files/books.txt', function(err, data){
	if(err) throw err;
	console.log(data.toString);
});

file.exists(path, function(result){
	if(!result){
		file.writeFile(path,'creating file with nodejs', function(err){
				
				console.log('Successfully created file.');
		});
	}else{
		console.log('File is already created.');
	}
});