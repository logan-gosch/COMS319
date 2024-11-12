var express = require("express");

var cors = require("cors");

var fs = require("fs");

var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());

const host = "localhost";
const port = "8081";

app.listen(port, () => {
    console.log("App is listening at http://%s:%s", host, port);
});

app.get("/", (req, res) => {
    res.status(200);
    res.send("<h1 style='text-align: center; color: Green; background-color: black; border: 0px;'>Hello World From Node </h1><p style='align-items: center; background-color: blue; color: white; text-align: center'>Cool website stuff</p>")
});

app.get("/name", (req, res) => {
    res.send("Hello, my name is JJ!");
});

app.get("/listRobots", (req, res) => {
    fs.readFile("robots.json", "utf8", (err, data) => {
        console.log(data);
        res.status(404)
        res.send(data);
    });
});

app.get("/person", (req, res) => {
    const person = {
        name : 'alex',
        email : 'alex@mail.com',
        job : 'software dev'
    };
    console.log(person);
    res.status(200);
    res.send(person);
});
