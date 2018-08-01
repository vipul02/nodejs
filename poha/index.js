const express = require('express');
const bodyParser = require('body-parser');

// set up express app
const app = express();

//setting up json body-parser
app.use(bodyParser.json());

// initialising the routes
app.use('/api', require('./routes/api'));

// listen to request
app.listen(4000, function () {
    console.log('Listening to the request at port no. 4000')
});