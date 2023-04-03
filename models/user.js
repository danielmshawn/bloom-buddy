const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const SALT_ROUNDS = 6;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      // required: true Prob not. Just render no location sorry
    },
    coordinates: {
      type: [Number],
      // required: true
    },
  }
  // latitude: Number, Lets try a GeoJSON object above and see if it works.
  // longitude: Number,
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the user document
  if (!this.isModified('password')) return next();
  // Replace the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

// Creating a 2dsphere index per the mongo docs: 
// https://www.mongodb.com/docs/manual/geospatial-queries/

userSchema.index({ location: '2dsphere'});

module.exports = mongoose.model('User', userSchema);