'use strict';

// simple express server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public')); // Make the public folder your web root, for hosting files.

app.get('/', function(req, res) { // Express will serve out the index.html file (via GET)
    res.sendfile('./public/index.html');
});

app.post('/weather', function(req, res) {  // This is the weather handler.  It recieves POSTs @ http://localhost:3000/weather.
    var fooParam = req.body.fooParam;
    var barParam = req.body.barParam;
    var prom = new Promise();
    prom.then((configuration)=>{ // Inside the weather handler, do something async...
        configuration = "Yo";
        if(configuration){
            var config = JSON.parse(configuration);
            res.setHeader('Content-Type', 'application/json');
            var message = JSON.stringify({"success":true, "msg": "Weather API message.", "result":config});
            res.send(message); 
        }
    });
});

app.listen(3000, function(){
    console.log("http server running on port 3000");
});
