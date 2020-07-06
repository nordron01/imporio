const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./routes/db');
var app = express();
const port = 8000;

var brain = require('brain.js');
const fs = require('fs');

var net = new brain.NeuralNetwork();
/*
net.train(trainingSet,
    {
        errorThresh: 0.005,  // error threshold to reach
        iterations: 100,   // maximum training iterations
        log: true,           // console.log() progress periodically
        logPeriod: 1,       // number of iterations between logging
        learningRate: 0.3    // learning rate
    }
);
*/

var mnist = require('mnist'); // this line is not needed in the browser

var set = mnist.set(1000, 1);
console.log(set.training);
//const trainingSet = set.training;

net.train([{ input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]);

var output = net.run([1, 0]); // [0.987]
console.log(output);

//app.use(bodyParser.urlencoded({ extended: true }));

var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/"));


MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {

    var dbo = database.db("testing");

    app.post("/user", jsonParser, function(request, response) {
        if (!request.body) return response.sendStatus(400);
        console.log(request.body);


        dbo.collection("testkeys").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            //db.close();
            response.json(result);
        });
    });



    app.post("/collection", jsonParser, function(request, response) {
        if (!request.body) return response.sendStatus(400);
        console.log(request.body);
        dbo.collection("testkeys").insertOne(request.body, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            //	db.close();
        });


        response.json({ "response": "TRUE" });


    });


    app.post("/searchonetest", jsonParser, function(request, response) {
        if (!request.body) return response.sendStatus(400);
        console.log(request.body);
        dbo.collection("testkeys").find(request.body).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            //db.close();
            response.json(result);
        });
    });

    app.listen(port, () => {
        console.log('We are live on ' + port);
    });

    /*
   if (err) return console.log(err)
    require('./routes')(app, database);
	app = http.createServer(app);
    app.listen(port, () => {

        console.log('We are live on ' + port);
    });


    */

});