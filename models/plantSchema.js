const Schema = require('mongoose').Schema;

const plantSchema = new Schema({
    name: { type: String, required: true },
    variety: String,
}, {
    timestamps: true
});

module.exports = plantSchema;