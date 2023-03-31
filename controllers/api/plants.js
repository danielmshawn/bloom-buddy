const Plant = require('../../models/plant');
const UserPlant = require('../../models/userPlant');

module.exports = {
    index,
    available,
    create,
    addToUser,
    updateUserPlant
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
        console.log("Existing Ids - ", existingIds);
        const plants = await Plant.find({_id: {$nin: existingIds}});
        res.json(plants);
    } catch(err) {
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try {
        const newPlant = await Plant.create(req.body);
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

async function updateUserPlant(req, res) {
    try{
        const updatedUserPlant = await UserPlant.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
            );
            res.json(updatedUserPlant)
        //Do i need a return redirect here? 
    } catch(err) {
        res.status(400).json(err)
    }
}