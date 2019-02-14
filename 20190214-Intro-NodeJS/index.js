const op = require("./operations");
const express = require("express");
const http = require("http");
const fs = require("fs");

var result = op.add(2, 5);

setTimeout(function(){
    console.log("ciao its");
    result = 99;
}, 1000);

setInterval(function(){
    console.log(result);
}, 500);



/*
http.createServer(function (req, res) {
    console.log(res.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
}).listen(8080);
*/

http.createServer(function (req, res) {
    console.log("START - " + req.url);

    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();

        console.log("RITORNO HTML - " + req.url);
    });

    console.log("END - " + req.url);
}).listen(8080);