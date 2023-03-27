const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODOS : what subtypes? What will be in the object? Min 1 max 5 a la Mongoose MOvies? 
// How are we organizing plant type? All just a string for now? An optional variety or something?
// Confirm you want to move forward with comments, ya? What was the other option Mario recommended, again?
// Maybe add comments once other parts are added? May be tough to add after the fact though...

const plantSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        required: true
    },
    variety: String,
    seeds: String,
    datePlanted: {
        type: Date,
        required: true
    },
    dateHarvested: [Date],
    endDate: Date,
    // image: TBD,
    location: {
        // Address changed to coordinates via Google Maps API Geocoding
        // And then ideally put on map. 
        type: String,
        required: true
    },
    results: {},
    comments: [commentSchema]
}, {
    timestamps: true
})


const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Plant', plantSchema);