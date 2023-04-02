import { Link } from "react-router-dom"
import './PlantCard.css'

export default function PlantCard({ userPlant }) {

    return (
    
    <Link to={`/plants/${userPlant._id}`} >
        <div class="card">
        <div class="card-image">
        <img src={require('./sprout-plant-card.png')} />
        </div>
        <h2 class="card-title">{userPlant.plant.name}</h2>
        <h3 class="card-subtitle">{userPlant.plant.variety}</h3>
        </div>
    </Link>
    
    
  

    )
}