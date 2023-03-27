const Plant = require('../../models/plant')

module.exports = {
    index,
}

async function index(req, res) {
    try {
        req.body.user = req.user._id;
        const plants = await Plant.find({user: req.user_id});
        res.json(plants);
    } catch(err) {
        res.status(400).json(err)
    }
}