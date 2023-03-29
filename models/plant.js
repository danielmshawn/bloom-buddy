const mongoose = require('mongoose');

const plantSchema = require('./plantSchema');

module.exports = mongoose.model('Plant', plantSchema);