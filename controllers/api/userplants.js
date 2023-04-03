const UserPlant = require('../../models/userPlant');

module.exports = {
    update,
    deleteUserPlant
}

async function update(req, res) {
    try {
        const userPlantId = req.params.id;
        const seeds = req.body.seeds;
        let datesHarvested = req.body.datesHarvested;
        const updateFields = {}
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
        res.status(200).json(updatedUserPlant);
        // if (!updatedUserPlant) { 
        //     return res.status(400).json({message: "UserPlant not found"})
        // }
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}
 

async function deleteUserPlant(req, res) {
    const userPlantId = req.params.id
    try {
        await UserPlant.findOneAndDelete({_id: userPlantId, user: req.user._id});
    } catch(err) {
        res.status(400).json(err);
    }
}