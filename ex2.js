var fs = require('fs')

var path = process.argv[2].toString();
var stream = fs.createReadStream(path);
var retour = stream.pipe(process.stdout);
