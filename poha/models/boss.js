const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for geolocation of the poha boss
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

// create custom schema for poha boses
const BossSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    specs: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Boss = mongoose.model('boss', BossSchema);

module.exports = Boss;