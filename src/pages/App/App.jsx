import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import NavBar from '../../components/NavBar/NavBar';
import MyGardenPage from '../MyGardenPage/MyGardenPage';
import GrowingPage from '../GrowingPage/GrowingPage';
import PlantDetailPage from '../PlantDetailPage/PlantDetailPage'
import * as plantsAPI from '../../utilities/plants-api'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [plants, setPlants] = useState([]);

  useEffect(function() {
    async function getPlants() {
      const allPlants = await plantsAPI.getAllPlants();
      setPlants(allPlants)
    }
    getPlants();
  }, [])

  

  return (
    <main className="App">
      
      { user ?
        <>
        <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/mygarden" element={<MyGardenPage plants={plants} setPlants={setPlants} />} />
              <Route path="/growing" element={<GrowingPage />} />
              <Route 
                path="/plants/:plantID"
                element={<PlantDetailPage plants={plants} />} 
              />
            </Routes>
            </>
            :
            <>
            <WelcomePage />
            <AuthPage setUser={setUser} />
            </>
      }
    </main>
  );
}
