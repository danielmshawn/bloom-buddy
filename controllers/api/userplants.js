const UserPlant = require('../../models/userPlant');

module.exports = {
    update
}

async function update(req, res) {
    try {
        const userPlantId = req.params.userPlantId;
        const seeds = req.body.seeds;
        const datesHarvested = req.body.datesHarvested;
        const updateFields = {}
        if (seeds) {
            updateFields.seeds = seeds;
        } if (datesHarvested) {
            updateFields.$push= {datesHarvested: {$each: datesHarvested} }
        }
        const updatedUserPlant = await UserPlant.findOneAndUpdate(
            {_id: userPlantId, user: req.user._id},
            updateFields,
            { new: true }
        )
        if (!updatedUserPlant) {
            return res.status(400).json({message: "UserPlant not found"})
        }
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}



// seeds
//   