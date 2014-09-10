#!/bin/env node

var ip_addr = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || '3000';

var connect = require('connect');
var http = require('http');
var fs = require('fs');
var serveStatic = require('serve-static');
var dir = './';
var path = require('path').resolve(dir);
var app = connect();

app.use(serveStatic(path));

// respond to all requests
app.use(function(req, res) {
    if (!fs.existsSync(path + req.url)) {

        fs.readFile(path + '/index.html', 'utf8', function(err, data) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        });
    }
});

//create node.js http server and listen on port
http.createServer(app).listen(port, ip_addr);
console.log('%s listening at %s ', ip_addr, port);
