#!/usr/bin/env node
var http = require('http')
var fs = require('fs')

var port = 8080

http.createServer(function(req,res) {
	fs.readFile('.' + req.url, function(e, data) {
		if (e) {
			res.end("Error: " + e)
			return
		}
		res.end(data)
	})
}).listen(port, '127.0.0.1')

console.log('Server running at http://127.0.0.1:' + port);
