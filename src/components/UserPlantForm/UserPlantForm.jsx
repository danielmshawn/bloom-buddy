import { useState } from "react"

import "./UserPlantForm.css"




export default function UserPlantForm({ plant, updateUserPlant }) {

    const [userPlantDetails, setUserPlantDetails] = useState({
        seeds: "",
        datePlanted: plant.datePlanted
    })
    

    function handleChange(evt) {
        setUserPlantDetails({ ...userPlantDetails, [evt.target.name]: evt.target.value });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        updateUserPlant(userPlantDetails);
    }


    return (
        <div className="userPlantForm">
            <h2>UserPlant Form</h2>
            <h2>Is the name here? {plant.plant.name}</h2>
            <form onSubmit={ handleSubmit }>
                {/* <div className="plantedDatePicker">
                    <label>Date Planted: </label>
                    <input type="date" name="datePlanted" value={plant.datePlanted} onChange={ handleChange } />
                </div> */}
                <label>Seeds: </label>
                <input
                    type="text"
                    name="seeds"
                    value={ plant.seeds }
                    onChange= { handleChange }
                    placeholder="Where Did You Get Your Seeds?"
                />
               
        <button type="submit">Save</button>
        <button style={{backgroundColor:"red"}}>End Plant Life</button>
             </form>
        </div>
    )
}