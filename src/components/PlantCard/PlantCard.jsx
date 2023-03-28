import { Link } from "react-router-dom"
import './PlantCard.css'

export default function PlantCard({ plant }) {

    return (
        <div className ="card-grid">
        <div className ="plant-card">
            <Link to={`/plants/${plant.id}`} >
        <h3>{plant.type}</h3>
        </Link>
        </div>
        </div>

    )
}