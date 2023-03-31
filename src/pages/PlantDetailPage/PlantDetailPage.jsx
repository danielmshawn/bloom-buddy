import { useState } from "react"
import { useParams } from "react-router-dom"

import * as plantsAPI from '../../utilities/plants-api'

import HarvestDateForm from "../../components/HarvestDateForm/HarvestDateForm"
import UserPlantForm from "../../components/UserPlantForm/UserPlantForm"



export default function PlantDetailPage({ myPlants }) {


    const { userPlantID } = useParams();
    const plant = myPlants.find((p) => p._id === userPlantID)

    const [userPlants, setUserPlants] = useState(null);

    async function updateUserPlant(userPlantData) {
        const userPlant = await plantsAPI.updateUserPlant(userPlantData);
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
            <HarvestDateForm plant={plant} />
        </div>

        <UserPlantForm plant={plant} updateUserPlant={updateUserPlant}/>
        


    </div>

    )
}