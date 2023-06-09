import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import NavBar from '../../components/NavBar/NavBar';
import MyGardenPage from '../MyGardenPage/MyGardenPage';
import NewPlantPage from '../NewPlantPage/NewPlantPage'
import GrowingPage from '../GrowingPage/GrowingPage';
import PlantDetailPage from '../PlantDetailPage/PlantDetailPage'
import * as plantsAPI from '../../utilities/plants-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  
  useEffect(function() {
    if (!user) return;
    async function getMyPlants() {
      const userPlants = await plantsAPI.getMyPlants();
      setMyPlants(userPlants);
    }
    getMyPlants();
  }, [user]);
  
  return (
    <main className="App">
      
      { user ?
        <>
        <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/mygarden" element={<MyGardenPage myPlants={myPlants} setMyPlants={setMyPlants} user={user} />} />
              <Route path="/plants/new" element={<NewPlantPage plants={plants} setPlants={setPlants}/>} />
              <Route path="/plants/:userPlantId" element={<PlantDetailPage myPlants={myPlants} setMyPlants={setMyPlants} />} />
              <Route path="/growing" element={<GrowingPage />} />
              <Route path="*" element={<Navigate to="/mygarden" />} />
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
