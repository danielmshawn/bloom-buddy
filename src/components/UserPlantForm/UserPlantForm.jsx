import { useState } from "react"
import DatePicker from "react-datepicker";

import "./UserPlantForm.css"
import "react-datepicker/dist/react-datepicker.css";



export default function UserPlantForm({ plant }) {

    const [plantedDate, setPlantedDate] = useState("")

    return (
        <div className="userPlantForm">
            <h2>UserPlant Form</h2>
            <form>
                <div className="plantedDatePicker">
                    <label>Date Planted: </label>
                    <DatePicker selected={plantedDate} onChange={(date) => setPlantedDate(date)} autoComplete="off"/>
                </div>
                <label>Seeds: </label>
                <input type="text" placeholder="Where Did You Get Your Seeds?" />
               
        <button>Save</button>
        <button style={{backgroundColor:"red"}}>End Plant Life</button>
             </form>
        </div>
    )
}