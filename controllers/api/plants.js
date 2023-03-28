const Plant = require('../../models/plant');

module.exports = {
    index,
    create
}

async function index(req, res) {
    try {
        req.body.user = req.user._id;
        const plants = await Plant.find({user: req.user._id});
        res.json(plants);
        console.log(plants, "This is our plants");
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