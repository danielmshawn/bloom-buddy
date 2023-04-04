const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plantSchema = require('./plantSchema');

// Properties to add once this is with MVP - 
// imageURL, results: [], comments: [commentSchema]

const userPlantSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    plant: plantSchema,
    seeds: {
        type: String,
        default: ""
    },
    datePlanted: {
        type: Date,
        // required: true,
        default: function() {
            return new Date();
        }
    },
    datesHarvested: [Date],
    endDate: Date,
}, {
    timestamps: true
})


module.exports = mongoose.model('UserPlant', userPlantSchema)