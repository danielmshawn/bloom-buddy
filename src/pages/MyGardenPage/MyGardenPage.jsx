
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as plantsAPI from '../../utilities/plants-api'
import PlantCard from '../../components/PlantCard/PlantCard'


export default function MyGardenPage({getMyPlants, myPlants, setMyPlants, user}) {

  const [selectedAvailablePlantId, setSelectedAvailablePlantId] = useState(null);
  const [availablePlants, setAvailablePlants] = useState([]);

  useEffect(function() {
    async function getAvailablePlants() {
      const plants = await plantsAPI.getAvailablePlants();
      setAvailablePlants(plants);
    }
    getAvailablePlants();
  }, []);
 
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
      <h1>My Garden</h1>
      <div>{plantList}</div>

      <select className="select" value={selectedAvailablePlantId} onChange={(evt) => setSelectedAvailablePlantId(evt.target.value) }  >
        { !availablePlants.length && <option value="">-- No Available Plants --</option>}
        { availablePlants.map(p => <option value={p._id} key={p._id} >{p.name} -- Variety:{p.variety}</option>) }
      </select>
      <button onClick={addToUser} disabled={!availablePlants.length}>Add Plant to Garden</button>
      &nbsp; | &nbsp;
      <Link className="button" to="/plants/new"> Create A New Plant </Link> 
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <iframe width="600" height="450" style={{border: "1"}} loading="lazy" allowFullScreen
src={`https://www.google.com/maps/embed/v1/place?q=${user.latitude},+${user.longitude}&key=AIzaSyCpvZzB15LTJzCdVjVT6NkQYkIp0hvPIek`}></iframe>
    </>
  );
}