
import { useState, useEffect } from 'react'
import * as plantsAPI from '../../utilities/plants-api'
import PlantCard from '../../components/PlantCard/PlantCard'
import NewPlantForm from '../../components/NewPlantForm/NewPlantForm'


export default function MyGardenPage() {

  const [plants, setPlants] = useState([]);
  const [showPlantForm, setShowPlantForm] = useState(false);
 
  useEffect(function() {
    async function getPlants() {
      const plants = await plantsAPI.getAll();
      setPlants(plants);
    }
    getPlants();
  }, [])
  
  const plantList = plants.map((plant, idx) => {
    <PlantCard plant={plant} key={idx} />
  });
  
  return (
    <>
      <h1>My Garden</h1>
      {/* Turn this into a la hide or show skills or whatever it was. */}
      {/* Clicking add a plant will reveal a form with a submit button */}
      <div>{ plantList }</div>
      <button onClick={() => setShowPlantForm(!showPlantForm)}>{showPlantForm ? 'Cancel' : 'Add A Plant' } </button>
      { showPlantForm ?
       <NewPlantForm />
      :
      <>
      </>

      }
    </>
  );
}