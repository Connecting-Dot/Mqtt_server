const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    T: String,
    GD: String,
    GT: String,
    F: String,
    GA: String,
    NS: String,
    HD: String,
    DP: String,
    DC: String,
    DC3: String,
    ALT: String,
    SPA: String,
    ST: String,
    REG: String,
    MTP: String,
    SIM: String,
    IsOverspeeding: String
});

// Model
const vehicledata1 = mongoose.model('vehicle1', BlogPostSchema);
const vehicledata2 = mongoose.model('vehicle2', BlogPostSchema);

module.exports = vehicledata1;
module.exports = vehicledata2;