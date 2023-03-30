import { useState } from "react"

export default function HarvestDateForm() {
    
    const [harvestDate, setHarvestDate] = useState("")

    return (
        <div>
        <h3>HarvestDateForm</h3>
        <form ></form>
        <input type="date" />
        <button type="submit">Add Harvest Date</button>
    
    </div>
    )
}