const express = require('express');
const router = express.Router();

// api to get the list of all the boses
router.get('/poha-boses', function (req, res) {
   res.send({type: 'GET'});
});

// api to add a new poha boss
router.post('/poha-boses', function (req, res) {
   // console.log(req.body);
   res.send({
       type: 'POST',
       name: req.body.name,
       specs: req.body.specs
   });
});

// api to update the details of poha boss
router.put('/poha-boses/:id', function (req, res) {
   res.send({type: 'PUT'});
});

// api to delete the poha boss
router.delete('/poha-boses/:id', function (req, res) {
   res.send({type: 'DELETE'});
});

module.exports = router;