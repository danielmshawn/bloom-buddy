import { useState } from "react"
import { useParams } from "react-router-dom"

import * as userPlantsAPI from '../../utilities/userPlants-api'

import EditPlantForm from "../../components/EditPlantForm/EditPlantForm"



export default function PlantDetailPage({ myPlants }) {


    const { userPlantID } = useParams();
    const plant = myPlants.find((p) => p._id === userPlantID)

    const [showUserPlantForm, setShowUserPlantForm] = useState(false)
    const [userPlants, setUserPlants] = useState({
        seeds: "",
        harvestDate: []
    });

    async function updateUserPlant(userPlantData) {
        const updatedData = {
            seeds: userPlantData.seeds,
            datesHarvested: userPlantData.datesHarvested
        }
        const userPlant = await userPlantsAPI.updateUserPlant(userPlantData._id, updatedData);
        setUserPlants([userPlant]);
      }

    return (

    <div className="userPlantDetails">
        <div>
            <h1>{plant.plant.name}</h1>
            <h3>{plant.plant.variety}</h3>
            <p>Seeds: {plant.seeds}</p>
            <p>Date Planted: {plant.datePlanted}</p>
            
            <ul>Date(s) Harvested
                <li>Dates go here</li>
                <li>Dates go here</li>
            </ul>
            <button onClick={() => setShowUserPlantForm(!showUserPlantForm)}>Edit/Update</button>
        </div>
        { showUserPlantForm && (
            <EditPlantForm plant={plant} updateUserPlant={updateUserPlant} />
        )}
        


    </div>

    )
}