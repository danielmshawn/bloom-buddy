import { useEffect, useState } from 'react';

import * as usersAPI from "../../utilities/users-api"

import "./GrowingPage.css"

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
        <h2>BloomBuddies Closest To You</h2>
       <table className="user-table">
            <thead>
                <tr>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>
                {nearbyUsers.map((user) => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}