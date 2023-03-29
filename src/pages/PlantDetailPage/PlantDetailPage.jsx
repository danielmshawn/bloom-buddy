import { useParams } from "react-router-dom"

export default function PlantDetailPage({ plants }) {
    const { plantID } = useParams();
    // const plant = 
    return (
 <iframe
    width="600"
    height="450"
    style="border:0"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDQx1ChrdX84URko4J7MYhZjWz_yiBvDlY&q=Space+Needle,Seattle+WA">
</iframe>
    )
}