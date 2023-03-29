import { Link } from "react-router-dom"
import './PlantCard.css'

export default function PlantCard({ userPlant }) {

    return (
        <div className ="card-grid">
        <div className ="plant-card">
            <Link to={`/plants/${userPlant.id}`} >
        <h3>{userPlant.type}</h3>
        </Link>
        </div>
        </div>

    )
}