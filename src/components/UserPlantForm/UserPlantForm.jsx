import { useState } from "react"

import "./UserPlantForm.css"




export default function UserPlantForm({ plant, updateUserPlant }) {

   
    const [userPlantDetails, setUserPlantDetails] = useState({
        seeds: "",
        // What do I put here for datesHarvested?
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
            <form onSubmit={ handleSubmit }>
                <label>Seeds: </label>
                <input
                    type="text"
                    name="seeds"
                    value={ plant.seeds }
                    onChange= { handleChange }
                    placeholder="Where Did You Get Your Seeds?"
                />
                <label>Harvest Date:</label>
               <input type="date" />
               

               
        <button type="submit">Save</button>
        <button style={{backgroundColor:"red"}}>End Plant Life(later)</button>
             </form>
        </div>
    )
}