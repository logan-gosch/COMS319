// Logan Gosch
// lgosch@iastate.edu
// 11/12/2024

var express = require("express");
var cors = require("cors");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "secoms319";
const client = new MongoClient(url);
const db = client.db(dbName);

app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});

app.get("/listRobots", async (req, res) => {
  await client.connect();
  console.log("Node successfully connected to MongoDB");

  const query = {};
  const results = await db.collection("robot").find(query).limit(100).toArray();
  console.log(results);

  res.status(200);
  res.send(results);
});

app.get("/:id", async (req, res) => {
    const id = Number(req.params.id);
    console.log("Robot to find :", id);

    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");

    const query = {id: id};
    const results = await db.collection("robot")
    .findOne(query);
    console.log("Results :", results);

    if (!results)
        res.send("Not Found").status(404);
    else
        res.send(results).status(200);
 });