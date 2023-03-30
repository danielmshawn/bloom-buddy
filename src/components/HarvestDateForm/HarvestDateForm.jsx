import { useState } from "react"
import DatePicker from "react-datepicker";

export default function HarvestDateForm() {
    
    const [harvestDate, setHarvestDate] = useState("")

    return (
        <div>
        <h3>HarvestDateForm</h3>
        <form ></form>
         <DatePicker
            showIcon
            selected={harvestDate}
            onChange={(date) => setHarvestDate(date)}
            autoComplete="off"
        />
        <input type="date" />
        <button type="submit">Add Harvest Date</button>
    
    </div>
    )
}