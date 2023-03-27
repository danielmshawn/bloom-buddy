
import { useState, useEffect } from 'react'
import * as plantsAPI from '../../utilities/plants-api'
import PlantCard from '../../components/PlantCard/PlantCard'


export default function MyGardenPage() {
  const [plants, setPlants] = useState([]);
 
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
      <button> Add A Plant </button>
    </>
  );
}