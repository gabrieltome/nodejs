var fs = require('fs');

var readDir = function(){
	fs.readdir(__dirname, function(err, dir){
		if(err) return err;
		dir.forEach(function(file){
			read(file);
		});
	});
};

var read = function(file){
	var path = './' + file;
	fs.stat(path, function(err, stat){
		if(err) return err;
		if(stat.isFile()){
			console.log('%s %d bytes', file, stat.size);
		}
	});
};

readDir();