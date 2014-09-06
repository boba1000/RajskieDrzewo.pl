#!/bin/env node

var fs = require('fs');
var ip_addr = process.env.OPENSHIFT_NODEJS_IP   || '127.0.0.1';
var port    = process.env.OPENSHIFT_NODEJS_PORT || '3000';
var nstatic = require("node-static");

// Serve static application files
var server = new nstatic.Server('');


require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        server.serve(request, response);
    }).resume();
}).listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', ip_addr , port);
})



