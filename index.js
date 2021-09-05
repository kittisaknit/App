/*
const express = require('express');
const app = express();
const path = app.path();
//const port = 3000;

app.get('/', (req, res) => {
    res.send('555555555555');

});




app.listen(3000);
*/
var http = require("http");
http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World 555\n');
}).listen(8000);

// Console will print the message
console.log('Server running at http://127.0.0.1:8000/');


 