const Plant = require('../../models/plant');
const UserPlant = require('../../models/userPlant');

module.exports = {
    index,
    available,
    create
}

async function index(req, res) {
    try {
        req.body.user = req.user._id;
        const plants = await Plant.find({user: req.user._id});
        res.json(plants);
    } catch(err) {
        res.status(400).json(err)
    }
}

async function available(req, res) {
    try {
        const existingIds = await UserPlant.find({user: req.user._id}).select('plant._id')
        console.log(existingIds);
        const plants = await Plant.find({_id: {$nin: existingIds}});
        res.json(plants);
    } catch(err) {
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try {
        req.body.user = req.user._id;
        const newPlant = await Plant.create(req.body);
        console.log(newPlant, "This is new plant")
        res.json(newPlant);
    } catch(err) {
        res.status(400).json(err)
    }
}