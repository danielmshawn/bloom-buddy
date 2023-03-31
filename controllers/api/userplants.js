const UserPlant = require('../../models/userPlant');

module.exports = {
    update
}

async function update(req, res) {
    try {
        const userPlantId = req.params.userPlantId;
        const seeds = req.body.seeds;
        let datesHarvested = req.body.datesHarvested;
        const updateFields = {}
        // console.log(userPlantId)
        if (!Array.isArray(datesHarvested)) {
            datesHarvested = [datesHarvested]
        }
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
        console.log(req.body)
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