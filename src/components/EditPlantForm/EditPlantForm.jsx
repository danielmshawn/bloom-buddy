import { useState, useEffect } from "react"

import * as plantsAPI from "../../utilities/plants-api"


export default function EditPlantForm({ plant, updateUserPlant, userPlantID }) {

const [updatedUserPlant, setUpdatedUserPlant] = useState({
    seeds: "",
    datesHarvested: []
})

function handleChange(evt) {
    setUpdatedUserPlant({...updatedUserPlant, [evt.target.name]: evt.target.value})

}

function handleSubmit(evt) {
    evt.preventDefault();
    updateUserPlant(userPlantID, updatedUserPlant);
}

    return(
         <div>
            <h1>Edit Plant Form</h1>
            <form onSubmit= {handleSubmit}>
                <label>Seed: </label>
                <input type="text" name="seeds" value={updatedUserPlant.seeds} onChange={handleChange} placeholder="Where Did You Get Your Seeds?" />
                <label>Date Harvested</label>
                <input type="date" name="datesHarvested" value={updatedUserPlant.harvestDates} onChange={handleChange} />
                <button type="submit">Save</button>
            </form>

        </div>
    )
}