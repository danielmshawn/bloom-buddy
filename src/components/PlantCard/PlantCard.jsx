import { Link } from "react-router-dom"
import './PlantCard.css'

export default function PlantCard({ userPlant }) {

    return (
    
            <Link to={`/plants/${userPlant._id}`} >
        <div className ="plant-card">
        <h3>{userPlant.plant.name} </h3>
        </div>
        </Link>
    )
}