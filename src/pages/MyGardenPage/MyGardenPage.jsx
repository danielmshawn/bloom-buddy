
import { useState } from 'react'
import * as plantsAPI from '../../utilities/plants-api'
import PlantCard from '../../components/PlantCard/PlantCard'
import NewPlantForm from '../../components/NewPlantForm/NewPlantForm'


export default function MyGardenPage({ plants, setPlants }) {

 
  const [showPlantForm, setShowPlantForm] = useState(false);
 
  
  async function addPlant(plant) {
    const newPlant = await plantsAPI.createPlant(plant)
    setPlants([...plants, newPlant])
  }
  
  const plantList = plants.map((plant, idx) => (
    <PlantCard plant={plant} key={idx} />
  ));
  
  return (
    <>
      <h1>My Garden</h1>
      <div>{plantList}</div>
      <button onClick={() => setShowPlantForm(!showPlantForm)}>{showPlantForm ? 'Cancel' : 'Add A Plant' } </button>
      { showPlantForm ?
       <NewPlantForm  addPlant = {addPlant} />
      :
      <>
      </>

      }
    </>
  );
}