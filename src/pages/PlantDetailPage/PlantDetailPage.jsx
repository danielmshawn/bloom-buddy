import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import * as userPlantsAPI from '../../utilities/userPlants-api'

import EditPlantForm from "../../components/EditPlantForm/EditPlantForm"


export default function PlantDetailPage({ myPlants, setMyPlants }) {


    const { userPlantId } = useParams();
    const plant = myPlants.find((p) => p._id === userPlantId)
    

    const [showUserPlantForm, setShowUserPlantForm] = useState(false)

    const navigate = useNavigate();

    async function updateUserPlant(userPlantId, userPlantData) {
        const updatedData = {
            seeds: userPlantData.seeds,
            datesHarvested: userPlantData.datesHarvested
        }
        console.log(userPlantData, "Line 25 userPlantData");
        const userPlant = await userPlantsAPI.updateUserPlant(userPlantId, updatedData);
    
        setMyPlants([userPlant]);
    }

    async function deleteUserPlant(userPlantId) {
        await userPlantsAPI.deleteUserPlant(userPlantId);
        const updatedMyPlants = myPlants.filter((p) => p._id !== userPlantId);
        setMyPlants(updatedMyPlants);
       
        navigate("/mygarden");
    }

    return (

    <div className="userPlantDetails">
        <div>
            { console.log(plant) } 
                        <h1>{plant.plant.name}</h1>
            <h3>{plant.plant.variety}</h3>
            <p>Seeds: {plant.seeds}</p>
            <p>Date Planted: {plant.datePlanted}</p>
            
            <ul>
                Date(s) Harvested:
                {plant.datesHarvested.map((date, index) => (
                    <li key={index}>{date}</li>
                ))}
            </ul>

            <button onClick={() => setShowUserPlantForm(!showUserPlantForm)}>Edit/Update</button>
        </div>
        { showUserPlantForm && (
            <EditPlantForm plant={plant} updateUserPlant={updateUserPlant} userPlantId={userPlantId} />
        )};

        <button onClick={() => deleteUserPlant(userPlantId)}>DELETE Plant</button>


    </div>

    )
}