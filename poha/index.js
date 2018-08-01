const express = require('express');

// set up express app
const app = express();

// Handle requests
app.get('/api', function (req, res) {
    console.log('GET request');
    res.send({ name: 'Bhavy' });
});

// listen to request
app.listen(4000, function () {
   console.log('Listening to the request at port no. 4000')
});