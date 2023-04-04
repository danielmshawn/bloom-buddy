import { useState } from "react"



export default function EditPlantForm({ plant, updateUserPlant, userPlantId, setShowUserPlantForm }) {

const [updatedUserPlant, setUpdatedUserPlant] = useState({
    seeds: "",
    datesHarvested: []
})

function handleChange(evt) {
    setUpdatedUserPlant({...updatedUserPlant, [evt.target.name]: evt.target.value})
    // console.log(updatedUserPlant);
}

function handleSubmit(evt) {
    evt.preventDefault();
    updateUserPlant(userPlantId, updatedUserPlant);
    setShowUserPlantForm(false);
    
    // console.log(updatedUserPlant);
}

    return(
         <div>
            <h1>Edit Plant Form</h1>
            <form onSubmit= {handleSubmit}>
                <label>Seed: </label>
                <input type="text" autoComplete="off" name="seeds" value={updatedUserPlant.seeds} onChange={handleChange} placeholder="Where Did You Get Your Seeds?" />
                <label>Date Harvested</label>
                <input type="date" name="datesHarvested" value={updatedUserPlant.datesHarvested} onChange={handleChange} />
                <button type="submit">Save</button>
            </form>

        </div>
    )
}