var http = require('http'), fs = require('fs'), url = require('url');
var exec = require('child_process').exec;


http.createServer(function(req, res) {
var abc = url.parse(req.url, true), path = abc.pathname;

if (path=='/90183692268807934844204653499881516397615934124226775735065875857624799287860312769887154161311253979823223859244357789554574701001496584526468171041383/gitit'){
	exec('git remote add origin https://github.com/techsin/cargame.git',function(){});
	exec('git pull',function(){});
}
fs.readFile('./index.html', function(err, html) {
  	if (err) { throw err; } else {
  	res.writeHead(200, {"Content-Type": "text/plain"});
  	res.write(html);
	  res.end();
	}
});

}).listen(80);