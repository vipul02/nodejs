const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
    // add a geo location
});

const Boss = mongoose.model('boss', BossSchema);

module.exports = Boss;