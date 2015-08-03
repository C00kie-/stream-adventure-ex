var through = require('through2')
var fs = require('fs')

fs.createReadStream('out4.txt')
.pipe(through(function(chunk, enc, callback){
	this.push(chunk)
	callback()
}))

.pipe(fs.createWriteStream('./out.txt'))

/*

var tr = through(write, end){
	function write(buf, 'utf8', next){
		this.push('I got some data : ' + buf + '\n');
		next();
	},
	function end(done){
		done();
	}
};

process.stdin.pipe(tr).pipe(process.stdout);*/
