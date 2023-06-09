import { useState } from "react"
import { useNavigate } from "react-router-dom" 

import * as plantsAPI from '../../utilities/plants-api'

import "./NewPlantPage.css"

export default function NewPlantPage({ plants, setPlants }) {

    const[newPlant, setNewPlant] = useState({
        name: "",
        variety: ""
    })

    const navigate = useNavigate();

    async function addPlant(plant) {
        const newPlant = await plantsAPI.createPlant(plant)
        setPlants([...plants, newPlant])
      }

    function handleSubmit(evt) {
        evt.preventDefault();
        addPlant(newPlant);
        setNewPlant({ name: "", variety: ""})
        navigate('/mygarden')
    }

    function handleChange(evt) {
        setNewPlant({...newPlant, [evt.target.name]: evt.target.value})
    }

    return (
        <>
            <h2>Create A Plant</h2>
            <form onSubmit={handleSubmit}>
                <label>Plant Name:</label>
                <input type="text" name="name" value={newPlant.name} onChange={handleChange}/>
                <label>Plant Variety (optional): </label>
                <input type="text" name="variety" value={newPlant.variety} onChange={handleChange}/>
                <button type="submit">Add Plant to List</button>
            </form>
        </>
    )
}