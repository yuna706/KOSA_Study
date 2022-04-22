var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("Hello Calc");
});

// localhost:7777/add?p1=10&p2=20

app.get("/add", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = Number(p1) + Number(p2);

    res.send("Result : " + result);
});

app.listen(7777);