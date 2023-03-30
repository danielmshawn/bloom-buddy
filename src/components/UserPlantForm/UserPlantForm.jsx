import { useState } from "react"

import "./UserPlantForm.css"




export default function UserPlantForm({ plant }) {

    const [plantedDate, setPlantedDate] = useState("")

    return (
        <div className="userPlantForm">
            <h2>UserPlant Form</h2>
            <form >
                <div className="plantedDatePicker">
                    <label>Date Planted: </label>
                    <input type="date" />
                </div>
                <label>Seeds: </label>
                <input type="text" placeholder="Where Did You Get Your Seeds?" />
               
        <button>Save</button>
        <button style={{backgroundColor:"red"}}>End Plant Life</button>
             </form>
        </div>
    )
}