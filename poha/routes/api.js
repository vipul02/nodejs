const express = require('express');
const router = express.Router();
const Boss = require('../models/boss');

// api to get the list of all the boses
router.get('/poha-boses', function (req, res, next) {
   res.send({type: 'GET'});
});

// api to add a new poha boss
router.post('/poha-boses', function (req, res, next) {
   Boss.create(req.body).then(function (boss) {
       res.send(boss);
   }).catch(next);
});

// api to update the details of poha boss
router.put('/poha-boses/:id', function (req, res, next) {
   res.send({type: 'PUT'});
});

// api to delete the poha boss
router.delete('/poha-boses/:id', function (req, res, next) {
   Boss.findByIdAndRemove({_id: req.params.id}).then(function (ninja) {
       res.send(ninja);
   });
});

module.exports = router;