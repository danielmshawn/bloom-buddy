const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const UserPlant = require('../../models/userPlant')

module.exports = {
  create,
  login,
  getNearbyUsers
};


async function create(req, res) {
  try {
    // Add the user to the db
    if (!req.body.location || !req.body.location.coordinates) {
      delete req.body.location;
    }
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

// GeoJSON 2dSphere Query using $near. Putting here for now, as
// I don't believe this needs a seperate module
// Since I'm working with the User models still

async function getNearbyUsers(req,res) {
  try {
    const currentUser = await User.findById(req.user._id);
    const maxDistance = 500000;

    const nearbyUsers = await User.find({
      location: {
        $near: {
          type: "Point",
          coordinates: currentUser.location.coordinates
        },
        $maxDistance: maxDistance
      },
      _id: {$ne: currentUser._id}
    });
    

    res.json(nearbyUsers);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}