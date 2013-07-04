var express = require('express');

var fs = require('fs');
var infile = "index.html";
var buffer = new Buffer("", encoding = 'utf8');

var app = express.createServer(express.logger());
buffer = fs.readFileSync(infile, encoding = 'utf8');

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8', 0, 7));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
