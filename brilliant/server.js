'use strict';
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var port = process.env.PORT || 1337;
var pathName;
var ext;
http.createServer(function (request, response) {
	pathName = url.parse(request.url).pathname;
	ext = pathName.substring(pathName.indexOf(".") + 1, pathName.length);
	fs.readFile(__dirname + pathName, function (err, data) {
		if (err) {
			response.writeHead(404, { 'Content-type': 'text/html' });
			response.write('Page Was Not Found');
			response.end();
		} else if (ext == "css") {
			response.writeHead(200, { 'Content-type': 'text/css' });
			response.write(data);
			response.end();
		} else {
			response.writeHead(200, { 'Content-type': 'text/html' });
			response.write(data);
			response.end();
		}
	});
}).listen(port);
