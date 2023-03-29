const Plant = require('../../models/plant');
const UserPlant = require('../../models/userPlant');

module.exports = {
    index,
    available,
    create,
    addToUser
}

async function index(req, res) {
    try {
        const myPlants = await UserPlant.find({user: req.user._id});
        res.json(myPlants);
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
        const newPlant = await Plant.create(req.body);
        console.log(newPlant, "This is new plant")
        res.json(newPlant);
    } catch(err) {
        res.status(400).json(err)
    }
}

async function addToUser(req, res) {
    try {
        const plant = await Plant.findById(req.params.id);
        await UserPlant.create({plant, user: req.user._id});
        const myPlants = await UserPlant.find({user: req.user._id});
        res.json(myPlants);
    } catch(err) {
        res.status(400).json(err)
    }
}