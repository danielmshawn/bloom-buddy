import { Link } from "react-router-dom"
import './PlantCard.css'

export default function PlantCard({ userPlant }) {

    return (
    
    <Link className="plant-card-link" to={`/plants/${userPlant._id}`} >
        <div className="plant-card">
        <div className="plant-card-image">
        <img src={require('./sprout-plant-card.png')} />
        </div>
        <h2 className="plant-card-title">{userPlant.plant.name}</h2>
        <h3 className="plant-card-subtitle">{userPlant.plant.variety}</h3>
        </div>
    </Link>
    )
}