//Called Schema becuase this wont export a module...says the video

const Schema = require('mongoose').Schema;

const plantSchema = new Schema({
    name: { type: String, required: true },
    variety: String,
}, {
    timestamps: true
});

module.exports = plantSchema;