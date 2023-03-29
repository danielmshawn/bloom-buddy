const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plantSchema = require('./plantSchema');


// Is this embedded into the user model, or staying here?
// It's kind of both a M:M and 1:M

// Properties to add once this is with MVP- 
// imageURL, results: [], comments: [commentSchema]

const userPlantSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    plant: plantSchema,
    seeds: String,
    datePlanted: {
        type: Date,
        required: true,
        default: function() {
            return new Date();
        }
    
    },
    dateHarvested: [Date],
    endDate: Date,
}, {
    timestamps: true
})


module.exports = mongoose.model('UserPlant', userPlantSchema)