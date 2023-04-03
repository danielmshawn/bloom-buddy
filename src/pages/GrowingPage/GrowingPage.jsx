import { useEffect, useState } from 'react';

import * as usersAPI from "../../utilities/users-api"


export default function GrowingPage() {

    const [nearbyUsers, setNearbyUsers] = useState([]);

    useEffect(() => {
        async function getNearbyUsers() {
            const users = await usersAPI.nearbyUsers();
            
            setNearbyUsers(users);
        }
        getNearbyUsers();
    }, []);


    // Will each link be a plant, or a page to a "user" that shows what's growing?
    return(
        <>
        <h1>What's Growing?</h1>
        <ul>
            {nearbyUsers.map((user) => (
                <li key={user._id}>{user.name}</li>
            ))}
        </ul>

        </>
    )
}