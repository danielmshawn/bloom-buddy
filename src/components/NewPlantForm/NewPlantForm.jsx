import { useState } from "react"

export default function NewPlantForm({ addPlant, setShowPlantForm }) {

    const [newPlant, setNewPlant] = useState({
        // What does this say now? 

        // type: ""
        // datePlanted: null,
        // location: "",
    })


    function handleSubmit(evt) {
        evt.preventDefault();
        addPlant(newPlant);
        // SO bewlow isn't right anymore? 
        setNewPlant({type:""})
        // How to make this only if plant submitted is valid, THEN collapse form? 
        setShowPlantForm(false);
    }

    function handleChange(evt) {
        setNewPlant({...newPlant, [evt.target.name]: evt.target.value})
    }



    return (
        <>
        <h2>New Plant Form</h2>
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="type"
            value={newPlant.type}
            placeholder="Enter plant type/name"
            onChange={handleChange}
        />
        {/* This submit button needs to make this form disappear again somehow */}
        <button type="submit">ADD PLANT</button>
        </form>
        </>



    )
}