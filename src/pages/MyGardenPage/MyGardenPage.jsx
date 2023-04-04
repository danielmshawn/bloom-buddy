
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as plantsAPI from '../../utilities/plants-api'
import PlantCard from '../../components/PlantCard/PlantCard'

import "./MyGardenPage.css"


export default function MyGardenPage({getMyPlants, myPlants, setMyPlants, user}) {

  const [selectedAvailablePlantId, setSelectedAvailablePlantId] = useState(null);
  const [availablePlants, setAvailablePlants] = useState([]);
  const latitude = user.location.coordinates[1];
  const longitude = user.location.coordinates[0];

  useEffect(function() {
    async function getAvailablePlants() {
      const plants = await plantsAPI.getAvailablePlants();
      setAvailablePlants(plants);
    }
    getAvailablePlants();
  }, [user, myPlants]);
 
  useEffect(function() {
    if (!availablePlants.length) return;
    setSelectedAvailablePlantId(availablePlants[0]._id);
  }, [availablePlants]);
  
  async function addToUser() {
    const updatedMyPlants =  await plantsAPI.addToUser(selectedAvailablePlantId);
    setMyPlants(updatedMyPlants);
  }

  const plantList = myPlants.map((plant) => (
    <PlantCard userPlant={plant} />
  ));
    
  return (
    <>
      <div className="my-garden-location">
        <iframe
          loading="lazy" 
          src={`https://www.google.com/maps/embed/v1/place?q=${latitude},+${longitude}&key=AIzaSyCpvZzB15LTJzCdVjVT6NkQYkIp0hvPIek`}
        />
      </div>
      
      <h1 className="flower-power-font">My Garden</h1>

      <div className="plant-form">
        <div className="add-plant">
          <select className="select" value={selectedAvailablePlantId} onChange={(evt) => setSelectedAvailablePlantId(evt.target.value) }  >
            { !availablePlants.length && <option value="">-- No Available Plants --</option>}
            { availablePlants.map(p =>( 
            <option value={p._id} key={p._id}>
            {p.name} {p.variety !== "" ? `-- ${p.variety}` : ""}
            </option>)
            )}
          </select>
          <button onClick={addToUser} disabled={!availablePlants.length}>Add Plant to Garden</button>
        </div>
        <div className="bar"></div>
        <div className="create-plant">
          <Link className="button" to="/plants/new" style={{backgroundColor: "#fa7451"}}> Create A New Plant </Link>
        </div>
      </div>
      <div className="cards-container">
        {plantList}
      </div>     
    </>
  );
}