
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as plantsAPI from '../../utilities/plants-api'
import PlantCard from '../../components/PlantCard/PlantCard'


export default function MyGardenPage({ plants, setPlants }) {

 
  const [selectedAvailablePlant, setSelectedAvailablePlant] = useState(null);
  const [availablePlants, setAvailablePlants] = useState([]);

  useEffect(function() {
    async function getAvailablePlants() {
      const plants = await plantsAPI.getAvailablePlants();
      setAvailablePlants(plants);
    }
    getAvailablePlants();
  }, [])
 
  useEffect(function() {
    if (!availablePlants.length) return;
    setSelectedAvailablePlant(availablePlants[0]._id);
  }, [availablePlants])
  
  const plantList = plants.map((plant, idx) => (
    <PlantCard plant={plant} key={idx} />
  ));
    
  return (
    <>
      <h1>My Garden</h1>
      <div>{plantList}</div>

      <select value={selectedAvailablePlant} onChange={(evt) => setSelectedAvailablePlant(evt.target.value) }  >
        { !availablePlants.length && <option value="">-- No Available Plants --</option>}
        { availablePlants.map(p => <option value={p._id} key={p._id} >{p.name}</option>) }
      </select>
      <button disabled={!availablePlants.length}>Add Plant to Garden</button>
      &nbsp; | &nbsp;
      <Link className="button" to="/plants/new"> Create A New Plant </Link> 
    </>
  );
}


// <NewPlantForm  addPlant = {addPlant} setShowPlantForm={setShowPlantForm} /> 
// async function addPlant(plant) {
//   const newPlant = await plantsAPI.createPlant(plant)
//   setPlants([...plants, newPlant])
// }