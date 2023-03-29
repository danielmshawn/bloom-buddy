
import { useState, useEffect } from 'react'
import * as plantsAPI from '../../utilities/plants-api'
import PlantCard from '../../components/PlantCard/PlantCard'
import NewPlantForm from '../../components/NewPlantForm/NewPlantForm'


export default function MyGardenPage({ plants, setPlants }) {

 
  const [availablePlants, setAvailablePlants] = useState([]);

  useEffect(function() {
    async function getAvailablePlants() {
      const plants = await plantsAPI.getAvailablePlants();
      setAvailablePlants(plants);
    }
    getAvailablePlants();
  }, [])
 
  
  
  const plantList = plants.map((plant, idx) => (
    <PlantCard plant={plant} key={idx} />
    ));
    
  return (
    <>
      <h1>My Garden</h1>
      <div>{plantList}</div>
      <button> Create A New Plant  </button>
    </>
  );
}


// <NewPlantForm  addPlant = {addPlant} setShowPlantForm={setShowPlantForm} /> 
// async function addPlant(plant) {
//   const newPlant = await plantsAPI.createPlant(plant)
//   setPlants([...plants, newPlant])
// }