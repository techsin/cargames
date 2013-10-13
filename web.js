var http = require('http'), fs = require('fs'), url = require('url');
var exec = require('child_process').exec;


http.createServer(function(req, res) {
var abc = url.parse(req.url, true), path = abc.pathname;

fs.readFile('./index.html', function(err, html) {
  	if (err) { throw err; }
  	res.writeHead(200, {"Content-Type": "text/html"});
  	res.write(html);
	  res.end();
});

}).listen(80);