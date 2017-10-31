'use strict';
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var port = process.env.PORT || 1337;
var pathName;
http.createServer(function (request, response) {
	pathName = url.parse(request.url).pathname;
	fs.readFile(__dirname + pathName, function (err, data) {
		if (err) {
			response.writeHead(404, { 'Content-type': 'text/html' });
			response.write('Page Was Not Found');
			response.end();
		} else {
			response.writeHead(200, { 'Content-type': 'text/html' });
			response.write(data);
			response.end();
		}
	});
}).listen(port);
