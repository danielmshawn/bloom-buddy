import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import * as userPlantsAPI from '../../utilities/userPlants-api'

import EditPlantForm from "../../components/EditPlantForm/EditPlantForm"

import "./PlantDetailPage.css"


export default function PlantDetailPage({ myPlants, setMyPlants }) {

    
    const { userPlantId } = useParams();
    const plant = myPlants.find((p) => p._id === userPlantId)
    
    const navigate = useNavigate();
    
    const [showUserPlantForm, setShowUserPlantForm] = useState(false);
      

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
        console.log("DeleteUserPlant Ran");
        await userPlantsAPI.deleteUserPlant(userPlantId);
        const updatedMyPlants = myPlants.filter((p) => p._id !== userPlantId);
        setMyPlants(updatedMyPlants);
        navigate("/mygarden");
    }
    
   
    return (
      

        <>
            <div className="plant-details-card">
                <h1>{plant.plant.name}</h1>
                <h2>{plant.plant.variety}</h2>
                <hr />
                {plant.seeds === "" ? (
                    <p>Click "Edit/Update" to Add Seeds</p>
                ) : (
                    <p>Seeds: {plant.seeds}</p>
                )}
                <p>Date Planted: {new Date(plant.datePlanted).toLocaleDateString()}</p>
                {plant.datesHarvested.length ? (
                    <ul>
                        Date(s) Harvested:
                        {plant.datesHarvested.map((date, index) => (
                            <li key={index}>{new Date(date).toLocaleDateString()}</li>
                        ))}
                    </ul>
                ) : (
                    <p>
                        No Dates Harvested Yet!
                        <br />
                        Click "Edit/Update" to add a Harvest Date
                    </p>
                )}
        </div>

            <button onClick={() => setShowUserPlantForm(!showUserPlantForm)}>Edit/Update</button>
        { showUserPlantForm && (
            <EditPlantForm plant={plant} updateUserPlant={updateUserPlant} userPlantId={userPlantId} setShowUserPlantForm={setShowUserPlantForm}/>
        )}

        <button style={{backgroundColor: "red"}}onClick={() => deleteUserPlant(userPlantId)}>DELETE Plant</button>
   </>

    )
}