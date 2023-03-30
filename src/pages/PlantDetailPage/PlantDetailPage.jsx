import { useState } from "react"
import { useParams } from "react-router-dom"

import HarvestDateForm from "../../components/HarvestDateForm/HarvestDateForm"
import UserPlantForm from "../../components/UserPlantForm/UserPlantForm"



export default function PlantDetailPage({ myPlants }) {


    const { userPlantID } = useParams();
    const plant = myPlants.find((p) => p._id === userPlantID)


    return (

    <div className="userPlantDetails">
        <div>
            <h1>{plant.plant.name}</h1>
            <h3>{plant.plant.variety}</h3>
            <p>Seeds:</p>
            <p>Date Planted: {plant.datePlanted}</p>
            <ul>Date(s) Harvested
            <li>Dates go here</li>
            <li>Dates go here</li>
        </ul>
            <HarvestDateForm />
        </div>

        <UserPlantForm plant={plant}/>
        


    </div>

    )
}