const express = require('express');
const router = express.Router();
const Boss = require('../models/boss');

// api to get the list of all the bosses
router.get('/poha-boses', function (req, res, next) {
   /* to get all the bosses
    Boss.find({}).then(function (ninjas) {
       res.send(ninjas)
   });
   Dpreciated geoNear in mongo 4.0
   Boss.geoNear(
       {type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
       {maxDistance: 10000, spherical:true}
   ).then(function (ninjas) {
       res.send(ninjas);
   });*/
    // var point = {
    //     type: "Point",
    //     coordinates:
    // };
    // var geoOptions =  {
    //     spherical: true,
    //     maxDistance: 10000
    // };
    // Boss.find({
    //     'geo': {
    //         $near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
    //         $maxDistance: 10000
    //     }
    // }).then(function (bosses) {
    //     res.send(bosses);
    // });
    Boss.aggregate([{
        $geoNear: {
            near: {
                type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
            },
            spherical: true, maxDistance: 100000, distanceField: "dist.calculated"
        }
    }]).then(function(results){
        res.send(results);
    });
});

// api to add a new poha boss
router.post('/poha-boses', function (req, res, next) {
   Boss.create(req.body).then(function (boss) {
       res.send(boss);
   }).catch(next);
});

// api to update the details of poha boss
router.put('/poha-boses/:id', function (req, res, next) {
    Boss.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
        Boss.findOne({_id: req.params.id}).then(function (ninja) {
            res.send(ninja);
        });
    });
});

// api to delete the poha boss
router.delete('/poha-boses/:id', function (req, res, next) {
   Boss.findByIdAndRemove({_id: req.params.id}).then(function (ninja) {
       res.send(ninja);
   });
});

module.exports = router;