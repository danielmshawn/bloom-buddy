import { Link } from "react-router-dom"
import './PlantCard.css'

export default function PlantCard({ userPlant }) {

    return (
    
    <Link className="plant-card-link" to={`/plants/${userPlant._id}`} >
        <div className="card">
        <div className="card-image">
        <img src={require('./sprout-plant-card.png')} />
        </div>
        <h2 className="card-title">{userPlant.plant.name}</h2>
        <h3 className="card-subtitle">{userPlant.plant.variety}</h3>
        </div>
    </Link>
    )
}