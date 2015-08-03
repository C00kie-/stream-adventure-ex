var through = require('through2'),

 tr = through(function(buf, next){
	this.push(buf.toString().toUpperCase());
	next();
});

process.stdin.pipe(tr).pipe(process.stdout);

/*var through = require('through2')

process.stdin
.pipe(through(function(chunk, enc, callback, err){
	if (err)
	{
		return (err)
	}
	this.push(chunk)
	callback()
}))

.toUpperCase().pipe(stdout)
*/
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
