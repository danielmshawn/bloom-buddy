import sendRequest from "./send-request"

export async function updateUserPlant(id, userPlantData) {
   return sendRequest(`/api/userplants/${id}`, "PUT", userPlantData) 
}