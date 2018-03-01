const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var path = require('path');
const database = require('./config/db');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//app.use(express.static(path.join(__dirname, '../../src/provider')));
const mongoDB = database.url;

//Connect to Mangoose
mongoose.connect(mongoDB, {});
const db = mongoose.connection;


db.on('connected', function() {
    console.log('Database Connected successfully');
});

require('./routes')(app);

app.listen(port, () => console.log(`Server started on ${port}`));

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// var employees = [];
// var url = "mongodb://localhost:27017/reactDB";

// app.use(bodyParser.json());

// // app.get('/', function(req, res) {
// //     res.send('Page Not Found', 404);
// // });

// app.route('/employeeList').get(function(req, res) {
//     if (mongodb != null && mongodb != undefined) {
//         mongodb.collection('EmpList').find({}, function(err, doc) {
//             if (err) {
//                 throw err;
//             } else {
//                 doc.forEach(function(item) {
//                     if (item !== null) {
//                         employees.push({ Employee_Id: item.empId, Emp_Name: item.name });
//                     }
//                 }, function(err) {
//                     res.send(employees);
//                     res.status(200).send('Success')
//                     res.json(employees);
//                 });
//             }
//         });
//     }
// });
// app.post('/employeeList', function(req, res) {
//     if (mongodb != null && mongodb != undefined) {

//         var resultObject = {};

//         mongodb.collection('EmpList').insertOne(req.body, function(err, result) {
//             if (err) {
//                 resultObject.status = "fail";
//                 resultObject.statusCode = 401;
//                 resultObject.message = "Create new record failed";
//                 res.send(JSON.stringify(resultObject));
//             } else {
//                 resultObject.status = "Success";
//                 resultObject.statusCode = 200;
//                 resultObject.message = "success in Creating new record";
//                 res.send(JSON.stringify(resultObject));
//             }
//         });
//     }
// });

// const port = 5000;
// //app.listen(port, () => console.log(`Server started on ${port}`));

// app.listen(port, function() {
//     console.log('Server started  ....!');
//     createMongoDbConnection();
// });

// function createMongoDbConnection() {
//     if (MongoClient != null && MongoClient != undefined) {
//         MongoClient.connect('mongodb://localhost:27017/reactDB', function(err, dbInstance) {
//             if (err) {
//                 mongodb = null;
//                 console.log("Failed to create DB Instance :( ");
//             } else {
//                 mongodb = dbInstance;
//                 console.log("Successfully DB_Instance is created... :)");
//             }
//         });
//     }
// }