const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/poha');
mongoose.Promise = global.Promise;

//setting up json body-parser
app.use(bodyParser.json());

// initialising the routes
app.use('/api', require('./routes/api'));

// error handling
app.use(function (err, req, res, next) {
    res.status(422).send({error:err.message});
});

// listen to request
app.listen(4000, function () {
    console.log('Listening to the request at port no. 4000')
});