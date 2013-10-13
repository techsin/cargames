var http = require('http'), fs = require('fs'), url = require('url'), cs =require('child_process');
var exec = cs.exec, spawn = require('child_process').spawn, ls    = spawn('bash');

var port = process.env.PORT || 3000;


ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('close', function (code) {
  console.log('child process exited with code ' + code);
});



http.createServer(function(req, res) {
var abc = url.parse(req.url, true), path = abc.pathname;


if (path=='/90183692268807934844204653499881516397615934124226775735065875857624799287860312769887154161311253979823223859244357789554574701001496584526468171041383/gitit'){

  
	

	ls.stdin.write('git remote add origin https://github.com/techsin/cargames.git \n');
	ls.stdin.write('git pull \n');
    ls.stdin.end();
	res.write('updated');
 	res.end();
	return;
}

fs.readFile('./index.html', function(err, html) {
  	if (err) { throw err; }
  	res.writeHead(200, {"Content-Type": "text/html"});
  	res.write(html);
	res.end();
});

}).listen(port);
console.log(port);
	

	// ls.stdin.write('git remote add origin https://github.com/techsin/cargames.git');
    
	// ls.stdin.write('git pull');